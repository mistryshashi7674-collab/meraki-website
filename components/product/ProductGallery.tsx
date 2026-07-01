"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  title: string;
};

export default function ProductGallery({
  images,
  title,
}: Props) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      {/* Main Image */}
      <Image
        src={selectedImage}
        alt={title}
        width={700}
        height={700}
        priority
        className="rounded-xl w-full object-cover"
      />

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3 mt-5">
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className={`rounded-lg overflow-hidden border-2 transition ${
              selectedImage === image
                ? "border-yellow-500"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <Image
              src={image}
              alt={title}
              width={150}
              height={150}
              className="w-full h-auto"
            />
          </button>
        ))}
      </div>
    </div>
  );
}