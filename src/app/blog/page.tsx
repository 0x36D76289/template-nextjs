import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      slug: 'introduction-nextjs-15',
      title: 'Introduction à Next.js 15',
      excerpt: 'Découvrez les nouvelles fonctionnalités de Next.js 15',
      date: '2024-01-15',
      category: 'Développement',
    },
    {
      slug: 'typescript-meilleures-pratiques',
      title: 'TypeScript : Meilleures pratiques',
      excerpt: 'Conseils pour écrire du TypeScript de qualité',
      date: '2024-01-10',
      category: 'TypeScript',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600">Articles et tutoriels sur le développement web</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Lire la suite →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
