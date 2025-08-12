# Overview

This is a personal portfolio website for Abele Ifeanyi Kelvin, a cybersecurity expert, designer, and trader. The application showcases professional experience, skills, projects, blog posts, and testimonials through a modern, glassmorphism-designed interface. Built as a full-stack web application, it features a React frontend with Express.js backend, PostgreSQL database integration, and comprehensive content management capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development
- **Styling**: Tailwind CSS with custom CSS variables for dark/light theme support
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design
- **State Management**: React Query (TanStack Query) for server state and caching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Theme System**: Custom theme provider supporting dark/light modes with CSS variable switching

## Backend Architecture
- **Framework**: Express.js with TypeScript in ESM module format
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Storage**: In-memory storage implementation with interface for easy database migration
- **API Design**: RESTful endpoints for blog posts, projects, skills, experience, testimonials, and contact messages
- **Development**: Vite integration for hot module replacement and development experience

## Database Schema
- **Blog Posts**: Articles with metadata, content, categories, and publishing dates
- **Projects**: Portfolio projects with descriptions, technologies, and links
- **Contact Messages**: User inquiries and contact form submissions
- **Skills**: Technical skills with proficiency percentages and categories
- **Experience**: Professional timeline with positions and descriptions
- **Testimonials**: Client and colleague recommendations

## Styling and Design System
- **Design Philosophy**: Glassmorphism with gradient backgrounds and semi-transparent panels
- **Color Scheme**: Custom CSS variables for cybersecurity-themed blue/purple gradients
- **Typography**: Inter font family for modern, clean text rendering
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox layouts
- **Animations**: CSS transitions and reveal animations on scroll using Intersection Observer

# External Dependencies

## Database
- **Neon Database**: PostgreSQL serverless database with connection pooling
- **Migration System**: Drizzle Kit for schema migrations and database management

## UI and Styling
- **Radix UI**: Headless UI primitives for accessible component foundation
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Font Awesome**: Icon library for visual elements and branding
- **Google Fonts**: Inter font family for typography

## Development Tools
- **Vite**: Build tool and development server with plugin ecosystem
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Fast bundling for production builds
- **Replit Integration**: Development environment plugins and banner support

## Email and Communication
- **Nodemailer**: Email sending capability for contact form submissions
- **Validation**: Zod schemas for runtime type checking and form validation