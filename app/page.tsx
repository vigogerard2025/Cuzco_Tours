"use client";

import Nav from "./components/Nav";
import HeroImage from "./components/HeroImage";
import AboutIntro from "./components/AboutIntro";
import TourCardCarousel from "./components/TourCardCarousel";
import CategoryShowcase from "./components/CategoryShowcase";
import WhyChooseUs from "./components/WhyChooseUs ";
import FaqAccordion from "./components/FaqAccordion";

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* --- 1. Hero --- */}
        <HeroImage
          title="Vive los Andes a tu manera"
          subtitle="Tours grupales y privados desde Cusco"
          images={[
            {
              src: "./choque-quirao/imagen.jpg",
              alt: "Montaña de 7 Colores",
            },
            {
              src: "/images/hero/02-machupicchu.jpg",
              alt: "Machu Picchu al amanecer",
            },
            {
              src: "/images/hero/03-valle-sagrado.jpg",
              alt: "Valle Sagrado de los Incas",
            },
            { src: "/images/hero/04-humantay.jpg", alt: "Laguna Humantay" },
          ]}
        />

        {/* --- 2. Quiénes somos --- */}
        <AboutIntro
          eyebrow="Sobre nosotros"
          title="Urpi Wayra Tours: vive los Andes con expertos locales"
          paragraphs={[
            "Explora las rutas más impresionantes del Cusco con **guías locales certificados**. Desde el legendario Camino Inca hasta el desafiante Salkantay Trek, diseñamos cada viaje para ofrecerte una conexión real con la naturaleza, la historia y las comunidades andinas.",
            "**Prepárate para una travesía que desafiará tus límites y transformará tu espíritu.**",
          ]}
          ctaLabel="Conoce más sobre nosotros"
          ctaHref="/nosotros"
          imageSrc="/images/about/equipo-urpi-wayra.jpg"
          imageAlt="Equipo de guías de Urpi Wayra Tours"
          imagePosition="right"
        />

        {/* --- 3. Carrusel: Camino Inca y treks principales --- */}
        <TourCardCarousel
          eyebrow="Camino Inca"
          title="Rutas Camino Inca a Machu Picchu"
          verTodosHref="/tours?categoria=CAMINO_INCA"
          tours={[
            {
              href: "/tours/camino-inca-clasico-4-dias-privado",
              imageSrc:
                "/images/tours/camino-inca-clasico-4-dias/01-portada.jpg",
              imageAlt: "Camino Inca Clásico 4 días",
              badge: "04D / 03N",
              title: "Camino Inca Clásico a Machu Picchu",
              difficulty: "Moderado a exigente",
              groupSize: "2-8",
              rating: 5,
              reviewCount: 51,
              priceFrom: 1250,
            },
            {
              href: "/tours/camino-inca-2-dias-grupal",
              imageSrc: "/images/tours/camino-inca-2-dias/01-portada.jpg",
              imageAlt: "Camino Inca corto 2 días",
              badge: "02D / 01N",
              title: "Camino Inca a Machu Picchu — Servicio Grupal",
              difficulty: "Moderado",
              groupSize: "2-12",
              rating: 5,
              reviewCount: 28,
              priceFrom: 720,
            },
            {
              href: "/tours/salkantay-trek-5-dias-privado",
              imageSrc: "/images/tours/salkantay-trek-5-dias/01-portada.jpg",
              imageAlt: "Salkantay Trek 5 días",
              badge: "05D / 04N",
              title: "Caminata de Salkantay a Machu Picchu",
              difficulty: "Moderado a exigente",
              groupSize: "2-8",
              rating: 5,
              reviewCount: 33,
              priceFrom: 1100,
            },
            {
              href: "/tours/choquequirao-trek-5-dias-privado",
              imageSrc: "/images/tours/choquequirao-trek-5-dias/01-portada.jpg",
              imageAlt: "Choquequirao 5 días",
              badge: "05D / 04N",
              title: "Caminata a Choquequirao",
              difficulty: "Moderado a exigente",
              groupSize: "2-8",
              rating: 5,
              reviewCount: 22,
              priceFrom: 980,
            },
          ]}
        />

        {/* --- 4. Top tours recomendados (día único) --- */}
        <TourCardCarousel
          eyebrow="Los favoritos"
          title="Top Tours Recomendados"
          verTodosHref="/tours"
          tours={[
            {
              href: "/tours/machupicchu-full-day-grupal",
              imageSrc: "/images/tours/machupicchu-full-day/01-portada.jpg",
              imageAlt: "Machupicchu Full Day",
              badge: "Full Day",
              title: "Machupicchu Full Day",
              difficulty: "Fácil",
              groupSize: "1-15",
              rating: 5,
              reviewCount: 48,
              priceFrom: 320,
            },
            {
              href: "/tours/montana-7-colores-grupal",
              imageSrc: "/images/tours/montana-7-colores/01-portada.jpg",
              imageAlt: "Montaña de 7 Colores",
              badge: "Full Day",
              title: "Montaña de 7 Colores + Valle Rojo",
              difficulty: "Moderado",
              groupSize: "1-15",
              rating: 5,
              reviewCount: 60,
              priceFrom: 85,
            },
            {
              href: "/tours/laguna-humantay-dia-grupal",
              imageSrc: "/images/tours/laguna-humantay-dia/01-portada.jpg",
              imageAlt: "Laguna Humantay Full Day",
              badge: "Full Day",
              title: "Laguna Humantay Full Day",
              difficulty: "Moderado",
              groupSize: "1-15",
              rating: 5,
              reviewCount: 38,
              priceFrom: 80,
            },
            {
              href: "/tours/valle-sagrado-grupal",
              imageSrc: "/images/tours/valle-sagrado/01-portada.jpg",
              imageAlt: "Valle Sagrado de los Incas",
              badge: "Full Day",
              title: "Valle Sagrado de los Incas",
              difficulty: "Fácil",
              groupSize: "1-15",
              rating: 5,
              reviewCount: 52,
              priceFrom: 60,
            },
          ]}
        />

        {/* --- 5. Categorías de experiencia --- */}
        <CategoryShowcase
          eyebrow="Tipos de experiencia"
          title="Elige tu tipo de viaje"
          categories={[
            {
              href: "/tours?categoria=aventura",
              imageSrc: "/images/categorias/aventura.jpg",
              imageAlt: "Trekking de aventura en los Andes",
              title: "Aventura",
              description:
                "Treks de varios días por los caminos ancestrales de los Andes.",
            },
            {
              href: "/tours?categoria=cultural",
              imageSrc: "/images/categorias/cultural.jpg",
              imageAlt: "Sitios arqueológicos incas",
              title: "Cultural",
              description:
                "Historia viva entre templos, mercados y pueblos tradicionales.",
            },
            {
              href: "/tours?categoria=gastronomia",
              imageSrc: "/images/categorias/gastronomia.jpg",
              imageAlt: "Gastronomía andina",
              title: "Gastronomía",
              description:
                "Sabores ancestrales de la cocina andina en cada parada.",
            },
            {
              href: "/tours?categoria=mistico",
              imageSrc: "/images/categorias/mistico.jpg",
              imageAlt: "Ceremonia andina mística",
              title: "Místico",
              description:
                "Conexión espiritual con la Pachamama y los Apus sagrados.",
            },
            {
              href: "/tours?categoria=vivencial",
              imageSrc: "/images/categorias/vivencial.jpg",
              imageAlt: "Turismo vivencial en comunidad andina",
              title: "Vivencial",
              description:
                "Convive con comunidades andinas y su vida cotidiana.",
            },
          ]}
        />

        {/* --- 6. Por qué viajar con nosotros --- */}
        <WhyChooseUs
          eyebrow="Nuestro compromiso"
          title="¿Por qué viajar con Urpi Wayra Tours?"
          reasons={[
            {
              icon: "guide",
              title: "Guías expertos",
              description:
                "Elegidos por su experiencia y responsabilidad. Comparten su entusiasmo y conocimientos.",
            },
            {
              icon: "users",
              title: "Clientes satisfechos",
              description:
                "Más de 10 años de experiencia nos han permitido perfeccionar cada uno de nuestros tours.",
            },
            {
              icon: "community",
              title: "Apoyo a comunidades andinas",
              description:
                "Valoramos nuestros orígenes y buscamos apoyar a las comunidades que nos respaldan.",
            },
            {
              icon: "leaf",
              title: "Sensibilidad ambiental",
              description:
                "Respetamos las culturas locales y promovemos su patrimonio y estilo de vida.",
            },
            {
              icon: "handshake",
              title: "Servicio personalizado",
              description:
                "Viaja en grupo o privado. En grupos grandes, mantenemos un tope máximo de pasajeros.",
            },
            {
              icon: "porters",
              title: "Cuidamos a nuestros porteadores",
              description:
                "Personas amables y alegres que te recibirán con los brazos abiertos.",
            },
            {
              icon: "food",
              title: "Comida fantástica",
              description:
                "Comida andina tradicional y nutritiva: sabores, texturas y sensaciones únicas.",
            },
            {
              icon: "tent",
              title: "Equipo de camping",
              description:
                "Supervisamos la calidad de carpas, sacos de dormir y suministros en cada ruta.",
            },
          ]}
        />

        {/* --- 7. Preguntas frecuentes --- */}
        <FaqAccordion
          eyebrow="Ayuda"
          title="Preguntas Frecuentes"
          subtitle="Las preguntas más frecuentes en Urpi Wayra Tours"
          items={[
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
          ]}
        />
      </main>
    </>
  );
}
