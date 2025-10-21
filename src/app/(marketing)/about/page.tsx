export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">À propos de nous</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Nous sommes une entreprise dédiée à fournir des solutions innovantes pour répondre aux
            besoins de nos clients.
          </p>
          <p className="text-gray-600 mb-6">
            Notre mission est de créer des produits de qualité qui améliorent la vie de nos
            utilisateurs et contribuent à un monde meilleur.
          </p>
        </div>
      </div>
    </div>
  );
}
