import fs from "node:fs";
import path from "node:path";
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
