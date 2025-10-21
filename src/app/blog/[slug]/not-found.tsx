import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Article introuvable</h1>
        <p className="text-xl text-gray-600 mb-8">
          L&apos;article que vous recherchez n&apos;existe pas.
        </p>
        <Link
          href="/blog"
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-block"
        >
          Retour au blog
        </Link>
      </div>
    </div>
  );
}
