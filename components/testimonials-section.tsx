"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "CryptosweepSec",
      username: "@cryptosweep",
      content: "It works fine and clean 👍",
      avatar: "/professional-cybersecurity-expert-male.jpg",
      rating: 5,
    },
    {
      name: "Quartz",
      username: "@quartz_sec",
      content: "HQ from D+ Parser 👍",
      avatar: "/tech-professional-female-with-glasses.jpg",
      rating: 5,
    },
    {
      name: "Phyziks",
      username: "@phyziks",
      content: "major vouch... not only does this tool look amazing, it works extremely well",
      avatar: "/placeholder-ndqfx.png",
      rating: 5,
    },
    {
      name: "Markoo",
      username: "@markoo_sec",
      content: "Most HQ parser here",
      avatar: "/security-researcher-male-with-beard.jpg",
      rating: 5,
    },
    {
      name: "MySeadog_off",
      username: "@myseadog",
      content: "+Rep best Parser on the Market rn & the danger is also so good.",
      avatar: "/penetration-tester-female-professional.jpg",
      rating: 5,
    },
    {
      name: "Vows",
      username: "@vows_sec",
      content: "+vouch Parser is fucking gas, best parser ive ever used. Vuln scanner is also gas",
      avatar: "/cybersecurity-analyst-male-with-cap.jpg",
      rating: 5,
    },
    {
      name: "NullName",
      username: "@nullname_sec",
      content: "Insane big vouch for this tool, best Parser is incredible and so is the Dehasher",
      avatar: "/ethical-hacker-female-with-dark-hair.jpg",
      rating: 5,
    },
    {
      name: "TheGitGuy",
      username: "@thegitguy",
      content: "skills like no cap",
      avatar: "/developer-male-with-glasses-coding.jpg",
      rating: 5,
    },
    {
      name: "Felix",
      username: "@felix_sec",
      content: "google proxyless, working flawlessly",
      avatar: "/security-expert-male-professional-suit.jpg",
      rating: 5,
    },
    {
      name: "Hostile",
      username: "@hostile_sec",
      content: "the best tool",
      avatar: "/cybersecurity-specialist-female-confident.jpg",
      rating: 5,
    },
    {
      name: "Mary",
      username: "@mary_sec",
      content: "NUMBER 1 SINCE LONG TIME ❤️ Vouch 100%",
      avatar: "/security-researcher-female-smiling.jpg",
      rating: 5,
    },
    {
      name: "Supreme",
      username: "@supreme_sec",
      content: "Very HQ",
      avatar: "/penetration-tester-male-serious-look.jpg",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsPerPage = 3

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + testimonialsPerPage >= testimonials.length ? 0 : prev + testimonialsPerPage))
  }

  const prevTestimonials = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - testimonialsPerPage) : prev - testimonialsPerPage,
    )
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage)

  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Trusted by security <span className="gradient-text">professionals worldwide</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join 1,300+ satisfied customers who trust DorkPlus for their cybersecurity needs
          </p>
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="text-2xl font-bold">4.9</span>
            <span className="text-muted-foreground">out of 5</span>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={currentIndex + index}
                className="bg-card border-border hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-primary" />
                </div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-14 h-14 border-2 border-primary/30">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/20 text-primary font-bold text-lg">
                        {testimonial.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="mb-3">
                        <span className="font-bold text-foreground text-lg block">{testimonial.name}</span>
                        <span className="text-muted-foreground text-sm">{testimonial.username}</span>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                      <p className="text-foreground leading-relaxed text-base">{testimonial.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonials}
              className="hover:bg-primary/10 bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm text-muted-foreground">
              {Math.floor(currentIndex / testimonialsPerPage) + 1} of{" "}
              {Math.ceil(testimonials.length / testimonialsPerPage)}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonials}
              className="hover:bg-primary/10 bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="text-center text-muted-foreground mt-8">
          More vouches on{" "}
          <a href="#" className="text-primary hover:underline font-medium">
            Discord server
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:underline font-medium">
            Telegram group
          </a>
          .
        </div>
      </div>
    </section>
  )
}
