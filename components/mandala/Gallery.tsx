import { mandalaArt } from "@/lib/mandalaData";
import ProductCard from "@/components/product/ProductCard";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[var(--surface)] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold tracking-wide text-pink-700">
            Our Collection
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Featured Mandala Collection
          </h2>

          <p className="mt-6 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            Every artwork is handcrafted with precision using premium materials
            and can be customised to perfectly complement your home, office or
            gifting requirements.
          </p>

        </div>

        {/* Products */}

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">

          {mandalaArt.map((artwork) => (
            <ProductCard
              key={artwork.id}
              product={artwork}
            />
          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 text-center">

          <p className="mx-auto max-w-2xl text-[var(--text-secondary)]">
            Looking for a custom size, colour combination or personalised
            artwork? We create bespoke Mandalas designed exclusively for your
            space.
          </p>

          <a
            href="https://wa.me/918007801123"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#1EBE5D]"
          >
            Request a Custom Artwork
          </a>

        </div>

      </div>
    </section>
  );
}