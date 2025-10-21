export default function ProfilePage() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Profil</h1>

      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-6 text-xl font-semibold text-gray-900">
          Informations personnelles
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Prénom
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              defaultValue="John"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              defaultValue="Doe"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              defaultValue="john.doe@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Téléphone
            </label>
            <input
              type="tel"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              defaultValue="+33 6 12 34 56 78"
            />
          </div>
        </div>

        <div className="mt-6">
          <button className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700">
            Sauvegarder les modifications
          </button>
        </div>
      </div>
    </div>
  )
}
