// =========================================================
// SEED.TS - Urpi Wayra Adventures
// Consolida: Camino Inca (2D/4D/5D/7D), Salkantay (4D/5D),
// Inca Jungle (3D/4D), Cusco & Valle Sagrado (7 tours)
// =========================================================

import { PrismaClient, InclusionType } from "@prisma/client";

const prisma = new PrismaClient();

// ---------------------------------------------------------
// TIPOS
// ---------------------------------------------------------
interface ItineraryDay {
  dayNumber: number;
  title: string;
  route?: string;
  description: string;
  distanceKm?: number;
  durationText?: string;
  altitudeM?: number;
  accommodationType?: string;
  accommodationName?: string;
}

interface TourOptionData {
  modality: string; // "Grupal" | "Privada"
  pricePerPerson: number | null;
  minPeople?: number;
  maxPeople?: number;
}

interface InclusionData {
  type: "INCLUYE" | "NO_INCLUYE";
  item: string;
}

interface TourData {
  slug: string;
  name: string;
  category: string;
  shortDescription?: string;
  durationDays: number;
  durationNights?: number;
  difficulty?: string;
  maxAltitudeM?: number;
  minGroupSize?: number;
  maxGroupSize?: number;
  guideLanguages?: string;
  placesVisited?: string;
  published: boolean;
  featured?: boolean;
  itinerary?: ItineraryDay[];
  options: TourOptionData[];
  inclusions: InclusionData[];
}

