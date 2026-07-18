import { Language } from "./translations";

// =========================================================
// homeContent — Urpi Wayra Tours
//
// Todo el contenido de texto de la página de inicio (Home),
// traducido a los 4 idiomas soportados. Los datos que NO son
// texto (href, imageSrc, rating, reviewCount, priceFrom,
// groupSize) se mantienen iguales entre idiomas y se definen
// una sola vez; solo el texto varía por idioma.
//
// Uso en page.tsx:
//   const { language } = useLanguage();
//   const content = homeContent[language];
//   <HeroImage title={content.hero.title} ... />
// =========================================================

export interface TourCardContent {
  title: string;
  difficulty?: string;
  imageAlt: string;
}

export interface CategoryContent {
  title: string;
  description: string;
  imageAlt: string;
}

export interface ReasonContent {
  title: string;
  description: string;
}

export interface FaqItemContent {
  pregunta: string;
  respuesta: string;
}

export interface HomeContent {
  hero: {
    title: string;
    subtitle: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    ctaLabel: string;
  };
  incaTrailCarousel: {
    eyebrow: string;
    title: string;
    tours: TourCardContent[];
  };
  topToursCarousel: {
    eyebrow: string;
    title: string;
    tours: TourCardContent[];
  };
  categories: {
    eyebrow: string;
    title: string;
    items: CategoryContent[];
  };
  whyChooseUs: {
    eyebrow: string;
    title: string;
    reasons: ReasonContent[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FaqItemContent[];
  };
}

export const homeContent: Record<Language, HomeContent> = {
  // =========================================================
  // ENGLISH
  // =========================================================
  en: {
    hero: {
      title: "Experience the Andes your way",
      subtitle: "Group and private tours from Cusco",
    },
    about: {
      eyebrow: "About us",
      title: "Urpi Wayra Tours: experience the Andes with local experts",
      paragraphs: [
        "Explore Cusco's most breathtaking routes with **certified local guides**. From the legendary Inca Trail to the challenging Salkantay Trek, we design every journey to give you a genuine connection with nature, history, and Andean communities.",
        "**Get ready for a journey that will push your limits and transform your spirit.**",
      ],
      ctaLabel: "Learn more about us",
    },
    incaTrailCarousel: {
      eyebrow: "Inca Trail",
      title: "Inca Trail Routes to Machu Picchu",
      tours: [
        {
          title: "Classic Inca Trail to Machu Picchu",
          difficulty: "Moderate to challenging",
          imageAlt: "Classic Inca Trail 4 days",
        },
        {
          title: "Inca Trail to Machu Picchu — Group Service",
          difficulty: "Moderate",
          imageAlt: "Short Inca Trail 2 days",
        },
        {
          title: "Salkantay Trek to Machu Picchu",
          difficulty: "Moderate to challenging",
          imageAlt: "Salkantay Trek 5 days",
        },
        {
          title: "Choquequirao Trek",
          difficulty: "Moderate to challenging",
          imageAlt: "Choquequirao 5 days",
        },
      ],
    },
    topToursCarousel: {
      eyebrow: "Fan favorites",
      title: "Top Recommended Tours",
      tours: [
        {
          title: "Machu Picchu Full Day",
          difficulty: "Easy",
          imageAlt: "Machu Picchu Full Day",
        },
        {
          title: "Rainbow Mountain + Red Valley",
          difficulty: "Moderate",
          imageAlt: "Rainbow Mountain",
        },
        {
          title: "Humantay Lagoon Full Day",
          difficulty: "Moderate",
          imageAlt: "Humantay Lagoon Full Day",
        },
        {
          title: "Sacred Valley of the Incas",
          difficulty: "Easy",
          imageAlt: "Sacred Valley of the Incas",
        },
      ],
    },
    categories: {
      eyebrow: "Types of experience",
      title: "Choose your type of trip",
      items: [
        {
          title: "Adventure",
          description:
            "Multi-day treks along the ancestral paths of the Andes.",
          imageAlt: "Adventure trekking in the Andes",
        },
        {
          title: "Cultural",
          description:
            "Living history among temples, markets, and traditional towns.",
          imageAlt: "Inca archaeological sites",
        },
        {
          title: "Gastronomy",
          description: "Ancestral flavors of Andean cuisine at every stop.",
          imageAlt: "Andean gastronomy",
        },
        {
          title: "Mystical",
          description:
            "Spiritual connection with Pachamama and the sacred Apus.",
          imageAlt: "Mystical Andean ceremony",
        },
        {
          title: "Experiential",
          description:
            "Live alongside Andean communities and their daily life.",
          imageAlt: "Experiential tourism in an Andean community",
        },
      ],
    },
    whyChooseUs: {
      eyebrow: "Our commitment",
      title: "Why travel with Urpi Wayra Tours?",
      reasons: [
        {
          title: "Expert guides",
          description:
            "Chosen for their experience and reliability. They share their passion and knowledge along the way.",
        },
        {
          title: "Satisfied travelers",
          description:
            "Over 10 years of experience have allowed us to perfect every one of our tours.",
        },
        {
          title: "Supporting Andean communities",
          description:
            "We value our roots and strive to support the communities that make our tours possible.",
        },
        {
          title: "Environmental awareness",
          description:
            "We respect local cultures and promote their heritage and way of life.",
        },
        {
          title: "Personalized service",
          description:
            "Travel in a group or privately. For larger groups, we keep a strict maximum passenger cap.",
        },
        {
          title: "We take care of our porters",
          description:
            "Kind, cheerful people who will welcome you with open arms.",
        },
        {
          title: "Fantastic food",
          description:
            "Traditional, nourishing Andean cuisine: unique flavors, textures, and sensations.",
        },
        {
          title: "Camping equipment",
          description:
            "We oversee the quality of tents, sleeping bags, and supplies on every route.",
        },
      ],
    },
    faq: {
      eyebrow: "Help",
      title: "Frequently Asked Questions",
      subtitle: "The most common questions about Urpi Wayra Tours",
      items: [
        {
          pregunta: "Is it safe to travel to Cusco and Machu Picchu?",
          respuesta:
            "Yes. Cusco and Machu Picchu are well-established tourist destinations with solid safety infrastructure. As with any trip, we recommend taking the usual precautions and staying informed about your itinerary.",
        },
        {
          pregunta: "Do I need to book far in advance?",
          respuesta:
            "For the Inca Trail, yes — permits are limited and sell out months ahead, especially during high season (May to September). For other tours, a week's notice is usually enough.",
        },
        {
          pregunta: "What level of fitness do I need?",
          respuesta:
            "It depends on the tour. City tours and full-day visits are suitable for anyone. Multi-day treks (Salkantay, Choquequirao, Inca Trail) require good physical condition and prior acclimatization in Cusco.",
        },
        {
          pregunta: "Do the prices include the entrance to Machu Picchu?",
          respuesta:
            "Yes, every tour that includes a visit to Machu Picchu has the entrance ticket included. Additional tickets such as Huayna Picchu or Machu Picchu Mountain can be added as an extra service.",
        },
        {
          pregunta: "Can I customize my itinerary?",
          respuesta:
            "Yes, we offer a private service with flexible schedules and stops. Contact us to design an itinerary tailored to you.",
        },
      ],
    },
  },

  // =========================================================
  // ESPAÑOL
  // =========================================================
  es: {
    hero: {
      title: "Vive los Andes a tu manera",
      subtitle: "Tours grupales y privados desde Cusco",
    },
    about: {
      eyebrow: "Sobre nosotros",
      title: "Urpi Wayra Tours: vive los Andes con expertos locales",
      paragraphs: [
        "Explora las rutas más impresionantes del Cusco con **guías locales certificados**. Desde el legendario Camino Inca hasta el desafiante Salkantay Trek, diseñamos cada viaje para ofrecerte una conexión real con la naturaleza, la historia y las comunidades andinas.",
        "**Prepárate para una travesía que desafiará tus límites y transformará tu espíritu.**",
      ],
      ctaLabel: "Conoce más sobre nosotros",
    },
    incaTrailCarousel: {
      eyebrow: "Camino Inca",
      title: "Rutas Camino Inca a Machu Picchu",
      tours: [
        {
          title: "Camino Inca Clásico a Machu Picchu",
          difficulty: "Moderado a exigente",
          imageAlt: "Camino Inca Clásico 4 días",
        },
        {
          title: "Camino Inca a Machu Picchu — Servicio Grupal",
          difficulty: "Moderado",
          imageAlt: "Camino Inca corto 2 días",
        },
        {
          title: "Caminata de Salkantay a Machu Picchu",
          difficulty: "Moderado a exigente",
          imageAlt: "Salkantay Trek 5 días",
        },
        {
          title: "Caminata a Choquequirao",
          difficulty: "Moderado a exigente",
          imageAlt: "Choquequirao 5 días",
        },
      ],
    },
    topToursCarousel: {
      eyebrow: "Los favoritos",
      title: "Top Tours Recomendados",
      tours: [
        {
          title: "Machupicchu Full Day",
          difficulty: "Fácil",
          imageAlt: "Machupicchu Full Day",
        },
        {
          title: "Montaña de 7 Colores + Valle Rojo",
          difficulty: "Moderado",
          imageAlt: "Montaña de 7 Colores",
        },
        {
          title: "Laguna Humantay Full Day",
          difficulty: "Moderado",
          imageAlt: "Laguna Humantay Full Day",
        },
        {
          title: "Valle Sagrado de los Incas",
          difficulty: "Fácil",
          imageAlt: "Valle Sagrado de los Incas",
        },
      ],
    },
    categories: {
      eyebrow: "Tipos de experiencia",
      title: "Elige tu tipo de viaje",
      items: [
        {
          title: "Aventura",
          description:
            "Treks de varios días por los caminos ancestrales de los Andes.",
          imageAlt: "Trekking de aventura en los Andes",
        },
        {
          title: "Cultural",
          description:
            "Historia viva entre templos, mercados y pueblos tradicionales.",
          imageAlt: "Sitios arqueológicos incas",
        },
        {
          title: "Gastronomía",
          description:
            "Sabores ancestrales de la cocina andina en cada parada.",
          imageAlt: "Gastronomía andina",
        },
        {
          title: "Místico",
          description:
            "Conexión espiritual con la Pachamama y los Apus sagrados.",
          imageAlt: "Ceremonia andina mística",
        },
        {
          title: "Vivencial",
          description: "Convive con comunidades andinas y su vida cotidiana.",
          imageAlt: "Turismo vivencial en comunidad andina",
        },
      ],
    },
    whyChooseUs: {
      eyebrow: "Nuestro compromiso",
      title: "¿Por qué viajar con Urpi Wayra Tours?",
      reasons: [
        {
          title: "Guías expertos",
          description:
            "Elegidos por su experiencia y responsabilidad. Comparten su entusiasmo y conocimientos.",
        },
        {
          title: "Clientes satisfechos",
          description:
            "Más de 10 años de experiencia nos han permitido perfeccionar cada uno de nuestros tours.",
        },
        {
          title: "Apoyo a comunidades andinas",
          description:
            "Valoramos nuestros orígenes y buscamos apoyar a las comunidades que nos respaldan.",
        },
        {
          title: "Sensibilidad ambiental",
          description:
            "Respetamos las culturas locales y promovemos su patrimonio y estilo de vida.",
        },
        {
          title: "Servicio personalizado",
          description:
            "Viaja en grupo o privado. En grupos grandes, mantenemos un tope máximo de pasajeros.",
        },
        {
          title: "Cuidamos a nuestros porteadores",
          description:
            "Personas amables y alegres que te recibirán con los brazos abiertos.",
        },
        {
          title: "Comida fantástica",
          description:
            "Comida andina tradicional y nutritiva: sabores, texturas y sensaciones únicas.",
        },
        {
          title: "Equipo de camping",
          description:
            "Supervisamos la calidad de carpas, sacos de dormir y suministros en cada ruta.",
        },
      ],
    },
    faq: {
      eyebrow: "Ayuda",
      title: "Preguntas Frecuentes",
      subtitle: "Las preguntas más frecuentes en Urpi Wayra Tours",
      items: [
        {
          pregunta: "¿Es seguro viajar a Cusco y Machu Picchu?",
          respuesta:
            "Sí. Cusco y Machu Picchu son destinos turísticos consolidados con buena infraestructura de seguridad. Como en cualquier viaje, recomendamos las precauciones habituales y mantenerte informado sobre tu itinerario.",
        },
        {
          pregunta: "¿Necesito reservar con mucha anticipación?",
          respuesta:
            "Para el Camino Inca sí, ya que los permisos son limitados y se agotan con meses de anticipación, especialmente en temporada alta (mayo a setiembre). Para otros tours, una semana suele ser suficiente.",
        },
        {
          pregunta: "¿Qué nivel de condición física necesito?",
          respuesta:
            "Depende del tour. Los city tours y visitas de día completo son aptos para cualquier persona. Los treks de varios días (Salkantay, Choquequirao, Camino Inca) requieren buena condición física y aclimatación previa en Cusco.",
        },
        {
          pregunta: "¿Los precios incluyen la entrada a Machu Picchu?",
          respuesta:
            "Sí, en todos los tours que incluyen visita a Machu Picchu el boleto de ingreso está incluido. Boletos adicionales como Huayna Picchu o Montaña Machu Picchu se pueden agregar como servicio extra.",
        },
        {
          pregunta: "¿Puedo personalizar mi itinerario?",
          respuesta:
            "Sí, ofrecemos servicio privado con horarios y paradas flexibles. Contáctanos para diseñar un itinerario a tu medida.",
        },
      ],
    },
  },

  // =========================================================
  // FRANÇAIS
  // =========================================================
  fr: {
    hero: {
      title: "Vivez les Andes à votre façon",
      subtitle: "Circuits en groupe et privés au départ de Cusco",
    },
    about: {
      eyebrow: "À propos de nous",
      title: "Urpi Wayra Tours : vivez les Andes avec des experts locaux",
      paragraphs: [
        "Explorez les itinéraires les plus impressionnants de Cusco avec des **guides locaux certifiés**. Du légendaire Chemin de l'Inca au difficile trek de Salkantay, nous concevons chaque voyage pour vous offrir une connexion authentique avec la nature, l'histoire et les communautés andines.",
        "**Préparez-vous à un voyage qui repoussera vos limites et transformera votre esprit.**",
      ],
      ctaLabel: "En savoir plus sur nous",
    },
    incaTrailCarousel: {
      eyebrow: "Chemin de l'Inca",
      title: "Itinéraires du Chemin de l'Inca vers le Machu Picchu",
      tours: [
        {
          title: "Chemin de l'Inca Classique vers le Machu Picchu",
          difficulty: "Modéré à difficile",
          imageAlt: "Chemin de l'Inca Classique 4 jours",
        },
        {
          title: "Chemin de l'Inca vers le Machu Picchu — Service en groupe",
          difficulty: "Modéré",
          imageAlt: "Chemin de l'Inca court 2 jours",
        },
        {
          title: "Trek de Salkantay vers le Machu Picchu",
          difficulty: "Modéré à difficile",
          imageAlt: "Trek de Salkantay 5 jours",
        },
        {
          title: "Trek de Choquequirao",
          difficulty: "Modéré à difficile",
          imageAlt: "Choquequirao 5 jours",
        },
      ],
    },
    topToursCarousel: {
      eyebrow: "Les préférés",
      title: "Meilleurs Circuits Recommandés",
      tours: [
        {
          title: "Machu Picchu Journée Complète",
          difficulty: "Facile",
          imageAlt: "Machu Picchu Journée Complète",
        },
        {
          title: "Montagne aux 7 Couleurs + Vallée Rouge",
          difficulty: "Modéré",
          imageAlt: "Montagne aux 7 Couleurs",
        },
        {
          title: "Lagune Humantay Journée Complète",
          difficulty: "Modéré",
          imageAlt: "Lagune Humantay Journée Complète",
        },
        {
          title: "Vallée Sacrée des Incas",
          difficulty: "Facile",
          imageAlt: "Vallée Sacrée des Incas",
        },
      ],
    },
    categories: {
      eyebrow: "Types d'expérience",
      title: "Choisissez votre type de voyage",
      items: [
        {
          title: "Aventure",
          description:
            "Treks de plusieurs jours sur les chemins ancestraux des Andes.",
          imageAlt: "Trekking d'aventure dans les Andes",
        },
        {
          title: "Culturel",
          description:
            "Histoire vivante entre temples, marchés et villages traditionnels.",
          imageAlt: "Sites archéologiques incas",
        },
        {
          title: "Gastronomie",
          description:
            "Saveurs ancestrales de la cuisine andine à chaque étape.",
          imageAlt: "Gastronomie andine",
        },
        {
          title: "Mystique",
          description:
            "Connexion spirituelle avec la Pachamama et les Apus sacrés.",
          imageAlt: "Cérémonie andine mystique",
        },
        {
          title: "Immersif",
          description: "Partagez le quotidien des communautés andines.",
          imageAlt: "Tourisme immersif dans une communauté andine",
        },
      ],
    },
    whyChooseUs: {
      eyebrow: "Notre engagement",
      title: "Pourquoi voyager avec Urpi Wayra Tours ?",
      reasons: [
        {
          title: "Guides experts",
          description:
            "Choisis pour leur expérience et leur sérieux. Ils partagent leur passion et leurs connaissances tout au long du parcours.",
        },
        {
          title: "Clients satisfaits",
          description:
            "Plus de 10 ans d'expérience nous ont permis de perfectionner chacun de nos circuits.",
        },
        {
          title: "Soutien aux communautés andines",
          description:
            "Nous valorisons nos origines et cherchons à soutenir les communautés qui nous accompagnent.",
        },
        {
          title: "Sensibilité environnementale",
          description:
            "Nous respectons les cultures locales et valorisons leur patrimoine et leur mode de vie.",
        },
        {
          title: "Service personnalisé",
          description:
            "Voyagez en groupe ou en privé. Pour les grands groupes, nous maintenons un nombre maximal de participants.",
        },
        {
          title: "Nous prenons soin de nos porteurs",
          description:
            "Des personnes chaleureuses et joyeuses qui vous accueilleront à bras ouverts.",
        },
        {
          title: "Une cuisine fantastique",
          description:
            "Cuisine andine traditionnelle et nourrissante : saveurs, textures et sensations uniques.",
        },
        {
          title: "Équipement de camping",
          description:
            "Nous contrôlons la qualité des tentes, sacs de couchage et équipements sur chaque itinéraire.",
        },
      ],
    },
    faq: {
      eyebrow: "Aide",
      title: "Questions Fréquentes",
      subtitle: "Les questions les plus fréquentes chez Urpi Wayra Tours",
      items: [
        {
          pregunta: "Est-il sûr de voyager à Cusco et au Machu Picchu ?",
          respuesta:
            "Oui. Cusco et le Machu Picchu sont des destinations touristiques bien établies avec une bonne infrastructure de sécurité. Comme pour tout voyage, nous recommandons les précautions habituelles et de rester informé de votre itinéraire.",
        },
        {
          pregunta: "Dois-je réserver longtemps à l'avance ?",
          respuesta:
            "Pour le Chemin de l'Inca, oui, car les permis sont limités et s'épuisent des mois à l'avance, surtout en haute saison (mai à septembre). Pour les autres circuits, une semaine suffit généralement.",
        },
        {
          pregunta: "Quel niveau de forme physique est nécessaire ?",
          respuesta:
            "Cela dépend du circuit. Les visites de la ville et les excursions d'une journée conviennent à tous. Les treks de plusieurs jours (Salkantay, Choquequirao, Chemin de l'Inca) nécessitent une bonne condition physique et une acclimatation préalable à Cusco.",
        },
        {
          pregunta: "Les prix incluent-ils l'entrée au Machu Picchu ?",
          respuesta:
            "Oui, pour tous les circuits incluant une visite du Machu Picchu, le billet d'entrée est inclus. Des billets supplémentaires comme Huayna Picchu ou la Montagne Machu Picchu peuvent être ajoutés en option.",
        },
        {
          pregunta: "Puis-je personnaliser mon itinéraire ?",
          respuesta:
            "Oui, nous proposons un service privé avec horaires et arrêts flexibles. Contactez-nous pour concevoir un itinéraire sur mesure.",
        },
      ],
    },
  },

  // =========================================================
  // DEUTSCH
  // =========================================================
  de: {
    hero: {
      title: "Erleben Sie die Anden auf Ihre Weise",
      subtitle: "Gruppen- und Privattouren ab Cusco",
    },
    about: {
      eyebrow: "Über uns",
      title: "Urpi Wayra Tours: die Anden mit lokalen Experten erleben",
      paragraphs: [
        "Entdecken Sie die beeindruckendsten Routen von Cusco mit **zertifizierten lokalen Guides**. Vom legendären Inka-Pfad bis zum anspruchsvollen Salkantay-Trek gestalten wir jede Reise so, dass Sie eine echte Verbindung zur Natur, Geschichte und den andinen Gemeinschaften erleben.",
        "**Bereiten Sie sich auf eine Reise vor, die Ihre Grenzen herausfordert und Ihren Geist verändert.**",
      ],
      ctaLabel: "Mehr über uns erfahren",
    },
    incaTrailCarousel: {
      eyebrow: "Inka-Pfad",
      title: "Inka-Pfad-Routen zum Machu Picchu",
      tours: [
        {
          title: "Klassischer Inka-Pfad zum Machu Picchu",
          difficulty: "Moderat bis anspruchsvoll",
          imageAlt: "Klassischer Inka-Pfad 4 Tage",
        },
        {
          title: "Inka-Pfad zum Machu Picchu — Gruppenservice",
          difficulty: "Moderat",
          imageAlt: "Kurzer Inka-Pfad 2 Tage",
        },
        {
          title: "Salkantay-Trek zum Machu Picchu",
          difficulty: "Moderat bis anspruchsvoll",
          imageAlt: "Salkantay-Trek 5 Tage",
        },
        {
          title: "Choquequirao-Trek",
          difficulty: "Moderat bis anspruchsvoll",
          imageAlt: "Choquequirao 5 Tage",
        },
      ],
    },
    topToursCarousel: {
      eyebrow: "Die Favoriten",
      title: "Top empfohlene Touren",
      tours: [
        {
          title: "Machu Picchu Tagesausflug",
          difficulty: "Leicht",
          imageAlt: "Machu Picchu Tagesausflug",
        },
        {
          title: "Regenbogenberg + Rotes Tal",
          difficulty: "Moderat",
          imageAlt: "Regenbogenberg",
        },
        {
          title: "Humantay-Lagune Tagesausflug",
          difficulty: "Moderat",
          imageAlt: "Humantay-Lagune Tagesausflug",
        },
        {
          title: "Heiliges Tal der Inka",
          difficulty: "Leicht",
          imageAlt: "Heiliges Tal der Inka",
        },
      ],
    },
    categories: {
      eyebrow: "Erlebnisarten",
      title: "Wählen Sie Ihre Art der Reise",
      items: [
        {
          title: "Abenteuer",
          description: "Mehrtägige Treks auf den uralten Pfaden der Anden.",
          imageAlt: "Abenteuertrekking in den Anden",
        },
        {
          title: "Kultur",
          description:
            "Lebendige Geschichte zwischen Tempeln, Märkten und traditionellen Dörfern.",
          imageAlt: "Archäologische Stätten der Inka",
        },
        {
          title: "Gastronomie",
          description: "Uralte Aromen der andinen Küche bei jedem Halt.",
          imageAlt: "Andine Gastronomie",
        },
        {
          title: "Mystisch",
          description:
            "Spirituelle Verbindung mit Pachamama und den heiligen Apus.",
          imageAlt: "Mystische andine Zeremonie",
        },
        {
          title: "Erlebnisreise",
          description: "Leben Sie mit andinen Gemeinschaften und ihrem Alltag.",
          imageAlt: "Erlebnistourismus in einer andinen Gemeinschaft",
        },
      ],
    },
    whyChooseUs: {
      eyebrow: "Unser Versprechen",
      title: "Warum mit Urpi Wayra Tours reisen?",
      reasons: [
        {
          title: "Erfahrene Guides",
          description:
            "Ausgewählt für ihre Erfahrung und Zuverlässigkeit. Sie teilen ihre Begeisterung und ihr Wissen unterwegs.",
        },
        {
          title: "Zufriedene Reisende",
          description:
            "Über 10 Jahre Erfahrung haben es uns ermöglicht, jede unserer Touren zu perfektionieren.",
        },
        {
          title: "Unterstützung andiner Gemeinschaften",
          description:
            "Wir schätzen unsere Wurzeln und unterstützen die Gemeinschaften, die uns tragen.",
        },
        {
          title: "Umweltbewusstsein",
          description:
            "Wir respektieren lokale Kulturen und fördern ihr Erbe und ihre Lebensweise.",
        },
        {
          title: "Persönlicher Service",
          description:
            "Reisen Sie in der Gruppe oder privat. Bei größeren Gruppen halten wir eine feste Teilnehmerobergrenze ein.",
        },
        {
          title: "Wir kümmern uns um unsere Träger",
          description:
            "Freundliche, fröhliche Menschen, die Sie mit offenen Armen empfangen.",
        },
        {
          title: "Fantastisches Essen",
          description:
            "Traditionelle, nahrhafte andine Küche: einzigartige Aromen, Texturen und Erlebnisse.",
        },
        {
          title: "Campingausrüstung",
          description:
            "Wir überwachen die Qualität von Zelten, Schlafsäcken und Ausrüstung auf jeder Route.",
        },
      ],
    },
    faq: {
      eyebrow: "Hilfe",
      title: "Häufig gestellte Fragen",
      subtitle: "Die häufigsten Fragen zu Urpi Wayra Tours",
      items: [
        {
          pregunta: "Ist es sicher, nach Cusco und Machu Picchu zu reisen?",
          respuesta:
            "Ja. Cusco und Machu Picchu sind etablierte Reiseziele mit guter Sicherheitsinfrastruktur. Wie bei jeder Reise empfehlen wir die üblichen Vorsichtsmaßnahmen und sich über den Reiseverlauf informiert zu halten.",
        },
        {
          pregunta: "Muss ich lange im Voraus buchen?",
          respuesta:
            "Für den Inka-Pfad ja, da die Genehmigungen begrenzt sind und Monate im Voraus ausgebucht sind, besonders in der Hochsaison (Mai bis September). Für andere Touren reicht meist eine Woche.",
        },
        {
          pregunta: "Welches Fitnessniveau benötige ich?",
          respuesta:
            "Das hängt von der Tour ab. Stadtrundfahrten und Tagesausflüge eignen sich für jeden. Mehrtägige Treks (Salkantay, Choquequirao, Inka-Pfad) erfordern eine gute körperliche Verfassung und vorherige Akklimatisierung in Cusco.",
        },
        {
          pregunta: "Ist der Eintritt zum Machu Picchu im Preis enthalten?",
          respuesta:
            "Ja, bei allen Touren mit Besuch des Machu Picchu ist das Eintrittsticket enthalten. Zusatztickets wie Huayna Picchu oder Machu Picchu Mountain können als Zusatzleistung hinzugebucht werden.",
        },
        {
          pregunta: "Kann ich meine Reiseroute individuell gestalten?",
          respuesta:
            "Ja, wir bieten einen privaten Service mit flexiblen Zeiten und Stopps an. Kontaktieren Sie uns, um eine maßgeschneiderte Route zu gestalten.",
        },
      ],
    },
  },
};
