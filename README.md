# Dylan Finlay's Personal Website

A modern personal website built with Next.js 15, featuring a blog, portfolio, and project showcase with a clean tile-based design.

## 🎨 Customizing Colors

Edit CSS variables at the top of `src/styles/globals.css`:

```css
:root {
  --primary-600: #2563eb; /* Main blue */
  --primary-700: #1d4ed8; /* Hover state */
  --neutral-700: #334155; /* Body text */
}
```

All component classes (`.tile-light`, `.btn-primary`, etc.) use these variables. Change once, update entire site.

📖 See [COLOR_SYSTEM.md](COLOR_SYSTEM.md) for examples

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
