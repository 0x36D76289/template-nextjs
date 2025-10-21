export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="mx-auto mb-2 h-8 w-3/4 rounded bg-gray-200"></div>
          <div className="mx-auto h-4 w-1/2 rounded bg-gray-200"></div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="animate-pulse">
          <div className="h-10 rounded bg-gray-200"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-10 rounded bg-gray-200"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-10 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  )
}
