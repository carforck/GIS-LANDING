import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Wallet, Info, Banknote } from "lucide-react";

export default function Pagos() {
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
          Información de Pagos
        </motion.h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          En <span className="font-semibold text-[#000180]">Gestores Immigration Services</span> queremos facilitarte cada paso.  
          Realiza tus pagos de forma <span className="text-[#45C93E] font-medium">segura</span> y <span className="text-[#45C93E] font-medium">rápida</span> a través de nuestras opciones disponibles.
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
          <h3 className="text-xl font-bold text-[#003366] mb-3">
            Transferencia Bancaria
          </h3>
          <p className="text-gray-600 mb-4">
            Realiza tu pago directamente a nuestra cuenta bancaria.  
            Incluye tu nombre completo en la referencia.
          </p>
          <div className="bg-[#E6EEF9] rounded-lg p-4 text-sm text-[#001F3F] text-left">
            <p><strong>Banco:</strong> Bancolombia</p>
            <p><strong>Cuenta:</strong> 1234 5678 9012</p>
            <p><strong>Tipo:</strong> Ahorros</p>
            <p><strong>Titular:</strong> Gestores Immigration Services S.A.S.</p>
          </div>
        </motion.div>

        {/* MÉTODO 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#45C93E]"
        >
          <Wallet className="text-[#003366] w-12 h-12 mb-4 mx-auto" />
          <h3 className="text-xl font-bold text-[#003366] mb-3">
            Pago en Efectivo
          </h3>
          <p className="text-gray-600 mb-4">
            Puedes realizar tu pago directamente en nuestras oficinas o con un asesor autorizado.
          </p>
          <div className="bg-[#E6EEF9] rounded-lg p-4 text-sm text-[#001F3F] text-left">
            <p><strong>Dirección:</strong> Cra 10 #25-34, Cartagena</p>
            <p><strong>Horario:</strong> Lunes a viernes, 8:00 a.m. - 5:00 p.m.</p>
          </div>
        </motion.div>

        {/* MÉTODO 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#45C93E]"
        >
          <Banknote className="text-[#003366] w-12 h-12 mb-4 mx-auto" />
          <h3 className="text-xl font-bold text-[#003366] mb-3">
            Pagos Internacionales
          </h3>
          <p className="text-gray-600 mb-4">
            Si te encuentras fuera del país, puedes realizar tu pago mediante transferencia internacional.
          </p>
          <div className="bg-[#E6EEF9] rounded-lg p-4 text-sm text-[#001F3F] text-left">
            <p><strong>Cuenta SWIFT:</strong> BCOLOMBIAXXX</p>
            <p><strong>Moneda:</strong> USD</p>
            <p><strong>Correo soporte:</strong> pagos@giservices.com</p>
          </div>
        </motion.div>
      </div>

      {/* NOTA IMPORTANTE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mt-16 flex items-start gap-3 bg-[#E6EEF9] border-l-4 border-[#45C93E] p-5 rounded-lg text-left shadow-sm"
      >
        <Info className="text-[#45C93E] w-6 h-6 shrink-0 mt-1" />
        <p className="text-sm text-[#003366] leading-relaxed">
          * Por el momento, los pagos en línea no están habilitados.  
          Asegúrate de confirmar tus datos con un asesor antes de realizar cualquier transacción.
        </p>
      </motion.div>
    </section>
  );
}
