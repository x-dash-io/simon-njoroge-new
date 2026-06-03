import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { hardcodedProjects } from '@/lib/data/projects';

interface Props {
  params: { slug: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const project = hardcodedProjects.find(p => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} | Simon Njoroge`,
    description: project.outcome || project.description || 'Project case study',
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = hardcodedProjects.find(p => p.slug === params.slug);

  if (!project) {
      notFound();
  }

  return (
        <article className="py-8 max-w-4xl mx-auto">
            <Link href="/projects" className="text-cyan-600 hover:underline dark:text-cyan-400 mb-6 inline-block">
              &larr; Back to Projects
            </Link>

            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

            {project.outcome && (
              <p className="text-xl text-cyan-600 dark:text-cyan-400 font-medium mb-6 leading-tight">
                {project.outcome}
              </p>
            )}

            {project.projectImage?.url && (
                <div className="relative w-full h-64 md:h-80 mb-8 overflow-hidden rounded-lg shadow-md">
                    <Image
                        src={project.projectImage.url}
                        alt={project.projectImage.alt || project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 80vw"
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-semibold mr-2">Built with:</span>
                {project.technologies?.map((tech) => (
                    <span key={tech.id || tech.name} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
                {project.liveUrl && project.liveUrl !== '#' && (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                        View Live Site &rarr;
                    </Link>
                )}
                {project.repoUrl && project.repoUrl !== '#' && (
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors">
                        View Code &rarr;
                    </Link>
                )}
            </div>

            <div className="space-y-6">
              {project.challenge && (
                <div>
                  <h2 className="text-2xl font-semibold mb-3">The Challenge</h2>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{project.challenge}</p>
                </div>
              )}

              <div>
                <h2 className="text-2xl font-semibold mb-3">The Solution</h2>
                {project.description ? (
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{project.description}</p>
                ) : (
                    <p className="text-neutral-500">Details coming soon.</p>
                )}
              </div>

              {project.result && (
                <div>
                  <h2 className="text-2xl font-semibold mb-3">The Result</h2>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{project.result}</p>
                </div>
              )}
            </div>

            <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700 text-center">
              <p className="text-lg mb-4 text-neutral-600 dark:text-neutral-400">Interested in working together on something similar?</p>
              <Link href="/contact" className="px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg shadow hover:bg-cyan-700 transition-colors duration-200 inline-block">
                Let&apos;s Talk About Your Project
              </Link>
            </div>
        </article>
    );
}
