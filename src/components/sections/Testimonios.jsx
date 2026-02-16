// src/components/sections/Testimonios.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Testimonios() {
  const { t } = useLanguage();

  const testimonios = t("testimonials.list") || [];

  return (
    <section
      id="testimonios"
      className="bg-linear-to-b from-[#F5F7F4] to-white py-20 px-6 text-center overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#014D40] mb-6">
        {t("testimonials.title")} 🌟
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        {t("testimonials.subtitle")}
      </p>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={3500}
        className="max-w-6xl mx-auto"
      >
        {testimonios.map((test, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-2xl p-8 md:p-10 mx-4 transition-transform duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <img
                  src={test.foto}
                  alt={test.nombre}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-emerald-400/40"
                />

                <p className="text-gray-700 italic mb-4 text-base md:text-lg leading-relaxed">
                  “{test.texto}”
                </p>

                <h3 className="text-xl font-semibold text-[#014D40]">
                  {test.nombre}
                </h3>

                <p className="text-gray-500 text-sm">{test.cargo}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

