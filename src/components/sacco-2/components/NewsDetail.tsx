/**
 * News Detail Template
 * 
 * Reusable template for individual news/blog pages
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export interface NewsDetailContent {
    title: string;
    date: string;
    author: string;
    image: string;
    content: string;
    category?: string;
}

export default function NewsDetail({ content }: { content: NewsDetailContent }) {
    const { title, date, author, image, content: articleContent, category } = content;

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    };

    return (
        <div className="bg-[#0A0A0A] text-white">
            {/* Article Header */}
            <section className="py-16 bg-[#0F1419]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <motion.a
                        href="/news"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#86EFAC] transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to News
                    </motion.a>

                    {/* Category */}
                    {category && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-2 rounded-full bg-[#86EFAC]/10 border border-[#86EFAC]/20 text-[#86EFAC] text-sm font-semibold mb-6"
                        >
                            {category}
                        </motion.div>
                    )}

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                    >
                        {title}
                    </motion.h1>

                    {/* Meta */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap items-center gap-6 text-neutral-400"
                    >
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={date}>{formatDate(date)}</time>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{author}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="py-0">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="prose prose-invert prose-lg max-w-none"
                    >
                        <div
                            className="text-neutral-300 leading-relaxed space-y-6"
                            dangerouslySetInnerHTML={{ __html: articleContent }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Share/Related Section */}
            <section className="py-16 bg-[#0F1419]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
                    <p className="text-neutral-400 mb-8">
                        Subscribe to our newsletter for the latest updates and news.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="/news"
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
                        >
                            View All News
                        </a>
                        <a
                            href="#newsletter"
                            className="px-8 py-4 bg-[#86EFAC] text-black font-semibold rounded-full hover:bg-[#A7F3D0] transition-all hover:shadow-[0_0_30px_rgba(134,239,172,0.5)]"
                        >
                            Subscribe
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
