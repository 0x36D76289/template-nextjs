export default function ProfileSettingsPage() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-gray-900">
        Paramètres du profil
      </h1>

      <div className="space-y-6">
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">
            Préférences de notification
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">
                  Notifications par email
                </h3>
                <p className="text-sm text-gray-600">
                  Recevoir des notifications par email
                </p>
              </div>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">
                  Notifications push
                </h3>
                <p className="text-sm text-gray-600">
                  Recevoir des notifications push
                </p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">
                  Mises à jour marketing
                </h3>
                <p className="text-sm text-gray-600">
                  Recevoir des informations sur les nouveaux produits
                </p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">Sécurité</h2>

          <div className="space-y-4">
            <button className="rounded-md bg-red-600 px-4 py-2 font-medium text-white transition-colors hover:bg-red-700">
              Changer le mot de passe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
