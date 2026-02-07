import { useState } from "react";
import { Mail, Phone, Instagram, Facebook, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensaje = `
Hola, deseo más información sobre sus servicios.

Nombre: ${formData.nombre}
Correo: ${formData.correo}
Mensaje: ${formData.mensaje}
    `;

    const whatsappURL = `https://wa.me/573013255256?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(whatsappURL, "_blank");

    setFormData({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <section
      id="contacto"
      className="relative bg-linear-to-b from-primary-900 to-primary-800 py-20 px-6 md:px-12 flex flex-col items-center text-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary-100">
        Contáctanos
      </h2>
      <p className="text-primary-200 max-w-3xl mb-14">
        ¿Tienes dudas o deseas más información? Escríbenos y con gusto te
        brindaremos orientación clara y acompañamiento administrativo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full max-w-6xl">
        {/* IZQUIERDA: INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 text-left"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold text-primary-100 mb-4">
              Estamos para ayudarte
            </h3>
            <p className="text-primary-200 leading-relaxed">
              En <strong>GIS Asesorías Migratorias</strong> ofrecemos
              acompañamiento informativo y apoyo en la organización de trámites
              migratorios y administrativos.
              <br />
              <br />
              <span className="text-sm opacity-80">
                Este servicio no constituye asesoría legal ni representación
                ante USCIS o cortes de inmigración.
              </span>
            </p>
          </div>

          {/* CONTACTO + REDES (mejorado) */}
          <div className="grid gap-4">
            <motion.a
              href="mailto:contacto@gismigration.com"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
            >
              <Mail className="text-primary-300 w-6 h-6" />
              <span className="text-primary-100 font-medium">
                contacto@gismigration.com
              </span>
            </motion.a>

            <motion.a
              href="https://wa.me/573105080356"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-green-500/20 border border-green-400/30 hover:bg-green-500/30 transition"
            >
              <Phone className="text-green-400 w-6 h-6" />
              <span className="text-primary-100 font-medium">
                +57 301 325 5256
              </span>
            </motion.a>

            <div className="flex gap-4 pt-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15 }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-pink-500/20 transition"
              >
                <Instagram className="text-primary-100" />
              </motion.a>

              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15 }}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-blue-500/20 transition"
              >
                <Facebook className="text-primary-100" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* DERECHA: FORMULARIO */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20 flex flex-col gap-6 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-primary-100 font-medium">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-primary-100 placeholder-primary-200 focus:ring-2 focus:ring-primary-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-primary-100 font-medium">
                Correo electrónico
              </label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
                placeholder="tu@correo.com"
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-primary-100 placeholder-primary-200 focus:ring-2 focus:ring-primary-400 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-primary-100 font-medium">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
              placeholder="Cuéntanos en qué podemos orientarte..."
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-primary-100 placeholder-primary-200 focus:ring-2 focus:ring-primary-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-2xl transition transform hover:scale-105"
          >
            <Send size={20} />
            Enviar por WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
