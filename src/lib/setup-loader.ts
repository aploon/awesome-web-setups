import fs from 'fs'
import path from 'path'

export interface Setup {
  title: string
  slug: string
  tags: string[]
  description: string
  author: string
  github: string
  readme?: string
}

export async function getSetups(): Promise<Setup[]> {
  const setupsDirectory = path.join(process.cwd(), 'public', 'setups')

  try {
    const setupFolders = fs.readdirSync(setupsDirectory)

    /* eslint-disable @typescript-eslint/no-unused-vars */
    const setups = setupFolders
      .filter(folder => {
        const metaPath = path.join(setupsDirectory, folder, 'meta.json')
        const readmePath = path.join(setupsDirectory, folder, 'README.md')

        return fs.existsSync(metaPath) && fs.existsSync(readmePath)
      })
      .map(folder => {
        try {
          // const metaPath = path.join(setupsDirectory, folder, 'meta.json')
          // const readmePath = path.join(setupsDirectory, folder, 'README.md')

          // Lire meta.json
          // const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'))

          // Lire README.md si présent
          // const readme = fs.readFileSync(readmePath, 'utf8')

          return {
            title: 'test',
            slug: 'test',
            tags: ['test'],
            description: 'test',
            author: 'test',
            github: 'test',
            readme: 'test'
          } as Setup
        } catch (error) {
          console.error(`Erreur lors du chargement du setup ${folder}:`, error)
          return null
        }
      })
      .filter((setup): setup is Setup => setup !== null)

    return [
      {
        title: 'Astro + Tailwind Starter',
        description: 'Lightning-fast static site builder with Astro 4.0, TailwindCSS, and built-in Markdown support',
        author: 'aploon',
        github: 'https://github.com/aploon/awesome-web-setups/edit/main/setups/astro-tailwind/',
        tags: [ 'astro', 'tailwind', 'markdown', 'static-site' ],
        slug: 'astro-tailwind',
        readme: '# Astro + Tailwind Starter\n' +
          '\n' +
          'Lightning-fast static site builder with Astro 4.0, TailwindCSS, and built-in Markdown support.\n' +
          '\n' +
          '## Features\n' +
          '\n' +
          '- 🚀 Astro 4.0\n' +
          '- 🎨 TailwindCSS\n' +
          '- 📝 Markdown/MDX support\n' +
          '- 🎯 TypeScript\n' +
          '- 📱 Responsive design\n' +
          '- ⚡ Fast builds\n' +
          '\n' +
          '## Quick Start\n' +
          '\n' +
          '```bash\n' +
          '# Create new project\n' +
          'npm create astro@latest my-site\n' +
          'cd my-site\n' +
          '\n' +
          '# Add Tailwind\n' +
          'npx astro add tailwind\n' +
          '\n' +
          '# Start development server\n' +
          'npm run dev\n' +
          '```\n' +
          '\n' +
          '## Project Structure\n' +
          '\n' +
          '```\n' +
          '├── src/\n' +
          '│   ├── components/   # Astro/React components\n' +
          '│   ├── layouts/      # Page layouts\n' +
          '│   ├── pages/        # File-based routing\n' +
          '│   │   └── posts/    # Blog posts (Markdown)\n' +
          '│   └── styles/       # Global styles\n' +
          '├── public/           # Static assets\n' +
          '└── astro.config.mjs  # Astro configuration\n' +
          '```\n' +
          '\n' +
          '## Basic Usage\n' +
          '\n' +
          '### Page Component\n' +
          '```astro\n' +
          '---\n' +
          '// src/pages/index.astro\n' +
          "import Layout from '../layouts/Layout.astro';\n" +
          '---\n' +
          '\n' +
          '<Layout title="Welcome">\n' +
          '  <main class="p-4 max-w-4xl mx-auto">\n' +
          '    <h1 class="text-4xl font-bold text-gray-900">\n' +
          '      Welcome to Astro\n' +
          '    </h1>\n' +
          '    <p class="mt-4 text-gray-600">\n' +
          '      Build faster websites with less client-side JavaScript\n' +
          '    </p>\n' +
          '  </main>\n' +
          '</Layout>\n' +
          '```\n' +
          '\n' +
          '### Markdown Blog Post\n' +
          '```markdown\n' +
          '---\n' +
          '// src/pages/posts/hello-world.md\n' +
          'layout: ../../layouts/BlogPost.astro\n' +
          'title: Hello, World!\n' +
          'date: 2024-01-01\n' +
          '---\n' +
          '\n' +
          '# Hello, World!\n' +
          '\n' +
          'This is my first blog post written in Markdown.\n' +
          '```\n' +
          '\n' +
          '## Customization\n' +
          '\n' +
          '### Tailwind Configuration\n' +
          '```js\n' +
          '// tailwind.config.mjs\n' +
          'export default {\n' +
          "  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],\n" +
          '  theme: {\n' +
          '    extend: {\n' +
          '      colors: {\n' +
          '        // Your custom colors\n' +
          '      }\n' +
          '    }\n' +
          '  }\n' +
          '}\n' +
          '```\n' +
          '\n' +
          '### Astro Configuration\n' +
          '```js\n' +
          '// astro.config.mjs\n' +
          "import { defineConfig } from 'astro/config';\n" +
          "import tailwind from '@astrojs/tailwind';\n" +
          '\n' +
          'export default defineConfig({\n' +
          '  integrations: [tailwind()],\n' +
          '  markdown: {\n' +
          '    shikiConfig: {\n' +
          "      theme: 'dracula'\n" +
          '    }\n' +
          '  }\n' +
          '});\n' +
          '``` '
      },
      {
        title: 'Laravel + Inertia.js Starter',
        description: 'A modern Laravel starter template with Inertia.js, Vue 3, and TailwindCSS for building full-stack applications',
        author: 'aploon',
        github: 'https://github.com/aploon/awesome-web-setups/edit/main/setups/laravel-inertia/',
        tags: [ 'laravel', 'inertia', 'vue', 'tailwind' ],
        slug: 'laravel-inertia',
        readme: '# Laravel + Inertia.js Starter\n' +
          '\n' +
          'A modern Laravel starter template with Inertia.js, Vue 3, and TailwindCSS for building full-stack applications.\n' +
          '\n' +
          '## Features\n' +
          '\n' +
          '- 🚀 Laravel 10\n' +
          '- ⚡ Inertia.js\n' +
          '- 💚 Vue 3\n' +
          '- 🎨 TailwindCSS\n' +
          '- 🔒 Laravel Breeze\n' +
          '- 📱 Responsive design\n' +
          '\n' +
          '## Quick Start\n' +
          '\n' +
          '```bash\n' +
          '# Create Laravel project\n' +
          'composer create-project laravel/laravel my-app\n' +
          'cd my-app\n' +
          '\n' +
          '# Install dependencies\n' +
          'composer require inertiajs/inertia-laravel\n' +
          'composer require laravel/breeze --dev\n' +
          '\n' +
          '# Install Breeze with Vue\n' +
          'php artisan breeze:install vue\n' +
          '\n' +
          '# Install and build frontend\n' +
          'npm install\n' +
          'npm run dev\n' +
          '```\n' +
          '\n' +
          '## Project Structure\n' +
          '\n' +
          '```\n' +
          '├── app/\n' +
          '│   └── Http/\n' +
          '│       └── Controllers/  # Controllers\n' +
          '├── resources/\n' +
          '│   ├── js/              # Vue components\n' +
          '│   │   ├── Components/  # Shared components\n' +
          '│   │   ├── Layouts/    # Layout components\n' +
          '│   │   └── Pages/      # Page components\n' +
          '│   └── views/          # Blade views\n' +
          '├── routes/\n' +
          '│   └── web.php         # Web routes\n' +
          '└── vite.config.js      # Vite configuration\n' +
          '```\n' +
          '\n' +
          '## Basic Usage\n' +
          '\n' +
          '### Route Definition\n' +
          '```php\n' +
          '// routes/web.php\n' +
          "Route::get('/', function () {\n" +
          "    return Inertia::render('Welcome', [\n" +
          "        'title' => 'Welcome'\n" +
          '    ]);\n' +
          '});\n' +
          '```\n' +
          '\n' +
          '### Vue Component\n' +
          '```vue\n' +
          '<!-- resources/js/Pages/Welcome.vue -->\n' +
          '<script setup>\n' +
          'defineProps({\n' +
          '  title: String\n' +
          '})\n' +
          '</script>\n' +
          '\n' +
          '<template>\n' +
          '  <div class="p-6">\n' +
          '    <h1 class="text-2xl font-bold">{{ title }}</h1>\n' +
          '    <p class="mt-4">Welcome to your Inertia.js app!</p>\n' +
          '  </div>\n' +
          '</template>\n' +
          '```\n' +
          '\n' +
          '## Authentication\n' +
          '\n' +
          'Laravel Breeze provides authentication scaffolding with:\n' +
          '- Login\n' +
          '- Registration\n' +
          '- Password Reset\n' +
          '- Email Verification\n' +
          '- Password Confirmation\n' +
          '\n' +
          '## Customization\n' +
          '\n' +
          '### Tailwind Configuration\n' +
          '```js\n' +
          '// tailwind.config.js\n' +
          'module.exports = {\n' +
          '  content: [\n' +
          "    './resources/**/*.blade.php',\n" +
          "    './resources/**/*.js',\n" +
          "    './resources/**/*.vue',\n" +
          '  ],\n' +
          '  theme: {\n' +
          '    extend: {\n' +
          '      // Your customizations\n' +
          '    }\n' +
          '  }\n' +
          '}\n' +
          '```\n' +
          '\n' +
          '### Vite Configuration\n' +
          '```js\n' +
          '// vite.config.js\n' +
          'export default defineConfig({\n' +
          '  plugins: [\n' +
          '    laravel({\n' +
          "      input: 'resources/js/app.js',\n" +
          '      refresh: true,\n' +
          '    }),\n' +
          '    vue({\n' +
          '      template: {\n' +
          '        transformAssetUrls: {\n' +
          '          base: null,\n' +
          '          includeAbsolute: false,\n' +
          '        },\n' +
          '      },\n' +
          '    }),\n' +
          '  ],\n' +
          '})\n' +
          '``` '
      },
      {
        title: 'Next.js + shadcn/ui Starter',
        description: 'A clean and minimal Next.js 14 starter template with shadcn/ui components and TailwindCSS',
        author: 'aploon',
        github: 'https://github.com/aploon/awesome-web-setups/edit/main/setups/nextjs-shadcn/',
        tags: [ 'nextjs', 'shadcn', 'tailwind', 'typescript' ],
        slug: 'nextjs-shadcn',
        readme: '# Next.js + shadcn/ui Starter\n' +
          '\n' +
          'A clean and minimal Next.js 14 starter template with shadcn/ui components and TailwindCSS.\n' +
          '\n' +
          '## Features\n' +
          '\n' +
          '- ⚡ Next.js 14 with App Router\n' +
          '- 🎨 shadcn/ui components\n' +
          '- 🎯 TypeScript\n' +
          '- 🎨 TailwindCSS\n' +
          '- 📱 Responsive design\n' +
          '- 🌙 Dark mode\n' +
          '\n' +
          '## Quick Start\n' +
          '\n' +
          '```bash\n' +
          '# Create project\n' +
          'npx create-next-app@latest my-app --typescript --tailwind --eslint\n' +
          '\n' +
          '# Install shadcn/ui\n' +
          'npx shadcn-ui@latest init\n' +
          '\n' +
          '# Run development server\n' +
          'npm run dev\n' +
          '```\n' +
          '\n' +
          '## Project Structure\n' +
          '\n' +
          '```\n' +
          '├── app/             # App router pages\n' +
          '├── components/      # React components\n' +
          '│   └── ui/         # shadcn/ui components\n' +
          '├── lib/            # Utility functions\n' +
          '├── styles/         # Global styles\n' +
          '└── types/          # TypeScript types\n' +
          '```\n' +
          '\n' +
          '## Adding Components\n' +
          '\n' +
          '```bash\n' +
          '# Add button component\n' +
          'npx shadcn-ui@latest add button\n' +
          '\n' +
          '# Add card component\n' +
          'npx shadcn-ui@latest add card\n' +
          '\n' +
          '# Add form components\n' +
          'npx shadcn-ui@latest add form input\n' +
          '```\n' +
          '\n' +
          '## Customization\n' +
          '\n' +
          '### Tailwind Configuration\n' +
          '```js\n' +
          '// tailwind.config.js\n' +
          'module.exports = {\n' +
          '  darkMode: ["class"],\n' +
          '  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],\n' +
          '  theme: {\n' +
          '    extend: {\n' +
          '      colors: {\n' +
          '        // Your custom colors\n' +
          '      }\n' +
          '    }\n' +
          '  }\n' +
          '}\n' +
          '```\n' +
          '\n' +
          '### Global Styles\n' +
          '```css\n' +
          '/* globals.css */\n' +
          '@tailwind base;\n' +
          '@tailwind components;\n' +
          '@tailwind utilities;\n' +
          ' \n' +
          '@layer base {\n' +
          '  :root {\n' +
          '    --background: 0 0% 100%;\n' +
          '    --foreground: 222.2 84% 4.9%;\n' +
          '  }\n' +
          ' \n' +
          '  .dark {\n' +
          '    --background: 222.2 84% 4.9%;\n' +
          '    --foreground: 0 0% 100%;\n' +
          '  }\n' +
          '}\n' +
          '```\n' +
          '\n' +
          '## Example Usage\n' +
          '\n' +
          '```tsx\n' +
          'import { Button } from "@/components/ui/button"\n' +
          'import { Card } from "@/components/ui/card"\n' +
          '\n' +
          'export default function Home() {\n' +
          '  return (\n' +
          '    <main className="p-4">\n' +
          '      <Card className="p-6">\n' +
          '        <h1 className="text-2xl font-bold">Welcome</h1>\n' +
          '        <p className="mt-2 text-gray-600">Get started with shadcn/ui</p>\n' +
          '        <Button className="mt-4">Get Started</Button>\n' +
          '      </Card>\n' +
          '    </main>\n' +
          '  )\n' +
          '}\n' +
          '``` '
      }
   ]
  } catch (error) {
    console.error('Erreur lors du chargement des setups:', error)
    return []
  }
} 