import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { navConfig } from '@/config/nav'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-foreground/80 text-foreground/60 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search component could go here */}
          </div>
          <nav className="flex items-center">
            <Button variant="ghost" size="sm">
              Se connecter
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
