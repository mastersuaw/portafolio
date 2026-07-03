export type LegalLink = {
  type: 'internal' | 'external';
  url: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bundleId: string;
  version: string;
  platforms: string[];
  icon: string;
  features: string[];
  stack: string[];
  repoUrl?: string;
  websiteUrl?: string;
  stores: { ios?: string; android?: string };
  legal: {
    privacy: LegalLink;
    terms: LegalLink;
    support: LegalLink;
  };
};

const BASE = import.meta.env.BASE_URL;

export const projects: Project[] = [
  {
    slug: 'anote-domino',
    name: 'Anote Domino',
    tagline: 'La forma más fácil de llevar el marcador en tus partidas de dominó',
    description:
      'Marcador de partidas de dominó para iOS y Android. Anota puntos en vivo, gestiona equipos, consulta historial y estadísticas. Los datos se guardan localmente en el dispositivo.',
    bundleId: 'com.mastersuaw.anotedomino',
    version: '1.0',
    platforms: ['iOS', 'Android'],
    icon: `${BASE}images/apps/anote-domino.png`,
    features: [
      'Marcador en vivo para dos equipos (+25, +30, +60 y puntos personalizados)',
      'Modos por puntos o por rondas, cronómetro opcional',
      'Equipos con nombre, color y jugadores',
      'Historial y estadísticas de partidas',
      'Compartir resultados por WhatsApp, copiar o guardar imagen',
      'Modo oscuro, efectos de sonido y onboarding guiado',
      'Sin cuenta ni login; datos solo en el dispositivo',
    ],
    stack: ['SwiftUI', 'Jetpack Compose', 'Kotlin', 'Material 3'],
    repoUrl: 'https://github.com/mastersuaw/anotedomino',
    stores: {},
    legal: {
      privacy: {
        type: 'internal',
        url: `${BASE}legal/anote-domino/privacidad`,
        label: 'Política de privacidad',
      },
      terms: {
        type: 'internal',
        url: `${BASE}legal/anote-domino/terminos`,
        label: 'Términos y condiciones',
      },
      support: {
        type: 'internal',
        url: `${BASE}legal/anote-domino/soporte`,
        label: 'Soporte',
      },
    },
  },
  {
    slug: 'creatitek',
    name: 'Creatitek',
    tagline: 'Regalos personalizados y sublimación en Santo Domingo',
    description:
      'Plataforma de e-commerce y apps nativas para solicitar servicios de sublimación y estampado: catálogo, carrito, checkout, registro e historial de pedidos.',
    bundleId: 'com.creatitek.app',
    version: '1.3.0',
    platforms: ['iOS', 'Android', 'Web'],
    icon: `${BASE}images/apps/creatitek.png`,
    features: [
      'Catálogo de productos de sublimación y estampado',
      'Carrito y checkout con gestión de pedidos',
      'Registro e inicio de sesión con historial de pedidos',
      'Panel administrativo y contenido editable',
      'Notificaciones por correo y WhatsApp',
      'Personalizador 3D y flujo para PYMES',
    ],
    stack: ['Next.js', 'React', 'Supabase', 'Kotlin', 'SwiftUI'],
    websiteUrl: 'https://www.creatitek.com',
    stores: {},
    legal: {
      privacy: {
        type: 'external',
        url: 'https://www.creatitek.com/politica-privacidad',
        label: 'Política de privacidad',
      },
      terms: {
        type: 'external',
        url: 'https://www.creatitek.com/terminos',
        label: 'Términos y condiciones',
      },
      support: {
        type: 'external',
        url: 'https://www.creatitek.com',
        label: 'Soporte y contacto',
      },
    },
  },
  {
    slug: 'leonida-guia',
    name: 'Leonida Guia',
    tagline: 'Guía no oficial de misiones y mapa de GTA VI',
    description:
      'Aplicación de guía interactiva para explorar el mapa de Leonida en GTA VI: misiones, coleccionables, progreso y modo offline. Desarrollada de forma independiente, sin afiliación a Rockstar Games.',
    bundleId: 'com.leonidaguide.app',
    version: '0.1.0',
    platforms: ['iOS', 'Android'],
    icon: `${BASE}images/apps/leonida-guia.png`,
    features: [
      'Mapa interactivo de Leonida con puntos de interés',
      'Listado de misiones con seguimiento de progreso',
      'Coleccionables y estadísticas del mapa',
      'Búsqueda y filtros por categoría',
      'Modo offline para consultar contenido descargado',
      'Sincronización de contenido desde base de datos remota',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
    repoUrl: 'https://github.com/mastersuaw/leonida-guia',
    stores: {},
    legal: {
      privacy: {
        type: 'internal',
        url: `${BASE}legal/leonida-guia/privacidad`,
        label: 'Política de privacidad',
      },
      terms: {
        type: 'internal',
        url: `${BASE}legal/leonida-guia/terminos`,
        label: 'Términos y condiciones',
      },
      support: {
        type: 'internal',
        url: `${BASE}legal/leonida-guia/soporte`,
        label: 'Soporte',
      },
    },
  },
  {
    slug: 'sobriety-garden',
    name: 'Sobriety Garden',
    tagline: 'Recovery no es lineal. Tu jardín guarda cada intento.',
    description:
      'Tracker de sobriedad offline-first con jardín gamificado para iOS y Android. Registra check-ins diarios, cultiva plantas con tu progreso, gestiona tropiezos con empatía y consulta herramientas para momentos de impulso. Los datos se guardan localmente en el dispositivo.',
    bundleId: 'com.sobrietygarden.app',
    version: '0.1.0',
    platforms: ['iOS', 'Android'],
    icon: `${BASE}images/apps/sobriety-garden.png`,
    features: [
      'Jardín gamificado: plantas que crecen con tu racha de sobriedad',
      'Check-ins diarios, notas de ánimo y seguimiento de racha con freezes',
      'Registro empático de tropiezos y recaídas con nueva semilla en el jardín',
      'Urge toolkit para atravesar momentos de impulso',
      'Calculadora de ahorro según gasto semanal estimado',
      'Widget de inicio con días de racha y etapa de planta',
      'Recordatorios locales de check-in',
      'Sobriety Garden Pro: journal, export CSV, freezes ilimitados y temas premium',
      'Sin cuenta ni login; datos locales en SQLite (offline-first)',
      'Disponible en español e inglés',
    ],
    stack: ['Flutter', 'Dart', 'Riverpod', 'Drift', 'SQLite', 'RevenueCat'],
    repoUrl: 'https://github.com/mastersuaw/sobrietygarden',
    stores: {},
    legal: {
      privacy: {
        type: 'internal',
        url: `${BASE}legal/sobriety-garden/privacidad`,
        label: 'Política de privacidad',
      },
      terms: {
        type: 'internal',
        url: `${BASE}legal/sobriety-garden/terminos`,
        label: 'Términos y condiciones',
      },
      support: {
        type: 'internal',
        url: `${BASE}legal/sobriety-garden/soporte`,
        label: 'Soporte',
      },
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
