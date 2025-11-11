import React from "react";
import { motion } from "framer-motion";

export default function QuienesSomos() {
  return (
    <section
      id="quienes-somos"
      className="relative bg-linear-to-b from-[#1B263B] via-[#415A77] to-[#E0E6ED] text-white py-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center md:text-left">
        {/* Título principal */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center md:text-left text-[#A5C8F0]"
        >
          ¿Quiénes Somos?
        </motion.h2>

        {/* Contenido */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-100 leading-relaxed mb-6">
              En <span className="font-semibold text-[#A5C8F0]">GIS Asesorías Migratorias</span>, nos especializamos en brindar acompañamiento integral para trámites legales, migratorios y administrativos. Nuestra filosofía se basa en la empatía, la transparencia y el compromiso con el bienestar de cada cliente.
            </p>

            {/* Misión */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-[#A5C8F0] mb-2">Misión</h3>
              <p className="text-gray-100 leading-relaxed">
                Brindar asesoría y acompañamiento profesional en la gestión de trámites legales y migratorios, ofreciendo soluciones confiables, rápidas y personalizadas con atención humana y eficiente.
              </p>
            </div>

            {/* Visión */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-[#A5C8F0] mb-2">Visión</h3>
              <p className="text-gray-100 leading-relaxed">
                Ser una empresa referente en asesorías migratorias y gestión administrativa, reconocida por su innovación, profesionalismo y compromiso con la satisfacción de nuestros clientes.
              </p>
            </div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=800&q=80"
              alt="Equipo de trabajo profesional colaborando"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>

      {/* Degradado inferior para integración con fondo claro */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-[#E0E6ED] to-transparent"></div>
    </section>
  );
}
