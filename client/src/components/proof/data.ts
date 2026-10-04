// Proof assets shared by every locale page. Copy (review text, expert quotes,
// labels) lives in ./i18n/<locale>.ts; this file holds only what is identical
// across languages.
//
// Sources, all checked 2026-10-04:
// - Reviews: verified, non-incentivized, Active 5-star Loox reviews of the Lem
//   (hellonancy.com/products/lem). Photos are the reviewers' own uploads.
// - Experts: the "Expert approved" section of the hellonancy.com home page.
// - Press: the "As seen on" logo row of the hellonancy.com home page.
// - Figures: Loox aggregate on the Lem PDP (4.8 / 19,391) and Shopify
//   (1,185,933 Lems sold since the 2023 launch; 1,416,808 orders all-time).

export type ReviewId =
  | "jacquie-d"
  | "petra-d"
  | "marta-c"
  | "t-m"
  | "barbara-j"
  | "leticia-t"
  | "nathan-m"
  | "claudia-g"
  | "helen-c"
  | "mandie-k";

export type ExpertId =
  | "angela-wright"
  | "jila-senemar"
  | "karen-bigman"
  | "mari-mitrani"
  | "dr-tessa"
  | "hayley-hoffman";

/** Language the reviewer wrote in. Other locales show a "translated" label. */
export type ReviewLang = "en" | "de" | "es";

export interface ReviewMeta {
  id: ReviewId;
  /** Loox review id, for tracing a card back to the source. */
  looxId: string;
  name: string;
  /** ISO date the review was posted. */
  date: string;
  photo?: string;
  lang: ReviewLang;
}

export const REVIEWS: ReviewMeta[] = [
  { id: "jacquie-d", looxId: "8Cte7LKB-", name: "Jacquie D.", date: "2026-01-12", lang: "en" },
  { id: "petra-d", looxId: "X8VIYINd3", name: "Petra D.", date: "2025-09-21", photo: "/reviews/petra-d.jpg", lang: "de" },
  { id: "marta-c", looxId: "zbvduc4Lk", name: "Marta C.", date: "2025-11-10", photo: "/reviews/marta-c.jpg", lang: "es" },
  { id: "t-m", looxId: "MDKrpVxxE", name: "T M.", date: "2025-11-29", photo: "/reviews/t-m.jpg", lang: "en" },
  { id: "barbara-j", looxId: "UdW5gwfk3", name: "Barbara J.", date: "2025-12-05", photo: "/reviews/barbara-j.jpg", lang: "en" },
  { id: "leticia-t", looxId: "DdE6NHwtVU", name: "Leticia T.", date: "2024-05-18", photo: "/reviews/leticia-t.jpg", lang: "en" },
  { id: "nathan-m", looxId: "QxYE3CKsJ", name: "Nathan M.", date: "2025-11-08", photo: "/reviews/nathan-m.jpg", lang: "en" },
  { id: "claudia-g", looxId: "sqgFSFJcN", name: "Claudia G.", date: "2025-11-29", photo: "/reviews/claudia-g.jpg", lang: "en" },
  { id: "helen-c", looxId: "KyPbB8l8c", name: "Helen C.", date: "2025-10-23", photo: "/reviews/helen-c.jpg", lang: "en" },
  { id: "mandie-k", looxId: "zvmBNb9x9", name: "Mandie K.", date: "2025-10-21", photo: "/reviews/mandie-k.jpg", lang: "en" },
];

/** Reviewer quoted in the article's pull quote (Loox uuSnPkWVE). */
export const PULL_QUOTE_PHOTO = "/reviews/madalen-b.jpg";

export interface ExpertMeta {
  id: ExpertId;
  name: string;
  photo: string;
}

export const EXPERTS: ExpertMeta[] = [
  { id: "angela-wright", name: "Dr. Angela Wright", photo: "/experts/angela-wright.jpg" },
  { id: "jila-senemar", name: "Dr. Jila Senemar", photo: "/experts/jila-senemar.jpg" },
  { id: "karen-bigman", name: "Karen Bigman", photo: "/experts/karen-bigman.jpg" },
  { id: "mari-mitrani", name: "Dr. Mari Mitrani", photo: "/experts/mari-mitrani.jpg" },
  { id: "dr-tessa", name: "Dr. Tessa", photo: "/experts/dr-tessa.jpg" },
  { id: "hayley-hoffman", name: "Hayley Hoffman", photo: "/experts/hayley-hoffman.jpg" },
];

export const PRESS: { name: string; src: string }[] = [
  { name: "Cosmopolitan", src: "/press/cosmopolitan.svg" },
  { name: "The Guardian", src: "/press/the-guardian.png" },
  { name: "Mashable", src: "/press/mashable.png" },
  { name: "The Daily Beast", src: "/press/daily-beast.png" },
  { name: "SheKnows", src: "/press/sheknows.png" },
  { name: "Girlboss", src: "/press/girlboss.png" },
  { name: "The Sun", src: "/press/the-sun.png" },
  { name: "Tatler", src: "/press/tatler.png" },
  { name: "Time Out", src: "/press/time-out.png" },
  { name: "Hip & Healthy", src: "/press/hip-and-healthy.png" },
  { name: "Sarasense", src: "/press/sarasense.png" },
  { name: "Vocal", src: "/press/vocal.svg" },
];
