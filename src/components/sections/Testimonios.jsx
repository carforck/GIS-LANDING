// src/components/sections/Testimonios.jsx+
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Testimonios() {
  const testimonios = [
    {
      nombre: "Laura Martínez",
      cargo: "Emprendedora",
      texto:
        "Gracias a su equipo pude registrar mi empresa sin complicaciones. Me acompañaron en todo el proceso con profesionalismo y empatía.",
      foto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
    },
    {
      nombre: "Carlos Rojas",
      cargo: "Cliente migratorio",
      texto:
        "Su asesoría fue clave para resolver mi trámite de residencia. Me sentí apoyado y seguro en cada paso.",
      foto: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
    },
    {
      nombre: "María Fernanda López",
      cargo: "Empresaria",
      texto:
        "Excelente servicio. Me ayudaron con los contratos laborales y el registro de marca, siempre atentos y claros.",
      foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    },
    {
      nombre: "Javier Gómez",
      cargo: "Profesional independiente",
      texto:
        "Un equipo confiable y humano. Me explicaron todo con paciencia y resolvieron mis trámites mucho antes de lo esperado.",
      foto: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section
      id="testimonios"
      className="bg-linear-to-b from-[#F5F7F4] to-white py-20 px-6 text-center overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#014D40] mb-6">
        Lo que dicen nuestros clientes 🌟
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Nuestra mayor satisfacción es ver a nuestros clientes tranquilos y felices con sus trámites resueltos de manera eficiente.
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
          reverseDirection: true, // Corre hacia la izquierda
        }}
        speed={3500} // velocidad suave
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
