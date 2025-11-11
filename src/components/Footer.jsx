import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#001F3F] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Columna 1 - Marca y descripción */}
        <div>
          <h3 className="text-2xl font-bold text-secondary-400 mb-4">GIS Migration</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Asesorías migratorias, legales y administrativas con atención humana, 
            transparencia y soluciones eficientes para nuestros clientes.
          </p>
        </div>

        {/* Columna 2 - Enlaces rápidos */}
        <div>
          <h4 className="text-lg font-semibold text-secondary-300 mb-4">Enlaces rápidos</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#hero" className="hover:text-secondary-400 transition">Inicio</a></li>
            <li><a href="#quienes-somos" className="hover:text-secondary-400 transition">Quiénes Somos</a></li>
            <li><a href="#servicios" className="hover:text-secondary-400 transition">Servicios</a></li>
            <li><a href="#pagos" className="hover:text-secondary-400 transition">Pagos</a></li>
            <li><a href="#contacto" className="hover:text-secondary-400 transition">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3 - Contacto */}
        <div>
          <h4 className="text-lg font-semibold text-secondary-300 mb-4">Contáctanos</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2"><Phone size={16} className="text-secondary-400" /> +57 300 123 4567</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-secondary-400" /> contacto@gismigration.com</li>
            <li className="flex items-center gap-2"><MapPin size={16} className="text-secondary-400" /> Cartagena, Colombia</li>
          </ul>

          <div className="flex gap-4 mt-5">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-secondary-400 transition">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-secondary-400 transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-secondary-400 font-semibold">GIS Migration</span>.  
        Todos los derechos reservados.
        <br />
        <span className="text-gray-500 text-xs">
          Desarrollado con ❤️ por <span className="text-secondary-400 font-medium">C&M Tech</span> – Soluciones Tecnológicas
        </span>
      </div>
    </footer>
  );
}
