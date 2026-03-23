# Firebase Deployment Guide for DorkPlus Website

This guide will help you deploy your DorkPlus website to Firebase Hosting.

## Prerequisites

1. Node.js installed (v18 or higher)
2. Firebase CLI installed globally
3. A Firebase project created

## Installation Steps

### 1. Install Firebase CLI (if not already installed)

\`\`\`bash
npm install -g firebase-tools
\`\`\`

### 2. Login to Firebase

\`\`\`bash
firebase login
\`\`\`

### 3. Initialize Firebase (if not already done)

\`\`\`bash
firebase init hosting
\`\`\`

When prompted:
- Select "Use an existing project" or "Create a new project"
- Choose your Firebase project
- Set public directory to: `out`
- Configure as single-page app: `Yes`
- Set up automatic builds: `No`

### 4. Build Your Website

\`\`\`bash
npm install
npm run build
\`\`\`

This will create an optimized static export in the `out` directory.

### 5. Deploy to Firebase

\`\`\`bash
firebase deploy --only hosting
\`\`\`

## Quick Deploy Script

You can also use this one-liner to build and deploy:

\`\`\`bash
npm run build && firebase deploy --only hosting
\`\`\`

## Features Configured

✅ Static export optimized for Firebase
✅ Telegram notifications (client-side, no server needed)
✅ SEO optimized with meta tags
✅ Fast loading with optimized caching
✅ Security headers configured
✅ Clean URLs enabled
✅ Image optimization

## Telegram Notifications

The visitor tracking system sends notifications directly from the client to Telegram API, which works perfectly with Firebase static hosting. No server-side functions needed!

## Performance Optimizations

- Static HTML generation
- Aggressive caching for assets (1 year)
- Optimized images
- Minified CSS and JavaScript
- Security headers included

## Troubleshooting

### Build fails
- Make sure all dependencies are installed: `npm install`
- Clear cache: `rm -rf .next out`
- Rebuild: `npm run build`

### Deployment fails
- Check Firebase CLI is logged in: `firebase login`
- Verify project is selected: `firebase use --add`
- Check firebase.json configuration

### Telegram notifications not working
- Verify bot token is correct in `components/visitor-tracker.tsx`
- Check chat ID is correct
- Ensure bot has permission to send messages to the chat

## Custom Domain

To add a custom domain:

1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration steps
4. Wait for SSL certificate provisioning (can take up to 24 hours)

## Support

For issues or questions, check the Firebase documentation:
https://firebase.google.com/docs/hosting
\`\`\`

```json file="" isHidden
