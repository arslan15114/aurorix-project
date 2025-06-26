# Aurorix Landing Page

AI ecosystem landing page for Aurorix.Retail MVP with email collection.

## Local Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

That's it! No additional configuration needed.

## Email Collection System

When someone fills out the waitlist form:
- **Console logging**: See submissions instantly in terminal
- **JSON file**: All data saved to `email-submissions.json`
- **Text file**: Human-readable format in `email-submissions.txt`
- **In-memory storage**: Available via API endpoints

## Viewing Collected Emails

- **Live monitoring**: Watch the console while running `npm run dev`
- **JSON format**: Check `email-submissions.json` file
- **Readable format**: Open `email-submissions.txt` file
- **API endpoint**: GET `/api/contact` returns all submissions

## Features

- Responsive landing page for Aurorix AI ecosystem
- MVP waitlist form with email collection
- Automatic logging to files and console
- Professional design optimized for B2B audience
- Mobile-responsive with modern animations
- No external dependencies for email collection

## Tech Stack

- Frontend: React + TypeScript + Tailwind CSS
- Backend: Node.js + Express
- Storage: File-based + in-memory
- Forms: React Hook Form + Zod validation
- Animations: Framer Motion

## Deployment

The project works on any Node.js hosting:
- Replit (one-click deploy)
- Vercel, Netlify, Railway
- VPS with Node.js

All email submissions will be saved to files and visible in server logs.