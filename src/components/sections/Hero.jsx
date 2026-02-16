// src/components/sections/Hero.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  // 🔥 Ahora los slides vienen del archivo translations
  const slides = t("hero.slides");

  return (
    <section
      id="hero"
      className="relative w-full h-[90vh] md:h-[95vh] overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => {
          // Puedes mantener tus imágenes aquí
          const images = ["./1.png", "./2.png",
            "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1600&q=80"
          ];

          return (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center flex items-center justify-center text-center relative"
                style={{ backgroundImage: `url(${images[index]})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-[#0D1B2A]/90 via-[#1B263B]/80 to-[#415A77]/70"></div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl px-6 text-white">
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-xl">
                    {slide.title}
                  </h1>

                  <h2 className="text-2xl md:text-4xl font-semibold text-[#7BAFD4] mb-3">
                    {slide.subtitle}
                  </h2>

                  <p className="text-lg md:text-xl mb-8 text-gray-100 opacity-90 max-w-2xl mx-auto">
                    {slide.text}
                  </p>

                  {/* CTA */}
                  <a
                    href="#contacto"
                    className="inline-block bg-[#415A77] hover:bg-[#1B263B] text-white font-semibold px-10 py-4 rounded-full shadow-md text-lg transition-all duration-300"
                  >
                    {t("hero.button")}
                  </a>

                  {/* Disclaimer */}
                  <p className="mt-4 text-xs md:text-sm text-gray-300 opacity-80 max-w-xl mx-auto">
                    {t("hero.disclaimer")}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent"></div>
    </section>
  );
}
