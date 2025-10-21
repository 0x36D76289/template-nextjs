export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tarifs</h1>
        <p className="text-xl text-gray-600">Choisissez le plan qui convient à vos besoins</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Plan Gratuit */}
        <div className="border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Gratuit</h3>
          <p className="text-4xl font-bold text-gray-900 mb-6">
            0€<span className="text-lg font-normal text-gray-600">/mois</span>
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Fonctionnalités de base
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Support communautaire
            </li>
          </ul>
          <button className="w-full bg-gray-100 text-gray-900 py-3 px-6 rounded-md font-medium hover:bg-gray-200 transition-colors">
            Commencer gratuitement
          </button>
        </div>

        {/* Plan Pro */}
        <div className="border-2 border-blue-500 rounded-lg p-8 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              Populaire
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
          <p className="text-4xl font-bold text-gray-900 mb-6">
            29€<span className="text-lg font-normal text-gray-600">/mois</span>
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Toutes les fonctionnalités
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Support prioritaire
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              API illimitée
            </li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors">
            Commencer l&apos;essai
          </button>
        </div>

        {/* Plan Entreprise */}
        <div className="border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Entreprise</h3>
          <p className="text-4xl font-bold text-gray-900 mb-6">Contactez-nous</p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Fonctionnalités avancées
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Support dédié
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              SLA garanti
            </li>
          </ul>
          <button className="w-full bg-gray-100 text-gray-900 py-3 px-6 rounded-md font-medium hover:bg-gray-200 transition-colors">
            Nous contacter
          </button>
        </div>
      </div>
    </div>
  );
}
