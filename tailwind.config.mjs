import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Optional aliases for inline usage (most styling uses CSS variables in globals.css)
        primary: {
          600: "#2563eb",
          700: "#1d4ed8",
        },
        neutral: {
          600: "#475569",
          700: "#334155",
        },
      },
      maxWidth: {
        container: "1200px",
        prose: "75ch",
      },
    },
  },
  plugins: [typography],
};

export default config;
