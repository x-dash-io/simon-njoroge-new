// src/app/(app)/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard'; // Reuse the project card
import { hardcodedProjects } from '@/lib/data/projects'; // Import your projects data

export default function HomePage() {
  // Select a few projects to feature (e.g., the first 3)
  // Adjust slice(0, 3) if you want to feature different/more projects
  const featuredProjects = hardcodedProjects.slice(0, 3);

  return (
    <div>
      {/* --- Hero Section --- */}
      <section className="text-center py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Optional: Add your profile picture here if desired */}
          <Image
            src="/images/profile-photo.jpg" // Replace with your photo path
            alt="Your Name"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-6 border-4 border-neutral-200 dark:border-neutral-700 shadow-lg"
            priority
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Simon Njoroge {/* <<< CUSTOMIZE: Your Name */}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8">
            Web Developer & Designer | Building Digital Experiences
            {/* <<< CUSTOMIZE: Your Title/Tagline */}
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg shadow hover:bg-cyan-700 transition-colors duration-200"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200 font-medium rounded-lg shadow hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* --- Featured Projects Section --- */}
      {featuredProjects.length > 0 && (
        <section className="py-16 md:py-20 bg-neutral-100 dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {featuredProjects.map((project) => (
                 <ProjectCard key={project.slug} project={project} />
               ))}
            </div>
             <div className="text-center mt-12">
                <Link href="/projects" className="text-cyan-600 hover:underline dark:text-cyan-400 font-medium">
                  View All Projects &rarr;
                </Link>
              </div>
          </div>
        </section>
      )}

       {/* --- Optional: Skills Overview --- */}
       {/* Uncomment and customize if desired */}
       {/* <section className="py-16 md:py-20"> ... </section> */}

        {/* --- Optional: Final Call to Action --- */}
        {/* Uncomment and customize if desired */}
        {/* <section className="text-center py-16 md:py-24"> ... </section> */}

    </div>
  );
}