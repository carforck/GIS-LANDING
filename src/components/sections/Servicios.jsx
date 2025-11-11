import React from "react";
import { motion } from "framer-motion";
import { FileText, Users, Globe2, Briefcase, ClipboardCheck, Scale } from "lucide-react";

export default function Servicios() {
  const servicios = [
    {
      icon: <FileText className="w-10 h-10 text-[#003366]" />,
      titulo: "Trámites Legales",
      descripcion:
        "Gestión completa de documentos notariales, certificaciones, apostillas y legalizaciones ante entidades oficiales.",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Globe2 className="w-10 h-10 text-[#003366]" />,
      titulo: "Asesoría Migratoria",
      descripcion:
        "Acompañamos tu proceso de visa, residencia o nacionalización con soluciones seguras y personalizadas.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-[#003366]" />,
      titulo: "Gestión Empresarial",
      descripcion:
        "Constitución de empresas, actualización de registros y apoyo administrativo para emprendedores y corporaciones.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Users className="w-10 h-10 text-[#003366]" />,
      titulo: "Asesorías Personalizadas",
      descripcion:
        "Atención integral con expertos en distintas áreas legales y administrativas, adaptadas a tus necesidades.",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-[#003366]" />,
      titulo: "Trámites Administrativos",
      descripcion:
        "Optimización de procesos institucionales, diligenciamiento y seguimiento ante organismos gubernamentales.",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Scale className="w-10 h-10 text-[#003366]" />,
      titulo: "Consultoría Legal",
      descripcion:
        "Orientación jurídica profesional para resolver conflictos o cumplir con requerimientos legales vigentes.",
      img: "https://images.unsplash.com/photo-1555374018-13a8994ab246?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      id="servicios"
      className="bg-[#E6EEF9] text-[#001F3F] py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#003366] mb-4"
        >
          Nuestros Servicios
        </motion.h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Ofrecemos soluciones integrales con respaldo profesional, orientadas a
          simplificar tus procesos legales, administrativos y migratorios.
        </p>
      </div>

      {/* GRID DE SERVICIOS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={servicio.img}
                alt={servicio.titulo}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">{servicio.icon}</div>
              <h3 className="text-2xl font-semibold text-[#003366] mb-2">
                {servicio.titulo}
              </h3>
              <p className="text-gray-600">{servicio.descripcion}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