// ---------------------------------------------------------
// DATA: CAMINO INCA
// ---------------------------------------------------------
const caminoInca: TourData[] = [
  {
    slug: "camino-inca-2-dias",
    name: "02 Días Camino Inca Corto a Machu Picchu",
    category: "Camino Inca",
    shortDescription:
      "Ideal para quienes disponen de poco tiempo pero desean vivir la experiencia de recorrer un tramo del Camino Inca hasta Machu Picchu.",
    durationDays: 2,
    durationNights: 1,
    difficulty: "Moderada a Fácil",
    maxAltitudeM: 2720,
    minGroupSize: 2,
    maxGroupSize: 12,
    guideLanguages: "Inglés y Español",
    published: true,
    itinerary: [
      {
        dayNumber: 1,
        title: "Km 104 – Wiñayhuayna – Aguas Calientes",
        route: "Cusco → Km 104 → Wiñayhuayna → Aguas Calientes",
        description:
          "Tren hasta el Km 104, caminata pasando por Chachabamba y Wiñayhuayna, llegada a la Puerta del Sol (Inti Punku) y descenso en bus a Aguas Calientes.",
        distanceKm: 12,
        durationText: "6 horas",
        altitudeM: 2040,
        accommodationType: "Hotel",
        accommodationName: "Aguas Calientes",
      },
      {
        dayNumber: 2,
        title: "Machu Picchu – Retorno a Cusco",
        route: "Aguas Calientes → Machu Picchu → Cusco",
        description:
          "Bus de subida a la ciudadela, visita guiada de 2.5 horas, tiempo libre y retorno en tren a Ollantaytambo y bus a Cusco.",
        durationText: "2.5 horas de visita + logística de retorno",
      },
    ],
    options: [
      { modality: "Grupal", pricePerPerson: 720, minPeople: 2, maxPeople: 12 },
      { modality: "Privada", pricePerPerson: null, minPeople: 2 },
    ],
    inclusions: [
      { type: "INCLUYE", item: "Guía profesional bilingüe" },
      {
        type: "INCLUYE",
        item: "Ingresos oficiales al Camino Inca y Machu Picchu",
      },
      { type: "INCLUYE", item: "Tickets de tren (Expedition/Voyager)" },
      { type: "INCLUYE", item: "Bus Consettur (subida y bajada)" },
      { type: "INCLUYE", item: "1 noche de hotel en Aguas Calientes" },
      { type: "INCLUYE", item: "Alimentación: 1 box lunch, 1 cena" },
      {
        type: "INCLUYE",
        item: "Equipo de primeros auxilios y balón de oxígeno",
      },
      { type: "NO_INCLUYE", item: "Primer desayuno (Día 1)" },
      { type: "NO_INCLUYE", item: "Último almuerzo (Día 2)" },
      { type: "NO_INCLUYE", item: "Bastones de trekking" },
      { type: "NO_INCLUYE", item: "Bolsa de dormir" },
      { type: "NO_INCLUYE", item: "Propinas" },
      {
        type: "NO_INCLUYE",
        item: "Entradas a montañas opcionales (Huayna Picchu / Machu Picchu Montaña)",
      },
    ],
  },
  {
    slug: "camino-inca-4-dias-clasico",
    name: "04 Días Camino Inca Clásico a Machu Picchu",
    category: "Camino Inca",
    shortDescription:
      "La ruta de trekking más famosa de Sudamérica: cuatro días atravesando paisajes altoandinos y sitios arqueológicos hasta la Puerta del Sol.",
    durationDays: 4,
    durationNights: 3,
    difficulty: "Moderada a Desafiante",
    maxAltitudeM: 4200,
    minGroupSize: 2,
    maxGroupSize: 12,
    guideLanguages: "Inglés y Español",
    published: true,
    featured: true,
    itinerary: [
      {
        dayNumber: 1,
        title: "Km 82 – Wayllabamba",
        route: "Cusco → Km 82 → Wayllabamba",
        description:
          "Viaje hasta Piscacucho (Km 82), control de ingreso, caminata moderada pasando por Patallacta y campamento en Wayllabamba.",
        accommodationType: "Campamento",
        accommodationName: "Wayllabamba",
      },
      {
        dayNumber: 2,
        title: "Abra Warmiwañusca – Pacaymayu",
        route: "Wayllabamba → Warmiwañusca (4,200 m) → Pacaymayu",
        description:
          "Ascenso desafiante hasta el punto más alto del trek (Abra de la Mujer Muerta) y descenso al valle de Pacaymayu.",
        altitudeM: 4200,
        accommodationType: "Campamento",
        accommodationName: "Pacaymayu",
      },
      {
        dayNumber: 3,
        title: "Runkurakay – Sayacmarca – Wiñayhuayna",
        route: "Pacaymayu → Runkurakay → Sayacmarca → Wiñayhuayna",
        description:
          "Visita a las ruinas de Runkurakay y Sayacmarca, paso por bosques nubosos subtropicales y campamento en Wiñayhuayna.",
        accommodationType: "Campamento",
        accommodationName: "Wiñayhuayna",
      },
      {
        dayNumber: 4,
        title: "Inti Punku – Machu Picchu – Cusco",
        route: "Wiñayhuayna → Inti Punku → Machu Picchu → Cusco",
        description:
          "Caminata matutina a la Puerta del Sol para ver el amanecer sobre Machu Picchu, visita guiada completa y retorno en tren a Cusco.",
      },
    ],
    options: [
      { modality: "Grupal", pricePerPerson: 1250, minPeople: 2, maxPeople: 12 },
      { modality: "Privada", pricePerPerson: null, minPeople: 2 },
    ],
    inclusions: [
      { type: "INCLUYE", item: "Sesión informativa previa (briefing)" },
      { type: "INCLUYE", item: "Guía profesional oficial" },
      { type: "INCLUYE", item: "Cocinero profesional y equipo de porteadores" },
      {
        type: "INCLUYE",
        item: "Tiendas de campaña impermeables, carpa comedor y cocina",
      },
      { type: "INCLUYE", item: "Colchones inflables" },
      {
        type: "INCLUYE",
        item: "Alimentación completa: 3 desayunos, 3 almuerzos, 3 cenas y lonches diarios",
      },
      { type: "INCLUYE", item: "Entradas al Camino Inca y Machu Picchu" },
      {
        type: "INCLUYE",
        item: "Tren de retorno y transporte privado al inicio",
      },
      { type: "NO_INCLUYE", item: "Bolsa de dormir (sleeping bag)" },
      { type: "NO_INCLUYE", item: "Bastones de trekking" },
      {
        type: "NO_INCLUYE",
        item: "Primer desayuno (Día 1) y último almuerzo (Día 4)",
      },
      {
        type: "NO_INCLUYE",
        item: "Propinas para guías, cocineros y porteadores",
      },
    ],
  },
  {
    slug: "camino-inca-5-dias",
    name: "05 Días Camino Inca a Machu Picchu",
    category: "Camino Inca",
    shortDescription:
      "Versión extendida y pausada del Camino Inca Clásico, con mejor aclimatación y campamentos menos concurridos.",
    durationDays: 5,
    durationNights: 4,
    difficulty: "Moderada",
    maxAltitudeM: 4200,
    minGroupSize: 2,
    maxGroupSize: 12,
    guideLanguages: "Inglés y Español",
    published: false, // pendiente de confirmar tarifa
    featured: true,
    itinerary: [
      {
        dayNumber: 1,
        title: "Km 82 – Wayllabamba",
        route: "Cusco → Km 82 → Wayllabamba",
        description: "Inicio del recorrido y primer campamento en Wayllabamba.",
        accommodationType: "Campamento",
        accommodationName: "Wayllabamba",
      },
      {
        dayNumber: 2,
        title: "Wayllabamba – Llulluchapampa",
        route: "Wayllabamba → Llulluchapampa",
        description:
          "Jornada corta de ascenso progresivo para facilitar la aclimatación.",
        accommodationType: "Campamento",
        accommodationName: "Llulluchapampa",
      },
      {
        dayNumber: 3,
        title: "Abra Warmiwañusca – Phuyupatamarca",
        route: "Llulluchapampa → Warmiwañusca → Phuyupatamarca",
        description:
          "Cruce del abra principal y descenso prolongado hasta el campamento sobre las nubes en Phuyupatamarca.",
        altitudeM: 4200,
        accommodationType: "Campamento",
        accommodationName: "Phuyupatamarca",
      },
      {
        dayNumber: 4,
        title: "Phuyupatamarca – Wiñayhuayna",
        route: "Phuyupatamarca → Wiñayhuayna",
        description:
          "Descenso explorando arquitectura inca oculta y pernocte en Wiñayhuayna.",
        accommodationType: "Campamento",
        accommodationName: "Wiñayhuayna",
      },
      {
        dayNumber: 5,
        title: "Machu Picchu – Cusco",
        route: "Wiñayhuayna → Machu Picchu → Cusco",
        description: "Amanecer en Machu Picchu, tour guiado y retorno a Cusco.",
      },
    ],
    options: [
      { modality: "Grupal", pricePerPerson: null, minPeople: 2, maxPeople: 12 },
      { modality: "Privada", pricePerPerson: null, minPeople: 2 },
    ],
    inclusions: [
      { type: "INCLUYE", item: "Guía experto y cocinero profesional" },
      { type: "INCLUYE", item: "Equipo de porteadores" },
      { type: "INCLUYE", item: "Carpas y equipo de campamento superior" },
      { type: "INCLUYE", item: "5 días de alimentación completa" },
      { type: "INCLUYE", item: "Entradas oficiales y tren de retorno" },
      { type: "NO_INCLUYE", item: "Saco de dormir" },
      { type: "NO_INCLUYE", item: "Bastones de trekking" },
      { type: "NO_INCLUYE", item: "Propinas y gastos personales" },
    ],
  },
  {
    slug: "salkantay-camino-inca-7-dias",
    name: "07 Días Caminata de Salkantay & Camino Inca a Machu Picchu",
    category: "Camino Inca",
    shortDescription:
      "La expedición cumbre de los Andes: combina los paisajes glaciales del Salkantay con el tramo final histórico del Camino Inca. Solo servicio privado.",
    durationDays: 7,
    durationNights: 6,
    difficulty: "Desafiante",
    maxAltitudeM: 4630,
    guideLanguages: "Inglés y Español",
    published: false,
    itinerary: [
      {
        dayNumber: 1,
        title: "Laguna Humantay",
        route: "Cusco → Mollepata → Soraypampa → Laguna Humantay",
        description: "Traslado y caminata hacia la turquesa Laguna Humantay.",
      },
      {
        dayNumber: 2,
        title: "Abra Salkantay",
        route: "Soraypampa → Abra Salkantay → Chaullay",
        description: "Ascenso al paso a 4,630 m y descenso a la ceja de selva.",
        altitudeM: 4630,
      },
      {
        dayNumber: 3,
        title: "Valles cafetaleros",
        route: "Chaullay → La Playa → Lucmabamba",
        description: "Trek por valles cafetaleros y plantaciones locales.",
      },
      {
        dayNumber: 4,
        title: "Conexión con el Camino Inca",
        route: "Lucmabamba → Hidroeléctrica → Conexión Camino Inca",
        description:
          "Empalme con la ruta sagrada inca hacia los campamentos de la red vial.",
      },
      {
        dayNumber: 5,
        title: "Tramo Camino Inca (parte 1)",
        description:
          "Recorrido por complejos arqueológicos superiores, aproximándose a Machu Picchu.",
      },
      {
        dayNumber: 6,
        title: "Tramo Camino Inca (parte 2)",
        description:
          "Continuación del tramo final del Camino Inca hacia la zona de Machu Picchu.",
      },
      {
        dayNumber: 7,
        title: "Machu Picchu – Cusco",
        route: "Machu Picchu → Cusco",
        description:
          "Visita final a la ciudadela inca y retorno privado a Cusco.",
      },
    ],
    options: [{ modality: "Privada", pricePerPerson: null, minPeople: 2 }],
    inclusions: [
      { type: "INCLUYE", item: "Guía privado especializado de montaña" },
      { type: "INCLUYE", item: "Arrieros y caballos (sección Salkantay)" },
      { type: "INCLUYE", item: "Porteadores (sección Camino Inca)" },
      { type: "INCLUYE", item: "Equipo completo de campamento de lujo" },
      { type: "INCLUYE", item: "Alimentación completa durante los 7 días" },
      {
        type: "INCLUYE",
        item: "Todos los tickets de ingreso y tren de retorno",
      },
      { type: "NO_INCLUYE", item: "Saco de dormir y bastones" },
      { type: "NO_INCLUYE", item: "Seguro de viaje internacional" },
      { type: "NO_INCLUYE", item: "Propinas" },
    ],
  },
];

