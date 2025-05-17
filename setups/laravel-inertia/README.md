# Laravel + Inertia.js Starter

A modern Laravel starter template with Inertia.js, Vue 3, and TailwindCSS for building full-stack applications.

## Features

- 🚀 Laravel 10
- ⚡ Inertia.js
- 💚 Vue 3
- 🎨 TailwindCSS
- 🔒 Laravel Breeze
- 📱 Responsive design

## Quick Start

```bash
# Create Laravel project
composer create-project laravel/laravel my-app
cd my-app

# Install dependencies
composer require inertiajs/inertia-laravel
composer require laravel/breeze --dev

# Install Breeze with Vue
php artisan breeze:install vue

# Install and build frontend
npm install
npm run dev
```

## Project Structure

```
├── app/
│   └── Http/
│       └── Controllers/  # Controllers
├── resources/
│   ├── js/              # Vue components
│   │   ├── Components/  # Shared components
│   │   ├── Layouts/    # Layout components
│   │   └── Pages/      # Page components
│   └── views/          # Blade views
├── routes/
│   └── web.php         # Web routes
└── vite.config.js      # Vite configuration
```

## Basic Usage

### Route Definition
```php
// routes/web.php
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'title' => 'Welcome'
    ]);
});
```

### Vue Component
```vue
<!-- resources/js/Pages/Welcome.vue -->
<script setup>
defineProps({
  title: String
})
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <p class="mt-4">Welcome to your Inertia.js app!</p>
  </div>
</template>
```

## Authentication

Laravel Breeze provides authentication scaffolding with:
- Login
- Registration
- Password Reset
- Email Verification
- Password Confirmation

## Customization

### Tailwind Configuration
```js
// tailwind.config.js
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      // Your customizations
    }
  }
}
```

### Vite Configuration
```js
// vite.config.js
export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.js',
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
})
``` 