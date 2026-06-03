import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Simon Njoroge',
  description: 'Simon Njoroge builds websites and web applications that help businesses grow. Based in Nakuru, Kenya.',
};

export default function AboutPage() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-10 md:mb-16">About Me</h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 relative overflow-hidden rounded-full shadow-lg border-4 border-neutral-200 dark:border-neutral-700">
            <Image
              src="/images/profile-photo.jpg"
              alt="Simon Njoroge"
              fill
              sizes="(max-width: 768px) 192px, 224px"
              className="object-cover"
              priority
            />
          </div>

          <div className="text-lg text-neutral-800 dark:text-neutral-200 space-y-5 text-center md:text-left">
             <p className="text-xl font-semibold text-cyan-700 dark:text-cyan-400">
               I help businesses grow by building websites that are fast, beautiful, and easy to use.
             </p>
             <p>
               Hi, I&apos;m <strong className="font-semibold">Simon Njoroge</strong> — a Web Developer and Designer based in Rongai, Nakuru County, Kenya. I turn ideas into functional, engaging websites and applications that help businesses attract customers and operate more efficiently.
             </p>
             <p>
               I&apos;m currently pursuing a degree in <strong className="font-semibold">Information Technology</strong> at <strong className="font-semibold">Kabarak University</strong>, where I combine academic knowledge with hands-on project experience. My focus is always on the same thing: delivering results that matter for your business.
             </p>
            <p>
              What I care about most is <strong className="font-semibold">making technology work for people</strong>. Whether it&apos;s a simple business website or a complex web application, I prioritize:
            </p>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li><strong>Clarity</strong> — Visitors should understand what you offer within seconds</li>
              <li><strong>Speed</strong> — Fast-loading sites keep visitors engaged and improve search rankings</li>
              <li><strong>Reliability</strong> — Your site should work flawlessly on any device, every time</li>
              <li><strong>Growth</strong> — Every project is built with your business goals in mind</li>
            </ul>
            <p>
              I&apos;m currently open to <strong className="font-semibold">internship opportunities</strong> and <strong className="font-semibold">freelance projects</strong>. If you need a website that actually helps your business grow, let&apos;s talk.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <Link href="/contact" className="px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg shadow hover:bg-cyan-700 transition-colors duration-200">
                Let&apos;s Work Together
              </Link>
              <Link href="/projects" className="px-6 py-3 bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200 font-medium rounded-lg shadow hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors duration-200">
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
