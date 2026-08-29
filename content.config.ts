import { defineContentConfig, defineCollection, z } from "@nuxt/content";

const pageSchema = z.object({
  schemaRole: z.enum(["TechArticle", "HowTo", "FAQPage"]).optional(),
});

export default defineContentConfig({
  collections: {
    content_ja: defineCollection({
      type: "page",
      source: {
        include: "ja/**",
        prefix: "",
      },
      schema: pageSchema,
    }),
    content_en: defineCollection({
      type: "page",
      source: {
        include: "en/**",
        prefix: "",
      },
      schema: pageSchema,
    }),
  },
});
