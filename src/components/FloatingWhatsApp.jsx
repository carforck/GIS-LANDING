import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  const phoneNumber = "57"; // Cambia al número de teléfono correcto

  // Obtener mensaje traducido
  const message = useMemo(() => {
    return encodeURIComponent(t("whatsapp.message"));
  }, [t]);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // Mostrar solo después de scroll
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 group"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Tooltip */}
          <div
            className="
              absolute right-16 top-1/2 -translate-y-1/2
              bg-[#1B263B] text-white text-sm
              px-4 py-2 rounded-lg
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              whitespace-nowrap shadow-xl
            "
          >
            {t("whatsapp.tooltip")}
          </div>

          {/* Botón */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center justify-center
              w-14 h-14 rounded-full
              bg-[#25D366]
              shadow-2xl
            "
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="text-white"
            >
              <FaWhatsapp size={30} />
            </motion.div>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
