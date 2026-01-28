/**
 * Page Hero Component
 * 
 * Reusable hero section for internal pages
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { PageHero as PageHeroType } from '../types';

export default function PageHero({ content }: { content: PageHeroType }) {
    const { title, description, breadcrumbs } = content;

    return (
        <section className="relative pt-32 pb-16 bg-gray-900">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/templates/telepost-sacco/noise-texture.png')] bg-repeat" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <motion.nav
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-sm text-neutral-400 mb-8"
                    >
                        {breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={index}>
                                <a
                                    href={crumb.href}
                                    className="hover:text-[#86EFAC] transition-colors"
                                >
                                    {crumb.label}
                                </a>
                                {index < breadcrumbs.length - 1 && (
                                    <ChevronRight className="w-4 h-4" />
                                )}
                            </React.Fragment>
                        ))}
                    </motion.nav>
                )}

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    {title}
                </motion.h1>

                {/* Description */}
                {description && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-neutral-300 max-w-3xl"
                    >
                        {description}
                    </motion.p>
                )}
            </div>
        </section>
    );
}
