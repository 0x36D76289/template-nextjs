import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    { id: 1, name: 'Projet Alpha', status: 'Actif', members: 5 },
    { id: 2, name: 'Projet Beta', status: 'En pause', members: 3 },
    { id: 3, name: 'Projet Gamma', status: 'Terminé', members: 8 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Projets</h1>
        <Link
          href="/projects/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Nouveau projet
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    <Link href={`/projects/${project.id}`} className="hover:text-blue-600">
                      {project.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600">
                    {project.members} membres • {project.status}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Voir
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
