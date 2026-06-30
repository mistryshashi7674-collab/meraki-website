import Image from "next/image";

const collections = [
  {
    title: "Mandala Art",
    description:
      "Intricate handcrafted mandalas designed to bring peace and elegance.",
    image: "/images/hero-art.jpg",
  },
  {
    title: "Lippan Art",
    description: "Traditional mirror artwork with a contemporary touch.",
    image: "/images/hero-art.jpg",
  },
  {
    title: "Canvas Paintings",
    description: "Unique handmade paintings for every interior style.",
    image: "/images/hero-art.jpg",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Explore Our Collections
        </h2>

        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          Every artwork is handcrafted with love, making each piece unique and
          timeless.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {collections.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition duration-500"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-96 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600">{item.description}</p>

                <button className="mt-6 text-pink-600 font-semibold hover:translate-x-1 transition">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
