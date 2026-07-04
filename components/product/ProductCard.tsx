import Image from "next/image";
import Link from "next/link";
import type { MandalaProduct } from "@/lib/mandalaData";

export default function ProductCard({ product }: { product: MandalaProduct }) {
  return (
    <Link
      href={`/mandala-art/${product.slug}`}
      className="group block overflow-hidden rounded-[32px] border border-stone-200 bg-white transition-all duration-500 hover:-translate-y-3 hover:border-pink-200 hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={700}
          height={700}
          className="h-[420px] w-full object-cover transition duration-700 transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Badges */}

        <div className="absolute left-5 top-5 flex gap-2">
          <span className="rounded-full bg-grey/90 px-3 py-1 text-xs font-semibold backdrop-blur">
            ✨ Handmade
          </span>

          <span className="rounded-full bg-pink-600 px-3 py-1 text-xs font-semibold text-white">
            Custom
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="p-8">
        <h3 className="text-2xl font-bold text-stone-900">{product.title}</h3>

        <p className="mt-4 leading-7 text-stone-600">{product.description}</p>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-pink-600">
              ₹{product.price.toLocaleString("en-IN")}
            </p>

            <p className="text-sm text-stone-500">{product.size}</p>
          </div>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            In Stock
          </span>
        </div>

        <div className="mt-8 inline-flex items-center rounded-full border border-pink-600 px-5 py-2 text-sm font-semibold text-pink-600 transition-all duration-300 group-hover:bg-pink-600 group-hover:text-white">
          View Artwork →
        </div>
      </div>
    </Link>
  );
}
