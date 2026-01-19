# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website built with Next.js 16 (App Router) using React 19, Tailwind CSS v4, and modern web development practices.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000 with hot reload
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks

## Architecture

### Next.js App Router Structure

This project uses the Next.js App Router (not Pages Router):

- `app/` - Main application directory containing routes and layouts
  - `layout.js` - Root layout with font configuration and metadata
  - `globals.css` - Global styles with Tailwind CSS v4 theme tokens
  - `favicon.ico` - Site favicon
  - `(home)/` - Route group for the home page (parentheses prevent it from affecting the URL)
    - `page.js` - Home page route
    - `_components/` - Components specific to the home page

### Component Organization

Components are stored in `app/(home)/_components/` directory (underscore prefix prevents Next.js from treating it as a route):

**Section Components** (`sections/`):
- NavBar.js - Fixed navigation with logo and links (implemented with mix-blend-difference)
- Hero.js - Hero section with large title, description, and inline stats (implemented)
- About.js - Bento grid section with 6 cards (implemented)
- Projects.js - Projects section with 2-column grid of project cards (implemented)
- Education.js - Education section with degree card and resume download CTA (implemented)
- Footer.js - Footer with copyright and status indicator (implemented)
- Contact.js - Contact section with heading, subtitle, and contact link buttons (implemented)

**UI Components** (`ui/`):
- SectionHeader.js - Reusable section header with "// Title" and decorative line (implemented)
- AboutMetricCard.js - Centered metric cards for About section (implemented)
- Skill.js - Reusable skill pill component for tech stack display (implemented)
- ExperienceCard.js - Timeline-style experience entry component with hover effect (implemented)
- ProjectCard.js - Project card with code preview, tags, metrics, and external link (implemented)

The route group `(home)` allows organizing components without affecting the URL structure. The homepage remains at `/` while components are logically grouped.

### Styling System

This project uses Tailwind CSS v4 with custom theme tokens defined in `app/globals.css` using the `@theme` directive:

