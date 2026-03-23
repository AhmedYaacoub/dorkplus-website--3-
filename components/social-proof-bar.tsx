"use client"

import { Shield, Users, TrendingUp, Award } from "lucide-react"

export function SocialProofBar() {
  const companies = [
    { name: "Netflix", metric: "20 days saved", icon: Shield },
    { name: "TripAdvisor", metric: "98% faster", icon: TrendingUp },
    { name: "Box", metric: "300% increase", icon: Users },
    { name: "eBay", metric: "6x faster", icon: Award },
  ]

  return (
    <section className="py-16 px-4 border-y border-border bg-card/20">
      <div className="container mx-auto max-w-7xl">
        <p className="text-center text-sm text-muted-foreground mb-12 uppercase tracking-wider font-semibold">
          Trusted by leading security teams
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div key={index} className="text-center space-y-3 group">
              <div className="flex justify-center">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <company.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">{company.metric}</div>
                <div className="text-sm text-muted-foreground font-medium">{company.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
