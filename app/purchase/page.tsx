"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Shield, Zap, Mail, Sparkles, Lock, CheckCircle, Copy } from "lucide-react"
import Link from "next/link"

// Cryptocurrency options with wallet addresses
const cryptoOptions = [
  { id: "bnb", name: "BNB", network: "BNB Smart Chain", address: "0x36BA62a8Fe7388469d98529c4b62bb72c604FF25", icon: "BNB" },
  { id: "btc", name: "Bitcoin", network: "Bitcoin", address: "bc1q9rafx6lpv89wcnhxxqmx4w83azu6vf7lv0smq2", icon: "BTC" },
  { id: "eth", name: "Ethereum", network: "Ethereum", address: "0x36BA62a8Fe7388469d98529c4b62bb72c604FF25", icon: "ETH" },
  { id: "ltc", name: "Litecoin", network: "Litecoin", address: "ltc1qdc2c55lf0xywegu4g34h6wlxxvyhqk0ac0q8sm", icon: "LTC" },
  { id: "sol", name: "Solana", network: "Solana", address: "4LxE1DWhUUCbFs821F3H8sGxJEEhbHSLqtYFeYczn1qf", icon: "SOL" },
  { id: "usdc", name: "USDC", network: "BNB Smart Chain", address: "0x36BA62a8Fe7388469d98529c4b62bb72c604FF25", icon: "USDC" },
  { id: "usdt-bsc", name: "USDT", network: "BNB Smart Chain (Tether USD)", address: "0x36BA62a8Fe7388469d98529c4b62bb72c604FF25", icon: "USDT" },
  { id: "usdt-bep20", name: "USDT", network: "BNB Smart Chain (BEP 20)", address: "0x36BA62a8Fe7388469d98529c4b62bb72c604FF25", icon: "USDT" },
  { id: "usdt-tron", name: "USDT", network: "Tron", address: "TQ8SFViKPVBg3AWbPdLtnQCTpeZy312kFN", icon: "USDT" },
  { id: "xrp", name: "XRP", network: "XRP Ledger", address: "rUiqjPZF2N913UhwH5nJJaZzvQK8WKrgCB", icon: "XRP" },
]

export default function PurchasePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

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
    } else if (step === 2 && selectedCrypto) {
      setStep(3)
    }
  }

  const handleCopyAddress = () => {
    const crypto = cryptoOptions.find(c => c.id === selectedCrypto)
    if (crypto) {
      navigator.clipboard.writeText(crypto.address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handlePaidClick = () => {
    setShowConfirmation(true)
  }

  const handleConfirmPaid = () => {
    // Redirect to waiting page with email
    router.push(`/payment-waiting?email=${encodeURIComponent(email)}`)
  }

  const selectedCryptoData = cryptoOptions.find(c => c.id === selectedCrypto)

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
            <span className="ml-2 text-sm font-medium hidden sm:inline">Crypto</span>
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

        {/* Step 2: Cryptocurrency Selection */}
        {step === 2 && (
          <Card className="border-primary/20 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl mb-2">Select Payment Method</CardTitle>
              <p className="text-muted-foreground">Choose your preferred cryptocurrency</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Order Summary */}
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-1">DorkPlus - Basic Plan</h3>
                    <p className="text-sm text-muted-foreground">7 days access with full features</p>
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

              {/* Cryptocurrency Options */}
              <div className="space-y-3">
                <h4 className="font-semibold">Choose a Cryptocurrency:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cryptoOptions.map((crypto) => (
                    <button
                      key={crypto.id}
                      onClick={() => setSelectedCrypto(crypto.id)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        selectedCrypto === crypto.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50 bg-muted/30"
                      }`}
                    >
                      <div className="font-semibold text-sm">{crypto.name}</div>
                      <div className="text-xs text-muted-foreground">{crypto.network}</div>
                    </button>
                  ))}
                </div>
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
                disabled={!selectedCrypto}
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue to Payment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <div className="flex justify-center items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-blue-500" />
                  <span>Secure</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Payment - Wallet Address */}
        {step === 3 && selectedCryptoData && !showConfirmation && (
          <Card className="border-primary/20 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500/20 to-green-600/20 flex items-center justify-center animate-pulse">
                  <Sparkles className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <CardTitle className="text-3xl mb-2">Send Payment</CardTitle>
              <p className="text-muted-foreground">Send $30.00 to the address below</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Final Summary */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 text-center space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Payment Amount</p>
                  <p className="text-5xl font-bold text-primary">$30.00</p>
                  <p className="text-sm text-muted-foreground mt-1">One-time payment for 7 days access</p>
                </div>
                <div className="flex justify-center items-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">You saved $20.00 (40% off)</span>
                </div>
              </div>

              {/* Cryptocurrency Info */}
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Send {selectedCryptoData.name}</p>
                  <p className="text-xl font-bold">{selectedCryptoData.name}</p>
                  <p className="text-xs text-muted-foreground">{selectedCryptoData.network}</p>
                </div>

                {/* Wallet Address */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Wallet Address:</p>
                  <div className="bg-background rounded-lg p-4 flex items-center justify-between border border-border">
                    <code className="text-xs text-muted-foreground break-all font-mono">{selectedCryptoData.address}</code>
                    <button
                      onClick={handleCopyAddress}
                      className="ml-2 p-2 hover:bg-muted rounded transition-colors flex-shrink-0"
                      title="Copy address"
                    >
                      <Copy className="w-4 h-4 text-primary" />
                    </button>
                  </div>
                  {copied && <p className="text-xs text-green-400 text-center">Copied to clipboard!</p>}
                </div>
              </div>

              {/* Email Confirmation */}
              <div className="bg-primary/10 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">License will be sent to:</p>
                    <p className="font-medium">{email}</p>
                  </div>
                </div>
              </div>

              {/* Payment Instructions */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 space-y-3">
                <h4 className="font-semibold text-blue-400">Payment Instructions:</h4>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Copy the wallet address above</li>
                  <li>Open your crypto wallet or exchange</li>
                  <li>Send {selectedCryptoData.name} to the address shown</li>
                  <li>Return here and confirm payment</li>
                </ol>
              </div>

              <Button
                onClick={handlePaidClick}
                className="w-full h-16 text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 hover:scale-[1.02] transition-all"
              >
                I Paid
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Your license will be activated once we receive and verify your payment.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Step 3B: Payment Confirmation */}
        {step === 3 && selectedCryptoData && showConfirmation && (
          <Card className="border-primary/20 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-yellow-500" />
                </div>
              </div>
              <CardTitle className="text-3xl mb-2">Confirm Payment</CardTitle>
              <p className="text-muted-foreground">Please verify you have completed the payment</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Confirmation Message */}
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 space-y-4">
                <p className="text-lg font-semibold text-center">Are you sure you have sent the payment?</p>
                <p className="text-muted-foreground text-center">
                  Please make sure you sent exactly $30.00 worth of {selectedCryptoData.name} to the wallet address.
                </p>
              </div>

              {/* Payment Details */}
              <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Cryptocurrency:</span>
                  <span className="font-semibold">{selectedCryptoData.name}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-semibold">$30.00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">License Email:</span>
                  <span className="font-semibold text-sm break-all">{email}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => setShowConfirmation(false)}
                  variant="outline"
                  className="h-12 text-base font-bold"
                >
                  Back
                </Button>
                <Button
                  onClick={handleConfirmPaid}
                  className="h-12 text-base font-bold bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                >
                  Yes, Confirm
                </Button>
              </div>

              <p className="text-center text-xs text-muted-foreground">
                Once confirmed, you'll see a payment waiting page. We'll process your transaction and send your license key to {email}.
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
