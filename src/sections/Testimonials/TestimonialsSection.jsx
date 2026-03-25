"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// Estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Datos y Componentes (Asegúrate de que las rutas sean correctas)
import { testimonialsData } from "@/data/info";
import TestimonialCard from "@/components/TestimonialCard";

function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full py-20 bg-evp-bg overflow-hidden"
    >
      {/* --- CONTENEDOR DEL ENCABEZADO --- */}
      <div className="max-w-7xl mx-auto overflow-x-hidden px-6 md:px-12 mb-12 md:mb-16">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end border-b border-[#c65f42]/20 pb-10"
        >
          {/* Bloque Izquierdo: Título y Línea */}
          <div className="flex flex-col items-start max-w-xl">
            <p className="text-[#c65f42] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
              Testimonials
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8 font-normal leading-[1.1]">
              Experiences <br className="hidden md:block" />
              that Inspire
            </h2>
            {/* Línea decorativa a la izquierda */}
            <div className="w-20 h-[2px] bg-[#c65f42]"></div>
          </div>

          {/* Bloque Derecho: Descripción */}
          <div className="md:text-right max-w-sm">
            <p className="font-serif text-xl italic text-gray-600 leading-relaxed">
              Authentic stories from those who have transformed their well-being
              with us.
            </p>
          </div>
        </motion.header>
      </div>

      {/* --- CONTENEDOR DEL CARRUSEL --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 overflow-x-hidden relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          // Permitimos que el overflow sea visible para que no se corten las sombras de las cards
          className="!overflow-visible"
          breakpoints={{
            640: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".swiper-pagination-testimonials",
            clickable: true,
            bulletClass: "swiper-custom-bullet",
            bulletActiveClass: "swiper-custom-bullet-active",
          }}
          navigation={{
            prevEl: ".swiper-button-prev-testimonials",
            nextEl: ".swiper-button-next-testimonials",
          }}
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto flex">
              <div className="w-full h-full py-8">
                <TestimonialCard {...testimonial} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- CONTROLES (Puntos y Flechas) --- */}
        <div className="flex justify-center items-center gap-8 mt-10">
          {/* Flecha Izquierda */}
          <button
            className="swiper-button-prev-testimonials group relative flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 transition-all hover:border-[#c65f42] cursor-pointer disabled:opacity-30"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5 text-gray-400 transition-colors group-hover:text-[#c65f42]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Puntos de paginación personalizados */}
          <div className="swiper-pagination-testimonials flex gap-3 items-center justify-center"></div>

          {/* Flecha Derecha */}
          <button
            className="swiper-button-next-testimonials group relative flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 transition-all hover:border-[#c65f42] cursor-pointer disabled:opacity-30"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5 text-gray-400 transition-colors group-hover:text-[#c65f42]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* --- ESTILOS CSS PARA LOS PUNTOS --- */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-custom-bullet {
          width: 8px;
          height: 8px;
          display: inline-block;
          border-radius: 50%;
          background: #d1d5db;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .swiper-custom-bullet-active {
          background: #c65f42;
          width: 24px;
          border-radius: 4px;
        }
      `,
        }}
      />
    </section>
  );
}

export default TestimonialsSection;
