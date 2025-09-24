# Google Tag Manager Setup

This application includes Google Tag Manager integration for tracking user interactions and conversions.

## Setup Instructions

### 1. Configure GTM ID

Edit `package.json` and replace the placeholder GTM ID:

```json
{
  "gtmId": "GTM-XXXXXXXXX"
}
```

Replace `GTM-XXXXXXXXX` with your actual Google Tag Manager container ID (e.g., `GTM-ABC1234`).

### 2. Build Process

The build process automatically injects the GTM ID from package.json:

```bash
npm run build
```

This runs the custom build script that:
- Reads the GTM ID from package.json
- Sets it as NEXT_PUBLIC_GTM_ID environment variable
- Builds the static site with GTM integrated

### 3. Events Tracked

The application tracks the following events:

#### `book_meeting_form_alongside`
- **Triggered when**: User interacts with the meeting booking form
- **Event Category**: engagement
- **Event Label**: meeting_booking
- **Additional Data**: GCLID (if present in URL)

### 4. GCLID Handling

The GTM component automatically:
- Captures `gclid` parameter from URL
- Stores it in sessionStorage for persistence
- Includes it in tracked events
- Sends a separate `gclid_captured` event when detected

### 5. Static Deployment

For static deployment (like GitHub Pages):
- GTM scripts are included in each page
- NoScript fallback is provided for users with JavaScript disabled
- All tracking works client-side after page load

### 6. Development vs Production

- **Development**: GTM is loaded but may show warnings if using placeholder ID
- **Production**: Replace placeholder ID with real GTM container ID before deployment

### 7. Privacy & GDPR Compliance

The integration:
- Only loads GTM after user interaction (not immediately)
- Respects user privacy preferences
- Can be extended with consent management

### 8. Testing

To test GTM integration:
1. Replace placeholder GTM ID with your test container ID
2. Build and serve the site: `npm run build && npx serve@latest out`
3. Open browser dev tools → Network tab
4. Verify GTM scripts load
5. Check GTM debug mode in browser extension

## File Structure

```
components/
  ├── google-tag-manager.tsx    # GTM component
scripts/
  ├── build-with-gtm.js        # Custom build script
package.json                   # Contains GTM ID configuration
```

## Environment Variables

For additional configuration, you can set:
- `NEXT_PUBLIC_GTM_ID`: Overrides the package.json GTM ID