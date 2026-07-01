import Image from "next/image";
import { mandalaArt } from "@/lib/mandalaData";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/product/ProductGallery";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const artwork = mandalaArt.find((item) => item.slug === slug);

  if (!artwork) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Hi Nandita, I'm interested in "${artwork.title}". Can you please share more details?`,
  );

  const whatsappUrl = `https://wa.me/918007801123?text=${whatsappMessage}`;

  const relatedProducts = mandalaArt
    .filter((item) => item.slug !== artwork.slug)
    .slice(0, 3);

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-5 gap-20 items-start">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-3">
          <ProductGallery images={artwork.images} title={artwork.title} />
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 sticky top-28">
          <h1 className="text-5xl font-bold">{artwork.title}</h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            {artwork.description}
          </p>

          <div className="mt-8 space-y-3">
            <p className="text-3xl font-bold text-yellow-500 mt-8">
              ₹{artwork.price}
            </p>
            <p>
              <strong>Size:</strong> {artwork.size}
            </p>
            <p>
              <strong>Medium:</strong> {artwork.medium}
            </p>
            <p>
              <strong>Frame:</strong> {artwork.frame}
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-8">You may also like</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedProducts.map((item) => (
            <Link key={item.slug} href={`/mandala-art/${item.slug}`}>
              <Image
                src={item.images[0]}
                alt={item.title}
                width={400}
                height={400}
                className="rounded-xl hover:scale-105 transition"
              />

              <h3 className="mt-4 font-semibold">{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
