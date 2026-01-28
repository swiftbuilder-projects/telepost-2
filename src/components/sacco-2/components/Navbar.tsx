import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';
import { NavbarContent } from '../types';

const defaultContent: NavbarContent = {
    logoText: 'TELEPOST SACCO',
    logoImage: '/images/templates/telepost-sacco/logo.png',
    menuItems: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Products & Services', href: '/products' },
        { label: 'Info Center', href: '/info' },
        { label: 'Loan Calculator', href: '/calculator' },
        { label: 'Join Us', href: '/join' },
        { label: 'Contacts', href: '/contact' },
    ],
    ctaText: 'JOIN US!',
    ctaLink: '/join',
    secondaryCtaText: 'MOBILE APP',
    secondaryCtaLink: '/app',
};

export default function Navbar({ content }: { content?: NavbarContent }) {
    const { logoText, logoImage, menuItems, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink } =
        content || defaultContent;

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    return (
        <header className="relative z-50">
            {/* Top Bar - Green */}
            <div className="bg-[#2D8E4E] text-white py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                    {/* Left: Contact Info */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-[12px] font-medium tracking-wide">
                        <a href="mailto:info@telepostsacco.co.ke" className="flex items-center gap-2 hover:text-[#F1C03C] transition-colors">
                            <Mail className="w-3.5 h-3.5" />
                            <span>info@telepostsacco.co.ke</span>
                        </a>
                        <div className="hidden sm:block w-px h-3 bg-white/20" />
                        <a href="tel:0205029200" className="flex items-center gap-2 hover:text-[#F1C03C] transition-colors">
                            <Phone className="w-3.5 h-3.5" />
                            <span>0205029200</span>
                        </a>
                        <div className="hidden sm:block w-px h-3 bg-white/20" />
                        <div className="flex items-center gap-2">
                            <span className="opacity-80">Working Hours: Mon-Fri: 8:30 AM - 4:30 PM</span>
                        </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-3">
                        <a
                            href={ctaLink || '#'}
                            className="bg-[#E63946] hover:bg-white hover:text-[#E63946] px-4 py-1.5 rounded-sm text-[11px] font-extrabold uppercase transition-all shadow-sm flex items-center gap-2"
                            data-studio-path="navbar.ctaText"
                        >
                            {ctaText}
                        </a>
                        <a
                            href={secondaryCtaLink || '#'}
                            className="bg-[#E63946] hover:bg-white hover:text-[#E63946] px-4 py-1.5 rounded-sm text-[11px] font-extrabold uppercase transition-all shadow-sm flex items-center gap-2"
                            data-studio-path="navbar.secondaryCtaText"
                        >
                            {secondaryCtaText}
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation - White */}
            <div className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center gap-3">
                            <Image
                                src={logoImage}
                                alt={logoText}
                                width={180}
                                height={60}
                                className="h-12 w-auto object-contain"
                            />
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-8">
                            {menuItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative group"
                                    onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                                    onMouseLeave={() => setActiveSubmenu(null)}
                                >
                                    <a
                                        href={item.href}
                                        className="flex items-center gap-1 text-[#444] font-bold text-sm uppercase hover:text-[#2D8E4E] py-8 border-b-2 border-transparent hover:border-[#2D8E4E] transition-all"
                                        data-studio-path={`navbar.menuItems.${index}.label`}
                                    >
                                        {item.label}
                                        {item.submenu && <ChevronDown className="w-3 h-3" />}
                                    </a>

                                    {/* Submenu */}
                                    {item.submenu && (
                                        <div className="absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-[#2D8E4E] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            {item.submenu.map((subItem, subIndex) => (
                                                <a
                                                    key={subIndex}
                                                    href={subItem.href}
                                                    className="block px-6 py-3 text-sm text-gray-600 hover:text-[#2D8E4E] hover:bg-gray-50 border-b border-gray-100 last:border-0"
                                                    data-studio-path={`navbar.menuItems.${index}.submenu.${subIndex}.label`}
                                                >
                                                    {subItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Search Icon */}
                            <button className="text-gray-400 hover:text-[#2D8E4E] transition-colors">
                                <Search className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-gray-600 hover:text-[#2D8E4E]"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {menuItems.map((item, index) => (
                                <div key={index}>
                                    <div className="flex items-center justify-between">
                                        <a
                                            href={item.href}
                                            className="block text-[#444] font-bold uppercase py-2 hover:text-[#2D8E4E]"
                                        >
                                            {item.label}
                                        </a>
                                        {item.submenu && (
                                            <ChevronDown className="w-4 h-4 text-gray-400" />
                                        )}
                                    </div>
                                    {item.submenu && (
                                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#2D8E4E]/20">
                                            {item.submenu.map((subItem, subIndex) => (
                                                <a
                                                    key={subIndex}
                                                    href={subItem.href}
                                                    className="block text-sm text-gray-500 py-1"
                                                >
                                                    {subItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
