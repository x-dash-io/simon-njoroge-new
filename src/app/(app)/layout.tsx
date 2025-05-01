// src/app/(app)/layout.tsx (Reintroduce SocialLinks)
import React from 'react';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks'; // <-- Add import back

export default function AppLayout({ children }: { children: React.ReactNode; }) {
  return (
    <> {/* Use fragment */}
      <Navbar />
      <SocialLinks /> {/* <-- Add component back */}
      <main className="container mx-auto px-4 py-8 min-h-screen pb-28">
        {children}
      </main>
    </>
  );
}