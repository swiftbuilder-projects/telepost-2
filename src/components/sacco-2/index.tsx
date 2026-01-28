/**
 * Telepost Sacco Template - Main Component
 * 
 * Multi-page template for financial services / SACCO organizations
 * Featuring dark-first design, neon accents, and comprehensive component library
 */

'use client';

import React from 'react';
import { TelepostSaccoContent } from './types';

// Homepage Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Products from './components/Products';
import AboutIntro from './components/AboutIntro';
import LoansSavings from './components/LoansSavings';
import Partners from './components/Partners';
import Features from './components/Features';
import Calculator from './components/Calculator';
import Testimonials from './components/Testimonials';
import News from './components/News';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

// Page Templates
import PageHero from './components/PageHero';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ProductDetail from './components/ProductDetail';
import NewsDetail from './components/NewsDetail';
import WhoWeAre from './components/WhoWeAre';

// For accessing current page in Studio
import { useStudio } from '@/components/studio/StudioContextCore';

const defaultContent: TelepostSaccoContent = {
    navbar: {
        logoText: 'TELEPOST SACCO',
        logoImage: '/images/templates/telepost-sacco/logo.png',
        menuItems: [
            { label: 'Home', href: '/' },
            {
                label: 'Products',
                href: '/products',
                submenu: [
                    { label: 'Development Loan', href: '/products/development-loan' },
                    { label: 'Emergency Loan', href: '/products/emergency-loan' },
                    { label: 'School Fees Loan', href: '/products/school-fees' },
                    { label: 'Biashara Plus', href: '/products/biashara-plus' },
                    { label: 'Savings Accounts', href: '/products/savings' },
                ],
            },
            {
                label: 'About',
                href: '/about',
                submenu: [
                    { label: 'Who We Are', href: '/about/who-we-are' },
                    { label: 'Our Team', href: '/about/team' },
                    { label: 'Awards', href: '/about/awards' },
                ],
            },
            { label: 'Resources', href: '/resources' },
            { label: 'News', href: '/news' },
            { label: 'Contact', href: '/contact' },
        ],
        ctaText: 'Member Login',
        ctaLink: '/portal/login',
        secondaryCtaText: 'Join Us',
        secondaryCtaLink: '/join',
    },
    hero: {
        badgeText: 'ESTABLISHED 1969',
        title: 'TELEPOST SACCO',
        highlightedText: 'TOGETHER WE GROW',
        description:
            'Join thousands of members building their financial future with Telepost Sacco. Access affordable loans, competitive savings, and expert financial guidance.',
        primaryCtaText: 'Become a Member',
        primaryCtaLink: '#join',
        secondaryCtaText: 'Explore Products',
        secondaryCtaLink: '#products',
        slides: [
            {
                image: '/images/templates/telepost-sacco/hero-agm-v2.png',
                title: 'WELCOME TO TELEPOST SACCO',
                highlightedText: 'YOUR TRUSTED FINANCIAL PARTNER',
                description: 'Building a stronger future together through cooperative excellence and member-focused growth.',
                primaryCtaText: 'LEARN MORE',
                primaryCtaLink: '#about',
                objectPosition: 'top center'
            },
            {
                image: '/images/templates/telepost-sacco/hero-mobile-african.png',
                title: 'MOBILE BANKING',
                highlightedText: 'BANKING AT YOUR FINGERTIPS',
                description: 'Experience seamless financial control with our secure mobile app. Transact anytime, anywhere.',
                primaryCtaText: 'DOWNLOAD NOW',
                primaryCtaLink: '#apps',
                align: 'left'
            },
            {
                image: '/images/templates/telepost-sacco/hero-construction-v2.png',
                title: 'SECURE ASSET LOANS',
                highlightedText: 'INVEST IN YOUR FUTURE',
                description: 'Get the financial support you need for your construction projects and property investments.',
                primaryCtaText: 'APPLY FOR LOAN',
                primaryCtaLink: '#loans'
            }
        ],
        stats: [
            { value: '4,300+', label: 'Active Members' },
            { value: 'KES 2B+', label: 'Assets Under Management' },
            { value: '55+', label: 'Years of Service' },
        ],
    },
    trustBar: {
        title: 'RECOGNIZED EXCELLENCE',
        subtitle: 'Award-winning SACCO trusted by thousands',
        achievements: [
            { icon: 'trophy', value: 'Top 10', label: 'SACCO in Kenya' },
            { icon: 'shield', value: 'SASRA', label: 'Regulated' },
            { icon: 'users', value: '50K+', label: 'Members' },
            { icon: 'star', value: '4.8/5', label: 'Member Rating' },
        ],
    },
    products: {
        badgeText: 'FINANCIAL SOLUTIONS',
        title: 'Products Designed for',
        highlightedText: 'Your Success',
        description: 'From affordable loans to competitive savings, we have a product for every stage of your financial journey.',
        products: [
            {
                id: 'loan-facilities',
                title: 'SACCO LOAN FACILITIES',
                description: 'Our loan facilities are designed to meet the financial needs of members, such as personal loans, business loans, asset financing, emergency loans, and education loans, among others.',
                features: [],
                icon: 'handshake',
                ctaText: 'READ MORE',
                ctaLink: '#loans',
            },
            {
                id: 'savings-products',
                title: 'TELEPOST SAVINGS PRODUCTS',
                description: 'Telepost Sacco offers a range of savings products tailored to meet the diverse needs of our members. From Holiday savings to Junior accounts, we help you achieve your goals.',
                features: [],
                icon: 'piggy',
                ctaText: 'READ MORE',
                ctaLink: '#savings',
            },
            {
                id: 'banking-services',
                title: 'SACCO BANKING SERVICES',
                description: 'By using our mobile banking, members can conveniently access various services through digital transactions like mobile banking apps, USSD or face-to-face interactions.',
                features: [],
                icon: 'card',
                ctaText: 'READ MORE',
                ctaLink: '#banking',
            },
        ],
    },
    aboutIntro: {
        welcomeTitle: 'WELCOME TO TELEPOST SACCO!',
        aboutTitle: 'ABOUT US',
        aboutDescription: "Telepost Sacco (formerly Posta Sacco) started in 1969 as a welfare organization. It was registered formally in July 1969 with the agenda of supporting its members. We are ready to serve you with affordable loans that will empower you economically, socially and financially.",
        videoThumbnail: '/images/templates/sacco-2/video-thumbnail.png',
        videoUrl: 'https://www.youtube.com/@telepostsacco7699',
        infoCards: [
            {
                title: 'How To Join Us?',
                description: 'Submit Required Documents.',
                ctaText: 'Read More',
                ctaLink: '#join',
                icon: 'users'
            },
            {
                title: 'Come Visit Us!',
                description: 'Visit us at City Square Post Office, 5th Floor, Haile - Selassie.',
                ctaText: 'Read More',
                ctaLink: '#contact',
                icon: 'map-pin'
            }
        ]
    },
    loansSavings: {
        title: 'LOANS & SAVINGS.',
        tabs: [
            {
                label: 'SAVINGS PRODUCTS',
                id: 'savings',
                ctaText: 'READ MORE',
                ctaLink: '#savings',
                features: [
                    { title: 'Deposit Savings Product', description: 'This savings help members to save secure loans at 3 times or 5 times.' },
                    { title: 'Share capital', description: 'Every society member is required to own the society by holding a certain number of shares.' },
                    { title: 'Holiday Account', description: 'This account helps members save up for holidays and festive seasons.' }
                ]
            },
            {
                label: 'LOANS PRODUCTS',
                id: 'loans',
                ctaText: 'READ MORE',
                ctaLink: '#loans',
                features: [
                    { title: 'Development Loan', description: 'Long-term loan for investment and asset acquisition.' },
                    { title: 'Emergency Loan', description: 'Quick funds for unforeseen urgent needs.' },
                    { title: 'School Fees Loan', description: 'Support for your children\'s education expenses.' }
                ]
            }
        ],
        circleFeatures: [
            { title: 'Core Values', description: '• Respect\n• Teamwork\n• Integrity\n• Quality service\n• Innovation and Creativity', icon: 'heart' },
            { title: 'Mobile Banking', description: '1. Dial *882# on your mobile device.\n2. Select the account type you wish to check balance i.e. for savings account enter 1 or enter 3 to check loan Balance.\n3. Enter your Mobile Banking PIN and press send.', icon: 'phone' },
            { title: 'Our Membership', description: 'We currently draw 4,359 members from organizations including Telkom Kenya, Postal Corporation, Multimedia University, Prime Telecoms, Pensioners, and more. Spouses and dependents are also welcome.', icon: 'users' },
            { title: 'FOSA Services', description: 'Front Office Service Activity: Access instant banking services including salary processing, ATM services, and over-the-counter transactions for your convenience.', icon: 'landmark' },
            { title: 'BOSA Services', description: 'Back Office Service Activity: Long-term dedicated savings and credit facilities designed to help you build lasting wealth and achieve major life milestones.', icon: 'piggy' },
            { title: 'Financial Education', description: 'Telepost offer financial literacy programs and counseling services to empower members with the knowledge and skills to make informed financial decisions.', icon: 'book' }
        ]
    },
    partners: {
        title: 'Our Partners',
        partners: [
            { name: 'SASRA', logo: 'https://telepostsacco.co.ke/wp-content/uploads/2017/08/SASRA.png' },
            { name: 'Co-op Bank', logo: 'https://telepostsacco.co.ke/wp-content/uploads/2017/08/coop.png' },
            { name: 'KRA', logo: 'https://telepostsacco.co.ke/wp-content/uploads/2017/08/KRA-1.png' },
            { name: 'KUSCCO', logo: 'https://telepostsacco.co.ke/wp-content/uploads/2017/08/KUSCCO.png' },
            { name: 'KCB Bank', logo: 'https://telepostsacco.co.ke/wp-content/uploads/2017/08/kcb.png' },
            { name: 'Telkom', logo: 'https://telepostsacco.co.ke/wp-content/uploads/2017/08/telkom2.gif' },
        ]
    },
    footer: {
        logoImage: '/images/templates/telepost-sacco/logo.png',
        tagline: 'Together We Grow',
        description: 'Empowering our members through accessible financial services and fostering economic growth since 1969.',
        services: [
            { label: 'Deposit Savings', href: '#savings' },
            { label: 'Development Loans', href: '#loans' },
            { label: 'Emergency Loans', href: '#loans' },
            { label: 'FOSA Services', href: '#fosa' },
            { label: 'BOSA Services', href: '#bosa' },
            { label: 'Mobile Banking', href: '#banking' },
        ],
        contactInfo: {
            companyName: 'Telepost Sacco Society Limited',
            address: 'City Square Post Office, 5th Floor, Haile - Selassie.',
            phone: '0205029200',
            whatsapp: '+254794582588',
            poBox: 'P.O BOX 49557-00100',
            city: 'NAIROBI',
            country: 'Nairobi Kenya.'
        },
        socialLinks: [
            { platform: 'Facebook', url: 'https://www.facebook.com/TelepostS', icon: 'facebook' },
            { platform: 'Twitter', url: 'https://twitter.com/TelepostS', icon: 'twitter' },
            { platform: 'YouTube', url: 'https://www.youtube.com/@telepostsacco7699', icon: 'youtube' },
            { platform: 'Instagram', url: 'https://www.instagram.com/TelepostSacco', icon: 'instagram' },
        ],
        copyright: '© Telepost Sacco Society LTD 1969 - 2025 . All Right Reserved.',
        privacyPolicyLink: '#',
        cookiePolicyLink: '#'
    },
    whoWeAre: {
        title: 'Introduction',
        description: "Telepost Sacco (formerly Posta Sacco) started in 1969 as a welfare organization for the subordinate staff of the then Kenya Posts and Telecommunications Corporation (KP&TC).",
        description2: "These staff compelled by the desire to achieve economic dreams came together to assemble resources (Merry-go-rounds) to assist one another. Their focus for membership encompassed the then East Africa Community Region.\n\nSince its inception, the Sacco has grown and became one of the leading organizations in the industry in terms of membership and share capital. At the beginning, total membership was below Ksh. 100 with a minimum monthly contribution of Ksh. 20 and registration fee of Ksh. 5.\n\nCurrently, the minimum monthly contributions are Ksh. 2500 for Normal Shares (Deposits) and Kshs. 500 for education shares and Ksh 300 for Benevolent fund.\n\nThe Sacco assumed its new name in 1999 following the re-organization of the then Kenya Posts and Telecommunications Corporation in to: – Communications Commission of Kenya, Telkom Kenya Ltd and Postal Corporation of Kenya.",
        image: '/images/templates/telepost-sacco/about_us.jpg',
        vision: {
            title: 'Vision',
            description: 'To be the preferred SACCO that provide sound financial solution.',
            icon: 'eye'
        },
        mission: {
            title: 'Mission',
            description: 'To provide effective financial solution through saving mobilization product innovation , modern technology and empowered workforce to enhance shareholder value.',
            icon: 'target'
        },
        coreValues: {
            title: 'Core Values',
            description: 'Respect\nTeamwork\nIntegrity\nQuality service\nInnovation and Creativity',
            icon: 'handshake'
        },
        motto: 'Together We Grow'
    }
};

