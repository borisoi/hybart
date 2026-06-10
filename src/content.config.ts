import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    slug: z.string().optional(),
    oldSlug: z.string().optional(),
    cover: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    title: z.string(),
    person: z.string(),
    role: z.string(),
    personLink: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    oldSlug: z.string().optional(),
    image: z.string().optional(),
    excerpt: z.string(),
  }),
});

export const collections = { blog, testimonials };
