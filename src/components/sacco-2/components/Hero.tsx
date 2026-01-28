import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { HeroContent } from '../types';

const defaultContent: HeroContent = {
    badgeText: 'ESTABLISHED 1969',
    title: 'TELEPOST SACCO',
    highlightedText: 'TOGETHER WE GROW',
    description: 'Empowering your financial future through reliable and innovative Sacco services.',
    primaryCtaText: 'JOIN US TODAY',
    primaryCtaLink: '#join',
    secondaryCtaText: 'LEARN MORE',
    secondaryCtaLink: '#learn',
    slides: [
        {
            image: '/images/templates/telepost-sacco/hero-agm-v2.png',
            title: 'WELCOME TO TELEPOST SACCO',
            highlightedText: 'TOGETHER WE GROW',
            description: 'Building a stronger future together through cooperative excellence and member-focused growth.',
            primaryCtaText: 'LEARN MORE',
            primaryCtaLink: '#about',
            objectPosition: 'top center'
        },
        {
            image: '/images/templates/telepost-sacco/hero-mobile-african.png',
            title: 'MOBILE BANKING',
            highlightedText: 'BANKING AT YOUR FINGERTIPS',
            description: 'Experience seamless financial control with our secure mobile app. Transact anytime, anywhere.',
            primaryCtaText: 'DOWNLOAD NOW',
            primaryCtaLink: '#apps',
            align: 'left'
        },
        {
            image: '/images/templates/telepost-sacco/hero-construction-v2.png',
            title: 'SECURE ASSET LOANS',
            highlightedText: 'INVEST IN YOUR FUTURE',
            description: 'Get the financial support you need for your construction projects and property investments.',
            primaryCtaText: 'APPLY FOR LOAN',
            primaryCtaLink: '#loans'
        }
    ]
};

