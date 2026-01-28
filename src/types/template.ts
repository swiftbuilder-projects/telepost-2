
export interface TemplateSection {
    id: string;
    type: string;
    [key: string]: any;
}

export interface NavbarProps {
    logoText: string;
    menuItems: { label: string; href: string }[];
    ctaText: string;
    ctaLink: string;
    style?: React.CSSProperties;
}

export interface HeroProps {
    badgeText: string;
    title: string;
    highlightedText: string;
    description: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    style?: React.CSSProperties;
}

export interface SocialProofProps {
    badgeText: string;
    title: string;
    description: string;
    ctaText: string;
    images?: string[]; // Array of image URLs for marquee
    testimonialQuote?: string;
    testimonialAuthor?: string;
    style?: React.CSSProperties;
}

export interface FeatureItem {
    id: string;
    title: string;
    description: string;
    image?: string;
}

export interface FeaturesProps {
    badgeText: string;
    title: string;
    highlightedText: string;
    description: string;
    features: FeatureItem[];
    bentoImages?: string[]; // [metrics, source, access, security]
    style?: React.CSSProperties;
}

export interface IntegrationItem {
    id: string;
    label: string;
    icon?: string; // Icon name from Lucide or Image URL in future
    x?: number;
    y?: number;
}

export interface IntegrationsProps {
    title: string;
    highlightedText: string;
    description: string;
    items?: IntegrationItem[]; // Optional if we stick to hardcoded visuals for now
    style?: React.CSSProperties;
}

export interface FooterProps {
    logoText: string;
    description: string;
    copyrightText: string;
    socialLinks?: { platform: string; url: string }[];
    style?: React.CSSProperties;
}

export interface ModernSaaSContent {
    navbar: NavbarProps;
    hero: HeroProps;
    socialProof: SocialProofProps;
    features: FeaturesProps;
    integrations: IntegrationsProps;
    footer: FooterProps;
}

// Clause Template Interfaces
export interface ClauseNavbarProps {
    logoText: string;
    menuItems: { label: string; href: string }[];
    ctaText: string;
    ctaLink: string;
}

export interface ClauseHeroProps {
    badgeText?: string; // Optional badge text at the top
    title: string;
    highlightedWord: string; // "manage" in yellow highlight
    subtitle: string;
    description?: string; // Hero description paragraph
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    teamAvatars: string[]; // URLs for floating team member avatars
}

export interface ClauseTrustBadgeProps {
    title: string;
    logos: Array<{
        name: string;
        image: string;
    }>;
}

export interface ClauseFeatureCardProps {
    title: string;
    description: string;
    image: string;
    ctaText?: string;
    ctaLink?: string;
}

export interface ClauseFeaturesProps {
    badgeText: string;
    title: string;
    description: string;
    features: ClauseFeatureCardProps[];
}

export interface ClauseIntegrationIcon {
    name: string;
    icon: string; // Icon identifier or image URL
}

export interface ClauseIntegrationsProps {
    title: string;
    description: string;
    icons: ClauseIntegrationIcon[];
}

export interface ClauseTestimonialProps {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
}

export interface ClauseStatsProps {
    stats: Array<{
        value: string;
        label: string;
    }>;
}

export interface ClauseFooterCTAProps {
    title: string;
    highlightedText: string; // "Clause" in lime color
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
}

export interface ClauseFooterProps {
    logoText: string;
    tagline?: string; // Optional tagline under logo
    sections: Array<{
        title: string;
        links: Array<{
            label: string;
            href: string;
        }>;
    }>;
    copyrightText: string;
    socialLinks: Array<{
        platform: string;
        url: string;
    }>;
}

export interface ClauseTemplateContent {
    navbar: ClauseNavbarProps;
    hero: ClauseHeroProps;
    trustBadges: ClauseTrustBadgeProps;
    features: ClauseFeaturesProps;
    integrations: ClauseIntegrationsProps;
    testimonial: ClauseTestimonialProps;
    stats: ClauseStatsProps;
    footerCTA: ClauseFooterCTAProps;
    footer: ClauseFooterProps;
}

// Mikayi Template Interfaces

export interface MikayiNavbarProps {
    logoText: string;
    menuItems: { label: string; href: string }[];
    signInText: string;
    signInLink?: string;
    getStartedText: string;
    getStartedLink?: string;
}

export interface MikayiHeroProps {
    badgeText?: string;
    title: string;
    highlightedText?: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    rating?: number;
    ratingCount?: number;
    statsCards?: Array<{
        label: string;
        value: string;
        isRising?: boolean;
    }>;
}

export interface MikayiLogoStripProps {
    logos: Array<{
        name: string;
        image: string;
    }>;
}

export interface MikayiAboutProps {
    badgeText: string;
    title: string;
    description: string;
}

export interface MikayiFeatureShowcaseProps {
    title: string;
    card1Title: string;
    card1Value: string;
    card2Title: string;
    card2Value: string;
}

export interface MikayiValuesProps {
    title: string;
    subtitle: string;
    description: string;
    values: Array<{
        title: string;
        description: string;
        icon?: string;
    }>;
}

export interface MikayiStatsProps {
    title: string;
    subtitle: string;
    backgroundImage?: string;
    stats?: Array<{
        label: string;
        value: string;
    }>;
}

export interface MikayiFAQProps {
    badgeText: string;
    title: string;
    items: Array<{
        question: string;
        answer: string;
    }>;
}

