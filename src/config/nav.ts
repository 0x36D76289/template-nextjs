export const navConfig = {
  mainNav: [
    {
      title: 'Accueil' as const,
      href: '/' as const,
    },
    {
      title: 'À propos' as const,
      href: '/about' as const,
    },
    {
      title: 'Tarifs' as const,
      href: '/pricing' as const,
    },
    {
      title: 'Contact' as const,
      href: '/contact' as const,
    },
  ],
  sidebarNav: [
    {
      title: 'Dashboard' as const,
      href: '/dashboard' as const,
      icon: 'LayoutDashboard' as const,
    },
    {
      title: 'Projets' as const,
      href: '/projects' as const,
      icon: 'Folder' as const,
    },
    {
      title: 'Profil' as const,
      href: '/profile' as const,
      icon: 'User' as const,
    },
  ],
}
