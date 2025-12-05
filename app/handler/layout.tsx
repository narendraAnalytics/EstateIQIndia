export default function HandlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900">
      {/* Centered Container */}
      <div className="w-full max-w-md mx-auto px-4">
        {children}
      </div>
    </div>
  );
}
