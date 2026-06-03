import type { Metadata } from 'next';
import { BiEnvelope } from 'react-icons/bi';

export const metadata: Metadata = {
  title: 'Contact | Simon Njoroge',
  description: 'Get in touch with Simon Njoroge to discuss your project, collaboration, or hiring opportunities.',
};

export default function ContactPage() {
  const contactEmail = "simonnjorogew65@gmail.com";

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-4">Let&apos;s Work Together</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center mb-12 max-w-xl mx-auto">
          Have a project in mind? Need a website or web application? Let&apos;s discuss how I can help your business grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Get In Touch</h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              I&apos;m currently open to freelance projects, internship opportunities, and collaborations. Whether you have a clear vision or just an idea, I&apos;d love to hear about it.
            </p>

            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-5 space-y-3">
              <h3 className="font-semibold">How I Can Help</h3>
              <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">&#10003;</span>
                  <span>Custom websites that establish your professional presence online</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">&#10003;</span>
                  <span>Web applications that automate and streamline your business processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">&#10003;</span>
                  <span>Improvements to existing sites — better performance, design, or functionality</span>
                </li>
              </ul>
            </div>

            <p className="text-neutral-700 dark:text-neutral-300">
              The best way to reach me is via email:
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 text-cyan-600 hover:underline dark:text-cyan-400 text-lg font-medium"
            >
              <BiEnvelope className="w-5 h-5" /> {contactEmail}
            </a>

            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              I typically respond within 24 hours.
            </p>
          </div>

          <div>
             <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
            <form action="https://formspree.io/f/mgvkogvj" method="POST" className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm bg-white dark:bg-neutral-800 text-black dark:text-white"
                  placeholder="Dylan James"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm bg-white dark:bg-neutral-800 text-black dark:text-white"
                  placeholder="you@example.com"
                />
              </div>
               <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm bg-white dark:bg-neutral-800 text-black dark:text-white"
                  placeholder="Website redesign / New project / Collaboration"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm bg-white dark:bg-neutral-800 text-black dark:text-white"
                  placeholder="What are you looking to build? What goals do you have for your business?"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-2.5 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 focus:ring-cyan-500 transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
