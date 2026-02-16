import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import {
  FileText,
  Users,
  ClipboardCheck,
  ShieldCheck,
  BookOpen,
  RefreshCcw,
} from "lucide-react";

export default function Servicios() {
  const { t } = useLanguage();

  const services = t("services.list");

  const icons = [
    <Users className="w-10 h-10 text-[#003366]" />,
    <FileText className="w-10 h-10 text-[#003366]" />,
    <RefreshCcw className="w-10 h-10 text-[#003366]" />,
    <ShieldCheck className="w-10 h-10 text-[#003366]" />,
    <ClipboardCheck className="w-10 h-10 text-[#003366]" />,
    <BookOpen className="w-10 h-10 text-[#003366]" />,
    <ShieldCheck className="w-10 h-10 text-[#003366]" />,
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
          {t("services.title")}
        </motion.h2>

        <p className="text-gray-700 max-w-3xl mx-auto">
          {t("services.subtitle")}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-center transition-all"
          >
            <div className="flex justify-center mb-4">
              {icons[index]}
            </div>

            <h3 className="text-xl font-semibold text-[#003366] mb-2">
              {service.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