// ---------------------------------------------------------
// DATA: TREK SALKANTAY
// ---------------------------------------------------------
const salkantay: TourData[] = [
  {
    slug: "salkantay-5-dias",
    name: "05 Días Salkantay a Machu Picchu",
    category: "Treks Alternativos",
    shortDescription:
      "La alternativa natural más impresionante al Camino Inca: pasos de alta montaña nevados, lagunas altoandinas y valles tropicales.",
    durationDays: 5,
    durationNights: 4,
    difficulty: "Desafiante",
    maxAltitudeM: 4630,
    guideLanguages: "Inglés y Español",
    published: false,
    featured: true,
    itinerary: [
      {
        dayNumber: 1,
        title: "Laguna Humantay",
        route: "Cusco → Mollepata → Soraypampa → Laguna Humantay",
        description:
          "Viaje temprano a Mollepata, caminata de ascenso a la Laguna Humantay y campamento base en Soraypampa.",
      },
      {
        dayNumber: 2,
        title: "Paso Salkantay",
        route: "Soraypampa → Paso Salkantay (4,630 m) → Chaullay",
        description:
          "Cruce de la base del nevado Salkantay y descenso hacia el sector cálido de Chaullay.",
        altitudeM: 4630,
      },
      {
        dayNumber: 3,
        title: "Granjas de café",
        route: "Chaullay → La Playa → Lucmabamba",
        description:
          "Caminata rodeados de flora y fauna subtropical, cataratas y visita a granjas de café locales.",
      },
      {
        dayNumber: 4,
        title: "Camino a Aguas Calientes",
        route: "Lucmabamba → Hidroeléctrica → Aguas Calientes",
        description:
          "Caminata histórica por trochas incas con vistas lejanas a Machu Picchu y llegada a Aguas Calientes.",
        accommodationType: "Hotel",
        accommodationName: "Aguas Calientes",
      },
      {
        dayNumber: 5,
        title: "Machu Picchu – Cusco",
        route: "Machu Picchu → Cusco",
        description:
          "Visita guiada a la ciudadela inca y retorno en tren y bus a Cusco.",
      },
    ],
    options: [
      { modality: "Grupal", pricePerPerson: null, minPeople: 2, maxPeople: 12 },
      { modality: "Privada", pricePerPerson: null, minPeople: 2 },
    ],
    inclusions: [
      { type: "INCLUYE", item: "Transporte ida y vuelta desde Cusco" },
      { type: "INCLUYE", item: "Guía profesional bilingüe" },
      { type: "INCLUYE", item: "Cocinero y equipo de cocina" },
      { type: "INCLUYE", item: "Arrieros y mulas de carga" },
      { type: "INCLUYE", item: "4 desayunos, 4 almuerzos, 4 cenas" },
      { type: "INCLUYE", item: "Entradas a la Laguna Humantay y Machu Picchu" },
      { type: "INCLUYE", item: "Bus de bajada/subida y tren de retorno" },
      { type: "NO_INCLUYE", item: "Saco de dormir y bastones" },
      { type: "NO_INCLUYE", item: "Ingreso a las aguas termales de Cocalmayo" },
      { type: "NO_INCLUYE", item: "Propinas y gastos personales" },
    ],
  },
  {
    slug: "salkantay-4-dias",
    name: "04 Días Salkantay Trek a Machu Picchu",
    category: "Treks Alternativos",
    shortDescription:
      "Versión optimizada en tiempo para conectar los paisajes del Salkantay con Machu Picchu en formato ágil y grupal.",
    durationDays: 4,
    durationNights: 3,
    difficulty: "Desafiante",
    maxAltitudeM: 4630,
    guideLanguages: "Inglés y Español",
    published: false,
    itinerary: [
      {
        dayNumber: 1,
        title: "Base del nevado",
        route: "Cusco → Mollepata → Soraypampa → Huayracmachay",
        description:
          "Trek inicial pasando por la base del nevado hasta campamento avanzado.",
      },
      {
        dayNumber: 2,
        title: "Descenso a la selva",
        route: "Huayracmachay → La Playa → Lucmabamba",
        description:
          "Descenso hacia la ceja de selva y plantaciones tropicales.",
      },
      {
        dayNumber: 3,
        title: "Camino a Aguas Calientes",
        route: "Lucmabamba → Hidroeléctrica → Aguas Calientes",
        description: "Caminata final hacia el pueblo de Aguas Calientes.",
      },
      {
        dayNumber: 4,
        title: "Machu Picchu – Cusco",
        description: "Visita guiada a la ciudadela y retorno a Cusco.",
      },
    ],
    options: [
      { modality: "Grupal", pricePerPerson: null, minPeople: 2, maxPeople: 12 },
    ],
    inclusions: [
      { type: "INCLUYE", item: "Transporte, guía profesional y cocinero" },
      { type: "INCLUYE", item: "Mulas de carga y equipo de campamento" },
      { type: "INCLUYE", item: "Alimentación completa" },
      { type: "INCLUYE", item: "Entradas a Machu Picchu y tren de retorno" },
      { type: "NO_INCLUYE", item: "Saco de dormir y bastones" },
      { type: "NO_INCLUYE", item: "Último almuerzo" },
      { type: "NO_INCLUYE", item: "Propinas" },
    ],
  },
];

