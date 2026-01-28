/**
 * ContactCTA Component - Telepost Sacco
 * 
 * Final call-to-action section before footer
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { ContactCtaContent } from '../types';

const defaultContent: ContactCtaContent = {
    title: 'Ready to Start Your Financial Journey?',
    description: 'Join thousands of members who trust Telepost Sacco for their financial needs. Our team is ready to help you achieve your goals.',
    primaryCtaText: 'Become a Member',
    primaryCtaLink: '/join',
    secondaryCtaText: 'Contact Us',
    secondaryCtaLink: '/contact',
    contactInfo: [
        { icon: 'phone', label: 'Call Us', value: '+254 700 000 000' },
        { icon: 'mail', label: 'Email Us', value: 'info@telepostsacco.co.ke' },
        { icon: 'map-pin', label: 'Visit Us', value: 'Telepost House, Nairobi' },
    ],
};

const iconMap = {
    phone: Phone,
    mail: Mail,
    'map-pin': MapPin,
};

export default function ContactCTA({ content }: { content?: ContactCtaContent }) {
    const { title, description, primaryCtaText, primaryCtaLink, secondaryCtaText, secondaryCtaLink, contactInfo } =
        content || defaultContent;

    return (
        <section
            className="relative py-24 bg-gradient-to-br from-[#0F766E] via-[#134E4A] to-[#0A0A0A] overflow-hidden"
            data-studio-path="contactCta"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/templates/telepost-sacco/noise-texture.png')] bg-repeat" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2
                            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
                            data-studio-path="contactCta.title"
                        >
                            {title}
                        </h2>

                        <p
                            className="text-lg text-neutral-300 mb-8 leading-relaxed"
                            data-studio-path="contactCta.description"
                        >
                            {description}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <a
                                href={primaryCtaLink}
                                className="group px-8 py-4 bg-[#86EFAC] text-black font-semibold rounded-full hover:bg-[#A7F3D0] transition-all hover:shadow-[0_0_30px_rgba(134,239,172,0.5)] flex items-center gap-2"
                                data-studio-path="contactCta.primaryCtaText"
                            >
                                {primaryCtaText}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href={secondaryCtaLink}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
                                data-studio-path="contactCta.secondaryCtaText"
                            >
                                {secondaryCtaText}
                            </a>
                        </div>

                        {/* Contact Info */}
                        {contactInfo && (
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => {
                                    const Icon = iconMap[info.icon as keyof typeof iconMap] || Phone;

                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-[#86EFAC]/10 flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-5 h-5 text-[#86EFAC]" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-neutral-400">{info.label}</div>
                                                <div
                                                    className="text-white font-semibold"
                                                    data-studio-path={`contactCta.contactInfo.${index}.value`}
                                                >
                                                    {info.value}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </motion.div>

                    {/* Right - Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        {/* Floating Card */}
                        <div className="relative h-[400px]">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute top-0 right-0 w-72 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-[#86EFAC] flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-black" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-400">Quick Support</div>
                                        <div className="text-lg font-bold text-white">24/7 Available</div>
                                    </div>
                                </div>
                                <div className="text-sm text-neutral-300">
                                    Our team is ready to assist you with any questions or concerns.
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute bottom-0 left-0 w-64 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                            >
                                <div className="text-sm text-neutral-400 mb-2">Member Satisfaction</div>
                                <div className="text-4xl font-bold text-white mb-2">98%</div>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="w-2 h-8 bg-[#86EFAC] rounded-full" />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
