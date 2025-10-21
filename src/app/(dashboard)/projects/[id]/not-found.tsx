import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Projet introuvable</h2>
      <p className="text-gray-600 mb-6">Le projet que vous recherchez n&apos;existe pas.</p>
      <Link
        href="/projects"
        className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
      >
        Retour aux projets
      </Link>
    </div>
  );
}
