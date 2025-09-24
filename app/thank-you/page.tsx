"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { GoogleTagManager } from "@/components/google-tag-manager"
import { CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  const [gclid, setGclid] = useState<string | null>(null)

  useEffect(() => {
    // Capture GCLID from URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const gclidParam = urlParams.get('gclid')
    
    if (gclidParam) {
      setGclid(gclidParam)
      // Store in sessionStorage for persistence
      sessionStorage.setItem('gclid', gclidParam)
    } else {
      // Try to get from sessionStorage if not in URL
      const storedGclid = sessionStorage.getItem('gclid')
      if (storedGclid) {
        setGclid(storedGclid)
      }
    }

    // Fire conversion event for Google Ads
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion_thank_you_page', {
        event_category: 'conversion',
        event_label: 'meeting_booking_thank_you',
        value: 1,
        ...(gclidParam && { gclid: gclidParam })
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <GoogleTagManager />
      
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="AlongsideOS" className="w-8 h-8" />
              <span className="text-xl font-semibold text-foreground">AlongsideOS</span>
            </Link>
            <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-balance leading-tight mb-6">
              Thank You for Your Interest!
            </h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed mb-8">
              Your meeting request is being processed. Our team will reach out to confirm your demo session and help you get started with AlongsideOS.
            </p>
          </div>

          <div className="bg-card rounded-lg border p-8 mb-8">
            <h2 className="text-2xl font-medium mb-4">What Happens Next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Confirmation Call</h3>
                  <p className="text-muted-foreground">We'll contact you within 1 business day to confirm your demo slot and understand your specific needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Personalized Demo</h3>
                  <p className="text-muted-foreground">Experience AlongsideOS with your actual use cases and see how voice AI can transform your workflow.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Custom Implementation</h3>
                  <p className="text-muted-foreground">Get a tailored setup plan for integrating AlongsideOS into your team's existing processes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              In the meantime, feel free to explore our platform capabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/use-cases">
                <Button variant="outline">
                  Explore Use Cases
                </Button>
              </Link>
              <Link href="/excel">
                <Button variant="outline">
                  Excel Integration
                </Button>
              </Link>
            </div>
          </div>

          {/* Debug info for development - remove in production */}
          {process.env.NODE_ENV === 'development' && gclid && (
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm">
              <p className="font-medium text-yellow-800">Debug Info (dev only):</p>
              <p className="text-yellow-700">GCLID captured: {gclid}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}