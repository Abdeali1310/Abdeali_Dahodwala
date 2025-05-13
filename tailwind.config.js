/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // Required for dark/light mode toggle to work
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      // If you're using ShadCN UI, add this:
      "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
      },
    },
    plugins: [
      
    ],
  };
  