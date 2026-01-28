import React from 'react';
import { Facebook, Twitter } from 'lucide-react'; // Using Lucide for FB, keeping Twitter import if needed but will use custom X

export const FloatingSocialBar = () => {
    const socials = [
        {
            name: 'Facebook',
            icon: Facebook,
            url: 'https://www.facebook.com/TelepostSacco',
            bgColor: '#1877F2',
        },
        {
            name: 'X',
            url: 'https://twitter.com/TelepostSacco',
            bgColor: '#000000',
            isCustom: true,
            viewBox: '0 0 24 24',
            path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
        },
        {
            name: 'YouTube',
            url: 'https://www.youtube.com/@telepostsacco7699',
            bgColor: '#FF0000',
            isCustom: true,
            viewBox: '0 0 24 24',
            // Official YouTube Icon Path (Process)
            path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/telepostsacco',
            bgGradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
            isCustom: true,
            viewBox: '0 0 24 24',
            // Official Instagram Icon Path
            path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
        },
    ];

    return (
        <div className="fixed right-4 top-40 z-50 flex flex-col gap-3">
            {socials.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center transform transition-all hover:scale-110 hover:-translate-x-1 relative group rounded-full shadow-lg"
                    style={{
                        background: social.bgGradient || social.bgColor || '#333',
                    }}
                    title={social.name}
                >
                    {social.isCustom ? (
                        <svg viewBox={social.viewBox} aria-hidden="true" className="w-5 h-5 fill-white text-white">
                            <path d={social.path} />
                        </svg>
                    ) : (
                        social.icon && <social.icon className="w-5 h-5 text-white" fill="white" strokeWidth={0} />
                    )}
                </a>
            ))}
        </div>
    );
};
