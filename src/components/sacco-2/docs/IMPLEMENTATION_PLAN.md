# Telepost Sacco Template - Product Requirements Document

## Executive Summary

This document outlines the complete design and implementation plan for the **Telepost Sacco** template, a premium financial services landing page template for SwiftBuilder. The template will be inspired by Qona Sacco's structure but with significantly enhanced visual design, modern aesthetics, and complete adherence to SwiftBuilder's templating rules.

**Template ID**: `telepost-sacco`  
**Template Type**: **Multi-page website template** (not single landing page)  
**Category**: Financial Services / SACCO  
**Target Audience**: SACCO members, potential members, financial service seekers, corporate clients  
**Design Philosophy**: Trust, professionalism, accessibility, **modern enterprise SaaS aesthetics**  
**Quality Standard**: **Webflow-level enterprise grade** (reference: modern SaaS platforms)  
**Design Aesthetic**: Dark-first with sophisticated gradients, neon accents, floating UI elements, glassmorphism  
**Key Features**: Multi-page, dual theme (dark-first + light), rich animations, premium interactions, comprehensive component library, no placeholder images

> [!IMPORTANT]
> This is a **MULTI-PAGE TEMPLATE** designed for **enterprise/corporate use** with a **sophisticated dark-first aesthetic** inspired by premium SaaS platforms. The design should feature:
> - Deep gradient backgrounds (dark teal/green to black)
> - Neon accent colors (lime green) used strategically
> - Floating UI mockups and product screenshots
> - Glassmorphism effects on cards and panels
> - Clean, professional typography (NOT outlined/stroke)
> - Premium, polished interactions throughout

---

## 1. Brand Identity - Telepost Sacco

### 1.1 Logo & Brand Assets

**Primary Logo**: ![Telepost Logo](file:///Users/benardomondi/.gemini/antigravity/brain/ce0eb6e6-48d7-431e-ab9d-065d5e2ecfab/telepost_logo.png)

**Logo Analysis**:
- Circular badge design with red, yellow, and green color rings
- Central "T" monogram in green
- "TELEPOST" text in red at top
- "SACCO SOCIETY LTD" text in red at bottom
- Banner with tagline "Together We Grow"
- Professional, institutional feel with vibrant colors

**Brand Colors Extracted from Logo**:
- **Primary Red**: `#DC2626` (from TELEPOST text)
- **Primary Green**: `#16A34A` (from T monogram and ring)
- **Primary Yellow**: `#FBBF24` (from middle ring)
- **Supporting Colors**: To be defined in design system

### 1.2 Brand Personality

- **Trustworthy**: Established financial institution
- **Community-Focused**: "Together We Grow" ethos
- **Progressive**: Modern digital services (fintech-forward)
- **Accessible**: Serving diverse member needs
- **Reliable**: Stable financial partner
- **Sophisticated**: Enterprise-grade, premium experience

### 1.3 Design Reference

![Enterprise Reference](/Users/benardomondi/.gemini/antigravity/brain/ce0eb6e6-48d7-431e-ab9d-065d5e2ecfab/uploaded_image_1768452015592.png)

**Key Design Elements from Reference**:
- Dark gradient background (deep teal transitioning to near-black)
- Neon green (`#86EFAC` / lime-400) as primary accent - used sparingly
- Floating UI mockups showing product interface
- Clean sans-serif typography (NOT outlined)
- Glassmorphic cards with subtle borders
- Professional, modern, enterprise SaaS aesthetic
- Dark theme is primary, light theme is alternative

---

## 2. Design System Specification

### 2.1 Color Palette (Enterprise SaaS Aesthetic)

> [!NOTE]
> **Dark-first design**: Primary experience is dark theme. Color palette optimized for dark backgrounds.

#### Background Gradients (Primary)
```css
/* Hero gradient - deep teal to black */
--gradient-hero: linear-gradient(135deg, #0F766E 0%, #134E4A 25%, #0A0A0A 100%);

/* Section gradient - subtle */
--gradient-section: linear-gradient(180deg, #0A0A0A 0%, #0F1419 50%, #0A0A0A 100%);

/* Card gradient - glassmorphic */
--gradient-glass: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
```

#### Neon Accent (Primary Interactive Color)
```css
--neon-green: #86EFAC;                /* Lime-400 - Primary CTAs, highlights */
--neon-green-bright: #A7F3D0;         /* Lime-300 - Hover glow */
--neon-green-dark: #4ADE80;           /* Green-400 - Active state */
--neon-green-glow: rgba(134, 239, 172, 0.5);  /* Glow effect */
```

**Usage**:
- Primary CTAs ("Get Started", "Apply Now")
- Interactive elements hover states
- Important badges
- Success states
- Chart highlights

#### Brand Colors (Secondary)
```css
/* From logo - used as secondary accents */
--brand-red: #DC2626;                 /* Logo red - warnings, notifications */
--brand-green: #16A34A;               /* Logo green - success (less bright than neon) */
--brand-yellow: #FBBF24;              /* Logo yellow - info badges */
```

#### Dark Theme Neutrals (Primary)
```css
--dark-bg-base: #0A0A0A;              /* Base background */
--dark-bg-elevated: #0F1419;          /* Cards, panels */
--dark-bg-hover: #1A1F25;             /* Hover states */
--dark-border: rgba(255,255,255,0.08); /* Subtle borders */
--dark-text-primary: #F9FAFB;         /* Headings, important text */
--dark-text-secondary: #D1D5DB;       /* Body text */
--dark-text-muted: #9CA3AF;           /* Secondary info */
```

#### Light Theme Neutrals (Alternative)
```css
--light-bg-base: #FFFFFF;             /* Base background */
--light-bg-elevated: #F9FAFB;         /* Cards, panels */
--light-bg-hover: #F3F4F6;            /* Hover states */
--light-border: #E5E7EB;              /* Borders */
--light-text-primary: #111827;        /* Headings */
--light-text-secondary: #4B5563;      /* Body text */
--light-text-muted: #6B7280;          /* Secondary info */
```

### 2.2 Typography (Enterprise SaaS)

**Font Strategy**: Clean, professional sans-serif - **NOT outlined/decorative**

> [!IMPORTANT]
> Use **clean, solid typography** like the reference. NO outlined/stroke effects. Professional, readable, modern.

#### Primary Font: **Inter** (All Text)
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold)
- **Usage**: Everything - headings, body, UI, navigation
- **Rationale**: Clean, modern, professional, excellent on dark backgrounds

**Why Inter Only**:
- Consistent, unified look
- Excellent legibility on dark backgrounds
- Professional enterprise aesthetic
- Weight variations provide hierarchy

#### Font Scale (Mobile-First)
```css
/* Mobile Base */
--text-xs: 0.75rem;      /* 12px - Fine print */
--text-sm: 0.875rem;     /* 14px - Small text */
--text-base: 1rem;       /* 16px - Body text */
--text-lg: 1.125rem;     /* 18px - Large body */
--text-xl: 1.25rem;      /* 20px - Small headings */
--text-2xl: 1.5rem;      /* 24px - H3 */
--text-3xl: 1.875rem;    /* 30px - H2 */
--text-4xl: 2.25rem;     /* 36px - H1 mobile */
--text-5xl: 3rem;        /* 48px - Hero mobile */

/* Desktop Scale (md: and up) */
--text-4xl-desktop: 3rem;      /* 48px - H1 */
--text-5xl-desktop: 3.75rem;   /* 60px - Hero */
--text-6xl-desktop: 4.5rem;    /* 72px - Large hero */
```

### 2.3 Spacing System

**8px Base Grid** (Tailwind default)
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

**Section Padding** (Mobile-First)
```css
/* Mobile */
padding-y: 3rem;      /* 48px top/bottom */
padding-x: 1rem;      /* 16px left/right */

/* Tablet (md:) */
padding-y: 4rem;      /* 64px */
padding-x: 2rem;      /* 32px */

/* Desktop (lg:) */
padding-y: 6rem;      /* 96px */
padding-x: 3rem;      /* 48px */
```

### 2.4 Border Radius

