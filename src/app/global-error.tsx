'use client';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Erreur critique</h1>
            <p className="text-gray-600 mb-8">
              Une erreur critique s&apos;est produite. Veuillez rafraîchir la page.
            </p>
            <button
              onClick={reset}
              className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
            >
              Rafraîchir
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
