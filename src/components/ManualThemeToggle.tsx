// src/components/ManualThemeToggle.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { useThemeContext } from '@/context/ThemeContext';
import { BiSun, BiMoon } from 'react-icons/bi';

export function ManualThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Render a placeholder matching button size until mounted
  if (!mounted) {
    return <div className="fixed top-6 right-6 z-40 w-10 h-10 p-2" />; // Placeholder div
  }

  const isDarkMode = theme === 'dark';

  return (
    <button
      aria-label={isDarkMode ? "Activate light mode" : "Activate dark mode"}
      title={isDarkMode ? "Activate light mode" : "Activate dark mode"}
      onClick={toggleTheme}
      // Apply fixed positioning here! Adjusted top/right values like social links
      className="fixed top-6 right-6 z-40 p-2 rounded-full transition-all duration-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 bg-neutral-100/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 shadow-md"
    >
      {isDarkMode ? <BiSun className="w-5 h-5" /> : <BiMoon className="w-5 h-5" />}
    </button>
  );
}