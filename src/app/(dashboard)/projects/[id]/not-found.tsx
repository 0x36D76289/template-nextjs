import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="py-12 text-center">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Projet introuvable
      </h2>
      <p className="mb-6 text-gray-600">
        Le projet que vous recherchez n&apos;existe pas.
      </p>
      <Link
        href="/projects"
        className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
      >
        Retour aux projets
      </Link>
    </div>
  )
}