```css
--radius-sm: 0.375rem;    /* 6px - Small elements */
--radius-md: 0.5rem;      /* 8px - Cards, inputs */
--radius-lg: 0.75rem;     /* 12px - Large cards */
--radius-xl: 1rem;        /* 16px - Feature cards */
--radius-2xl: 1.5rem;     /* 24px - Hero sections */
--radius-full: 9999px;    /* Fully rounded - Pills, buttons */
```

### 2.5 Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

### 2.6 Animation & Transitions

**Timing Functions** (Custom Easing):
```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);     /* Smooth deceleration */
--ease-in-out-circ: cubic-bezier(0.85, 0, 0.15, 1); /* Smooth acceleration/deceleration */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);   /* Bouncy spring effect */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);        /* Standard ease */
```

**Duration Scale**:
```css
--duration-instant: 100ms;   /* Immediate feedback */
--duration-fast: 200ms;      /* Quick interactions */
--duration-base: 350ms;      /* Standard transitions */
--duration-slow: 500ms;      /* Deliberate animations */
--duration-slower: 700ms;    /* Entrance animations */
```

**Micro-interactions** (Webflow-grade):
- **Button hover**: Scale 1.02, shadow increase, subtle glow
- **Card hover**: Lift effect (translateY -8px), shadow expansion, border glow
- **Link hover**: Color transition + underline slide-in animation
- **Image hover**: Subtle zoom (scale 1.05) + brightness(1.1)
- **Icon hover**: Rotate or bounce animation
- **Input focus**: Border glow with smooth color transition
- **Scroll reveal**: Fade + slide up with stagger

### 2.7 Motion Design System

> [!IMPORTANT]
> Motion is **essential** to this template. All interactions should feel fluid, purposeful, and premium.

#### Page Load Animations
```tsx
// Navbar: Slide down + fade in
initial={{ y: -100, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.5, ease: "easeOut" }}

// Hero: Stagger children animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};
```

#### Scroll-Based Animations
```tsx
// Section reveal (fade + slide up)
<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>

// Parallax effect for images
<motion.div
  initial={{ y: 50 }}
  whileInView={{ y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
```

#### Card Interactions
```tsx
// Premium card hover
<motion.div
  whileHover={{ 
    y: -8, 
    scale: 1.02,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
  }}
  transition={{ duration: 0.3, ease: "easeOut" }}
>
```

#### Button Animations
```tsx
// Primary button with ripple effect
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  <motion.span
    initial={{ width: 0 }}
    whileHover={{ width: "100%" }}
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
  />
  {children}
</motion.button>
```

#### Number Counters (Stats)
```tsx
import { useCountUp } from 'react-countup';

// Animated counter on scroll into view
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  <CountUp end={50000} duration={2.5} separator="," suffix="+" />
</motion.div>
```

#### Loading States
```tsx
// Skeleton shimmer effect
<div className="relative overflow-hidden bg-neutral-200 rounded-lg">
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
    animate={{ x: ["-100%", "100%"] }}
    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
  />
</div>
```

#### Testimonial Carousel
```tsx
// Smooth auto-play with spring physics
<motion.div
  drag="x"
  dragConstraints={{ left: -width, right: 0 }}
  dragElastic={0.1}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
>
```

---

## 3. Multi-Page Template Architecture

> [!IMPORTANT]
> This is a **MULTI-PAGE TEMPLATE**, not a single landing page. It includes multiple pages with a complete navigation system.

### 3.1 Page Structure

```
Telepost Sacco Website
├── Home (Landing Page)
├── About Us
│   ├── Who We Are
│   ├── Our Team
│   └── Awards & Recognition
├── Products & Services
│   ├── Loans Overview
│   ├── Development Loan
│   ├── Emergency Loan
│   ├── School Fees Loan
│   ├── Biashara Plus
│   └── Savings Accounts
├── Member Portal (Login/Dashboard)
│   ├── Account Overview
│   ├── Loan Application
│   ├── Transaction History
│   └── Profile Settings
├── Resources
│   ├── Loan Calculator
│   ├── FAQs
│   ├── Downloads
│   └── Branch Locator
├── News & Updates
│   ├── News Listing
│   └── News Detail
├── Contact Us
└── Legal
    ├── Privacy Policy
    ├── Terms of Service
    └── Cookie Policy
```

### 3.2 Navigation System

**Primary Navigation** (Navbar):
```typescript
navigation: {
  main: [
    { label: "Home", href: "/" },
    { 
      label: "Products", 
      href: "/products",
      submenu: [
        { label: "Development Loan", href: "/products/development-loan" },
        { label: "Emergency Loan", href: "/products/emergency-loan" },
        { label: "School Fees Loan", href: "/products/school-fees" },
        { label: "Biashara Plus", href: "/products/biashara-plus" },
        { label: "Savings Accounts", href: "/products/savings" }
      ]
    },
    { 
      label: "About", 
      href: "/about",
      submenu: [
        { label: "Who We Are", href: "/about/who-we-are" },
        { label: "Our Team", href: "/about/team" },
        { label: "Awards", href: "/about/awards" }
      ]
    },
    { label: "Resources", href: "/resources" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" }
  ],
  utility: [
    { label: "Member Login", href: "/portal/login", variant: "ghost" },
    { label: "Join Us", href: "/join", variant: "primary" }
  ]
}
```

**Mega Menu** (for Products dropdown):
- Visual grid layout with icons
- Product descriptions on hover
- Featured product highlight

### 3.3 Page Templates

#### Homepage Template
- Hero section
- Trust bar
- Products grid (featured)
- Features/benefits
- Calculator widget
- Testimonials carousel
- News/updates (3 latest)
- Contact CTA
- Footer

#### Product Detail Template
- Product hero (image + overview)
- Key features grid
- Requirements section
- How to apply (step-by-step)
- Calculator (product-specific)
- Related products
- Testimonials (filtered)
- CTA section

#### About Page Template
- Page hero (banner + breadcrumbs)
- Story section
- Mission/Vision/Values
- Timeline (milestones)
- Team grid
- Awards showcase
- Join team CTA

#### News Listing Template
- Featured article (hero)
- Filter by category
- Grid layout (3 columns)
- Pagination
- Newsletter signup

#### News Detail Template
- Article hero image
- Author info + date
- Article content (rich text)
- Social share buttons
- Related articles
- Comment section (optional)

#### Contact Page Template
- Contact form (multi-column)
- Office locations (map + details)
- Quick links
- Social media
- Support hours

#### Member Portal Dashboard
- Account summary cards
- Quick actions
- Recent transactions table
- Loan status
- Notifications

### 3.4 Routing Structure

```typescript
// Next.js App Router structure
app/
├── page.tsx                          // Home
├── about/
│   ├── page.tsx                      // About overview
│   ├── team/page.tsx
│   └── awards/page.tsx
├── products/
│   ├── page.tsx                      // Products overview
│   ├── development-loan/page.tsx
│   ├── emergency-loan/page.tsx
│   ├── school-fees/page.tsx
│   ├── biashara-plus/page.tsx
│   └── savings/page.tsx
├── portal/
│   ├── login/page.tsx
│   └── dashboard/page.tsx
├── resources/
│   ├── page.tsx
│   ├── calculator/page.tsx
│   ├── faqs/page.tsx
│   └── branches/page.tsx
├── news/
│   ├── page.tsx                      // News listing
│   └── [slug]/page.tsx               // News detail
├── contact/page.tsx
└── legal/
    ├── privacy/page.tsx
    ├── terms/page.tsx
    └── cookies/page.tsx
```

### 3.5 Layout System

