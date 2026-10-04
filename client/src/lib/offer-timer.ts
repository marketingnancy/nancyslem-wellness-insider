import { useEffect, useState } from "react";

/**
 * offer-timer.ts
 *
 * The 15-minute "reader offer" countdown.
 *
 * - The clock runs from when the visitor LANDED, not from when the timer first
 *   shows. Someone who reads for 4 minutes before reaching the offer sees 11:00.
 * - It stays hidden until the reader reaches the offer section
 *   (`#offer-section`), i.e. the point in the article where the offer is
 *   introduced. After that it also shows in the sticky bar.
 * - At 0:00 it disappears instead of sitting on an expired clock.
 * - The landing time and "offer seen" flag live in sessionStorage, so a reload
 *   or a hop between locale pages continues the same clock; a new tab or a new
 *   visit starts fresh. Storage failures (private mode) fall back to in-memory.
 */

const WINDOW_SECONDS = 15 * 60;
const START_KEY = "mwi_offer_landed_at";
const SEEN_KEY = "mwi_offer_seen";

function readSession(key: string): string | null {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeSession(key: string, value: string) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    // ignore: the in-memory value still drives this page view
  }
}

let landedAt: number | null = null;

/** When this visit started: navigation start of the first page view in the session. */
function getLandedAt(): number {
  if (landedAt !== null) return landedAt;
  const stored = Number(readSession(START_KEY));
  const navStart = Math.round(performance.timeOrigin || Date.now());
  landedAt = stored > 0 && stored <= Date.now() ? stored : navStart;
  writeSession(START_KEY, String(landedAt));
  return landedAt;
}

const secondsLeft = (start: number) =>
  Math.max(0, WINDOW_SECONDS - Math.floor((Date.now() - start) / 1000));

export function useOfferTimer(): { showTimer: boolean; timeLeft: number } {
  const [start] = useState(getLandedAt);
  const [seen, setSeen] = useState(() => readSession(SEEN_KEY) === "1");
  const [timeLeft, setTimeLeft] = useState(() => secondsLeft(start));

  // Reveal once the offer section's top is a third of the way up the screen.
  useEffect(() => {
    if (seen) return;
    const el = document.getElementById("offer-section");
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          writeSession(SEEN_KEY, "1");
        }
      },
      { rootMargin: "0px 0px -33% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);

  useEffect(() => {
    if (!seen) return;
    setTimeLeft(secondsLeft(start));
    const id = window.setInterval(() => {
      const left = secondsLeft(start);
      setTimeLeft(left);
      if (left <= 0) window.clearInterval(id);
    }, 1000);
    return () => window.clearInterval(id);
  }, [seen, start]);

  return { showTimer: seen && timeLeft > 0, timeLeft };
}
