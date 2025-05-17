# Next.js + shadcn/ui Starter

A clean and minimal Next.js 14 starter template with shadcn/ui components and TailwindCSS.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 shadcn/ui components
- 🎯 TypeScript
- 🎨 TailwindCSS
- 📱 Responsive design
- 🌙 Dark mode

## Quick Start

```bash
# Create project
npx create-next-app@latest my-app --typescript --tailwind --eslint

# Install shadcn/ui
npx shadcn-ui@latest init

# Run development server
npm run dev
```

## Project Structure

```
├── app/             # App router pages
├── components/      # React components
│   └── ui/         # shadcn/ui components
├── lib/            # Utility functions
├── styles/         # Global styles
└── types/          # TypeScript types
```

## Adding Components

```bash
# Add button component
npx shadcn-ui@latest add button

# Add card component
npx shadcn-ui@latest add card

# Add form components
npx shadcn-ui@latest add form input
```

## Customization

### Tailwind Configuration
```js
// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Your custom colors
      }
    }
  }
}
```

### Global Styles
```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
 
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
  }
 
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 0 0% 100%;
  }
}
```

## Example Usage

```tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="p-4">
      <Card className="p-6">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <p className="mt-2 text-gray-600">Get started with shadcn/ui</p>
        <Button className="mt-4">Get Started</Button>
      </Card>
    </main>
  )
}
``` 