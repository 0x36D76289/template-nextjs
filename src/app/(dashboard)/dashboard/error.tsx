'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="py-12 text-center">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Une erreur est survenue
      </h2>
      <p className="mb-6 text-gray-600">
        {error.message || "Une erreur inattendue s'est produite."}
      </p>
      <button
        onClick={reset}
        className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
      >
        Réessayer
      </button>
    </div>
  )
}
