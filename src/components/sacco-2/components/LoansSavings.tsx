import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Users, Smartphone, BookOpen, UserCheck, Briefcase, GraduationCap, Heart, Shield, Landmark, PiggyBank } from 'lucide-react';
import { LoansSavingsContent } from '../types';

const defaultContent: LoansSavingsContent = {
    title: 'LOANS & SAVINGS.',
    tabs: [
        {
            label: 'SAVINGS PRODUCTS',
            id: 'savings',
            ctaText: 'READ MORE',
            ctaLink: '#savings',
            features: [
                { title: 'Deposit Savings Product', description: 'This savings help members to save secure loans at 3 times or 5 times.' },
                { title: 'Share capital', description: 'Every society member is required to own the society by holding a certain number of shares.' },
                { title: 'Holiday Account', description: 'This account helps members save up for holidays and festive seasons.' }
            ]
        },
        {
            label: 'LOANS PRODUCTS',
            id: 'loans',
            ctaText: 'READ MORE',
            ctaLink: '#loans',
            features: [
                { title: 'Development Loan', description: 'Long-term loan for investment and asset acquisition.' },
                { title: 'Emergency Loan', description: 'Quick funds for unforeseen urgent needs.' },
                { title: 'School Fees Loan', description: 'Support for your children\'s education expenses.' }
            ]
        }
    ],
    circleFeatures: [
        { title: 'Core Values', description: '• Respect\n• Teamwork\n• Integrity\n• Quality service\n• Innovation and Creativity', icon: 'heart', color: '#ff0000' },
        { title: 'Mobile Banking', description: '1. Dial *882# on your mobile device.\n2. Select the account type you wish to check balance i.e. for savings account enter 1 or enter 3 to check loan Balance.\n3. Enter your Mobile Banking PIN and press send.', icon: 'phone', color: '#2E5BFF' },
        { title: 'Our Membership', description: 'We currently draw 4,359 members from organizations including Telkom Kenya, Postal Corporation, Multimedia University, Prime Telecoms, Pensioners, and more. Spouses and dependents are also welcome.', icon: 'users', color: '#fff503' },
        { title: 'FOSA Services', description: 'Front Office Service Activity: Access instant banking services including salary processing, ATM services, and over-the-counter transactions for your convenience.', icon: 'landmark', color: '#14B8A6' },
        { title: 'BOSA Services', description: 'Back Office Service Activity: Long-term dedicated savings and credit facilities designed to help you build lasting wealth and achieve major life milestones.', icon: 'piggy', color: '#8B5CF6' },
        { title: 'Financial Education', description: 'Telepost offer financial literacy programs and counseling services to empower members with the knowledge and skills to make informed financial decisions.', icon: 'book', color: '#008000' }
    ]
};

const iconMap: Record<string, any> = {
    book: BookOpen,
    phone: Smartphone,
    user: UserCheck,
    users: Users,
    business: Briefcase,
    student: GraduationCap,
    heart: Heart,
    shield: Shield,
    landmark: Landmark,
    piggy: PiggyBank
};

