import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import QuienesSomos from "./components/sections/QuienesSomos";
import Servicios from "./components/sections/Servicios";
import Pagos from "./components/sections/Pagos";
import Testimonios from "./components/sections/Testimonios";
import Contacto from "./components/sections/Contacto";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="font-sans bg-secondary text-primary-900 overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section id="hero">
        <Hero />
      </section>

      {/* QUIÉNES SOMOS */}
      <section id="quienes-somos">
        <QuienesSomos />
      </section>

      {/* SERVICIOS */}
      <section id="servicios">
        <Servicios />
      </section>

      {/* PAGOS */}
      <section id="pagos">
        <Pagos />
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios">
        <Testimonios />
      </section>

        {/* CONTACTO */}
      <section id="contacto">
        <Contacto />
      </section>


      {/* FOOTER */}
      <Footer />
    </div>
  );
}
