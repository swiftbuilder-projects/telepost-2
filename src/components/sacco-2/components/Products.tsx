import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Zap, BookOpen, Briefcase, ArrowRight, Wallet, PieChart, Handshake, PiggyBank, CreditCard, Hexagon } from 'lucide-react';
import { ProductsContent, Product } from '../types';

const defaultContent: ProductsContent = {
    badgeText: 'FINANCIAL SOLUTIONS',
    title: 'Products Designed for',
    highlightedText: 'Your Success',
    description: 'We have a product for every stage of your financial journey.',
    products: [
        {
            id: 'loan-facilities',
            title: 'SACCO LOAN FACILITIES',
            description: 'Our loan facilities are designed to meet the financial needs of members, such as personal loans, business loans, asset financing, emergency loans, and education loans, among others.',
            features: [],
            icon: 'handshake',
            ctaText: 'READ MORE',
            ctaLink: '#loans',
        },
        {
            id: 'savings-products',
            title: 'TELEPOST SAVINGS PRODUCTS',
            description: 'Telepost Sacco offers a range of savings products tailored to meet the diverse needs of our members. From Holiday savings to Junior accounts, we help you achieve your goals.',
            features: [],
            icon: 'piggy',
            ctaText: 'READ MORE',
            ctaLink: '#savings',
        },
        {
            id: 'banking-services',
            title: 'SACCO BANKING SERVICES',
            description: 'By using our mobile banking, members can conveniently access various services through digital transactions like mobile banking apps, USSD or face-to-face interactions.',
            features: [],
            icon: 'card',
            ctaText: 'READ MORE',
            ctaLink: '#banking',
        },
    ],
};

const iconMap: Record<string, any> = {
    home: Home,
    zap: Zap,
    book: BookOpen,
    briefcase: Briefcase,
    wallet: Wallet,
    chart: PieChart,
    handshake: Handshake,
    piggy: PiggyBank,
    card: CreditCard
};

export default function Products({ content }: { content?: ProductsContent }) {
    const { products } = content || defaultContent;
    const [activeTab, setActiveTab] = useState<'fosa' | 'bosa'>('fosa');

    // Categorization logic using explicit category field
    const fosaProducts = products.filter(p => p.category === 'fosa');
    const bosaProducts = products.filter(p => p.category === 'bosa');

    // Fallback if no categories are set (legacy support)
    if (fosaProducts.length === 0 && bosaProducts.length === 0) {
        products.forEach(p => {
            if (p.id.toLowerCase().includes('loan') || p.title.toLowerCase().includes('loan')) {
                bosaProducts.push(p);
            } else {
                fosaProducts.push(p);
            }
        });
    }

    // Top pinned cards (First 3)
    const featuredProducts = products.slice(0, 3);

    return (
        <section className="relative pt-12 pb-8 bg-[#fff503]" data-studio-path="products">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 1. Feature Cards Grid (Top) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-20 mb-8">
                    {featuredProducts.map((product, index) => {
                        const Icon = iconMap[product.icon] || Home;
                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-10 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center group min-h-[520px] transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] hover:-translate-y-2 overflow-hidden relative"
                            >
                                <div className="relative mb-8 flex items-center justify-center">
                                    {/* Crispy Professional Icon Container */}
                                    <div className="relative w-40 h-40 flex items-center justify-center">

                                        {/* Minimal Sharp Orbital System */}
                                        <div className="absolute inset-0 z-0 scale-110">
                                            {/* Inner Orbit Line - Ultra thin & Crisp */}
                                            <div className="absolute inset-4 border border-gray-100/50 rounded-full" />
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-4"
                                            >
                                                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#ff0000] border-2 border-white shadow-sm" />
                                            </motion.div>

                                            {/* Outer Orbit Line - Ultra thin & Crisp */}
                                            <div className="absolute inset-0 border border-gray-100/30 rounded-full" />
                                            <motion.div
                                                animate={{ rotate: -360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-0"
                                            >
                                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#ff0000] border-2 border-white shadow-sm" />
                                            </motion.div>
                                        </div>

                                        {/* Main Icon Core - Shiny/Reflective Glass Effect */}
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="relative w-30 h-30 rounded-full bg-white border border-gray-100 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] z-10 overflow-hidden group/icon"
                                        >
                                            {/* Surface Shine Animation */}
                                            <motion.div
                                                animate={{
                                                    left: ['-100%', '200%'],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    repeatDelay: 1
                                                }}
                                                className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-45 pointer-events-none z-20"
                                            />

                                            <div className="w-full h-full bg-[#008000] flex items-center justify-center relative overflow-hidden">
                                                {/* Deep background for contrast */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
                                                <Icon className="w-14 h-14 text-white relative z-10" />

                                                {/* Subtle inner shadow for depth */}
                                                <div className="absolute inset-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.15)] rounded-full" />
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-5 tracking-tight px-4 leading-tight group-hover:text-[#008000] transition-colors duration-300">
                                    {product.title}
                                </h3>

                                <p className="text-gray-600 mb-10 leading-relaxed text-sm lg:text-base px-2">
                                    {product.description}
                                </p>

                                <div className="mt-auto w-full">
                                    <motion.a
                                        href={product.ctaLink}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center justify-center w-full gap-2 text-xs font-bold text-[#008000] uppercase tracking-[0.2em] py-4 border-t border-gray-100 group-hover:bg-[#008000]/5 transition-all duration-300"
                                    >
                                        {product.ctaText}
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </motion.a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* 2. Tabbed Section - Hidden to match reference image layout */}
                {/* 
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    ...
                </div> 
                */}
            </div>
        </section>
    );
}
