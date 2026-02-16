import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Wallet, Info, Banknote } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";



export default function Pagos() {

  const { t } = useLanguage();

  return (
    <section
      id="pagos"
      className="bg-linear-to-b from-[#E6EEF9] to-[#FFFFFF] text-[#001F3F] py-20 px-6 md:px-12"
    >
      {/* TÍTULO */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#003366] mb-4"
        >
          {t("payments.title")}
        </motion.h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          {t("payments.subtitle")}
        </p>
      </div>

      {/* MÉTODOS DE PAGO */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* MÉTODO 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#45C93E]"
        >
          <CreditCard className="text-[#003366] w-12 h-12 mb-4 mx-auto" />
          <h3 className="text-xl font-bold text-[#003366] mb-3 text-center">
            {t("payments.bank")}
          </h3>
          <p className="text-gray-600 mb-4 text-center">
            {t("payments.bankDescription")}
          </p>
        </motion.div>

        {/* MÉTODO 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#45C93E]"
        >
          <Wallet className="text-[#003366] w-12 h-12 mb-4 mx-auto" />
          <h3 className="text-xl font-bold text-[#003366] mb-3 text-center">
            {t("payments.cash")}
          </h3>
          <p className="text-gray-600 mb-4 text-center">
            {t("payments.cashDescription")}
          </p>
        </motion.div>

        {/* MÉTODO 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#45C93E]"
        >
          <Banknote className="text-[#003366] w-12 h-12 mb-4 mx-auto" />
          <h3 className="text-xl font-bold text-[#003366] mb-3 text-center">
            {t("payments.international")}
          </h3>
          <p className="text-gray-600 mb-4 text-center">
            {t("payments.internationalDescription")}
          </p>
        </motion.div>

      </div>

      {/* ⚠️ AVISO IMPORTANTE FUERTE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mt-16 bg-[#E6EEF9] border-l-4 border-[#45C93E] p-6 rounded-lg shadow-md"
      >
        <div className="flex items-start gap-3">
          <Info className="text-[#45C93E] w-6 h-6 shrink-0 mt-1" />
          <div>
            <p className="text-[#003366] font-semibold mb-2">
              {t("payments.warningTitle")}
            </p>

            <p className="text-sm text-[#003366] leading-relaxed">
              {t("payments.warningLine1")}
            </p>

            <p className="text-sm text-[#003366] leading-relaxed mt-2">
              {t("payments.warningLine2")}
            </p>

            <a
              href="https://wa.me/573013255256"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-[#45C93E] text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300"
            >
              {t("payments.button")}
            </a>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
