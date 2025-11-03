# Dylan Finlay Website - Style Guide

## 🎨 Design System

This document outlines the design tokens and styling conventions for the website.

---

## Colors

### Primary (Blue)

Used for links, CTAs, and interactive elements.

- `primary-50`: #eff6ff (lightest)
- `primary-500`: #3b82f6 (main)
- `primary-600`: #2563eb (hover)
- `primary-700`: #1d4ed8 (active)

### Neutral (Slate)

Used for text, backgrounds, and borders.

- `neutral-50`: #f8fafc (lightest background)
- `neutral-100`: #f1f5f9 (light background)
- `neutral-200`: #e2e8f0 (borders)
- `neutral-600`: #475569 (secondary text)
- `neutral-700`: #334155 (body text)
- `neutral-800`: #1e293b (dark text)
- `neutral-900`: #0f172a (headings)

### Background

- Main: `bg-neutral-50`
- Cards: `bg-white`

---

## Typography

### Font Families

- **Sans-serif**: System font stack (default)
- **Serif**: Georgia, Cambria (optional for article content)
- **Mono**: SF Mono, Consolas (code)

### Scale

- **H1**: `text-4xl md:text-5xl` (36px → 48px)
- **H2**: `text-3xl md:text-4xl` (30px → 36px)
- **H3**: `text-2xl md:text-3xl` (24px → 30px)
- **Body**: `text-base` (16px)
- **Large**: `text-lg` (18px)
- **Small**: `text-sm` (14px)

### Weights

- **Regular**: 400 (body text)
- **Medium**: 500 (labels, dates)
- **Semibold**: 600 (headings, buttons)
- **Bold**: 700 (emphasis)

---

## Spacing

### Container

- Max width: `1200px`
- Padding: `px-4 sm:px-6 lg:px-8`

### Section Spacing

- Vertical: `py-12 md:py-16 lg:py-20`

### Component Gaps

- Tight: `gap-2` (8px)
- Default: `gap-4` (16px)
- Loose: `gap-6` (24px)

---

## Components

### Buttons

#### Primary Button

```tsx
<button className="btn-primary">Click me</button>
```

- Background: `primary-600`
- Hover: `primary-700`
- Includes focus ring

#### Secondary Button

```tsx
<button className="btn-secondary">Click me</button>
```

- Background: `neutral-100`
- Hover: `neutral-200`

### Cards

- Border: `border-neutral-200`
- Rounded: `rounded-lg`
- Padding: `p-6`
- Hover: `border-primary-200` + `shadow-lg`

### Links

- Default: `text-primary-600`
- Hover: `text-primary-700` + underline
- Transition: `duration-200`

---

## Layout Utilities

### Container

```tsx
<div className="container-custom">
  {/* Max-width container with responsive padding */}
</div>
```

### Section Spacing

```tsx
<section className="section-spacing">
  {/* Consistent vertical spacing */}
</section>
```

### Prose (Blog Content)

```tsx
<div className="prose prose-lg prose-neutral">
  {/* Tailwind Typography styles */}
</div>
```

---

## Interactive States

### Hover

- Duration: `200ms`
- Easing: Default cubic-bezier

### Focus

- Ring: `ring-2`
- Color: `ring-primary-500`
- Offset: `ring-offset-2`

### Active

- Slight scale: `active:scale-95` (for buttons)

---

## Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

---

## Usage Examples

### Page Layout

```tsx
export default function MyPage() {
  return (
    <section className="container-custom">
      <h1 className="mb-6">Page Title</h1>
      <p className="text-lg text-neutral-600">Page description</p>
    </section>
  );
}
```

### Blog Post

```tsx
<article className="container-custom">
  <header className="mb-12 max-w-3xl">
    <h1 className="mb-4">Post Title</h1>
    <p className="text-base font-medium text-neutral-500">Date</p>
  </header>
  <div className="prose prose-lg prose-neutral mx-auto">{/* Content */}</div>
</article>
```

### Card Grid

```tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  <Card {...props} />
  <Card {...props} />
  <Card {...props} />
</div>
```

---

## Best Practices

1. **Use utility classes over custom CSS** when possible
2. **Maintain consistent spacing** using Tailwind's scale
3. **Keep max-width constraints** for readability (prose, containers)
4. **Add smooth transitions** to interactive elements
5. **Test responsive behavior** at all breakpoints
6. **Use semantic HTML** (article, section, nav, etc.)
7. **Keep accessibility in mind** (focus states, ARIA labels)

---

## Future Considerations

- [ ] Dark mode toggle
- [ ] Custom fonts (Google Fonts or local)
- [ ] Animation library (Framer Motion)
- [ ] Image optimization strategy
- [ ] Loading states
- [ ] Error states

---

_Last updated: November 3, 2025_
