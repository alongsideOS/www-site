#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Read package.json to get GTM ID
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const gtmId = packageJson.gtmId || 'GTM-XXXXXXXXX'

console.log(`Building with GTM ID: ${gtmId}`)

// Set environment variable for the build
process.env.NEXT_PUBLIC_GTM_ID = gtmId

// Run the Next.js build
try {
  execSync('next build', { 
    stdio: 'inherit', 
    env: { 
      ...process.env,
      NEXT_PUBLIC_GTM_ID: gtmId 
    } 
  })
  console.log('Build completed successfully')
} catch (error) {
  console.error('Build failed:', error.message)
  process.exit(1)
}