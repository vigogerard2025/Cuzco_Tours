"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type TourGalleryProps = {
  images: {
    id: number;
    url: string;
    alt: string | null;
  }[];
  title: string;
};

export default function TourGallery({ images, title }: TourGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (images.length === 0) {
    return null;
  }

  const activeImage = images[activeIndex];

  const nextImage = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  const previousImage = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  return (
    <>
      <section className="bg-[#F7F4EF]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          {/* MAIN IMAGE */}
          <div
            className="group relative h-[400px] cursor-pointer overflow-hidden rounded-2xl sm:h-[500px] lg:h-[600px]"
            onClick={() => setLightboxOpen(true)}
          >
            <Image
              src={activeImage.url}
              alt={activeImage.alt || title}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 1280px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

            {/* IMAGE COUNTER */}
            <div className="absolute bottom-5 left-5 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              {activeIndex + 1} / {images.length}
            </div>

            {/* PREVIOUS */}
            {images.length > 1 && (
              <button
                type="button"
                aria-label="Previous image"
                onClick={(event) => {
                  event.stopPropagation();
                  previousImage();
                }}
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#3B2921] opacity-0 shadow-lg transition-all group-hover:opacity-100 hover:bg-white"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* NEXT */}
            {images.length > 1 && (
              <button
                type="button"
                aria-label="Next image"
                onClick={(event) => {
                  event.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#3B2921] opacity-0 shadow-lg transition-all group-hover:opacity-100 hover:bg-white"
              >
                <ChevronRight size={22} />
              </button>
            )}
          </div>

          {/* THUMBNAILS */}
          {images.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative h-20 overflow-hidden rounded-xl transition-all sm:h-24 ${
                    activeIndex === index
                      ? "ring-4 ring-[#D9A441]"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={image.alt || `${title} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          {/* CLOSE */}
          <button
            type="button"
            aria-label="Close gallery"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={24} />
          </button>

          {/* PREVIOUS */}
          {images.length > 1 && (
            <button
              type="button"
              aria-label="Previous image"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* IMAGE */}
          <div
            className="relative h-[75vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.url}
              alt={activeImage.alt || title}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* NEXT */}
          {images.length > 1 && (
            <button
              type="button"
              aria-label="Next image"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
