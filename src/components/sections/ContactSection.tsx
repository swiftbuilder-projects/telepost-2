"use client";
import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, Building2, User, Phone, MapPin } from "lucide-react";

export interface ContactFormField {
    name: string;
    label: string;
    type: "text" | "email" | "tel" | "textarea";
    placeholder: string;
    required?: boolean;
    icon?: "user" | "email" | "phone" | "building" | "message";
}

export interface ContactInfoCard {
    icon: "email" | "phone" | "location" | "time";
    label: string;
    value: string;
}

export interface ContactSectionProps {
    // Header
    badge?: string;
    title: string;
    description: string;

    // Form
    formFields?: ContactFormField[];
    submitButtonText: string;

    // Contact Info Cards (optional)
    contactInfo?: ContactInfoCard[];

    // Styling
    variant?: "dark" | "light";
    layout?: "side-by-side" | "form-only" | "centered";
    accentColor?: string;
}

const iconMap = {
    user: User,
    email: Mail,
    phone: Phone,
    building: Building2,
    message: MessageSquare,
    location: MapPin,
    time: MessageSquare
};

const defaultFields: ContactFormField[] = [
    { name: "name", label: "Full Name", type: "text", placeholder: "John Doe", required: true, icon: "user" },
    { name: "company", label: "Company", type: "text", placeholder: "Acme Corp", icon: "building" },
    { name: "email", label: "Email Address", type: "email", placeholder: "john@acme.com", required: true, icon: "email" },
    { name: "message", label: "Message", type: "textarea", placeholder: "Tell us about your needs...", required: true }
];

export function ContactSection({ content }: { content?: ContactSectionProps }) {
    const {
        badge = "GET IN TOUCH",
        title = "Let's Connect",
        description = "Ready to get started? Reach out to our team.",
        formFields = defaultFields,
        submitButtonText = "Send Message",
        contactInfo = [],
        variant = "dark",
        layout = "side-by-side",
        accentColor = "emerald"
    } = content || {};

    const isDark = variant === "dark";
    const showContactInfo = contactInfo && contactInfo.length > 0 && layout === "side-by-side";

    return (
        <section
            className={`relative py-32 overflow-hidden ${isDark ? 'bg-[#0d1f1c]' : 'bg-gray-50'}`}
            data-studio-path="contact"
        >
            {/* Background Elements */}
            {isDark && (
                <>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1F3F3A] to-[#0d1f1c]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1)_0%,transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(20,184,166,0.08)_0%,transparent_50%)]" />

                    {/* Animated Blobs */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
                    />
                </>
            )}

            <div className={`${layout === "centered" ? "max-w-3xl" : "max-w-6xl"} mx-auto px-6 relative z-10`}>
                <div className={`grid grid-cols-1 ${showContactInfo ? "lg:grid-cols-2" : ""} gap-16 ${layout === "centered" ? "items-center" : "items-start"}`}>
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={layout === "centered" ? "text-center" : ""}
                    >
                        {badge && (
                            <span className={`inline-block py-1 px-3 rounded-full ${isDark ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-700'} border text-xs font-semibold tracking-wider mb-6`}>
                                {badge}
                            </span>
                        )}
                        <h2
                            className={`text-4xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6 leading-tight`}
                            data-studio-path="contact.title"
                        >
                            {title}
                        </h2>
                        <p
                            className={`text-xl ${isDark ? 'text-white/70' : 'text-gray-600'} leading-relaxed mb-10`}
                            data-studio-path="contact.description"
                        >
                            {description}
                        </p>

                        {/* Contact Info Cards */}
                        {showContactInfo && (
                            <div className="space-y-4" data-studio-path="contact.contactInfo">
                                {contactInfo.map((info, i) => {
                                    const Icon = iconMap[info.icon];
                                    return (
                                        <div
                                            key={i}
                                            className={`flex items-center gap-4 p-4 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} backdrop-blur-sm rounded-2xl border`}
                                            data-studio-path={`contact.contactInfo.${i}`}
                                        >
                                            <div className={`w-12 h-12 ${isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-500/10 text-emerald-600'} rounded-xl flex items-center justify-center`}>
                                                <Icon size={20} />
                                            </div>
                                            <div>
                                                <p className={`${isDark ? 'text-white/50' : 'text-gray-500'} text-xs font-semibold uppercase tracking-wider`} data-studio-path={`contact.contactInfo.${i}.label`}>
                                                    {info.label}
                                                </p>
                                                <p className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium`} data-studio-path={`contact.contactInfo.${i}.value`}>
                                                    {info.value}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className={`relative ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} backdrop-blur-xl rounded-3xl p-8 md:p-10 border`}>
                            {isDark && (
                                <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-50" />
                            )}

                            <form className="relative z-10 space-y-6" data-studio-path="contact.form">
                                {formFields.map((field, i) => {
                                    const Icon = field.icon ? iconMap[field.icon] : null;
                                    const isTextarea = field.type === "textarea";

                                    return (
                                        <div key={i} data-studio-path={`contact.formFields.${i}`}>
                                            <label className={`block ${isDark ? 'text-white/70' : 'text-gray-700'} text-sm font-medium mb-2`} data-studio-path={`contact.formFields.${i}.label`}>
                                                {field.label}
                                            </label>
                                            <div className="relative">
                                                {Icon && !isTextarea && (
                                                    <Icon size={18} className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-white/30' : 'text-gray-400'}`} />
                                                )}
                                                {isTextarea ? (
                                                    <textarea
                                                        name={field.name}
                                                        rows={4}
                                                        placeholder={field.placeholder}
                                                        required={field.required}
                                                        className={`w-full ${isDark ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:bg-white/10' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:bg-white'} border rounded-xl px-4 py-4 focus:outline-none focus:border-emerald-500 transition-all resize-none`}
                                                        data-studio-path={`contact.formFields.${i}.placeholder`}
                                                    />
                                                ) : (
                                                    <input
                                                        type={field.type}
                                                        name={field.name}
                                                        placeholder={field.placeholder}
                                                        required={field.required}
                                                        className={`w-full ${isDark ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:bg-white/10' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:bg-white'} border rounded-xl ${Icon ? 'px-12' : 'px-4'} py-4 focus:outline-none focus:border-emerald-500 transition-all`}
                                                        data-studio-path={`contact.formFields.${i}.placeholder`}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group"
                                    data-studio-path="contact.submitButtonText"
                                >
                                    {submitButtonText}
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