export interface MikayiFooterProps {
    ctaTitle: string;
    ctaSubtitle: string;
    ctaDescription: string;
    ctaButtonText: string;
    brandName: string;
    sections: Array<{
        title: string;
        links: Array<{
            label: string;
            href: string;
        }>;
    }>;
    bottomLinks: Array<{
        label: string;
        href: string;
    }>;
}

export interface MikayiTemplateContent {
    navbar: MikayiNavbarProps;
    hero: MikayiHeroProps;
    logoStrip: MikayiLogoStripProps;
    about: MikayiAboutProps;
    features: MikayiFeatureShowcaseProps;
    values: MikayiValuesProps;
    stats: MikayiStatsProps;
    faq: MikayiFAQProps;
    footer: MikayiFooterProps;
}

// Gym Watcher Template Interfaces

export interface GymWatcherNavbarProps {
    links: { label: string; href: string }[];
    ctaText: string;
    ctaLink: string;
}

export interface GymWatcherHeroProps {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    media: string;
    videoUrl?: string; // Optional video loop for hero background
}

export interface GymWatcherStatsProps {
    items: { value: string; label: string }[];
}

export interface GymWatcherPricingProps {
    title: string;
    plans: {
        name: string;
        price: string;
        features: string[];
    }[];
}

export interface GymWatcherTestimonialsProps {
    title: string;
    items: {
        name: string;
        quote: string;
        role: string;
    }[];
}

export interface GymWatcherFooterProps {
    copyright: string;
    links: { label: string; href: string }[];
}


export interface GymWatcherFeaturesProps {
    title: string;
    items: {
        title: string;
        description: string;
        icon: string; // Lucide icon name
    }[];
}

export interface GymWatcherEventsProps {
    title: string;
    items: {
        title: string;
        date: string;
        location: string;
        image: string;
    }[];
}

export interface GymWatcherBlogProps {
    title: string;
    articles: {
        title: string;
        excerpt: string;
        image: string;
        readTime: string;
    }[];
}

export interface GymWatcherLogoStripProps {
    logos: {
        name: string;
        image: string; // Or icon name
    }[];
}

export interface GymWatcherVideoSectionProps {
    title: string;
    videoThumbnail: string; // URL for the thumbnail image
    videoUrl?: string; // Optional URL for the video link/modal
}

export interface GymWatcherCommunityCTAProps {
    title: string;
    subtitle: string;
    buttonText: string;
    placeholderText: string;
}

// Re-defining GymWatcherContent to include new props
export interface GymWatcherContent {
    navbar: GymWatcherNavbarProps;
    hero: GymWatcherHeroProps;
    logoStrip: GymWatcherLogoStripProps;
    features: GymWatcherFeaturesProps;
    videoSection: GymWatcherVideoSectionProps;
    stats: GymWatcherStatsProps;
    pricing: GymWatcherPricingProps;
    testimonials: GymWatcherTestimonialsProps;
    events: GymWatcherEventsProps;
    blog: GymWatcherBlogProps;
    communityCTA: GymWatcherCommunityCTAProps;
    footer: GymWatcherFooterProps;
}


// Oceania Template Interfaces

export interface OceaniaNavbarProps {
    logoText: string;
    logoImage?: string;
    menuItems: { label: string; href: string }[];
    ctaText: string;
    ctaLink: string;
}

export interface OceaniaHeroProps {
    badgeText: string;
    title: string;
    highlightedText: string;
    description: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    backgroundImage: string;
}

export interface OceaniaAboutProps {
    badgeText: string;
    title: string;
    description: string;
    mission?: string;
    vision?: string;
    values?: string[];
    purposeTitle: string;
    purposeDescription: string;
}

export interface OceaniaServiceItem {
    id: string;
    title: string;
    description: string;
    icon?: string;
    image?: string;
}

export interface OceaniaServicesProps {
    badgeText: string;
    title: string;
    description: string;
    services: OceaniaServiceItem[];
}

export interface OceaniaEngagementArea {
    title: string;
    content: string;
    image?: string;
}

export interface OceaniaEngagementProps {
    badgeText: string;
    title: string;
    description: string;
    counties: OceaniaEngagementArea;
    parliament: OceaniaEngagementArea;
}

export interface OceaniaEthicsProps {
    confidentialityTitle: string;
    confidentialityContent: string;
    ethicsTitle: string;
    ethicsContent: string;
}

export interface OceaniaLeadershipProps {
    name: string;
    role: string;
    bio: string;
    image: string;
    message?: string;
}

export interface OceaniaCaseStudy {
    id: string;
    title: string;
    client: string;
    objective: string;
    outcome: string;
    impact: string;
    image?: string;
}

export interface OceaniaProjectsProps {
    badgeText: string;
    title: string;
    description: string;
    caseStudies: OceaniaCaseStudy[];
}

export interface OceaniaCareersProps {
    badgeText: string;
    title: string;
    description: string;
    positions: string[];
    benefits: string[];
}

export interface OceaniaFooterProps {
    logoText: string;
    description: string;
    contactInfo: {
        phone: string;
        email: string;
        address: string;
    };
    links: {
        title: string;
        items: { label: string; href: string }[];
    }[];
    socialLinks: { platform: string; url: string; icon: string }[];
    copyrightText: string;
}

export interface OceaniaTemplateContent {
    navbar: OceaniaNavbarProps;
    hero: OceaniaHeroProps;
    about: OceaniaAboutProps;
    services: OceaniaServicesProps;
    engagement: OceaniaEngagementProps;
    projects: OceaniaProjectsProps;
    ethics: OceaniaEthicsProps;
    leadership: OceaniaLeadershipProps;
    careers: OceaniaCareersProps;
    footer: OceaniaFooterProps;
}
