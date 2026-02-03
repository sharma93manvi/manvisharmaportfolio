import { allProjects } from "contentlayer/generated";
import { ProjectsClient } from "./projects-client";

// Helper function to safely serialize project data
function serializeProject(project: typeof allProjects[0]) {
  return {
    slug: String(project.slug ?? ''),
    title: String(project.title ?? ''),
    description: String(project.description ?? ''),
    date: project.date ? String(project.date) : undefined,
    url: project.url ? String(project.url) : undefined,
    repository: project.repository ? String(project.repository) : undefined,
    tags: Array.isArray(project.tags) ? project.tags.map(t => String(t)) : [],
    published: Boolean(project.published ?? true),
  };
}

export default function ProjectsPage() {
  // Create plain objects with only serializable values
  const serializedProjects = allProjects.map(serializeProject);

  return <ProjectsClient allProjects={serializedProjects} />;
}
