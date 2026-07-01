import type { Metadata } from "next";
import Hero from "@/components/mandala/Hero";
import Gallery from "@/components/mandala/Gallery";
import AboutMandala from "@/components/mandala/AboutMandala";
import WhyChoose from "@/components/mandala/WhyChoose";
import CollectionBreadcrumb from "@/components/breadcrumbs/CollectionBreadcrumb";

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
        url: "/images/mandala/swastik-mandala/swastik-poojaroom.jpg",
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

    images: ["/images/mandala/swastik-mandala/swastik-poojaroom.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function MandalaArtPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://merakinandita.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mandala Art",
        item: "https://merakinandita.in/mandala-art",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#FFF9F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <CollectionBreadcrumb />
      </div>
      <Hero />
      <Gallery />
      <AboutMandala />
      <WhyChoose />
    </main>
  );
}
