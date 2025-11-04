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
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        "rsf-light-blue": "#8ecae6",
        "rsf-teal": "#219ebc",
        "rsf-navy": "#023047",
        "rsf-yellow": "#ffb703",
        "rsf-orange": "#fb8500",
        "med-sand": "#fdf5e6",
        "med-orange": "#f0a500",
        "med-light-blue": "#77c9d4",
        "med-turquoise": "#57a99a",
        "med-navy": "#1c3d5a",
        "dby-blue-1": "#00296b",
        "dby-blue-2": "#003f88",
        "dby-blue-3": "#00509d",
        "dby-yellow-1": "#fdc500",
        "dby-yellow-2": "#ffd500",
        "ob-1": "#03045e",
        "ob-2": "#023e8a",
        "ob-3": "#0077b6",
        "ob-4": "#0096c7",
        "ob-5": "#00b4d8",
        "ob-6": "#48cae4",
        "ob-7": "#90e0ef",
        "ob-8": "#ade8f4",
        "ob-9": "#caf0f8",
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
