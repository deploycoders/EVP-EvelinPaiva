import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { testimonialsData } from "@/data/siteContent";
import "swiper/css";
import "swiper/css/navigation";

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1 text-evp-accent" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 2.2l2.1 4.3 4.7.7-3.4 3.4.8 4.7L10 13.1 5.8 15.3l.8-4.7L3.2 7.2l4.7-.7L10 2.2Z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <article className="h-full border border-evp-border bg-evp-section/65 p-6 shadow-[0_8px_24px_rgba(26,26,26,0.03)] transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <Stars count={item.rating} />
      <p className="mt-5 text-lg italic leading-8 text-evp-body/90">“{item.quote}”</p>

      <div className="mt-7 flex items-center gap-3 border-t border-evp-border pt-5">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-evp-bg text-sm font-semibold text-evp-body/80">
          {item.initials}
        </span>
        <div>
          <p className="font-title text-2xl text-evp-title">{item.name}</p>
          <p className="text-[11px] uppercase tracking-[0.14em] text-evp-accent">{item.service}</p>
        </div>
      </div>
    </article>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full border-y border-evp-border bg-evp-bg py-16 md:py-20">
      <div className="mx-auto w-[92%] max-w-6xl">
        <header className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <p className="text-[11px] uppercase tracking-[0.16em] text-evp-accent">Testimonials</p>
          <h2 className="mt-3 font-title text-5xl text-evp-title md:text-6xl">Experiences that Inspire</h2>
          <div className="mx-auto mt-6 h-[1px] w-14 bg-evp-accent/35" />
        </header>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            loop
            speed={650}
            slidesPerView={1}
            spaceBetween={18}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={{ prevEl: ".testimonials-prev", nextEl: ".testimonials-next" }}
            breakpoints={{
              640: { slidesPerView: 1.15, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 22 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="testimonials-swiper"
          >
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto pb-8">
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-5 flex justify-end gap-3">
            <button
              type="button"
              className="testimonials-prev inline-flex h-11 w-11 items-center justify-center rounded-full border border-evp-border bg-evp-section text-evp-accent transition hover:bg-evp-bg"
              aria-label="Previous testimonial"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              className="testimonials-next inline-flex h-11 w-11 items-center justify-center rounded-full border border-evp-border bg-evp-section text-evp-accent transition hover:bg-evp-bg"
              aria-label="Next testimonial"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
