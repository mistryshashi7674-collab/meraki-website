import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";
import { mandalaArt } from "@/lib/mandalaData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const artwork = mandalaArt.find((item) => item.slug === slug);

  if (!artwork) return {};

  return {
    title: `${artwork.title} | Meraki by Nandita`,
    description: artwork.description,

    openGraph: {
      title: artwork.title,
      description: artwork.description,
      images: [artwork.images[0]],
    },
  };
}

export async function generateStaticParams() {
  return mandalaArt.map((item) => ({
    slug: item.slug,
  }));
}

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: Props) {
  const artwork = mandalaArt.find((item) => item.slug === params.slug);

  if (!artwork) {
    notFound();
  }

  const relatedProducts = mandalaArt
    .filter((item) => item.slug !== artwork.slug)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hi Nandita, I'm interested in "${artwork.title}". Can you please share more details?`,
  );

  // Replace with your actual WhatsApp number
  const whatsappUrl = `https://wa.me/918007801123?text=${whatsappMessage}`;

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* LEFT COLUMN */}

        <div>
          <Image
            src={artwork.images[0]}
            alt={artwork.title}
            width={700}
            height={700}
            className="rounded-xl w-full"
          />

          <div className="grid grid-cols-4 gap-4 mt-6">
            {artwork.images.map((image) => (
              <Image
                key={image}
                src={image}
                alt={artwork.title}
                width={150}
                height={150}
                className="rounded-lg cursor-pointer border hover:border-black transition"
              />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}

        <div>
          <h1 className="text-5xl font-bold">{artwork.title}</h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            {artwork.description}
          </p>

          <div className="mt-8 space-y-3">
            <p>
              <strong>Price:</strong> ₹{artwork.price}
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
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full transition"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      {/* RELATED PRODUCTS */}

      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-8">Related Artwork</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedProducts.map((item) => (
            <Link key={item.slug} href={`/mandala-art/${item.slug}`}>
              <Image
                src={item.images[0]}
                alt={item.title}
                width={400}
                height={400}
                className="rounded-lg"
              />

              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
