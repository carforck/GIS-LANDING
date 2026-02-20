import { useState } from "react";
import { Mail, Phone, Instagram, Facebook, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Contacto() {
  const { t } = useLanguage();

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
${t("contact.subtitle")}

${t("contact.form.name")}: ${formData.nombre}
${t("contact.form.email")}: ${formData.correo}
${t("contact.form.message")}: ${formData.mensaje}
    `;

    const whatsappURL = `https://wa.me/57?text=${encodeURIComponent(
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
        {t("contact.title")}
      </h2>

      <p className="text-primary-200 max-w-3xl mb-14">
        {t("contact.subtitle")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full max-w-6xl">
        {/* IZQUIERDA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 text-left"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold text-primary-100 mb-4">
              {t("contact.info.title")}
            </h3>

            <p className="text-primary-200 leading-relaxed">
              {t("contact.info.description")}
              <br />
              <br />
              <span className="text-sm opacity-80">
                {t("contact.info.disclaimer")}
              </span>
            </p>
          </div>

          <div className="grid gap-4">
            <motion.a
              href="mailto:gestores@losgestores.com"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
            >
              <Mail className="text-primary-300 w-6 h-6" />
              <span className="text-primary-100 font-medium">
                gestores@losgestores.com
              </span>
            </motion.a>

            <motion.a
              href="https://wa.me/57"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-green-500/20 border border-green-400/30 hover:bg-green-500/30 transition"
            >
              <Phone className="text-green-400 w-6 h-6" />
              <span className="text-primary-100 font-medium">
                 Próximamente...
              </span>
            </motion.a>

            <div className="flex gap-4 pt-4">
              <motion.a
                href="https://www.instagram.com/los_gestores?igsh=dHRqM3V2Znd4emdj"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-4 h-12 rounded-full 
                bg-white/20 border border-white/30 
                hover:bg-pink-500/30 transition"
              >
                <Instagram className="text-pink-400 w-5 h-5" />
                <span className="text-primary-100 font-semibold">
                  @los_gestores
                </span>
              </motion.a>

              
            </div>
          </div>
        </motion.div>

        {/* FORMULARIO */}
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
                {t("contact.form.name")}
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder={t("contact.form.name")}
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-primary-100 placeholder-primary-200 focus:ring-2 focus:ring-primary-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-primary-100 font-medium">
                {t("contact.form.email")}
              </label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
                placeholder={t("contact.form.email")}
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-primary-100 placeholder-primary-200 focus:ring-2 focus:ring-primary-400 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-primary-100 font-medium">
              {t("contact.form.message")}
            </label>
            <textarea
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
              placeholder={t("contact.form.message")}
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-primary-100 placeholder-primary-200 focus:ring-2 focus:ring-primary-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-2xl transition transform hover:scale-105"
          >
            <Send size={20} />
            {t("contact.form.send")}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