**Root Layout** (app/layout.tsx):
```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**Portal Layout** (app/portal/layout.tsx):
```tsx
// Different layout for member portal (sidebar navigation)
export default function PortalLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
```

---

## 4. Component Blocks Library

> [!IMPORTANT]
> The template includes a **comprehensive library of reusable component blocks** for building pages.

### 4.1 Form Components

#### Text Input
```tsx
interface TextInputProps {
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "number";
  required?: boolean;
  error?: string;
  helpText?: string;
  icon?: React.ReactNode;
}
```

**Styling**:
- Border: `border border-neutral-300 dark:border-neutral-700`
- Focus: `focus:border-red-500 focus:ring-2 focus:ring-red-500/20`
- Padding: `px-4 py-3` (comfortable touch targets)
- Radius: `rounded-lg` (8px - not overdone)
- **No heavy shadows** - subtle `shadow-sm` on focus only

#### Textarea
Same styling as input, auto-resize option

#### Select Dropdown
- Custom styled (not native)
- Smooth dropdown animation
- Search/filter for long lists
- Multi-select variant

#### Checkbox & Radio
- Custom styled with brand colors
- Smooth check animation
- Clear focus states
- Group variants (card-style selection)

#### Form Validation
- Real-time validation (debounced)
- Clear error messages
- Success states with checkmarks
- Loading states during submission

### 4.2 Table Components

#### Data Table
```typescript
interface TableProps {
  columns: Column[];
  data: any[];
  sortable?: boolean;
  filterable?: boolean;
  pagination?: boolean;
  rowsPerPage?: number;
  selectable?: boolean;
  expandable?: boolean;
}
```

**Design Guidelines**:
- **No heavy borders** - use subtle dividers (`border-neutral-200`)
- Zebra striping: Subtle `bg-neutral-50` on alternate rows
- Hover: `hover:bg-neutral-100` with smooth transition
- **Rounded corners only on container**, not individual cells
- Sticky header on scroll
- Responsive: Horizontal scroll on mobile OR card view

**Table Variants**:
1. **Basic Table**: Simple rows and columns
2. **Sortable Table**: Column headers clickable, sort indicators
3. **Filterable Table**: Search + column filters
4. **Expandable Rows**: Click to reveal details
5. **Selectable Rows**: Checkboxes for bulk actions
6. **Transaction Table**: Specific for member portal

### 4.3 List Components

#### Simple List
- Bullet or numbered
- Custom markers (checkmarks, arrows)
- Spacing: `space-y-3` (not cramped)

#### Icon List
```tsx
<ul className="space-y-4">
  {items.map(item => (
    <li className="flex items-start gap-3">
      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
      <span>{item}</span>
    </li>
  ))}
