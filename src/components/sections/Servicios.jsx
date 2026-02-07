import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Users,
  ClipboardCheck,
  ShieldCheck,
  BookOpen,
  RefreshCcw,
} from "lucide-react";

export default function Servicios() {
  const servicios = [
    {
      icon: <Users className="w-10 h-10 text-[#003366]" />,
      titulo: "Peticiones Familiares y de Pareja",
      descripcion:
        "Paquete completo para peticiones familiares y de pareja (I-130 – I-129F), con organización y acompañamiento durante el proceso.",
    },
    {
      icon: <FileText className="w-10 h-10 text-[#003366]" />,
      titulo: "Ajuste de Estatus",
      descripcion:
        "Preparación del paquete de Ajuste de Estatus (I-485), asegurando correcta documentación y orden del caso.",
    },
    {
      icon: <RefreshCcw className="w-10 h-10 text-[#003366]" />,
      titulo: "Renovaciones Migratorias",
      descripcion:
        "Paquetes de renovación de documentos migratorios como I-90 e I-765.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#003366]" />,
      titulo: "Visas Humanitarias",
      descripcion:
        "Gestión de paquetes para procesos de Visas Humanitarias: Visa U, Visa T y VAWA.",
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-[#003366]" />,
      titulo: "Organización y Seguimiento del Caso",
      descripcion:
        "Organización de evidencias, seguimiento administrativo y acompañamiento paso a paso según instrucciones del cliente o del abogado.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-[#003366]" />,
      titulo: "Educación Migratoria",
      descripcion:
        "Explicación general de procesos migratorios de forma informativa (no personalizada).",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#003366]" />,
      titulo: "Remoción de Condiciones",
      descripcion:
        "Paquete para remoción de condiciones de Green Card (I-751).",
    },
  ];

  return (
    <section
      id="servicios"
      className="bg-[#E6EEF9] text-[#001F3F] py-20 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#003366] mb-4"
        >
          Servicios Migratorios
        </motion.h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Brindamos apoyo administrativo y organizativo en procesos migratorios,
          acompañándote paso a paso con información clara y estructurada.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-center transition-all"
          >
            <div className="flex justify-center mb-4">{servicio.icon}</div>
            <h3 className="text-xl font-semibold text-[#003366] mb-2">
              {servicio.titulo}
            </h3>
            <p className="text-gray-600 text-sm">{servicio.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
