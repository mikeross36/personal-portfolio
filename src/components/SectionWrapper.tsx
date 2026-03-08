import React from 'react';

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '' }) => {
    return (
        <section id={id} className={`py-20 md:py-32 relative overflow-hidden ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {children}
            </div>
            {/* Background Grid Pattern Overlay */}
            <div className="absolute inset-0 z-0 bg-grid-white/[0.02] bg-size-[50px_50px] pointer-events-none" />
        </section>
    );
};

export default SectionWrapper;
