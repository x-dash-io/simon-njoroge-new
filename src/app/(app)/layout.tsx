// src/app/(app)/layout.tsx (TEMPORARILY SIMPLIFIED)
import React from 'react';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove Navbar, SocialLinks, <main> tag etc. Just return children.
  return <>{children}</>;
}