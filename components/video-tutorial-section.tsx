"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Users, Star } from "lucide-react"

export function VideoTutorialSection() {
  return (
    <section className="py-16 sm:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="bg-primary/20 text-primary border-primary/30 mb-4 sm:mb-6">
            <Play className="w-4 h-4 mr-2" />
            Video Tutorial
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            See DorkPlus in{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Watch how professionals use DorkPlus to perform advanced penetration testing and security analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <Card className="overflow-hidden border-primary/20 shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-500">
              <div className="relative bg-gradient-to-br from-card/90 to-card/70">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1120563679?badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    title="DorkPlus Tutorial"
                  />
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-card/90 to-card/70 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">Tutorial Length</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Complete walkthrough</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 bg-gradient-to-br from-card/90 to-card/70 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">Skill Level</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Beginner to Advanced</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 bg-gradient-to-br from-card/90 to-card/70 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">What You'll Learn</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">All core features & techniques</p>
                </div>
              </div>
            </Card>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 sm:p-6 border border-primary/20">
              <h3 className="font-semibold mb-3 text-primary text-sm sm:text-base">Tutorial Highlights:</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Google Proxyless Parser setup
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                  Multi-engine scanning techniques
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  Database dumping methods
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                  Advanced vulnerability detection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
