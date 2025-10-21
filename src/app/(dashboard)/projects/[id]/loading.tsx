export default function Loading() {
  return (
    <div>
      <div className="mb-8 animate-pulse">
        <div className="mb-2 h-8 w-1/3 rounded bg-gray-200"></div>
        <div className="h-4 w-1/2 rounded bg-gray-200"></div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="animate-pulse">
              <div className="mb-4 h-6 w-1/4 rounded bg-gray-200"></div>
              <div className="mb-2 h-4 w-full rounded bg-gray-200"></div>
              <div className="h-4 w-3/4 rounded bg-gray-200"></div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <div className="animate-pulse">
              <div className="mb-4 h-6 w-1/3 rounded bg-gray-200"></div>
              <div className="space-y-3">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="h-12 rounded bg-gray-200"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="animate-pulse">
              <div className="mb-4 h-5 w-2/3 rounded bg-gray-200"></div>
              <div className="space-y-3">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                    <div className="h-4 w-20 rounded bg-gray-200"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <div className="animate-pulse">
              <div className="mb-4 h-5 w-1/2 rounded bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-gray-200"></div>
                <div className="h-4 w-24 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
