import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bienvenue sur notre plateforme</h1>
        <p className="text-xl text-gray-600 mb-8">
          Découvrez nos services et commencez votre voyage avec nous.
        </p>
        <div className="space-x-4">
          <Link
            href="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Commencer
          </Link>
          <Link
            href="/about"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
}
