'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Une erreur est survenue!</h2>
      <p className="text-muted-foreground mt-2">{error.message}</p>
      <button
        className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 rounded-lg px-5 py-3 font-semibold transition-colors"
        onClick={() => reset()}
      >
        Réessayer
      </button>
    </div>
  )
}
