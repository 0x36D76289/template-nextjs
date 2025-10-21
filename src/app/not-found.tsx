import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Non Trouvée</h2>
      <p className="text-muted-foreground mt-2">
        La page que vous recherchez n&apos;existe pas.
      </p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 rounded-lg px-5 py-3 font-semibold transition-colors"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  )
}
