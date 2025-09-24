// Calendar interaction utilities

const CALENDAR_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0tWEP8ks8gSOwZ2kdhx6hMOUXDrzRb8qVC4yPTsOhs-zBKLP3GSCCAW0PVBXXFbAlxy3T5y8Ve?gv=true"

export function handleCalendarClick() {
  // Fire GTM event for calendar button click
  if (typeof window !== 'undefined' && window.gtag) {
    const gclid = sessionStorage.getItem('gclid')
    
    window.gtag('event', 'book_meeting_form_alongside', {
      event_category: 'engagement',
      event_label: 'meeting_booking_button_click',
      value: 1,
      ...(gclid && { gclid: gclid })
    })
  }

  // Open calendar in new tab
  window.open(CALENDAR_URL, '_blank', 'noopener,noreferrer')

  // Redirect current page to thank-you with GCLID preservation
  const currentUrl = new URL(window.location.href)
  const gclid = currentUrl.searchParams.get('gclid') || sessionStorage.getItem('gclid')
  
  const thankYouUrl = new URL('/thank-you', window.location.origin)
  if (gclid) {
    thankYouUrl.searchParams.set('gclid', gclid)
  }
  
  // Small delay to ensure the new tab opens first
  setTimeout(() => {
    window.location.href = thankYouUrl.toString()
  }, 100)
}

export function getCalendarUrl() {
  return CALENDAR_URL
}