</ul>
```

#### Timeline List
- Vertical timeline for milestones
- Connected dots/circles
- Date + description
- Animations on scroll

#### Feature List (Cards)
- Grid of feature cards
- Icon + title + description
- Hover effects
- Optional CTA per item

### 4.4 Accordion Components

**Design Guidelines** (Avoid Generic AI Look):
- **No heavy shadows** - use subtle borders only
- **Rounded corners**: `rounded-lg` on container, not each item
- **Smooth expand/collapse**: Spring animation, not linear
- **Proper spacing**: `space-y-2` between items
- **Icon rotation**: Chevron rotates 180° smoothly

```tsx
interface AccordionProps {
  items: Array<{
    title: string;
    content: string | React.ReactNode;
    defaultOpen?: boolean;
  }>;
  allowMultiple?: boolean;
  variant?: "default" | "bordered" | "filled";
}
```

**Variants**:
1. **Default**: Minimal, border bottom only
2. **Bordered**: Full border, subtle background
3. **Filled**: Background color, no border

**Animation**:
```tsx
<motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: "auto", opacity: 1 }}
  exit={{ height: 0, opacity: 0 }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
>
```

### 4.5 Card Components

**Design Polish Guidelines**:
- **Don't overuse rounded corners**: `rounded-xl` (12px) max
- **Subtle shadows**: `shadow-sm` default, `shadow-lg` on hover (not `shadow-2xl`)
- **Border option**: `border border-neutral-200` for outlined variant
- **Hover state**: Lift `-translate-y-1`, not `-translate-y-4` (too much)
- **Padding**: `p-6` for comfort, consistent across variants

**Card Variants**:
1. **Product Card**: Image + title + description + CTA
2. **Stat Card**: Large number + label + trend indicator
3. **Team Member Card**: Photo + name + role + bio + social
4. **News Card**: Image + date + title + excerpt + read more
5. **Testimonial Card**: Quote + author + rating
6. **Feature Card**: Icon + title + description

### 4.6 Modal/Dialog

**Design**:
- Backdrop: `bg-black/50` (not too dark)
- Modal: `rounded-2xl` (larger radius for modals)
- Smooth scale + fade animation
- Close icon: Top-right, accessible
- Max width: `max-w-2xl` for readability

### 4.7 Alert/Notification

**Types**: Success, Error, Warning, Info

**Design**:
- No heavy backgrounds - use border-left accent
- Icons: Contextual (check, x, alert-triangle, info)
- Dismissible with smooth fade-out
- Toast variant: Slide-in from top-right

### 4.8 Pagination

```tsx
<div className="flex items-center gap-2">
  <button>Previous</button>
  <button className="active">1</button>
  <button>2</button>
  <button>3</button>
  <span>...</span>
  <button>10</button>
  <button>Next</button>
</div>
```

**Design**:
- Current page: Filled with brand color
- Hover: Subtle background
- Disabled: Muted color, not clickable
- Mobile: Show fewer page numbers

### 4.9 Breadcrumbs

```tsx
<nav aria-label="Breadcrumb">
  <ol className="flex items-center gap-2">
    <li><a href="/">Home</a></li>
    <ChevronRight className="w-4 h-4" />
    <li><a href="/products">Products</a></li>
    <ChevronRight className="w-4 h-4" />
    <li aria-current="page">Development Loan</li>
  </ol>
</nav>
```

### 4.10 Tabs

**Design**:
- Underline variant (modern, clean)
- Active indicator slides smoothly
- No heavy borders or backgrounds
- Keyboard accessible

### 4.11 Search

- Expandable search bar (navbar)
- Search results dropdown with categories
- Highlighting of matched terms
- Recent searches

### 4.12 Filter Sidebar

- Checkboxes for multi-select
- Range sliders for amounts
- Clear all filters button
- Active filter badges
- Responsive: Drawer on mobile

---

## 5. Design Polish Guidelines

> [!WARNING]
> **Avoid generic AI design patterns!** Pay attention to these refinements.

### 5.1 Shadows - Use Intentionally

**DON'T**:
- ❌ Heavy shadows everywhere (`shadow-2xl` on every card)
- ❌ Multiple shadow layers randomly applied
- ❌ Dark shadows in dark mode (too heavy)

**DO**:
- ✅ Subtle shadows by default (`shadow-sm`)
- ✅ Increase shadow on interaction (`hover:shadow-lg`)
- ✅ Use lighter shadows in dark mode (`dark:shadow-black/50`)
- ✅ Reserve heavy shadows for elevated elements (modals, dropdowns)

**Shadow Scale**:
```css
/* Default state */
shadow-sm        /* Cards at rest */

/* Hover state */
shadow-md        /* Subtle lift */
shadow-lg        /* Noticeable lift */

/* Elevated UI */
shadow-xl        /* Dropdowns, popovers */
shadow-2xl       /* Modals only */
```

### 5.2 Rounded Corners - Be Consistent

**DON'T**:
- ❌ `rounded-full` on everything (too playful)
- ❌ Mixing `rounded-sm`, `rounded-lg`, `rounded-3xl` randomly
- ❌ Rounding individual table cells or list items

**DO**:
- ✅ Use consistent radius scale
- ✅ Larger radius for larger elements
- ✅ `rounded-full` only for: avatars, pills, icon buttons

**Radius Scale**:
```css
rounded-md       /* 6px - Small cards, inputs */
rounded-lg       /* 8px - Standard cards, buttons */
rounded-xl       /* 12px - Large cards, sections */
rounded-2xl      /* 16px - Modals, hero sections */
rounded-full     /* Pills, avatars, icon buttons ONLY */
```

### 5.3 Spacing - Breathe

**DON'T**:
- ❌ Cramped content (`p-2`, `space-y-1`)
- ❌ Excessive spacing (wasted screen space)
- ❌ Inconsistent gaps

**DO**:
- ✅ Comfortable padding (`p-6` for cards, `p-4` for inputs)
- ✅ Consistent vertical rhythm (`space-y-4`, `space-y-6`)
- ✅ Adequate section spacing (`py-12` mobile, `py-24` desktop)

### 5.4 Colors - Intentional Use

**DON'T**:
- ❌ Bright colors everywhere (GitHub-style colored labels)
- ❌ Conflicting gradients
- ❌ Poor contrast ratios

**DO**:
- ✅ Neutral base with brand color accents
- ✅ 60-30-10 rule (60% neutral, 30% primary, 10% accents)
- ✅ Test all color combinations for accessibility
- ✅ Use color intentionally for hierarchy

### 5.5 Typography - Hierarchy

**DON'T**:
- ❌ Every heading the same weight
- ❌ Body text too small (`text-xs` everywhere)
- ❌ Ignoring line-height

**DO**:
- ✅ Clear size distinction between levels
- ✅ Appropriate line-height (1.6 for body, 1.2 for headings)
- ✅ Use font weight to establish hierarchy
- ✅ Limit to 3-4 text sizes per page

### 5.6 Borders - Subtle Accents

**DON'T**:
- ❌ Heavy borders (`border-2`, `border-4`)
- ❌ Dark borders in light mode

**DO**:
- ✅ `border` (1px) by default
- ✅ Light border colors (`border-neutral-200`)
- ✅ Accent borders for emphasis (left border on alerts)
- ✅ Consider `border-0` with background instead

### 5.7 Animations - Purposeful

**DON'T**:
- ❌ Animations for the sake of animation
- ❌ Slow animations (`duration-1000`)
- ❌ Janky animations (animating width/height)

**DO**:
- ✅ Fast, snappy interactions (200-350ms)
- ✅ GPU-accelerated properties only (transform, opacity)
- ✅ Respect `prefers-reduced-motion`
- ✅ Meaningful motion (direction indicates relationship)

### 5.8 Forms - User-Friendly

**DON'T**:
- ❌ Tiny inputs with small touch targets
- ❌ Red borders before user tries to submit
- ❌ Unclear required fields

**DO**:
- ✅ Comfortable input height (`py-3`, 44px+ touch target)
- ✅ Clear labels and placeholders
- ✅ Validate on blur, not on change
- ✅ Show success states (green checkmark)
- ✅ Helpful error messages (not just "Invalid")

---

## 6. Dark Mode Theme System

> [!IMPORTANT]
> This template **MUST** support both light and dark modes with a crispy, lean aesthetic in both themes.

### 3.1 Theme Toggle Implementation

**Using Next.js `next-themes` package** (already in SwiftBuilder):
```tsx
import { useTheme } from 'next-themes';

const { theme, setTheme } = useTheme();
```

### 3.2 Dark Mode Color Palette

#### Dark Mode Backgrounds
```css
/* Dark mode surfaces */
--dark-bg-primary: #0A0A0A;           /* Main background */
--dark-bg-secondary: #141414;         /* Elevated surfaces */
--dark-bg-tertiary: #1F1F1F;          /* Cards, panels */
--dark-bg-elevated: #2A2A2A;          /* Hover states */
```

#### Dark Mode Text
```css
--dark-text-primary: #FAFAFA;         /* Headings */
--dark-text-secondary: #E5E5E5;       /* Body text */
--dark-text-tertiary: #A3A3A3;        /* Muted text */
--dark-text-disabled: #737373;        /* Disabled */
```

#### Dark Mode Accents
```css
/* Brand colors remain same but with adjusted opacity/glow */
--dark-red-primary: #EF4444;          /* Brighter red for dark bg */
--dark-red-glow: rgba(239, 68, 68, 0.3);

--dark-green-primary: #22C55E;        /* Brighter green */
--dark-green-glow: rgba(34, 197, 94, 0.3);

--dark-yellow-primary: #FCD34D;       /* Brighter yellow */
--dark-yellow-glow: rgba(252, 211, 77, 0.3);
```

### 3.3 Theme-Aware Components

```tsx
// Tailwind dark mode classes
<div className="bg-white dark:bg-dark-bg-primary text-neutral-900 dark:text-dark-text-primary">

// Borders
<div className="border-neutral-200 dark:border-neutral-800">

// Shadows (subtle in dark mode)
<div className="shadow-lg dark:shadow-2xl dark:shadow-black/50">

// Glassmorphism (works in both modes)
<div className="backdrop-blur-xl bg-white/80 dark:bg-dark-bg-secondary/80">
```

### 3.4 Dark Mode Specific Effects

**Glow Effects** (only in dark mode):
```tsx
<div className="dark:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
  CTA Button with red glow
</div>
```

**Border Highlights**:
```tsx
<div className="border border-neutral-200 dark:border-neutral-800 dark:hover:border-red-500/50">
  Card with highlighted border on hover (dark mode only)
</div>
```

### 3.5 Theme Toggle UI

**Location**: Top-right corner of navbar

```tsx
<button
  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
  className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
  aria-label="Toggle theme"
>
  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
</button>
```

**Animation**: Smooth rotation on toggle
```tsx
<motion.div
  key={theme}
  initial={{ rotate: -180, opacity: 0 }}
  animate={{ rotate: 0, opacity: 1 }}
  transition={{ duration: 0.3 }}
>
```

---

## 4. Template Architecture

### 3.1 Component Hierarchy

```
TelepostSaccoTemplate
├── Navbar
├── Hero
├── TrustBar (Partner logos / Stats)
├── Products (Loan products grid)
├── Features (Why Choose Us)
├── Calculator (Loan calculator widget)
├── Testimonials
├── NewsSection (Latest updates)
├── ContactCTA
└── Footer
```

### 3.2 Responsive Breakpoints

Following SwiftBuilder rules - **Standard Tailwind breakpoints only**:

```tsx
// Mobile-first approach
sm: 640px   // Small tablets
md: 768px   // Tablets
lg: 1024px  // Small desktops
xl: 1280px  // Large desktops
2xl: 1536px // Extra large screens
```

**NO container queries** - only viewport-based media queries.

---

## 4. Component Specifications

### 4.1 Navbar Component

**Purpose**: Primary navigation, brand identity, quick actions

**Layout**:
- **Mobile**: Logo left, hamburger menu right
- **Desktop**: Logo left, center nav links, CTA button right

**Content Structure**:
```typescript
navbar: {
  logoText: "TELEPOST SACCO",
  logoImage: "/images/templates/telepost-sacco/logo.png",
  menuItems: [
    { label: "Products", href: "#products" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ],
  ctaText: "Member Login",
  ctaLink: "#login",
  secondaryCtaText: "Join Us",
  secondaryCtaLink: "#join"
}
```

**Styling**:
- Sticky positioning: `sticky top-0 z-50`
- Backdrop blur: `backdrop-blur-xl bg-white/90`
- Border bottom: `border-b border-neutral-200`
- Height: `h-20 lg:h-24`

**Data-Studio-Path Mappings**:
```tsx
<span data-studio-path="navbar.logoText">{logoText}</span>
{menuItems.map((item, i) => (
  <a data-studio-path={`navbar.menuItems.${i}.label`}>{item.label}</a>
))}
<button data-studio-path="navbar.ctaText">{ctaText}</button>
```

**Responsive Behavior**:
```tsx
// Mobile menu
<div className="lg:hidden">
  <button>Menu Icon</button>
</div>

// Desktop menu
<nav className="hidden lg:flex items-center gap-8">
  {menuItems}
</nav>
```

---

### 4.2 Hero Section

**Purpose**: Primary value proposition, immediate engagement

**Layout**: 
- **Mobile**: Stacked - Text top, image bottom
- **Desktop**: Split - Text left (50%), visual right (50%)

**Content Structure**:
```typescript
hero: {
  badgeText: "Trusted Since 1998",
  title: "Your Financial Partner",
  highlightedText: "Together We Grow",
  description: "Join over 50,000 members building their financial future with Telepost Sacco. Access affordable loans, competitive savings, and expert financial guidance.",
  primaryCtaText: "Become a Member",
  primaryCtaLink: "#join",
  secondaryCtaText: "Explore Products",
  secondaryCtaLink: "#products",
  heroImage: "/images/templates/telepost-sacco/hero-visual.png",
  stats: [
    { value: "50,000+", label: "Active Members" },
    { value: "KES 5B+", label: "Assets Under Management" },
    { value: "25+", label: "Years of Service" }
  ]
}
```

**Styling**:
- Background: Gradient from white to light green tint
- Padding: `py-12 md:py-16 lg:py-24`
- Max width: `max-w-7xl mx-auto`

**Visual Elements**:
- Animated badge with pulse effect
- Gradient text for highlighted portion
- Floating stats cards with subtle animation
- Hero image with subtle parallax on scroll

**Data-Studio-Path Mappings**:
```tsx
<span data-studio-path="hero.badgeText">{badgeText}</span>
<h1 data-studio-path="hero.title">{title}</h1>
<span data-studio-path="hero.highlightedText">{highlightedText}</span>
<p data-studio-path="hero.description">{description}</p>
<button data-studio-path="hero.primaryCtaText">{primaryCtaText}</button>
{stats.map((stat, i) => (
  <div key={i}>
    <span data-studio-path={`hero.stats.${i}.value`}>{stat.value}</span>
    <span data-studio-path={`hero.stats.${i}.label`}>{stat.label}</span>
  </div>
))}
```

---

### 4.3 Trust Bar / Stats Section

**Purpose**: Build credibility, showcase achievements

**Layout**: Horizontal scroll on mobile, grid on desktop

**Content Structure**:
```typescript
trustBar: {
  title: "RECOGNIZED EXCELLENCE",
  subtitle: "Award-winning SACCO trusted by thousands",
  achievements: [
    { icon: "trophy", value: "Top 10", label: "SACCO in Kenya" },
    { icon: "shield", value: "SASRA", label: "Regulated" },
    { icon: "users", value: "50K+", label: "Members" },
    { icon: "star", value: "4.8/5", label: "Member Rating" }
  ]
}
```

**Styling**:
- Background: `bg-neutral-50`
- Cards: White background with subtle shadow
- Icons: Telepost brand colors
- Grid: `grid-cols-2 md:grid-cols-4 gap-6`

---

### 4.4 Products Section

**Purpose**: Showcase loan products and savings options

**Layout**: Bento grid layout (inspired by Modern SaaS template)

**Content Structure**:
```typescript
products: {
  badgeText: "FINANCIAL SOLUTIONS",
  title: "Products Designed for",
  highlightedText: "Your Success",
  description: "From emergency loans to home ownership, we have a product for every stage of your financial journey.",
  products: [
    {
      id: "development-loan",
      title: "Development Loan",
      description: "Build your dream home with up to 80% financing",
      features: ["Up to KES 10M", "8% p.a. interest", "15-year repayment"],
      icon: "home",
      ctaText: "Learn More",
      ctaLink: "#development-loan",
      image: "/images/templates/telepost-sacco/product-home.png"
    },
    {
      id: "emergency-loan",
      title: "Emergency Loan",
      description: "Quick access to funds when you need them most",
      features: ["Instant approval", "Up to 3x deposits", "Flexible terms"],
      icon: "zap",
      ctaText: "Apply Now",
      ctaLink: "#emergency-loan"
    },
    {
      id: "school-fees-loan",
      title: "School Fees Loan",
      description: "Invest in education without financial stress",
      features: ["Competitive rates", "Direct payment", "Grace period"],
      icon: "book",
      ctaText: "Learn More",
      ctaLink: "#school-fees"
    },
    {
      id: "biashara-loan",
      title: "Biashara Plus",
      description: "Grow your business with tailored financing",
      features: ["Up to KES 5M", "Business mentorship", "Flexible repayment"],
      icon: "briefcase",
      ctaText: "Apply Now",
      ctaLink: "#biashara"
    }
  ]
}
```

**Layout Pattern**:
```
Desktop (lg:):
┌─────────────────┬─────────┐
│                 │ Product │
│  Large Product  │    2    │
│   (Featured)    ├─────────┤
│                 │ Product │
│                 │    3    │
├─────────┬───────┴─────────┤
│Product 4│   Product 5     │
└─────────┴─────────────────┘

Mobile: Single column stack
```

**Styling**:
- Cards: `bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all`
- Hover: Lift effect `hover:-translate-y-2`
- Icons: Gradient backgrounds with brand colors
- Images: Rounded corners, object-cover

---

### 4.5 Features / Why Choose Us

**Purpose**: Differentiate from competitors, build trust

**Content Structure**:
```typescript
features: {
  badgeText: "WHY TELEPOST SACCO",
  title: "Banking Made",
  highlightedText: "Simple & Secure",
  description: "Experience the difference of member-focused financial services",
  features: [
    {
      icon: "shield-check",
      title: "SASRA Regulated",
      description: "Fully licensed and regulated by the Sacco Societies Regulatory Authority for your peace of mind."
    },
    {
      icon: "percent",
      title: "Competitive Dividends",
      description: "Earn up to 12% annual dividends on your deposits - better than traditional banks."
    },
    {
      icon: "clock",
      title: "Quick Loan Processing",
      description: "Get approved in 24 hours with our streamlined digital application process."
    },
    {
      icon: "smartphone",
      title: "Digital Banking",
      description: "Access your account 24/7 via mobile app, USSD, and online portal."
    },
    {
      icon: "users",
      title: "Member Ownership",
      description: "You're not just a customer - you're an owner with voting rights and profit sharing."
    },
    {
      icon: "headphones",
      title: "Dedicated Support",
      description: "Personal relationship managers and responsive customer service team."
    }
  ]
}
```

**Layout**:
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- Cards: Minimal, icon-focused design

**Styling**:
- Icons: Large (48px), brand color gradients
- Cards: Subtle hover effect, no heavy shadows
- Typography: Bold titles, readable descriptions

---

### 4.6 Loan Calculator Widget

**Purpose**: Interactive engagement, practical utility

**Content Structure**:
```typescript
calculator: {
  title: "Calculate Your Loan",
  description: "See how much you can borrow and your monthly repayment",
  defaultAmount: 500000,
  minAmount: 50000,
  maxAmount: 10000000,
  defaultTerm: 24,
  minTerm: 6,
  maxTerm: 180,
  interestRate: 12,
  ctaText: "Apply for This Loan",
  ctaLink: "#apply"
}
```

**Features**:
- Slider inputs for amount and term
- Real-time calculation display
- Visual breakdown (principal vs interest)
- Responsive design

**Styling**:
- Background: Gradient card with glassmorphism
- Sliders: Custom styled with brand colors
- Results: Large, bold typography

---

### 4.7 Testimonials Section

**Purpose**: Social proof, member success stories

**Content Structure**:
```typescript
testimonials: {
  badgeText: "MEMBER STORIES",
  title: "Trusted by",
  highlightedText: "Thousands",
  subtitle: "Real stories from real members",
  testimonials: [
    {
      quote: "Telepost Sacco helped me build my first home. The process was smooth and the rates were unbeatable.",
      author: "Jane Wanjiku",
      role: "Member since 2018",
      rating: 5,
      image: "/images/templates/telepost-sacco/testimonial-1.png"
    },
    {
      quote: "The emergency loan came through when I needed it most. Fast approval, fair terms.",
      author: "John Kamau",
      role: "Member since 2015",
      rating: 5,
      image: "/images/templates/telepost-sacco/testimonial-2.png"
    },
    {
      quote: "Best decision I made was joining Telepost. The dividends alone beat any bank savings account.",
      author: "Mary Akinyi",
      role: "Member since 2020",
      rating: 5,
      image: "/images/templates/telepost-sacco/testimonial-3.png"
    }
  ]
}
```

**Layout**:
- Carousel on mobile
- 3-column grid on desktop
- Auto-scroll with pause on hover

**Styling**:
- Cards: White background, subtle shadow
- Quotes: Large, italic font
- Stars: Yellow rating display
- Images: Circular avatars

---

### 4.8 News / Updates Section

**Purpose**: Show activity, build credibility

**Content Structure**:
```typescript
news: {
  badgeText: "LATEST UPDATES",
  title: "Stay Informed",
  ctaText: "View All News",
  ctaLink: "#news",
  articles: [
    {
      title: "Annual General Meeting 2026",
      excerpt: "Join us for our AGM on March 15th. All members are invited.",
      date: "2026-02-01",
      image: "/images/templates/telepost-sacco/news-1.png",
      link: "#agm-2026"
    },
    {
      title: "New Mobile App Launch",
      excerpt: "Experience banking on the go with our redesigned mobile app.",
      date: "2026-01-20",
      image: "/images/templates/telepost-sacco/news-2.png",
      link: "#mobile-app"
    },
    {
      title: "Dividend Announcement",
      excerpt: "We're pleased to announce 11% dividends for 2025.",
      date: "2026-01-10",
      image: "/images/templates/telepost-sacco/news-3.png",
      link: "#dividends"
    }
  ]
}
```

**Layout**:
- Horizontal scroll on mobile
- 3-column grid on desktop

---

### 4.9 Contact / CTA Section

**Purpose**: Drive membership sign-ups

**Content Structure**:
```typescript
contactCta: {
  title: "Ready to Start Your Financial Journey?",
  description: "Join Telepost Sacco today and experience the difference of member-focused banking.",
  primaryCtaText: "Become a Member",
  primaryCtaLink: "#join",
  secondaryCtaText: "Contact Us",
  secondaryCtaLink: "#contact",
  contactInfo: [
    { icon: "phone", label: "Call Us", value: "+254 700 000 000" },
    { icon: "mail", label: "Email", value: "info@telepostsacco.co.ke" },
    { icon: "map-pin", label: "Visit", value: "Nairobi, Kenya" }
  ]
}
```

**Styling**:
- Background: Gradient (green to yellow)
- Text: White for contrast
- Buttons: White background with brand color text

---

### 4.10 Footer Component

**Purpose**: Navigation, legal, contact information

**Content Structure**:
```typescript
footer: {
  logoText: "TELEPOST SACCO",
  logoImage: "/images/templates/telepost-sacco/logo.png",
  tagline: "Together We Grow",
  description: "Building financial futures for our members since 1998.",
  products: [
    { label: "Development Loan", href: "#development" },
    { label: "Emergency Loan", href: "#emergency" },
    { label: "School Fees Loan", href: "#school-fees" },
    { label: "Biashara Plus", href: "#biashara" },
    { label: "Savings Accounts", href: "#savings" }
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Careers", href: "#careers" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "#contact" }
  ],
  resources: [
    { label: "Member Portal", href: "#portal" },
    { label: "FAQs", href: "#faqs" },
    { label: "Downloads", href: "#downloads" },
    { label: "Loan Calculator", href: "#calculator" },
    { label: "Branch Locator", href: "#branches" }
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "Complaints", href: "#complaints" }
  ],
  contactInfo: {
    phone: "+254 700 000 000",
    email: "info@telepostsacco.co.ke",
    address: "Telepost House, Nairobi, Kenya"
  },
  socialLinks: [
    { platform: "Facebook", url: "#", icon: "facebook" },
    { platform: "Twitter", url: "#", icon: "twitter" },
    { platform: "LinkedIn", url: "#", icon: "linkedin" },
    { platform: "Instagram", url: "#", icon: "instagram" }
  ],
  newsletter: {
    title: "Stay Updated",
    description: "Get monthly financial tips and SACCO updates",
    placeholder: "your@email.com",
    buttonText: "Subscribe"
  },
  copyright: "© 2026 Telepost Sacco Society Ltd. All rights reserved.",
  regulatoryText: "Licensed and regulated by SASRA. Deposits protected up to KES 100,000 by DPF."
}
```

**Layout**:
- **Mobile**: Single column, stacked sections
- **Tablet**: 2 columns
- **Desktop**: 4 columns + newsletter section

**Styling**:
- Background: Dark (`bg-neutral-900`)
- Text: Light gray (`text-neutral-300`)
- Links: Hover to brand green
- Dividers: Subtle borders

---

## 5. SwiftBuilder Integration Rules

### 5.1 Data-Studio-Path Implementation

**Every editable element MUST have `data-studio-path`**:

```tsx
// ✅ CORRECT
<h1 data-studio-path="hero.title">{title}</h1>
<p data-studio-path="hero.description">{description}</p>

// ✅ CORRECT - Arrays
{products.map((product, i) => (
  <div key={i}>
    <h3 data-studio-path={`products.products.${i}.title`}>
      {product.title}
    </h3>
  </div>
))}

// ❌ WRONG - Missing path
<h1>{title}</h1>
```

### 5.2 Responsive Design Rules

**ONLY use standard Tailwind breakpoints** (NO container queries):

```tsx
// ✅ CORRECT
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

// ❌ WRONG - Container queries don't work in iframe
<div className="@container">
  <div className="@md:text-lg">Won't work</div>
</div>
```

### 5.3 Mobile-First Approach

```tsx
// Base styles = mobile
// Add breakpoints for larger screens
<div className="px-4 sm:px-6 md:px-8 lg:px-12">
  <h1 className="text-2xl md:text-4xl lg:text-6xl">
    Mobile-first heading
  </h1>
</div>
```

### 5.4 Z-Index Rules

```tsx
// ✅ CORRECT - Use z-50 for sticky navbar
<nav className="sticky top-0 z-50">

// ✅ CORRECT - Lower z-index for other elements
<div className="relative z-10">
```

### 5.5 Image Handling

```tsx
// Always use Next.js Image component
import Image from "next/image";

<Image
  src={imageSrc}
  alt="Description"
  width={800}
  height={600}
  className="object-cover rounded-xl"
/>

// Make image arrays editable
<div data-studio-path="products.products.0.image">
  <Image src={product.image} alt={product.title} />
</div>
```

### 5.6 TypeScript Interface

```typescript
// src/types/template.ts
export interface TelepostSaccoContent {
  navbar?: NavbarProps;
  hero?: HeroProps;
  trustBar?: TrustBarProps;
  products?: ProductsProps;
  features?: FeaturesProps;
  calculator?: CalculatorProps;
  testimonials?: TestimonialsProps;
  news?: NewsProps;
  contactCta?: ContactCtaProps;
  footer?: FooterProps;
}
```

---

## 6. Premium Asset Strategy

> [!IMPORTANT]
> **NO PLACEHOLDER IMAGES**. Every visual must be high-quality, purpose-built, and production-ready.

### 6.1 Logo Assets (Essential)
- [x] Telepost logo - primary (already saved)
- [ ] Telepost logo - white version (for dark mode)
- [ ] Telepost logo - monochrome (for special contexts)
- [ ] Favicon set (16x16, 32x32, 180x180, 512x512)
- [ ] Social media preview image (OG image, 1200x630)

### 6.2 Hero Section Visuals (Premium)

**Strategy**: AI-generated professional illustrations

- [ ] **Hero Main Visual**: 3D isometric illustration of financial growth
  - Theme: Upward trending graph with coins, buildings, people
  - Style: Modern, clean, colorful (matching brand colors)
  - Format: PNG with transparency, 1600x1200px
  - Tool: Generate using `generate_image` with detailed prompt

- [ ] **Hero Background Pattern**: Subtle geometric pattern
  - Theme: Grid or dots pattern
  - Style: Very subtle, low opacity
  - Format: SVG for infinite scaling

- [ ] **Floating Elements**: 3-5 decorative shapes/icons
  - Theme: Currency symbols, growth arrows, shield (trust)
  - Format: SVG with gradient fills

### 6.3 Product/Loan Visuals (High-Quality)

**Strategy**: AI-generated contextual illustrations for each product

- [ ] **Development Loan**: Modern house/building construction scene
  - Style: 3D render or high-quality illustration
  - Colors: Include brand greens and yellows
  - Aspect: 16:9, 800x450px minimum

- [ ] **Emergency Loan**: Clock with speedometer showing fast approval
  - Style: Dynamic, energetic visualization
  - Colors: Red and yellow accents
  - Aspect: 1:1, 600x600px

- [ ] **School Fees Loan**: Education-themed (graduation cap, books, laptop)
  - Style: Bright, optimistic illustration
  - Colors: Green and yellow tones
  - Aspect: 1:1, 600x600px

- [ ] **Biashara Plus**: Business growth chart with entrepreneur
  - Style: Professional, upward trending
  - Colors: Brand red and green
  - Aspect: 1:1, 600x600px

### 6.4 Testimonial Portraits (Realistic)

**Strategy**: AI-generated diverse, professional portraits

- [ ] **Portrait 1**: Kenyan woman, professional attire, warm smile
  - Age: 35-45, professional setting
  - Format: Square crop, 400x400px, high quality

- [ ] **Portrait 2**: Kenyan man, business casual, confident
  - Age: 40-50, office/business background
  - Format: Square crop, 400x400px

- [ ] **Portrait 3**: Young Kenyan professional, modern style
  - Age: 28-35, contemporary setting
  - Format: Square crop, 400x400px

### 6.5 News/Blog Thumbnails (Contextual)

- [ ] **AGM Event**: Conference room or gathering illustration
  - Style: Professional, corporate
  - Aspect: 16:9, 800x450px

- [ ] **Mobile App**: Modern smartphone UI mockup
  - Style: Clean, tech-forward
  - Show: Telepost app interface
  - Aspect: 16:9, 800x450px

- [ ] **Dividend Announcement**: Financial growth visualization
  - Style: Charts, upward trends, celebration
  - Aspect: 16:9, 800x450px

### 6.6 Background Elements

- [ ] **Gradient Meshes**: 3-5 abstract gradient backgrounds
  - Use: Section backgrounds (subtle overlays)
  - Colors: Brand colors at low opacity
  - Format: High-res PNG or SVG

- [ ] **Texture Overlays**: Noise/grain textures
  - Use: Add depth to flat surfaces
  - Style: Very subtle, 3-5% opacity
  - Format: Tileable PNG

### 6.7 Icon Assets

**Primary Library**: **Lucide React** (already in SwiftBuilder)

**Required Icons**:
- Financial: `home`, `briefcase`, `percent`, `trending-up`, `wallet`
- Speed/Efficiency: `zap`, `clock`, `rocket`
- Education: `book-open`, `graduation-cap`
- Security: `shield-check`, `lock`, `verified`
- Digital: `smartphone`, `globe`, `wifi`
- Social: `users`, `message-circle`, `heart`
- Support: `headphones`, `help-circle`
- Achievement: `trophy`, `star`, `award`
- Contact: `phone`, `mail`, `map-pin`
- Social Media: `facebook`, `twitter`, `linkedin`, `instagram`

**Custom Icons** (if needed):
- [ ] SASRA logo/badge (vectorized)
- [ ] Deposit Protection Fund badge

### 6.8 3D Assets (Optional Premium Touch)

- [ ] **3D Coin Stack**: Rendered 3D coins (brand colors)
  - Use: Hero section floating element
  - Format: PNG with transparency

- [ ] **3D Safe/Vault**: Security visualization
  - Use: Features section
  - Format: PNG with transparency

### 6.9 Asset Generation Prompts

When generating images with `generate_image`, use highly detailed prompts:

**Example Hero Visual Prompt**:
```
"Professional 3D illustration of financial growth and prosperity. Scene shows:
- Modern isometric cityscape with buildings
- Upward trending graph overlaid
- Gold and green coins floating
- Diverse people (African professionals) collaborating
- Shield symbol representing security
- Clean gradient background (white to light green)
- Soft shadows, modern lighting
- Style: Flat 3D, colorful, optimistic, corporate
- Colors: Red #DC2626, Green #16A34A, Yellow #FBBF24
- No text, no placeholder elements
- High quality, suitable for hero section"
```

**Quality Standards**:
- Minimum resolution: 1600px on longest side
- Format: PNG for images with transparency, WebP for photos
- Optimization: Use Next.js Image component automatic optimization
- Naming: Descriptive, lowercase, hyphens (e.g., `hero-financial-growth.png`)
- Storage: `/public/images/templates/telepost-sacco/`

---

## 7. Webflow-Level Quality Standards

> [!IMPORTANT]
> This template targets **enterprise/corporate clients** and must compete with premium Webflow templates.

### 7.1 Webflow Quality Checklist

#### Visual Polish
- [ ] **Typography**: Perfect line-height, letter-spacing, and hierarchy
- [ ] **Spacing**: Consistent rhythm using 8px grid system
- [ ] **Colors**: Harmonious palette with proper contrast ratios
- [ ] **Shadows**: Multi-layered, realistic depth perception
- [ ] **Borders**: Subtle, contextual, enhance rather than contain

#### Interaction Design
- [ ] **Hover States**: Every interactive element has polished hover state
- [ ] **Transitions**: Smooth, physics-based animations (spring easing)
- [ ] **Loading States**: Skeleton screens, progressive loading
- [ ] **Error States**: Graceful, helpful error messages
- [ ] **Success Feedback**: Confirmation animations, micro-celebrations

#### Motion Design
- [ ] **Page Load**: Orchestrated reveal (navbar → hero → sections)
- [ ] **Scroll Animations**: Parallax, fade-ins, slide-ups with proper timing
- [ ] **Hover Animations**: Scale, glow, lift effects
- [ ] **Micro-interactions**: Button ripples, toggle switches, checkbox animations
- [ ] **Number Counters**: Animated stats on scroll into view
- [ ] **Carousel**: Smooth drag, momentum, snap-to-point

#### Responsive Perfection
- [ ] **Fluid Typography**: Smooth scaling between breakpoints using `clamp()`
- [ ] **Adaptive Layouts**: Optimized for every screen size (mobile, tablet, desktop)
- [ ] **Touch Targets**: Minimum 44x44px on mobile
- [ ] **Mobile Performance**: < 2s load time on 3G

#### Code Quality
- [ ] **Semantic HTML**: Proper heading hierarchy, ARIA labels
- [ ] **Type Safety**: Full TypeScript coverage, no `any` types
- [ ] **Performance**: Lazy loading, code splitting, optimized bundles
- [ ] **SEO**: Meta tags, structured data, semantic markup
- [ ] **Accessibility**: WCAG 2.1 AA compliance minimum

### 7.2 Premium Effects

#### Glassmorphism
```tsx
className="backdrop-blur-xl bg-white/80 dark:bg-neutral-900/80 border border-white/20 dark:border-neutral-700/50"
```

#### Gradient Borders
```tsx
<div className="p-[1px] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-xl">
  <div className="bg-white dark:bg-neutral-900 rounded-xl p-6">
    Card content
  </div>
</div>
```

#### Text Gradients
```tsx
<h1 className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 bg-clip-text text-transparent">
  Gradient Heading
</h1>
```

#### Animated Gradients
```tsx
<div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-[length:200%_100%] animate-gradient">
  Flowing gradient background
</div>

// Tailwind config
animation: {
  gradient: 'gradient 8s linear infinite',
}
keyframes: {
  gradient: {
    '0%, 100%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
  },
}
```

#### Glow Effects (Dark Mode)
```tsx
className="dark:shadow-[0_0_50px_rgba(239,68,68,0.5)] transition-shadow duration-500"
```

#### Floating Animation
```tsx
<motion.div
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
>
  Floating element
</motion.div>
```

### 7.3 Performance Optimization

**Image Optimization**:
- Use Next.js `Image` component (automatic WebP conversion)
- Lazy load below-fold images
- Use `priority` prop for hero images
- Implement blur placeholders (`placeholder="blur"`)

**Animation Performance**:
- Use `transform` and `opacity` only (GPU-accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly and remove after animation
- Implement `IntersectionObserver` for scroll animations

**Bundle Optimization**:
- Code split by route (Next.js automatic)
- Lazy load heavy components (calculator, carousel)
- Tree-shake unused icons
- Minimize third-party dependencies

### 7.4 Advanced Interactions

#### Magnetic Cursor Effect (Desktop Only)
```tsx
const [position, setPosition] = useState({ x: 0, y: 0 });

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / 4;
  const y = (e.clientY - rect.top - rect.height / 2) / 4;
  setPosition({ x, y });
};

