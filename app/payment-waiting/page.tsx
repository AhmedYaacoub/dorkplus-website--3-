"use client"

import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Mail, Home } from "lucide-react"
import Link from "next/link"

export default function PaymentWaitingPage() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email") || "your email"

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/5 to-background py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <Card className="border-primary/20 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center animate-pulse">
                <Clock className="w-10 h-10 text-blue-500" />
              </div>
            </div>
            <CardTitle className="text-4xl mb-4">Payment Received</CardTitle>
            <p className="text-muted-foreground text-lg">We're waiting for your transaction to be confirmed</p>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Status Message */}
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-lg p-8 text-center space-y-4">
              <p className="text-xl font-semibold">Your payment is being processed...</p>
              <p className="text-muted-foreground">
                This usually takes a few minutes to a few hours depending on network congestion.
              </p>
            </div>

            {/* What to Expect */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">What happens next:</h3>
              <div className="space-y-3">
                {[
                  { step: "1", title: "Transaction Confirmation", desc: "We monitor the blockchain for your payment" },
                  { step: "2", title: "Verification", desc: "Our system verifies the payment details" },
                  { step: "3", title: "License Activation", desc: "Your DorkPlus license is activated" },
                  { step: "4", title: "Email Delivery", desc: "Your license key is sent to your email" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-3 bg-muted/50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Confirmation */}
            <div className="bg-primary/10 rounded-lg p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">License will be sent to:</p>
                    <p className="font-semibold break-all">{decodeURIComponent(email)}</p>
                  </div>
                </div>
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              </div>
            </div>

            {/* Support Message */}
            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h4 className="font-semibold">Payment Taking Too Long?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Blockchain confirmations can sometimes take longer than expected. If you don't receive your license key within 24 hours, please contact support.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Email:</span> support@dorkplus.com
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Include:</span> Your email and transaction details
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/" className="w-full">
                <Button variant="outline" className="w-full h-12 text-base">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button className="w-full h-12 text-base bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                <Clock className="w-4 h-4 mr-2" />
                Keep Waiting
              </Button>
            </div>

            {/* Footer Message */}
            <div className="text-center pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Thank you for your purchase! You'll be notified once your license is activated.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
