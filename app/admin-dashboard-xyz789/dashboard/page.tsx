"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true)
        localStorage.setItem("admin_authenticated", "true")
      } else {
        setAuthenticated(false)
        localStorage.removeItem("admin_authenticated")
        router.push("/admin-dashboard-xyz789")
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [router])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      localStorage.removeItem("admin_authenticated")
      router.push("/admin-dashboard-xyz789")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!authenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-400 mt-1">Welcome back, Administrator</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Visitor Tracking</CardTitle>
              <CardDescription>Monitor website visitors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-500">Active</div>
              <p className="text-sm text-muted-foreground mt-2">Receiving visitor notifications via Telegram</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>All systems operational</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-500">Online</div>
              <p className="text-sm text-muted-foreground mt-2">Dashboard is running smoothly</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
