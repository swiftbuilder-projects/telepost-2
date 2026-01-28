# Telepost Sacco - Visual Design Reference

## Quick Reference Guide

This document provides visual examples and quick reference for the Telepost Sacco template design system.

---

## Color Palette

### Brand Colors (From Logo)

```
┌─────────────────────────────────────────────────────────┐
│  PRIMARY RED                                            │
│  #DC2626                                                │
│  rgb(220, 38, 38)                                       │
│  Use: Primary CTAs, Important badges, Accents          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PRIMARY GREEN                                          │
│  #16A34A                                                │
│  rgb(22, 163, 74)                                       │
│  Use: Success states, Trust indicators, Secondary CTAs  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PRIMARY YELLOW                                         │
│  #FBBF24                                                │
│  rgb(251, 191, 36)                                      │
│  Use: Highlights, Ratings, Warning states               │
└─────────────────────────────────────────────────────────┘
```

### Neutral Scale

```
#FAFAFA  ░░░░░░░  neutral-50   - Light backgrounds
#F5F5F5  ▒▒▒▒▒▒▒  neutral-100  - Section backgrounds
#E5E5E5  ▓▓▓▓▓▓▓  neutral-200  - Borders, dividers
#D4D4D4  ███████  neutral-300  - Disabled states
#A3A3A3  ███████  neutral-400  - Placeholder text
#737373  ███████  neutral-500  - Secondary text
#525252  ███████  neutral-600  - Body text
#404040  ███████  neutral-700  - Headings
#262626  ███████  neutral-800  - Dark headings
#171717  ███████  neutral-900  - Maximum contrast
```

---

## Typography

### Font Families

**Headings & UI**: Inter (Google Fonts)
```
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
Weights: 400, 500, 600, 700, 800
```

**Body Text**: Lato (Google Fonts)
```
font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
Weights: 400, 700
```

### Type Scale Examples

```
Hero Heading (Mobile)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Your Financial Partner
Together We Grow
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
48px (3rem) / Inter ExtraBold / -2% letter-spacing

Hero Heading (Desktop)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Your Financial Partner
Together We Grow
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
72px (4.5rem) / Inter ExtraBold / -2% letter-spacing

Section Heading
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Products Designed for Your Success
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
36px (2.25rem) mobile, 48px (3rem) desktop / Inter Bold

Card Title
━━━━━━━━━━━━━━━━━━━━━━━━
Development Loan
━━━━━━━━━━━━━━━━━━━━━━━━
24px (1.5rem) / Inter Semibold

Body Text
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Join over 50,000 members building their financial future with Telepost Sacco.
Access affordable loans, competitive savings, and expert financial guidance.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
16px (1rem) / Lato Regular / 1.6 line-height / #525252
```

---

## Component Styling Patterns

### Primary Button

```
┌─────────────────────────────────┐
│     Become a Member    →        │
└─────────────────────────────────┘

Background: #DC2626 (red)
Text: White / Inter Semibold 16px
Padding: 14px 32px
Border Radius: 9999px (fully rounded)
Shadow: 0 4px 6px rgba(0,0,0,0.1)

Hover State:
- Background: #B91C1C (darker red)
- Transform: translateY(-2px)
- Shadow: 0 10px 20px rgba(220,38,38,0.3)
```

### Secondary Button

```
┌─────────────────────────────────┐
│     Explore Products            │
└─────────────────────────────────┘

Background: White
Text: #DC2626 (red) / Inter Semibold 16px
Border: 2px solid #DC2626
Padding: 14px 32px
Border Radius: 9999px

Hover State:
- Background: #DC2626
- Text: White
```

### Product Card

```
┌────────────────────────────────────────────┐
│  ┌──────┐                                  │
│  │ 🏠   │  Development Loan                │
│  └──────┘                                  │
│                                            │
│  Build your dream home with up to          │
│  80% financing                             │
│                                            │
│  ✓ Up to KES 10M                          │
│  ✓ 8% p.a. interest                       │
│  ✓ 15-year repayment                      │
│                                            │
│  [ Learn More → ]                         │
└────────────────────────────────────────────┘

Background: White
Border Radius: 16px (1rem)
Shadow: 0 4px 6px rgba(0,0,0,0.1)
Padding: 32px

Hover State:
- Transform: translateY(-4px)
- Shadow: 0 20px 25px rgba(0,0,0,0.15)
```

