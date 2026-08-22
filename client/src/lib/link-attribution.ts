/**
 * link-attribution.ts
 *
 * Carries ad-attribution parameters from this advertorial's landing URL across
 * the handoff to the Hello Nancy store, so a visitor who arrived on
 * `modernwellnessinsider.com/de?utm_source=taboola&tblci=…` lands on
 * `hellonancy.com/products/lem?utm_source=taboola&tblci=…`.
 *
 * Without this, every paid click loses its source the moment the visitor
 * leaves the advertorial, and the store attributes the order to direct traffic.
 *
 * Design notes
 * ------------
 * - **Allowlist, not passthrough.** Only `utm_*` and known click identifiers
 *   travel. Arbitrary visitor-supplied query params are never forwarded onto
 *   another origin. Mirrors `param-passthrough.js` on the Nancyflow bridge.
 * - **Additive only.** Params already present on the destination URL always
 *   win, and nothing on the destination is removed. This is what keeps the
 *   gtag cross-domain linker's `_gl` (see index.html) intact — it decorates
 *   the same anchors at click time.
 * - **First touch is remembered** in sessionStorage, so attribution survives an
 *   in-page redirect (`NotFound` bounces to `/` and drops the query string) or
 *   a param-less reload during the same visit.
 * - **Anchors are patched, not intercepted.** Rewriting `href` in place keeps
 *   middle-click, ⌘-click and "copy link address" carrying attribution too,
 *   which a `preventDefault()` + `location.assign()` interceptor would break.
 */

/** Click identifiers worth carrying. `utm_*` is matched by prefix separately. */
const TRACKING_PARAMS = new Set([
  "tblci", // Taboola
  "taboola_click_id",
  "fbclid", // Meta
  "gclid", // Google Ads
  "gbraid",
  "wbraid",
  "dclid",
  "gclsrc",
  "gad_source",
  "msclkid", // Microsoft
  "ttclid", // TikTok
  "twclid", // X
  "li_fat_id", // LinkedIn
  "sccid", // Snapchat
  "rdt_cid", // Reddit
  "epik", // Pinterest
  "obclid", // Outbrain
  "irclickid", // Impact
  "ref",
  "affiliate",
]);

const UTM_PREFIX = "utm_";
const STORAGE_KEY = "wi_attribution";

/** Keep forwarded URLs sane; a click id is never legitimately this long. */
const MAX_KEY_LENGTH = 64;
const MAX_VALUE_LENGTH = 512;
const MAX_PARAMS = 24;

export type AttributionParams = Record<string, string>;

function isTrackingKey(key: string): boolean {
  const normalized = key.toLowerCase();
  return normalized.startsWith(UTM_PREFIX) || TRACKING_PARAMS.has(normalized);
}

/** Pull the allowlisted params out of a query string, in first-seen order. */
export function collectParams(search: string): AttributionParams {
  const params: AttributionParams = {};
  let count = 0;

  // forEach rather than for…of: the project compiles without downlevelIteration.
  new URLSearchParams(search).forEach((value, key) => {
    if (count >= MAX_PARAMS) return;
    if (!isTrackingKey(key)) return;
    if (key.length > MAX_KEY_LENGTH || value.length > MAX_VALUE_LENGTH) return;
    // First occurrence wins, matching how servers read repeated params.
    if (key in params) return;
    params[key] = value;
    count++;
  });

  return params;
}

function readStored(): AttributionParams {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      return {};

    const params: AttributionParams = {};
    for (const [key, value] of Object.entries(
      parsed as Record<string, unknown>
    )) {
      if (typeof value === "string" && isTrackingKey(key)) params[key] = value;
    }
    return params;
  } catch {
    // Private browsing, disabled storage, or corrupt JSON — attribution is
    // best-effort and must never break the page.
    return {};
  }
}

function writeStored(params: AttributionParams): void {
  try {
    if (Object.keys(params).length === 0) return;
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
  } catch {
    /* best-effort */
  }
}

