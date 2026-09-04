import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type TourSeed = {
  tour: {
    title: string;
    slug: string;
    description: string;
    duration: string;
    difficulty: string;
    maxAltitude?: number | null;
    maxGroupSize?: number | null;
    languages: string;
    category: string;
    price?: number | null;
  };
  prices?: { type: string; price: number; minPeople?: number | null }[];
  itinerary?: {
    day: number;
    title: string;
    description: string;
    distance?: string | null;
    hikingTime?: string | null;
    accommodation?: string | null;
  }[];
  includes?: string[];
  excludes?: string[];
};

// Upserts the base Tour, then replaces its related rows (prices, itinerary,
// includes, excludes) so the seed is idempotent and safe to re-run.
async function upsertFullTour(data: TourSeed) {
  const tour = await prisma.tour.upsert({
    where: { slug: data.tour.slug },
    update: { ...data.tour },
    create: { ...data.tour },
  });

  await prisma.tourPrice.deleteMany({ where: { tourId: tour.id } });
  await prisma.tourItinerary.deleteMany({ where: { tourId: tour.id } });
  await prisma.tourInclude.deleteMany({ where: { tourId: tour.id } });
  await prisma.tourExclude.deleteMany({ where: { tourId: tour.id } });

  if (data.prices?.length) {
    await prisma.tourPrice.createMany({
      data: data.prices.map((p) => ({ ...p, tourId: tour.id })),
    });
  }

  if (data.itinerary?.length) {
    await prisma.tourItinerary.createMany({
      data: data.itinerary.map((i) => ({ ...i, tourId: tour.id })),
    });
  }

  if (data.includes?.length) {
    await prisma.tourInclude.createMany({
      data: data.includes.map((item) => ({ item, tourId: tour.id })),
    });
  }

  if (data.excludes?.length) {
    await prisma.tourExclude.createMany({
      data: data.excludes.map((item) => ({ item, tourId: tour.id })),
    });
  }

  return tour;
}

// ---------------------------------------------------------------------------
// BLOCK 1: INCA TRAIL (3 variants) — same slugs as the original seed, now
// enriched with full itinerary, includes and excludes.
// ---------------------------------------------------------------------------

