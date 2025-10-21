export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="border-primary h-32 w-32 animate-spin rounded-full border-t-2 border-b-2"></div>
        <p className="text-muted-foreground text-sm">Chargement...</p>
      </div>
    </div>
  )
}
