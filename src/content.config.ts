import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Synced from each app repo by scripts/sync-policies.mjs — edit the source, not these files.
const policies = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/policies" }),
  schema: z.object({
    title: z.string(),
    effective: z.string(),
    source: z.string(),
  }),
});

// Articles that answer the problem people search for, with the tool as the fix.
const articles = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    /** Used as the page <title>; keep it close to the search phrasing. */
    seoTitle: z.string().optional(),
    description: z.string(),
    published: z.string(),
    updated: z.string(),
    /** Opening answer, shown above the body and quotable by an AI answer. */
    answer: z.string(),
    /** Which tool page this article sends readers to. */
    tool: z.string().default("/tools/device-tests/webcam-test/"),
    /** Every tool page this article should surface on. The `tool` above is where
     *  the article's own call to action points; this is the reverse link, so a
     *  tool page can show the guides written about it. */
    tools: z.array(z.string()).default([]),
    toolCta: z.string().default("Test your camera"),
    tags: z.array(z.string()).default([]),
    /** Rough read time in minutes. */
    minutes: z.number(),
  }),
});

export const collections = { policies, articles };