const incaTrailTours: TourSeed[] = [
  {
    tour: {
      title: "4-Day Classic Inca Trail to Machu Picchu",
      slug: "4-day-classic-inca-trail",
      description:
        "Experience the classic Inca Trail to Machu Picchu through breathtaking Andean landscapes and ancient Inca sites.",
      duration: "4 Days / 3 Nights",
      difficulty: "Moderate to Challenging",
      maxAltitude: 4215,
      maxGroupSize: 12,
      languages: "English and Spanish",
      category: "camino-inca",
      price: 1250,
    },
    itinerary: [
      {
        day: 1,
        title: "The Journey Begins – Urubamba River Views and First Inca Steps",
        description:
          "Cusco → Km 82 → Llactapata → Wayllabamba. We start at the official checkpoint with a gentle warm-up hike along the Urubamba River, passing the impressive Llactapata archaeological site.",
        distance: "12 km",
        hikingTime: "5-6 hours",
        accommodation: "Wayllabamba Camp (3,000 m)",
      },
      {
        day: 2,
        title: "The Big Challenge – Conquering Dead Woman's Pass",
        description:
          "Wayllabamba → Warmiwañusqa → Pacaymayo. The most demanding day: we climb through a mystical cloud forest to the trail's highest point (4,215 m), rewarded with 360° Andean views before descending to camp.",
        distance: "11 km",
        hikingTime: "6-7 hours",
        accommodation: "Pacaymayo Camp (3,600 m)",
      },
      {
        day: 3,
        title: "Cultural Rewards – Original Trails and Cloud Forest",
        description:
          "Pacaymayo → Sayacmarca → Phuyupatamarca → Wiñay Wayna. We walk on perfectly preserved Inca stairways, cross stone tunnels, and visit the citadels of Sayacmarca and Wiñay Wayna, perched on the cloud forest slopes.",
        distance: "16 km",
        hikingTime: "8 hours",
        accommodation: "Wiñay Wayna Camp (2,680 m)",
      },
      {
        day: 4,
        title: "The Grand Finale – Sunrise over the Wonder of the World",
        description:
          "Wiñay Wayna → Inti Punku → Machu Picchu → Cusco. We wake up early to reach Inti Punku (Sun Gate) just as Machu Picchu appears under the morning light, including a full 2-hour guided tour and scenic train return.",
        distance: "5 km",
        hikingTime: "2 hours",
      },
    ],
    includes: [
      "Personalized orientation briefing at our Cusco office the day before departure",
      "End-to-end transport: hotel pickup in Cusco to the trailhead (Km 82) and return train tickets with final transfer to your hotel",
      "Official permits and tickets: government Inca Trail permits and official Machu Picchu entrance",
      "High-mountain camping: professional 4-season tents (designed for 4, used for 2 for comfort) plus dining tent with tables and chairs",
      "Gourmet mountain meals: 3 breakfasts, 3 lunches and 3 hot dinners prepared by a mountain chef, with vegetarian/vegan/gluten-free options at no extra cost",
      "Ethical porter team with proper gear, fair pay and controlled weight limits, carrying all shared equipment",
      "Safety first: guides equipped with radio, advanced first-aid kit and medical oxygen",
    ],
    excludes: [
      "Sleeping bag rated to -10°C (rental available for $25 USD)",
      "Trekking poles with rubber tips, required (rental available for $20 USD per pair)",
      "Extra personal porter for personal luggage",
      "Mandatory travel insurance",
      "Voluntary tips for field staff",
    ],
  },
  {
    tour: {
      title: "2-Day Short Inca Trail to Machu Picchu",
      slug: "2-day-short-inca-trail",
      description:
        "Experience the Short Inca Trail to Machu Picchu, visiting Wiñay Wayna and entering the citadel through the Sun Gate.",
      duration: "2 Days / 1 Night",
      difficulty: "Moderate to Easy",
      maxAltitude: 2720,
      maxGroupSize: 12,
      languages: "English and Spanish",
      category: "camino-inca",
      price: 720,
    },
    itinerary: [
      {
        day: 1,
        title:
          "The Sacred Trail – Cloud Forest, Wiñay Wayna and the Imperial Entrance",
        description:
          "Cusco → Ollantaytambo → Km 104 → Wiñay Wayna → Inti Punku → Aguas Calientes. Early departure by train to Km 104, climbing through lush vegetation and visiting Chachabamba and the impressive Wiñay Wayna citadel, then crossing Inti Punku to see Machu Picchu in the afternoon with fewer crowds before descending by bus.",
        distance: "12 km",
        hikingTime: "6 hours",
        accommodation: "Hotel in Aguas Calientes (2,040 m)",
      },
      {
        day: 2,
        title:
          "The Grand Reunion – Guided Tour of the Wonder of the World and Return",
        description:
          "Aguas Calientes → Machu Picchu → Ollantaytambo → Cusco. Breakfast at the hotel, an early bus up to the citadel for a 2-hour guided tour of the official circuits, then return by train to Ollantaytambo and by van to your hotel in Cusco.",
        hikingTime: "2 hours + transport logistics",
      },
    ],
    includes: [
      "Informative briefing the day before departure",
      "Integrated transport logistics: round-trip hotel-to-station transfers and Expedition/Voyager round-trip train tickets",
      "Entry permits: government Short Inca Trail pass and Machu Picchu ticket",
      "Certified bilingual lead guide",
      "On-route meals: 1 gourmet box lunch, 1 dinner at a local restaurant in Aguas Calientes, 1 buffet breakfast at the hotel",
      "Consettur bus tickets for both days",
      "1 night at a comfortable hotel in Aguas Calientes",
      "Safety kit: first-aid and emergency oxygen",
    ],
    excludes: [
      "Day 1 breakfast and Day 2 lunch/dinner in Aguas Calientes",
      "Trekking poles with rubber tips ($20 USD per pair)",
      "Travel medical insurance",
      "Tips",
    ],
  },
  {
    tour: {
      title: "5-Day Inca Trail to Machu Picchu",
      slug: "5-day-inca-trail",
      description:
        "Enjoy the Inca Trail to Machu Picchu at a relaxed pace, with more time to appreciate the landscapes and archaeological sites.",
      duration: "5 Days / 4 Nights",
      difficulty: "Moderate",
      maxAltitude: 4215,
      maxGroupSize: 12,
      languages: "English and Spanish",
      category: "camino-inca",
      price: null, // Price on request
    },
    itinerary: [
      {
        day: 1,
        title: "The Trail Awakens – A Gentle Start",
        description:
          "Cusco → Km 82 → Chamana → Tarayoc. Drive to Km 82, starting with short distances for optimal acclimatization. Lunch in Chamana and early camp at Tarayoc.",
        distance: "8 km",
        hikingTime: "4 hours",
        accommodation: "Tarayoc Camp (2,800 m)",
      },
      {
        day: 2,
        title: "The Gradual Ascent – Getting Ready for the Pass",
        description:
          "Tarayoc → Wayllabamba → Llulluchapampa. We climb through a native Queñua forest and camp at Llulluchapampa, a high, strategic spot to cross the pass well-rested the next day.",
        distance: "8 km",
        hikingTime: "5 hours",
        accommodation: "Llulluchapampa Camp (3,850 m)",
      },
      {
        day: 3,
        title: "Conquering the Summits – Two Mountain Passes",
        description:
          "Llulluchapampa → Warmiwañusqa Pass → Pacaymayo → Runkurakay → Chaquicocha. We cross the famous Dead Woman's Pass (4,215 m) early in the morning, descend to Pacaymayo for lunch, and visit Runkurakay before arriving at Chaquicocha.",
        distance: "15 km",
        hikingTime: "7-8 hours",
        accommodation: "Chaquicocha Camp (3,650 m)",
      },
      {
        day: 4,
        title: "Into the Cloud Forest and a Night of Comfort",
        description:
          "Chaquicocha → Phuyupatamarca → Wiñay Wayna → Aguas Calientes. Continuous descent through tropical landscapes, visiting Phuyupatamarca and Wiñay Wayna. Instead of camping, we descend to Aguas Calientes for a comfortable hotel night.",
        distance: "10 km",
        hikingTime: "5 hours",
        accommodation: "Hotel in Aguas Calientes (2,040 m)",
      },
      {
        day: 5,
        title: "The Grand Reward – Machu Picchu at Sunrise",
        description:
          "Aguas Calientes → Machu Picchu Sanctuary → Cusco. We enter the citadel with the first rays of sun for a thorough 2-hour guided tour, then return by train to Ollantaytambo with final transfer to your hotel in Cusco.",
        hikingTime: "2 hours guided tour",
      },
    ],
    includes: [
      "Full equipment and logistics of the 4-day trek (tents, chefs, guides, porters, entries and transport)",
      "Double accommodation benefit: 3 nights of high-mountain camping + 1 night at a selected hotel in Aguas Calientes (Day 4)",
      "Extended meals: 4 breakfasts, 4 lunches and 4 full dinners",
    ],
    excludes: [
      "Day 1 breakfast and Day 5 lunch in Aguas Calientes",
      "Sleeping bag and trekking pole rental",
      "Voluntary tips",
    ],
  },
];

