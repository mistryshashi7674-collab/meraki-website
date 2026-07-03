import { mandalaArt } from "@/lib/mandalaData";
import ProductCard from "@/components/product/ProductCard";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Featured Mandala Collection
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
          Every artwork is handcrafted with precision and can be customised to
          suit your home, office or gifting requirements.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {mandalaArt.map((artwork) => (
            <ProductCard key={artwork.id} product={artwork} />
          ))}
        </div>
      </div>
    </section>
  );
}
