export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating cubes */}
      <div
        className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-lg float-animation"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-40 right-20 w-12 h-12 bg-accent/20 rounded-lg float-animation"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-20 h-20 bg-primary/10 rounded-lg float-animation"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-14 h-14 bg-accent/15 rounded-lg float-animation"
        style={{ animationDelay: "1s" }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl float-animation"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-xl float-animation"
        style={{ animationDelay: "5s" }}
      />
    </div>
  )
}
