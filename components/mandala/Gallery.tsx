import Image from "next/image";

const artworks = [
  {
    title: "Handmade Mandala Wall Art",
    description:
      "Beautiful handcrafted mandala artwork designed to enhance modern living spaces.",
    image: "/images/ornate-mandala.jpg",
    alt: "Handmade Mandala wall art for living room",
  },

  {
    title: "Custom Wooden Mandala",
    description:
      "Personalised wooden mandala art made to match your home décor.",
    image: "/images/black-pink-mandala.jpg",
    alt: "Custom wooden mandala artwork",
  },

  {
    title: "Colourful Mandala Painting",
    description:
      "Bright and elegant mandala painting suitable for bedrooms and offices.",
    image: "/images/yellow-mandala.jpg",
    alt: "Colourful handmade mandala painting",
  },
];

export default function Gallery() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Featured Mandala Collection
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
          Every artwork is handcrafted with precision and can be customised to
          suit your home, office or gifting requirements.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {artworks.map((artwork) => (

            <article
              key={artwork.title}
              className="rounded-2xl overflow-hidden bg-[#FFF9F5] shadow-lg hover:shadow-xl transition"
            >

              <Image
                src={artwork.image}
                alt={artwork.alt}
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

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}