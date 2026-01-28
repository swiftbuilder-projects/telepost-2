/**
 * Contact Page Template
 * 
 * Complete contact page with form and office locations
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export interface ContactPageContent {
    offices: Array<{
        name: string;
        address: string;
        phone: string;
        email: string;
        hours: string;
    }>;
}

export default function ContactPage({ content }: { content: ContactPageContent }) {
    const { offices } = content;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-[#0A0A0A] text-white">
            {/* Contact Form & Info */}
            <section className="py-16 bg-[#0F1419]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left - Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-500 focus:border-[#86EFAC] focus:ring-2 focus:ring-[#86EFAC]/20 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-500 focus:border-[#86EFAC] focus:ring-2 focus:ring-[#86EFAC]/20 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-500 focus:border-[#86EFAC] focus:ring-2 focus:ring-[#86EFAC]/20 outline-none transition-all"
                                            placeholder="+254 700 000 000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Subject</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-500 focus:border-[#86EFAC] focus:ring-2 focus:ring-[#86EFAC]/20 outline-none transition-all"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Message</label>
                                    <textarea
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-500 focus:border-[#86EFAC] focus:ring-2 focus:ring-[#86EFAC]/20 outline-none transition-all resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-[#86EFAC] text-black font-semibold rounded-full hover:bg-[#A7F3D0] transition-all hover:shadow-[0_0_30px_rgba(134,239,172,0.5)] flex items-center justify-center gap-2"
                                >
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </motion.div>

                        {/* Right - Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                                <p className="text-neutral-300 leading-relaxed mb-8">
                                    Have questions? We're here to help. Reach out to us through any of the channels below or visit one of our offices.
                                </p>
                            </div>

                            {/* Quick Contact */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded-lg bg-[#86EFAC]/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-[#86EFAC]" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-400 mb-1">Call Us</div>
                                        <div className="font-semibold">+254 700 000 000</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded-lg bg-[#86EFAC]/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-[#86EFAC]" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-400 mb-1">Email Us</div>
                                        <div className="font-semibold">info@telepostsacco.co.ke</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded-lg bg-[#86EFAC]/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-[#86EFAC]" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-400 mb-1">Business Hours</div>
                                        <div className="font-semibold">Mon - Fri: 8:00 AM - 5:00 PM</div>
                                        <div className="text-sm text-neutral-400">Sat: 9:00 AM - 1:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Office Locations */}
            {offices && offices.length > 0 && (
                <section className="py-16 bg-[#0A0A0A]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Offices</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {offices.map((office, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-[#86EFAC]/10 flex items-center justify-center mb-4">
                                        <MapPin className="w-6 h-6 text-[#86EFAC]" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{office.name}</h3>
                                    <div className="space-y-3 text-sm">
                                        <p className="text-neutral-300">{office.address}</p>
                                        <p className="text-neutral-400">
                                            <strong className="text-white">Phone:</strong> {office.phone}
                                        </p>
                                        <p className="text-neutral-400">
                                            <strong className="text-white">Email:</strong> {office.email}
                                        </p>
                                        <p className="text-neutral-400">
                                            <strong className="text-white">Hours:</strong> {office.hours}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