export default function LoansSavings({ content }: { content?: LoansSavingsContent }) {
    const data = content || defaultContent;
    const [activeTab, setActiveTab] = useState(data.tabs[0].id);
    const [hoveredCircleIdx, setHoveredCircleIdx] = useState<number>(0);

    const activeTabData = data.tabs.find(t => t.id === activeTab) || data.tabs[0];

    return (
        <section className="py-24 bg-white overflow-hidden" data-studio-path="loansSavings">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left side: Tabs and Features */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="flex gap-2">
                                <div className="w-10 h-1 bg-[#008000]" />
                                <div className="w-2 h-1 bg-[#ff0000]" />
                            </div>
                            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight" data-studio-path="loansSavings.title">
                                {data.title}
                            </h2>
                        </div>

                        {/* Tabs */}
                        <div className="flex bg-gray-50 p-1.5 rounded-lg w-fit">
                            {data.tabs?.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-8 py-3 rounded-md text-sm font-bold tracking-wider transition-all ${activeTab === tab.id
                                        ? 'bg-[#008000] text-white shadow-lg shadow-[#008000]/20'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Features List */}
                        <div className="space-y-6 min-h-[250px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    {activeTabData.features?.map((feature, idx) => (
                                        <div key={idx} className="flex gap-4 group">
                                            <div className="mt-1 flex-shrink-0">
                                                <Plus className="w-5 h-5 text-[#008000] font-bold" />
                                            </div>
                                            <div>
                                                <span className="font-bold text-gray-700" data-studio-path={`loansSavings.tabs.${data.tabs.findIndex(t => t.id === activeTab)}.features.${idx}.title`}>{feature.title}. </span>
                                                <span className="text-gray-500 text-sm leading-relaxed" data-studio-path={`loansSavings.tabs.${data.tabs.findIndex(t => t.id === activeTab)}.features.${idx}.description`}>{feature.description}</span>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <a
                            href={activeTabData.ctaLink}
                            className="inline-block bg-[#008000] hover:bg-[#236c3b] text-white px-10 py-4 rounded-md font-bold text-sm tracking-widest transition-all hover:scale-105"
                        >
                            {activeTabData.ctaText}
                        </a>
                    </div>

                    {/* Right side: Circular Feature */}
                    <div className="relative flex justify-center items-center h-[600px]">
                        {/* Outer Circle Ring */}
                        <div className="absolute w-[450px] h-[450px] border border-gray-100 rounded-full" />

                        {/* Central Content */}
                        <div className="relative z-10 w-[300px] text-center p-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={hoveredCircleIdx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-xl font-bold text-gray-800" data-studio-path={`loansSavings.circleFeatures.${hoveredCircleIdx}.title`}>
                                        {data.circleFeatures[hoveredCircleIdx].title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line" data-studio-path={`loansSavings.circleFeatures.${hoveredCircleIdx}.description`}>
                                        {data.circleFeatures[hoveredCircleIdx].description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Orbiting Icons */}
                        {data.circleFeatures?.map((feat, idx) => {
                            const angle = (idx * (360 / data.circleFeatures.length)) - 90;
                            const radius = 225; // Half of outer circle width
                            const x = Math.cos((angle * Math.PI) / 180) * radius;
                            const y = Math.sin((angle * Math.PI) / 180) * radius;
                            const Icon = iconMap[feat.icon] || BookOpen;
                            const isActive = hoveredCircleIdx === idx;
                            const featureColor = feat.color || '#008000';

                            return (
                                <motion.button
                                    key={idx}
                                    onMouseEnter={() => setHoveredCircleIdx(idx)}
                                    className={`absolute z-20 w-20 h-20 rounded-full flex items-center justify-center transition-all bg-white shadow-xl ${isActive
                                        ? 'scale-125 border-4'
                                        : 'hover:scale-110 border-0'
                                        }`}
                                    style={{
                                        left: `calc(50% + ${x}px - 40px)`,
                                        top: `calc(50% + ${y}px - 40px)`,
                                        borderColor: isActive ? featureColor : 'transparent',
                                        boxShadow: isActive ? `0 0 0 4px ${featureColor}20, 0 20px 40px -10px ${featureColor}40` : '0 10px 25px -5px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300`}
                                        style={{
                                            backgroundColor: isActive ? featureColor : `${featureColor}15`,
                                            color: isActive ? 'white' : featureColor
                                        }}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    {/* Orbital Glow / Ring */}
                                    {isActive && (
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1.2, opacity: 1 }}
                                            className="absolute inset-0 rounded-full -z-10"
                                            style={{
                                                background: `radial-gradient(circle, ${featureColor}20 0%, transparent 70%)`
                                            }}
                                        />
                                    )}
                                </motion.button>
                            );
                        })}

                        {/* Decorative background glow */}
                        <div className="absolute w-[500px] h-[500px] bg-[#008000]/5 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
