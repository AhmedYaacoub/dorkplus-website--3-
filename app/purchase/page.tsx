"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Mail, Sparkles, Lock, CheckCircle, Copy, Zap, Shield } from "lucide-react"
import Link from "next/link"

const cryptoOptions = [
  { id: "btc", name: "Bitcoin", network: "Bitcoin", address: "bc1q9rafx6lpv89wcnhxxqmx4w83azu6vf7lv0smq2", gradient: "from-orange-500 to-orange-600", lightBg: "bg-orange-500/10", borderColor: "border-orange-500/30", textColor: "text-orange-500", shadowColor: "shadow-orange-500/20" },
  { id: "eth", name: "Ethereum", network: "Ethereum", address: "0x36BA62a8Fe7388469d98529c4b62bb72c604FF25", gradient: "from-purple-500 to-purple-600", lightBg: "bg-purple-500/10", borderColor: "border-purple-500/30", textColor: "text-purple-500", shadowColor: "shadow-purple-500/20" },
  { id: "bnb", name: "BNB", network: "BNB Smart Chain", address: "0x36BA62a8Fe7388469d98529c4b62bb72c604FF25", gradient: "from-yellow-400 to-yellow-600", lightBg: "bg-yellow-500/10", borderColor: "border-yellow-500/30", textColor: "text-yellow-500", shadowColor: "shadow-yellow-500/20" },
  { id: "sol", name: "Solana", network: "Solana", address: "4LxE1DWhUUCbFs821F3H8sGxJEEhbHSLqtYFeYczn1qf", gradient: "from-cyan-400 to-cyan-600", lightBg: "bg-cyan-500/10", borderColor: "border-cyan-500/30", textColor: "text-cyan-400", shadowColor: "shadow-cyan-500/20" },
  { id: "ltc", name: "Litecoin", network: "Litecoin", address: "ltc1qdc2c55lf0xywegu4g34h6wlxxvyhqk0ac0q8sm", gradient: "from-slate-300 to-slate-500", lightBg: "bg-slate-500/10", borderColor: "border-slate-500/30", textColor: "text-slate-400", shadowColor: "shadow-slate-500/20" },
  { id: "usdc", name: "USDC", network: "BNB Smart Chain", address: "0x36BA62a8Fe7388469d98529c4b62bb72c604FF25", gradient: "from-blue-500 to-blue-600", lightBg: "bg-blue-500/10", borderColor: "border-blue-500/30", textColor: "text-blue-500", shadowColor: "shadow-blue-500/20" },
  { id: "usdt-bsc", name: "USDT", network: "BNB Smart Chain", address: "0x36BA62a8Fe7388469d98529c4b62bb72c604FF25", gradient: "from-emerald-500 to-emerald-600", lightBg: "bg-emerald-500/10", borderColor: "border-emerald-500/30", textColor: "text-emerald-500", shadowColor: "shadow-emerald-500/20" },
  { id: "usdt-tron", name: "USDT Tron", network: "Tron", address: "TQ8SFViKPVBg3AWbPdLtnQCTpeZy312kFN", gradient: "from-red-500 to-red-600", lightBg: "bg-red-500/10", borderColor: "border-red-500/30", textColor: "text-red-500", shadowColor: "shadow-red-500/20" },
  { id: "xrp", name: "XRP", network: "XRP Ledger", address: "rUiqjPZF2N913UhwH5nJJaZzvQK8WKrgCB", gradient: "from-indigo-500 to-indigo-600", lightBg: "bg-indigo-500/10", borderColor: "border-indigo-500/30", textColor: "text-indigo-500", shadowColor: "shadow-indigo-500/20" },
]

