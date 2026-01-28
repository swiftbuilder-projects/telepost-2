'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WhoWeAreContent } from '../types';

const defaultContent: WhoWeAreContent = {
    title: 'Introduction',
    description: "Telepost Sacco (formerly Posta Sacco) started in 1969 as a welfare organization for the subordinate staff of the then Kenya Posts and Telecommunications Corporation (KP&TC).",
    description2: "These staff compelled by the desire to achieve economic dreams came together to assemble resources (Merry-go-rounds) to assist one another. Their focus for membership encompassed the then East Africa Community Region.",
    image: '/images/templates/telepost-sacco/about_us.jpg',
    vision: {
        title: 'Vision',
        description: 'To be the preferred SACCO that provide sound financial solution.',
        icon: 'eye'
    },
    mission: {
        title: 'Mission',
        description: 'To provide effective financial solution through saving mobilization product innovation , modern technology and empowered workforce to enhance shareholder value.',
        icon: 'target'
    },
    coreValues: {
        title: 'Core Values',
        description: 'Respect\nTeamwork\nIntegrity\nQuality service\nInnovation and Creativity',
        icon: 'handshake'
    },
    motto: 'Together We Grow'
};

export default function WhoWeAre({ content }: { content?: WhoWeAreContent }) {
    const data = content || defaultContent;

    return (
        <div className="bg-white" data-studio-path="whoWeAre">

            {/* 
              SECTION 1: Introduction 
              Layout: Image Left, Text Right
            */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Image (Bonsai Style) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Added a subtle gray background card to match the feel of a contained image */}
                        <div className="relative rounded-lg overflow-hidden h-[400px] lg:h-[500px] w-full bg-gray-50 flex items-center justify-center">
                            <img
                                src={data.image}
                                alt="Growth and Origins"
                                className="h-full w-auto object-contain"
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                                data-studio-path="whoWeAre.image"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Introduction Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="space-y-2">
                            {/* Green accent line on top? Ref image had green bar above 'About Us', this has Red underline below 'Introduction' */}
                            {/* The reference image shows a small green header decoration? No, it shows 'About Us' title, then later 'Introduction' title with red underline.
                                 Let's stick to the specific screenshot 'Introduction' style: Text with red underline.
                             */}
                            <div className="flex gap-2 mb-2">
                                <div className="w-8 h-1 bg-[#008000]" />
                                <div className="w-2 h-1 bg-[#008000]" />
                            </div>

                            <h2 className="text-3xl font-extrabold text-[#111] inline-block relative pb-2" data-studio-path="whoWeAre.title">
                                {data.title}
                                <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-[#ff0000]" />
                            </h2>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                            <p data-studio-path="whoWeAre.description">
                                {data.description}
                            </p>
                            {data.description2 && (
                                <div className="whitespace-pre-line" data-studio-path="whoWeAre.description2">
                                    {data.description2}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 
              SECTION 2: Vision & Mission 
              Layout: Text Left, Image Right (VR Woman Style)
            */}
            <section className="py-20 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        {/* Title */}
                        <div>
                            <h2 className="text-3xl font-extrabold text-[#ff0000] inline-block relative pb-2">
                                Vision and Mission
                                <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#ff0000]" />
                            </h2>
                        </div>

                        {/* Vision */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-bold text-[#111]" data-studio-path="whoWeAre.vision.title">
                                {data.vision.title}:
                            </h3>
                            <p className="text-gray-700" data-studio-path="whoWeAre.vision.description">
                                {data.vision.description}
                            </p>
                            <div className="h-px w-full bg-gray-200 mt-4" />
                        </div>

                        {/* Mission */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-bold text-[#111]" data-studio-path="whoWeAre.mission.title">
                                {data.mission.title} :
                            </h3>
                            <p className="text-gray-700" data-studio-path="whoWeAre.mission.description">
                                {data.mission.description}
                            </p>
                            <div className="h-px w-full bg-gray-200 mt-4" />
                        </div>

                        {/* Motto */}
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-[#ff0000] inline-block relative pb-2">
                                Our Motto:
                                <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#ff0000]" />
                            </h3>
                            <p className="text-gray-700 font-medium" data-studio-path="whoWeAre.motto">
                                {data.motto}
                            </p>
                            <div className="h-px w-full bg-gray-200 mt-4" />
                        </div>

                        {/* Core Values */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-[#ff0000] inline-block relative pb-2">
                                Core Values:
                                <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#ff0000]" />
                            </h3>
                            <div className="space-y-1" data-studio-path="whoWeAre.coreValues.description">
                                {data.coreValues.description.split('\n').map((val, i) => (
                                    <div key={i} className="text-gray-700 font-medium">
                                        {val}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </motion.div>

                    {/* Right: Image (VR Woman) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-full min-h-[500px]"
                    >
                        {/* Using a placeholder for VR Woman with Green Tint */}
                        <div className="relative rounded-lg overflow-hidden h-full w-full">
                            {/* Base Image */}
                            <img
                                src="/images/templates/telepost-sacco/vision-1.jpg"
                                alt="Future Vision"
                                className="h-full w-full object-cover"
                            />
                            {/* Green Tint Overlay */}
                            <div className="absolute inset-0 bg-[#008000]/40 mix-blend-multiply" />
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
