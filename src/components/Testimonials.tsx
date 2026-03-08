import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    return (
        <SectionWrapper id="testimonials">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Client <span className="text-primary text-glow">Stories</span>
                </h2>
            </div>

            <div className="max-w-4xl mx-auto relative px-4">
                {/* Carousel Content */}
                <div className="h-80 bg-surface/50 backdrop-blur-sm border border-white/5 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-8 left-8 z-20">
                        <Quote className="text-white/10" size={64} />
                    </div>

                    <div
                        className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {TESTIMONIALS.map((testimonial) => (
                            <div key={testimonial.id} className="min-w-full h-full flex flex-col items-center justify-center p-8 md:p-12 relative">
                                <div className="max-w-2xl mx-auto text-center space-y-6">
                                    <p className="text-lg md:text-2xl font-light italic text-gray-300 leading-relaxed">
                                        "{testimonial.text}"
                                    </p>

                                    <div className="flex items-center justify-center space-x-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                                        />
                                        <div className="text-left">
                                            <h4 className="font-bold text-white">{testimonial.name}</h4>
                                            <p className="text-xs text-secondary uppercase tracking-wide">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Controls */}
                <button
                    onClick={prev}
                    className="absolute top-40 -left-4 md:-left-12 transform -translate-y-1/2 p-3 rounded-full bg-background border 
                    border-white/10 hover:border-primary hover:text-primary transition-all duration-300 shadow-xl cursor-pointer"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={next}
                    className="absolute top-40 -right-4 md:-right-12 transform -translate-y-1/2 p-3 rounded-full bg-background 
                    border border-white/10 hover:border-primary hover:text-primary transition-all duration-300 shadow-xl cursor-pointer"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Indicators */}
                <div className="flex justify-center space-x-2 mt-8">
                    {TESTIMONIALS.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 
                                ${idx === currentIndex
                                    ? 'bg-primary w-6'
                                    : 'bg-white/20 hover:bg-white/40'} cursor-pointer`}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;
