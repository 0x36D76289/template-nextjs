interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Projet {id}</h1>
        <p className="mt-2 text-gray-600">Détails et informations du projet</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              Description
            </h2>
            <p className="text-gray-600">
              Description détaillée du projet {id}. Ce projet est en cours de
              développement et comprend plusieurs fonctionnalités importantes.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              Tâches récentes
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded bg-gray-50 p-3">
                <span className="text-gray-900">
                  Implémenter l&apos;authentification
                </span>
                <span className="rounded bg-green-100 px-2 py-1 text-sm text-green-600">
                  Terminé
                </span>
              </div>
              <div className="flex items-center justify-between rounded bg-gray-50 p-3">
                <span className="text-gray-900">
                  Créer l&apos;interface utilisateur
                </span>
                <span className="rounded bg-yellow-100 px-2 py-1 text-sm text-yellow-600">
                  En cours
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Membres de l&apos;équipe
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
                  JD
                </div>
                <span className="text-gray-900">John Doe</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-medium text-white">
                  JS
                </div>
                <span className="text-gray-900">Jane Smith</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Statut</h3>
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <span className="text-gray-900">En développement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