/**
 * The params to forward: what is on the URL right now, backfilled with what
 * this session arrived with. The live URL wins so a re-entry through a fresh
 * ad click is not masked by a stale first touch.
 */
export function resolveParams(search: string): AttributionParams {
  const current = collectParams(search);
  const stored = readStored();
  const merged = { ...stored, ...current };

  if (Object.keys(current).length > 0) writeStored(merged);
  return merged;
}

/**
 * True for absolute http(s) URLs whose *host* contains "hellonancy" — so
 * hellonancy.com, www./try. subdomains and any future one all match, while a
 * `mailto:care@hellonancy.com` or an unrelated site with "hellonancy" in its
 * path does not.
 */
export function isHelloNancyUrl(href: string, base: string): boolean {
  try {
    const url = new URL(href, base);
    if (url.protocol !== "https:" && url.protocol !== "http:") return false;
    return url.hostname.toLowerCase().includes("hellonancy");
  } catch {
    return false;
  }
}

/**
 * Return `href` with the attribution params appended. Existing destination
 * params, path and hash are left exactly as authored; non-matching or
 * unparseable hrefs come back untouched.
 */
export function withAttribution(
  href: string,
  params: AttributionParams,
  base: string
): string {
  if (!href || !isHelloNancyUrl(href, base)) return href;

  const keys = Object.keys(params);
  if (keys.length === 0) return href;

  try {
    const url = new URL(href, base);
    let changed = false;

    for (const key of keys) {
      if (url.searchParams.has(key)) continue; // never clobber the destination
      url.searchParams.set(key, params[key]);
      changed = true;
    }

    return changed ? url.toString() : href;
  } catch {
    return href;
  }
}

function patchAnchor(
  anchor: HTMLAnchorElement,
  params: AttributionParams
): void {
  // Read the authored attribute rather than the resolved `.href` property so
  // relative URLs stay relative and the value round-trips unchanged.
  const href = anchor.getAttribute("href");
  if (!href) return;

  const patched = withAttribution(href, params, document.baseURI);
  if (patched !== href) anchor.setAttribute("href", patched);
}

function patchTree(root: ParentNode, params: AttributionParams): void {
  const anchors = root.querySelectorAll<HTMLAnchorElement>(
    'a[href*="hellonancy" i]'
  );
  anchors.forEach(anchor => patchAnchor(anchor, params));
}

let installed = false;

/**
 * Install the passthrough. Idempotent, and safe to call before React mounts —
 * every CTA on these pages is React-rendered, so the MutationObserver below is
 * what actually catches them.
 */
export function installLinkAttribution(): void {
  if (
    installed ||
    typeof window === "undefined" ||
    typeof document === "undefined"
  )
    return;
  installed = true;

  // Read the landing URL first: `NotFound` redirects to "/" on mount and would
  // otherwise wipe the query string before we ever saw it.
  const params = resolveParams(window.location.search);

  const patchDocument = () => patchTree(document, params);
  patchDocument();

  // React renders the CTAs after this module runs, and the sticky bar mounts
  // later still on scroll, so keep watching for anchors.
  if (typeof MutationObserver !== "undefined") {
    new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.type === "attributes") {
          const target = mutation.target as HTMLElement;
          if (target instanceof HTMLAnchorElement) patchAnchor(target, params);
          continue;
        }
        mutation.addedNodes.forEach(node => {
          if (!(node instanceof HTMLElement)) return;
          if (node instanceof HTMLAnchorElement) patchAnchor(node, params);
          patchTree(node, params);
        });
      }
    }).observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href"],
    });
  }

  // Last line of defence: patch on the way out, before navigation happens.
  // `auxclick` covers middle-click and `contextmenu` covers "copy link address".
  const patchFromEvent = (event: Event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const anchor = target.closest("a[href]");
    if (anchor instanceof HTMLAnchorElement) patchAnchor(anchor, params);
  };

  for (const type of ["pointerdown", "click", "auxclick", "contextmenu"]) {
    document.addEventListener(
      type,
      patchFromEvent,
      true /* capture: run before React's handlers */
    );
  }
}
