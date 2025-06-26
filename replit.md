# Aurorix - AI Ecosystem with Aurorix.Retail MVP

## Overview

Aurorix is an AI ecosystem brand building modular AI solutions. Aurorix.Retail is the flagship MVP product focused on retail demand forecasting and procurement intelligence. The application is currently in private MVP development with early partner testing, featuring a pre-release waitlist landing page built with full-stack TypeScript architecture.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: tsx for development server, esbuild for production builds
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon serverless PostgreSQL (configured but can use any Postgres)
- **Session Storage**: connect-pg-simple for PostgreSQL session storage

### Project Structure
- **Monorepo approach** with shared schemas between client and server
- **Client**: React application in `/client` directory
- **Server**: Express API in `/server` directory  
- **Shared**: Common types and schemas in `/shared` directory

## Key Components

### Database Schema
Two main tables defined in `shared/schema.ts`:
- **users**: Basic user authentication with username/password
- **contact_submissions**: Lead capture form with company details, role, store count, and messages

### API Endpoints
- `POST /api/contact`: Submit contact form with validation
- `GET /api/contact`: Retrieve all contact submissions (admin functionality)

### Frontend Pages
- **Home Page**: Marketing landing page with multiple sections (hero, benefits, how-it-works, testimonials, contact)
- **404 Page**: Error handling for non-existent routes

### UI Components
Comprehensive component library built on Radix UI including:
- Form controls (Input, Textarea, Select, Checkbox, etc.)
- Layout components (Card, Dialog, Sheet, etc.)
- Feedback components (Toast, Alert, etc.)
- Navigation components (Navbar with mobile responsive design)

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on homepage
   - Form validation using Zod schema
   - Data sent to `/api/contact` endpoint
   - Server validates and stores in database
   - Success/error feedback via toast notifications

2. **Data Storage**:
   - Development: In-memory storage via MemStorage class
   - Production: PostgreSQL via Drizzle ORM
   - Database migrations managed through `drizzle-kit`

3. **State Management**:
   - Server state managed by TanStack Query
   - Form state handled by React Hook Form
   - UI state managed by React hooks

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling and validation
- **zod**: Runtime type validation
- **framer-motion**: Animation library

### UI & Styling
- **@radix-ui/***: Headless UI components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **vite**: Frontend build tool and dev server

## Deployment Strategy

### Development
- Replit-optimized with `.replit` configuration
- Hot reload via Vite development server
- PostgreSQL module pre-configured
- Port 5000 exposed for development

### Production Build
- Frontend: Vite builds static assets to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Single-command deployment with `npm run build && npm run start`

### Database Setup
- Drizzle migrations stored in `/migrations` directory
- Schema push via `npm run db:push`
- Environment variable `DATABASE_URL` required for production

### Hosting Requirements
- Node.js 20+ runtime
- PostgreSQL database
- Environment variables for database connection
- Serve static files from `dist/public`

## Recent Changes

```
Changelog:
- June 25, 2025. Added download page and Git preparation:
  * Created /download page with detailed setup instructions
  * Added GitHub integration guide for easy cloning
  * Prepared project structure for clean repository export
  * Updated .gitignore to exclude generated files
- June 25, 2025. Added simple email collection system:
  * File-based email logging (JSON + readable text format)
  * Console logging for real-time monitoring
  * No external dependencies - works everywhere
  * Updated README with deployment instructions
- June 25, 2025. Restructured landing page with new architecture:
  * Added About section introducing Aurorix team and mission
  * Created Products section with dedicated Aurorix.Retail and Aurorix.Health showcase
  * Reorganized navigation: About → Products → How It Works → Waitlist
  * Updated hero messaging to reflect AI ecosystem positioning
  * Modified stats to emphasize entrepreneurial team rather than years of experience
  * Maintained Core Features and AI Assistant as product-specific sections
- June 24, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```