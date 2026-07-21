import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const personal = defineCollection({
  loader: glob({ pattern: 'index.json', base: './src/content/personal' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    summary: z.string(),
    email: z.string(),
    phone: z.string(),
    location: z.string(),
    website: z.string().optional(),
    github: z.string().optional(),
    linkedin: z.string().optional(),
  }),
});

const workExperience = defineCollection({
  loader: glob({ pattern: '**/index.mdoc', base: './src/content/work-experience' }),
  schema: z.object({
    position: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    current: z.boolean().default(false),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/index.mdoc', base: './src/content/education' }),
  schema: z.object({
    degree: z.string(),
    fieldOfStudy: z.string(),
    startDate: z.string(),
    endDate: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/index.mdoc', base: './src/content/projects' }),
  schema: z.object({
    link: z.string().optional(),
    technologies: z.string().optional(),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/skills' }),
  schema: z.object({
    skillsList: z.string(),
  }),
});

export const collections = {
  personal,
  workExperience,
  education,
  projects,
  skills,
};
