import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, Users } from "lucide-react";

const tabs = [
  {
    id: "mision",
    label: "Misión",
    icon: Target,
    content:
      "Brindar asesoría y acompañamiento profesional en la gestión de trámites migratorios y administrativos, ofreciendo soluciones confiables, rápidas y personalizadas con atención humana y eficiente.",
    image: "/2.png", // Imagen Misión
  },
  {
    id: "vision",
    label: "Visión",
    icon: Eye,
    content:
      "Ser una empresa referente en asesorías migratorias y gestión administrativa, reconocida por su innovación, profesionalismo y compromiso con la satisfacción de nuestros clientes.",
    image: "/3.png", // Imagen Visión
  },
];

export default function QuienesSomos() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate tabs
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="quienes-somos"
      className="relative bg-linear-to-b from-[#1B263B] via-[#415A77] to-[#E0E6ED] text-white py-28 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm tracking-widest uppercase text-[#A5C8F0]/80 mb-4">
            Sobre nosotros
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#A5C8F0] mb-6">
            ¿Quiénes Somos?
          </h2>
          <div className="w-20 h-1 bg-[#A5C8F0] mx-auto rounded-full" />
        </motion.div>

        {/* QUIÉNES SOMOS - INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-24 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <Users size={32} className="text-[#A5C8F0]" />
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            En{" "}
            <span className="font-semibold text-[#A5C8F0]">
              GIS Asesorías Migratorias
            </span>
            , nos especializamos en brindar acompañamiento integral para trámites
            legales, migratorios y administrativos. Nuestra filosofía se basa en
            la empatía, la transparencia y el compromiso con el bienestar de cada
            cliente.
          </p>
        </motion.div>

        {/* MISION / VISION */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* LEFT: Tabs */}
          <div>
            {/* Tab buttons */}
            <div className="flex gap-6 mb-12 justify-center lg:justify-start">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = index === activeTab;

                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(index);
                      setIsPaused(true);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all relative
                      ${
                        isActive
                          ? "bg-[#A5C8F0] text-[#1B263B] shadow-xl"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                  >
                    <motion.span
                      animate={
                        isActive
                          ? { scale: [1, 1.2, 1] }
                          : { scale: 1 }
                      }
                      transition={{
                        duration: 1.6,
                        repeat: isActive ? Infinity : 0,
                      }}
                    >
                      <Icon size={20} />
                    </motion.span>

                    {tab.label}

                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-full ring-2 ring-[#A5C8F0]/40"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tabs[activeTab].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-bold text-[#A5C8F0] mb-4 flex items-center gap-3">
                    {React.createElement(tabs[activeTab].icon, { size: 26 })}
                    {tabs[activeTab].label}
                  </h3>
                  <p className="text-gray-100 leading-relaxed">
                    {tabs[activeTab].content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Image synced */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={tabs[activeTab].image}
                  src={tabs[activeTab].image}
                  alt={`Imagen ${tabs[activeTab].label}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover aspect-4/3"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-linear-to-t from-[#1B263B]/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* DISCLAIMER */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center text-sm text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          Este servicio no constituye asesoría legal ni representación ante
          USCIS o cortes de inmigración. En los casos que requieran asesoría
          legal, el cliente será referido a un abogado licenciado en los Estados
          Unidos.
        </motion.p>
      </div>
    </section>
  );
}