<motion.button
  onMouseMove={handleMouseMove}
  animate={position}
  transition={{ type: "spring", stiffness: 150, damping: 15 }}
>
```

#### Scroll Progress Indicator
```tsx
const scrollProgress = useScroll();

<motion.div
  className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-green-500 origin-left z-50"
  style={{ scaleX: scrollProgress }}
/>
```

#### Parallax Sections
```tsx
import { useParallax } from 'react-scroll-parallax';

const parallax = useParallax({ speed: -20 });

<div ref={parallax.ref}>
  Parallax element
</div>
```

---

## 8. Improvements Over Qona Sacco

### 7.1 Visual Design
| Aspect | Qona Sacco | Telepost Sacco (Ours) |
|--------|------------|----------------------|
| **Typography** | Generic system fonts | Premium Google Fonts (Inter + Lato) |
| **Color Palette** | Basic, limited contrast | Rich, accessible, brand-aligned |
| **Spacing** | Inconsistent | Systematic 8px grid |
| **Shadows** | Heavy, outdated | Subtle, modern elevation |
| **Animations** | Minimal/none | Smooth micro-interactions |
| **Mobile UX** | Basic responsive | Optimized mobile-first |

### 7.2 User Experience
- **Better Navigation**: Clearer hierarchy, sticky nav
- **Interactive Calculator**: Engaging loan calculator
- **Improved CTAs**: More prominent, action-oriented
- **Visual Hierarchy**: Better use of whitespace and typography
- **Accessibility**: Better color contrast, ARIA labels

### 7.3 Modern Features
- **Glassmorphism**: Modern card designs
- **Gradient Accents**: Subtle brand color gradients
- **Hover States**: Engaging micro-interactions
- **Loading States**: Skeleton screens for better perceived performance
- **Optimized Images**: Next.js Image optimization

---

## 8. Content Strategy

### 8.1 Tone of Voice
- **Professional** but **approachable**
- **Trustworthy** but **friendly**
- **Informative** but **concise**
- **Member-focused** language

### 8.2 Key Messages
1. **Trust**: "SASRA regulated, member-owned"
2. **Value**: "Better rates than banks"
3. **Accessibility**: "Digital banking 24/7"
4. **Community**: "Together We Grow"
5. **Experience**: "25+ years serving members"

### 8.3 Call-to-Action Hierarchy
1. **Primary**: "Become a Member" (hero, footer CTA)
2. **Secondary**: "Apply for Loan" (products)
3. **Tertiary**: "Learn More" (features, about)
4. **Utility**: "Member Login" (navbar)

---

## 9. Accessibility Standards

### 9.1 WCAG 2.1 Level AA Compliance
- [ ] Color contrast ratio ≥ 4.5:1 for normal text
- [ ] Color contrast ratio ≥ 3:1 for large text
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible on all focusable elements
- [ ] Alt text for all images
- [ ] ARIA labels for icon-only buttons
- [ ] Semantic HTML structure

### 9.2 Screen Reader Support
```tsx
// Example
<button aria-label="Open mobile menu">
  <Menu className="w-6 h-6" aria-hidden="true" />
