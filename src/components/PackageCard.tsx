import { WebPackage } from '../types';
import { Check, Info } from 'lucide-react';
import { motion } from 'motion/react';

interface PackageCardProps {
  pkg: WebPackage;
  index: number;
}

export default function PackageCard({ pkg, index }: PackageCardProps) {
  const isCrecimiento = pkg.id === 'crecimiento';

  return (
    <motion.article
      id={`pkg-card-${pkg.id}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`relative flex flex-col justify-between bg-surface/40 md:bg-surface/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border ${
        isCrecimiento
          ? 'border-neon-cyan shadow-[0_0_40px_rgba(0,255,245,0.15)] ring-1 ring-neon-cyan/50'
          : 'border-white/10 hover:border-neon-cyan/40 shadow-xl'
      } transition-colors duration-300 overflow-hidden group`}
    >
      {/* Popular indicator badge */}
      {pkg.isPopular && (
        <span className="absolute top-4 right-4 bg-gradient-to-r from-neon-cyan to-electric text-void text-[10px] font-display font-black tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-[0_4px_12px_rgba(0,255,245,0.3)] select-none">
          Más Popular
        </span>
      )}

      {/* Header Info */}
      <div>
        <h3 className="font-display text-2xl font-black tracking-widest text-neon-cyan uppercase mb-2">
          {pkg.name}
        </h3>
        <p className="text-sm text-brand-gray tracking-wide leading-relaxed font-sans min-h-[48px] line-clamp-2">
          {pkg.tagline}
        </p>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent my-6" />

        {/* Pricing Segment */}
        <div className="mb-1">
          <span className="font-display text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-neon-cyan to-electric bg-clip-text text-transparent">
            {pkg.price}
          </span>
        </div>
        <p className="text-xs text-muted-text tracking-wide mb-6 font-medium">
          {pkg.priceNote}
        </p>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/25 to-transparent my-4" />

        {/* Bullet features list */}
        <ul className="space-y-3 mb-8" aria-label={`Características del paquete ${pkg.name}`}>
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-white/95 leading-relaxed font-sans">
              <Check className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-1" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Package bottom details */}
      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-muted-text">
          <Info className="w-3.5 h-3.5 text-neon-cyan/80" aria-hidden="true" />
          <span>Ideal para</span>
        </div>
        <p className="text-sm text-white/90 font-medium mb-6 leading-relaxed">
          {pkg.idealFor}
        </p>

        <a
          href="#contacto"
          autoFocus={false}
          className={`block w-full py-3.5 px-4 rounded-xl font-display font-bold text-xs tracking-widest text-center uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-neon-cyan ${
            isCrecimiento
              ? 'bg-gradient-to-r from-neon-cyan to-electric text-void font-extrabold shadow-[0_5px_15px_rgba(0,255,245,0.3)] hover:shadow-[0_10px_25px_rgba(0,255,245,0.5)] hover:scale-[1.02]'
              : 'bg-transparent text-neon-cyan border border-neon-cyan/40 hover:bg-neon-cyan/5 hover:border-neon-cyan shadow-sm hover:shadow-[0_0_15px_rgba(0,255,245,0.15)] hover:scale-[1.01]'
          }`}
          aria-label={`${isCrecimiento ? 'Elegir plan' : 'Solicitar'} paquete ${pkg.name}`}
        >
          {isCrecimiento ? 'Elegir Plan' : 'Solicitar'}
        </a>
      </div>
    </motion.article>
  );
}
