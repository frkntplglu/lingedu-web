# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Server
- `npm run dev` - Start custom development server (runs database initialization, graceful shutdown, custom logging)
- `npm run dev:next` - Start standard Next.js development server (for quick development without custom server)
- `npm run build` - Build for production
- `npm run start` - Start production server with custom server
- `npm run start:next` - Start production server with Next.js standalone

### Database
- `npm run db:init` - Initialize database connection only
- `npm run db:sync` - Sync database models (creates tables, non-destructive)
- `npm run db:seed` - Seed database with initial data
- `npm run db:reset` - Force drop all tables and reseed (WARNING: destructive)

### Code Quality
- `npm run lint` - Run ESLint

## Architecture Overview

### Technology Stack
- **Next.js 16** with Pages Router (not App Router)
- **React 19** with TypeScript 5
- **PostgreSQL** with **Sequelize 6** ORM
- **Tailwind CSS 4** with PostCSS
- **Formik** + **Yup** for form validation

### Project Structure
```
src/
├── pages/              # Next.js pages (Pages Router)
│   ├── api/           # RESTful API routes (CRUD operations)
│   ├── admin/         # Admin dashboard pages
│   ├── products/      # Course product pages
│   └── [public pages]
├── components/        # React components (organized by feature)
├── models/           # Sequelize database models
├── services/         # Business logic layer (data access abstraction)
├── lib/              # Utilities (logger, init, helpers)
└── styles/           # Global styles
```

### Key Architectural Patterns

#### 1. Dual Server Modes
The application runs in two modes:
- **Custom Server Mode** (`npm run dev`): Uses `src/server.ts` with database initialization, graceful shutdown, custom logging
- **Next.js Mode** (`npm run dev:next`): Standard Next.js dev server

#### 2. Service Layer Pattern
- **Models** (`src/models/`): Sequelize database models with associations
- **Services** (`src/services/`): Abstract data operations (currently using mock data for some services)
- **API Routes** (`src/pages/api/`): Handle HTTP requests, delegate to services

Example: `courseService.ts` provides `get()`, `getBySlug()`, etc., hiding data source details

#### 3. Database Initialization
- Database connection managed in `src/lib/init/database.ts`
- Supports sync, force, and seed operations
- Models are auto-initialized and associations set up in `src/models/index.ts`
- All database operations use Sequelize ORM with underscored column names

#### 4. Custom Logging System
- Built-in logger in `src/lib/logger.ts`
- Features: colored output, timestamps, context support, timing, log levels
- Usage: `logger.child('ContextName')` for contextual logging
- Configured via `LOG_LEVEL` environment variable

#### 5. Bootstrap/Shutdown System
- `src/lib/init/index.ts`: Centralized initialization (database, future services)
- Graceful shutdown handlers in `src/server.ts` for SIGTERM/SIGINT
- Proper error handling and cleanup

### Model Associations
- **Course** hasMany **CourseVariant** (CASCADE delete)
- Models defined with TypeScript types using Sequelize's `InferAttributes`
- All models use UUID primary keys and automatic timestamps

### API Route Structure
RESTful CRUD endpoints in `src/pages/api/`:
- `/api/contact/*` - Contact form submissions
- `/api/testimonials/*` - Testimonials management
- `/api/faqs/*` - FAQ entries
- `/api/courses/*` - Course management
- `/api/FAQ-categories/*` - FAQ categories

### Environment Configuration
Required environment variables (with defaults):
- `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` - PostgreSQL connection
- `SERVER_HOST`, `SERVER_PORT` - Server configuration
- `LOG_LEVEL` - Logging level (debug, info, warn, error)
- `NODE_ENV` - Environment (development/production)
- `TZ` - Set to Europe/Istanbul in server.ts

### Current Data State
- **FAQs and Testimonials**: Currently using mock data in services
- **Courses**: Have both Sequelize models and mock service
- **Database seeding**: Populates courses, course variants, testimonials, FAQs on first run

### Turkish Language Platform
This is a Turkish language education platform (IELTS, English courses). All content, UI text, and database seed data is in Turkish.

### Adding New Features
1. Create Sequelize model in `src/models/`
2. Create service in `src/services/` (use existing patterns)
3. Create API routes in `src/pages/api/`
4. Create components in `src/components/` as needed
5. Run `npm run db:sync` to update database schema


 Key sections:
  1. Development Commands - All npm scripts for running, building, database operations, and linting
  2. Technology Stack - Next.js 16, React 19, PostgreSQL with Sequelize, Tailwind CSS 4
  3. Project Structure - High-level directory organization
  4. Key Architectural Patterns:
    - Dual server modes (custom vs standard Next.js)
    - Service layer pattern for data access
    - Database initialization system
    - Custom logging utility with context support
    - Bootstrap/shutdown system for graceful startup/teardown
  5. Model Associations - Course → CourseVariant relationship
  6. API Route Structure - RESTful CRUD endpoints
  7. Environment Configuration - Required environment variables
  8. Current Data State - Notes about mock data vs database models
  9. Turkish Language Platform - Context about the platform's language and purpose
  10. Adding New Features - Quick guide for extending the codebase

  The file focuses on architectural decisions and patterns that require reading multiple files to understand, rather than obvious instructions or generic development practices.