
import React from 'react';

interface Testimonial {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
}

interface TestimonialsProps {
    title?: string;
    testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
    title = "Trusted by Developers",
    testimonials = []
}) => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12 sm:text-4xl">
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
                            <div className="flex items-center mb-6">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                                    {item.avatar ? <img src={item.avatar} alt={item.author} className="h-10 w-10 rounded-full" /> : item.author.charAt(0)}
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold text-gray-900">{item.author}</h4>
                                    <p className="text-sm text-gray-500">{item.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">"{item.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
