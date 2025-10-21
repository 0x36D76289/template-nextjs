import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Mon Application</h3>
            <p className="text-gray-300">
              La meilleure solution pour vos besoins.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Produit</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/features" className="hover:text-white">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-white">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="/integrations" className="hover:text-white">
                  Intégrations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/help" className="hover:text-white">
                  Aide
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/status" className="hover:text-white">
                  Statut
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Entreprise</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/about" className="hover:text-white">
                  À propos
                </a>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <a href="/careers" className="hover:text-white">
                  Carrières
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Mon Application. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
