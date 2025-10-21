export default function DashboardPage() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Tableau de bord</h1>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Statistiques */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-sm font-medium text-gray-500">
            Total Utilisateurs
          </h3>
          <p className="text-2xl font-bold text-gray-900">1,234</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-sm font-medium text-gray-500">Projets Actifs</h3>
          <p className="text-2xl font-bold text-gray-900">56</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-sm font-medium text-gray-500">Revenus</h3>
          <p className="text-2xl font-bold text-gray-900">12,345€</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-sm font-medium text-gray-500">Tâches</h3>
          <p className="text-2xl font-bold text-gray-900">89</p>
        </div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
          Activité récente
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            <p className="text-gray-600">Nouveau projet créé</p>
            <span className="text-sm text-gray-400">il y a 2h</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <p className="text-gray-600">Utilisateur inscrit</p>
            <span className="text-sm text-gray-400">il y a 4h</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <p className="text-gray-600">Mise à jour système</p>
            <span className="text-sm text-gray-400">il y a 1j</span>
          </div>
        </div>
      </div>
    </div>
  )
}
