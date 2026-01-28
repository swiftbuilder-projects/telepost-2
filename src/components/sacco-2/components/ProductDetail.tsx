/**
 * Product Detail Template
 * 
 * Reusable template for individual product pages
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Calculator as CalculatorIcon } from 'lucide-react';
import Image from 'next/image';

export interface ProductDetailContent {
    title: string;
    description: string;
    image?: string;
    features: string[];
    benefits: string[];
    requirements: string[];
    interestRate: string;
    maxAmount: string;
    repaymentPeriod: string;
    ctaText: string;
    ctaLink: string;
}

export default function ProductDetail({ content }: { content: ProductDetailContent }) {
    const {
        title,
        description,
        image,
        features,
        benefits,
        requirements,
        interestRate,
        maxAmount,
        repaymentPeriod,
        ctaText,
        ctaLink,
    } = content;

    return (
        <div className="bg-[#0A0A0A] text-white">
            {/* Product Overview */}
            <section className="py-16 bg-[#0F1419]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
                            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                                {description}
                            </p>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <div className="text-sm text-neutral-400 mb-1">Interest Rate</div>
                                    <div className="text-xl font-bold text-[#86EFAC]">{interestRate}</div>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <div className="text-sm text-neutral-400 mb-1">Max Amount</div>
                                    <div className="text-xl font-bold text-[#86EFAC]">{maxAmount}</div>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <div className="text-sm text-neutral-400 mb-1">Repayment</div>
                                    <div className="text-xl font-bold text-[#86EFAC]">{repaymentPeriod}</div>
                                </div>
                            </div>

                            {/* CTA */}
                            <a
                                href={ctaLink}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#86EFAC] text-black font-semibold rounded-full hover:bg-[#A7F3D0] transition-all hover:shadow-[0_0_30px_rgba(134,239,172,0.5)]"
                            >
                                {ctaText}
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </motion.div>

                        {/* Right - Image */}
                        {image && (
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative h-[400px] rounded-2xl overflow-hidden"
                            >
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* Features & Benefits */}
            <section className="py-16 bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Features */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-[#86EFAC]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-[#86EFAC]" />
                                        </div>
                                        <span className="text-neutral-300">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Benefits</h3>
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-[#86EFAC]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-[#86EFAC]" />
                                        </div>
                                        <span className="text-neutral-300">{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Requirements */}
            <section className="py-16 bg-[#0F1419]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-2xl font-bold mb-8 text-center">Eligibility Requirements</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {requirements.map((requirement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3"
                            >
                                <div className="w-8 h-8 rounded-lg bg-[#86EFAC]/10 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-5 h-5 text-[#86EFAC]" />
                                </div>
                                <span className="text-neutral-300">{requirement}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-[#0F766E] via-[#134E4A] to-[#0A0A0A]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#86EFAC]/10 flex items-center justify-center mx-auto mb-6">
                        <CalculatorIcon className="w-8 h-8 text-[#86EFAC]" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Ready to Apply?</h3>
                    <p className="text-lg text-neutral-300 mb-8">
                        Use our loan calculator to estimate your monthly payments or apply now.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="/calculator"
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
                        >
                            Calculate Loan
                        </a>
                        <a
                            href={ctaLink}
                            className="px-8 py-4 bg-[#86EFAC] text-black font-semibold rounded-full hover:bg-[#A7F3D0] transition-all hover:shadow-[0_0_30px_rgba(134,239,172,0.5)]"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
