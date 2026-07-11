import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Mandala Art",
    description:
      "Intricate handcrafted mandalas designed to bring peace and elegance.",
    image: "/images/mandala/black-mandala/black-hall-room.jpg",
    href: "/mandala-art",
    available: true,
  },
  {
    title: "Lippan Art",
    description: "Traditional mirror artwork with a contemporary touch.",
    image: "/images/hero-art.jpg",
    href: "/lippan-art",
    available: false,
  },
  {
    title: "Acrylic Paintings",
    description: "Unique handmade paintings for every interior style.",
    image: "/images/hero-art.jpg",
    href: "/acrylic-paintings",
    available: false,
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-24 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Explore Our Collections
        </h2>

        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          Every artwork is handcrafted with love, making each piece unique and
          timeless.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {collections.map((item) => {
            const CardContent = (
              <>
                {/* Image */}

                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    className={`w-full h-96 object-cover transition duration-700 ${
                      item.available
                        ? "group-hover:scale-110"
                        : "opacity-70 grayscale-[20%]"
                    }`}
                  />

                  {!item.available && (
                    <div className="absolute right-5 top-5 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                      Launching Soon
                    </div>
                  )}
                </div>

                {/* Content */}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600">{item.description}</p>

                  <div
                    className={`mt-6 inline-flex items-center font-semibold transition ${
                      item.available
                        ? "text-pink-600 group-hover:translate-x-1"
                        : "text-stone-400"
                    }`}
                  >
                    {item.available ? "Explore Collection →" : "Launching Soon"}
                  </div>
                </div>
              </>
            );

            return item.available ? (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl overflow-hidden bg-[var(--surface)] shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 block"
              >
                {CardContent}
              </Link>
            ) : (
              <div
                key={item.title}
                className="rounded-3xl overflow-hidden bg-[var(--surface)] shadow-lg cursor-default"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
