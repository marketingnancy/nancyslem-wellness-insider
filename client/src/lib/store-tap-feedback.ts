import { useEffect } from "react";

/**
 * store-tap-feedback.ts
 *
 * Instant feedback when a visitor taps a link to the Hello Nancy store.
 *
 * PostHog showed 2,353 sessions in 14 days rage-clicking the store buttons:
 * on mobile the Shopify PDP takes a few seconds to start painting, nothing on
 * the advertorial changes, so people tap again and again. This swaps the
 * button label for "Opening store…" on the first tap and ignores further taps.
 *
 * - Capture phase, so taps inside handlers that stopPropagation (the photo
 *   lightbox) still get feedback.
 * - Passive: never calls preventDefault, so link-attribution.ts (which patches
 *   href at click time) and normal navigation are untouched.
 * - Uses data attributes + CSS (see index.css) instead of rewriting text, so
 *   React's DOM for the button is never mutated.
 * - Resets on bfcache restore (Back button) and after a timeout, in case the
 *   navigation never happens (offline, blocked).
 */

const STORE_HOST = "hellonancy.com";
const RESET_AFTER_MS = 8000;

function clearAll() {
  document.querySelectorAll<HTMLElement>("[data-store-loading]").forEach((el) => {
    delete el.dataset.storeLoading;
    delete el.dataset.storeLoadingText;
    el.style.removeProperty("--store-loading-color");
  });
}

export function installStoreTapFeedback(getLabel: () => string): () => void {
  const onClick = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const anchor = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
    if (!anchor || anchor.target === "_blank") return;
    let host = "";
    try {
      host = new URL(anchor.href).hostname;
    } catch {
      return;
    }
    if (host !== STORE_HOST && !host.endsWith(`.${STORE_HOST}`)) return;

    // Style the visible button when the link wraps one; otherwise the link itself.
    const target = (anchor.querySelector("button") as HTMLElement | null) ?? anchor;
    // Image links (hero photo) keep their look; only text buttons get the label.
    if (target === anchor && !anchor.textContent?.trim()) return;
    if (target.dataset.storeLoading) return;

    target.style.setProperty("--store-loading-color", getComputedStyle(target).color);
    target.dataset.storeLoadingText = getLabel();
    target.dataset.storeLoading = "1";
    window.setTimeout(clearAll, RESET_AFTER_MS);
  };
  const onPageShow = (e: PageTransitionEvent) => {
    if (e.persisted) clearAll();
  };

  document.addEventListener("click", onClick, true);
  window.addEventListener("pageshow", onPageShow);
  return () => {
    document.removeEventListener("click", onClick, true);
    window.removeEventListener("pageshow", onPageShow);
  };
}

/** Page hook: installs the listener with this page's localized label. */
export function useStoreTapFeedback(label: string) {
  useEffect(() => installStoreTapFeedback(() => label), [label]);
}
