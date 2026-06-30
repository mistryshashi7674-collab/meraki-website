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

export default function MandalaArtPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F5] p-10">
      <h1 className="text-4xl font-bold">Mandala Art</h1>

      <p className="mt-4">This page is under construction.</p>
    </main>
  );
}
