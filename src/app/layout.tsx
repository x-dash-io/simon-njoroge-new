// src/app/layout.tsx (Minimal Root - CORRECTED)
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Keep global styles

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simon Njoroge Portfolio', // Update title
  description: 'My developer portfolio website', // Update description
};

export default function MinimalRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300`}>
        {/* Just render children directly - the (app) layout will provide Navbar/main */}
        {/* <ThemeProvider> */} {/* Add back later for dark mode */}
           {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}