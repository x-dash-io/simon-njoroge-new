// src/app/(app)/layout.tsx (Add back Navbar)
import React from 'react';
import Navbar from '@/components/Navbar'; // Import Navbar

export default function AppLayout({ children }: { children: React.ReactNode; }) {
  // IMPORTANT: Ensure Navbar.tsx still has Dark Mode Toggle commented out for now!
  return (
    <> {/* Use fragment */}
      <Navbar /> {/* Add Navbar */}
      <main className="container mx-auto px-4 py-8 min-h-screen pb-28">
        {children}
      </main>
    </>
  );
}