import Image from "next/image";
import Link from "next/link";
import type { MandalaProduct } from "@/lib/mandalaData";

export default function ProductCard({
  product,
}: {
  product: MandalaProduct;
}) {
  const discount = Math.round(
    ((product.originalPrice - product.price) /
      product.originalPrice) *
      100
  );

  return (
    <Link
      href={`/mandala-art/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-stone-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-pink-200 hover:shadow-[0_20px_60px_rgba(236,72,153,0.15)]"
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <Image
          src={product.images[0]}
          alt={product.title}
          width={700}
          height={700}
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* Top Badges */}

        <div className="absolute left-5 top-5 flex flex-col gap-2">

          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-700 backdrop-blur">
            ✨ Handmade
          </span>

        </div>

        {/* Discount Badge */}

        <div className="absolute right-5 top-5 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
          {discount}% OFF
        </div>

      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-8">

        <h3 className="text-2xl font-bold text-stone-900">
          {product.title}
        </h3>

        <p className="mt-4 min-h-[90px] leading-7 text-stone-600">
          {product.description}
        </p>

        {/* Price */}

        <div className="mt-6">

          <div className="flex items-center gap-3">

            <span className="text-3xl font-bold text-pink-600">
              ₹{product.price.toLocaleString("en-IN")}
            </span>

            <span className="text-base text-stone-400 line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>

          </div>

          <div className="mt-4 flex items-center justify-between">

            <span className="text-sm font-medium text-stone-500">
              {product.size}
            </span>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              In Stock
            </span>

          </div>

        </div>

        {/* Button */}

        <div className="mt-auto pt-8">

          <div className="inline-flex items-center rounded-full border border-pink-600 px-6 py-3 text-sm font-semibold text-pink-600 transition-all duration-300 group-hover:bg-pink-600 group-hover:text-white">
            View Artwork →
          </div>

        </div>

      </div>

    </Link>
  );
}