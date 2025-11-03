# Assets Organization Guide

This folder contains all static assets for the Dylan Finlay website.

## 📁 Folder Structure

```
public/assets/
├── portfolio/          Career portfolio assets (projects, company logos, screenshots)
├── gallery/            Photography gallery images
├── blog/               Blog post images and media
├── gear/               Camera/equipment photos
└── icons/              UI icons, logos, favicons
```

---

## 📝 Usage Guidelines

### **Portfolio** (`/assets/portfolio/`)

For career-related assets:

- Project screenshots
- Company logos
- Tech stack icons
- Certificates/awards
- Resume/CV assets

**Example paths:**

- `/assets/portfolio/project-screenshot.jpg`
- `/assets/portfolio/company-logo.png`

**Usage:**

```tsx
<Image
  src="/assets/portfolio/my-project.jpg"
  width={800}
  height={600}
  alt="Project name"
/>
```

---

### **Gallery** (`/assets/gallery/`)

For photography portfolio:

- Travel photos
- Portrait work
- Landscape shots
- Event photography

**Organization suggestions:**

- Create subfolders by location: `gallery/japan-2024/`
- Or by type: `gallery/portraits/`, `gallery/landscapes/`
- Or by year: `gallery/2024/`, `gallery/2025/`

**Example:**

```tsx
<Image
  src="/assets/gallery/japan-2024/sunset.jpg"
  width={1200}
  height={800}
  alt="Sunset in Japan"
/>
```

---

### **Blog** (`/assets/blog/`)

For blog post images:

- Featured images (cover photos)
- In-article images
- Diagrams/screenshots

**Naming convention:**

- Use post slug as prefix: `my-post-title-cover.jpg`
- Or organize by post: `blog/my-post-title/cover.jpg`

**Example:**

```mdx
---
cover: "/assets/blog/sample-post-cover.jpg"
---

![Description](/assets/blog/sample-post-inline.jpg)
```

---

### **Gear** (`/assets/gear/`)

For photography/videography equipment:

- Camera photos
- Lens photos
- Accessory images
- Setup shots

**Example:**

```tsx
<Image
  src="/assets/gear/sony-a7iv.jpg"
  width={600}
  height={400}
  alt="Sony A7 IV"
/>
```

---

### **Icons** (`/assets/icons/`)

For UI elements:

- Site favicon
- Social media icons
- Tech stack icons
- Custom UI icons

**Example:**

```tsx
<img src="/assets/icons/react.svg" alt="React" className="h-8 w-8" />
```

---

## 🎯 Best Practices

### **File Naming**

- Use lowercase
- Use hyphens, not spaces: `my-photo.jpg` ✅ not `My Photo.jpg` ❌
- Be descriptive: `sony-a7iv-front.jpg` not `IMG_1234.jpg`
- Include dimensions for large files: `hero-1920x1080.jpg`

### **Image Optimization**

- Use `.jpg` for photos (smaller file size)
- Use `.png` for graphics with transparency
- Use `.svg` for logos/icons (scalable)
- Use `.webp` for best compression (modern format)
- Consider multiple sizes: `image-sm.jpg`, `image-md.jpg`, `image-lg.jpg`

### **Organization Tips**

- Keep related assets together
- Create subfolders when you have 10+ files in a category
- Delete unused assets regularly
- Consider adding a `_temp/` folder for testing

### **Performance**

- Compress images before uploading (use tools like TinyPNG, ImageOptim)
- Aim for <500KB per image for web
- Use Next.js `<Image>` component for automatic optimization
- Consider lazy loading for galleries

---

## 📦 Example Structure (Expanded)

```
public/assets/
├── portfolio/
│   ├── projects/
│   │   ├── project-1-hero.jpg
│   │   ├── project-1-screenshot-1.jpg
│   │   └── project-2-demo.jpg
│   ├── companies/
│   │   ├── company-a-logo.png
│   │   └── company-b-logo.png
│   └── tech/
│       ├── react-icon.svg
│       └── typescript-icon.svg
│
├── gallery/
│   ├── travel/
│   │   ├── japan-2024/
│   │   │   ├── tokyo-street.jpg
│   │   │   └── mount-fuji.jpg
│   │   └── europe-2023/
│   │       └── paris-sunset.jpg
│   ├── portraits/
│   └── landscapes/
│
├── blog/
│   ├── 2025-11-03-first-post/
│   │   ├── cover.jpg
│   │   └── diagram.png
│   └── shared/
│       └── author-avatar.jpg
│
├── gear/
│   ├── cameras/
│   │   └── sony-a7iv.jpg
│   └── lenses/
│       └── sony-24-70mm.jpg
│
└── icons/
    ├── favicon.ico
    ├── logo.svg
    └── social/
        ├── github.svg
        └── linkedin.svg
```

---

## 🚀 Quick Reference

| Asset Type        | Folder               | Example Path                            |
| ----------------- | -------------------- | --------------------------------------- |
| Portfolio project | `/assets/portfolio/` | `/assets/portfolio/my-project.jpg`      |
| Photography       | `/assets/gallery/`   | `/assets/gallery/landscapes/sunset.jpg` |
| Blog images       | `/assets/blog/`      | `/assets/blog/post-name/cover.jpg`      |
| Equipment         | `/assets/gear/`      | `/assets/gear/sony-a7iv.jpg`            |
| Icons/logos       | `/assets/icons/`     | `/assets/icons/logo.svg`                |

---

_Last updated: November 3, 2025_
