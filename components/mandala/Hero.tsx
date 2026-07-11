import Link from "next/link";
import CollectionBreadcrumb from "@/components/breadcrumbs/CollectionBreadcrumb";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url('/images/mandala/swastik-mandala/swastik-pooja-room.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          {/* Breadcrumb */}

          <div className="mb-8">
            <CollectionBreadcrumb />
          </div>

          {/* Heading */}

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            Handcrafted
            <br />
            <span className="text-pink-300">Mandala Art</span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/90 sm:text-lg lg:text-xl">
            Transform your home with handcrafted Mandala wall art designed to
            bring harmony, elegance and timeless beauty into every space. Every
            artwork is lovingly created by Nandita and can be customised to
            perfectly suit your interiors.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/918007801123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#1EBE5D]"
            >
              <FaWhatsapp />
              Custom Order
            </a>

            <Link
              href="#gallery"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-gray-900"
            >
              Explore Collection
              <FaArrowRight size={14} />
            </Link>
          </div>

          {/* Trust Badges */}

          <div className="mt-12 grid grid-cols-2 gap-4 text-sm text-white sm:flex sm:flex-wrap sm:gap-8">
            <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              ✨ 100% Handmade
            </div>

            <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              🎨 Custom Sizes
            </div>

            <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              🇮🇳 Made in India
            </div>

            <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              🚚 Pan India Shipping
            </div>
          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
            <div>
              <h3 className="text-3xl font-bold text-white">100+</h3>

              <p className="mt-2 text-sm text-white/70">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">100%</h3>

              <p className="mt-2 text-sm text-white/70">Handmade</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">★★★★★</h3>

              <p className="mt-2 text-sm text-white/70">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