// ---------------------------------------------------------------------------
// BLOCK 2: CUSCO + SACRED VALLEY (Group / Private pricing)
// ---------------------------------------------------------------------------

const cuscoValleyTours: TourSeed[] = [
  {
    tour: {
      title: "City Tour Cusco",
      slug: "city-tour-cusco",
      description:
        "Explore the magic of the Inca capital and its imposing surrounding fortresses. Visits: Qorikancha, Sacsayhuamán, Q'enqo, Puka Pukara and Tambomachay.",
      duration: "5 hours",
      difficulty: "Easy",
      maxAltitude: 3700,
      languages: "English and Spanish",
      category: "cusco-valle-sagrado",
      price: null,
    },
    prices: [
      { type: "Group", price: 20 },
      { type: "Private", price: 80, minPeople: 2 },
    ],
    includes: [
      "Professional guide and shared tourist transport (Group)",
      "Exclusive professional guide and private transport (Private)",
    ],
    excludes: ["Entrance tickets / Tourist Ticket, meals and tips"],
  },
  {
    tour: {
      title: "Walking Tour Cusco",
      slug: "walking-tour-cusco",
      description:
        "An intimate walk through the historic streets and most picturesque corners of the city. Visits: Plaza de Armas, the Stone of 12 Angles, Siete Borreguitos Street, and San Blas (viewpoint and traditional streets).",
      duration: "2.5 to 3 hours",
      difficulty: "Very Easy",
      maxAltitude: 3400,
      languages: "English and Spanish",
      category: "cusco-valle-sagrado",
      price: null,
    },
    prices: [{ type: "Private", price: 30, minPeople: 2 }],
    includes: ["Exclusive professional guide for the walking route"],
    excludes: ["Optional museum entrance fees, meals and tips"],
  },
  {
    tour: {
      title: "Sacred Valley VIP",
      slug: "sacred-valley-vip",
      description:
        "Discover the most important agricultural and textile centers of the Inca Empire in a single day. Visits: Chinchero (Awana textile center), Maras and Moray, Urubamba, Ollantaytambo and Pisac.",
      duration: "11 hours (7:00 AM – 6:00 PM)",
      difficulty: "Easy to Moderate",
      maxAltitude: 3762,
      languages: "English and Spanish",
      category: "cusco-valle-sagrado",
      price: null,
    },
    prices: [
      { type: "Group", price: 60 },
      { type: "Private", price: 100, minPeople: 2 },
    ],
    includes: [
      "Professional guide, shared tourist transport and buffet lunch in Urubamba (Group)",
      "Exclusive professional guide and private transport (Private)",
    ],
    excludes: [
      "Entrance tickets / Tourist Ticket and tips (Group)",
      "Entrance tickets / Tourist Ticket, meals (lunch) and tips (Private)",
    ],
  },
  {
    tour: {
      title: "Sacred Valley + Machu Picchu Connection",
      slug: "sacred-valley-machu-picchu-connection",
      description:
        "The ideal route to continue your journey toward Aguas Calientes while optimizing your time. Visits: Chinchero (Awana textile center), Maras, Moray, Urubamba and Ollantaytambo (does not include Pisac due to connection logistics).",
      duration: "8-9 hours",
      difficulty: "Easy to Moderate",
      maxAltitude: 3762,
      languages: "English and Spanish",
      category: "cusco-valle-sagrado",
      price: null,
    },
    prices: [
      { type: "Group", price: 50 },
      { type: "Private", price: 80, minPeople: 2 },
    ],
    includes: [
      "Professional guide, tourist transport to Ollantaytambo and buffet lunch in Urubamba (Group)",
      "Exclusive professional guide and private transport to Ollantaytambo (Private)",
    ],
    excludes: [
      "Train ticket to Aguas Calientes, entrance tickets / Tourist Ticket and tips (Group)",
      "Entrance tickets / Tourist Ticket and tips (Private)",
    ],
  },
  {
    tour: {
      title: "Maras, Moray and Chinchero",
      slug: "maras-moray-chinchero",
      description:
        "A fascinating tour of the circular agricultural terraces and the iconic salt mines. Visits: Moray archaeological site, the Maras Salt Mines and the traditional town of Chinchero.",
      duration: "4-5 hours",
      difficulty: "Easy",
      maxAltitude: 3762,
      languages: "English and Spanish",
      category: "cusco-valle-sagrado",
      price: null,
    },
    prices: [
      { type: "Group", price: 30 },
      { type: "Private", price: 80, minPeople: 2 },
    ],
    includes: ["Professional guide and shared/private transport"],
    excludes: [
      "Entrance tickets / Tourist Ticket, entry to the Maras Salt Mines, meals and tips",
    ],
  },
  {
    tour: {
      title: "Huilloc Community Experience",
      slug: "huilloc-community-experience",
      description:
        "A unique experience sharing the customs and ancestral textile art of an authentic Andean community. Visit: Huilloc Community (Sacred Valley).",
      duration: "Full day (approx. 8 hours)",
      difficulty: "Easy",
      languages: "English and Spanish",
      category: "cusco-valle-sagrado",
      price: null,
    },
    prices: [{ type: "Private", price: 100, minPeople: 2 }],
    includes: [
      "Exclusive professional guide, private transport, local meal and cultural experience with the community",
    ],
    excludes: ["Personal expenses and tips"],
  },
  {
    tour: {
      title: "Zipline Adventure",
      slug: "zipline-adventure",
      description:
        "Feel the adrenaline flying over the beautiful landscapes of the Sacred Valley.",
      duration: "3-4 hours",
      difficulty: "Moderate",
      languages: "English and Spanish",
      category: "cusco-valle-sagrado",
      price: null,
    },
    prices: [{ type: "Private", price: 80, minPeople: 2 }],
    includes: [
      "Private transport, full safety equipment and specialized instructor guide",
    ],
    excludes: ["Personal expenses and tips"],
  },
];

