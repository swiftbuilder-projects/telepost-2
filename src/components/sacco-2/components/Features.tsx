/**
 * Features Component - Telepost Sacco
 * 
 * Showcase SACCO benefits with icon grid
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, TrendingUp, Award, HeadphonesIcon } from 'lucide-react';
import { FeaturesContent } from '../types';

const defaultContent: FeaturesContent = {
    badgeText: 'WHY CHOOSE US',
    title: 'Built for',
    highlightedText: 'Your Peace of Mind',
    description: 'Experience the difference of a member-focused SACCO with industry-leading benefits and support.',
    features: [
        {
            icon: 'shield',
            title: 'SASRA Regulated',
            description: 'Fully licensed and regulated by SASRA for your protection and peace of mind.',
        },
        {
            icon: 'clock',
            title: 'Quick Approvals',
            description: 'Get loan decisions within 24 hours with our streamlined application process.',
        },
        {
            icon: 'users',
            title: 'Member-Owned',
            description: 'As a member, you own the SACCO and share in its success through dividends.',
        },
        {
            icon: 'trending-up',
            title: 'Competitive Rates',
            description: 'Enjoy some of the lowest interest rates in the market on all loan products.',
        },
        {
            icon: 'award',
            title: 'Award-Winning',
            description: 'Recognized as a top-performing SACCO with multiple industry awards.',
        },
        {
            icon: 'headphones',
            title: '24/7 Support',
            description: 'Our dedicated team is always available to assist you with your financial needs.',
        },
    ],
};

const iconMap = {
    shield: Shield,
    clock: Clock,
    users: Users,
    'trending-up': TrendingUp,
    award: Award,
    headphones: HeadphonesIcon,
};

export default function Features({ content }: { content?: FeaturesContent }) {
    const { badgeText, title, highlightedText, description, features } = content || defaultContent;

    return (
        <section
            className="relative py-24 bg-[#0F1419]"
            data-studio-path="features"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <span
                            className="text-sm text-[#86EFAC] font-semibold tracking-wider"
                            data-studio-path="features.badgeText"
                        >
                            {badgeText}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        <span data-studio-path="features.title">{title}</span>{' '}
                        <span
                            className="text-[#86EFAC]"
                            data-studio-path="features.highlightedText"
                        >
                            {highlightedText}
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-neutral-400"
                        data-studio-path="features.description"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = iconMap[feature.icon as keyof typeof iconMap] || Shield;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="group relative"
                            >
                                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-[#86EFAC]/30 transition-all">
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-[#86EFAC]/10 flex items-center justify-center mb-6 group-hover:bg-[#86EFAC]/20 transition-colors">
                                        <Icon className="w-7 h-7 text-[#86EFAC]" />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-xl font-bold text-white mb-3"
                                        data-studio-path={`features.features.${index}.title`}
                                    >
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-neutral-400 leading-relaxed"
                                        data-studio-path={`features.features.${index}.description`}
                                    >
                                        {feature.description}
                                    </p>

                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#86EFAC]/0 to-[#86EFAC]/0 group-hover:from-[#86EFAC]/5 group-hover:to-transparent transition-all -z-10" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