export default function PurchasePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setIsValidEmail(validateEmail(value))
  }

  const handleContinue = () => {
    if (step === 1 && isValidEmail) setStep(2)
    else if (step === 2 && selectedCrypto) setStep(3)
  }

  const handleCopyAddress = () => {
    const crypto = cryptoOptions.find(c => c.id === selectedCrypto)
    if (crypto) {
      navigator.clipboard.writeText(crypto.address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handlePaidClick = () => setShowConfirmation(true)
  const handleConfirmPaid = () => router.push(`/payment-waiting?email=${encodeURIComponent(email)}`)

  const selectedCryptoData = cryptoOptions.find(c => c.id === selectedCrypto)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background py-8 px-4 md:py-16">
      <div className="container mx-auto max-w-5xl">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium mb-8 transition-colors">
          ← Back to Home
        </Link>

        {/* Step 1: Email */}
        {step === 1 && (
          <div className="space-y-8">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">Unlock DorkPlus Today</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Join 1,300+ cybersecurity professionals. Just 7 days for only $30 (save $20).</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Zap, title: "Instant Access", desc: "Get your license in seconds" },
                { icon: Shield, title: "100% Secure", desc: "Bank-level encryption" },
                { icon: CheckCircle, title: "30-Day Guarantee", desc: "Money-back promise" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="border-primary/30 bg-gradient-to-br from-card to-card/50 overflow-hidden shadow-2xl">
              <CardContent className="p-8 md:p-10 space-y-8">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-base font-semibold">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={handleEmailChange}
                      className="h-12 pl-12 text-base border-primary/20 focus:border-primary/50 rounded-lg"
                    />
                  </div>
                  {email && !isValidEmail && <p className="text-sm text-red-500">Please enter a valid email</p>}
                </div>

                <div className="space-y-3 pt-2">
                  <p className="font-semibold text-foreground">What You Get:</p>
                  <div className="grid gap-2">
                    {["Full Access to All Tools", "Priority Email Support", "7 Days of Premium Features", "Instant License Delivery"].map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleContinue}
                  disabled={!isValidEmail}
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-lg shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02]"
                >
                  Continue to Payment Method
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 2: Crypto Selection */}
        {step === 2 && (
          <div className="space-y-8">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">Choose Your Payment</h1>
              <p className="text-xl text-muted-foreground">Select a cryptocurrency to complete your purchase</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {cryptoOptions.map((crypto) => (
                <button
                  key={crypto.id}
                  onClick={() => setSelectedCrypto(crypto.id)}
                  className={`group relative overflow-hidden rounded-xl p-1 transition-all duration-300 ${
                    selectedCrypto === crypto.id
                      ? `bg-gradient-to-br ${crypto.gradient} shadow-2xl ${crypto.shadowColor}`
                      : "bg-gradient-to-br from-border to-border/50 hover:shadow-lg"
                  }`}
                >
                  <div className={`relative rounded-lg p-6 space-y-3 transition-all ${selectedCrypto === crypto.id ? "bg-card border-0" : "bg-card border border-border/50 group-hover:bg-card/90"}`}>
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${crypto.gradient} flex items-center justify-center text-lg font-bold text-white shadow-lg`}>
                      {crypto.name.charAt(0)}
                    </div>
                    <div className="text-left space-y-1">
                      <p className="font-bold text-foreground text-lg">{crypto.name}</p>
                      <p className="text-xs text-muted-foreground">{crypto.network}</p>
                    </div>
                    {selectedCrypto === crypto.id && (
                      <div className="flex items-center gap-2 pt-2 text-green-500 text-sm font-semibold">
                        <CheckCircle className="w-4 h-4" />
                        Selected
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Order Summary */}
            <Card className="border-primary/30 bg-gradient-to-br from-card to-card/50 overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-border/50">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">DorkPlus 7-Day Access</h3>
                    <p className="text-sm text-muted-foreground mt-1">Full access to all tools & features</p>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-base px-4 py-2">40% OFF</Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Regular Price</span>
                    <span className="line-through text-muted-foreground">$50.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-green-400">
                    <span>You Save</span>
                    <span className="font-semibold">-$20.00</span>
                  </div>
                  <div className="flex justify-between text-2xl font-bold pt-3 border-t border-border/50 text-primary">
                    <span>Total</span>
                    <span>$30.00</span>
                  </div>
                </div>

                <div className={`rounded-lg p-4 ${selectedCryptoData ? selectedCryptoData.lightBg : "bg-muted/50"} border ${selectedCryptoData ? selectedCryptoData.borderColor : "border-border/50"}`}>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">License will be sent to</p>
                      <p className="font-semibold text-foreground">{email}</p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleContinue}
                  disabled={!selectedCrypto}
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-lg shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02]"
                >
                  Continue to Payment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 3: Payment Address */}
        {step === 3 && selectedCryptoData && !showConfirmation && (
          <div className="space-y-8">
            <div className="text-center space-y-4 mb-12">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedCryptoData.gradient} text-white mb-4 shadow-lg`}>
                <Sparkles className="w-8 h-8" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">Send Payment</h1>
              <p className="text-xl text-muted-foreground">Transfer exactly $30.00 worth of {selectedCryptoData.name}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Payment Amount */}
              <Card className={`border-2 ${selectedCryptoData.borderColor} bg-gradient-to-br ${selectedCryptoData.lightBg} overflow-hidden shadow-xl`}>
                <CardContent className="p-8 text-center space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Amount to Send</p>
                    <p className="text-5xl md:text-6xl font-bold text-primary">$30.00</p>
                    <p className="text-sm text-muted-foreground mt-2">One-time payment</p>
                  </div>
                  <div className={`rounded-lg p-4 bg-gradient-to-r ${selectedCryptoData.gradient} text-white text-center space-y-1`}>
                    <p className="text-sm font-semibold">Cryptocurrency</p>
                    <p className="text-2xl font-bold">{selectedCryptoData.name}</p>
                    <p className="text-xs opacity-90">{selectedCryptoData.network}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Wallet Address */}
              <Card className="border-primary/30 bg-gradient-to-br from-card to-card/50 overflow-hidden shadow-xl">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-3">
                    <p className="font-bold text-foreground">Send to this address:</p>
                    <div className="group relative rounded-lg overflow-hidden border-2 border-primary/30 bg-card">
                      <code className="block p-4 text-xs md:text-sm text-muted-foreground font-mono break-all leading-relaxed">
                        {selectedCryptoData.address}
                      </code>
                      <button
                        onClick={handleCopyAddress}
                        className="absolute top-3 right-3 p-2.5 rounded-lg bg-primary/20 hover:bg-primary/30 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                      >
                        <Copy className="w-4 h-4 text-primary" />
                      </button>
                    </div>
                    {copied && <p className="text-xs text-green-400 font-semibold text-center">Copied to clipboard!</p>}
                  </div>

                  <div className="rounded-lg bg-blue-500/10 border border-blue-500/30 p-4 space-y-3">
                    <p className="font-semibold text-blue-400 text-sm">Steps:</p>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2"><span className="text-blue-400 font-bold flex-shrink-0">1.</span> Copy address above</li>
                      <li className="flex gap-2"><span className="text-blue-400 font-bold flex-shrink-0">2.</span> Open your crypto wallet</li>
                      <li className="flex gap-2"><span className="text-blue-400 font-bold flex-shrink-0">3.</span> Paste & send payment</li>
                      <li className="flex gap-2"><span className="text-blue-400 font-bold flex-shrink-0">4.</span> Click "I Paid" below</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              onClick={handlePaidClick}
              className={`w-full h-16 text-xl font-bold bg-gradient-to-r ${selectedCryptoData.gradient} text-white rounded-lg shadow-2xl hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2`}
            >
              I Paid - Confirm Transaction
              <CheckCircle className="w-6 h-6" />
            </Button>
          </div>
        )}

        {/* Step 3B: Confirmation */}
        {step === 3 && selectedCryptoData && showConfirmation && (
          <div className="space-y-8">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-500/20 mb-4">
                <CheckCircle className="w-8 h-8 text-yellow-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Confirm Payment</h1>
              <p className="text-lg text-muted-foreground">Please verify the payment details</p>
            </div>

            <Card className="border-yellow-500/30 bg-gradient-to-br from-yellow-500/5 to-transparent overflow-hidden shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8 space-y-6">
                <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg p-6 text-center space-y-2">
                  <p className="text-lg font-bold text-foreground">Are you sure you sent the payment?</p>
                  <p className="text-muted-foreground">Make sure you sent exactly $30.00 worth of {selectedCryptoData.name} to the wallet address.</p>
                </div>

                <div className="space-y-3 bg-card border border-border/50 rounded-lg p-6">
                  <div className="flex justify-between py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Cryptocurrency</span>
                    <span className="font-bold text-foreground">{selectedCryptoData.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/30">
                    <span className="text-muted-foreground">Amount</span>
                    <span className="font-bold text-primary text-lg">$30.00</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Email for License</span>
                    <span className="font-semibold text-foreground text-sm text-right max-w-xs">{email}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    onClick={() => setShowConfirmation(false)}
                    variant="outline"
                    className="h-12 text-base font-bold rounded-lg"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleConfirmPaid}
                    className={`h-12 text-base font-bold bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]`}
                  >
                    Yes, Confirm
                  </Button>
                </div>

                <p className="text-center text-xs text-muted-foreground pt-4 border-t border-border/30">
                  After confirmation, you'll see a status page. We'll process your transaction within minutes.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
