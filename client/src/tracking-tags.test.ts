import fs from "node:fs";
import path from "node:path";
import { Window } from "happy-dom";
import { describe, expect, it } from "vitest";

/**
 * Guards the tracking tags in the SPA shell. After `vite build`,
 * scripts/prerender-routes.mjs copies this file into index.html, 404.html and
 * every locale page, so these counts hold for every HTML file that ships.
 */
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
const head = html.slice(0, html.indexOf("</head>"));
const count = (haystack: string, needle: string) =>
  haystack.split(needle).length - 1;

const NANCY_POSTHOG_TOKEN = "phc_tidb5pyk3fbAfNR4jRPdBFQKYgPSH4opmbmPtzsz9Bdd";
const BRIDGE_TAG =
  '<script data-cfasync="false" defer src="https://sub.hellonancy.com/bridge/v1.js"></script>';

describe("client/index.html tracking tags", () => {
  it("includes one local Triple Whale installer in the shell copied to every locale", () => {
    expect(count(head, 'src="/nancy-triplewhale.js"')).toBe(1);
    expect(count(html, 'src="/nancy-triplewhale.js"')).toBe(1);
    expect(fs.existsSync(path.resolve(__dirname, "../public/nancy-triplewhale.js"))).toBe(true);
  });

  it("includes one local Snapchat installer in the shell copied to every locale", () => {
    expect(count(head, 'src="/nancy-snapchat.js"')).toBe(1);
    expect(count(html, 'src="/nancy-snapchat.js"')).toBe(1);
    expect(fs.existsSync(path.resolve(__dirname, "../public/nancy-snapchat.js"))).toBe(true);
  });

  it("loads the Hello Nancy bridge exactly once, verbatim, in <head>", () => {
    expect(count(html, "sub.hellonancy.com/bridge/v1.js")).toBe(1);
    expect(count(head, BRIDGE_TAG)).toBe(1);
  });

  it("initialises PostHog exactly once, for the Nancy project, in <head>", () => {
    expect(count(html, "posthog.init(")).toBe(1);
    expect(count(head, "posthog.init(")).toBe(1);
    expect(head).toContain(`var PH_TOKEN = '${NANCY_POSTHOG_TOKEN}';`);
    expect(head).toContain("api_host: 'https://us.i.posthog.com'");
    expect(html.match(/phc_[A-Za-z0-9]+/g)).toEqual([NANCY_POSTHOG_TOKEN]);
  });

  it("adds no second store-link rewriter (link-attribution.ts owns that)", () => {
    // Two href rewriters on one page can ping-pong through MutationObservers.
    expect(html).not.toContain("NancyStoreAttribution");
  });

  it("keeps the shape scripts/prerender-routes.mjs requires", () => {
    expect(count(html, '<html lang="en">')).toBe(1);
    expect(count(html, "</head>")).toBe(1);
    expect(html).not.toContain('rel="canonical"');
  });
});

/**
 * Taboola click_cta (account 2143240). The inline block in index.html is run
 * here in a fresh happy-dom window per test, so nothing reaches Taboola.
 */
