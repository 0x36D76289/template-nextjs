export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <div className="animate-pulse">
          <div className="mx-auto mb-4 h-10 w-1/3 rounded bg-gray-200"></div>
          <div className="mx-auto h-6 w-1/2 rounded bg-gray-200"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg bg-white shadow-md"
          >
            <div className="p-6">
              <div className="animate-pulse">
                <div className="mb-2 flex items-center justify-between">
                  <div className="h-6 w-16 rounded bg-gray-200"></div>
                  <div className="h-4 w-20 rounded bg-gray-200"></div>
                </div>
                <div className="mb-3 h-6 w-3/4 rounded bg-gray-200"></div>
                <div className="mb-4 space-y-2">
                  <div className="h-4 rounded bg-gray-200"></div>
                  <div className="h-4 w-5/6 rounded bg-gray-200"></div>
                </div>
                <div className="h-4 w-24 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
