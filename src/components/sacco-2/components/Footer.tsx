import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { FooterContent } from '../types';

const defaultContent: FooterContent = {
    logoImage: '/images/templates/telepost-sacco/logo.png',
    tagline: 'Together We Grow',
    description: 'Empowering our members through accessible financial services and fostering economic growth since 1969.',
    services: [
        { label: 'Long Terms Loan Facilities', href: '/products/long-term-loans' },
        { label: 'Short Terms Loan Facilities', href: '/products/short-term-loans' },
        { label: 'Savings Products', href: '/products/savings' },
        { label: 'Deposit Product', href: '/products/deposits' },
        { label: 'Our Services', href: '/products/services' },
    ],
    aboutLinks: [
        { label: 'Who We Are', href: '/about/who-we-are' },
        { label: 'Our History', href: '/about/history' },
        { label: 'Our Team', href: '/about/team' },
        { label: 'CSR', href: '/about/csr' },
        { label: 'Gallery/Awards', href: '/about/gallery' },
    ],
    infoLinks: [
        { label: 'News', href: '/news' },
        { label: 'Downloads', href: '/downloads' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Tenders', href: '/tenders' },
        { label: 'Careers', href: '/careers' },
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
    copyright: '© Telepost Sacco Society LTD 1969 - 2026 . All Right Reserved.',
    privacyPolicyLink: '#',
    cookiePolicyLink: '#'
};

const socialIcons: Record<string, any> = {
    facebook: Facebook,
    twitter: Twitter,
    youtube: Youtube,
    instagram: Instagram,
};

export default function Footer({ content }: { content?: FooterContent }) {
    const data = content || defaultContent;

    // Backward compatibility fallbacks for old content structure
    const logoImage = data.logoImage || '/images/templates/telepost-sacco/logo.png';
    const services = data.services || data.products || [];
    const aboutLinks = data.aboutLinks || data.company || [];
    const infoLinks = data.infoLinks || data.resources || [];
    const privacyLink = data.privacyPolicyLink || (data.legal ? data.legal.find(l => l.label.includes('Privacy'))?.href : '#');
    const cookieLink = data.cookiePolicyLink || (data.legal ? data.legal.find(l => l.label.includes('Cookie'))?.href : '#');

    return (
        <footer className="bg-[#111827] pt-16 border-t border-gray-800 font-nunito" data-studio-path="footer">
            {/* Full Width Container */}
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">

                    {/* Column 1: Brand & Socials */}
                    <div className="space-y-6">
                        <div className="flex flex-col items-start">
                            <Image
                                src={logoImage}
                                alt="Telepost Sacco"
                                width={120}
                                height={120}
                                className="w-28 h-auto object-contain"
                            />
                            <p className="mt-4 text-[#008000] font-bold italic text-sm tracking-wide">
                                {data.tagline}
                            </p>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs" data-studio-path="footer.description">
                            {data.description}
                        </p>
                        {/* Social Links Moved Here */}
                        <div className="flex gap-3 pt-4">
                            {data.socialLinks.map((social, index) => {
                                const Icon = socialIcons[social.icon] || Facebook;
                                return (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-gray-800 shadow-sm flex items-center justify-center text-white hover:bg-[#008000] transition-all duration-300"
                                        data-studio-path={`footer.socialLinks.${index}.url`}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Column 2: Products & Services */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-extrabold text-white mb-6 flex items-center gap-2 border-l-4 border-[#008000] pl-3 h-6">
                            Products & Services
                        </h3>
                        <ul className="space-y-3">
                            {services?.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.href}
                                        className="text-gray-400 hover:text-[#008000] text-sm flex items-center gap-2 group transition-colors"
                                        data-studio-path={`footer.services.${index}.label`}
                                    >
                                        <ChevronRight className="w-3 h-3 text-[#ff0000] group-hover:translate-x-1 transition-transform" />
                                        {service.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: About Us */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-extrabold text-white mb-6 flex items-center gap-2 border-l-4 border-[#ff0000] pl-3 h-6">
                            About Us
                        </h3>
                        <ul className="space-y-3">
                            {aboutLinks?.slice(0, 5).map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#008000] text-sm flex items-center gap-2 group transition-colors"
                                        data-studio-path={`footer.aboutLinks.${index}.label`}
                                    >
                                        <ChevronRight className="w-3 h-3 text-[#ff0000] group-hover:translate-x-1 transition-transform" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Info Center */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-extrabold text-white mb-6 flex items-center gap-2 border-l-4 border-[#008000] pl-3 h-6">
                            Info Center
                        </h3>
                        <ul className="space-y-3">
                            {infoLinks?.slice(0, 5).map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#008000] text-sm flex items-center gap-2 group transition-colors"
                                        data-studio-path={`footer.infoLinks.${index}.label`}
                                    >
                                        <ChevronRight className="w-3 h-3 text-[#ff0000] group-hover:translate-x-1 transition-transform" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 5: Contacts */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-extrabold text-white mb-6 flex items-center gap-2 border-l-4 border-[#fff503] pl-3 h-6">
                            Contacts
                        </h3>
                        <div className="space-y-5 text-gray-400 text-sm">
                            <div className="group">
                                <span className="text-white font-bold block mb-1">Address:</span>
                                <div className="flex gap-3 items-start">
                                    <MapPin className="w-5 h-5 text-[#008000] flex-shrink-0 mt-0.5" />
                                    <div data-studio-path="footer.contactInfo.address">{data.contactInfo.address}</div>
                                </div>
                            </div>

                            <div className="group">
                                <span className="text-white font-bold block mb-1">Postal Address:</span>
                                <p data-studio-path="footer.contactInfo.poBox">{data.contactInfo.poBox}</p>
                                <p data-studio-path="footer.contactInfo.city">{data.contactInfo.city}, {data.contactInfo.country}</p>
                            </div>

                            <div className="group">
                                <span className="text-white font-bold block mb-1">Phone:</span>
                                <div className="flex gap-3 items-center">
                                    <Phone className="w-5 h-5 text-[#008000] flex-shrink-0" />
                                    <div data-studio-path="footer.contactInfo.phone">{data.contactInfo.phone}</div>
                                </div>
                            </div>

                            <div className="group">
                                <span className="text-white font-bold block mb-1">Email:</span>
                                <div className="flex gap-3 items-center">
                                    <Mail className="w-5 h-5 text-[#008000] flex-shrink-0" />
                                    <div data-studio-path="footer.contactInfo.whatsapp">info@telepostsacco.co.ke</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 6: Facebook Feeds (COMMENTED OUT) */}
                    {/*
                    <div className="space-y-6">
                        <h3 className="text-lg font-extrabold text-white mb-6 flex items-center gap-2 border-l-4 border-[#ff0000] pl-3 h-6">
                            Facebook Feeds
                        </h3>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                    <Facebook className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-white text-sm font-bold">Telepost Sacco</p>
                                    <p className="text-xs text-gray-400">2 hours ago</p>
                                </div>
                            </div>
                            <div className="h-24 bg-gray-700/50 rounded mb-3 w-full animate-pulse" />
                            <p className="text-xs text-gray-400">Follow us on social media for updates.</p>
                        </div>
                    </div>
                    */}

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 py-8 bg-black/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-500">
                        <p className="text-center" data-studio-path="footer.copyright">
                            {data.copyright} Powered by <span className="font-bold text-gray-200">Telepost Sacco.</span>
                        </p>
                        <div className="flex gap-6">
                            <a href={privacyLink} className="hover:text-[#008000] transition-colors">Privacy policy</a>
                            <a href={cookieLink} className="hover:text-[#008000] transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
