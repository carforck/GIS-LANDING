// src/components/sections/Hero.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1600&q=80", // profesionales en oficina
      title: "Asesorías Migratorias y Legales",
      subtitle: "Tu confianza, nuestro compromiso",
      text: "Brindamos soluciones confiables y seguras para tus trámites en Colombia y el exterior.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80", // documentos, gestiones
      title: "Gestión Administrativa Eficaz",
      subtitle: "Nos encargamos de todo por ti",
      text: "Simplificamos tus procesos legales y administrativos con un acompañamiento integral.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1600&q=80", // atención al cliente
      title: "Atención Profesional y Humana",
      subtitle: "Más que asesorías, soluciones reales",
      text: "En GIS te acompañamos con empatía, transparencia y experiencia en cada paso.",
    },
  ];

  return (
    <section id="hero" className="relative w-full h-[90vh] md:h-[95vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay con gradiente basado en paleta */}
              <div className="absolute inset-0 bg-linear-to-r from-[#0D1B2A]/90 via-[#1B263B]/80 to-[#415A77]/70"></div>

              {/* Contenido */}
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
                <a
                  href="#contacto"
                  className="bg-[#415A77] hover:bg-[#1B263B] text-white font-semibold px-10 py-4 rounded-full shadow-md text-lg transition-all duration-300"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Degradado decorativo inferior */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent"></div>
    </section>
  );
}
