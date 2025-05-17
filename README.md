# Awesome Web Setups

A collection of modern web development setups with live preview and documentation.

## Overview

This project provides a web interface to explore and preview different web development setups. Each setup includes detailed documentation, installation instructions, and best practices.

## Features

- 🔍 Search and filter setups by technology
- 📱 Responsive design with dark mode support
- 📖 Live Markdown preview with syntax highlighting
- 🏷️ Technology tags with visual indicators
- ⚡ Fast and modern UI with Next.js 14

## Available Setups

### Next.js + shadcn/ui
Modern Next.js setup with shadcn/ui components and TailwindCSS.

### Laravel + Inertia.js
Full-stack setup with Laravel, Inertia.js, and Vue 3.

### Astro + Tailwind
Static site setup with Astro and TailwindCSS.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Adding a New Setup

1. Create a new directory in `setups/`
2. Add two files:
   ```
   meta.json
   ```
   ```json
   {
     "title": "Setup Name",
     "description": "Brief description",
     "author": "your-name",
     "github": "https://github.com/aploon",
     "tags": ["tech1", "tech2"],
     "slug": "setup-name"
   }
   ```
   ```
   README.md
   ```
   ```markdown
   # Setup Name
   
   Description and documentation...
   ```

## Tech Stack

- Next.js 14
- TailwindCSS
- shadcn/ui
- TypeScript
- Markdown processing

## Contributors

<a href="https://github.com/aploon" title="Arnaud ADJOVI">
    <img src="https://avatars.githubusercontent.com/u/69767160?v=4" width="42;" alt="Arnaud ADJOVI"/>
</a>

Made with [contributors](https://github.com/aploon/github-action-contributors).

### License

Licensed under the MIT License.