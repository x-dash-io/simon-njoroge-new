// src/app/(app)/layout.tsx (Add back <main>)
import React from 'react';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Add main tag back with its classes
    <main className="container mx-auto px-4 py-8 min-h-screen pb-28">
      {children}
    </main>
  );
}