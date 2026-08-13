import { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Servicios', href: '#paquetes' },
    { label: 'Por Qué Nosotros', href: '#beneficios' },
    { label: 'Contacto', href: '#contacto' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-abyss/90 backdrop-blur-md py-4 border-b border-neon-cyan/25 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-neon-cyan focus-visible:outline-offset-4 rounded-lg"
            aria-label="CISGEIN Inicio"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-neon-cyan to-electric rounded-lg flex items-center justify-center text-void font-display font-black text-xl shadow-[0_0_20px_rgba(0,255,245,0.4)] group-hover:shadow-[0_0_30px_rgba(0,255,245,0.7)] group-hover:scale-105 transition-all duration-300">
              AV
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-[0.12em] bg-gradient-to-r from-white via-neon-cyan to-electric bg-clip-text text-transparent">
                CISGEIN
              </span>
              <span className="text-[9px] md:text-[10px] text-muted-text font-sans font-medium tracking-[0.1em] md:tracking-[0.15em] uppercase leading-none mt-1">
                Servicios Web 3D – Transforma la forma de Emprender
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-sans font-medium text-brand-gray tracking-wider hover:text-neon-cyan focus-visible:text-neon-cyan focus-visible:outline-none transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="inline-flex items-center gap-1 text-[11px] font-display font-bold tracking-widest uppercase text-neon-cyan border border-neon-cyan/40 bg-neon-cyan/5 hover:bg-neon-cyan/15 px-5 py-2.5 rounded-full shadow-[0_0_15px_rgba(0,255,245,0.1)] hover:shadow-[0_0_25px_rgba(0,255,245,0.3)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-neon-cyan"
            >
              Consultoría Gratis
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </nav>

          {/* Mobile Menu Actuator */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 text-white hover:text-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 rounded-lg"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[77px] z-45 bg-abyss/95 border-b border-neon-cyan/20 py-8 px-6 flex flex-col gap-6 backdrop-blur-lg shadow-2xl md:hidden"
          >
            <nav className="flex flex-col gap-5 text-center" aria-label="Navegación móvil">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-sans font-medium text-brand-gray hover:text-neon-cyan py-1 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 inline-block text-sm font-display font-bold uppercase text-void bg-gradient-to-r from-neon-cyan to-electric px-6 py-3 rounded-xl tracking-wider text-center shadow-lg shadow-neon-cyan/20"
              >
                Asesoría Gratuita
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
