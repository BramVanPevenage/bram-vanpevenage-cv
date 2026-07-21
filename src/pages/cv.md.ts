import type { APIRoute } from 'astro';
import { getEntry, getCollection } from 'astro:content';

export const prerender = true;

export const GET: APIRoute = async () => {
  const personalEntry = await getEntry('personal', 'index');
  if (!personalEntry) {
    return new Response('Personal info not found', { status: 404 });
  }
  const personal = personalEntry.data;

  const skills = await getCollection('skills');
  const workExperience = await getCollection('workExperience');
  const education = await getCollection('education');
  const projects = await getCollection('projects');

  // Sort collections
  const sortedWork = workExperience.sort((a, b) => {
    if (a.data.current) return -1;
    if (b.data.current) return 1;
    return b.data.startDate.localeCompare(a.data.startDate);
  });

  const sortedEducation = education.sort((a, b) => {
    return b.data.startDate.localeCompare(a.data.startDate);
  });

  // Construct Markdown
  let markdown = `# ${personal.name}\n`;
  markdown += `**${personal.title}**\n\n`;

  markdown += `## Contact Information\n`;
  markdown += `- **Location:** ${personal.location}\n`;
  markdown += `- **Email:** ${personal.email}\n`;
  markdown += `- **Phone:** ${personal.phone}\n`;
  if (personal.website) markdown += `- **Website:** ${personal.website}\n`;
  if (personal.github) markdown += `- **GitHub:** ${personal.github}\n`;
  if (personal.linkedin) markdown += `- **LinkedIn:** ${personal.linkedin}\n`;
  markdown += `\n---\n\n`;

  markdown += `## Professional Summary\n`;
  markdown += `${personal.summary}\n\n`;
  markdown += `---\n\n`;

  if (skills.length > 0) {
    markdown += `## Skills\n`;
    for (const skillGroup of skills) {
      const categoryName = skillGroup.id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      markdown += `### ${categoryName}\n`;
      markdown += `${skillGroup.data.skillsList}\n\n`;
    }
    markdown += `---\n\n`;
  }

  if (sortedWork.length > 0) {
    markdown += `## Work Experience\n\n`;
    for (const job of sortedWork) {
      const companyName = job.id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      markdown += `### ${job.data.position} — ${companyName}\n`;
      markdown += `**${job.data.startDate} — ${job.data.endDate}**\n\n`;
      markdown += `${job.body ? job.body.trim() : ''}\n\n`;
    }
    markdown += `---\n\n`;
  }

  if (projects.length > 0) {
    markdown += `## Projects\n\n`;
    for (const project of projects) {
      const projectName = project.id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      markdown += `### ${projectName}\n`;
      if (project.data.link) markdown += `- **Link:** ${project.data.link}\n`;
      if (project.data.technologies) markdown += `- **Technologies:** ${project.data.technologies}\n`;
      markdown += `\n${project.body ? project.body.trim() : ''}\n\n`;
    }
    markdown += `---\n\n`;
  }

  if (sortedEducation.length > 0) {
    markdown += `## Education\n\n`;
    for (const edu of sortedEducation) {
      const institutionName = edu.id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      markdown += `### ${edu.data.degree} in ${edu.data.fieldOfStudy}\n`;
      markdown += `**${institutionName} (${edu.data.startDate} — ${edu.data.endDate})**\n\n`;
      markdown += `${edu.body ? edu.body.trim() : ''}\n\n`;
    }
  }

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