export default function Hero({ content }: { content?: HeroContent }) {
    const data = content || defaultContent;
    const slides = data.slides || [];
    const hasSlides = slides.length > 0;

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        if (!hasSlides) return;
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        if (!hasSlides) return;
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Auto-advance slides
    useEffect(() => {
        if (!hasSlides) return;
        const timer = setInterval(nextSlide, 7000);
        return () => clearInterval(timer);
    }, [hasSlides, slides.length]);

    if (hasSlides) {
        return (
            <section className="relative h-[650px] lg:h-[800px] w-full overflow-hidden flex items-center bg-gray-900" data-studio-path="hero">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <Image
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            fill
                            className={`object-cover ${slides[currentSlide].flipImage ? '-scale-x-100' : ''}`}
                            style={{ objectPosition: slides[currentSlide].objectPosition || 'center' }}
                            priority
                        />
                        {/* Darker professional overlay for centered text readability */}
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
                    </motion.div>
                </AnimatePresence>

                <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col ${slides[currentSlide].align === 'left' ? 'items-start text-left' : slides[currentSlide].align === 'right' ? 'items-end text-right' : 'items-center text-center'}`}>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`max-w-4xl ${slides[currentSlide].align === 'left' ? 'text-left' : slides[currentSlide].align === 'right' ? 'text-right' : 'mx-auto'}`}
                    >
                        {/* Badge */}
                        <motion.span
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="inline-block bg-[#F1C03C] text-black px-5 py-1.5 rounded-sm text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-lg"
                        >
                            {data.badgeText}
                        </motion.span>

                        {/* Title */}
                        <h1
                            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 drop-shadow-2xl"
                            data-studio-path={`hero.slides.${currentSlide}.title`}
                        >
                            {slides[currentSlide].title}
                        </h1>

                        {/* Highlighted Subtext (Telepost Style) */}
                        {slides[currentSlide].highlightedText && (
                            <div className="inline-block bg-[#E63946] px-8 py-2.5 mb-10 shadow-xl">
                                <span
                                    className="block text-sm sm:text-base font-black text-white tracking-[0.15em] uppercase"
                                    data-studio-path={`hero.slides.${currentSlide}.highlightedText`}
                                >
                                    {slides[currentSlide].highlightedText}
                                </span>
                            </div>
                        )}

                        {/* Description */}
                        <p
                            className={`text-lg sm:text-xl text-gray-100 mb-12 max-w-2xl leading-relaxed font-medium drop-shadow-md ${slides[currentSlide].align === 'left' ? 'text-left' : slides[currentSlide].align === 'right' ? 'text-right ml-auto' : 'mx-auto text-center'}`}
                            data-studio-path={`hero.slides.${currentSlide}.description`}
                        >
                            {slides[currentSlide].description}
                        </p>

                        {/* CTA Buttons */}
                        <div className={`flex flex-col sm:flex-row items-center gap-4 ${slides[currentSlide].align === 'left' ? 'justify-start' : slides[currentSlide].align === 'right' ? 'justify-end' : 'justify-center'}`}>
                            <a
                                href={slides[currentSlide].primaryCtaLink}
                                className="inline-block bg-[#2D8E4E] text-white px-12 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#236c3b] transition-all transform hover:-translate-y-1 hover:shadow-2xl border-2 border-[#2D8E4E]"
                                data-studio-path={`hero.slides.${currentSlide}.primaryCtaText`}
                            >
                                {slides[currentSlide].primaryCtaText}
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Slider Indicators */}
                <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center gap-4">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentSlide ? 'bg-[#E63946] w-12' : 'bg-white/30 w-6 hover:bg-white/60'
                                }`}
                        />
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-6 transform -translate-y-1/2 z-20 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all bg-black/10 backdrop-blur-sm hidden lg:flex"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all bg-black/10 backdrop-blur-sm hidden lg:flex"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>
            </section>
        );
    }

    // Fallback to static hero if no slides (Legacy/Default)
    return (
        <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden flex items-center bg-gray-50" data-studio-path="hero">
            {/* Background Image */}
            <div className="absolute inset-0">
                {data.heroImage ? (
                    <Image
                        src={data.heroImage}
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200" />
                )}
                {/* Light overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        {data.badgeText && (
                            <span className="inline-block bg-[#F1C03C] text-[#333] px-4 py-1 rounded-sm text-sm font-bold tracking-widest uppercase mb-6">
                                {data.badgeText}
                            </span>
                        )}

                        {/* Title */}
                        <h1
                            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#E63946] leading-tight mb-4"
                            data-studio-path="hero.title"
                        >
                            {data.title}
                        </h1>

                        {/* Highlighted Subtext (Red Box) */}
                        <div className="inline-block bg-[#E63946] px-6 py-2 mb-8 transform -skew-x-12 shadow-md">
                            <span
                                className="block text-2xl sm:text-3xl font-bold text-white uppercase transform skew-x-12"
                                data-studio-path="hero.highlightedText"
                            >
                                {data.highlightedText}
                            </span>
                        </div>

                        {/* Description */}
                        <p
                            className="text-lg text-gray-800 mb-10 max-w-xl leading-relaxed font-medium"
                            data-studio-path="hero.description"
                        >
                            {data.description}
                        </p>

                        {/* CTA Button */}
                        <a
                            href={data.primaryCtaLink}
                            className="inline-block bg-[#2D8E4E] text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#236c3b] transition-all transform hover:-translate-y-1 hover:shadow-lg border-2 border-[#2D8E4E]"
                            data-studio-path="hero.primaryCtaText"
                        >
                            {data.primaryCtaText}
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Simulated Slider Controls */}
            <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-20 hidden md:block">
                <button className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#2D8E4E] transition-all">
                    <ArrowLeft className="w-6 h-6" />
                </button>
            </div>
            <div className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-20 hidden md:block">
                <button className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#2D8E4E] transition-all">
                    <ArrowRight className="w-6 h-6" />
                </button>
            </div>
        </section>
    );
}
