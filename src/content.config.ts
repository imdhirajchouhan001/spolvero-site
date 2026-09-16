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

export const collections = { policies };
