export default function Loading() {
  return (
    <div>
      <div className="animate-pulse">
        <div className="mb-8 h-8 w-1/4 rounded bg-gray-200"></div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-lg bg-white p-6 shadow">
            <div className="animate-pulse">
              <div className="mb-2 h-4 w-3/4 rounded bg-gray-200"></div>
              <div className="h-6 w-1/2 rounded bg-gray-200"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-white p-6 shadow">
        <div className="animate-pulse">
          <div className="mb-4 h-6 w-1/3 rounded bg-gray-200"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="h-2 w-2 rounded-full bg-gray-200"></div>
                <div className="h-4 w-3/4 rounded bg-gray-200"></div>
                <div className="h-3 w-1/4 rounded bg-gray-200"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
