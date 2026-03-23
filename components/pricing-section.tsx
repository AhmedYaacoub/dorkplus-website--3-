"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, CheckCircle, Shield, Lock, CreditCard, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export function PricingSection() {
  const handlePurchase = () => {
    window.open("https://nowpayments.io/payment/?iid=5790021191", "_blank")
  }

  const [timeLeft, setTimeLeft] = useState({ days: 6, hours: 23, minutes: 47, seconds: 32 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59, days: prev.days }
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return { days: 6, hours: 23, minutes: 59, seconds: 59 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const plans = [
    {
      name: "Basic",
      price: "$30.00",
      originalPrice: "$50.00",
      period: "/ Week",
      description: "Get started with DorkPlus and its unique built-in modules.",
      features: [
        "Ask Semi-Proxyless Parser",
        "Multi-engines Parser (Google, T-Online, Yahoo, Ask Semi-Proxyless...)",
        "Vulnerability Scanner (SQL, XSS, ENV, LFI, RFI)",
        "Database Dumper (10 times faster than XDG, Rusty & SQLDumper)",
        "Built-in Dehasher (SHA1, SHA256, SHA384, SHA512, MD5)",
      ],
      popular: false,
      discount: "40% OFF - Limited Time",
      icon: Star,
      savings: "$20",
      leftInStock: 7,
    },
    {
      name: "Google Proxyless",
      price: "$75.00",
      originalPrice: "$120.00",
      period: "/ Week",
      description: "Enjoy DorkPlus at its best with the Google Proxyless Scraper.",
      features: [
        "Google Proxyless Parser",
        "Multi-engines Parser (Google, T-Online, Yahoo, Ask Semi-Proxyless...)",
        "Vulnerability Scanner (SQL, XSS, ENV, LFI, RFI)",
        "Database Dumper (10 times faster than XDG, Rusty & SQLDumper)",
        "Built-in Dehasher (SHA1, SHA256, SHA384, SHA512, MD5, SHA3 & MD5/2.5, MD5)",
      ],
      popular: true,
      discount: "Under maintenance",
      icon: Zap,
      savings: "$45",
      leftInStock: 0,
    },
  ]

  return (
    <section id="pricing" className="py-16 sm:py-20 px-4 bg-gradient-to-b from-background via-muted/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <div className="bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 border-2 border-red-500/40 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 max-w-2xl mx-auto shadow-2xl shadow-red-500/20">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <Sparkles className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-red-400 font-bold text-base sm:text-lg">LIMITED TIME OFFER</span>
              <Sparkles className="w-5 h-5 text-red-400 animate-pulse" />
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex justify-center space-x-3 sm:space-x-4 text-2xl sm:text-3xl font-bold mb-3">
              <div className="text-center">
                <div className="bg-red-500/30 rounded-xl px-3 sm:px-4 py-2 sm:py-3 border-2 border-red-500/50 shadow-lg">
                  {String(timeLeft.days).padStart(2, "0")}
                </div>
                <div className="text-xs text-muted-foreground mt-2 font-semibold">Days</div>
              </div>
              <div className="text-center">
                <div className="bg-red-500/30 rounded-xl px-3 sm:px-4 py-2 sm:py-3 border-2 border-red-500/50 shadow-lg">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-xs text-muted-foreground mt-2 font-semibold">Hours</div>
              </div>
              <div className="text-center">
                <div className="bg-red-500/30 rounded-xl px-3 sm:px-4 py-2 sm:py-3 border-2 border-red-500/50 shadow-lg">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-xs text-muted-foreground mt-2 font-semibold">Minutes</div>
              </div>
              <div className="text-center">
                <div className="bg-red-500/30 rounded-xl px-3 sm:px-4 py-2 sm:py-3 border-2 border-red-500/50 shadow-lg">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-xs text-muted-foreground mt-2 font-semibold">Seconds</div>
              </div>
            </div>
            <p className="text-base text-foreground/90 font-semibold">Don't miss out on these exclusive savings!</p>
          </div>
        </div>

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Join 1,300+ Happy Customers
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Don't let your competitors get ahead. Get instant access to the most powerful cybersecurity toolkit and
            start dominating your field today.
          </p>
          <div className="flex justify-center items-center space-x-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full border-2 border-background"></div>
              </div>
              <span className="font-medium">47 people bought this week</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-medium">4.9/5 (1,247 reviews)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-primary shadow-2xl shadow-primary/20 bg-gradient-to-b from-card/90 to-primary/5"
                  : "border-border/50 bg-card/60 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 sm:px-4 py-1 animate-pulse text-xs sm:text-sm">
                  Most Popular
                </Badge>
              )}

              {plan.leftInStock > 0 && (
                <div className="absolute -top-3 right-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-3 py-1.5 rounded-full animate-pulse shadow-lg border-2 border-red-400/50">
                  🔥 Only {plan.leftInStock} left!
                </div>
              )}

              <CardHeader className="text-center pb-6 sm:pb-8 pt-6 sm:pt-8 px-4 sm:px-6">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${plan.popular ? "bg-primary/20" : "bg-muted/50"} flex items-center justify-center`}
                  >
                    <plan.icon
                      className={`w-6 h-6 sm:w-8 sm:h-8 ${plan.popular ? "text-primary" : "text-muted-foreground"}`}
                    />
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-red-400 mb-2 font-bold animate-pulse">{plan.discount}</div>
                <CardTitle className="text-2xl sm:text-3xl mb-3 sm:mb-4 font-bold">{plan.name}</CardTitle>
                <div className="space-y-2">
                  {plan.originalPrice && (
                    <div className="text-lg text-muted-foreground line-through">
                      {plan.originalPrice}
                      {plan.period}
                    </div>
                  )}
                  <div className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4">
                    {plan.price}
                    <span className="text-base sm:text-xl font-normal text-muted-foreground">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <div className="bg-green-500/20 text-green-400 text-sm font-bold px-3 py-1 rounded-full inline-block border border-green-500/30">
                      💰 Save {plan.savings}!
                    </div>
                  )}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6 sm:space-y-8 px-4 sm:px-6 pb-6 sm:pb-8">
                <Link href={plan.popular ? "#" : "/purchase"} className="block">
                  <Button
                    className={`w-full py-5 sm:py-6 text-base sm:text-lg font-bold transition-all duration-300 relative overflow-hidden group ${
                      plan.popular
                        ? "bg-gradient-to-r from-muted to-muted/80 text-muted-foreground cursor-not-allowed"
                        : "bg-gradient-to-r from-green-600 via-green-700 to-green-600 hover:from-green-700 hover:via-green-800 hover:to-green-700 text-white shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 hover:scale-[1.02] border-0 animate-pulse"
                    }`}
                    disabled={plan.popular}
                  >
                    {plan.popular ? (
                      "🔧 UNDER MAINTENANCE"
                    ) : (
                      <>
                        <span className="relative z-10 tracking-wide flex items-center justify-center">
                          <Lock className="w-5 h-5 mr-2" />
                          GET INSTANT ACCESS NOW
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-green-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    )}
                  </Button>
                </Link>

                {!plan.popular && (
                  <div className="bg-card/50 rounded-xl p-4 border border-border/50 space-y-3">
                    <div className="flex items-center justify-center space-x-2 text-sm text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">30-Day Money Back Guarantee</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-blue-400">
                      <Shield className="w-5 h-5" />
                      <span className="font-semibold">Secure Payment • Instant Delivery</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-purple-400">
                      <CreditCard className="w-5 h-5" />
                      <span className="font-semibold">Crypto & Card Payments Accepted</span>
                    </div>
                  </div>
                )}

                <ul className="space-y-3 sm:space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 flex-shrink-0 border border-green-500/30">
                        <Check className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16 px-4">
          <div className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 border-2 border-red-500/30 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto mb-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-400 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6" />
              Don't Wait - Prices Increase Tomorrow!
              <Sparkles className="w-6 h-6" />
            </h3>
            <p className="text-foreground/90 mb-6 text-base sm:text-lg font-medium">
              Over 1,300 cybersecurity professionals trust DorkPlus. Join them before the price goes up by 50% tomorrow.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm">
              <div className="flex items-center space-x-2 text-green-400 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Instant Access</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">24/7 Support</span>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            Need a custom solution? Contact our team for enterprise pricing.
          </p>
          <Button
            variant="outline"
            className="hover:bg-primary/10 hover:border-primary/40 bg-transparent text-sm sm:text-base px-4 sm:px-6"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}