### Feature Card (Minimal)

```
┌────────────────────────────────────────────┐
│                                            │
│        ┌──────────┐                        │
│        │  🛡️      │                        │
│        └──────────┘                        │
│                                            │
│        SASRA Regulated                     │
│                                            │
│  Fully licensed and regulated by the       │
│  Sacco Societies Regulatory Authority      │
│  for your peace of mind.                   │
│                                            │
└────────────────────────────────────────────┘

Background: Transparent or neutral-50
Icon: 48px, gradient (red to green)
Title: 20px Inter Semibold
Description: 16px Lato Regular
Padding: 24px
```

### Testimonial Card

```
┌────────────────────────────────────────────┐
│                                            │
│  ⭐⭐⭐⭐⭐                                  │
│                                            │
│  "Telepost Sacco helped me build my        │
│  first home. The process was smooth        │
│  and the rates were unbeatable."           │
│                                            │
│  ┌────┐                                    │
│  │ 👤 │  Jane Wanjiku                      │
│  └────┘  Member since 2018                 │
│                                            │
└────────────────────────────────────────────┘

Background: White
Border Radius: 12px
Shadow: 0 4px 6px rgba(0,0,0,0.1)
Padding: 32px
Quote: 18px Lato Italic
Author: 16px Inter Semibold
Role: 14px Lato Regular / neutral-500
```

---

## Layout Patterns

### Hero Section Layout (Desktop)

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  ┌─────────────────────────┐  ┌──────────────────────────────┐ │
│  │                         │  │                              │ │
│  │  🏆 Trusted Since 1998  │  │                              │ │
│  │                         │  │                              │ │
│  │  Your Financial Partner │  │      [Hero Visual/Image]     │ │
│  │  Together We Grow       │  │                              │ │
│  │                         │  │                              │ │
│  │  Join over 50,000...    │  │                              │ │
│  │                         │  │                              │ │
│  │  [Become a Member]      │  │                              │ │
│  │  [Explore Products]     │  │                              │ │
│  │                         │  │                              │ │
│  │  ┌────┬────┬────┐       │  │                              │ │
│  │  │50K+│KES │25+ │       │  │                              │ │
│  │  │Mem │ 5B │Yrs │       │  │                              │ │
│  │  └────┴────┴────┘       │  │                              │ │
│  │                         │  │                              │ │
│  └─────────────────────────┘  └──────────────────────────────┘ │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### Products Grid (Desktop - Bento Layout)

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  ┌─────────────────────────────────┐  ┌────────────────────┐   │
│  │                                 │  │                    │   │
│  │                                 │  │  Emergency Loan    │   │
│  │   Development Loan              │  │                    │   │
│  │   (Large Featured Card)         │  │  Quick access...   │   │
│  │                                 │  │                    │   │
│  │   [Image]                       │  ├────────────────────┤   │
│  │                                 │  │                    │   │
│  │   Build your dream home...      │  │  School Fees Loan  │   │
│  │                                 │  │                    │   │
│  │   ✓ Up to KES 10M              │  │  Invest in...      │   │
│  │   ✓ 8% p.a. interest           │  │                    │   │
│  │   ✓ 15-year repayment          │  │                    │   │
│  │                                 │  │                    │   │
│  │   [Learn More →]               │  │                    │   │
│  │                                 │  │                    │   │
│  └─────────────────────────────────┘  └────────────────────┘   │
│                                                                  │
│  ┌────────────────────┐  ┌──────────────────────────────────┐  │
│  │                    │  │                                  │  │
│  │  Biashara Plus     │  │  Savings Account                 │  │
│  │                    │  │                                  │  │
│  │  Grow your...      │  │  Earn competitive dividends...   │  │
│  │                    │  │                                  │  │
│  └────────────────────┘  └──────────────────────────────────┘  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Spacing Examples

### Section Padding (Responsive)

```
Mobile (< 768px):
┌────────────────────────────────┐
│ ↕ 48px (py-12)                 │
│ ← 16px                  16px → │
│   Content Area                 │
│                                │
└────────────────────────────────┘

Desktop (≥ 1024px):
┌────────────────────────────────────────────────┐
│ ↕ 96px (py-24)                                 │
│ ← 48px                                  48px → │
│   Content Area                                 │
│                                                │
└────────────────────────────────────────────────┘
```

### Card Spacing

