# Component Library Documentation

## Overview

This directory contains the comprehensive component library for the Telepost Sacco template. Each component is designed to be:

- **Reusable**: Can be used across multiple pages
- **Editable**: Integrated with Swiftbuilder Studio via `data-studio-path`
- **Responsive**: Mobile-first with proper breakpoints
- **Accessible**: WCAG 2.1 AA compliant
- **Animated**: Smooth, purposeful motion design

## Component Categories

### 1. Form Components
- `Input.tsx` - Text input with validation
- `Textarea.tsx` - Multi-line text input
- `Select.tsx` - Custom dropdown with search
- `Checkbox.tsx` - Custom styled checkbox
- `Radio.tsx` - Custom styled radio button
- `FormValidation.tsx` - Validation helper

### 2. Data Display
- `Table.tsx` - Data table with sorting/filtering
- `List.tsx` - Various list styles (icon, timeline)
- `Card.tsx` - Multiple card variants
- `Stat.tsx` - Statistic display with animation

### 3. Navigation
- `Navbar.tsx` - Main navigation with mega menu
- `Footer.tsx` - Footer with multiple columns
- `Breadcrumbs.tsx` - Navigation breadcrumbs
- `Pagination.tsx` - Page navigation
- `Tabs.tsx` - Tab navigation

### 4. Feedback
- `Alert.tsx` - Success/error/warning/info alerts
- `Toast.tsx` - Toast notifications
- `Modal.tsx` - Modal dialogs
- `Loader.tsx` - Loading states

### 5. Interactive
- `Accordion.tsx` - Expandable content sections
- `Search.tsx` - Search with dropdown results
- `Filter.tsx` - Filter sidebar
- `Calendar.tsx` - Date picker

### 6. Template-Specific
- `Hero.tsx` - Hero section with stats
- `TrustBar.tsx` - Trust indicators
- `Products.tsx` - Product grid/bento
- `Features.tsx` - Feature showcase
- `Calculator.tsx` - Loan calculator
- `Testimonials.tsx` - Testimonial carousel
- `News.tsx` - News grid
- `ContactCTA.tsx` - Contact call-to-action

## Component Development Guidelines

### File Structure
```tsx
// ComponentName.tsx
'use client';

import React from 'react';
import { ComponentNameProps } from '../types';

const defaultContent: ComponentNameProps = {
  // Defaults
};

export default function ComponentName({ content }: { content?: ComponentNameProps }) {
  const data = content || defaultContent;
  
  return (
    <section data-studio-path="componentName">
      {/* Component content */}
    </section>
  );
}
```

### Styling Principles
- Dark-first design (`bg-[#0A0A0A]`, `text-white`)
- Neon green accents (`#86EFAC`)
- Glassmorphism for cards
- Subtle shadows (`shadow-sm` default)
- Consistent border radius (`rounded-lg`)

### Animation Guidelines
- Use Framer Motion for animations
- GPU-accelerated (transform, opacity)
- 200-350ms duration
- Respect `prefers-reduced-motion`

### Accessibility
- Proper ARIA labels
- Keyboard navigation
- Focus indicators
- Screen reader support
- Color contrast (WCAG AA)

## Component Status

| Component | Status | Priority |
|-----------|--------|----------|
| Navbar | ⏳ Pending | High |
| Hero | ⏳ Pending | High |
| Footer | ⏳ Pending | High |
| Products | ⏳ Pending | High |
| Features | ⏳ Pending | Medium |
| Calculator | ⏳ Pending | Medium |
| Testimonials | ⏳ Pending | Medium |
| News | ⏳ Pending | Low |
| ContactCTA | ⏳ Pending | Low |
| Forms | ⏳ Pending | Medium |
| Tables | ⏳ Pending | Low |
| Cards | ⏳ Pending | Medium |

Legend:
- ⏳ Pending
- 🚧 In Progress
- ✅ Complete
- 🐛 Needs Fix

## Next Steps

1. Start with high-priority components (Navbar, Hero, Footer)
2. Implement motion design system
3. Add dark/light theme support
4. Test responsive behavior
5. Verify Studio integration
