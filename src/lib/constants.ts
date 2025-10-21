// Constantes globales de l'application

export const SITE_CONFIG = {
  name: 'Mon App',
  description: 'Description de mon application',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
};

export const API_ROUTES = {
  users: '/api/users',
  projects: '/api/projects',
  auth: {
    login: '/api/auth/login',
    logout: '/api/auth/logout',
    session: '/api/auth/session',
  },
} as const;

export const NAVIGATION = {
  main: [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Tarifs', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ],
  dashboard: [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Projets', href: '/projects' },
    { name: 'Profil', href: '/profile' },
  ],
} as const;

export const PAGINATION = {
  defaultPageSize: 10,
  maxPageSize: 100,
} as const;

export const FILE_UPLOAD = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
} as const;
