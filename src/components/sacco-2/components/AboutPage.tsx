/**
 * About Page Template
 * 
 * Complete About Us page with team, mission, and history
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';
import Image from 'next/image';
import { TeamMember, Timeline } from '../types';

export interface AboutPageContent {
    mission: string;
    vision: string;
    values: string[];
    history: Timeline[];
    team: TeamMember[];
    stats: Array<{ value: string; label: string }>;
}

export default function AboutPage({ content }: { content: AboutPageContent }) {
    const { mission, vision, values, history, team, stats } = content;

    return (
        <div className="bg-[#0A0A0A] text-white">
            {/* Mission & Vision */}
            <section className="py-16 bg-[#0F1419]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#86EFAC]/10 flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-[#86EFAC]" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-neutral-300 leading-relaxed">{mission}</p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#86EFAC]/10 flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-[#86EFAC]" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                            <p className="text-neutral-300 leading-relaxed">{vision}</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            {stats && stats.length > 0 && (
                <section className="py-16 bg-[#0A0A0A]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-[#86EFAC] mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-neutral-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Core Values */}
            <section className="py-16 bg-[#0F1419]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 text-center"
                            >
                                <div className="w-12 h-12 rounded-lg bg-[#86EFAC]/10 flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-6 h-6 text-[#86EFAC]" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{value}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* History Timeline */}
            {history && history.length > 0 && (
                <section className="py-16 bg-[#0A0A0A]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
                        <div className="space-y-8">
                            {history.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-6"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-full bg-[#86EFAC]/10 border-2 border-[#86EFAC] flex items-center justify-center">
                                            <span className="text-lg font-bold text-[#86EFAC]">{item.year}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 pb-8 border-l-2 border-white/10 pl-6 -ml-8">
                                        <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                                        <p className="text-neutral-400">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Team */}
            {team && team.length > 0 && (
                <section className="py-16 bg-[#0F1419]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div className="w-14 h-14 rounded-xl bg-[#86EFAC]/10 flex items-center justify-center mx-auto mb-4">
                                <Users className="w-7 h-7 text-[#86EFAC]" />
                            </div>
                            <h2 className="text-3xl font-bold">Our Leadership Team</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {team.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-[#86EFAC] mb-2">{member.role}</p>
                                    <p className="text-sm text-neutral-400">{member.bio}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
