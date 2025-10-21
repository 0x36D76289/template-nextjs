'use client'

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Erreur critique
            </h1>
            <p className="mb-8 text-gray-600">
              Une erreur critique s&apos;est produite. Veuillez rafraîchir la
              page.
            </p>
            <button
              onClick={reset}
              className="rounded-md bg-red-600 px-6 py-3 font-medium text-white transition-colors hover:bg-red-700"
            >
              Rafraîchir
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
