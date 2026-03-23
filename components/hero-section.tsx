"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, ArrowRight, CheckCircle, Star, Lock, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [activeScans, setActiveScans] = useState<number | null>(null)

  useEffect(() => {
    // Get stored value or initialize with base number
    const stored = localStorage.getItem("activeScans")
    const baseNumber = 1247

    if (stored) {
      const currentValue = Number.parseInt(stored)
      // Decrease by random amount between 1-10
      const decrease = Math.floor(Math.random() * 10) + 1
      const newValue = Math.max(currentValue - decrease, 800) // Don't go below 800
      setActiveScans(newValue)
      localStorage.setItem("activeScans", newValue.toString())
    } else {
      setActiveScans(baseNumber)
      localStorage.setItem("activeScans", baseNumber.toString())
    }
  }, [])

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 px-4 overflow-hidden" id="home">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2 text-sm font-medium hover:bg-green-500/30 transition-colors">
              <CheckCircle className="w-4 h-4 mr-2" />
              1,300+ Security Professionals Trust Us
            </Badge>
            <div className="flex items-center gap-1 text-yellow-500 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="ml-2 text-foreground/90 font-semibold">4.9/5 Rating</span>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              <span className="gradient-text">Parse, scan, dump and dehash</span> with just one tool
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              DorkPlus has more than 10 modules including a Google Proxyless Parser, multi-engines Parser (Ask, Google,
              Yahoo, T-Online...), a Vulnerability Scanner (SQL, XSS, ENV..), a Database Dumper (faster than XDG, Rusty
              & SQLiDumper), a Dehasher (MD5, SHA1, SHA256, SHA512...) and more.
            </p>

            <div className="flex items-center justify-center gap-3 py-4">
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl px-6 py-3 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground font-medium">Active Scans Right Now</div>
                    <div className="text-2xl font-bold text-foreground">
                      {activeScans !== null ? activeScans.toLocaleString() : "..."}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto py-8">
            <div className="space-y-2 bg-card/50 rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-colors">
              <div className="text-3xl sm:text-4xl font-bold text-primary">9B+</div>
              <div className="text-sm text-muted-foreground">Links Parsed</div>
            </div>
            <div className="space-y-2 bg-card/50 rounded-xl p-4 border border-border/50 hover:border-accent/30 transition-colors">
              <div className="text-3xl sm:text-4xl font-bold text-accent">8M+</div>
              <div className="text-sm text-muted-foreground">Databases Dumped</div>
            </div>
            <div className="space-y-2 bg-card/50 rounded-xl p-4 border border-border/50 hover:border-green-400/30 transition-colors">
              <div className="text-3xl sm:text-4xl font-bold text-green-400">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="space-y-2 bg-card/50 rounded-xl p-4 border border-border/50 hover:border-yellow-400/30 transition-colors">
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => {
                  const element = document.getElementById("pricing")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-8 text-xl font-bold shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-300 hover:scale-105 group w-full sm:w-auto border-0 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Instant Access Now
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("features")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }}
                className="border-2 border-border hover:border-primary/50 px-10 py-8 text-lg font-semibold w-full sm:w-auto bg-transparent text-foreground hover:bg-card"
              >
                Explore Features
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground bg-card/30 rounded-2xl p-6 border border-border/50 max-w-3xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-green-400" />
                </div>
                <span className="font-medium">Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-400" />
                </div>
                <span className="font-medium">30-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-purple-400" />
                </div>
                <span className="font-medium">Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
