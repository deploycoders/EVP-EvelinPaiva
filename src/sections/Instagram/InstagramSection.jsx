import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { instagramData } from "@/data/info";
import InstagramCard from "@/components/InstagramCard";

function InstagramSection() {
  return (
    <section id="portfolio" className="bg-white py-20 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 mb-6">
              <svg
                className="w-4 h-4 text-[#c65f42]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span className="text-gray-600 text-sm font-medium">
                {instagramData.handle}
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 font-normal">
              Follow us on Instagram
            </h2>
            <div className="w-16 h-[2px] bg-[#c65f42]"></div>
          </div>

          <div className="flex flex-col items-end gap-6 max-w-sm text-right">
            <p className="text-gray-600 text-sm">{instagramData.description}</p>
            <div className="flex gap-2">
              <button
                className="swiper-button-prev-instagram w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-800 hover:text-gray-800 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous post"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className="swiper-button-next-instagram w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-800 hover:text-gray-800 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next post"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Area */}
        <div className="relative mb-8">
          <div className="mx-[-12px] px-[12px]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".swiper-pagination-instagram",
                clickable: true,
                bulletClass: "swiper-custom-bullet-ig",
                bulletActiveClass: "swiper-custom-bullet-active-ig",
              }}
              navigation={{
                prevEl: ".swiper-button-prev-instagram",
                nextEl: ".swiper-button-next-instagram",
              }}
              className="pb-4 pt-2"
            >
              {instagramData.posts.map((post) => (
                <SwiperSlide key={post.id}>
                  <InstagramCard {...post} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Pagination Dots Container */}
        <div className="swiper-pagination-instagram flex justify-center flex-wrap gap-2 mb-12"></div>

        {/* Bottom Button */}
        <div className="flex justify-center">
          <a
            href={instagramData.profileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-evp-accent text-white hover:bg-evp-accent-deep hover:-translate-y-1 transition-all ease-in duration-100 rounded-md"
          >
            <svg
              className="w-5 h-5 text-evp-bg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <span className="text-xs font-bold tracking-[0.2em]">
              VIEW FULL PROFILE
            </span>
          </a>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-custom-bullet-ig {
          width: 8px;
          height: 8px;
          display: inline-block;
          border-radius: 50%;
          background: #e5e7eb;
          transition: all 0.2s;
          cursor: pointer;
          margin: 0 4px;
        }
        .swiper-custom-bullet-active-ig {
          background: #c65f42;
          width: 8px;
        }
      `,
        }}
      />
    </section>
  );
}

export default InstagramSection;
