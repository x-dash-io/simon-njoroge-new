// src/app/projects/page.tsx
import ProjectList from '@/components/ProjectList';
import { hardcodedProjects } from '@/lib/data/projects'; // Import from shared file
import type { Project as ProjectType } from '@/components/ProjectCard'; // Assuming type is exported from Card

export default function ProjectsPage() {
  const projects = hardcodedProjects; // Use imported data

  return (
    <section>
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      {projects.length > 0 ? (
         <ProjectList projects={projects} />
      ) : (
        <p>No projects available yet.</p>
      )}
    </section>
  );
}