import { WhyFeature } from '../types';
import { Target, Zap, Smartphone, Shield, TrendingUp, Handshake, LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

const ICON_MAP: Record<string, LucideIcon> = {
  conversion: Target,
  speed: Zap,
  responsive: Smartphone,
  security: Shield,
  seo: TrendingUp,
  support: Handshake,
};

interface WhyCardProps {
  feature: WhyFeature;
  index: number;
}

export default function WhyCard({ feature, index }: WhyCardProps) {
  const IconComponent = ICON_MAP[feature.id] || Target;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-surface/20 border border-white/10 hover:border-neon-cyan/35 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg"
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-neon-cyan/5 border border-neon-cyan/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-neon-cyan/10 group-hover:border-neon-cyan/40 transition-all duration-300">
          <IconComponent className="w-6 h-6 text-neon-cyan group-hover:text-electric transition-colors" aria-hidden="true" />
        </div>
        <h3 className="font-display text-lg font-bold text-white tracking-wide mb-3">
          {feature.title}
        </h3>
        <p className="text-sm text-brand-gray tracking-wide leading-relaxed font-sans font-normal">
          {feature.description}
        </p>
      </div>
    </motion.article>
  );
}
