# Awesome Web Setups

Discover web project setups from developers around the world. Simple, fast, and built for devs who just want to build.

## Overview

This project provides a web interface to explore and preview different web development setups. Each setup includes detailed documentation, installation instructions, and best practices.

## Features

- 🔍 Search and filter setups by technology
- 📱 Responsive design with dark mode support
- 📖 Live Markdown preview with syntax highlighting

## Quick Start

```bash
# Install dependencies
npm install
pnpm install

# Start development server
npm run dev
pnpm dev
```

## Contributing by `pulling a request`

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
   
   Description and installation instructions...
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