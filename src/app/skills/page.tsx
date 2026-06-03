import type { Metadata } from 'next';
import Link from 'next/link';
import { skillsData } from '@/lib/data/skills';

export const metadata: Metadata = {
  title: 'What I Do | Simon Njoroge',
  description: 'How I help businesses grow through custom websites, web applications, and digital solutions.',
};

export default function SkillsPage() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-4">What I Can Do For Your Business</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          I don&apos;t just write code — I build solutions that help your business attract customers, save time, and grow. Here&apos;s how each area translates to real value for you.
        </p>

        <div className="space-y-12">
          {skillsData.map((category) => (
            <div key={category.name}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                  {category.description}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-start gap-3 p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
                    >
                      {IconComponent && (
                        <div className="flex-shrink-0 mt-0.5">
                          <IconComponent className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                        </div>
                      )}
                      <div>
                        <span className="font-medium text-neutral-800 dark:text-neutral-200 block mb-1">
                          {skill.name}
                        </span>
                        {skill.businessValue && (
                          <span className="text-sm text-neutral-500 dark:text-neutral-400 block leading-snug">
                            {skill.businessValue}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 bg-neutral-100 dark:bg-neutral-800 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md mx-auto">
            Let&apos;s discuss how I can help bring your idea to life. No obligation, just a conversation about what you need.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg shadow hover:bg-cyan-700 transition-colors duration-200"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
