export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Tarifs</h1>
        <p className="text-xl text-gray-600">
          Choisissez le plan qui convient à vos besoins
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {/* Plan Gratuit */}
        <div className="rounded-lg border border-gray-200 p-8">
          <h3 className="mb-4 text-2xl font-bold text-gray-900">Gratuit</h3>
          <p className="mb-6 text-4xl font-bold text-gray-900">
            0€<span className="text-lg font-normal text-gray-600">/mois</span>
          </p>
          <ul className="mb-8 space-y-3">
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              Fonctionnalités de base
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              Support communautaire
            </li>
          </ul>
          <button className="w-full rounded-md bg-gray-100 px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-200">
            Commencer gratuitement
          </button>
        </div>

        {/* Plan Pro */}
        <div className="relative rounded-lg border-2 border-blue-500 p-8">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
            <span className="rounded-full bg-blue-500 px-4 py-1 text-sm font-medium text-white">
              Populaire
            </span>
          </div>
          <h3 className="mb-4 text-2xl font-bold text-gray-900">Pro</h3>
          <p className="mb-6 text-4xl font-bold text-gray-900">
            29€<span className="text-lg font-normal text-gray-600">/mois</span>
          </p>
          <ul className="mb-8 space-y-3">
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              Toutes les fonctionnalités
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              Support prioritaire
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              API illimitée
            </li>
          </ul>
          <button className="w-full rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700">
            Commencer l&apos;essai
          </button>
        </div>

        {/* Plan Entreprise */}
        <div className="rounded-lg border border-gray-200 p-8">
          <h3 className="mb-4 text-2xl font-bold text-gray-900">Entreprise</h3>
          <p className="mb-6 text-4xl font-bold text-gray-900">
            Contactez-nous
          </p>
          <ul className="mb-8 space-y-3">
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              Fonctionnalités avancées
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              Support dédié
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              SLA garanti
            </li>
          </ul>
          <button className="w-full rounded-md bg-gray-100 px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-200">
            Nous contacter
          </button>
        </div>
      </div>
    </div>
  )
}
