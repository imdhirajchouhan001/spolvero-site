// Builds unspend/privacy/index.html from the policy kept in the app repo.
// The app repo's docs/privacy-policy.md is the source of truth; re-run this after it changes:
//   node scripts/build-policy.mjs ../subscription-tracker/docs/privacy-policy.md
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const src = process.argv[2] ?? "../subscription-tracker/docs/privacy-policy.md";
const md = readFileSync(src, "utf8").replace(/\r\n/g, "\n");

// Published part: after the first "---" rule, up to the internal "When the switches flip" notes.
const start = md.indexOf("\n---\n") + 5;
const end = md.indexOf("\n---\n\n# When the switches flip");
const body = md.slice(start, end === -1 ? undefined : end).trim();

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const sentence = (s) => s.charAt(0) + s.slice(1).toLowerCase();

const inline = (s) =>
  esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(https:\/\/[^\s<]+[^\s<.,)])/g, '<a href="$1">$1</a>')
    .replace(/\b((?:revenuecat|supabase)\.com\/privacy)\b/g, '<a href="https://$1">$1</a>')
    .replace(/\b([\w.+-]+@[\w-]+\.[\w.]+[a-z])\b/g, '<a href="mailto:$1">$1</a>')
    .replace(/\b(ADVERTISING|PAYING FOR PRO|WHERE YOUR DATA LIVES)\b/g, (m) => `“${sentence(m)}”`);

let effective = "";
const blocks = body.split(/\n{2,}/).map((b) => b.replace(/\n/g, " ").trim()).filter(Boolean);
const html = blocks
  .map((b) => {
    if (b.startsWith("## ")) return `<h2>${esc(sentence(b.slice(3)))}</h2>`;
    if (/^Effective /.test(b)) { effective = b; return ""; }
    return `<p>${inline(b)}</p>`;
  })
  .filter(Boolean)
  .join("\n        ");

const page = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Unspend privacy policy — Spolvero</title>
  <meta name="description" content="What Unspend collects, why, where it's stored, and the control you have over it.">
  <link rel="canonical" href="https://spolvero.design/unspend/privacy/">
  <meta name="theme-color" content="#101057">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon.png" type="image/png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..800&display=swap">
  <link rel="stylesheet" href="/assets/site.css">
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="wrap">
      <a class="logo" href="/" aria-label="Spolvero home"></a>
      <nav class="nav" aria-label="Main">
        <a href="/unspend/">Unspend</a>
        <a href="/#apps">All apps</a>
        <a class="nav-cta" href="/contact/?topic=feedback&amp;app=unspend">Contact</a>
      </nav>
    </div>
  </header>

  <main id="main" class="section">
    <div class="wrap">
      <article class="prose">
        <p class="muted"><a href="/unspend/">Unspend</a> / Privacy policy</p>
        <h1 style="font-size:var(--step-3);margin-top:16px">Unspend privacy policy</h1>
        <p class="effective">${esc(effective)}</p>
        ${html}
      </article>
    </div>
  </main>

  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-base" style="margin-top:0;border-top:0;padding-top:0">
        <span>© 2026 Spolvero</span>
        <span><a href="/unspend/">Unspend</a> · <a href="/contact/">Contact</a></span>
      </div>
    </div>
  </footer>
</body>
</html>
`;

mkdirSync("unspend/privacy", { recursive: true });
writeFileSync("unspend/privacy/index.html", page);
console.log(`Wrote unspend/privacy/index.html (${blocks.length} blocks, ${effective})`);
