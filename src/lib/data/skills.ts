import { IconType } from 'react-icons';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb } from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb";

export interface Skill {
  name: string;
  icon?: IconType;
  businessValue?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    name: 'Websites That Work',
    description: 'I build custom websites designed to attract visitors, keep them engaged, and convert them into customers.',
    skills: [
      { name: 'React', icon: FaReact, businessValue: 'Builds interactive, app-like experiences that keep users engaged' },
      { name: 'Next.js', icon: TbBrandNextjs, businessValue: 'Delivers fast-loading pages that rank higher in search results' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, businessValue: 'Creates consistent, professional designs that load quickly' },
      { name: 'HTML5', icon: FaHtml5, businessValue: 'Structured, accessible content that works everywhere' },
      { name: 'CSS3', icon: FaCss3Alt, businessValue: 'Beautiful, responsive layouts that look great on any device' },
      { name: 'JavaScript', icon: FaJsSquare, businessValue: 'Adds interactivity and features that make your site come alive' },
      { name: 'TypeScript', icon: SiTypescript, businessValue: 'Builds more reliable applications with fewer bugs' },
      { name: 'Responsive Design', businessValue: 'Your site works perfectly on phones, tablets, and desktops' },
    ],
  },
  {
    name: 'Powerful Behind-the-Scenes Systems',
    description: 'The engine that powers your business online — from user accounts to data management, I build systems that automate and streamline your operations.',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, businessValue: 'Fast, scalable backend that handles growth without slowing down' },
      { name: 'Express', businessValue: 'Lightweight framework for building reliable APIs and services' },
      { name: 'PostgreSQL', icon: SiPostgresql, businessValue: 'Secure, reliable data storage you can trust with your business information' },
      { name: 'MongoDB', icon: SiMongodb, businessValue: 'Flexible database that adapts to your changing business needs' },
    ],
  },
  {
    name: 'Tools for Reliable Delivery',
    description: 'I use professional-grade tools to ensure your project is built correctly, delivered on time, and easy to maintain.',
    skills: [
      { name: 'Git & GitHub', icon: FaGitAlt, businessValue: 'Tracks changes so nothing gets lost and updates are seamless' },
      { name: 'Docker', icon: FaDocker, businessValue: 'Ensures your application runs the same everywhere — no surprises' },
      { name: 'Vercel', businessValue: 'Fast, reliable hosting with automatic updates and global reach' },
    ],
  },
  {
    name: 'Design That Connects',
    description: 'Great design isn\'t just about looking good — it\'s about guiding visitors to take action and making your business memorable.',
    skills: [
      { name: 'Figma', icon: FaFigma, businessValue: 'Designs that are planned and tested before a single line of code is written' },
      { name: 'UI/UX Principles', businessValue: 'Interfaces that are intuitive, reducing confusion and keeping users happy' },
    ],
  },
];
