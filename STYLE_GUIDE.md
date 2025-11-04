# Style Guide

## 🎨 Colors

**All colors in `src/styles/globals.css` as CSS variables:**

```css
:root {
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  --neutral-700: #334155;
  --neutral-900: #0f172a;
}
```

**To change colors:** Edit `:root` variables in `globals.css`.

## 📦 Components

### Tiles
- `.tile` - Basic white tile
- `.tile-light` - Light primary background (blog posts, content)
- `.tile-accent` - Emphasized content
- `.tile-primary` - Call-to-action

### Buttons
- `.btn-primary` - Primary actions
- `.btn-secondary` - Secondary actions  
- `.btn-outline` - Tertiary actions

### Cards
- `.card` - Container
- `.card-header` - Top section
- `.card-body` - Main content
- `.card-footer` - Bottom section

## 📏 Layout

- `.container-custom` - 1200px max-width with responsive padding
- `.section-spacing` - Vertical section spacing

## 💡 Usage

Use component classes:

```tsx
// ✅ Good
<Link href="/blog" className="tile-light">

// ❌ Avoid
<Link className="bg-primary-50 border border-primary-100 rounded-xl p-6 ...">
```
