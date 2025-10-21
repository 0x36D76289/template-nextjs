import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="mb-4 text-4xl font-bold">Bienvenue sur Next.js 15 🚀</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Template professionnel avec TypeScript, Tailwind CSS et App Router
        </p>

        <div className="flex gap-4">
          <Link
            href="/dashboard"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5 py-3 font-semibold transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/about"
            className="border-border hover:bg-accent rounded-lg border px-5 py-3 font-semibold transition-colors"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </main>
  )
}
