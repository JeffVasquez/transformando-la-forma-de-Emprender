import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactFormData } from '../types';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    paquete: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitFeedback, setSubmitFeedback] = useState<ContactFormData | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Validación básica del correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Por favor, ingresa una dirección de correo válida.');
      setIsSubmitting(false);
      return;
    }

    // Validación del teléfono (mínimo 7 caracteres numéricos o signos comunes)
    if (formData.telefono.replace(/\s/g, '').length < 7) {
      setErrorMessage('Por favor, ingresa un número de teléfono válido.');
      setIsSubmitting(false);
      return;
    }

    // Endpoint de Formspree configurable vía variable de entorno o fallback funcional
    const formspreeKey = import.meta.env.VITE_FORMSPREE_KEY || 'xoqgbzqe';
    const endpoint = `https://formspree.io/f/${formspreeKey}`;

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        empresa: formData.empresa,
        paquete: formData.paquete,
        mensaje: formData.mensaje
      })
    })
    .then((response) => {
      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setSubmitFeedback({ ...formData });
        
        // Limpiar formulario
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          empresa: '',
          paquete: '',
          mensaje: ''
        });
      } else {
        throw new Error('Hubo un problema al procesar el envío. Inténtalo de nuevo.');
      }
    })
    .catch((err) => {
      setErrorMessage(err.message || 'No se pudo enviar el mensaje. Inténtalo más tarde.');
      setIsSubmitting(false);
    });
  };

  const handleResetSuccess = () => {
    setIsSubmitted(false);
    setSubmitFeedback(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
      {/* Columna Izquierda: Información de Contacto Directo */}
      <div className="lg:col-span-5 space-y-6">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-xs text-neon-cyan font-display tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            Canales Oficiales
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-wider uppercase leading-tight">
            ¿Listo para Digitalizar <br />
            <span className="bg-gradient-to-r from-neon-cyan to-electric bg-clip-text text-transparent">
              tu empresa?
            </span>
          </h3>
          <p className="text-sm md:text-base text-brand-gray tracking-wide leading-relaxed font-sans font-normal max-w-md">
            Asesoría comercial inmediata. Respondemos de forma personalizada para encontrar la solución perfecta que se adapte exactamente a tu presupuesto y objetivos comerciales.
          </p>
        </div>

        {/* Bloque Informativo de Canales de Soporte */}
        <div className="space-y-4 pt-4" aria-label="Información de contacto de CISGEIN">
          <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-surface/20 hover:border-neon-cyan/20 transition-all duration-300">
            <Phone className="w-6 h-6 text-neon-cyan mt-1 flex-shrink-0" aria-hidden="true" />
            <div>
              <span className="block text-[11px] uppercase tracking-widest text-muted-text font-bold mb-1">
                Líneas Telefónicas
              </span>
              <a href="tel:+51905447736" className="block text-sm md:text-base text-neon-cyan font-bold hover:underline">
                905 447 736
              </a>
              <a href="tel:+51905447732" className="block text-sm md:text-base text-white/90 font-medium hover:underline mt-0.5">
                905 447 732
              </a>
            </div>
          </div>

          <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-surface/20 hover:border-neon-cyan/20 transition-all duration-300">
            <Mail className="w-6 h-6 text-neon-cyan mt-1 flex-shrink-0" aria-hidden="true" />
            <div>
              <span className="block text-[11px] uppercase tracking-widest text-muted-text font-bold mb-1">
                Direcciones de Correo
              </span>
              <a href="mailto:l.nunez@cisgein.com" className="block text-sm md:text-base text-neon-cyan font-bold hover:underline break-all">
                l.nunez@cisgein.com
              </a>
              <a href="mailto:comercial@cisgein.com" className="block text-sm  text-white/80 font-medium hover:underline mt-0.5 break-all">
                comercial@cisgein.com
              </a>
            </div>
          </div>

          <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-surface/20 hover:border-neon-cyan/20 transition-all duration-300">
            <MapPin className="w-6 h-6 text-neon-cyan mt-1 flex-shrink-0" aria-hidden="true" />
            <div>
              <span className="block text-[11px] uppercase tracking-widest text-muted-text font-bold mb-1">
                Oficina Central
              </span>
              <span className="block text-sm md:text-base text-white font-bold">
                Trujillo, La Libertad
              </span>
              <span className="block text-xs text-brand-gray mt-0.5">
                Soporte y entrega a nivel nacional e internacional
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Columna Derecha: El Formulario Interactiva / Modal de Éxito */}
      <div className="lg:col-span-7 bg-surface/35 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="contact-form-node"
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
              noValidate
              aria-label="Formulario de contacto para servicios web"
            >
              <div className="mb-4">
                <h4 className="font-display text-lg font-bold text-white tracking-widest uppercase mb-1">
                  Déjanos tus datos
                </h4>
                <p className="text-xs text-brand-gray font-normal">
                  Completa las secciones y un especialista se pondrá en contacto contigo hoy.
                </p>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-xs font-semibold text-red-500 flex items-center gap-2" role="alert">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 animate-pulse" />
                  {errorMessage}
                </div>
              )}

              {/* Nombre Completo */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nombre" className="text-xs font-bold uppercase tracking-widest text-neon-cyan">
                  Nombre Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej: Ing. Eduardo Sánchez"
                  className="w-full bg-void/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Grid: Mail & Teléfono */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-neon-cyan">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@empresa.com"
                    className="w-full bg-void/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="telefono" className="text-xs font-bold uppercase tracking-widest text-neon-cyan">
                    Teléfono Móvil <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Ej: +51 987 654 321"
                    className="w-full bg-void/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Grid: Empresa & Paquete */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="empresa" className="text-xs font-bold uppercase tracking-widest text-neon-cyan">
                    Nombre de tu Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Ej: Mi Negocio SAC"
                    className="w-full bg-void/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="paquete" className="text-xs font-bold uppercase tracking-widest text-neon-cyan">
                    Paquete de Interés <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="paquete"
                    name="paquete"
                    required
                    value={formData.paquete}
                    onChange={handleChange}
                    className="w-full bg-void/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan focus:outline-none transition-all duration-300 cursor-pointer"
                  >
                    <option value="" className="text-brand-gray/50">Selecciona un paquete</option>
                    <option value="inicio">INICIO - Primera presencia digital</option>
                    <option value="crecimiento">CRECIMIENTO - Solución completa</option>
                    <option value="elite">ÉLITE - Posicionamiento total 3D</option>
                    <option value="consulta">Consulta personalizada</option>
                  </select>
                </div>
              </div>

              {/* Mensaje Opcional */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="mensaje" className="text-xs font-bold uppercase tracking-widest text-neon-cyan">
                  Mensaje o Especificaciones <span className="text-brand-gray/50 text-[10px] lowercase">(opcional)</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos brevemente sobre las necesidades de tu marca o tu sector comercial..."
                  rows={4}
                  className="w-full bg-void/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan focus:outline-none transition-all duration-300 resize-none"
                />
              </div>

              {/* Botón de Enviar */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-neon-cyan to-electric text-void font-display font-black text-xs tracking-widest uppercase py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(0,255,245,0.25)] hover:shadow-[0_10px_25px_rgba(0,255,245,0.45)] hover:scale-[1.01] active:translate-y-px transition-all duration-300 cursor-pointer disabled:opacity-75 disabled:cursor-wait"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-void border-t-transparent animate-spin" />
                    Procesando Consulta...
                  </>
                ) : (
                  <>
                    <span>Enviar Consulta Corporativa</span>
                    <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            /* Modal de Éxito - 100/100 Lighthouse de accesibilidad sin alerts molestos */
            <motion.div
              key="contact-success-node"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="text-center py-8 space-y-6 flex flex-col items-center justify-center min-h-[400px]"
              role="status"
              aria-live="polite"
            >
              <div className="w-16 h-16 bg-neon-cyan/10 border border-neon-cyan/40 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle className="w-10 h-10 text-neon-cyan" aria-hidden="true" />
              </div>
              
              <div className="space-y-2">
                <h4 className="font-display text-2xl font-black text-white tracking-wider uppercase leading-none">
                  ¡Gracias, {submitFeedback?.nombre}!
                </h4>
                <p className="text-neon-cyan font-display text-xs font-semibold uppercase tracking-widest">
                  Tu consulta ha sido canalizada con éxito.
                </p>
              </div>

              <div className="bg-void/40 border border-white/5 p-4 rounded-xl text-left text-xs text-brand-gray space-y-2 max-w-sm w-full">
                <span className="block font-bold uppercase text-white mb-1 border-b border-white/5 pb-1 tracking-wider text-[10px]">
                  Resumen de recepción:
                </span>
                <p><strong>Correo:</strong> {submitFeedback?.email}</p>
                <p><strong>Teléfono:</strong> {submitFeedback?.telefono}</p>
                {submitFeedback?.empresa && <p><strong>Empresa:</strong> {submitFeedback?.empresa}</p>}
                <p><strong>Paquete:</strong> {submitFeedback?.paquete?.toUpperCase()}</p>
              </div>

              <p className="text-sm text-brand-gray tracking-wide leading-relaxed font-sans max-w-md">
                Un asesor directo de la gerencia comercial se pondrá en contacto contigo vía telefónica o WhatsApp en menos de 1 hora para iniciar tu auditoría web sin costo alguno.
              </p>

              <button
                onClick={handleResetSuccess}
                className="inline-flex items-center gap-2 group text-xs text-neon-cyan font-bold uppercase tracking-wider hover:underline"
              >
                <span>Enviar otro mensaje</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
