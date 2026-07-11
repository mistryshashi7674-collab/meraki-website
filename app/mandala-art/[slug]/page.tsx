import type { Metadata } from "next";
import { mandalaArt } from "@/lib/mandalaData";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/product/ProductGallery";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductSchema from "@/components/seo/ProductSchema";
import ProductCard from "@/components/product/ProductCard";
import StickyWhatsAppBar from "@/components/product/StickyWhatsAppBar";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const artwork = mandalaArt.find((item) => item.slug === slug);

  if (!artwork) {
    return {};
  }

  const url = `https://www.merakinandita.in/mandala-art/${artwork.slug}`;

  return {
    title: `${artwork.title} | Meraki by Nandita`,
    description: artwork.description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: artwork.title,
      description: artwork.description,
      url,
      images: [
        {
          url: `https://www.merakinandita.in${artwork.images[0]}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: artwork.title,
      description: artwork.description,
      images: [`https://www.merakinandita.in${artwork.images[0]}`],
    },
  };
}
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
    .filter(
      (item) =>
        item.slug !== artwork.slug && item.category === artwork.category,
    )
    .slice(0, 4);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.merakinandita.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mandala Art",
        item: "https://www.merakinandita.in/mandala-art",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: artwork.title,
        item: `https://www.merakinandita.in/mandala-art/${artwork.slug}`,
      },
    ],
  };

  return (
    <main className="bg-[#FFF9F5] min-h-screen pb-28 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <ProductSchema artwork={artwork} />
        <ProductBreadcrumb title={artwork.title} />
        <div className="grid lg:grid-cols-5 gap-20 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-3">
            <ProductGallery images={artwork.images} title={artwork.title} />
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <h1 className="text-5xl font-bold">{artwork.title}</h1>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
                ✨ Handmade
              </span>

              <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                🎨 Customisable
              </span>

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                ✓ In Stock
              </span>
            </div>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              {artwork.description}
            </p>

            <div className="mt-8 space-y-3">
              <div className="mt-10">
                <p className="text-sm uppercase tracking-widest text-stone-500">
                  Offer Price
                </p>

                <div className="mt-3 flex items-center gap-4">
                  <span className="text-5xl font-bold text-pink-600">
                    ₹{artwork.price.toLocaleString("en-IN")}
                  </span>

                  <span className="text-2xl text-stone-400 line-through">
                    ₹{artwork.originalPrice.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="mt-4 inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
                  Save ₹
                  {(artwork.originalPrice - artwork.price).toLocaleString(
                    "en-IN",
                  )}
                </div>
              </div>
              <div className="mt-8 space-y-4 ">
                <div className="flex justify-between rounded-xl bg-stone-50 p-4 bg-[var(--surface)] border border-[var(--border)] shadow-sm">
                  <span className="font-medium text-[var(--text-secondary)] ">
                    Size
                  </span>

                  <span className="font-semibold">{artwork.size}</span>
                </div>

                <div className="flex justify-between rounded-xl bg-stone-50 p-4 bg-[var(--surface)] border border-[var(--border)] shadow-sm">
                  <span className="font-medium text-[var(--text-secondary)]">
                    Medium
                  </span>

                  <span className="font-semibold">{artwork.medium}</span>
                </div>

                <div className="flex justify-between rounded-xl bg-stone-50 p-4 bg-[var(--surface)] border border-[var(--border)] shadow-sm">
                  <span className="font-medium text-[var(--text-secondary)]">
                    Frame
                  </span>

                  <span className="font-semibold">{artwork.frame}</span>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#1EBE5D]"
                >
                  💬 Order on WhatsApp
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-full border-2 border-pink-600 bg-[var(--surface)] px-6 py-4 font-semibold text-pink-600 transition hover:bg-[var(--accent)] hover:text-white"
                >
                  🎨 Request Custom Design
                </a>
              </div>

              <div className="mt-10 border-t border-[var(--border)] pt-8">
                <div className="space-y-4 text-stone-700">
                  <div className="flex items-center gap-3">
                    ✨ <span>100% Handmade Artwork</span>
                  </div>

                  <div className="flex items-center gap-3">
                    🚚 <span>Pan India Shipping</span>
                  </div>

                  <div className="flex items-center gap-3">
                    🎁 <span>Secure Packaging</span>
                  </div>

                  <div className="flex items-center gap-3">
                    🎨 <span>Custom Colours Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-24 border-t border-[var(--border)] pt-20">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-[var(--text-primary)]">
              About this Artwork
            </h2>

            <p className="mt-8 text-lg leading-9 text-[var(--text-secondary)]">
              Every Mandala artwork by Meraki by Nandita is thoughtfully
              handcrafted using premium acrylic colours on high-quality MDF.
              Inspired by the timeless beauty of traditional Indian Mandalas,
              each piece is designed to bring harmony, elegance and positive
              energy into your home.
            </p>

            <p className="mt-6 text-lg leading-9 text-[var(--text-secondary)]">
              As every artwork is handmade, each creation carries its own unique
              character and intricate detailing, making it a truly one-of-a-kind
              addition to your living room, bedroom, pooja room or workspace.
            </p>

            <p className="mt-6 text-lg leading-9 text-[var(--text-secondary)]">
              Looking for something personalised? We also create custom Mandala
              artworks in your preferred colours, sizes and themes to perfectly
              complement your interiors.
            </p>
          </div>
        </section>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border)] p-6">
            <h3 className="font-semibold text-lg">Premium Materials</h3>

            <p className="mt-3 text-[var(--text-secondary)]">
              Crafted using premium MDF, acrylic colours and a durable
              protective finish.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] p-6">
            <h3 className="font-semibold text-lg">Ready to Hang</h3>

            <p className="mt-3 text-[var(--text-secondary)]">
              Delivered with a premium frame, ready to enhance your space.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] p-6">
            <h3 className="font-semibold text-lg">Handmade with Care</h3>

            <p className="mt-3 text-[var(--text-secondary)]">
              Every dot and detail is individually painted by hand with patience
              and precision.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] p-6">
            <h3 className="font-semibold text-lg">Custom Orders</h3>

            <p className="mt-3 text-[var(--text-secondary)]">
              Personalise colours, sizes and designs to create a piece that's
              uniquely yours.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-[32px] bg-[var(--hero-bg)] p-10 text-center">
          <h3 className="text-3xl font-bold text-[var(--text-primary)]">
            Looking for a Custom Mandala?
          </h3>

          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
            Share your preferred colours, size and design ideas, and we'll
            create a handcrafted artwork made exclusively for your space.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-[#25D366] px-8 py-4 text-white font-semibold transition hover:bg-[#1EBE5D]"
          >
            Discuss Your Custom Artwork
          </a>
        </div>

        <section className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--text-primary)]">
              You May Also Like
            </h2>

            <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
              Discover more handcrafted Mandala artworks thoughtfully designed
              to complement your home and personal style.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>
      <StickyWhatsAppBar price={artwork.price} whatsappUrl={whatsappUrl} />
    </main>
  );
}
