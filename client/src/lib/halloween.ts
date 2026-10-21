import { useEffect, useState } from "react";

// Halloween 2026 ad-landing variants of the English page (/halloween-a, /halloween-b).
// Each one matches a cluster of Evrim's Halloween native ads:
//   A = "it stopped hurting" (pain, dryness, everything burned)
//   B = "the feeling came back" (numb, no desire, faking it)
// The control is the unchanged homepage. Reviews below are real Loox reviews (5 stars, verified).

export type HalloweenVariant = "a" | "b";

// Halloween offer ends 31 Oct 2026, 23:59 US Eastern.
export const HALLOWEEN_ENDS = Date.parse("2026-10-31T23:59:59-04:00");

export interface HalloweenReview {
  name: string;
  date: string;
  text: string;
}

export interface HalloweenCopy {
  kicker: string;
  editorLead: string;
  mechanismTitle: string;
  mechanismIntro: string;
  rubbed: string[];
  lemPoint: string;
  reviewsTitle: string;
  reviews: HalloweenReview[];
  heroCaption: string;
}

const shared = {
  editorLead: "If someone sent you this link, she probably had a reason.",
  heroCaption: "Hiding in plain sight between the pumpkins. Most guests think it's a decorative lemon.",
};

export const HALLOWEEN: Record<HalloweenVariant, HalloweenCopy> = {
  a: {
    ...shared,
    kicker: "The monster under the bed was never the problem.",
    mechanismTitle: "Why everything you tried made it hurt more",
    mechanismIntro:
      "When estrogen drops, the tissue down there gets thinner and drier. That's why it started to sting, burn, or feel like a match being struck. And here's the part nobody explains: almost everything women reach for works by rubbing.",
    rubbed: [
      "Drugstore lube: slippery, but you're still rubbing tissue that's already thin",
      "Creams: messy, slow, and on every pair of pajamas",
      "An old vibrator: buzzes and rubs right where it already hurts",
    ],
    lemPoint:
      "The Lem doesn't rub at all. It uses gentle air pulses, suction then release, so nothing drags across sore skin. That's why the first thing most women notice isn't the pleasure. It's what doesn't happen: no burn, no flinch.",
    reviewsTitle: "Women who were done with it hurting",
    reviews: [
      {
        name: "Leanne C.",
        date: "Jan 2026",
        text: "I love my lemon. It's gentle, which is what I needed for what I'm experiencing as a post-menopausal woman. It's extremely effective as well!",
      },
      {
        name: "Kenneth W.",
        date: "Aug 2025",
        text: "I bought this for my wife who is postmenopausal and for whom intercourse is painful. She had her first orgasm in eight years! She said that she loved her new toy and that it was so different from a vibrator.",
      },
      {
        name: "Lisa H.",
        date: "Nov 2025",
        text: "Well I have to say this is a game changer. I have been suffering from menopausal symptoms and this is really helping with things feeling more comfortable down there 😉",
      },
    ],
  },
  b: {
    ...shared,
    kicker: "The numb part wasn't the costume.",
    mechanismTitle: "Why you stopped feeling anything (and why it isn't you)",
    mechanismIntro:
      "When estrogen drops, blood flow down there slows, and the nerves go quiet. The wanting fades with it. You didn't stop loving him. Your body stopped getting the signal. And everything you tried just rubbed the surface.",
    rubbed: [
      "Vibrators: more buzzing on nerves that are already quiet, so it feels like nothing",
      "Supplements: a pink label, $49 a month, and very expensive pee",
      "Faking it: easier than explaining, but it never brings anything back",
    ],
    lemPoint:
      "The Lem works differently. Gentle air pulses, suction then release, wake things up without rubbing. Women in their 50s and 60s say the first surprise is simply feeling something again.",
    reviewsTitle: "Women who started feeling again",
    reviews: [
      {
        name: "Anna H.",
        date: "Dec 2025",
        text: "Great for post menopause blood flow and pelvic muscle deep stimulator. I went from no feeling in my nether regions to feeling again. I highly recommend.",
      },
      {
        name: "Margaret S.",
        date: "Aug 2025",
        text: "As a 66-year old, post-menopausal woman with no libido, this little lemon has restored my enjoyment of orgasms with little to no effort.",
      },
      {
        name: "Shari E.",
        date: "Dec 2025",
        text: "I gotta tell you, not sure I ever have experienced this much sensation down there. I am 55 and a man has never pleased me as much as this lemon.",
      },
    ],
  },
};

/** Live countdown to the end of the Halloween offer. */
export function useHalloweenCountdown() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const left = Math.max(0, Math.floor((HALLOWEEN_ENDS - now) / 1000));
  const d = Math.floor(left / 86400);
  const h = Math.floor((left % 86400) / 3600);
  const m = Math.floor((left % 3600) / 60);
  const s = left % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return { ended: left === 0, label: d > 0 ? `${d}d ${pad(h)}h ${pad(m)}m` : `${pad(h)}:${pad(m)}:${pad(s)}` };
}
