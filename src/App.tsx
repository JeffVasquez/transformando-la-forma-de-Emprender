/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Trophy, Award, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import InteractiveStars from './components/InteractiveStars';
import Navigation from './components/Navigation';
import PackageCard from './components/PackageCard';
import WhyCard from './components/WhyCard';
import ContactForm from './components/ContactForm';
import WhatsAppWidget from './components/WhatsAppWidget';
import { WEB_PACKAGES, WHY_FEATURES } from './data';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-neon-cyan selection:text-void">
      {/* 1. Fondo 3D Canvas Interactivo Matemático (Carga ultraveloz y 0 KB de CDN bloqueantes) */}
      <InteractiveStars />

      {/* Botón flotante de WhatsApp interactivo con chatbot */}
      <WhatsAppWidget />

      {/* Capa de grano/ruido sutil cyberpunk */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)] pointer-events-none z-1" />

      {/* 2. Cabecera y Navegación Dinámica */}
      <Navigation />

      {/* Contenido en Capa z-10 */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* ================= HERO SECTION ================= */}
        <section 
          className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-28 pb-16"
          aria-labelledby="hero-title"
        >
          <div className="max-w-7xl mx-auto text-center space-y-8">
            {/* Tagline / Eyebrow flotante con animación */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-neon-cyan/30 rounded-full bg-neon-cyan/5 text-xs text-neon-cyan font-display tracking-[0.3em] uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Socio en Innovación Digital
            </motion.div>

            {/* H1 Principal con gradiente y tipografía Orbitron */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none uppercase"
            >
              Experiencia Web <br />
              <span className="bg-gradient-to-r from-white via-neon-cyan to-electric bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(0,255,245,0.4)]">
                del Futuro
              </span>
            </motion.h1>

            {/* Subtítulo con alto contraste */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-brand-gray font-normal max-w-3xl mx-auto leading-relaxed px-2"
            >
              Transformamos la presencia digital de tu marca con sitios web interactivos de vanguardia. Diseños ultraveloces optimizados para conversiones, seguridad hermética y posicionamiento directo en la cima de Google.
            </motion.p>

            {/* Llamados a la Acción (CTAs) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <a
                href="#paquetes"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-neon-cyan to-electric text-void font-display font-extrabold text-xs tracking-widest uppercase rounded-xl shadow-[0_5px_20px_rgba(0,255,245,0.3)] hover:shadow-[0_10px_30px_rgba(0,255,245,0.5)] hover:scale-105 active:scale-100 transition-all duration-300"
              >
                Explorar Paquetes
              </a>
              <a
                href="#contacto"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-neon-cyan/50 hover:border-neon-cyan rounded-xl font-display font-bold text-xs tracking-widest uppercase hover:bg-neon-cyan/5 transition-all duration-300"
              >
                Cotizar Proyecto
              </a>
            </motion.div>

            {/* Estadísticas de Confianza de Nivel DevOps */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-5xl mx-auto border-t border-white/10"
            >
              <div className="flex flex-col items-center text-center space-y-1 group">
                <div className="w-10 h-10 rounded-lg bg-neon-cyan/5 border border-neon-cyan/20 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-5 h-5 text-neon-cyan" />
                </div>
                <span className="font-display text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white to-neon-cyan bg-clip-text text-transparent">
                  150+
                </span>
                <span className="text-xs text-brand-gray uppercase tracking-widest font-bold">
                  Proyectos Completados
                </span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1 group">
                <div className="w-10 h-10 rounded-lg bg-neon-cyan/5 border border-neon-cyan/20 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-5 h-5 text-neon-cyan" />
                </div>
                <span className="font-display text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white to-neon-cyan bg-clip-text text-transparent">
                  98%
                </span>
                <span className="text-xs text-brand-gray uppercase tracking-widest font-bold">
                  Satisfacción del Cliente
                </span>
              </div>

              <div className="flex flex-col items-center text-center space-y-1 group">
                <div className="w-10 h-10 rounded-lg bg-neon-cyan/5 border border-neon-cyan/20 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-5 h-5 text-neon-cyan" />
                </div>
                <span className="font-display text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white to-neon-cyan bg-clip-text text-transparent">
                  24/7
                </span>
                <span className="text-xs text-brand-gray uppercase tracking-widest font-bold">
                  Monitoreo y Soporte
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <main className="flex-grow">
          {/* ================= PAQUETES DE SERVICIOS ================= */}
          <section id="paquetes" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-xs text-neon-cyan font-display tracking-widest uppercase">
                Arquitectura de Software
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black tracking-wider uppercase">
                Planes Web Profesionales
              </h2>
              <p className="text-sm sm:text-base text-brand-gray font-sans font-normal leading-relaxed">
                Cada sitio web es un software corporativo completo. Elige el escalonamiento tecnológico adecuado para consolidar tu marca en Internet con excelentes prestaciones técnicas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-4">
              {WEB_PACKAGES.map((pkg, i) => (
                <PackageCard key={pkg.id} pkg={pkg} index={i} />
              ))}
            </div>
          </section>

          {/* ================= BENEFICIOS CORPORATIVOS ================= */}
          <section id="beneficios" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 scroll-mt-20">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-xs text-neon-cyan font-display tracking-widest uppercase">
                Garantía y Metodología
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black tracking-wider uppercase">
                Más que un Sitio Web
              </h2>
              <p className="text-sm sm:text-base text-brand-gray font-sans font-normal leading-relaxed font-normal">
                Tu plataforma trabaja de forma automatizada e ininterrumpida. Diseñamos con un enfoque integral que cuida cada mili-segundo de tu experiencia cibernética.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-4">
              {WHY_FEATURES.map((feat, i) => (
                <WhyCard key={feat.id} feature={feat} index={i} />
              ))}
            </div>
          </section>

          {/* ================= SECCIÓN DE CONTACTO ================= */}
          <section id="contacto" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 scroll-mt-20">
            <ContactForm />
          </section>
        </main>

        {/* ================= EL FOOTER CORPORATIVO ================= */}
        <footer className="w-full bg-abyss/90 border-t border-white/5 py-12 px-6 md:px-12 mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
              <span className="font-display font-black text-neon-cyan tracking-wider text-base uppercase">
                CISGEIN · V&N Multiservicios y Asesoría S.A.C.
              </span>
              <p className="text-xs text-brand-gray tracking-wide">
                Servicios Digitales Corporativos y Consultoría Multiescale.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-1">
              <div className="text-[11px] text-white/95 font-sans font-semibold tracking-wider">
                Alexander Vasquez — Gerente Comercial
              </div>
              <p className="text-[10px] text-brand-gray/80 tracking-widest uppercase font-mono">
                Trujillo, Perú 2026 · Todos los derechos reservados
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

