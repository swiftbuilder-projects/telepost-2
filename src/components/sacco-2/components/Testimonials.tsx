/**
 * Testimonials Component - Telepost Sacco
 * 
 * Member testimonials carousel with ratings
 */

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { TestimonialsContent } from '../types';

const defaultContent: TestimonialsContent = {
    badgeText: 'MEMBER STORIES',
    title: 'Trusted by',
    highlightedText: 'Thousands of Members',
    subtitle: 'See what our members say about their experience with Telepost Sacco',
    testimonials: [
        {
            quote: 'Telepost Sacco helped me build my dream home with their affordable development loan. The process was smooth and the team was incredibly supportive throughout.',
            author: 'Sarah Mwangi',
            role: 'Development Loan Member',
            rating: 5,
            image: '/images/templates/telepost-sacco/testimonial-1.png',
        },
        {
            quote: 'As a small business owner, the Biashara Plus loan gave me the capital I needed to expand. The mentorship program was an unexpected bonus that really helped.',
            author: 'John Kamau',
            role: 'Business Owner',
            rating: 5,
            image: '/images/templates/telepost-sacco/testimonial-2.png',
        },
        {
            quote: 'The emergency loan came through when I needed it most. Quick approval and fair rates made a stressful situation much easier to handle.',
            author: 'Grace Akinyi',
            role: 'Emergency Loan Member',
            rating: 5,
            image: '/images/templates/telepost-sacco/testimonial-3.png',
        },
    ],
};

export default function Testimonials({ content }: { content?: TestimonialsContent }) {
    const { badgeText, title, highlightedText, subtitle, testimonials } =
        content || defaultContent;

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section
            className="relative py-24 bg-[#0F1419] overflow-hidden"
            data-studio-path="testimonials"
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
                            data-studio-path="testimonials.badgeText"
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
                        <span data-studio-path="testimonials.title">{title}</span>{' '}
                        <span
                            className="text-[#86EFAC]"
                            data-studio-path="testimonials.highlightedText"
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
                        data-studio-path="testimonials.subtitle"
                    >
                        {subtitle}
                    </motion.p>
                </div>

                {/* Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="relative"
                        >
                            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/10">
                                {/* Quote Icon */}
                                <div className="absolute top-8 right-8 opacity-10">
                                    <Quote className="w-24 h-24 text-[#86EFAC]" />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < currentTestimonial.rating
                                                    ? 'text-[#86EFAC] fill-[#86EFAC]'
                                                    : 'text-neutral-600'
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote
                                    className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8 relative z-10"
                                    data-studio-path={`testimonials.testimonials.${currentIndex}.quote`}
                                >
                                    "{currentTestimonial.quote}"
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    {currentTestimonial.image && (
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#86EFAC]/30">
                                            <Image
                                                src={currentTestimonial.image}
                                                alt={currentTestimonial.author}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <div>
                                        <div
                                            className="text-lg font-bold text-white"
                                            data-studio-path={`testimonials.testimonials.${currentIndex}.author`}
                                        >
                                            {currentTestimonial.author}
                                        </div>
                                        <div
                                            className="text-sm text-neutral-400"
                                            data-studio-path={`testimonials.testimonials.${currentIndex}.role`}
                                        >
                                            {currentTestimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prevTestimonial}
                            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#86EFAC]/30 transition-all flex items-center justify-center group"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6 text-neutral-400 group-hover:text-[#86EFAC] transition-colors" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all ${index === currentIndex
                                            ? 'w-8 bg-[#86EFAC]'
                                            : 'w-2 bg-white/20 hover:bg-white/40'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#86EFAC]/30 transition-all flex items-center justify-center group"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6 text-neutral-400 group-hover:text-[#86EFAC] transition-colors" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
