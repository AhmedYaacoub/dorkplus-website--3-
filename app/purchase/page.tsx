"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Shield, Zap, Mail, CreditCard, Sparkles, Lock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function PurchasePage() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [isValidEmail, setIsValidEmail] = useState(false)

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setIsValidEmail(validateEmail(value))
  }

  const handleContinue = () => {
    if (step === 1 && isValidEmail) {
      setStep(2)
    } else if (step === 2) {
      setStep(3)
    }
  }

  const handleCheckout = () => {
    window.open("https://nowpayments.io/payment/?iid=5790021191", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/5 to-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-primary hover:underline text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Complete Your Purchase
          </h1>
          <p className="text-muted-foreground text-lg">Join 1,300+ cybersecurity professionals using DorkPlus</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {step > 1 ? <Check className="w-5 h-5" /> : "1"}
            </div>
            <span className="ml-2 text-sm font-medium hidden sm:inline">Email</span>
          </div>
          <div className={`w-12 h-0.5 ${step >= 2 ? "bg-primary" : "bg-muted"}`}></div>
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {step > 2 ? <Check className="w-5 h-5" /> : "2"}
            </div>
            <span className="ml-2 text-sm font-medium hidden sm:inline">Review</span>
          </div>
          <div className={`w-12 h-0.5 ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              3
            </div>
            <span className="ml-2 text-sm font-medium hidden sm:inline">Payment</span>
          </div>
        </div>

        {/* Step 1: Email Collection */}
        {step === 1 && (
          <Card className="border-primary/20 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl mb-2">Get Instant Access</CardTitle>
              <p className="text-muted-foreground">
                Enter your email to receive your DorkPlus license key immediately after payment
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={handleEmailChange}
                  className="h-12 text-base"
                />
                {email && !isValidEmail && <p className="text-sm text-red-500">Please enter a valid email address</p>}
              </div>

              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Instant Delivery</p>
                    <p className="text-sm text-muted-foreground">
                      Your license key will be sent to this email within seconds
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Secure & Private</p>
                    <p className="text-sm text-muted-foreground">We never share your email with third parties</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">24/7 Support Access</p>
                    <p className="text-sm text-muted-foreground">Get help anytime via this email address</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleContinue}
                disabled={!isValidEmail}
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl shadow-primary/30"
              >
                Continue to Review
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Order Review */}
        {step === 2 && (
          <Card className="border-primary/20 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl mb-2">Review Your Order</CardTitle>
              <p className="text-muted-foreground">Confirm your purchase details before proceeding to payment</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Order Summary */}
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-1">DorkPlus - Basic Plan</h3>
                    <p className="text-sm text-muted-foreground">Weekly subscription with full access</p>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">40% OFF</Badge>
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Original Price</span>
                    <span className="line-through">$50.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Discount (40%)</span>
                    <span className="text-green-400">-$20.00</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-2 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">$30.00</span>
                  </div>
                </div>
              </div>

              {/* Email Confirmation */}
              <div className="bg-primary/10 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">License will be sent to:</p>
                    <p className="font-medium">{email}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setStep(1)} className="text-primary">
                  Edit
                </Button>
              </div>

              {/* What's Included */}
              <div className="space-y-3">
                <h4 className="font-semibold">What's Included:</h4>
                <div className="space-y-2">
                  {[
                    "Ask Semi-Proxyless Parser",
                    "Multi-engines Parser (Google, T-Online, Yahoo, Ask)",
                    "Vulnerability Scanner (SQL, XSS, ENV, LFI, RFI)",
                    "Database Dumper (10x faster than competitors)",
                    "Built-in Dehasher (SHA1, SHA256, SHA384, SHA512, MD5)",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleContinue}
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl shadow-primary/30"
              >
                Proceed to Payment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <div className="flex justify-center items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-blue-500" />
                  <span>Secure Payment</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <Card className="border-primary/20 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500/20 to-green-600/20 flex items-center justify-center animate-pulse">
                  <CreditCard className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <CardTitle className="text-3xl mb-2">Ready to Get Started?</CardTitle>
              <p className="text-muted-foreground">Click below to complete your secure payment</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Final Summary */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 text-center space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">You're paying</p>
                  <p className="text-5xl font-bold text-primary">$30.00</p>
                  <p className="text-sm text-muted-foreground mt-1">One-time payment for 7 days access</p>
                </div>
                <div className="flex justify-center items-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">You saved $20.00 (40% off)</span>
                </div>
              </div>

              {/* Security Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-xs font-medium">SSL Encrypted</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Lock className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-xs font-medium">Secure Payment</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-xs font-medium">Money Back</p>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                className="w-full h-16 text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 hover:scale-[1.02] transition-all"
              >
                Complete Secure Checkout
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>

              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <p className="text-sm font-medium text-center">What happens next?</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-2">
                    <span className="font-bold text-primary">1.</span>
                    <span>You'll be redirected to our secure payment processor</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-bold text-primary">2.</span>
                    <span>Complete your payment using your preferred method</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-bold text-primary">3.</span>
                    <span>Receive your license key instantly at {email}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-bold text-primary">4.</span>
                    <span>Start using DorkPlus immediately!</span>
                  </div>
                </div>
              </div>

              <p className="text-center text-xs text-muted-foreground">
                Protected by 256-bit SSL encryption. Your payment information is completely secure.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Trust Indicators */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>1,300+ Happy Customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-500" />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-purple-500" />
              <span>Instant Access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
