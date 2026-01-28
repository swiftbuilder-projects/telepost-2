import React from 'react';
import { motion } from 'framer-motion';
import { PartnersContent } from '../types';

const defaultContent: PartnersContent = {
    title: 'Our Partners & Regulators',
    partners: [
        { name: 'SASRA', logo: 'https://telepostsacco.co.ke/wp-content/uploads/2017/08/SASRA.png' },
        { name: 'Co-op Bank', logo: 'https://telepostsacco.co.ke/wp-content/uploads/2017/08/coop.png' },
        { name: 'KRA', logo: 'https://telepostsacco.co.ke/wp-content/uploads/2017/08/KRA-1.png' },
        { name: 'KUSCCO', logo: 'https://telepostsacco.co.ke/wp-content/uploads/2017/08/KUSCCO.png' },
        { name: 'KCB Bank', logo: 'https://telepostsacco.co.ke/wp-content/uploads/2017/08/kcb.png' },
        { name: 'Telkom', logo: 'https://telepostsacco.co.ke/wp-content/uploads/2017/08/telkom2.gif' },
    ]
};

export default function Partners({ content }: { content?: PartnersContent }) {
    const data = content || defaultContent;

    // Duplicate partners for infinite scroll effect
    const allPartners = [...data.partners, ...data.partners];

    return (
        <section className="py-16 bg-gray-50 border-y border-gray-100" data-studio-path="partners">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-800" data-studio-path="partners.title">
                        {data.title}
                    </h2>
                </div>

                <div className="relative overflow-hidden">
                    {/* Fade Edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

                    <motion.div
                        className="flex gap-24 items-center"
                        animate={{
                            x: [0, -((192 + 96) * data.partners.length)], // Item width (192) + Gap (96)
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 25,
                                ease: "linear",
                            },
                        }}
                    >
                        {allPartners?.map((partner, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-48 h-24 flex items-center justify-center transition-all duration-300"
                                data-studio-path={`partners.partners.${index % data.partners.length}.logo`}
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    title={partner.name}
                                    className="max-w-full max-h-full object-contain p-4 group"
                                    referrerPolicy="no-referrer"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent && !parent.querySelector('.logo-fallback')) {
                                            const fallback = document.createElement('div');
                                            fallback.className = 'logo-fallback flex items-center justify-center p-4 h-full w-full';
                                            fallback.innerHTML = `
                                                <div class="px-4 py-2 border border-gray-200 rounded-md bg-white shadow-sm flex items-center justify-center min-w-[120px]">
                                                    <span class="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] text-center">${partner.name}</span>
                                                </div>
                                            `;
                                            parent.appendChild(fallback);
                                        }
                                    }}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