// ---------------------------------------------------------------------------
// BLOCK 3: MACHU PICCHU ALTERNATIVES + HIGH-MOUNTAIN TREKKING
// (unique tours from the Master Catalog, not duplicated with Block 2)
// ---------------------------------------------------------------------------

const trekkingAndAlternativeTours: TourSeed[] = [
  {
    tour: {
      title: "Machu Picchu Classic Full Day (by Train)",
      slug: "machu-picchu-classic-full-day",
      description:
        "A full-day trip to Machu Picchu by scenic train, with a choice of Expedition/Voyager or Vistadome 360° train service.",
      duration: "16 to 17 hours (4:00 AM – 9:00 PM approx.)",
      difficulty: "Easy",
      maxAltitude: 2430,
      languages: "English and Spanish",
      category: "treks-alternativos",
      price: null,
    },
    itinerary: [
      {
        day: 1,
        title: "Full Day Machu Picchu by Train",
        description:
          "Early hotel pickup in Cusco for transfer to Ollantaytambo station. Scenic train ride to Aguas Calientes, Consettur bus up to the citadel for a 2 to 2.5-hour guided tour of the official circuits, bus back down, free time for lunch, and return train to Ollantaytambo with final transfer to Cusco.",
      },
    ],
    includes: [
      "Ground transfers Cusco - Station - Cusco",
      "Round-trip tourist train tickets (Expedition/Voyager or Vistadome 360, per category chosen)",
      "Official Machu Picchu entrance ticket",
      "Consettur buses up and down",
      "Certified bilingual professional guide",
    ],
    excludes: ["Meals (lunch/dinner)", "Tips", "Travel insurance"],
  },
  {
    tour: {
      title: "Sacred Valley VIP + Machu Picchu Connection (2D/1N)",
      slug: "sacred-valley-machu-picchu-2d1n",
      description:
        "A two-day combination of the Sacred Valley VIP tour with an overnight in Aguas Calientes and a full Machu Picchu visit.",
      duration: "2 Days / 1 Night",
      difficulty: "Easy to Moderate",
      maxAltitude: 3762,
      languages: "English and Spanish",
      category: "treks-alternativos",
      price: null,
    },
    itinerary: [
      {
        day: 1,
        title: "Sacred Valley VIP and Arrival in Aguas Calientes",
        description:
          "Departure from Cusco to Chinchero (culture and traditional weaving), then Moray and the Maras salt mines. Buffet lunch in Urubamba, afternoon visit to the Ollantaytambo fortress, then directly to the station for the tourist train to Aguas Calientes. Hotel overnight in town.",
      },
      {
        day: 2,
        title: "Sunrise at Machu Picchu",
        description:
          "Breakfast and an early bus up to the citadel for a 2-hour guided tour. Free time in Aguas Calientes for lunch, then return tourist train to Ollantaytambo where transport brings you back to your hotel in Cusco.",
      },
    ],
    includes: [
      "Full Sacred Valley VIP tour with buffet lunch",
      "Round-trip tourist train tickets",
      "1 night hotel in Aguas Calientes (with breakfast)",
      "Machu Picchu entrance",
      "Consettur buses",
      "Bilingual guides both days and final transfer to Cusco",
    ],
    excludes: [
      "Entrance tickets (Tourist Ticket and Maras)",
      "Day 2 lunch/dinner",
    ],
  },
  {
    tour: {
      title: "Machu Picchu via Hidroeléctrica (2D/1N Adventure)",
      slug: "machu-picchu-hidroelectrica-2d1n",
      description:
        "An adventure route to Machu Picchu combining a scenic drive over the Málaga Pass with a flat hike alongside the train tracks.",
      duration: "2 Days / 1 Night",
      difficulty: "Moderate (requires a flat 3-hour hike)",
      maxAltitude: 4316,
      languages: "English and Spanish",
      category: "treks-alternativos",
      price: null,
    },
    itinerary: [
      {
        day: 1,
        title: "Amazon Route and Hike",
        description:
          "Bus ride from Cusco over the Málaga Pass into the cloud forest to Hidroeléctrica (lunch). Flat 3-hour, 10 km hike alongside the train tracks through tropical vegetation to Aguas Calientes. Hotel overnight and group dinner.",
        distance: "10 km",
        hikingTime: "3 hours",
        accommodation: "Hotel in Aguas Calientes",
      },
      {
        day: 2,
        title: "Machu Picchu and Return by Bus",
        description:
          "2-hour guided tour of the Machu Picchu citadel. Return hike from Aguas Calientes to Hidroeléctrica (3 hours). Direct bus back to Cusco at 2:45 PM, arriving at night.",
        hikingTime: "3 hours",
      },
    ],
    includes: [
      "Shared transport Cusco - Hidroeléctrica - Cusco",
      "1 night lodging",
      "1 breakfast, 1 lunch, 1 dinner",
      "Official Machu Picchu entrance",
      "Professional bilingual guide",
    ],
    excludes: [
      "Train tickets (route is done on foot)",
      "Day 2 Consettur buses",
      "Unspecified meals",
    ],
  },
  {
    tour: {
      title: "Humantay Lagoon Full Day",
      slug: "humantay-lagoon-full-day",
      description:
        "A day trip to the turquoise Humantay Lagoon at the foot of the Salkantay glacier.",
      duration: "12 to 13 hours",
      difficulty: "Moderate to Challenging",
      maxAltitude: 4200,
      languages: "English and Spanish",
      category: "treks-alternativos",
      price: null,
    },
    itinerary: [
      {
        day: 1,
        title: "Humantay Lagoon Trek",
        description:
          "Cusco → Mollepata (breakfast) → Soraypampa. A 1.5 to 2-hour ascending hike to the beautiful turquoise Humantay Lagoon. Buffet lunch in Soraypampa and return to Cusco.",
        hikingTime: "1.5-2 hours",
      },
    ],
    includes: [
      "Transport, breakfast and buffet lunch",
      "Bilingual guide",
      "Basic trekking pole",
      "First-aid kit with oxygen",
    ],
    excludes: ["Community entrance fee", "Horse rental"],
  },
  {
    tour: {
      title: "Rainbow Mountain (Vinicunca) Full Day",
      slug: "rainbow-mountain-vinicunca-full-day",
      description:
        "A challenging day hike to the summit of Vinicunca, the famous Rainbow Mountain, with views of Ausangate.",
      duration: "12 hours",
      difficulty: "Challenging",
      maxAltitude: 5036,
      languages: "English and Spanish",
      category: "treks-alternativos",
      price: null,
    },
    itinerary: [
      {
        day: 1,
        title: "Rainbow Mountain Trek",
        description:
          "Cusco → Cusipata (breakfast) → Phulawasipata. A 1.5 to 2-hour trek to the summit of Vinicunca with views of Ausangate. Hearty lunch and return.",
        hikingTime: "1.5-2 hours",
      },
    ],
    includes: [
      "Transport, breakfast and lunch",
      "Bilingual guide",
      "First aid with oxygen",
    ],
  },
  {
    tour: {
      title: "Rainbow Mountain + Red Valley by ATV",
      slug: "rainbow-mountain-red-valley-atv",
      description:
        "An ATV adventure through high-Andean landscapes combined with a short hike to Vinicunca's summit and the Red Valley viewpoint.",
      duration: "11 hours",
      difficulty: "Moderate",
      maxAltitude: 5036,
      languages: "English and Spanish",
      category: "treks-alternativos",
      price: null,
    },
    itinerary: [
      {
        day: 1,
        title: "ATV and Rainbow Mountain",
        description:
          "Transfer to base, safety briefing and ATV ride through high-Andean landscapes. Short 25-minute hike to the summit of Vinicunca and extension on foot to the Red Valley viewpoint. Return by ATV, lunch and drive back to Cusco.",
        hikingTime: "25 minutes",
      },
    ],
    includes: [
      "Equipped ATV",
      "Helmet and protection",
      "Guide-instructor",
      "Breakfast and lunch",
      "First aid",
    ],
  },
  {
    tour: {
      title: "Ausangate 7 Lagoons Full Day Trek",
      slug: "ausangate-7-lagoons-full-day",
      description:
        "A pure trekking day visiting the seven glacial lagoons of Ausangate, finishing with a soak in local hot springs.",
      duration: "13 hours",
      difficulty: "Moderate to Challenging",
      maxAltitude: 4600,
      languages: "English and Spanish",
      category: "treks-alternativos",
      price: null,
    },
    itinerary: [
      {
        day: 1,
        title: "Ausangate 7 Lagoons Trek",
        description:
          "Drive to Pacchanta (Andean breakfast). A 4 to 5-hour trek visiting the 7 glacial lagoons of Ausangate. On return, rest in the local medicinal hot springs. Local lunch and drive back to Cusco.",
        hikingTime: "4-5 hours",
      },
    ],
    includes: ["Transport, breakfast, lunch", "Bilingual guide", "First aid"],
  },
  {
    tour: {
      title: "Quelccaya Glacier Expedition Full Day",
      slug: "quelccaya-glacier-expedition",
      description:
        "An extreme full-day expedition to the front of Quelccaya, the world's largest tropical glacier.",
      duration: "15 hours",
      difficulty: "Very Challenging",
      maxAltitude: 5100,
      languages: "English and Spanish",
      category: "treks-alternativos",
      price: null,
    },
    itinerary: [
      {
        day: 1,
        title: "Quelccaya Glacier Expedition",
        description:
          "3:00 AM departure in 4x4 vehicles to Phinaya. A demanding hike over moraine to the front of the colossal Quelccaya Glacier, exploring blue ice walls and caves. Hot lunch and return to Cusco.",
      },
    ],
    includes: [
      "4x4 transport",
      "Certified mountain guide",
      "High-calorie meals",
      "Approach poles/crampons",
      "High-capacity oxygen",
    ],
  },
];

async function main() {
  const allTours = [
    ...incaTrailTours,
    ...cuscoValleyTours,
    ...trekkingAndAlternativeTours,
  ];

  for (const data of allTours) {
    await upsertFullTour(data);
    console.log(`Seeded: ${data.tour.title}`);
  }

  console.log(`\n${allTours.length} tours seeded successfully!`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
