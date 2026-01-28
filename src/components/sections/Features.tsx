
import React from 'react';

interface Feature {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface FeaturesProps {
    title?: string;
    subtitle?: string;
    features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({
    title = "Why Choose Us?",
    subtitle = "Our platform offers a wide range of features designed to help you succeed.",
    features = []
}) => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        {subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-5 mx-auto md:mx-0">
                                {feature.icon || (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