</button>
```

---

## 10. Performance Targets

### 10.1 Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### 10.2 Optimization Strategies
- Next.js Image optimization (automatic)
- Lazy loading for below-fold images
- CSS-in-JS with Tailwind (minimal runtime)
- Framer Motion for performant animations
- Code splitting by component

---

## 11. Template Configuration

### 11.1 Config Entry (src/templates/config.ts)

```typescript
"telepost-sacco": {
  id: "telepost-sacco",
  name: "Telepost Sacco",
  description: "Premium SACCO & financial services template",
  category: "Financial Services",
  tags: ["SACCO", "Finance", "Loans", "Savings", "Professional"],
  thumbnail: "/templates/telepost-sacco-thumb.png",
  component: TelepostSaccoTemplate,
  assets: telepostSaccoAssets,
  defaultContent: {
    // Full content structure as defined in sections above
  }
}
```

### 11.2 File Structure

```
src/templates/telepost-sacco/
├── index.tsx                    # Main template component
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── Products.tsx
│   ├── Features.tsx
│   ├── Calculator.tsx
│   ├── Testimonials.tsx
│   ├── News.tsx
│   ├── ContactCTA.tsx
│   └── Footer.tsx
├── assets.ts                    # Asset manifest
├── types.ts                     # TypeScript interfaces
└── README.md                    # Template documentation
```

---

## 12. Testing Checklist

### 12.1 Responsiveness
- [ ] Mobile (375px - iPhone SE)
- [ ] Mobile (414px - iPhone Pro Max)
- [ ] Tablet (768px - iPad)
- [ ] Desktop (1024px - Small laptop)
- [ ] Desktop (1440px - Standard desktop)
- [ ] Desktop (1920px - Large desktop)

### 12.2 Editability
- [ ] All text elements editable via double-click
- [ ] All images replaceable via media library
- [ ] Array items (products, testimonials) individually editable
- [ ] Changes persist after save
- [ ] Undo/redo works correctly

### 12.3 Cross-Browser
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (macOS/iOS)

### 12.4 Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader announces content correctly
- [ ] Color contrast passes WCAG AA
- [ ] Focus indicators visible

---

## 13. Implementation Phases

### Phase 1: Foundation (No Coding Yet - This PRD)
- [x] Brand analysis
- [x] Design system definition
- [x] Component architecture
- [x] Content structure
- [x] Asset planning

### Phase 2: Asset Creation (Next)
- [ ] Generate hero visuals
- [ ] Generate product images
- [ ] Generate testimonial portraits
- [ ] Create icon set mapping
- [ ] Prepare logo variations

### Phase 3: Component Development
- [ ] Create TypeScript interfaces
- [ ] Build Navbar component
- [ ] Build Hero component
- [ ] Build TrustBar component
- [ ] Build Products section
- [ ] Build Features section
- [ ] Build Calculator widget
- [ ] Build Testimonials section
- [ ] Build News section
- [ ] Build ContactCTA section
- [ ] Build Footer component

### Phase 4: Integration
- [ ] Assemble main template
- [ ] Register in config.ts
- [ ] Add to template registry
- [ ] Create thumbnail

### Phase 5: Testing & Refinement
- [ ] Responsive testing
- [ ] Editability testing
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Cross-browser testing

---

## 14. Success Metrics

### 14.1 Design Quality
- Premium visual appearance (subjective but critical)
- Consistent brand application
- Modern, professional aesthetic
- Better than Qona Sacco reference

### 14.2 Technical Quality
- All SwiftBuilder rules followed
- 100% editable content
- Responsive across all breakpoints
- No console errors
- Passes accessibility audit

### 14.3 User Experience
- Clear value proposition
- Intuitive navigation
- Engaging interactions
- Fast load times
- Mobile-friendly

---

## Appendix A: Brand Color Usage Guide

### Primary Red (#DC2626)
**Use for**:
- Primary CTAs (Become a Member, Apply Now)
- Important badges
- Error states
- Accent elements

**Don't use for**:
- Large background areas (too intense)
- Body text (readability)

### Primary Green (#16A34A)
**Use for**:
- Success states
- Trust indicators
- Secondary CTAs
- Icon accents
- Positive metrics

### Primary Yellow (#FBBF24)
**Use for**:
- Highlights
- Ratings/stars
- Warning states
- Accent gradients

---

## Appendix B: Typography Examples

```css
/* Hero Heading */
.hero-heading {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 3rem; /* Mobile */
  line-height: 1.1;
  letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .hero-heading {
    font-size: 4.5rem; /* Desktop */
  }
}

/* Section Heading */
.section-heading {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 2.25rem; /* Mobile */
  line-height: 1.2;
}

@media (min-width: 768px) {
  .section-heading {
    font-size: 3rem; /* Desktop */
  }
}

/* Body Text */
.body-text {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6;
  color: #525252; /* neutral-600 */
}

/* Button Text */
.button-text {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.01em;
}
```

---

## Appendix C: Component Interaction States

### Buttons
```css
/* Primary Button */
.btn-primary {
  background: #DC2626;
  color: white;
  transition: all 300ms ease;
}

.btn-primary:hover {
  background: #B91C1C;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(220, 38, 38, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Secondary Button */
.btn-secondary {
  background: white;
  color: #DC2626;
  border: 2px solid #DC2626;
  transition: all 300ms ease;
}

.btn-secondary:hover {
  background: #DC2626;
  color: white;
}
```

### Cards
```css
.card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 300ms ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
}
```

---

## Conclusion

This PRD provides a comprehensive blueprint for the Telepost Sacco template. The design significantly improves upon the Qona Sacco reference while maintaining familiar SACCO industry patterns. All specifications adhere to SwiftBuilder's templating rules and best practices.

**Next Steps**: Asset creation and component development (awaiting user approval to proceed).
