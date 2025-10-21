export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="mx-auto max-w-3xl">
        <header className="mb-8">
          <div className="animate-pulse">
            <div className="mb-4 h-10 w-3/4 rounded bg-gray-200"></div>
            <div className="h-4 w-1/4 rounded bg-gray-200"></div>
          </div>
        </header>

        <div className="animate-pulse space-y-4">
          <div className="h-4 rounded bg-gray-200"></div>
          <div className="h-4 w-5/6 rounded bg-gray-200"></div>
          <div className="h-4 w-4/6 rounded bg-gray-200"></div>
          <div className="h-6 w-1/3 rounded bg-gray-200"></div>
          <div className="h-4 rounded bg-gray-200"></div>
          <div className="h-4 w-3/4 rounded bg-gray-200"></div>
        </div>
      </article>
    </div>
  )
}
