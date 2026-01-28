/**
 * News Component - Telepost Sacco
 * 
 * Latest news and updates grid
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { NewsContent } from '../types';

const defaultContent: NewsContent = {
    badgeText: 'LATEST UPDATES',
    title: 'Stay Informed',
    ctaText: 'View All News',
    ctaLink: '/news',
    articles: [
        {
            title: 'Annual General Meeting 2026',
            excerpt: 'Join us for our AGM on March 15th to review our performance and elect new officials.',
            date: '2026-02-01',
            image: '/images/templates/telepost-sacco/news-agm.png',
            link: '/news/agm-2026',
        },
        {
            title: 'New Mobile App Launched',
            excerpt: 'Access your account, apply for loans, and manage finances on the go with our new mobile app.',
            date: '2026-01-20',
            image: '/images/templates/telepost-sacco/news-mobile-app.png',
            link: '/news/mobile-app',
        },
        {
            title: 'Record Dividend Payout',
            excerpt: 'Members to receive 15% dividend on shares, the highest in our 25-year history.',
            date: '2026-01-10',
            image: '/images/templates/telepost-sacco/news-dividends.png',
            link: '/news/dividend-2026',
        },
    ],
};

export default function News({ content }: { content?: NewsContent }) {
    const { badgeText, title, ctaText, ctaLink, articles } = content || defaultContent;

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };

    return (
        <section
            className="relative py-24 bg-[#0A0A0A]"
            data-studio-path="news"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4"
                        >
                            <span
                                className="text-sm text-[#86EFAC] font-semibold tracking-wider"
                                data-studio-path="news.badgeText"
                            >
                                {badgeText}
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold text-white"
                            data-studio-path="news.title"
                        >
                            {title}
                        </motion.h2>
                    </div>

                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        href={ctaLink}
                        className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#86EFAC] font-semibold hover:gap-3 transition-all"
                        data-studio-path="news.ctaText"
                    >
                        {ctaText}
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="group"
                        >
                            <a href={article.link} className="block">
                                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#86EFAC]/30 transition-all">
                                    {/* Image */}
                                    {article.image && (
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60" />
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Date */}
                                        <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3">
                                            <Calendar className="w-4 h-4" />
                                            <time dateTime={article.date}>{formatDate(article.date)}</time>
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="text-xl font-bold text-white mb-3 group-hover:text-[#86EFAC] transition-colors"
                                            data-studio-path={`news.articles.${index}.title`}
                                        >
                                            {article.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p
                                            className="text-neutral-400 leading-relaxed mb-4"
                                            data-studio-path={`news.articles.${index}.excerpt`}
                                        >
                                            {article.excerpt}
                                        </p>

                                        {/* Read More */}
                                        <div className="flex items-center gap-2 text-[#86EFAC] font-semibold group-hover:gap-3 transition-all">
                                            Read More
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
