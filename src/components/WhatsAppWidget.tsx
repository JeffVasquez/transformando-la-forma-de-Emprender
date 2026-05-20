import { useState, useEffect } from 'react';
import { MessageSquare, X, Send, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Mostrar una pequeña burbuja de sugerencia de chatbot tras 4 segundos
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowNotification(false);
  };

  const currentNumber = '905447732';
  const whatsappUrl = `https://wa.me/51${currentNumber}?text=Hola%20CISGEIN,%20deseo%20una%20auditor%C3%ADa%20gratuita%20sobre%20mi%20pr%C3%B3xima%20p%C3%A1gina%20web%203D.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Burbuja animada de sugerencia activa del chatbot */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-2 w-72 bg-surface/95 border border-neon-cyan/40 p-4 rounded-2xl shadow-2xl backdrop-blur-md mb-2 flex flex-col gap-2.5"
          >
            <button
              onClick={() => setShowNotification(false)}
              className="absolute top-2 right-2 text-brand-gray hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors"
              aria-label="Cerrar notificación"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-display font-medium uppercase tracking-wider text-neon-cyan">
                Asesor Online de CISGEIN
              </span>
            </div>
            <p className="text-xs text-white/95 leading-relaxed font-sans font-medium">
              ¡Hola! ¿Buscando un sitio web ultra veloz, con diseño 3D y SEO de vanguardia? Escríbeme y cotiza en 5 minutos.
            </p>
            <button
              onClick={handleOpenChat}
              className="text-left text-[11px] text-neon-cyan font-bold hover:underline tracking-wide uppercase"
            >
              Iniciar Chatbot
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ventana de Chatbot simulada tipo Cyberpunk */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="absolute bottom-16 right-0 w-80 bg-abyss border border-neon-cyan/40 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-lg mb-2"
          >
            {/* Cabecera del Botón */}
            <div className="bg-gradient-to-r from-neon-cyan/20 to-electric/20 p-4 border-b border-neon-cyan/35 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan">
                  <User className="w-5 h-5" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-abyss" />
                </div>
                <div>
                  <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider">
                    Alexander Vasquez
                  </h4>
                  <span className="text-[10px] text-muted-text">Chatbot de Ventas</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-brand-gray hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors"
                aria-label="Cerrar Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mensajes del Bot */}
            <div className="p-4 space-y-3 max-h-60 overflow-y-auto">
              <div className="p-3 rounded-2xl bg-white/5 text-xs text-brand-gray leading-relaxed max-w-[85%]">
                Hola, bienvenido a <strong className="text-neon-cyan">CISGEIN</strong>. Soy tu asistente virtual de diseño web 3D.
              </div>
              <div className="p-3 rounded-2xl bg-white/5 text-xs text-brand-gray leading-relaxed max-w-[85%]">
                Puedo ayudarte con requerimientos técnicos, SEO o cotizar los paquetes <strong className="text-white">Inicio, Crecimiento o Élite</strong>. ¿Deseas hablar directamente por WhatsApp?
              </div>
            </div>

            {/* Pié del chat con enlace real de llamada directa a WhatsApp */}
            <div className="p-3 border-t border-white/5 bg-surface/30">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-gradient-to-r from-neon-cyan to-electric text-void font-display font-black text-[11px] tracking-widest uppercase py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(0,255,245,0.2)] hover:scale-[1.01] transition-transform duration-300"
              >
                <span>Chatear en WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante de WhatsApp circular principal */}
      <button
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
          } else {
            handleOpenChat();
          }
        }}
        className="w-14 h-14 bg-gradient-to-tr from-emerald-500 to-green-400 text-void rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 relative group cursor-pointer focus-visible:outline-2 focus-visible:outline-neon-cyan"
        aria-label="Abrir chatbot de WhatsApp"
        aria-expanded={isOpen}
      >
        <MessageSquare className="w-6 h-6 text-white stroke-[2.5px] group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Anillo de pulso infinito para SEO y atención de usuario */}
        <span className="absolute inset-x-0 inset-y-0 rounded-full border border-emerald-400 opacity-75 animate-ping" />
      </button>
    </div>
  );
}