// ---------------------------------------------------------
// DATA: INCA JUNGLE
// ---------------------------------------------------------
const incaJungle: TourData[] = [
  {
    slug: "inca-jungle-4-dias",
    name: "04 Días Inca Jungle Tour a Machu Picchu",
    category: "Treks Alternativos",
    shortDescription:
      "Tour de aventura dinámico que combina ciclismo de montaña, caminatas por la selva alta y deportes extremos opcionales.",
    durationDays: 4,
    durationNights: 3,
    difficulty: "Moderada",
    guideLanguages: "Inglés y Español",
    published: false,
    itinerary: [
      {
        dayNumber: 1,
        title: "Descenso en bicicleta",
        route: "Cusco → Abra Málaga → Descenso en bicicleta → Santa María",
        description:
          "Viaje al Abra Málaga, descenso en bicicleta de montaña por 3 horas hacia la selva alta.",
      },
      {
        dayNumber: 2,
        title: "Trochas ancestrales",
        route: "Santa María → Santa Teresa",
        description:
          "Trekking por trochas ancestrales con opciones de canotaje (rafting) o tirolesa (zipline).",
      },
      {
        dayNumber: 3,
        title: "Camino a Aguas Calientes",
        route: "Santa Teresa → Hidroeléctrica → Aguas Calientes",
        description:
          "Caminata paralela a la vía del tren a través del valle subtropical.",
      },
      {
        dayNumber: 4,
        title: "Machu Picchu – Cusco",
        description:
          "Visita guiada a Machu Picchu por la mañana y retorno en tren y bus a Cusco.",
      },
    ],
    options: [
      { modality: "Grupal", pricePerPerson: null, minPeople: 2, maxPeople: 12 },
    ],
    inclusions: [
      { type: "INCLUYE", item: "Guía profesional de turismo de aventura" },
      {
        type: "INCLUYE",
        item: "Bicicletas de montaña con equipo de seguridad completo",
      },
      { type: "INCLUYE", item: "Alojamiento en hostales seleccionados" },
      {
        type: "INCLUYE",
        item: "Alimentación: 3 desayunos, 3 almuerzos, 3 cenas",
      },
      { type: "INCLUYE", item: "Entradas a Machu Picchu y tren de retorno" },
      { type: "NO_INCLUYE", item: "Primer desayuno y último almuerzo" },
      {
        type: "NO_INCLUYE",
        item: "Actividades opcionales de aventura (canotaje o tirolesa)",
      },
      { type: "NO_INCLUYE", item: "Bebidas extras y propinas" },
    ],
  },
  {
    slug: "inca-jungle-3-dias",
    name: "03 Días Inca Jungle Trail a Machu Picchu",
    category: "Treks Alternativos",
    shortDescription:
      "Versión condensada de alta adrenalina para conectar el ciclismo y la caminata selvática hacia Machu Picchu.",
    durationDays: 3,
    durationNights: 2,
    difficulty: "Moderada",
    guideLanguages: "Inglés y Español",
    published: false,
    itinerary: [
      {
        dayNumber: 1,
        title: "Bicicleta a Santa Teresa",
        route: "Cusco → Abra Málaga → Bicicleta → Santa Teresa",
        description: "Descenso en bicicleta y traslado directo a Santa Teresa.",
      },
      {
        dayNumber: 2,
        title: "Caminata a Aguas Calientes",
        route: "Santa Teresa → Hidroeléctrica → Aguas Calientes",
        description:
          "Trekking a lo largo de la vía férrea con opción de tirolesa.",
      },
      {
        dayNumber: 3,
        title: "Machu Picchu – Cusco",
        description: "Visita guiada a Machu Picchu y retorno en tren a Cusco.",
      },
    ],
    options: [
      { modality: "Grupal", pricePerPerson: null, minPeople: 2, maxPeople: 12 },
    ],
    inclusions: [
      { type: "INCLUYE", item: "Guía de aventura" },
      { type: "INCLUYE", item: "Bicicletas y equipos de protección" },
      { type: "INCLUYE", item: "Hospedaje en hotel básico" },
      { type: "INCLUYE", item: "Alimentación completa según programa" },
      { type: "INCLUYE", item: "Ingresos a Machu Picchu y tren de retorno" },
      { type: "NO_INCLUYE", item: "Almuerzo y cena del último día" },
      { type: "NO_INCLUYE", item: "Deportes de aventura opcionales" },
      { type: "NO_INCLUYE", item: "Bolsa de dormir y propinas" },
    ],
  },
];

