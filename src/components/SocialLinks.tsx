import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa6';

const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/x-dash-io', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/simon-njoroge-4b538a268/', icon: FaLinkedin },
    { label: 'WhatsApp', href: 'https://wa.me/254748088741', icon: FaWhatsapp },
    { label: 'Instagram', href: 'https://instagram.com/singason.py', icon: FaInstagram },
  ];

export default function SocialLinks() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;

        return (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to my ${link.label}`}
            title={link.label}
            className="p-2 bg-white/50 dark:bg-neutral-700/50 backdrop-blur-sm border border-neutral-300 dark:border-neutral-600 rounded-full text-neutral-700 dark:text-neutral-200 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-colors duration-200 shadow-md"
          >
            <IconComponent className="w-5 h-5" />
          </Link>
        );
      })}
    </div>
  );
}
