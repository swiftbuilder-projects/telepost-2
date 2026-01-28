# Reusable Section Components

This directory contains reusable section components that can be used across multiple templates in the SwiftBuilder platform.

## ContactSection

A fully customizable contact form component with multiple layout options and styling variants.

### Features

- **Multiple Layouts**: `side-by-side`, `form-only`, or `centered`
- **Dark/Light Variants**: Adapts to your template's color scheme
- **Configurable Form Fields**: Define custom fields with icons, types, and validation
- **Contact Info Cards**: Optional info cards (email, phone, location, response time)
- **Fully Editable**: All content editable via `data-studio-path` attributes
- **Responsive**: Mobile-first design with smooth animations

### Usage

```tsx
import { ContactSection } from "@/components/sections";

// In your template
<ContactSection content={{
    badge: "GET IN TOUCH",
    title: "Let's Connect",
    description: "Ready to get started? Reach out to our team.",
    submitButtonText: "Send Message",
    variant: "dark", // or "light"
    layout: "side-by-side", // or "form-only" or "centered"
    formFields: [
        { 
            name: "name", 
            label: "Full Name", 
            type: "text", 
            placeholder: "John Doe", 
            required: true, 
            icon: "user" 
        },
        { 
            name: "email", 
            label: "Email", 
            type: "email", 
            placeholder: "john@example.com", 
            required: true, 
            icon: "email" 
        },
        { 
            name: "message", 
            label: "Message", 
            type: "textarea", 
            placeholder: "Your message...", 
            required: true 
        }
    ],
    contactInfo: [
        { icon: "email", label: "Email", value: "hello@example.com" },
        { icon: "phone", label: "Phone", value: "+1 234 567 8900" },
        { icon: "location", label: "Location", value: "San Francisco, CA" },
        { icon: "time", label: "Response Time", value: "Within 24 hours" }
    ]
}} />
```

### Props

```typescript
interface ContactSectionProps {
    // Header
    badge?: string;
    title: string;
    description: string;
    
    // Form
    formFields?: ContactFormField[];
    submitButtonText: string;
    
    // Contact Info Cards (optional)
    contactInfo?: ContactInfoCard[];
    
    // Styling
    variant?: "dark" | "light";
    layout?: "side-by-side" | "form-only" | "centered";
    accentColor?: string;
}

interface ContactFormField {
    name: string;
    label: string;
    type: "text" | "email" | "tel" | "textarea";
    placeholder: string;
    required?: boolean;
    icon?: "user" | "email" | "phone" | "building" | "message";
}

interface ContactInfoCard {
    icon: "email" | "phone" | "location" | "time";
    label: string;
    value: string;
}
```

### Examples

#### Dark Variant with Side-by-Side Layout
```tsx
<ContactSection content={{
    variant: "dark",
    layout: "side-by-side",
    // ... other props
}} />
```

#### Light Variant with Form Only
```tsx
<ContactSection content={{
    variant: "light",
    layout: "form-only",
    // ... other props
}} />
```

#### Centered Layout
```tsx
<ContactSection content={{
    layout: "centered",
    // ... other props
}} />
```

## Adding New Reusable Components

When creating new reusable section components:

1. Create the component file in `/src/components/sections/`
2. Export it from `/src/components/sections/index.ts`
3. Ensure all content is editable via `data-studio-path` attributes
4. Support both dark and light variants
5. Make it responsive
6. Document usage in this README
