import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Bienvenue sur notre plateforme
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          Découvrez nos services et commencez votre voyage avec nous.
        </p>
        <div className="space-x-4">
          <Link
            href="/register"
            className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Commencer
          </Link>
          <Link
            href="/about"
            className="rounded-md border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  )
}
