export default function ProfileSettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Paramètres du profil</h1>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Préférences de notification</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Notifications par email</h3>
                <p className="text-sm text-gray-600">Recevoir des notifications par email</p>
              </div>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Notifications push</h3>
                <p className="text-sm text-gray-600">Recevoir des notifications push</p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Mises à jour marketing</h3>
                <p className="text-sm text-gray-600">
                  Recevoir des informations sur les nouveaux produits
                </p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Sécurité</h2>

          <div className="space-y-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition-colors">
              Changer le mot de passe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
