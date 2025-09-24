"use client"

import { useEffect } from 'react'
import Script from 'next/script'

// Get GTM ID from environment variable for static build
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXXXX'

interface GoogleTagManagerProps {
  gtmId?: string
}

export function GoogleTagManager({ gtmId = GTM_ID }: GoogleTagManagerProps) {
  useEffect(() => {
    // Initialize dataLayer for GTM
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      
      // Function to push data to dataLayer
      window.gtag = function() {
        window.dataLayer.push(arguments)
      }
      
      // Initialize GTM
      window.gtag('js', new Date())
      window.gtag('config', gtmId, {
        // Ensure gclid is captured
        allow_google_signals: true,
        allow_ad_personalization_signals: true
      })

      // Capture gclid from URL parameters if present
      const urlParams = new URLSearchParams(window.location.search)
      const gclid = urlParams.get('gclid')
      
      if (gclid) {
        // Store gclid in sessionStorage for persistence across pages
        sessionStorage.setItem('gclid', gclid)
        
        // Send gclid to GTM
        window.gtag('event', 'gclid_captured', {
          gclid: gclid,
          event_category: 'google_ads',
          event_label: 'gclid_parameter'
        })
      }
    }
  }, [gtmId])

  if (!gtmId || gtmId === 'GTM-XXXXXXXXX') {
    console.warn('GTM ID not configured properly')
    return null
  }

  return (
    <>
      {/* GTM Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
      />
      
      {/* GTM NoScript fallback for static deployment */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}

// Helper function to track meeting form event
export function trackMeetingForm() {
  if (typeof window !== 'undefined' && window.gtag) {
    // Get stored gclid if available
    const gclid = sessionStorage.getItem('gclid')
    
    window.gtag('event', 'book_meeting_form_alongside', {
      event_category: 'engagement',
      event_label: 'meeting_booking',
      value: 1,
      ...(gclid && { gclid: gclid })
    })
  }
}

// TypeScript declarations
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}