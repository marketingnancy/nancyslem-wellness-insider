import type { ExpertId, ReviewId, ReviewLang } from "./data";

/** Every visible string the proof components render, for one locale page. */
export interface ProofCopy {
  /** BCP 47 tag used to format review dates. */
  intl: string;
  /** Average star rating, locale-formatted ("4.8" / "4,8"). */
  rating: string;
  /** "19,391 reviews" with the locale's thousands separator. */
  reviewsLabel: string;
  /** Compact rating for the mobile sticky bar: "4.8 (19,391)". */
  ratingShort: string;
  /** Short sold figure for the headline proof line and sticky bar: "1.1M+ sold". */
  soldShort: string;
  /** Trust-grid card: "1.1M+ Sold". */
  soldTitle: string;
  /** Trust-grid card body. */
  soldBody: string;
  /** Trust-grid card: "1.4M+ Orders". */
  ordersTitle: string;
  ordersBody: string;
  /** Shown on a store button the moment it is tapped. */
  openingStore: string;
  /** Lightbox button under the product photos. */
  galleryCta: string;
  verifiedBuyer: string;
  /** Label under a review shown in a language other than the one it was written in. */
  translatedFrom: Record<ReviewLang, string>;
  /** Phone-only button that reveals the rest of the review wall. */
  showMoreReviews: string;
  /** Small print under the customer review cards. */
  reviewsFootnote: string;
  /** Review text, keyed by review. Original wording where the page language matches. */
  reviews: Record<ReviewId, string>;
  /** Article pull quote (Madalen B.). */
  pullQuote: { text: string; attribution: string };
  experts: {
    heading: string;
    subheading: string;
    footnote: string;
    /** Phone-only hint under the swipeable expert cards. */
    swipeHint: string;
    items: Record<ExpertId, { title: string; quote: string }>;
  };
}
