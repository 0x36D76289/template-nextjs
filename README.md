# 🚀 Structure Template Next.js 15+ avec TypeScript, Tailwind CSS et src/

> Template professionnel et scalable basé sur les meilleures pratiques officielles Next.js

## 📁 Arborescence Complète

```
my-nextjs-app/
├── .vscode/                        # Configuration VS Code
│   ├── settings.json
│   └── extensions.json
│
├── public/                         # Assets statiques
│   ├── images/
│   │   ├── logo.svg
│   │   └── hero.png
│   ├── fonts/
│   └── favicon.ico
│
├── src/                           # Code source de l'application
│   ├── app/                       # App Router (Next.js 13+)
│   │   ├── (auth)/               # Route group pour l'authentification
│   │   │   ├── layout.tsx        # Layout spécifique auth
│   │   │   ├── login/
│   │   │   │   ├── page.tsx
│   │   │   │   └── loading.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   └── forgot-password/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (marketing)/          # Route group pour marketing
│   │   │   ├── layout.tsx        # Layout spécifique marketing
│   │   │   ├── page.tsx          # Page d'accueil
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── pricing/
│   │   │   │   └── page.tsx
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (dashboard)/          # Route group pour dashboard
│   │   │   ├── layout.tsx        # Layout avec sidebar/nav
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── loading.tsx
│   │   │   │   └── error.tsx
│   │   │   ├── profile/
│   │   │   │   ├── page.tsx
│   │   │   │   └── settings/
│   │   │   │       └── page.tsx
│   │   │   └── projects/
│   │   │       ├── page.tsx
│   │   │       ├── [id]/
│   │   │       │   ├── page.tsx     # Dynamic route
│   │   │       │   ├── loading.tsx
│   │   │       │   ├── error.tsx
│   │   │       │   └── not-found.tsx
│   │   │       └── new/
│   │   │           └── page.tsx
│   │   │
│   │   ├── api/                  # Route Handlers (API)
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/
│   │   │   │       └── route.ts
│   │   │   ├── users/
│   │   │   │   ├── route.ts      # GET, POST /api/users
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts  # GET, PUT, DELETE /api/users/:id
│   │   │   ├── projects/
│   │   │   │   └── route.ts
│   │   │   └── webhooks/
│   │   │       └── stripe/
│   │   │           └── route.ts
│   │   │
│   │   ├── blog/                 # Section blog
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   ├── [slug]/
│   │   │   │   ├── page.tsx      # Article dynamique
│   │   │   │   ├── loading.tsx
│   │   │   │   └── not-found.tsx
│   │   │   └── category/
│   │   │       └── [category]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── _components/          # Composants privés (pas routables)
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── sidebar.tsx
│   │   │
│   │   ├── layout.tsx            # Root Layout (obligatoire)
│   │   ├── loading.tsx           # Loading UI global
│   │   ├── error.tsx             # Error boundary global
│   │   ├── not-found.tsx         # 404 page
│   │   ├── global-error.tsx      # Error boundary racine
│   │   ├── template.tsx          # Template (optionnel)
│   │   │
│   │   ├── manifest.ts           # Web App Manifest
│   │   ├── sitemap.ts            # Sitemap dynamique
│   │   ├── robots.ts             # Robots.txt dynamique
│   │   ├── opengraph-image.tsx   # OG Image dynamique
│   │   └── icon.tsx              # Favicon dynamique
│   │
│   ├── components/               # Composants réutilisables
│   │   ├── ui/                   # Composants UI de base
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown.tsx
│   │   │   ├── modal.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── spinner.tsx
│   │   │   └── badge.tsx
│   │   │
│   │   ├── forms/                # Composants de formulaires
│   │   │   ├── login-form.tsx
│   │   │   ├── register-form.tsx
│   │   │   ├── contact-form.tsx
│   │   │   └── search-form.tsx
│   │   │
│   │   ├── layout/               # Composants de mise en page
│   │   │   ├── navbar.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── footer.tsx
│   │   │   └── container.tsx
│   │   │
│   │   └── shared/               # Composants partagés
│   │       ├── image-upload.tsx
│   │       ├── data-table.tsx
│   │       ├── pagination.tsx
│   │       └── breadcrumbs.tsx
│   │
│   ├── lib/                      # Utilitaires et configurations
│   │   ├── utils.ts              # Fonctions utilitaires générales
│   │   ├── cn.ts                 # Classnames utility (Tailwind)
│   │   ├── validations.ts        # Schémas de validation (Zod)
│   │   ├── constants.ts          # Constantes globales
│   │   ├── db/                   # Configuration base de données
│   │   │   ├── index.ts
│   │   │   ├── schema.ts         # Schéma Drizzle/Prisma
│   │   │   └── queries.ts        # Requêtes réutilisables
│   │   ├── auth/                 # Configuration auth
│   │   │   ├── config.ts
│   │   │   └── session.ts
│   │   └── api/                  # Clients API
│   │       ├── client.ts
│   │       └── endpoints.ts
│   │
│   ├── hooks/                    # Custom React Hooks
│   │   ├── use-toast.ts
│   │   ├── use-media-query.ts
│   │   ├── use-local-storage.ts
│   │   ├── use-debounce.ts
│   │   ├── use-infinite-scroll.ts
│   │   └── use-auth.ts
│   │
│   ├── actions/                  # Server Actions
│   │   ├── auth.ts               # Actions d'authentification
│   │   ├── users.ts              # Actions utilisateurs
│   │   ├── projects.ts           # Actions projets
│   │   └── posts.ts              # Actions posts
│   │
│   ├── services/                 # Services métier
│   │   ├── user-service.ts
│   │   ├── project-service.ts
│   │   ├── email-service.ts
│   │   └── payment-service.ts
│   │
│   ├── types/                    # Types TypeScript
│   │   ├── index.ts              # Types principaux
│   │   ├── api.ts                # Types API
│   │   ├── auth.ts               # Types authentification
│   │   ├── database.ts           # Types base de données
│   │   └── components.ts         # Types composants
│   │
│   ├── config/                   # Configuration de l'app
│   │   ├── site.ts               # Configuration du site
│   │   ├── nav.ts                # Configuration navigation
│   │   └── env.ts                # Variables d'environnement typées
│   │
│   ├── styles/                   # Styles globaux
│   │   ├── globals.css           # Styles globaux + Tailwind
│   │   ├── fonts.css             # Polices personnalisées
│   │   └── animations.css        # Animations personnalisées
│   │
│   └── middleware.ts             # Middleware Next.js
│
├── .env.local                    # Variables d'environnement locales
├── .env.example                  # Exemple de variables d'environnement
├── .eslintrc.json               # Configuration ESLint
├── .gitignore                   # Fichiers ignorés par Git
├── .prettierrc                  # Configuration Prettier
├── next.config.js               # Configuration Next.js
├── package.json                 # Dépendances et scripts
├── postcss.config.js            # Configuration PostCSS
├── tailwind.config.ts           # Configuration Tailwind CSS
├── tsconfig.json                # Configuration TypeScript
└── README.md                    # Documentation du projet
```

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
};

module.exports = nextConfig;
```

### `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss';

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
};

export default config;
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
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Ajouter des headers, rediriger, etc.
  const response = NextResponse.next();
  response.headers.set('x-custom-header', 'my-value');
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
```

### `src/lib/utils.ts`

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
