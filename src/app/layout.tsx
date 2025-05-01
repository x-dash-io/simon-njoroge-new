// src/app/layout.tsx (Single Layout Structure - FINAL for Dark Mode)
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/context/ThemeContext";     // <-- Import CONTEXT Provider
import Navbar from '@/components/Navbar';                   // Import Navbar
import SocialLinks from '@/components/SocialLinks';             // Import SocialLinks
import { ManualThemeToggle } from '@/components/ManualThemeToggle'; // <-- Import Toggle Button
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simon Njoroge Portfolio',
  description: 'My developer portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Add initial dark/light class based on server context/cookies if needed for SSR optimization later, but basic works without */}
      <body className={`${inter.className} bg-white text-neutral-900 dark:bg-slate-900 dark:text-neutral-100 transition-colors duration-300`}>
        {/* ThemeProvider wraps everything */}
        <ThemeProvider>
          <Navbar />
          <SocialLinks />
          <ManualThemeToggle /> {/* Render toggle button */}
          <main className="container mx-auto px-4 py-8 min-h-screen pb-28">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}