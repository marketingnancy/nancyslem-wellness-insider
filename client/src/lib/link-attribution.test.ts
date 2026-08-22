import { beforeEach, describe, expect, it } from "vitest";
import {
  collectParams,
  isHelloNancyUrl,
  resolveParams,
  withAttribution,
} from "./link-attribution";

const BASE = "https://modernwellnessinsider.com/de";
const PDP = "https://hellonancy.com/products/lem";

describe("collectParams", () => {
  it("keeps utm_* and known click ids", () => {
    expect(
      collectParams(
        "?utm_source=taboola&utm_campaign=lem&tblci=GiC123&gclid=abc"
      )
    ).toEqual({
      utm_source: "taboola",
      utm_campaign: "lem",
      tblci: "GiC123",
      gclid: "abc",
    });
  });

  it("drops params that are not attribution", () => {
    expect(
      collectParams("?variant=42&discount=FREE&redirect=evil.com&q=hi")
    ).toEqual({});
  });

  it("matches keys case-insensitively but preserves the authored casing", () => {
    expect(collectParams("?UTM_Source=Taboola&TBLCI=x")).toEqual({
      UTM_Source: "Taboola",
      TBLCI: "x",
    });
  });

  it("handles an empty, bare or malformed query string", () => {
    expect(collectParams("")).toEqual({});
    expect(collectParams("?")).toEqual({});
    expect(collectParams("?utm_source")).toEqual({ utm_source: "" });
    expect(collectParams("?&&utm_source=x&&")).toEqual({ utm_source: "x" });
  });

  it("keeps the first occurrence of a repeated key", () => {
    expect(collectParams("?utm_source=a&utm_source=b")).toEqual({
      utm_source: "a",
    });
  });

  it("rejects absurdly long keys and values", () => {
    expect(collectParams(`?utm_${"k".repeat(80)}=x`)).toEqual({});
    expect(collectParams(`?utm_source=${"v".repeat(600)}`)).toEqual({});
  });

  it("caps how many params are forwarded", () => {
    const search = Array.from({ length: 40 }, (_, i) => `utm_p${i}=v`).join(
      "&"
    );
    expect(Object.keys(collectParams(`?${search}`)).length).toBe(24);
  });
});

describe("isHelloNancyUrl", () => {
  it("matches the store and any subdomain of it", () => {
    expect(isHelloNancyUrl(PDP, BASE)).toBe(true);
    expect(isHelloNancyUrl("https://try.hellonancy.com/x", BASE)).toBe(true);
    expect(isHelloNancyUrl("http://www.hellonancy.com", BASE)).toBe(true);
    expect(
      isHelloNancyUrl("https://hellonancy.com/en-jp/products/lem", BASE)
    ).toBe(true);
  });

  it("ignores mailto, tel and other non-http schemes", () => {
    expect(isHelloNancyUrl("mailto:care@hellonancy.com", BASE)).toBe(false);
    expect(isHelloNancyUrl("javascript:void(0)", BASE)).toBe(false);
  });

  it("ignores other hosts even when the path mentions hellonancy", () => {
    expect(isHelloNancyUrl("https://evil.com/hellonancy", BASE)).toBe(false);
    expect(isHelloNancyUrl("https://evil.com/?to=hellonancy.com", BASE)).toBe(
      false
    );
    expect(isHelloNancyUrl("/hellonancy", BASE)).toBe(false);
  });

  it("ignores in-page and unparseable hrefs", () => {
    expect(isHelloNancyUrl("#pricing", BASE)).toBe(false);
    expect(isHelloNancyUrl("", BASE)).toBe(false);
  });
});

describe("withAttribution", () => {
  const params = { utm_source: "taboola", tblci: "GiC123" };

  it("appends attribution to a store link", () => {
    expect(withAttribution(PDP, params, BASE)).toBe(
      "https://hellonancy.com/products/lem?utm_source=taboola&tblci=GiC123"
    );
  });

  it("leaves non-store links untouched", () => {
    expect(withAttribution("https://example.com/x", params, BASE)).toBe(
      "https://example.com/x"
    );
    expect(withAttribution("mailto:care@hellonancy.com", params, BASE)).toBe(
      "mailto:care@hellonancy.com"
    );
  });

  it("never overwrites a param the destination already carries", () => {
    const authored = `${PDP}?utm_source=editorial`;
    expect(withAttribution(authored, params, BASE)).toBe(
      "https://hellonancy.com/products/lem?utm_source=editorial&tblci=GiC123"
    );
  });

  it("preserves the gtag cross-domain linker param", () => {
    const decorated = `${PDP}?_gl=1*abc*def`;
    const out = withAttribution(decorated, params, BASE);
    expect(out).toContain("_gl=1*abc*def");
    expect(out).toContain("tblci=GiC123");
  });

  it("keeps the hash at the end", () => {
    expect(withAttribution(`${PDP}#reviews`, params, BASE)).toBe(
      "https://hellonancy.com/products/lem?utm_source=taboola&tblci=GiC123#reviews"
    );
  });

  it("is idempotent, so repeated patching never duplicates params", () => {
    const once = withAttribution(PDP, params, BASE);
    expect(withAttribution(once, params, BASE)).toBe(once);
  });

  it("returns the href unchanged when there is nothing to add", () => {
    expect(withAttribution(PDP, {}, BASE)).toBe(PDP);
  });

  it("encodes values that need it", () => {
    expect(withAttribution(PDP, { utm_campaign: "a b&c" }, BASE)).toBe(
      "https://hellonancy.com/products/lem?utm_campaign=a+b%26c"
    );
  });
});

describe("resolveParams", () => {
  beforeEach(() => window.sessionStorage.clear());

  it("remembers the landing params for the rest of the session", () => {
    expect(resolveParams("?utm_source=taboola&tblci=GiC123")).toEqual({
      utm_source: "taboola",
      tblci: "GiC123",
    });
    // A later param-less page view in the same session still knows the source.
    expect(resolveParams("")).toEqual({
      utm_source: "taboola",
      tblci: "GiC123",
    });
  });

  it("lets a fresh ad click override the remembered source", () => {
    resolveParams("?utm_source=taboola&tblci=GiC123");
    expect(resolveParams("?utm_source=meta&fbclid=xyz")).toEqual({
      utm_source: "meta",
      tblci: "GiC123",
      fbclid: "xyz",
    });
  });

  it("ignores corrupt or non-attribution stored data", () => {
    window.sessionStorage.setItem("wi_attribution", "not json");
    expect(resolveParams("")).toEqual({});

    window.sessionStorage.setItem(
      "wi_attribution",
      JSON.stringify({ variant: "42", n: 1 })
    );
    expect(resolveParams("")).toEqual({});
  });
});
