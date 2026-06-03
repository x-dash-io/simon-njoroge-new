import type { Metadata } from 'next';
import Link from 'next/link';
import { BiDownload, BiFileBlank } from 'react-icons/bi';

export const metadata: Metadata = {
  title: 'Resume | Simon Njoroge',
  description: 'Download my resume to learn more about my experience and how I can help your business.',
};

export default function ResumePage() {
  const resumeFilename = "SimonNjoroge_Resume.pdf";
  const resumeUrl = `/docs/${resumeFilename}`;

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">My Resume</h1>

        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg mx-auto">
          A detailed overview of my experience, education, and the results I&apos;ve delivered. Download it to see how I can contribute to your team or project.
        </p>

        <Link
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg shadow hover:bg-cyan-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 mb-4"
        >
          <BiDownload className="w-5 h-5" />
          Download Resume (PDF)
        </Link>

        <div className="mt-10 bg-neutral-100 dark:bg-neutral-800 rounded-xl p-6 md:p-8">
          <BiFileBlank className="w-10 h-10 text-neutral-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Quick Overview</h2>
          <ul className="text-neutral-600 dark:text-neutral-400 space-y-2 text-left max-w-sm mx-auto">
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 mt-1">&#10003;</span>
              <span>Building responsive websites and web applications</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 mt-1">&#10003;</span>
              <span>Information Technology student at Kabarak University</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 mt-1">&#10003;</span>
              <span>Experienced with React, Next.js, Node.js, and modern web tools</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 mt-1">&#10003;</span>
              <span>Available for freelance projects and internship opportunities</span>
            </li>
          </ul>
        </div>

        <p className="mt-8 text-neutral-600 dark:text-neutral-400">
          Prefer to talk first? <Link href="/contact" className="text-cyan-600 hover:underline dark:text-cyan-400">Get in touch</Link>
        </p>
      </div>
    </section>
  );
}
