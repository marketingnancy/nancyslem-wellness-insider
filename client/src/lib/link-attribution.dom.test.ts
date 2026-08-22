import { describe, expect, it } from "vitest";
import { installLinkAttribution } from "./link-attribution";

/**
 * Covers the live-page layer: patchAnchor/patchTree, the MutationObserver and
 * the capture-phase listeners. The pure URL helpers are covered separately in
 * link-attribution.test.ts.
 *
 * installLinkAttribution() is deliberately idempotent (a module-level guard),
 * so this file installs exactly ONCE and drives every path through that single
 * install — which is also how the real page behaves.
 */
describe("installLinkAttribution", () => {
  it("patches every CTA the page grows, and nothing else", async () => {
    document.body.innerHTML =
      '<div id="root"></div>' +
      '<a id="pre" href="https://hellonancy.com/products/lem">Shop</a>';
    (
      window as unknown as { happyDOM: { setURL(url: string): void } }
    ).happyDOM.setURL(
      "https://modernwellnessinsider.com/de?utm_source=taboola&tblci=GiC1&variant=42"
    );

    installLinkAttribution();

    // 1. Anchors already in the document at install time.
    const pre = document.getElementById("pre") as HTMLAnchorElement;
    expect(pre.getAttribute("href")).toBe(
      "https://hellonancy.com/products/lem?utm_source=taboola&tblci=GiC1"
    );

    // 2. A React-18-shaped commit: a detached subtree appended into #root,
    //    with the presentational <button> these pages nest inside the <a>.
    const root = document.getElementById("root")!;
    const commit = document.createElement("div");
    commit.innerHTML =
      '<section><a id="obs" href="https://hellonancy.com/en-jp/products/lem">' +
      "<button>Shop Now</button></a></section>";
    root.appendChild(commit);
    await new Promise(resolve => setTimeout(resolve, 0));

    const obs = document.getElementById("obs") as HTMLAnchorElement;
    expect(obs.getAttribute("href")).toBe(
      "https://hellonancy.com/en-jp/products/lem?utm_source=taboola&tblci=GiC1"
    );

    // 3. The capture-phase safety net still resolves the anchor when the event
    //    lands on the nested <button> rather than the <a> itself.
    const button = obs.querySelector("button")!;
    button.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    expect(obs.getAttribute("href")).toBe(
      "https://hellonancy.com/en-jp/products/lem?utm_source=taboola&tblci=GiC1"
    );

    // 4. Non-store links are never rewritten.
    const other = document.createElement("a");
    other.setAttribute("href", "https://example.com/x");
    root.appendChild(other);
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(other.getAttribute("href")).toBe("https://example.com/x");

    // 5. Patching is stable: re-running produces no further href mutations, so
    //    our own writes cannot feed the observer back into a loop.
    let mutations = 0;
    const observer = new MutationObserver(records => {
      mutations += records.length;
    });
    observer.observe(document.documentElement, {
      subtree: true,
      attributes: true,
      attributeFilter: ["href"],
    });
    button.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    await new Promise(resolve => setTimeout(resolve, 0));
    observer.disconnect();
    expect(mutations).toBe(0);
  });
});
