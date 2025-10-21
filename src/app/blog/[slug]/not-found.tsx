import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Article introuvable
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          L&apos;article que vous recherchez n&apos;existe pas.
        </p>
        <Link
          href="/blog"
          className="inline-block rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          Retour au blog
        </Link>
      </div>
    </div>
  )
}
