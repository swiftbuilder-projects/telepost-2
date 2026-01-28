/**
 * TrustBar Component - Telepost Sacco
 * 
 * Displays achievements and trust indicators with animated stats
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Shield, Users, Star } from 'lucide-react';
import { TrustBarContent } from '../types';

const defaultContent: TrustBarContent = {
    title: 'RECOGNIZED EXCELLENCE',
    subtitle: 'Award-winning SACCO trusted by thousands',
    achievements: [
        { icon: 'trophy', value: 'Top 10', label: 'SACCO in Kenya' },
        { icon: 'shield', value: 'SASRA', label: 'Regulated' },
        { icon: 'users', value: '50K+', label: 'Members' },
        { icon: 'star', value: '4.8/5', label: 'Member Rating' },
    ],
};

const iconMap = {
    trophy: Trophy,
    shield: Shield,
    users: Users,
    star: Star,
};

export default function TrustBar({ content }: { content?: TrustBarContent }) {
    const { title, subtitle, achievements } = content || defaultContent;

    return (
        <section
            className="relative py-16 bg-[#0F1419]"
            data-studio-path="trustBar"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4"
                    >
                        <span
                            className="text-sm text-[#86EFAC] font-semibold tracking-wider"
                            data-studio-path="trustBar.title"
                        >
                            {title}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl md:text-3xl font-bold text-white"
                        data-studio-path="trustBar.subtitle"
                    >
                        {subtitle}
                    </motion.h2>
                </div>

                {/* Achievement Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {achievements.map((achievement, index) => {
                        const Icon = iconMap[achievement.icon as keyof typeof iconMap] || Trophy;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="relative group"
                            >
                                <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-[#86EFAC]/30 transition-all">
                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-lg bg-[#86EFAC]/10 flex items-center justify-center mb-4 group-hover:bg-[#86EFAC]/20 transition-colors">
                                        <Icon className="w-6 h-6 text-[#86EFAC]" />
                                    </div>

                                    {/* Value */}
                                    <div
                                        className="text-2xl md:text-3xl font-bold text-white mb-1"
                                        data-studio-path={`trustBar.achievements.${index}.value`}
                                    >
                                        {achievement.value}
                                    </div>

                                    {/* Label */}
                                    <div
                                        className="text-sm text-neutral-400"
                                        data-studio-path={`trustBar.achievements.${index}.label`}
                                    >
                                        {achievement.label}
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 rounded-xl bg-[#86EFAC]/0 group-hover:bg-[#86EFAC]/5 transition-all -z-10" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
