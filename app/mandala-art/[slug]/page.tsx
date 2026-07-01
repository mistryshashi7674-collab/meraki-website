import Image from "next/image";
import { mandalaArt } from "@/lib/mandalaData";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/product/ProductGallery";

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

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT COLUMN */}
        <div>
          <ProductGallery images={artwork.images} title={artwork.title} />
        </div>

        {/* RIGHT COLUMN */}
        <div>
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
    </main>
  );
}
