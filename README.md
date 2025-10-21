# 🚀 Structure Template Next.js 15+ avec TypeScript, Tailwind CSS et src/

> Template professionnel et scalable basé sur les meilleures pratiques officielles Next.js

## 📁 Arborescence Complète

````
.
|-- README.md
|-- STRUCTURE.md
|-- eslint.config.mjs
|-- next-env.d.ts
|-- next.config.ts
|-- package.json
|-- pnpm-lock.yaml
|-- postcss.config.mjs
|-- public
|   |-- file.svg
|   |-- fonts
|   |-- globe.svg
|   |-- images
|   |-- next.svg
|   |-- vercel.svg
|   `-- window.svg
|-- src
|   |-- actions
|   |   `-- auth.ts
|   |-- app
|   |   |-- (auth)
|   |   |   |-- forgot-password
|   |   |   |   `-- page.tsx
|   |   |   |-- layout.tsx
|   |   |   |-- login
|   |   |   |   |-- loading.tsx
|   |   |   |   `-- page.tsx
|   |   |   `-- register
|   |   |       `-- page.tsx
|   |   |-- (dashboard)
|   |   |   |-- _components
|   |   |   |-- dashboard
|   |   |   |   |-- error.tsx
|   |   |   |   |-- loading.tsx
|   |   |   |   `-- page.tsx
|   |   |   |-- layout.tsx
|   |   |   |-- profile
|   |   |   |   |-- page.tsx
|   |   |   |   `-- settings
|   |   |   |       `-- page.tsx
|   |   |   `-- projects
|   |   |       |-- [id]
|   |   |       |   |-- error.tsx
|   |   |       |   |-- loading.tsx
|   |   |       |   |-- not-found.tsx
|   |   |       |   `-- page.tsx
|   |   |       |-- new
|   |   |       |   `-- page.tsx
|   |   |       `-- page.tsx
|   |   |-- (marketing)
|   |   |   |-- about
|   |   |   |   `-- page.tsx
|   |   |   |-- contact
|   |   |   |   `-- page.tsx
|   |   |   |-- layout.tsx
|   |   |   |-- page.tsx
|   |   |   `-- pricing
|   |   |       `-- page.tsx
|   |   |-- _components
|   |   |   |-- footer.tsx
|   |   |   |-- header.tsx
|   |   |   `-- sidebar.tsx
|   |   |-- api
|   |   |   |-- auth
|   |   |   |   `-- [...nextauth]
|   |   |   |       `-- route.ts
|   |   |   |-- projects
|   |   |   |   `-- route.ts
|   |   |   |-- users
|   |   |   |   |-- [id]
|   |   |   |   |   `-- route.ts
|   |   |   |   `-- route.ts
|   |   |   `-- webhooks
|   |   |       `-- stripe
|   |   |           `-- route.ts
|   |   |-- blog
|   |   |   |-- [slug]
|   |   |   |   |-- loading.tsx
|   |   |   |   |-- not-found.tsx
|   |   |   |   `-- page.tsx
|   |   |   |-- category
|   |   |   |   `-- [category]
|   |   |   |       `-- page.tsx
|   |   |   |-- loading.tsx
|   |   |   `-- page.tsx
|   |   |-- error.tsx
|   |   |-- favicon.ico
|   |   |-- global-error.tsx
|   |   |-- globals.css
|   |   |-- icon.tsx
|   |   |-- layout.tsx
|   |   |-- loading.tsx
|   |   |-- manifest.ts
|   |   |-- not-found.tsx
|   |   |-- opengraph-image.tsx
|   |   |-- page.tsx
|   |   |-- robots.ts
|   |   |-- sitemap.ts
|   |   `-- template.tsx
|   |-- components
|   |   |-- forms
|   |   |   |-- contact-form.tsx
|   |   |   |-- login-form.tsx
|   |   |   |-- register-form.tsx
|   |   |   `-- search-form.tsx
|   |   |-- layout
|   |   |   |-- container.tsx
|   |   |   |-- footer.tsx
|   |   |   `-- navbar.tsx
|   |   |-- shared
|   |   `-- ui
|   |       |-- button.tsx
|   |       |-- card.tsx
|   |       |-- dialog.tsx
|   |       `-- input.tsx
|   |-- config
|   |   |-- env.ts
|   |   |-- nav.ts
|   |   `-- site.ts
|   |-- hooks
|   |   |-- use-debounce.ts
|   |   |-- use-media-query.ts
|   |   `-- use-toast.ts
|   |-- lib
|   |   |-- api
|   |   |-- auth
|   |   |   `-- config.ts
|   |   |-- constants.ts
|   |   |-- db
|   |   |-- utils.ts
|   |   `-- validations.ts
|   |-- middleware.ts
|   |-- services
|   |   `-- user-service.ts
|   |-- styles
|   `-- types
|       |-- api.ts
|       |-- auth.ts
|       `-- index.ts
|-- tailwind.config.ts
|-- tsconfig.json
`-- tsconfig.tsbuildinfo

82 directories, 93 files```

## 📝 Fichiers de Configuration Essentiels

### `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
      },
    ],
  },
}

module.exports = nextConfig
````

### `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
    },
  },
  plugins: [],
}

export default config
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### `src/app/layout.tsx` (Root Layout)

```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

### `src/middleware.ts`

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Ajouter des headers, rediriger, etc.
  const response = NextResponse.next()
  response.headers.set('x-custom-header', 'my-value')
  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
```

### `src/lib/utils.ts`

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### `package.json` (Dependencies)

```json
{
  "name": "my-nextjs-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10",
    "eslint": "^9",
    "eslint-config-next": "^15",
    "postcss": "^8",
    "tailwindcss": "^3",
    "typescript": "^5"
  }
}
```

## 🎯 Principes Clés

### 1. **Route Groups** `(groupName)`

- Organiser les routes sans affecter l'URL
- Créer des layouts différents pour différentes sections
- Ex: `(auth)`, `(dashboard)`, `(marketing)`

### 2. **Private Folders** `_folderName`

- Exclure des dossiers du routing
- Utile pour les composants privés ou utilitaires

### 3. **Dynamic Routes** `[param]`

- Routes dynamiques: `[id]`, `[slug]`
- Catch-all: `[...slug]`
- Optional catch-all: `[[...slug]]`

### 4. **Server vs Client Components**

- **Par défaut**: Server Components
- **Client**: Ajouter `'use client'` en haut du fichier
- Utilisez Server Components autant que possible

### 5. **Colocation**

- Vous pouvez coloquer des fichiers dans `app/`
- Seuls `page.tsx` et `route.ts` sont routables

### 6. **File Conventions**

- `layout.tsx`: Layout partagé
- `page.tsx`: Page unique
- `loading.tsx`: UI de chargement
- `error.tsx`: Gestion d'erreurs
- `not-found.tsx`: Page 404
- `route.ts`: Route Handler (API)

## 🚀 Commandes de Démarrage

```bash
# Initialiser le projet
npx create-next-app@latest my-app --typescript --tailwind --src-dir --app --eslint

# Installer les dépendances
pnpm install

# Lancer en développement
pnpm run dev

# Build de production
pnpm run build

# Démarrer en production
pnpm start
```

## 📚 Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Vercel Deployment](https://vercel.com)
