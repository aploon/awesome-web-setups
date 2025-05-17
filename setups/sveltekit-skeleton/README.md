# SvelteKit + Skeleton Starter

Modern SvelteKit setup with Skeleton UI, a fully featured UI toolkit built with Tailwind.

## Features

- 🚀 SvelteKit 2.0
- 💀 Skeleton UI
- 🎨 TailwindCSS
- 🎯 TypeScript
- 📱 Responsive design
- 🌙 Dark mode

## Quick Start

```bash
# Create new project
npm create skeleton-app@latest my-app
cd my-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
├── src/
│   ├── lib/           # Shared components
│   │   └── components/
│   ├── routes/        # File-based routing
│   └── app.html      # App template
├── static/           # Static assets
└── svelte.config.js  # SvelteKit configuration
```

## Basic Usage

### Page Component
```svelte
<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { Button } from '@skeletonlabs/skeleton';
</script>

<div class="container mx-auto p-4">
  <h1 class="h1">Welcome to SvelteKit</h1>
  <p class="mt-4">Get started with Skeleton UI</p>
  <Button class="mt-4">Get Started</Button>
</div>
```

### Layout Component
```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import '@skeletonlabs/skeleton/themes/theme-modern.css';
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import '../app.postcss';
</script>

<div class="app">
  <slot />
</div>
```

## Theming

### Tailwind Configuration
```js
// tailwind.config.ts
import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {}
  },
  plugins: [
    skeleton({
      themes: { preset: ['modern'] }
    })
  ]
} satisfies Config;
```

### App Configuration
```js
// svelte.config.js
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};

export default config;
```

## Components

Skeleton UI provides many built-in components:
- Alerts
- Buttons
- Cards
- Drawers
- Forms
- Modals
- Tables
- And more! 