**Theme Colors:**
- `--color-bg` (#0c0c0c) - Main background
- `--color-bg-card` (#141414) - Card backgrounds
- `--color-bg-card-hover` (#1a1a1a) - Card hover state
- `--color-text` (#f5f5f5) - Primary text
- `--color-text-secondary` (#888888) - Secondary text
- `--color-text-muted` (#555555) - Muted text
- `--color-accent` (#00ff88) - Accent/brand color (bright green)
- `--color-accent-dim` - Dimmed accent for subtle effects
- `--color-accent-glow` - Accent glow effect
- `--color-border` - Border color with transparency

Use these theme colors via Tailwind classes: `bg-bg`, `text-accent`, `bg-bg-card`, etc.

### Font System

Two Google Fonts are configured in `app/layout.js`:

1. **Syne** (primary sans-serif) - Available as `font-sans` class
   - Weights: 400, 500, 600, 700, 800
   - CSS variable: `--font-sans`

2. **Space Mono** (monospace) - Available as `font-mono` class
   - Weights: 400, 700
   - CSS variable: `--font-mono`

The root body uses `font-sans` by default.

### Path Aliases

The `jsconfig.json` configures the `@/*` alias to resolve to the project root, allowing imports like:
```javascript
import NavBar from '@/app/(home)/_components/NavBar';
import Hero from '@/app/(home)/_components/Hero';
```

## Project Context

This is a portfolio website project from Frontend Mentor challenges. The design goal is a bento grid layout. The current implementation includes:
- ✅ Layout structure with NavBar, Hero, and Footer (refined with consistent section headers, proper container widths, smooth scroll)
- ✅ Hero section with enhanced typography, inline stats, and optimized spacing
- ✅ About section (bento grid) with 6 cards: large about card, 2 metric cards, skills card, experience card with dates, and CTA card
- ✅ Projects section with 3 project cards: Devlinks, Note Taking App, What to Cook
- ✅ Education section with degree info card and resume download CTA
- ✅ Contact section with large heading, subtitle, and 4 contact link buttons (Email, Phone, GitHub, LinkedIn)

## Design Specification

This portfolio uses a **bento grid layout** with a dark theme and green accent. The goal is a modern, memorable design that stands out from typical linear portfolios while maintaining fast performance (90+ Lighthouse score).

### Design Philosophy

- Clean, minimal, but with personality
- Bento grid layout for visual interest
- Subtle animations that enhance UX without hurting performance
- Custom cursor and micro-interactions on desktop
- Fully responsive—graceful degradation on mobile

### Visual Style

**Color Palette:**
- Background: #0c0c0c (near black)
- Card surfaces: #141414
- Card hover: #1a1a1a
- Primary text: #f5f5f5
- Secondary text: #888888
- Muted text: #555555
- Accent: #00ff88 (bright green)
- Accent dim: rgba(0, 255, 136, 0.1)
- Accent glow: rgba(0, 255, 136, 0.3)
- Border: rgba(255, 255, 255, 0.08)

**Typography:**
- Headings: Syne (800 weight for hero, 600-700 for section titles)
- Body: Syne (400-500 weight)
- Monospace elements: Space Mono (stats, labels, tags, code snippets)
- Hero title: clamp(2.5rem, 10vw, 7rem)

### Page Sections & Layout

#### 1. Header (Fixed)
- Logo "rovan.dev" on left with pulsing green dot before it
- Nav links on right: About, Work, Contact
- Use mix-blend-mode: difference for visibility over content
- Hide nav links on mobile

#### 2. Hero Section
- Label: "Frontend Developer — Cebu, Philippines" (mono font, green, uppercase, letter-spacing)
- Title: Two lines, large bold text
  - Line 1: "Building fast,"
  - Line 2: "pixel-perfect interfaces" (with "pixel-perfect" in green accent)
- Description: "Frontend Developer with 2+ years delivering responsive web applications across international remote teams. I optimize for performance and ship on time, every time."
- Stats row with three metrics:
  - 90+ Lighthouse Score
  - 35+ Pages Delivered  
  - 100% On-Time Rate
- Stats should have count-up animation on scroll into view

#### 3. About Section (Bento Grid)
The bento grid should have cards of varying sizes:

**Card 1 - Large (spans 2 cols, 2 rows): About Card**
- Circular avatar placeholder with "JR" initials, green border
- Headline: "I turn designs into fast, accessible, production-ready code."
- Description about experience with global clients, performance focus

**Card 2 - Small: Lighthouse Metric**
- Large "90+" in mono font, green
- Label: "Lighthouse Score"
- Sublabel: "Up from 40-50"

**Card 3 - Small: Pages Metric**
- Large "35+" in mono font, green
- Label: "Web Pages"
- Sublabel: "Delivered"

**Card 4 - Wide (spans 2 cols): Skills/Tech Stack**
- Section title: "Tech Stack"
- Pill tags for skills
- Primary skills (green border/bg): React, Next.js, TypeScript
- Secondary skills: JavaScript, Tailwind CSS, HTML/CSS, PostgreSQL, Prisma, Supabase, PHP, Laravel, Git

**Card 5 - Tall (spans 2 rows): Experience**
- Section title: "Experience"
- Timeline-style list with left border that turns green on hover
- Three positions:
  1. Frontend Developer @ Mutant Media FZC (Dubai, Remote) - Recent
  2. Frontend Developer @ Chat Nexus (Los Angeles, Remote) - Previous
  3. Frontend Developer @ Teknosprint Solutions (Cebu, Philippines) - Earlier

**Card 6 - Small: CTA Card**
- Gradient background using accent-dim
- "Let's work together" heading
- Green "Get in touch" button with arrow icon

#### 4. Projects Section
Two-column grid of project cards:

**Project Card Structure:**
- Image area with:
  - Project number (01, 02, etc.) in top-left
  - Code preview snippet (fake code lines with syntax highlighting)
  - External link button (appears on hover, top-right)
- Content area:
  - Tech tags (pills)
  - Project title
  - Description
  - Metrics row (3 small stats)

**Projects to include:**

1. **Devlinks** - Full-stack link sharing SaaS
   - Tags: Next.js, React, Prisma, PostgreSQL
   - Live: https://devlinks-pied.vercel.app
   
2. **Quickthought** - Microblogging platform
   - Tags: React, Next.js, Tailwind, Prisma
   - Live: https://quickthought.vercel.app
   
3. **What to Cook** - Recipe recommendation app
   - Tags: React, Next.js, API Integration
   - Live: https://whattocook.vercel.app

4. **Job Aggregator** (In Progress/Validating)
   - Show as "Currently Validating" badge
   - Mention customer discovery work

#### 5. Education Section
Two-column grid:
- Left card: Degree info
  - BS Computer Engineering
  - University of Cebu, 2018-2023
  - Badges: Dean's Lister, ICpEP Region 7 Programming Competition
- Right card: Resume download CTA

#### 6. Contact Section
- Large heading: "Let's build something great" ("great" in green)
- Subtitle about being open to opportunities
- Contact links row: Email, Phone, GitHub, LinkedIn

#### 7. Footer
- Left: "© 2025 Rovan Cabucos. Crafted with precision."
- Right: Status indicator with pulsing green dot + "Available for work"

### Animations & Effects

**Phase 1 (Core - Build First):**
- Smooth scroll for anchor links
- Hover effects on cards (lift + border color change)
- Hover effects on buttons and links
- Basic fade-in on scroll for sections

**Phase 2 (Polish - Add Later):**
- Page loader with progress bar
- Custom cursor (ring + dot) on desktop only
- Cursor grows on hovering interactive elements
- Scanline effect (subtle horizontal line that moves down screen)
- Noise texture overlay (very subtle, ~2% opacity)
- Mouse-tracking gradient glow on bento cards
- Count-up animation for stats when scrolled into view
- Text reveal animation on hero (words sliding up)
- Staggered reveal for bento cards

### Responsive Behavior

**Desktop (1024px+):**
- Full bento grid (4 columns)
- Custom cursor visible
- All hover effects active

**Tablet (768px - 1024px):**
- Bento grid becomes 2 columns
- Large/tall cards span full width or reduce to single spans
- Projects grid becomes single column

**Mobile (< 768px):**
- Single column layout
- Hide custom cursor (use default)
- Nav links hidden (could add hamburger menu later)
- Stats wrap into 2x2 or stack
- Simplified hover states (for touch)

### Content Details

**Personal Info:**
- Name: Rovan Cabucos
- Title: Frontend Developer
- Location: Cebu, Philippines
- Email: johnrovanvcabucos@gmail.com
- Phone: +639152575153
- GitHub: https://github.com/j0hnr0
- LinkedIn: https://linkedin.com/in/rovan-cabucos

**Key Stats to Highlight:**
- Improved Lighthouse scores from 40-50 to 90+
- 35+ web pages delivered
- 100% on-time delivery rate
- 2+ years experience
- Worked with international remote teams (Dubai, LA, Philippines)

### Implementation Priority

Build in this order:
1. Layout structure (header, sections, footer)
2. Hero section with static content
3. Bento grid layout with placeholder cards
4. Fill in bento card content
5. Projects grid and cards
6. Education and Contact sections
7. Responsive styling
8. Basic hover effects
9. Scroll animations (fade-in)
10. Advanced effects (cursor, scanline, etc.)

## Design Reference

The file `design-reference.html` in the project root contains the complete design reference. This is a static HTML/CSS version of the target design. When building components, match the styling, spacing, and effects from this file as closely as possible. Translate the vanilla CSS to Tailwind classes.
