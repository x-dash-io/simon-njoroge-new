import type { Metadata } from 'next';
import ProjectList from '@/components/ProjectList';
import { hardcodedProjects } from '@/lib/data/projects';

export const metadata: Metadata = {
  title: 'Projects | Simon Njoroge',
  description: 'See how I help businesses grow through custom websites and applications.',
};

export default function ProjectsPage() {
  const projects = hardcodedProjects;

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">My Work</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          Every project is focused on delivering real results — whether that&apos;s a better experience for users, a faster website, or a tool that makes work easier. Here&apos;s what I&apos;ve been building.
        </p>
        {projects.length > 0 ? (
           <ProjectList projects={projects} />
        ) : (
          <p className="text-center text-neutral-500">Projects coming soon. Check back or <a href="/contact" className="text-cyan-600 hover:underline">get in touch</a> to see what I&apos;m currently working on.</p>
        )}
      </div>
    </section>
  );
}