describe("Taboola click_cta", () => {
  const block = html.match(/\/\* click_cta:begin \*\/([\s\S]*?)\/\* click_cta:end \*\//);

  function setup(hrefs: Record<string, string>) {
    const win = new Window({ url: "https://modernwellnessinsider.com/de" });
    const doc = win.document;
    doc.body.innerHTML = Object.entries(hrefs)
      .map(([id, href]) => `<a id="${id}" href="${href}"><span id="${id}-in">x</span></a>`)
      .join("");
    new win.Function("window", "document", block![1] + "; (function(){})")(win, doc);
    const tfa = () => ((win as any)._tfa ?? []) as unknown[];
    const fire = (id: string, type: string, button: number, inner = false) =>
      doc
        .getElementById(inner ? `${id}-in` : id)!
        .dispatchEvent(new win.MouseEvent(type, { bubbles: true, cancelable: true, button }));
    return { win, doc, tfa, fire };
  }

  const EXPECTED = [{ notify: "event", name: "click_cta", id: 2143240 }];

  it("is a single block, pushes the exact payload, and adds no second loader or 2079308 copy", () => {
    expect(block).not.toBeNull();
    expect(count(html, "name: 'click_cta'")).toBe(1);
    expect(count(html, "id: 2143240")).toBe(1);
    expect(count(html, "cdn.taboola.com/libtrc")).toBe(1);
    expect(count(html, "tb_tfa_script")).toBe(1); // the one loader
    expect(count(html, "name: 'page_view', id: 2079308")).toBe(1);
  });

  it("fires once for store links, including decorated hrefs and clicks on a child element", () => {
    const s = setup({
      a: "https://hellonancy.com/products/lem",
      b: "https://hellonancy.com/en-jp/products/lem?utm_source=taboola&tblci=X&hn_at=1&_gl=2",
      c: "https://sub.hellonancy.com/go/lem?x=1",
      d: "https://get.nancyflow.com/products/lem",
      e: "https://shop.hellonancy.com/",
    });
    for (const id of ["a", "b", "c", "d", "e"]) s.fire(id, "click", 0, true);
    expect(s.tfa()).toEqual([...EXPECTED, ...EXPECTED, ...EXPECTED, ...EXPECTED, ...EXPECTED]);
  });

  it("fires on middle-click (auxclick button 1) but not right-click, even when auxclick fires for it", () => {
    const s = setup({ a: "https://hellonancy.com/products/lem" });
    s.fire("a", "auxclick", 1);
    expect(s.tfa()).toEqual(EXPECTED);
    s.fire("a", "auxclick", 2);
    s.fire("a", "contextmenu", 2);
    s.fire("a", "click", 2);
    s.fire("a", "pointerdown", 0);
    s.fire("a", "mouseover", 0);
    expect(s.tfa()).toEqual(EXPECTED);
  });

  it("ignores non-CTA links", () => {
    const s = setup({
      anchor: "#reviews",
      article: "/de",
      legal: "https://hellonancy.com/policies/privacy-policy",
      legal2: "https://sub.hellonancy.com/policies/terms-of-service",
      home: "https://hellonancy.com/",
      mail: "mailto:care@hellonancy.com",
      tel: "tel:+4412345",
      social: "https://www.instagram.com/hellonancy",
      evil: "https://evil.com/products/lem?to=hellonancy.com",
      evil2: "https://hellonancy.com.evil.com/products/lem",
    });
    for (const id of Object.keys({ anchor: 1, article: 1, legal: 1, legal2: 1, home: 1, mail: 1, tel: 1, social: 1, evil: 1, evil2: 1 }))
      s.fire(id, "click", 0);
    expect(s.tfa()).toEqual([]);
  });

  it("survives SPA handlers that stopPropagation/preventDefault, and never preventDefaults itself", () => {
    const s = setup({ a: "https://hellonancy.com/products/lem" });
    s.doc.getElementById("a")!.addEventListener("click", (e: any) => {
      e.stopPropagation();
      e.preventDefault();
    });
    s.fire("a", "click", 0);
    expect(s.tfa()).toEqual(EXPECTED);

    const t = setup({ a: "https://hellonancy.com/products/lem" });
    let prevented = true;
    t.win.addEventListener("click", (e: any) => (prevented = e.defaultPrevented));
    t.fire("a", "click", 0);
    expect(prevented).toBe(false);
  });

  it("guards double install and double delivery of the same event", () => {
    const s = setup({ a: "https://hellonancy.com/products/lem" });
    new s.win.Function("window", "document", block![1])(s.win, s.doc); // install again
    s.fire("a", "click", 0);
    expect(s.tfa()).toEqual(EXPECTED);
  });

  it("pushes into an existing _tfa queue without replacing it", () => {
    const win = new Window({ url: "https://modernwellnessinsider.com/" });
    (win as any)._tfa = [{ notify: "event", name: "page_view", id: 2079308 }];
    win.document.body.innerHTML = '<a href="https://hellonancy.com/products/lem">x</a>';
    new win.Function("window", "document", block![1])(win, win.document);
    win.document.querySelector("a")!.dispatchEvent(new win.MouseEvent("click", { bubbles: true, button: 0 }));
    expect((win as any)._tfa).toEqual([{ notify: "event", name: "page_view", id: 2079308 }, ...EXPECTED]);
  });
});
