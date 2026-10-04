import { useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { EXPERTS, PRESS, REVIEWS, type ReviewLang } from "./data";
import type { ProofCopy } from "./types";

/** Quotation marks each page's language uses (matches the existing page copy). */
const QUOTES: Record<string, [string, string]> = {
  de: ["„", "“"], cs: ["„", "“"], pl: ["„", "”"], ro: ["„", "”"], hu: ["„", "”"],
  da: ["»", "«"], nb: ["«", "»"], el: ["«", "»"], es: ["«", "»"], it: ["«", "»"], pt: ["«", "»"],
  fr: ["«\u00A0", "\u00A0»"], sv: ["”", "”"], fi: ["”", "”"], nl: ["“", "”"], ja: ["「", "」"], zh: ["「", "」"],
};
const quotesFor = (intl: string) => QUOTES[intl.split("-")[0]] ?? ["“", "”"];

function Stars({ size = "w-4 h-4" }: { size?: string }) {
  return (
    <span className="flex" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`${size} fill-[#FFE14D] text-[#FFE14D]`} />
      ))}
    </span>
  );
}

/** Rating + sold line under the headline. Taps jump to the review wall. */
export function HeadlineProof({ copy }: { copy: ProofCopy }) {
  const [open, close] = /^(ja|zh)/.test(copy.intl) ? ["（", "）"] : ["(", ")"];
  return (
    <a
      href="#reviews"
      className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 mb-6 text-sm sm:text-base"
    >
      <Stars />
      <span className="font-bold text-gray-900">{copy.rating}</span>
      <span className="text-gray-600 underline decoration-dotted underline-offset-2">
        {open}{copy.reviewsLabel}{close}
      </span>
      <span className="text-gray-300" aria-hidden="true">|</span>
      <span className="font-semibold text-gray-900">{copy.soldShort}</span>
    </a>
  );
}

/** Real customer quote inside the article body. */
export function ReviewPullQuote({ copy }: { copy: ProofCopy }) {
  const [q1, q2] = quotesFor(copy.intl);
  return (
    <div className="bg-white p-6 rounded-lg mt-6 border-2 border-[#FFE14D]">
      <p className="text-lg italic text-gray-900 mb-2">{q1}{copy.pullQuote.text}{q2}</p>
      <p className="font-semibold text-gray-700">{copy.pullQuote.attribution}</p>
    </div>
  );
}

/**
 * Review wall. `pageLang` is the language the page is written in, so a review
 * written in that language shows its original text with no translation label.
 */
const REVIEWS_ON_PHONE = 4;

export function RealReviews({ copy, pageLang }: { copy: ProofCopy; pageLang: string }) {
  const [expanded, setExpanded] = useState(false);
  const month = new Intl.DateTimeFormat(copy.intl, { month: "short", year: "numeric", timeZone: "UTC" });
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        {REVIEWS.map((r, i) => (
          <Card
            key={r.id}
            className={`bg-white border-2 ${i % 2 ? "border-[#FF1493]/40" : "border-[#FFE14D]"} ${
              !expanded && i >= REVIEWS_ON_PHONE ? "hidden md:block" : ""
            }`}
          >
            <CardContent className="p-4 flex gap-4">
              {r.photo && (
                <img
                  src={r.photo}
                  alt={r.name}
                  loading="lazy"
                  className="w-24 h-28 sm:w-28 sm:h-32 rounded-lg object-cover flex-shrink-0 bg-gray-100"
                />
              )}
              <div className="min-w-0 space-y-2">
                <Stars />
                <p className="text-gray-800 leading-snug whitespace-pre-line">
                  {copy.reviews[r.id]}
                </p>
                <div className="text-sm">
                  <span className="font-semibold text-gray-900">{r.name}</span>
                  <span className="text-gray-500"> · {month.format(new Date(r.date))}</span>
                </div>
                <p className="text-xs text-green-700 font-medium">✓ {copy.verifiedBuyer}</p>
                {r.lang !== (pageLang as ReviewLang) && (
                  <p className="text-[11px] text-gray-400 italic">{copy.translatedFrom[r.lang]}</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {!expanded && (
        <div className="flex justify-center mt-5 md:hidden">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="px-6 py-3 rounded-full border-2 border-[#FF1493] text-[#FF1493] font-bold"
          >
            {copy.showMoreReviews} ({REVIEWS.length - REVIEWS_ON_PHONE})
          </button>
        </div>
      )}
      <p className="text-center text-xs text-gray-500 mt-6">{copy.reviewsFootnote}</p>
    </>
  );
}

/** Doctor / expert quotes, as published on hellonancy.com. */
export function ExpertReviews({ copy }: { copy: ProofCopy }) {
  const [q1, q2] = quotesFor(copy.intl);
  return (
    <section className="container py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
          {copy.experts.heading}
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10">{copy.experts.subheading}</p>
        <div className="-mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 md:overflow-visible">
          {EXPERTS.map((e) => {
            const item = copy.experts.items[e.id];
            return (
              <Card
                key={e.id}
                className="bg-white border border-gray-200 shadow-sm min-w-[85%] snap-start md:min-w-0"
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={e.photo}
                      alt={e.name}
                      loading="lazy"
                      className="w-14 h-14 rounded-full object-cover flex-shrink-0 ring-2 ring-[#FFE14D]"
                    />
                    <div className="min-w-0">
                      <p className="font-bold text-gray-900">{e.name}</p>
                      <p className="text-xs text-gray-600 leading-snug">{item.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">{q1}{item.quote}{q2}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <p className="text-center text-xs text-gray-400 mt-2 md:hidden">{copy.experts.swipeHint}</p>
        <p className="text-center text-xs text-gray-500 mt-6">{copy.experts.footnote}</p>
      </div>
    </section>
  );
}

/** Press logos from the hellonancy.com "As seen on" row. */
export function AsSeenIn() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-5 items-center">
      {PRESS.map((p) => (
        <img
          key={p.name}
          src={p.src}
          alt={p.name}
          loading="lazy"
          className="h-6 md:h-7 w-full object-contain opacity-70"
        />
      ))}
    </div>
  );
}
