export function TechLogos() {
  const logos = [
    { name: "Google", icon: "🔍" },
    { name: "Yahoo", icon: "🌐" },
    { name: "Ask", icon: "❓" },
    { name: "T-Online", icon: "📡" },
    { name: "MySQL", icon: "🗄️" },
    { name: "SQLite", icon: "💾" },
    { name: "SQL Server", icon: "🏢" },
    { name: "PostgreSQL", icon: "🐘" },
  ]

  return (
    <section className="py-20 border-y border-border/40 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Experienced in many fields
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform supports multiple search engines, databases, and security protocols
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {logos.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-4 rounded-xl bg-card/50 border border-border/40 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
