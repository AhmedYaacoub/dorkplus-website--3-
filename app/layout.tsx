import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const geistSans = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700", "800"],
})

const geistMono = Inter({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "DorkPlus - Advanced Cybersecurity & Penetration Testing Tools | Parse, Scan, Dump & Dehash",
  description:
    "Professional cybersecurity platform with 10+ modules for penetration testing. Parse Google/Yahoo data, scan vulnerabilities, dump databases, and dehash MD5/SHA1/SHA256. Trusted by 1300+ security professionals.",
  keywords: [
    "cybersecurity tools",
    "penetration testing",
    "vulnerability scanner",
    "database dumper",
    "hash cracker",
    "dehashing tool",
    "SQL injection",
    "XSS scanner",
    "security testing",
    "ethical hacking",
    "proxy support",
    "SOCKS proxy",
    "HTTP proxy",
    "Google dorking",
    "Yahoo parser",
    "T-Online parser",
    "Ask.com parser",
    "MD5 cracker",
    "SHA1 cracker",
    "SHA256 cracker",
    "SHA512 cracker",
    "cybersecurity platform",
    "security audit tools",
    "web application security",
    "network security testing",
  ],
  authors: [{ name: "DorkPlus Team" }],
  creator: "DorkPlus",
  publisher: "DorkPlus",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dorkplus.com",
    siteName: "DorkPlus",
    title: "DorkPlus - Advanced Cybersecurity Tools",
    description:
      "Professional cybersecurity platform with 10+ modules for penetration testing. Parse, scan, dump & dehash with just one tool. Trusted by 1300+ security professionals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DorkPlus - Advanced Cybersecurity Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DorkPlus - Advanced Cybersecurity & Penetration Testing Tools",
    description:
      "Professional cybersecurity platform with 10+ modules for penetration testing. Parse, scan, dump & dehash with just one tool.",
    images: ["/og-image.jpg"],
    creator: "@dorkplus",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://dorkplus.com",
  },
  category: "technology",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "DorkPlus",
              applicationCategory: "SecurityApplication",
              operatingSystem: "Web Browser",
              description:
                "Professional cybersecurity platform with 10+ modules for penetration testing, vulnerability scanning, database dumping, and hash cracking.",
              offers: {
                "@type": "Offer",
                price: "29.99",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "1300",
              },
              publisher: {
                "@type": "Organization",
                name: "DorkPlus",
                url: "https://dorkplus.com",
              },
              featureList: [
                "Google Proxyless Parser",
                "Multi-engine Parser (Ask, Google, Yahoo, T-Online)",
                "Vulnerability Scanner (SQL, XSS, ENV)",
                "Database Dumper",
                "Dehasher (MD5, SHA1, SHA256, SHA512)",
                "Proxy Support (HTTP, SOCKS4, SOCKS5)",
                "Cloud Storage",
                "Built-in Encryption",
                "Live Notifications",
                "Control Panel",
              ],
            }),
          }}
        />
        <link rel="canonical" href="https://dorkplus.com" />
        <meta name="theme-color" content="#4F7EFF" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
