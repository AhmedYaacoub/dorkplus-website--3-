"use client"

import { useEffect, useState } from "react"

export default function VisitorTracker() {
  const [hasTracked, setHasTracked] = useState(false)

  useEffect(() => {
    if (hasTracked) return

    const trackVisitor = async () => {
      try {
        const ua = navigator.userAgent
        const isMobile = /Mobile|Android|iPhone|iPad|iPod/i.test(ua)
        const isTablet = /iPad|Android(?!.*Mobile)/i.test(ua)
        const deviceType = isMobile ? (isTablet ? "Tablet" : "Mobile") : "Desktop"

        const ipData = { ip: "Unknown", country: "Unknown" }
        try {
          // First get the IP address
          const ipResponse = await fetch("https://api.ipify.org?format=json")
          if (ipResponse.ok) {
            const ipResult = await ipResponse.json()
            ipData.ip = ipResult.ip

            // Then get the country based on IP
            try {
              const geoResponse = await fetch(`https://ipapi.co/${ipResult.ip}/json/`)
              if (geoResponse.ok) {
                const geoData = await geoResponse.json()
                ipData.country = geoData.country_name || "Unknown"
              }
            } catch (geoError) {
              // Fallback to ip-api.com if ipapi.co fails
              try {
                const fallbackResponse = await fetch(`http://ip-api.com/json/${ipResult.ip}`)
                if (fallbackResponse.ok) {
                  const fallbackData = await fallbackResponse.json()
                  ipData.country = fallbackData.country || "Unknown"
                }
              } catch (e) {
                console.error("Failed to fetch country:", e)
              }
            }
          }
        } catch (e) {
          console.error("Failed to fetch visitor info:", e)
        }

        const message =
          `🚨 *NEW VISITOR* 🚨\n\n` +
          `📍 IP: \`${ipData.ip}\`\n` +
          `🌍 Country: ${ipData.country}\n` +
          `📱 Device: ${deviceType}\n` +
          `⏰ Time: ${new Date().toLocaleString()}`

        // Send to Telegram
        const TELEGRAM_BOT_TOKEN = "8143366064:AAEXeOzrOvs0v-UJtErEzY2-B76hy1BM6DU"
        const TELEGRAM_CHAT_ID = "5389790189"

        const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        })

        if (telegramResponse.ok) {
          setHasTracked(true)
        }
      } catch (error) {
        console.error("Failed to track visitor:", error)
      }
    }

    // Track after 2 seconds
    const timer = setTimeout(trackVisitor, 2000)

    return () => clearTimeout(timer)
  }, [hasTracked])

  return null
}
