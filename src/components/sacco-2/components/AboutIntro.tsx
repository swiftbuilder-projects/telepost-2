import React from 'react';
import { motion } from 'framer-motion';
import { Play, Users, MapPin, ArrowRight } from 'lucide-react';
import { AboutIntroContent } from '../types';

const defaultContent: AboutIntroContent = {
    welcomeTitle: 'WELCOME TO TELEPOST SACCO!',
    videoThumbnail: '/images/templates/sacco-2/video-thumbnail.png',
    videoUrl: 'https://www.youtube.com/watch?v=LeKLpegnyTY',
    aboutTitle: 'ABOUT US',
    aboutDescription: "Telepost Sacco (formerly Posta Sacco) started in 1969 as a welfare organization. It was registered formally in July 1969 with the agenda of supporting its members. We are ready to serve you with affordable loans that will empower you economically, socially and financially.",
    infoCards: [
        {
            title: 'How To Join Us?',
            description: 'Submit Required Documents.',
            ctaText: 'Read More',
            ctaLink: '#join',
            icon: 'users'
        },
        {
            title: 'Come Visit Us!',
            description: 'Visit us at Telepost House, Kenyatta Avenue, Nairobi.',
            ctaText: 'Read More',
            ctaLink: '#contact',
            icon: 'map-pin'
        }
    ]
};

const iconMap: Record<string, any> = {
    users: Users,
    'map-pin': MapPin
};

export default function AboutIntro({ content }: { content?: AboutIntroContent }) {
    const data = content || defaultContent;

    return (
        <section className="py-20 bg-white" data-studio-path="aboutIntro">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Welcome & Video */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="w-12 h-1 bg-[#008000]" />
                            <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight" data-studio-path="aboutIntro.welcomeTitle">
                                {data.welcomeTitle}
                            </h2>
                        </div>

                        <a
                            href={data.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative group cursor-pointer aspect-video rounded-lg overflow-hidden shadow-2xl"
                        >
                            <img
                                src={data.videoThumbnail || 'https://images.unsplash.com/photo-1573164060897-4251210c484d?q=80&w=2069&auto=format&fit=crop'}
                                alt="Video Thumbnail"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                data-studio-path="aboutIntro.videoThumbnail"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <div className="w-20 h-20 bg-[#ff0000] rounded-full flex items-center justify-center text-white shadow-xl transform transition-transform group-hover:scale-110">
                                    <Play className="w-8 h-8 fill-current" />
                                </div>
                            </div>

                            {/* YouTube Fake UI */}
                            <div className="absolute top-4 left-4 flex items-center gap-2 text-white font-medium drop-shadow-md">
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                    <img src="/images/templates/telepost-sacco/logo.png" className="w-6 h-6 object-contain" alt="" />
                                </div>
                                <span className="text-sm">Introduction To Telepost Sacco</span>
                            </div>
                        </a>

                        {/* Video Footer Info */}
                        <div className="flex justify-between items-center py-2 px-4 bg-black/90 rounded-b-lg -mt-10 relative z-10 text-white text-xs">
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://www.youtube.com/@telepostsacco7699"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold underline hover:text-[#ff0000] transition-colors"
                                >
                                    Watch on YouTube
                                </a>
                            </div>
                            <div className="text-[#008000] font-bold">www.telepostsacco.co.ke</div>
                        </div>
                    </div>

                    {/* Right: About Us & Info Cards */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex gap-2">
                                <div className="w-10 h-1 bg-[#008000]" />
                                <div className="w-2 h-1 bg-[#ff0000]" />
                            </div>
                            <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight" data-studio-path="aboutIntro.aboutTitle">
                                {data.aboutTitle}
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm" data-studio-path="aboutIntro.aboutDescription">
                                {data.aboutDescription}
                            </p>
                        </div>

                        <div className="space-y-4">
                            {data.infoCards.map((card, index) => {
                                const Icon = iconMap[card.icon] || Users;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-gray-50/80 border-l-4 border-[#008000] border border-gray-100/50 rounded-r-lg p-6 flex items-center gap-6 group hover:bg-white hover:shadow-xl transition-all cursor-pointer"
                                    >
                                        <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#008000] group-hover:bg-[#008000] group-hover:text-white transition-all">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-800 text-lg" data-studio-path={`aboutIntro.infoCards.${index}.title`}>
                                                {card.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm italic" data-studio-path={`aboutIntro.infoCards.${index}.description`}>
                                                {card.description} <span className="text-[#ff0000] font-bold not-italic hover:underline ml-1">{card.ctaText}</span>
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
