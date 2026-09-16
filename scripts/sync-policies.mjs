// Copies each app's privacy policy from its own repo into src/content/policies/.
// The app repos are the source of truth; re-run after a policy changes there:
//
//   node scripts/sync-policies.mjs unspend=../subscription-tracker gst=../gst-calculator
//
// Internal notes are stripped: blockquotes before the policy starts, and anything
// after a "# When the switches flip" heading.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const SOURCES = {
  unspend: { file: "docs/privacy-policy.md", title: "Unspend privacy policy" },
  gst: { file: "docs/PRIVACY-POLICY.md", title: "GST Calculator privacy policy" },
};

const args = Object.fromEntries(process.argv.slice(2).map((a) => a.split("=")));
if (!Object.keys(args).length) {
  console.error("Usage: node scripts/sync-policies.mjs unspend=<repo> gst=<repo>");
  process.exit(1);
}

mkdirSync("src/content/policies", { recursive: true });

for (const [slug, repo] of Object.entries(args)) {
  const src = SOURCES[slug];
  if (!src) throw new Error(`Unknown policy "${slug}". Known: ${Object.keys(SOURCES).join(", ")}`);
  let md = readFileSync(join(repo, src.file), "utf8").replace(/\r\n/g, "\n");

  md = md.split(/\n# When the switches flip/)[0];
  // Drop the document's own H1 and any internal blockquote notes.
  md = md.replace(/^# .*\n/m, "");
  md = md.replace(/^(>.*\n)+/gm, "");
  md = md.replace(/\n---\s*$/, "").trim();

  // Unspend's policy uses ALL-CAPS headings; render them in sentence case.
  md = md.replace(/^## ([A-Z][A-Z &]+)$/gm, (_, h) => `## ${h.charAt(0)}${h.slice(1).toLowerCase()}`);

  const effective =
    md.match(/^\*\*Effective:\*\*\s*(.+?)(?:\s+·|$)/m)?.[1] ??
    md.match(/^Effective (.+)$/m)?.[1] ??
    "";
  md = md.replace(/^Effective .+\n+/m, "");
  md = md.replace(/^\*\*Effective:\*\*.*\n+/m, "");
  md = md.replace(/^## Paying for pro$/m, "## Paying for Pro");

  // Unspend has a leading "---" rule separating its internal header.
  md = md.replace(/^---\n+/, "");

  const front = `---\ntitle: ${JSON.stringify(src.title)}\neffective: ${JSON.stringify(effective)}\nsource: ${JSON.stringify(src.file)}\n---\n\n`;
  writeFileSync(`src/content/policies/${slug}.md`, front + md + "\n");
  console.log(`${slug}: ${md.split("\n").length} lines, effective ${effective || "(none)"}`);
}