```
┌────────────────────────────────┐
│ ↕ 32px                         │
│ ← 32px              32px →     │
│                                │
│   Icon (48px)                  │
│   ↕ 16px gap                   │
│   Title                        │
│   ↕ 8px gap                    │
│   Description                  │
│                                │
└────────────────────────────────┘
```

---

## Improvements Over Qona Sacco

### Visual Comparison

**Qona Sacco Issues:**
- ❌ Generic system fonts (Arial, Helvetica)
- ❌ Limited color palette
- ❌ Heavy, dated shadows
- ❌ Inconsistent spacing
- ❌ Minimal animations
- ❌ Basic mobile responsiveness

**Telepost Sacco Improvements:**
- ✅ Premium Google Fonts (Inter + Lato)
- ✅ Rich, accessible brand-aligned colors
- ✅ Modern, subtle elevation system
- ✅ Systematic 8px grid spacing
- ✅ Smooth micro-interactions throughout
- ✅ Optimized mobile-first responsive design
- ✅ Interactive loan calculator
- ✅ Better visual hierarchy
- ✅ Glassmorphism and gradient accents
- ✅ Engaging hover states

---

## Accessibility Features

### Color Contrast Ratios

```
✅ PASS - Body text on white
   #525252 on #FFFFFF = 7.5:1 (AAA)

✅ PASS - Primary button
   #FFFFFF on #DC2626 = 5.2:1 (AA)

✅ PASS - Headings
   #262626 on #FFFFFF = 14.8:1 (AAA)

✅ PASS - Secondary text
   #737373 on #FFFFFF = 4.7:1 (AA)
```

### Focus States

```
All interactive elements:
- Visible focus ring: 2px solid #DC2626
- Offset: 2px
- Border radius: matches element
```

---

## Animation Timing

```
Fast (150ms):     Hover color changes, icon rotations
Base (300ms):     Button hovers, card lifts, transitions
Slow (500ms):     Page section reveals, complex animations

Easing: cubic-bezier(0.4, 0, 0.2, 1) - "ease-out"
```

---

## Icon Usage

**Library**: Lucide React (already in SwiftBuilder)

**Common Icons**:
- `Home` - Development loan
- `Zap` - Emergency loan
- `BookOpen` - School fees
- `Briefcase` - Business loan
- `ShieldCheck` - Security/regulation
- `Percent` - Dividends/rates
- `Clock` - Quick processing
- `Smartphone` - Digital banking
- `Users` - Community/members
- `Headphones` - Support
- `Trophy` - Awards
- `Star` - Ratings

**Icon Sizing**:
- Small: 16px (w-4 h-4)
- Medium: 24px (w-6 h-6)
- Large: 48px (w-12 h-12)
- Hero: 64px (w-16 h-16)

---

## Responsive Breakpoint Behavior

### Navbar

```
Mobile (< 1024px):
┌────────────────────────────────┐
│ [Logo]              [☰ Menu]   │
└────────────────────────────────┘

Desktop (≥ 1024px):
┌──────────────────────────────────────────────────────────┐
│ [Logo]  Products  About  Services  Contact  [Login] [Join] │
└──────────────────────────────────────────────────────────┘
```

### Hero Section

```
Mobile (< 768px):
┌────────────────┐
│  Badge         │
│  Title         │
│  Description   │
│  [CTA 1]       │
│  [CTA 2]       │
│  Stats         │
│  [Image]       │
└────────────────┘

Desktop (≥ 768px):
┌─────────────────────────────────┐
│  Text Content  │  Hero Image    │
│  Badge         │                │
│  Title         │                │
│  Description   │                │
│  [CTA 1] [2]   │                │
│  Stats         │                │
└─────────────────────────────────┘
```

### Products Grid

```
Mobile: 1 column (grid-cols-1)
Tablet: 2 columns (md:grid-cols-2)
Desktop: Bento layout (custom grid)
```

---

## Google Fonts Import

```html
<!-- Add to template head -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Lato:wght@400;700&display=swap" rel="stylesheet">
```

```css
/* Tailwind config extension */
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  body: ['Lato', 'system-ui', 'sans-serif'],
}
```

---

## Summary

This visual reference guide complements the main PRD document. Use it as a quick lookup for:
- Color values and usage
- Typography scales and examples
- Component styling patterns
- Layout structures
- Spacing systems
- Responsive behaviors

All specifications adhere to SwiftBuilder templating rules and modern web design best practices.
