// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Enable class-based dark mode
    content: [
      // Paths to ALL files that use Tailwind classes
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      // Add other folders like ./src/lib if they use Tailwind classes
    ],
    theme: {
      extend: {
        // You can add custom theme extensions here later
      },
    },
    plugins: [
      // Add plugins like @tailwindcss/forms here if needed later
    ],
  }