// ---------------------------------------------------------
// DATA: CUSCO & VALLE SAGRADO (7 tours, precios confirmados)
// ---------------------------------------------------------
const cuscoValleSagrado: TourData[] = [
  {
    slug: "city-tour-cusco",
    name: "City Tour Cusco",
    category: "Cusco & Valle Sagrado",
    shortDescription:
      "Explora la magia de la capital inca y sus impresionantes fortalezas circundantes.",
    durationDays: 1,
    placesVisited: "Qorikancha, Sacsayhuamán, Q'enqo, Puka Pukara, Tambomachay",
    published: true,
    options: [
      { modality: "Grupal", pricePerPerson: 20 },
      { modality: "Privada", pricePerPerson: 80, minPeople: 2 },
    ],
    inclusions: [
      { type: "INCLUYE", item: "Guía profesional" },
      {
        type: "INCLUYE",
        item: "Transporte turístico (compartido en Grupal, privado en Privada)",
      },
      { type: "NO_INCLUYE", item: "Entradas / Boleto Turístico" },
      { type: "NO_INCLUYE", item: "Alimentación" },
      { type: "NO_INCLUYE", item: "Propinas" },
    ],
  },
  {
    slug: "walking-tour-cusco",
    name: "Walking Tour Cusco",
    category: "Cusco & Valle Sagrado",
    shortDescription:
      "Una caminata íntima por las calles históricas y los rincones más pintorescos de la ciudad.",
    durationDays: 1,
    placesVisited:
      "Plaza de Armas, Piedra de los 12 Ángulos, Calle 7 Borreguitos, San Blas",
    published: true,
    options: [{ modality: "Privada", pricePerPerson: 30, minPeople: 2 }],
    inclusions: [
      {
        type: "INCLUYE",
        item: "Guía profesional exclusivo para el recorrido a pie",
      },
      { type: "NO_INCLUYE", item: "Ingresos a museos opcionales" },
      { type: "NO_INCLUYE", item: "Alimentación" },
      { type: "NO_INCLUYE", item: "Propinas" },
    ],
  },
  {
    slug: "valle-sagrado-vip",
    name: "Valle Sagrado VIP",
    category: "Cusco & Valle Sagrado",
    shortDescription:
      "Descubre los centros agrícolas y textiles más importantes del Imperio Inca en un solo día.",
    durationDays: 1,
    placesVisited:
      "Chinchero (Centro textil Awana), Maras y Moray, Urubamba, Ollantaytambo, Pisac",
    published: true,
    options: [
      { modality: "Grupal", pricePerPerson: 60 },
      { modality: "Privada", pricePerPerson: 100, minPeople: 2 },
    ],
    inclusions: [
      { type: "INCLUYE", item: "Guía profesional" },
      {
        type: "INCLUYE",
        item: "Transporte turístico (compartido en Grupal, privado en Privada)",
      },
      {
        type: "INCLUYE",
        item: "Almuerzo buffet en Urubamba (solo modalidad Grupal)",
      },
      { type: "NO_INCLUYE", item: "Entradas / Boleto Turístico" },
      { type: "NO_INCLUYE", item: "Propinas" },
    ],
  },
  {
    slug: "valle-sagrado-conexion-machu-picchu",
    name: "Valle Sagrado + Conexión Machu Picchu",
    category: "Cusco & Valle Sagrado",
    shortDescription:
      "La ruta ideal para continuar tu viaje hacia Aguas Calientes optimizando tu tiempo.",
    durationDays: 1,
    placesVisited:
      "Chinchero (Centro textil Awana), Maras, Moray, Urubamba, Ollantaytambo (no incluye Pisac)",
    published: true,
    options: [
      { modality: "Grupal", pricePerPerson: 50 },
      { modality: "Privada", pricePerPerson: 80, minPeople: 2 },
    ],
    inclusions: [
      { type: "INCLUYE", item: "Guía profesional" },
      { type: "INCLUYE", item: "Transporte turístico hasta Ollantaytambo" },
      {
        type: "INCLUYE",
        item: "Almuerzo buffet en Urubamba (solo modalidad Grupal)",
      },
      { type: "NO_INCLUYE", item: "Boleto de tren a Aguas Calientes" },
      { type: "NO_INCLUYE", item: "Entradas / Boleto Turístico" },
      { type: "NO_INCLUYE", item: "Propinas" },
    ],
  },
  {
    slug: "maras-moray-chinchero",
    name: "Maras, Moray y Chinchero",
    category: "Cusco & Valle Sagrado",
    shortDescription:
      "Un recorrido fascinante por las terrazas agrícolas circulares y las emblemáticas salineras.",
    durationDays: 1,
    placesVisited:
      "Centro Arqueológico de Moray, Minas de Sal de Maras, Chinchero",
    published: true,
    options: [
      { modality: "Grupal", pricePerPerson: 30 },
      { modality: "Privada", pricePerPerson: 80, minPeople: 2 },
    ],
    inclusions: [
      { type: "INCLUYE", item: "Guía profesional" },
      {
        type: "INCLUYE",
        item: "Transporte turístico (compartido en Grupal, privado en Privada)",
      },
      { type: "NO_INCLUYE", item: "Entradas / Boleto Turístico" },
      { type: "NO_INCLUYE", item: "Ingreso a las Salineras de Maras" },
      { type: "NO_INCLUYE", item: "Alimentación" },
      { type: "NO_INCLUYE", item: "Propinas" },
    ],
  },
  {
    slug: "turismo-vivencial-huilloc",
    name: "Turismo Vivencial en Huilloc",
    category: "Cusco & Valle Sagrado",
    shortDescription:
      "Vive una experiencia única compartiendo las costumbres y el arte textil ancestral con una comunidad andina auténtica.",
    durationDays: 1,
    placesVisited: "Comunidad de Huilloc (Valle Sagrado)",
    published: true,
    options: [{ modality: "Privada", pricePerPerson: 100, minPeople: 2 }],
    inclusions: [
      { type: "INCLUYE", item: "Guía profesional exclusivo" },
      { type: "INCLUYE", item: "Transporte privado" },
      { type: "INCLUYE", item: "Alimentación local (comida)" },
      { type: "INCLUYE", item: "Vivencia cultural en la comunidad" },
      { type: "NO_INCLUYE", item: "Gastos personales" },
      { type: "NO_INCLUYE", item: "Propinas" },
    ],
  },
  {
    slug: "aventura-zipline",
    name: "Aventura: Zipline",
    category: "Cusco & Valle Sagrado",
    shortDescription:
      "Siente la adrenalina volando sobre los hermosos paisajes del Valle Sagrado.",
    durationDays: 1,
    placesVisited: "Circuito de Zipline / Tirolina, Valle Sagrado",
    published: true,
    options: [{ modality: "Privada", pricePerPerson: 80, minPeople: 2 }],
    inclusions: [
      { type: "INCLUYE", item: "Transporte privado" },
      { type: "INCLUYE", item: "Equipo completo de seguridad" },
      { type: "INCLUYE", item: "Guía instructor especializado" },
      { type: "NO_INCLUYE", item: "Gastos personales" },
      { type: "NO_INCLUYE", item: "Propinas" },
    ],
  },
];

