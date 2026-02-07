import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logos/logo1-04.png";
import { useLanguage } from "../i18n/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#");

  const links = [
    { name: t("navbar.home"), href: "#hero" },
    { name: t("navbar.about"), href: "#quienes-somos" },
    { name: t("navbar.services"), href: "#servicios" },
    { name: t("navbar.payments"), href: "#pagos" },
    { name: t("navbar.testimonials"), href: "#testimonios" },
    { name: t("navbar.contact"), href: "#contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { threshold: 0.5 }
    );

    links.forEach((link) => {
      if (link.href !== "#") {
        const section = document.querySelector(link.href);
        if (section) observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [links]);

  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F1A30]/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 md:py-4">
        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-12 sm:h-14 w-auto object-contain transition-transform hover:scale-105"
          />
          <span
            className={`font-semibold text-base sm:text-lg tracking-wide ${
              scrolled ? "text-white" : "text-white drop-shadow-md"
            }`}
          >
            Gestores Immigration Services
          </span>
        </a>

        {/* LINKS DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium tracking-wide transition-all group ${
                scrolled
                  ? "text-gray-100 hover:text-[#7EB4E3]"
                  : "text-white hover:text-[#7EB4E3]"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 rounded-full transition-all duration-300 ${
                  active === link.href
                    ? "w-full bg-[#7EB4E3]"
                    : "w-0 bg-[#7EB4E3] group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* BOTÓN DESKTOP */}
        <div className="flex items-center gap-4">
          <a
            href="#contacto"
            className={`hidden md:inline-block px-5 py-2 rounded-lg text-sm font-semibold shadow-md transition-all duration-300 ${
              scrolled
                ? "bg-[#7EB4E3] hover:bg-[#2F4783] text-[#0F1A30]"
                : "bg-white text-[#14254A] hover:bg-[#D7E3F4]"
            }`}
          >
            {t("navbar.contact")}
          </a>

          {/* BOTÓN CAMBIO DE IDIOMA */}
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white transition-all p-1"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0F1A30]/95 backdrop-blur-md shadow-lg"
          >
            <div className="flex flex-col px-6 py-5 space-y-5 text-center">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-medium text-base transition-all ${
                    active === link.href
                      ? "text-[#7EB4E3]"
                      : "text-gray-100 hover:text-[#7EB4E3]"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="bg-[#7EB4E3] hover:bg-[#2F4783] text-[#0F1A30] text-center py-2 rounded-lg font-semibold"
              >
                {t("navbar.contact")}
              </a>

              {/* BOTÓN CAMBIO DE IDIOMA EN MÓVIL */}
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              >
                {language === "es" ? "EN" : "ES"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
