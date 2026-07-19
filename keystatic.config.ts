import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    personal: singleton({
      label: 'Personal Information',
      path: 'src/content/personal/index',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Full Name' }),
        title: fields.text({ label: 'Professional Title' }),
        summary: fields.text({ label: 'Summary', multiline: true }),
        email: fields.text({ label: 'Email' }),
        phone: fields.text({ label: 'Phone' }),
        location: fields.text({ label: 'Location' }),
        website: fields.text({ label: 'Website' }),
        github: fields.text({ label: 'GitHub Username/URL' }),
        linkedin: fields.text({ label: 'LinkedIn URL' }),
      }
    })
  },
  collections: {
    workExperience: collection({
      label: 'Work Experience',
      slugField: 'company',
      path: 'src/content/work-experience/*',
      format: { contentField: 'description' },
      schema: {
        company: fields.slug({ name: { label: 'Company Name' } }),
        position: fields.text({ label: 'Position/Title' }),
        startDate: fields.text({ label: 'Start Date (e.g. June 2021)' }),
        endDate: fields.text({ label: 'End Date (e.g. Present)' }),
        current: fields.checkbox({ label: 'Currently Work Here', defaultValue: false }),
        description: fields.markdoc({ label: 'Description/Key Achievements' }),
      }
    }),
    education: collection({
      label: 'Education',
      slugField: 'institution',
      path: 'src/content/education/*',
      format: { contentField: 'description' },
      schema: {
        institution: fields.slug({ name: { label: 'Institution/University' } }),
        degree: fields.text({ label: 'Degree' }),
        fieldOfStudy: fields.text({ label: 'Field of Study' }),
        startDate: fields.text({ label: 'Start Date' }),
        endDate: fields.text({ label: 'End Date' }),
        description: fields.markdoc({ label: 'Description/Coursework' }),
      }
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'name',
      path: 'src/content/projects/*',
      format: { contentField: 'description' },
      schema: {
        name: fields.slug({ name: { label: 'Project Name' } }),
        description: fields.markdoc({ label: 'Project Description' }),
        link: fields.text({ label: 'Project Link/URL' }),
        technologies: fields.text({ label: 'Technologies (comma-separated, e.g. React, TypeScript)' }),
      }
    }),
    skills: collection({
      label: 'Skills',
      slugField: 'category',
      path: 'src/content/skills/*',
      format: { data: 'json' },
      schema: {
        category: fields.slug({ name: { label: 'Skill Category (e.g. Languages, Frontend)' } }),
        skillsList: fields.text({ label: 'Skills (comma-separated, e.g. TypeScript, Python, SQL)' }),
      }
    })
  }
});
