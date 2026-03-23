# DorkPlus - Advanced Penetration Testing Tool

A professional cybersecurity platform for penetration testing and security research.

## Features

- 10+ Advanced Modules for comprehensive security testing
- Cloud Storage with built-in encryption
- Proxy Support (HTTP, SOCKS4, SOCKS5)
- Real-time Statistics Dashboard
- Discord Notifications
- Multi-machine Control Panel
- Beginner-friendly Interface

## Quick Start

### Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build

\`\`\`bash
# Build for production
npm run build

# Start production server
npm start
\`\`\`

## Firebase Deployment

This website is optimized for Firebase Hosting with static export.

### Prerequisites

1. Install Firebase CLI:
\`\`\`bash
npm install -g firebase-tools
\`\`\`

2. Login to Firebase:
\`\`\`bash
firebase login
\`\`\`

### Deploy to Firebase

#### Option 1: Quick Deploy (Recommended)
\`\`\`bash
npm run firebase:deploy
\`\`\`

#### Option 2: Preview Deploy (Test before going live)
\`\`\`bash
npm run firebase:preview
\`\`\`

#### Option 3: Manual Deploy
\`\`\`bash
npm run build
firebase deploy --only hosting
\`\`\`

### First Time Setup

If this is your first deployment:

1. Initialize Firebase in your project:
\`\`\`bash
firebase init hosting
\`\`\`

2. Select your Firebase project or create a new one

3. Use these settings:
   - Public directory: `out`
   - Single-page app: `Yes`
   - Automatic builds: `No`

4. Deploy:
\`\`\`bash
npm run firebase:deploy
\`\`\`

## Features Included

### SEO Optimized
- Comprehensive meta tags
- Open Graph tags for social sharing
- Structured data (JSON-LD)
- Optimized for search engines

### Performance
- Static export for fast loading
- Optimized images
- Aggressive caching
- Minified assets

### Visitor Tracking
- Telegram notifications for new visitors
- Real-time visitor analytics
- No server required (client-side tracking)

### Mobile Responsive
- Fully responsive design
- Mobile-first approach
- Touch-friendly interface

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Hosting:** Firebase Hosting (optimized)
- **Notifications:** Telegram Bot API

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout with SEO
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── header.tsx        # Navigation header
│   ├── hero-section.tsx  # Hero section
│   ├── pricing-section.tsx # Pricing cards
│   └── ...               # Other components
├── public/               # Static assets
├── firebase.json         # Firebase configuration
└── next.config.mjs       # Next.js configuration
\`\`\`

## Configuration

### Telegram Notifications

To update Telegram bot settings, edit `components/visitor-tracker.tsx`:

\`\`\`typescript
const TELEGRAM_BOT_TOKEN = "your-bot-token"
const TELEGRAM_CHAT_ID = "your-chat-id"
\`\`\`

### SEO Settings

Update SEO metadata in `app/layout.tsx` and `app/page.tsx`.

## Deployment Checklist

- [ ] Update Telegram bot token and chat ID
- [ ] Review and update SEO metadata
- [ ] Test all links and buttons
- [ ] Verify mobile responsiveness
- [ ] Run `npm run build` successfully
- [ ] Deploy to Firebase
- [ ] Test live website
- [ ] Set up custom domain (optional)

## Support

For detailed Firebase deployment instructions, see [FIREBASE_DEPLOYMENT.md](./FIREBASE_DEPLOYMENT.md)

## License

All rights reserved.
