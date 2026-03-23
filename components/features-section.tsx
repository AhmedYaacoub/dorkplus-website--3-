import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Shield, Layers, Users, Wifi, BarChart3, Bell, Settings } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Cloud,
      title: "Cloud storage",
      description: "Everything is stored on our end.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Shield,
      title: "Encryption",
      description: "Built-in data encryption on both sides.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Layers,
      title: "10+ modules",
      description: "One tool, every task, it's that easy.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Users,
      title: "Beginner friendly",
      description: "We developed it to make it as easy as possible to use.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Wifi,
      title: "Proxy support",
      description: "We currently support HTTP, SOCKS4 & SOCKS 5 protocols.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: BarChart3,
      title: "Statistics",
      description: "Track your monthly statistics from your dashboard.",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
    {
      icon: Bell,
      title: "Live notifications",
      description: "Receive notifications on Discord once a job is finished.",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: Settings,
      title: "Control panel",
      description: "Run your tasks on multiple machines from your dashboard.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
    },
  ]

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <Button variant="outline" className="mb-4 bg-primary/10 border-primary/20 text-primary hover:bg-primary/20">
            Features
          </Button>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Be fast and efficient
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Save time and money with 10+ integrated modules trusted by professionals worldwide. Now you can even save
            your files and results on the same place.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group bg-card/60 border-border/50 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
            >
              <CardContent className="p-4 text-center space-y-4">
                <div
                  className={`w-12 h-12 mx-auto rounded-xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
