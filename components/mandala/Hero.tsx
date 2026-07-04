import Link from "next/link";
import CollectionBreadcrumb from "@/components/breadcrumbs/CollectionBreadcrumb";

export default function Hero() {
  return (
    <section
      className="relative min-h-[75vh] flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url('/images/mandala/swastik-mandala/swastik-pooja-room.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Breadcrumb */}

          <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
            <CollectionBreadcrumb />
          </div>

          {/* Heading */}

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Handcrafted
            <br />
            Mandala Art
          </h1>

          {/* Description */}

          <p className="mt-8 text-xl leading-9 text-white/90 max-w-2xl">
            Transform your home with handcrafted Mandala wall art designed to
            bring harmony, elegance and timeless beauty into every space. Every
            artwork is lovingly created by Nandita and can be customised to
            perfectly suit your interiors.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="https://wa.me/918007801123"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--accent)] px-8 py-4 text-white font-semibold transition hover:bg-[var(--accent-hover)]"
            >
              Custom Order
            </a>

            <Link
              href="#gallery"
              className="rounded-full border border-white px-8 py-4 text-white font-semibold transition hover:bg-[var(--surface)] hover:text-gray-900"
            >
              Explore Collection
            </Link>
          </div>

          {/* Trust Badges */}

          <div className="mt-12 flex flex-wrap gap-8 text-white text-sm font-medium">
            <span>✨ 100% Handmade</span>

            <span>🎨 Custom Sizes</span>

            <span>🇮🇳 Made in India</span>

            <span>🚚 Pan India Shipping</span>
          </div>
        </div>
      </div>
    </section>
  );
}
