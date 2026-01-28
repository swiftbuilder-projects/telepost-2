import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { FooterContent } from '../types';

const defaultContent: FooterContent = {
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

    return (
        <footer className="bg-[#111827] pt-20 border-t border-gray-800" data-studio-path="footer">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 px-4">

                    {/* Column 1: About */}
                    <div className="space-y-6">
                        <div className="flex flex-col items-center lg:items-start">
                            <Image
                                src={data.logoImage}
                                alt="Telepost Sacco"
                                width={100}
                                height={100}
                                className="w-24 h-24 object-contain"
                            />
                            <p className="mt-2 text-[#2D8E4E] font-bold italic text-sm tracking-wide">
                                {data.tagline}
                            </p>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed" data-studio-path="footer.description">
                            {data.description}
                        </p>
                        <div className="flex gap-4">
                            {data.socialLinks.map((social, index) => {
                                const Icon = socialIcons[social.icon] || Facebook;
                                return (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-gray-800 shadow-sm flex items-center justify-center text-white hover:bg-[#2D8E4E] transition-all duration-300"
                                        data-studio-path={`footer.socialLinks.${index}.url`}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-extrabold text-white mb-8 flex items-center gap-2">
                            <div className="w-2 h-6 bg-[#2D8E4E] rounded-full" />
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {data.services?.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.href}
                                        className="text-gray-400 hover:text-[#2D8E4E] text-sm flex items-center gap-2 group transition-colors"
                                        data-studio-path={`footer.services.${index}.label`}
                                    >
                                        <ChevronRight className="w-4 h-4 text-[#E63946] group-hover:translate-x-1 transition-transform" />
                                        {service.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-extrabold text-white mb-8 flex items-center gap-2">
                            <div className="w-2 h-6 bg-[#E63946] rounded-full" />
                            Contact Info
                        </h3>
                        <div className="space-y-4 text-gray-400 text-[14px]">
                            <div className="flex gap-3">
                                <MapPin className="w-5 h-5 text-[#2D8E4E] flex-shrink-0" />
                                <div data-studio-path="footer.contactInfo.address">{data.contactInfo.address}</div>
                            </div>
                            <div className="flex gap-3">
                                <Phone className="w-5 h-5 text-[#2D8E4E] flex-shrink-0" />
                                <div data-studio-path="footer.contactInfo.phone">Tel: {data.contactInfo.phone}</div>
                            </div>
                            <div className="flex gap-3">
                                <Mail className="w-5 h-5 text-[#2D8E4E] flex-shrink-0" />
                                <div className="flex flex-col">
                                    <span data-studio-path="footer.contactInfo.whatsapp">Whatsapp: {data.contactInfo.whatsapp}</span>
                                </div>
                            </div>
                            <div className="pt-2 border-t border-gray-800">
                                <p data-studio-path="footer.contactInfo.poBox">{data.contactInfo.poBox}</p>
                                <p className="font-bold text-gray-200" data-studio-path="footer.contactInfo.city">{data.contactInfo.city}, {data.contactInfo.country}</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Quick Help */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-extrabold text-white mb-8 flex items-center gap-2">
                            <div className="w-2 h-6 bg-[#2D8E4E] rounded-full" />
                            Help & Support
                        </h3>
                        <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-800">
                            <p className="text-sm text-gray-400 mb-4">Need immediate assistance? Message us on WhatsApp.</p>
                            <a
                                href={`https://wa.me/${(data.contactInfo?.whatsapp || '').replace('+', '')}`}
                                className="inline-flex items-center justify-center gap-2 w-full bg-[#2D8E4E] text-white py-3 rounded-xl font-bold hover:bg-[#24703d] transition-all hover:scale-[1.02]"
                            >
                                <Phone className="w-4 h-4 fill-white" />
                                Chat Now
                            </a>
                        </div>
                    </div>

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
                            <a href={data.privacyPolicyLink} className="hover:text-[#2D8E4E] transition-colors">Privacy policy</a>
                            <a href={data.cookiePolicyLink} className="hover:text-[#2D8E4E] transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
