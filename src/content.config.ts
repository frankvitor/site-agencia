import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Conteúdo organizado por idioma: src/content/<coleção>/<pt|en>/<slug>.md
 * O id de cada entrada fica "pt/slug" ou "en/slug".
 */

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().int(),
    highlights: z.array(z.string()).min(1),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cases' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      year: z.number().int().min(2000),
      summary: z.string(),
      services: z.array(z.string()).min(1),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      results: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      order: z.number().int().default(0),
      draft: z.boolean().default(false),
    }),
});

export const collections = { services, cases };
