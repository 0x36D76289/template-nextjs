# 📁 Structure du Projet Next.js 15+

## Arborescence Complète

```
src
|-- actions
|   `-- auth.ts
|-- app
|   |-- (auth)
|   |   |-- forgot-password
|   |   |   `-- page.tsx
|   |   |-- layout.tsx
|   |   |-- login
|   |   |   |-- loading.tsx
|   |   |   `-- page.tsx
|   |   `-- register
|   |       `-- page.tsx
|   |-- (dashboard)
|   |   |-- _components
|   |   |-- dashboard
|   |   |   |-- error.tsx
|   |   |   |-- loading.tsx
|   |   |   `-- page.tsx
|   |   |-- layout.tsx
|   |   |-- profile
|   |   |   |-- page.tsx
|   |   |   `-- settings
|   |   |       `-- page.tsx
|   |   `-- projects
|   |       |-- [id]
|   |       |   |-- error.tsx
|   |       |   |-- loading.tsx
|   |       |   |-- not-found.tsx
|   |       |   `-- page.tsx
|   |       |-- new
|   |       |   `-- page.tsx
|   |       `-- page.tsx
|   |-- (marketing)
|   |   |-- about
|   |   |   `-- page.tsx
|   |   |-- contact
|   |   |   `-- page.tsx
|   |   |-- layout.tsx
|   |   |-- page.tsx
|   |   `-- pricing
|   |       `-- page.tsx
|   |-- _components
|   |   |-- footer.tsx
|   |   |-- header.tsx
|   |   `-- sidebar.tsx
|   |-- api
|   |   |-- auth
|   |   |   `-- [...nextauth]
|   |   |       `-- route.ts
|   |   |-- projects
|   |   |   `-- route.ts
|   |   |-- users
|   |   |   |-- [id]
|   |   |   |   `-- route.ts
|   |   |   `-- route.ts
|   |   `-- webhooks
|   |       `-- stripe
|   |           `-- route.ts
|   |-- blog
|   |   |-- [slug]
|   |   |   |-- loading.tsx
|   |   |   |-- not-found.tsx
|   |   |   `-- page.tsx
|   |   |-- category
|   |   |   `-- [category]
|   |   |       `-- page.tsx
|   |   |-- loading.tsx
|   |   `-- page.tsx
|   |-- error.tsx
|   |-- favicon.ico
|   |-- global-error.tsx
|   |-- globals.css
|   |-- icon.tsx
|   |-- layout.tsx
|   |-- loading.tsx
|   |-- manifest.ts
|   |-- not-found.tsx
|   |-- opengraph-image.tsx
|   |-- page.tsx
|   |-- robots.ts
|   |-- sitemap.ts
|   `-- template.tsx
|-- components
|   |-- forms
|   |   |-- contact-form.tsx
|   |   |-- login-form.tsx
|   |   |-- register-form.tsx
|   |   `-- search-form.tsx
|   |-- layout
|   |   |-- container.tsx
|   |   |-- footer.tsx
|   |   `-- navbar.tsx
|   |-- shared
|   `-- ui
|       |-- button.tsx
|       |-- card.tsx
|       |-- dialog.tsx
|       `-- input.tsx
|-- config
|   |-- env.ts
|   |-- nav.ts
|   `-- site.ts
|-- hooks
|   |-- use-debounce.ts
|   |-- use-media-query.ts
|   `-- use-toast.ts
|-- lib
|   |-- api
|   |-- auth
|   |   `-- config.ts
|   |-- constants.ts
|   |-- db
|   |-- utils.ts
|   `-- validations.ts
|-- middleware.ts
|-- services
|   `-- user-service.ts
|-- styles
`-- types
    |-- api.ts
    |-- auth.ts
    `-- index.ts

46 directories, 77 files
```

## 🚀 Démarrage Rapide

```bash
# Installer les dépendances essentielles
pnpm add clsx tailwind-merge zod react-hook-form @hookform/resolvers
pnpm add class-variance-authority @radix-ui/react-slot lucide-react

# Lancer le serveur de développement
pnpm dev
```

## 📦 Dépendances Recommandées

### Obligatoires

```bash
pnpm add clsx tailwind-merge
```

### Recommandées

```bash
# Validation
pnpm add zod

# Formulaires
pnpm add react-hook-form @hookform/resolvers

# Icônes
pnpm add lucide-react

# Dark mode
pnpm add next-themes

# Base de données (choisir une)
pnpm add prisma @prisma/client    # Prisma
pnpm add drizzle-orm             # Drizzle
```

### Dev Tools

```bash
pnpm add -D prettier prettier-plugin-tailwindcss
```

## 🎯 Prochaines Étapes

1. **Configurer la base de données** dans `lib/db/`
2. **Ajouter l'authentification** dans `lib/auth/`
3. **Créer les pages manquantes** dans les route groups
4. **Personnaliser les composants UI** selon vos besoins
5. **Ajouter les fonctionnalités métier** dans `services/` et `actions/`

## 📚 Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/) - Composants UI préfabriqués
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)
