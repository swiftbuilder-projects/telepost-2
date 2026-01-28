/**
 * Calculator Component - Telepost Sacco
 * 
 * Interactive loan calculator with real-time calculations
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalculatorIcon, TrendingUp } from 'lucide-react';
import { CalculatorContent } from '../types';

const defaultContent: CalculatorContent = {
    title: 'Calculate Your Loan',
    description: 'See how much you can borrow and what your monthly payments will be.',
    defaultAmount: 500000,
    minAmount: 50000,
    maxAmount: 10000000,
    defaultTerm: 12,
    minTerm: 6,
    maxTerm: 180,
    interestRate: 12,
    ctaText: 'Apply for Loan',
    ctaLink: '/apply',
};

export default function Calculator({ content }: { content?: CalculatorContent }) {
    const {
        title,
        description,
        defaultAmount,
        minAmount,
        maxAmount,
        defaultTerm,
        minTerm,
        maxTerm,
        interestRate,
        ctaText,
        ctaLink,
    } = content || defaultContent;

    const [amount, setAmount] = useState(defaultAmount);
    const [term, setTerm] = useState(defaultTerm);

    // Calculate monthly payment
    const monthlyRate = interestRate / 100 / 12;
    const monthlyPayment =
        (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) /
        (Math.pow(1 + monthlyRate, term) - 1);
    const totalPayment = monthlyPayment * term;
    const totalInterest = totalPayment - amount;

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-KE', {
            style: 'currency',
            currency: 'KES',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <section
            className="relative py-24 bg-[#0A0A0A]"
            data-studio-path="calculator"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Calculator Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-[#86EFAC]/10 flex items-center justify-center">
                                <CalculatorIcon className="w-6 h-6 text-[#86EFAC]" />
                            </div>
                            <h2
                                className="text-3xl md:text-4xl font-bold text-white"
                                data-studio-path="calculator.title"
                            >
                                {title}
                            </h2>
                        </div>

                        <p
                            className="text-neutral-400 mb-8"
                            data-studio-path="calculator.description"
                        >
                            {description}
                        </p>

                        {/* Loan Amount Slider */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-sm font-semibold text-white">Loan Amount</label>
                                <span className="text-2xl font-bold text-[#86EFAC]">
                                    {formatCurrency(amount)}
                                </span>
                            </div>
                            <input
                                type="range"
                                min={minAmount}
                                max={maxAmount}
                                step={50000}
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                                style={{
                                    background: `linear-gradient(to right, #86EFAC 0%, #86EFAC ${((amount - minAmount) / (maxAmount - minAmount)) * 100
                                        }%, rgba(255,255,255,0.1) ${((amount - minAmount) / (maxAmount - minAmount)) * 100
                                        }%, rgba(255,255,255,0.1) 100%)`,
                                }}
                            />
                            <div className="flex justify-between text-xs text-neutral-500 mt-2">
                                <span>{formatCurrency(minAmount)}</span>
                                <span>{formatCurrency(maxAmount)}</span>
                            </div>
                        </div>

                        {/* Loan Term Slider */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-sm font-semibold text-white">Loan Term</label>
                                <span className="text-2xl font-bold text-[#86EFAC]">
                                    {term} months
                                </span>
                            </div>
                            <input
                                type="range"
                                min={minTerm}
                                max={maxTerm}
                                step={6}
                                value={term}
                                onChange={(e) => setTerm(Number(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                                style={{
                                    background: `linear-gradient(to right, #86EFAC 0%, #86EFAC ${((term - minTerm) / (maxTerm - minTerm)) * 100
                                        }%, rgba(255,255,255,0.1) ${((term - minTerm) / (maxTerm - minTerm)) * 100
                                        }%, rgba(255,255,255,0.1) 100%)`,
                                }}
                            />
                            <div className="flex justify-between text-xs text-neutral-500 mt-2">
                                <span>{minTerm} months</span>
                                <span>{maxTerm} months</span>
                            </div>
                        </div>

                        {/* Interest Rate Display */}
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10 mb-8">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-neutral-400">Interest Rate (p.a.)</span>
                                <span className="text-lg font-bold text-white">{interestRate}%</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href={ctaLink}
                            className="block w-full px-8 py-4 bg-[#86EFAC] text-black text-center font-semibold rounded-full hover:bg-[#A7F3D0] transition-all hover:shadow-[0_0_30px_rgba(134,239,172,0.5)]"
                            data-studio-path="calculator.ctaText"
                        >
                            {ctaText}
                        </a>
                    </motion.div>

                    {/* Right - Results */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Monthly Payment Card */}
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#86EFAC]/10 to-[#86EFAC]/5 border border-[#86EFAC]/20">
                            <div className="flex items-center gap-3 mb-4">
                                <TrendingUp className="w-6 h-6 text-[#86EFAC]" />
                                <span className="text-sm font-semibold text-neutral-400">
                                    Monthly Payment
                                </span>
                            </div>
                            <motion.div
                                key={monthlyPayment}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-4xl md:text-5xl font-bold text-white mb-2"
                            >
                                {formatCurrency(monthlyPayment)}
                            </motion.div>
                            <p className="text-sm text-neutral-400">
                                for {term} months
                            </p>
                        </div>

                        {/* Summary Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-sm text-neutral-400 mb-2">Total Payment</div>
                                <motion.div
                                    key={totalPayment}
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    className="text-2xl font-bold text-white"
                                >
                                    {formatCurrency(totalPayment)}
                                </motion.div>
                            </div>

                            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-sm text-neutral-400 mb-2">Total Interest</div>
                                <motion.div
                                    key={totalInterest}
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    className="text-2xl font-bold text-white"
                                >
                                    {formatCurrency(totalInterest)}
                                </motion.div>
                            </div>
                        </div>

                        {/* Info Note */}
                        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                            <p className="text-xs text-neutral-400 leading-relaxed">
                                <strong className="text-white">Note:</strong> This is an estimate. Actual loan terms may vary based on your credit profile and SACCO policies. Contact us for personalized rates.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #86EFAC;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(134, 239, 172, 0.5);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #86EFAC;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(134, 239, 172, 0.5);
        }
      `}</style>
        </section>
    );
}
