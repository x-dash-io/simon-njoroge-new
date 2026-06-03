import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { hardcodedProjects } from '@/lib/data/projects';

const services = [
  {
    title: 'Custom Websites',
    description: 'A professional website that makes your business look credible, attracts customers, and works on every device.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Web Applications',
    description: 'Custom tools and platforms that automate your business processes and save you time and money.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Performance & SEO',
    description: 'Fast-loading, search-engine-friendly websites that help customers find you and stay on your site.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const featuredProjects = hardcodedProjects.slice(0, 3);

  return (
    <div>
      <section className="text-center py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-44 h-44 md:w-52 md:h-52 mx-auto mb-8 relative overflow-hidden rounded-2xl shadow-xl border-4 border-neutral-200 dark:border-neutral-700">
            <Image
              src="/images/me.jpg"
              alt="Simon Njoroge"
              fill
              sizes="(max-width: 768px) 176px, 208px"
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            I Build Websites That Grow Your Business
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-3 max-w-2xl mx-auto">
            From a professional online presence to custom web applications — I help businesses attract customers, streamline operations, and scale online.
          </p>
          <p className="text-base text-neutral-500 dark:text-neutral-500 mb-8 max-w-xl mx-auto">
            No technical jargon. Just results that matter for your business.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/what-i-do"
              className="px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg shadow hover:bg-cyan-700 transition-colors duration-200"
            >
              See How I Can Help
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200 font-medium rounded-lg shadow hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors duration-200"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">How I Help Businesses Grow</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
            I combine clean design with solid technology to deliver websites and applications that solve real business problems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 border border-neutral-200 dark:border-neutral-700">
                <div className="text-cyan-600 dark:text-cyan-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/what-i-do" className="text-cyan-600 hover:underline dark:text-cyan-400 font-medium">
              Learn more about what I do &rarr;
            </Link>
          </div>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Recent Work</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
              Each project is focused on delivering real value — whether that&apos;s a better user experience, a faster website, or a tool that makes work easier.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {featuredProjects.map((project) => (
                 <ProjectCard key={project.slug} project={project} />
               ))}
            </div>
             <div className="text-center mt-12">
                <Link href="/projects" className="px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg shadow hover:bg-cyan-700 transition-colors duration-200 inline-block">
                  View All Projects
                </Link>
              </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 bg-cyan-600 dark:bg-cyan-700 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Online Presence?</h2>
          <p className="text-lg mb-8 text-cyan-100">
            Whether you need a brand-new website, want to improve an existing one, or have a project idea — let&apos;s talk about how I can help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-cyan-700 font-medium rounded-lg shadow hover:bg-cyan-50 transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
