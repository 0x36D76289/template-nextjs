interface BlogCategoryPageProps {
  params: Promise<{ category: string }>
}

export default async function BlogCategoryPage({
  params,
}: BlogCategoryPageProps) {
  const { category } = await params

  const posts = [
    {
      slug: 'article-1',
      title: `Article 1 - ${category}`,
      excerpt: "Extrait de l'article 1",
      date: '2024-01-15',
    },
    {
      slug: 'article-2',
      title: `Article 2 - ${category}`,
      excerpt: "Extrait de l'article 2",
      date: '2024-01-10',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Catégorie: {category.replace(/-/g, ' ')}
        </h1>
        <p className="text-xl text-gray-600">
          Articles dans la catégorie {category}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="overflow-hidden rounded-lg bg-white shadow-md"
          >
            <div className="p-6">
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                <a href={`/blog/${post.slug}`} className="hover:text-blue-600">
                  {post.title}
                </a>
              </h2>
              <p className="mb-4 text-gray-600">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.date}</span>
                <a
                  href={`/blog/${post.slug}`}
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  Lire la suite →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
