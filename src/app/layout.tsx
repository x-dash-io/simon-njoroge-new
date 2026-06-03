import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import { ManualThemeToggle } from '@/components/ManualThemeToggle';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simon Njoroge | Web Developer & Designer',
  description: 'I build websites and web applications that help businesses grow. Based in Nakuru, Kenya.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-neutral-900 dark:bg-slate-900 dark:text-neutral-100 transition-colors duration-300`}>
        <ThemeProvider>
          <Navbar />
          <SocialLinks />
          <ManualThemeToggle />
          <main className="container mx-auto px-4 py-8 min-h-screen pb-28">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
