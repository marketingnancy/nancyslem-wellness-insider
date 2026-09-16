// Post-build: give every client-side locale route a real HTML file so GitHub
// Pages answers it with HTTP 200 instead of falling through to 404.html.
//
// Why: this is a Vite SPA on GitHub Pages (static hosting, no rewrites). The
// only file on disk was index.html, so /jp, /de, ... had nothing to serve and
// GitHub returned 404.html (a copy of index.html) WITH A 404 STATUS. Browsers
// rendered it fine; crawlers and ad platforms saw a 404.
//
// GitHub Pages resolves an extensionless path to "<path>.html", so writing
// dist/public/jp.html makes /jp return 200 directly — no redirect, so query
// strings and Meta tracking params (fbclid, utm_*) are untouched. Unknown paths
// still have no file and still get 404.html + HTTP 404.
//
// Each file is the same SPA shell with the correct <html lang>, a self-
// referencing canonical, and the full hreflang set. The React app is unchanged.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "dist", "public");
const ORIGIN = "https://modernwellnessinsider.com";

// Route slug -> BCP 47 language tag (matches each page's
// document.documentElement.lang). "" is the English (USD) homepage.
export const LOCALES = {
  "": "en",
  jp: "ja",
  nl: "nl",
  de: "de",
  fr: "fr",
  se: "sv",
  hu: "hu",
  it: "it",
  es: "es",
  da: "da",
  cs: "cs",
  no: "nb",
  fi: "fi",
  pl: "pl",
  ro: "ro",
  gr: "el",
  pt: "pt-PT",
  hk: "zh-HK",
};

const url = (slug) => `${ORIGIN}/${slug}`;

// Fail the build if App.tsx and LOCALES drift apart — otherwise a new locale
// page would silently ship as a 404 again.
function assertRoutesMatchApp() {
  const app = fs.readFileSync(path.join(ROOT, "client/src/App.tsx"), "utf8");
  const appRoutes = [...app.matchAll(/<Route\s+path=\{?"\/([^"]*)"\}?/g)]
    .map((m) => m[1])
    .filter((p) => p !== "404");
  const known = Object.keys(LOCALES);
  const missing = appRoutes.filter((r) => !known.includes(r));
  const extra = known.filter((r) => !appRoutes.includes(r));
  if (missing.length || extra.length) {
    throw new Error(
      `LOCALES out of sync with App.tsx routes. ` +
        `Missing: [${missing.join(", ")}] Extra: [${extra.join(", ")}]`,
    );
  }
}

function hreflangTags() {
  const tags = Object.entries(LOCALES).map(
    ([slug, lang]) => `<link rel="alternate" hreflang="${lang}" href="${url(slug)}" />`,
  );
  tags.push(`<link rel="alternate" hreflang="x-default" href="${url("")}" />`);
  return tags;
}

function render(template, slug, lang) {
  const head = [`<link rel="canonical" href="${url(slug)}" />`, ...hreflangTags()]
    .map((t) => `    ${t}`)
    .join("\n");
  return template
    .replace(/<html lang="en">/, `<html lang="${lang}">`)
    .replace(/\n\s*<\/head>/, `\n${head}\n  </head>`);
}

function main() {
  assertRoutesMatchApp();

  const indexPath = path.join(OUT, "index.html");
  const template = fs.readFileSync(indexPath, "utf8");
  if ((template.match(/<html lang="en">/g) || []).length !== 1 ||
      (template.match(/<\/head>/g) || []).length !== 1 ||
      /rel="canonical"/.test(template)) {
    throw new Error("Unexpected index.html shape — refusing to inject head tags.");
  }

  // 404.html: SPA shell for unknown paths (GitHub serves it with HTTP 404).
  // No canonical/hreflang, and noindex so a 404 is never indexed as a page.
  fs.writeFileSync(
    path.join(OUT, "404.html"),
    template.replace(/\n\s*<\/head>/, `\n    <meta name="robots" content="noindex" />\n  </head>`),
  );

  for (const [slug, lang] of Object.entries(LOCALES)) {
    const file = slug === "" ? "index.html" : `${slug}.html`;
    fs.writeFileSync(path.join(OUT, file), render(template, slug, lang));
  }

  fs.writeFileSync(path.join(OUT, ".nojekyll"), "");
  console.log(`prerender-routes: wrote index.html + ${Object.keys(LOCALES).length - 1} locale pages + 404.html`);
}

main();
