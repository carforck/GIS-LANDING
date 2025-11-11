import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: "", correo: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_xxxxxx", "template_xxxxxx", formData, "public_key_xxxxxx")
      .then(() => {
        setEnviado(true);
        setFormData({ nombre: "", correo: "", mensaje: "" });
        setLoading(false);
        setTimeout(() => setEnviado(false), 5000);
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        setLoading(false);
      });
  };

  return (
    <section
      id="contacto"
      className="relative bg-linear-to-b from-primary-900 to-primary-800 py-20 px-6 md:px-12 flex flex-col items-center text-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary-100 z-10 relative">
        Contáctanos
      </h2>
      <p className="text-primary-200 max-w-3xl mb-12 z-10 relative">
        ¿Tienes dudas o deseas más información? Escríbenos y nuestro equipo se comunicará contigo lo antes posible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* IZQUIERDA: MAPA + INFO CONTACTO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          {/* Mapa */}
          <div className="rounded-3xl overflow-hidden shadow-2xl h-80 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.658745702071!2d-75.55600238426932!3d10.39889689262647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42f4a648d4a91%3A0x92e5e2d708d9f6dc!2sBocagrande%2C%20Cartagena%2C%20Colombia!5e0!3m2!1ses!2sco!4v1709180000000!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Información de contacto */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Mail className="text-primary-300 w-6 h-6" />
              <p className="text-primary-100 font-medium">contacto@gismigration.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary-300 w-6 h-6" />
              <p className="text-primary-100 font-medium">+57 300 123 4567</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-primary-300 w-6 h-6" />
              <p className="text-primary-100 font-medium">Cartagena de Indias, Bocagrande</p>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-primary-100 hover:text-pink-400 transition"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-primary-100 hover:text-blue-500 transition"
              >
                <Facebook size={28} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* DERECHA: FORMULARIO */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20 flex flex-col gap-6 text-left"
        >
          {/* Campos Nombre y Correo en la misma fila */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-primary-100 font-medium text-left">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-primary-100 placeholder-primary-200 focus:ring-2 focus:ring-primary-400 outline-none transition"
              />
            </div>
            <div>
              <label className="block mb-2 text-primary-100 font-medium text-left">Correo electrónico</label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
                placeholder="tu@correo.com"
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-primary-100 placeholder-primary-200 focus:ring-2 focus:ring-primary-400 outline-none transition"
              />
            </div>
          </div>

          {/* Mensaje */}
          <div>
            <label className="block mb-2 text-primary-100 font-medium text-left">Mensaje</label>
            <textarea
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
              placeholder="Escribe tu mensaje..."
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-primary-100 placeholder-primary-200 focus:ring-2 focus:ring-primary-400 outline-none transition"
            ></textarea>
          </div>

          {/* Botón enviar */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-2xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} /> {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {/* Mensaje de éxito */}
          {enviado && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-sm mt-3 font-medium"
            >
              ✅ ¡Tu mensaje ha sido enviado con éxito!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
