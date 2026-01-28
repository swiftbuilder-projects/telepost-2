/**
 * Telepost Sacco Template - TypeScript Interfaces
 * 
 * Complete type definitions for all template content structures
 */

// ============================================================================
// Navigation Types
// ============================================================================

export interface NavMenuItem {
    label: string;
    href: string;
    submenu?: NavMenuItem[];
}

export interface NavbarContent {
    logoText: string;
    logoImage: string;
    menuItems: NavMenuItem[];
    ctaText: string;
    ctaLink: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
}

// ============================================================================
// Hero Section
// ============================================================================

export interface HeroStat {
    value: string;
    label: string;
}

export interface HeroSlide {
    image: string;
    title: string;
    highlightedText?: string;
    description: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    objectPosition?: string;
    align?: 'left' | 'center' | 'right';
    flipImage?: boolean;
}

export interface HeroContent {
    badgeText: string;
    title: string;
    highlightedText?: string;
    description: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    heroImage?: string;
    stats?: HeroStat[];
    slides?: HeroSlide[];
}

// ============================================================================
// Trust Bar / Stats Section
// ============================================================================

export interface Achievement {
    icon: string;
    value: string;
    label: string;
}

export interface TrustBarContent {
    title: string;
    subtitle: string;
    achievements: Achievement[];
}

// ============================================================================
// Products Section
// ============================================================================

export interface ProductFeature {
    text: string;
}

export interface Product {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: string;
    ctaText: string;
    ctaLink: string;
    image?: string;
    category?: 'fosa' | 'bosa';
}

export interface ProductsContent {
    badgeText: string;
    title: string;
    highlightedText?: string;
    description: string;
    products: Product[];
}

// ============================================================================
// Features Section
// ============================================================================

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface FeaturesContent {
    badgeText: string;
    title: string;
    highlightedText?: string;
    description: string;
    features: Feature[];
}

// ============================================================================
// About Introduction Section
// ============================================================================

export interface InfoCard {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    icon: string;
}

export interface AboutIntroContent {
    welcomeTitle: string;
    videoUrl?: string;
    videoThumbnail?: string;
    aboutTitle: string;
    aboutDescription: string;
    infoCards: InfoCard[];
}

// ============================================================================
// Loans & Savings Section
// ============================================================================

export interface CategoryFeature {
    title: string;
    description: string;
}

export interface CategoryTab {
    label: string;
    id: string;
    features: CategoryFeature[];
    ctaText: string;
    ctaLink: string;
}

export interface CircleFeature {
    title: string;
    description: string;
    icon: string;
    color?: string;
}

export interface LoansSavingsContent {
    title: string;
    tabs: CategoryTab[];
    circleFeatures: CircleFeature[];
}

// ============================================================================
// Partners Section
// ============================================================================

export interface Partner {
    name: string;
    logo: string;
}

export interface PartnersContent {
    title: string;
    partners: Partner[];
}

// ============================================================================
// Loan Calculator
// ============================================================================

export interface CalculatorContent {
    title: string;
    description: string;
    defaultAmount: number;
    minAmount: number;
    maxAmount: number;
    defaultTerm: number;
    minTerm: number;
    maxTerm: number;
    interestRate: number;
    ctaText: string;
    ctaLink: string;
}

// ============================================================================
// Testimonials
// ============================================================================

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    rating: number;
    image?: string;
}

export interface TestimonialsContent {
    badgeText: string;
    title: string;
    highlightedText?: string;
    subtitle: string;
    testimonials: Testimonial[];
}

// ============================================================================
// News Section
// ============================================================================

export interface NewsArticle {
    title: string;
    excerpt: string;
    date: string;
    image: string;
    link: string;
}

export interface NewsContent {
    badgeText: string;
    title: string;
    ctaText: string;
    ctaLink: string;
    articles: NewsArticle[];
}

// ============================================================================
// Contact CTA
// ============================================================================

export interface ContactInfo {
    icon: string;
    label: string;
    value: string;
}

export interface ContactCtaContent {
    title: string;
    description: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    contactInfo?: ContactInfo[];
}

// ============================================================================
// Footer
// ============================================================================

export interface FooterLink {
    label: string;
    href: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface FooterContactInfo {
    companyName: string;
    address: string;
    phone: string;
    whatsapp: string;
    poBox: string;
    city: string;
    country: string;
}

export interface NewsletterConfig {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
}

export interface FooterContent {
    logoImage: string;
    tagline: string;
    description: string;
    services: FooterLink[];
    contactInfo: FooterContactInfo;
    socialLinks: SocialLink[];
    copyright: string;
    privacyPolicyLink: string;
    cookiePolicyLink: string;
}

// ============================================================================
// Main Template Content
// ============================================================================

export interface TelepostSaccoContent {
    navbar?: NavbarContent;
    hero?: HeroContent;
    trustBar?: TrustBarContent;
    products?: ProductsContent;
    features?: FeaturesContent;
    calculator?: CalculatorContent;
    testimonials?: TestimonialsContent;
    news?: NewsContent;
    contactCta?: ContactCtaContent;
    aboutIntro?: AboutIntroContent;
    loansSavings?: LoansSavingsContent;
    partners?: PartnersContent;
    whoWeAre?: WhoWeAreContent;
    footer?: FooterContent;
}

// ============================================================================
// Who We Are Page
// ============================================================================

export interface WhoWeAreContent {
    title: string;
    description: string;
    description2?: string;
    image: string;
    history?: {
        title: string;
        description: string;
        stats: Array<{ label: string; value: string }>;
    };
    vision: {
        title: string;
        description: string;
        icon: string;
    };
    mission: {
        title: string;
        description: string;
        icon: string;
    };
    coreValues: {
        title: string;
        description: string;
        icon: string;
    };
    motto?: string;
}

// ============================================================================
// Page-Specific Types
// ============================================================================

export interface PageHero {
    title: string;
    description?: string;
    image?: string;
    breadcrumbs?: Array<{ label: string; href: string }>;
}

export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
    social?: SocialLink[];
}

export interface Timeline {
    year: string;
    event: string;
    description: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

// ============================================================================
// Component Block Types
// ============================================================================

export interface TextInputProps {
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'tel' | 'number';
    required?: boolean;
    error?: string;
    helpText?: string;
    icon?: React.ReactNode;
}

export interface TableColumn {
    key: string;
    label: string;
    sortable?: boolean;
    width?: string;
}

export interface TableProps {
    columns: TableColumn[];
    data: any[];
    sortable?: boolean;
    filterable?: boolean;
    pagination?: boolean;
    rowsPerPage?: number;
    selectable?: boolean;
    expandable?: boolean;
}

export interface AccordionItem {
    title: string;
    content: string | React.ReactNode;
    defaultOpen?: boolean;
}

export interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
    variant?: 'default' | 'bordered' | 'filled';
}

export interface CardProps {
    title: string;
    description?: string;
    image?: string;
    cta?: {
        text: string;
        link: string;
    };
    variant?: 'default' | 'outlined' | 'elevated' | 'glass';
}
