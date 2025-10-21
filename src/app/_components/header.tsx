import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              Mon Application
            </h1>
          </div>
          <nav className="flex space-x-4">
            <a href="/dashboard" className="text-gray-700 hover:text-gray-900">
              Dashboard
            </a>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-gray-900"
            >
              Projets
            </Link>
            <a href="/profile" className="text-gray-700 hover:text-gray-900">
              Profil
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