import { useSearchParams } from 'next/navigation';

// ... (imports)

export default function Sacco2Template({
    content,
}: {
    content?: TelepostSaccoContent;
}) {
    const data = content || defaultContent;
    const searchParams = useSearchParams();

    // Determine current page:
    // 1. Studio Context (highest priority)
    // 2. URL Query Param (?page=...)
    // 3. Default to 'home'
    let currentPage = 'home';

    // Check URL params first
    const pageParam = searchParams.get('page');
    if (pageParam) currentPage = pageParam;

    // Check Studio Context
    try {
        const studio = useStudio();
        if (studio.pageId) currentPage = studio.pageId;
    } catch {
        // Not in Studio context, ignore
    }

    // Render different pages based on current page
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return (
                    <>
                        <Hero content={data.hero} />
                        {/* <TrustBar content={data.trustBar} /> */}
                        <Products content={data.products} />
                        <AboutIntro content={data.aboutIntro} />
                        <LoansSavings content={data.loansSavings} />
                        <Partners content={data.partners} />
                        {/* <Features content={data.features} /> */}
                        {/* <Calculator content={data.calculator} /> */}
                        {/* <Testimonials content={data.testimonials} /> */}
                        {/* <News content={data.news} /> */}
                        {/* <ContactCTA content={data.contactCta} /> */}
                    </>
                );

            case 'about':
                return (
                    <>
                        <PageHero content={{
                            title: 'About Telepost Sacco',
                            description: 'Building financial futures for our members since 1969',
                            breadcrumbs: [
                                { label: 'Home', href: '/' },
                                { label: 'About Us', href: '/about' }
                            ]
                        }} />
                        <AboutPage content={{
                            mission: 'To empower our members through accessible financial services and foster economic growth in our community.',
                            vision: 'To be the leading SACCO in Kenya, recognized for innovation, member satisfaction, and sustainable growth.',
                            values: ['Integrity', 'Member-First', 'Innovation', 'Transparency', 'Community', 'Excellence'],
                            stats: [
                                { value: '4,300+', label: 'Active Members' },
                                { value: 'KES 2B+', label: 'Assets' },
                                { value: '55+', label: 'Years' },
                                { value: '98%', label: 'Satisfaction' }
                            ],
                            history: [
                                { year: '1969', event: 'Founded', description: 'Telepost Sacco was established to serve postal workers' },
                                { year: '2005', event: 'Expansion', description: 'Opened membership to the general public' },
                                { year: '2015', event: 'Digital Transformation', description: 'Launched mobile banking platform' },
                                { year: '2023', event: 'Award Winner', description: 'Named Top 10 SACCO in Kenya' }
                            ],
                            team: []
                        }} />
                    </>
                );

            case 'about-who-we-are':
                return (
                    <>
                        <PageHero content={{
                            title: 'Who We Are',
                            description: 'Our heritage, vision, and the values that drive us.',
                            breadcrumbs: [
                                { label: 'Home', href: '/' },
                                { label: 'About', href: '/about' },
                                { label: 'Who We Are', href: '/about/who-we-are' }
                            ]
                        }} />
                        <WhoWeAre content={data.whoWeAre} />
                    </>
                );

            case 'contact':
                return (
                    <>
                        <PageHero content={{
                            title: 'Contact Us',
                            description: 'Get in touch with our team',
                            breadcrumbs: [
                                { label: 'Home', href: '/' },
                                { label: 'Contact', href: '/contact' }
                            ]
                        }} />
                        <ContactPage content={{
                            offices: [
                                {
                                    name: 'Head Office',
                                    address: 'Telepost House, Kenyatta Avenue, Nairobi',
                                    phone: '+254 700 000 000',
                                    email: 'info@telepostsacco.co.ke',
                                    hours: 'Mon-Fri: 8AM-5PM, Sat: 9AM-1PM'
                                },
                                {
                                    name: 'Westlands Branch',
                                    address: 'Westlands Square, Nairobi',
                                    phone: '+254 700 000 001',
                                    email: 'westlands@telepostsacco.co.ke',
                                    hours: 'Mon-Fri: 8AM-5PM'
                                }
                            ]
                        }} />
                    </>
                );

            case 'product-development':
                return (
                    <>
                        <PageHero content={{
                            title: 'Development Loan',
                            breadcrumbs: [
                                { label: 'Home', href: '/' },
                                { label: 'Products', href: '/products' },
                                { label: 'Development Loan', href: '/products/development-loan' }
                            ]
                        }} />
                        <ProductDetail content={{
                            title: 'Development Loan',
                            description: 'Build your dream home with our affordable development loan. Get up to 80% financing with competitive interest rates and flexible repayment terms.',
                            features: [
                                'Up to KES 10 million financing',
                                '8% per annum interest rate',
                                'Up to 15 years repayment period',
                                'No hidden charges',
                                'Free property valuation'
                            ],
                            benefits: [
                                'Build or buy your dream home',
                                'Flexible repayment schedule',
                                'Competitive interest rates',
                                'Quick approval process',
                                'Expert financial guidance'
                            ],
                            requirements: [
                                'Active SACCO membership (6+ months)',
                                'Minimum savings of KES 100,000',
                                'Proof of income',
                                'Land title deed',
                                'Building plan approval'
                            ],
                            interestRate: '8% p.a.',
                            maxAmount: 'KES 10M',
                            repaymentPeriod: 'Up to 15 years',
                            ctaText: 'Apply for Development Loan',
                            ctaLink: '/apply'
                        }} />
                    </>
                );

            case 'product-emergency':
                return (
                    <>
                        <PageHero content={{
                            title: 'Emergency Loan',
                            breadcrumbs: [
                                { label: 'Home', href: '/' },
                                { label: 'Products', href: '/products' },
                                { label: 'Emergency Loan', href: '/products/emergency-loan' }
                            ]
                        }} />
                        <ProductDetail content={{
                            title: 'Emergency Loan',
                            description: 'Quick access to funds when you need them most. Get instant approval for emergency situations.',
                            features: [
                                'Instant approval',
                                'Up to 3x your deposits',
                                'Flexible repayment (1-12 months)',
                                'Minimal documentation',
                                'Same-day disbursement'
                            ],
                            benefits: [
                                'Quick access to cash',
                                'No lengthy approval process',
                                'Competitive rates',
                                'Flexible terms',
                                '24/7 application'
                            ],
                            requirements: [
                                'Active membership',
                                'Minimum 3 months savings',
                                'Valid ID',
                                'Guarantor (for amounts over KES 100K)'
                            ],
                            interestRate: '12% p.a.',
                            maxAmount: '3x Deposits',
                            repaymentPeriod: '1-12 months',
                            ctaText: 'Apply for Emergency Loan',
                            ctaLink: '/apply'
                        }} />
                    </>
                );

            case 'news-article':
                return (
                    <>
                        <NewsDetail content={{
                            title: 'Annual General Meeting 2026',
                            date: '2026-02-01',
                            author: 'Communications Team',
                            category: 'Events',
                            image: '/images/templates/telepost-sacco/news-agm.png',
                            content: `
                                <p>We are pleased to invite all members to our Annual General Meeting scheduled for March 15th, 2026.</p>
                                <p>The AGM will be held at the Kenyatta International Convention Centre (KICC) starting at 9:00 AM.</p>
                                <h3>Agenda</h3>
                                <ul>
                                    <li>Review of 2025 performance</li>
                                    <li>Financial statements presentation</li>
                                    <li>Election of new board members</li>
                                    <li>Dividend declaration</li>
                                    <li>Strategic plan for 2026-2028</li>
                                </ul>
                                <p>All members are encouraged to attend and participate in shaping the future of our SACCO.</p>
                            `
                        }} />
                    </>
                );

            default:
                // Default to homepage for unknown pages
                return (
                    <>
                        <Hero content={data.hero} />
                        <TrustBar content={data.trustBar} />
                        <Products content={data.products} />
                        <Features content={data.features} />
                        <Calculator content={data.calculator} />
                        <Testimonials content={data.testimonials} />
                        <News content={data.news} />
                        <ContactCTA content={data.contactCta} />
                    </>
                );
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            {/* Navbar - Always visible */}
            <Navbar content={data.navbar} />

            {/* Page Content - Changes based on current page */}
            {renderPage()}

            {/* Footer - Always visible */}
            <Footer content={data.footer} />
        </div>
    );
}
