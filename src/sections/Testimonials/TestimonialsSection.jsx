import React, { useState, useEffect, useCallback } from 'react';
import { testimonialsData } from "@/data/info";
import TestimonialCard from "@/components/TestimonialCard";

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Update visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalCards = testimonialsData.length;
  // Maximum index we can scroll to without showing empty spaces at the end
  const maxIndex = Math.max(0, totalCards - visibleCards);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="text-center mb-16 px-4">
        <p className="text-[#c65f42] text-xs font-bold tracking-[0.2em] uppercase mb-4">
          TESTIMONIALS
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 font-normal">
          Experiences that Inspire
        </h2>
        <div className="w-12 h-[1px] bg-[#c65f42]/30 mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
          >
            {testimonialsData.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-6 mt-12">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-800 hover:text-gray-800 transition-colors cursor-pointer"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentIndex ? 'bg-[#c65f42]' : 'bg-gray-200'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-800 hover:text-gray-800 transition-colors cursor-pointer"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default TestimonialsSection;
