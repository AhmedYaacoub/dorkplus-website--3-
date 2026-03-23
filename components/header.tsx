"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showAntiPublicDialog, setShowAntiPublicDialog] = useState(false)
  const [showDehasherDialog, setShowDehasherDialog] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-lg shadow-primary/5"
            : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection("home")}>
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center shadow-lg shadow-primary/25">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                DorkPlus
              </span>
            </div>

            <nav className="hidden lg:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("modules")}
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105"
              >
                Modules
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105"
              >
                Blog
              </button>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowAntiPublicDialog(true)}
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105"
                >
                  Anti Public
                </button>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 animate-pulse">
                  NEW
                </Badge>
              </div>
              <button
                onClick={() => setShowDehasherDialog(true)}
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105"
              >
                Dehasher
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection("pricing")}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200 hover:scale-105 text-sm sm:text-base px-3 sm:px-4"
            >
              Get started
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/40">
            <nav className="container px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("modules")}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Modules
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Blog
              </button>
              <div className="flex items-center space-x-2 py-2">
                <button
                  onClick={() => setShowAntiPublicDialog(true)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Anti Public
                </button>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  NEW
                </Badge>
              </div>
              <button
                onClick={() => setShowDehasherDialog(true)}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Dehasher
              </button>
            </nav>
          </div>
        )}
      </header>

      <Dialog open={showAntiPublicDialog} onOpenChange={setShowAntiPublicDialog}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-primary">🔒 Premium Feature</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              You must purchase DorkPlus to access the Anti Public feature. This powerful tool helps you identify
              exposed databases and security vulnerabilities.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={() => setShowAntiPublicDialog(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setShowAntiPublicDialog(false)
                scrollToSection("pricing")
              }}
            >
              View Pricing
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showDehasherDialog} onOpenChange={setShowDehasherDialog}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-primary">🔒 Premium Feature</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              You must purchase DorkPlus to access the Dehasher tool. This advanced feature provides hash cracking and
              analysis capabilities.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={() => setShowDehasherDialog(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setShowDehasherDialog(false)
                scrollToSection("pricing")
              }}
            >
              View Pricing
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
