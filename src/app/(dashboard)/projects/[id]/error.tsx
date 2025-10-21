'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Projet introuvable</h2>
      <p className="text-gray-600 mb-6">
        Le projet demandé n&apos;existe pas ou vous n&apos;avez pas les permissions pour y accéder.
      </p>
      <button
        onClick={reset}
        className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
      >
        Réessayer
      </button>
    </div>
  );
}
