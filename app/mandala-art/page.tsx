import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Handmade Mandala Art in Chennai | Custom Wall Decor | Meraki by Nandita",

  description:
    "Discover handcrafted Mandala Art by Meraki by Nandita in Chennai. Custom wall decor, personalized mandala paintings, handmade gifts and pan India shipping.",

  alternates: {
    canonical: "https://merakinandita.in/mandala-art",
  },

  openGraph: {
    title: "Handmade Mandala Art in Chennai | Meraki by Nandita",

    description:
      "Explore handcrafted Mandala Art, personalized wall decor and custom artwork made with love in Chennai.",

    url: "https://merakinandita.in/mandala-art",

    siteName: "Meraki by Nandita",

    images: [
      {
        url: "/images/hero-art.jpg",
        width: 1200,
        height: 630,
        alt: "Handmade Mandala Art by Meraki by Nandita",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Handmade Mandala Art | Meraki by Nandita",

    description:
      "Handcrafted Mandala Art, personalized wall decor and custom artwork from Chennai.",

    images: ["/images/hero-art.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

import Image from "next/image";
import Link from "next/link";

export default function MandalaArtPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F5]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Handmade Mandala Art in Chennai
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-9">
              Discover handcrafted Mandala wall art designed to bring warmth,
              elegance and positive energy to your home. Every artwork is
              carefully created by Nandita and can be customised to match your
              style, colours and space.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/918007801123"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
              >
                Order on WhatsApp
              </a>

              <Link
                href="/"
                className="border border-pink-500 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-lg transition"
              >
                View More Collections
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-gray-700 font-medium">
              <span>✔ Handmade in Chennai</span>
              <span>✔ Custom Designs</span>
              <span>✔ Pan India Shipping</span>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src="/images/hero-art.jpg"
              alt="Handmade Mandala wall art by Meraki by Nandita"
              width={650}
              height={650}
              className="rounded-3xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
