import Image from "next/image";
import Link from "next/link";
import { mandalaArt } from "@/lib/mandalaData";
import CollectionBreadcrumb from "@/components/breadcrumbs/CollectionBreadcrumb";

export default function Gallery() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <CollectionBreadcrumb />

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Featured Mandala Collection
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
          Every artwork is handcrafted with precision and can be customised to
          suit your home, office or gifting requirements.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {mandalaArt.map((artwork) => (

            <Link
              key={artwork.id}
              href={`/mandala-art/${artwork.slug}`}
            >

              <article className="rounded-2xl overflow-hidden bg-[#FFF9F5] shadow-lg hover:shadow-xl transition hover:scale-[1.02]">

                <Image
                  src={artwork.images[0]}
                  alt={artwork.title}
                  width={500}
                  height={500}
                  className="w-full h-80 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-semibold text-gray-900">
                    {artwork.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    {artwork.description}
                  </p>

                  <p className="mt-4 text-lg font-semibold text-pink-600">
                    {artwork.price}
                  </p>

                  <p className="text-gray-500">
                    Size: {artwork.size}
                  </p>

                </div>

              </article>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}