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
      <div onClick={() => setLightboxOpen(true)} className="cursor-zoom-in">
        <Image
          src={selectedImage}
          alt={title}
          width={700}
          height={700}
          priority
          className="aspect-square w-full rounded-[28px] object-cover shadow-xl transition-all duration-500 hover:scale-[1.01]"
        />
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
                : "border-stone-200 hover:border-pink-300 hover:scale-105"
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
