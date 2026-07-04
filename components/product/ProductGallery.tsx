"use client";

import { useState } from "react";
import ProductLightbox from "./ProductLightbox";
import Image from "next/image";

type Props = {
  images: string[];
  title: string;
};

export default function ProductGallery({ images, title }: Props) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const selectedIndex = images.findIndex((image) => image === selectedImage);

  return (
    <div>
      {/* Main Image */}
      <div
        onClick={() => setLightboxOpen(true)}
        className="group relative cursor-zoom-in overflow-hidden rounded-[28px]"
      >
        <Image
          src={selectedImage}
          alt={title}
          width={700}
          height={700}
          priority
          className="aspect-square w-full object-cover shadow-xl transition-all duration-500 group-hover:scale-[1.03]"
        />

        {/* Hover Overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="mb-6 rounded-full bg-[var(--surface)]/90 px-5 py-2 text-sm font-medium text-stone-800 backdrop-blur shadow-lg">
            Click to enlarge
          </span>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className={`cursor-pointer overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
              selectedImage === image
                ? "border-pink-500 scale-105 shadow-lg"
                : "border-[var(--border)] hover:border-pink-300 hover:scale-105"
            }`}
          >
            <Image
              src={image}
              alt={title}
              width={150}
              height={150}
              className="aspect-square w-full object-cover"
            />
          </button>
        ))}
      </div>
      <ProductLightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        images={images}
        index={selectedIndex}
      />
    </div>
  );
}
