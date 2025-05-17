# Astro + Tailwind Starter

Lightning-fast static site builder with Astro 4.0, TailwindCSS, and built-in Markdown support.

## Features

- 🚀 Astro 4.0
- 🎨 TailwindCSS
- 📝 Markdown/MDX support
- 🎯 TypeScript
- 📱 Responsive design
- ⚡ Fast builds

## Quick Start

```bash
# Create new project
npm create astro@latest my-site
cd my-site

# Add Tailwind
npx astro add tailwind

# Start development server
npm run dev
```

## Project Structure

```
├── src/
│   ├── components/   # Astro/React components
│   ├── layouts/      # Page layouts
│   ├── pages/        # File-based routing
│   │   └── posts/    # Blog posts (Markdown)
│   └── styles/       # Global styles
├── public/           # Static assets
└── astro.config.mjs  # Astro configuration
```

## Basic Usage

### Page Component
```astro
---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
---

<Layout title="Welcome">
  <main class="p-4 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-900">
      Welcome to Astro
    </h1>
    <p class="mt-4 text-gray-600">
      Build faster websites with less client-side JavaScript
    </p>
  </main>
</Layout>
```

### Markdown Blog Post
```markdown
---
// src/pages/posts/hello-world.md
layout: ../../layouts/BlogPost.astro
title: Hello, World!
date: 2024-01-01
---

# Hello, World!

This is my first blog post written in Markdown.
```

## Customization

### Tailwind Configuration
```js
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Your custom colors
      }
    }
  }
}
```

### Astro Configuration
```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'dracula'
    }
  }
});
``` 