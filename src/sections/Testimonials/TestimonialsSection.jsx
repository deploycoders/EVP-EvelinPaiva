import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { testimonialsData } from "@/data/info";
import TestimonialCard from "@/components/TestimonialCard";

function TestimonialsSection() {
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
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.swiper-pagination-testimonials',
            clickable: true,
            bulletClass: 'swiper-custom-bullet',
            bulletActiveClass: 'swiper-custom-bullet-active',
          }}
          navigation={{
            prevEl: '.swiper-button-prev-testimonials',
            nextEl: '.swiper-button-next-testimonials',
          }}
          className="pb-4"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <div className="h-full px-2 py-4">
                <TestimonialCard {...testimonial} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-6 mt-12">
        <button 
          className="swiper-button-prev-testimonials w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-800 hover:text-gray-800 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="swiper-pagination-testimonials flex gap-2 items-center justify-center"></div>

        <button 
          className="swiper-button-next-testimonials w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-800 hover:text-gray-800 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .swiper-custom-bullet {
          width: 8px;
          height: 8px;
          display: inline-block;
          border-radius: 50%;
          background: #e5e7eb;
          transition: all 0.2s;
          cursor: pointer;
        }
        .swiper-custom-bullet-active {
          background: #c65f42;
        }
      `}} />
    </section>
  );
}

export default TestimonialsSection;
