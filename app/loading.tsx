export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-orange-600 mb-4"></div>
        <p className="text-orange-600 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
}
