# Remix + Chakra UI Starter

Modern Remix setup with Chakra UI for building accessible and beautiful web applications.

## Features

- 🚀 Remix 2.0
- ⚡ Chakra UI
- 🎯 TypeScript
- 📱 Responsive design
- ♿ Accessibility first
- 🌙 Dark mode

## Quick Start

```bash
# Create new project
npx create-remix@latest my-app
cd my-app

# Install dependencies
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion

# Start development server
npm run dev
```

## Project Structure

```
├── app/
│   ├── components/   # Shared components
│   ├── routes/       # File-based routing
│   ├── styles/       # Global styles
│   ├── root.tsx     # Root component
│   └── entry.client.tsx  # Client entry
├── public/          # Static assets
└── remix.config.js  # Remix configuration
```

## Basic Usage

### Root Component
```tsx
// app/root.tsx
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { withEmotionCache } from '@emotion/react';
import { theme } from './theme';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Remix + Chakra UI</title>
      </head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
          <Outlet />
        </ChakraProvider>
      </body>
    </html>
  );
}
```

### Page Component
```tsx
// app/routes/_index.tsx
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function Index() {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading size="2xl">Welcome to Remix</Heading>
        <Text fontSize="xl">
          Get started by editing app/routes/_index.tsx
        </Text>
        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
}
```

## Theme Configuration

```tsx
// app/theme.ts
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      // ... other shades
      900: '#0c4a6e',
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
  },
});
```

## Server-Side Rendering

```tsx
// app/entry.server.tsx
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import { RemixServer } from '@remix-run/react';
import { createEmotionCache } from './emotion-cache';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const html = renderToString(
    <CacheProvider value={cache}>
      <RemixServer context={remixContext} url={request.url} />
    </CacheProvider>
  );

  const chunks = extractCriticalToChunks(html);

  return new Response(
    `<!DOCTYPE html>${chunks.html}`,
    {
      status: responseStatusCode,
      headers: responseHeaders,
    }
  );
}
``` 