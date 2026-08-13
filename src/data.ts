import { WebPackage, WhyFeature, ContactInfo } from './types';

export const WEB_PACKAGES: WebPackage[] = [
  {
    id: 'inicio',
    name: 'INICIO',
    tagline: 'Tu primera presencia digital profesional con la mayor velocidad.',
    price: 'S/ 1,499',
    priceNote: 'Pago único · Inicio rápido',
    features: [
      'Sitio web autoadministrable de hasta 5 secciones',
      'Diseño responsivo móvil y desktop optimizado',
      'Estructura interna SEO básico optimizado',
      'Lanzador rápido WhatsApp Business integrado',
      'Formulario de contacto seguro con validación',
      'Entrega garantizada en 15 días hábiles',
      '1 mes completo de soporte post-entrega'
    ],
    idealFor: 'Emprendedores y pequeños negocios locales'
  },
  {
    id: 'crecimiento',
    name: 'CRECIMIENTO',
    tagline: 'Solución corporativa premium orientada 100% a la conversión.',
    price: 'S/ 2,599',
    priceNote: 'Inversión rentable · Hosting e SSL incluido',
    features: [
      'Sitio web estructurado de hasta 8 secciones',
      'Diseño UX/UI premium orientado a captación',
      'Canal de Blog corporativo autoadministrable',
      'SEO avanzado con análisis de keywords locales',
      'Google Analytics 4 integrado para reportería',
      'Dominio (.com) y Hosting de alta velocidad por 1 año',
      'Certificado de seguridad SSL (HTTPS) vitalicio',
      'Enlace dinámico de redes sociales y WhatsApp',
      'Entrega optimizada en 20-25 días hábiles',
      '3 meses de soporte técnico post-entrega'
    ],
    idealFor: 'Empresas en expansión y marcas profesionales',
    isPopular: true
  },
  {
    id: 'elite',
    name: 'ÉLITE',
    tagline: 'Presencia omnicanal interactiva con efectos 3D, e-commerce y SEO total.',
    price: 'Cotizar',
    priceNote: 'Proyecto a medida · Plan de Mantenimiento',
    features: [
      'Sitio web con páginas y secciones ilimitadas',
      'Efectos conceptuales interactivos 3D optimizados para web',
      'Tienda virtual integrada o catálogo digital interactivo',
      'Posicionamiento SEO total + Google Search Console',
      'Creación e indexación de Sitemap y archivo Robots.txt',
      'Google Analytics 4 avanzado + Mapas de calor (Hotjar)',
      'Estrategia estratégica de contenidos inicial (3 meses)',
      'Alojamiento cloud elástico autoventilado (1 año)',
      'Integración nativa con CRM, ERP o pasarelas de pago',
      'Entrega en 30-40 días hábiles de alta ingeniería',
      '12 meses de soporte corporativo y actualizaciones mensuales'
    ],
    idealFor: 'Marcas consolidadas, corporaciones y startups'
  }
];

export const WHY_FEATURES: WhyFeature[] = [
  {
    id: 'conversion',
    icon: '🎯',
    title: 'Diseño orientado a conversión',
    description: 'Cada componente y llamado a la acción (CTA) está diseñado bajo principios de neuromarketing para asegurar que el visitante llene tus formularios, llame o te escriba directo a WhatsApp.'
  },
  {
    id: 'speed',
    icon: '⚡',
    title: 'Velocidad y rendimiento extremo',
    description: 'Nuestros desarrollos no contienen plantillas lentas ni sobrecarga de plugins. Logramos velocidades de carga menores a 1.5s, premiadas por el algoritmo Core Web Vitals de Google.'
  },
  {
    id: 'responsive',
    icon: '📱',
    title: 'Visualización móvil impecable',
    description: 'Más del 80% de tus prospectos verán tu web desde un dispositivo móvil. Nuestro enfoque mobile-first asegura interfaces fluidas y legibles en cualquier tamaño de pantalla.'
  },
  {
    id: 'security',
    icon: '🔒',
    title: 'Seguridad multicapa activa',
    description: 'Implementamos certificados SSL, encabezados de seguridad HttpOnly, protección contra spam (CAPTCHA invisible) y copias de seguridad continuas para resguardar la identidad de tu empresa.'
  },
  {
    id: 'seo',
    icon: '📈',
    title: 'Arquitectura SEO nativa',
    description: 'Estructuramos tu web con metadatos descriptivos, mapas semánticos de encabezados (H1-H4) y marcado Schema.org de forma que comiences a competir en los resultados locales de Google de inmediato.'
  },
  {
    id: 'support',
    icon: '🤝',
    title: 'Acompañamiento prioritario',
    description: 'Te asignamos un consultor DevOps/Fullstack directo que domina tu infraestructura digital. Sin tediosos tickets ni esperas; respuestas rápidas y soluciones ejecutadas en el mismo día.'
  }
];

export const CONTACT_INFOS: ContactInfo[] = [
  {
    icon: 'Phone',
    label: 'Teléfonos Directos',
    value: '+51 905 447 736',
    subValue: '+51 905 447 732',
    href: 'tel:+51905447736'
  },
  {
    icon: 'Mail',
    label: 'Correos Corporativos',
    value: 'l.nunez@cisgein.com',
    subValue: 'comercial@cisgein.com',
    href: 'mailto:l.nunez@cisgein.com'
  },
  {
    icon: 'User',
    label: 'Gerencia Comercial',
    value: 'Alexander Vasquez',
    subValue: 'Asesoría y Soluciones Digitales'
  },
  {
    icon: 'MapPin',
    label: 'Sede Principal',
    value: 'Trujillo, La Libertad',
    subValue: 'Despliegues y alcance nacional'
  }
];