// ---------------------------------------------------------
// CONSOLIDADO
// ---------------------------------------------------------
const allTours: TourData[] = [
  ...caminoInca,
  ...salkantay,
  ...incaJungle,
  ...cuscoValleSagrado,
];

// ---------------------------------------------------------
// SEED LOGIC
// ---------------------------------------------------------
async function seedTour(data: TourData) {
  // Limpia el tour si ya existía (permite re-correr el seed sin duplicar)
  await prisma.tour.deleteMany({ where: { slug: data.slug } });

  await prisma.tour.create({
    data: {
      slug: data.slug,
      name: data.name,
      category: data.category,
      shortDescription: data.shortDescription,
      durationDays: data.durationDays,
      durationNights: data.durationNights,
      difficulty: data.difficulty,
      maxAltitudeM: data.maxAltitudeM,
      minGroupSize: data.minGroupSize,
      maxGroupSize: data.maxGroupSize,
      guideLanguages: data.guideLanguages,
      placesVisited: data.placesVisited,
      published: data.published,
      featured: data.featured ?? false,
      itinerary: data.itinerary
        ? {
            create: data.itinerary.map((day) => ({
              dayNumber: day.dayNumber,
              title: day.title,
              route: day.route,
              description: day.description,
              distanceKm: day.distanceKm,
              durationText: day.durationText,
              altitudeM: day.altitudeM,
              accommodationType: day.accommodationType,
              accommodationName: day.accommodationName,
            })),
          }
        : undefined,
      options: {
        create: data.options.map((opt) => ({
          modality: opt.modality,
          pricePerPerson: opt.pricePerPerson,
          minPeople: opt.minPeople ?? 1,
          maxPeople: opt.maxPeople,
        })),
      },
      inclusions: {
        create: data.inclusions.map((inc, idx) => ({
          type: inc.type as InclusionType,
          item: inc.item,
          order: idx,
        })),
      },
    },
  });
}

async function main() {
  console.log("🌱 Iniciando siembra de datos...\n");

  for (const tour of allTours) {
    await seedTour(tour);
    const status = tour.published ? "✅ publicado" : "⏳ pendiente de precio";
    console.log(`  ${status} — ${tour.name}`);
  }

  const publishedCount = allTours.filter((t) => t.published).length;
  console.log(
    `\n🎉 Siembra completa: ${allTours.length} tours (${publishedCount} publicados, ${allTours.length - publishedCount} pendientes).`,
  );
}

main()
  .catch((e) => {
    console.error("❌ Error durante la siembra:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
