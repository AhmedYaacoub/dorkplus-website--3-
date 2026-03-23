import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SocialProofBar } from "@/components/social-proof-bar"
import { TechLogos } from "@/components/tech-logos"
import { VideoTutorialSection } from "@/components/video-tutorial-section"
import { TasksSection } from "@/components/tasks-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { FloatingElements } from "@/components/floating-elements"
import VisitorTracker from "@/components/visitor-tracker"
import { LiveChatWidget } from "@/components/livechat-widget"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <VisitorTracker />
      <FloatingElements />
      <LiveChatWidget />
      <Header />
      <main role="main">
        <section id="home" aria-labelledby="hero-heading">
          <HeroSection />
        </section>
        <SocialProofBar />
        <section id="modules" aria-labelledby="modules-heading">
          <TechLogos />
        </section>
        <section aria-labelledby="tutorial-heading">
          <VideoTutorialSection />
        </section>
        <section aria-labelledby="tasks-heading">
          <TasksSection />
        </section>
        <section id="testimonials" aria-labelledby="testimonials-heading">
          <TestimonialsSection />
        </section>
        <section id="features" aria-labelledby="features-heading">
          <FeaturesSection />
        </section>
        <section id="pricing" aria-labelledby="pricing-heading">
          <PricingSection />
        </section>
        <section id="blog" aria-labelledby="faq-heading">
          <FAQSection />
        </section>
      </main>
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold">
              <span>DorkPlus</span>
            </div>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
              Professional cybersecurity tools for penetration testing, vulnerability scanning, and security auditing.
              Trusted by 1,300+ security professionals worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-4">
              <span>Cybersecurity Tools</span>
              <span>•</span>
              <span>Penetration Testing</span>
              <span>•</span>
              <span>Vulnerability Scanner</span>
              <span>•</span>
              <span>Database Dumper</span>
              <span>•</span>
              <span>Hash Cracker</span>
            </div>
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">© 2025 DorkPlus. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
