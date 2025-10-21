export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">
          À propos de nous
        </h1>
        <div className="prose prose-lg">
          <p className="mb-6 text-gray-600">
            Nous sommes une entreprise dédiée à fournir des solutions innovantes
            pour répondre aux besoins de nos clients.
          </p>
          <p className="mb-6 text-gray-600">
            Notre mission est de créer des produits de qualité qui améliorent la
            vie de nos utilisateurs et contribuent à un monde meilleur.
          </p>
        </div>
      </div>
    </div>
  )
}
