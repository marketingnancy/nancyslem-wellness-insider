import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { describe, expect, it } from "vitest";

const code = fs.readFileSync(path.resolve(__dirname, "../public/nancy-snapchat.js"), "utf8");
const PIXEL_ID = "87bd92cb-92fc-4d5b-8e1a-f46a989cea9e";

function fixture(overrides: Record<string, unknown> = {}) {
  const inserted: Record<string, unknown>[] = [];
  const windowListeners: Record<string, () => void> = {};
  const documentListeners: Record<string, (event: any) => void> = {};
  const window: any = {
    navigator: {},
    addEventListener: (name: string, callback: () => void) => { windowListeners[name] = callback; },
    ...overrides,
  };
  const document = {
    createElement: () => ({}),
    getElementsByTagName: () => [{ parentNode: { insertBefore: (script: Record<string, unknown>) => inserted.push(script) } }],
    addEventListener: (name: string, callback: (event: any) => void) => { documentListeners[name] = callback; },
  };
  const context = vm.createContext({ window, document });
  const run = () => vm.runInContext(code, context);
  const calls = () => Array.from(window.snaptr?.queue || [], (args: any) => Array.from(args));
  return { window, inserted, windowListeners, documentListeners, run, calls };
}

describe("Snapchat base pixel", () => {
  it("loads the official SDK asynchronously and queues the correct pixel and one PAGE_VIEW", () => {
    const page = fixture();
    page.run();
    expect(page.inserted).toEqual([{ async: true, src: "https://sc-static.net/scevent.min.js" }]);
    expect(page.calls()).toEqual([["init", PIXEL_ID, {}], ["track", "PAGE_VIEW"]]);
    expect(page.window.NancySnapchatPixel.pixelId).toBe(PIXEL_ID);
  });

  it("does not install or send another page view when run twice or consent is granted again", () => {
    const page = fixture();
    page.run();
    page.run();
    page.window.NancySnapchatPixel.setConsent(true);
    page.windowListeners.CookiebotOnAccept();
    expect(page.inserted).toHaveLength(1);
    expect(page.calls()).toHaveLength(2);
  });

  it("reuses an existing snaptr runtime without adding another SDK", () => {
    const calls: unknown[][] = [];
    const page = fixture({ snaptr: (...args: unknown[]) => calls.push(args) });
    page.run();
    expect(page.inserted).toHaveLength(0);
    expect(calls).toEqual([["init", PIXEL_ID, {}], ["track", "PAGE_VIEW"]]);
  });

  it("never loads when Global Privacy Control is enabled, even after a grant", () => {
    const page = fixture({ navigator: { globalPrivacyControl: true } });
    page.run();
    page.window.NancySnapchatPixel.setConsent(true);
    expect(page.inserted).toHaveLength(0);
    expect(page.window.snaptr).toBeUndefined();
  });

  it("waits for Cookiebot marketing permission", () => {
    const page = fixture({ Cookiebot: { consent: { marketing: false } } });
    page.run();
    expect(page.inserted).toHaveLength(0);
    page.window.Cookiebot.consent.marketing = true;
    page.windowListeners.CookiebotOnAccept();
    expect(page.calls()).toEqual([["init", PIXEL_ID, {}], ["track", "PAGE_VIEW"]]);
  });

  it("waits for Shopify marketing permission", () => {
    let allowed = false;
    const page = fixture({ Shopify: { customerPrivacy: { marketingAllowed: () => allowed } } });
    page.run();
    expect(page.inserted).toHaveLength(0);
    allowed = true;
    page.documentListeners.visitorConsentCollected({});
    expect(page.inserted).toHaveLength(1);
  });

  it("honors the existing Nancy marketing-consent event before loading", () => {
    const page = fixture({ Cookiebot: { consent: { marketing: false } } });
    page.run();
    page.documentListeners["nancy:tracking-consent"]({ detail: { marketing: false } });
    page.window.Cookiebot.consent.marketing = true;
    page.windowListeners.CookiebotOnAccept();
    expect(page.inserted).toHaveLength(0);
    page.documentListeners["nancy:tracking-consent"]({ detail: { marketing: true } });
    expect(page.inserted).toHaveLength(1);
    expect(page.calls()).toHaveLength(2);
  });

  it("does not load when a marketing-permission provider throws", () => {
    const page = fixture({ Shopify: { customerPrivacy: { marketingAllowed: () => { throw new Error("unavailable"); } } } });
    page.run();
    expect(page.inserted).toHaveLength(0);
  });
});
