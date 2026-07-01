import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";


export const metadata: Metadata = {
  metadataBase: new URL("https://merakinandita.in"),

  title: {
    default:
      "Handmade Mandala & Lippan Art in Chennai | Custom Wall Decor | Meraki by Nandita",
    template: "%s | Meraki by Nandita",
  },

  description:
    "Discover handmade Mandala Art, Lippan Art, Mirror Mosaic, Acrylic Paintings and custom wall decor by Nandita in Chennai. Personalized artwork, home decor and handmade gifts with Pan India delivery.",

  keywords: [
    "Handmade Mandala Art",
    "Mandala Art Chennai",
    "Lippan Art Chennai",
    "Lippan Wall Decor",
    "Mirror Mosaic Art",
    "Mandala Painting",
    "Lippan Wall Decor",
    "Custom Wall Decor",
    "Acrylic Paintings",
    "Handmade Wall Decor India",
    "Custom Mandala Art",
    "Personalized Wall Art",
    "Indian Home Decor",
    "Handmade Gifts",
    "Meraki by Nandita",
  ],

  authors: [{ name: "Nandita" }],

  creator: "Nandita",

  publisher: "Meraki by Nandita",

  verification: {
    google: "",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Meraki by Nandita",

    description:
      "Handcrafted Mandala, Lippan and Canvas Art for beautiful homes.",

    url: "https://merakinandita.in",

    siteName: "Meraki by Nandita",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/hero-art.jpg",
        width: 1200,
        height: 630,
        alt: "Handcrafted Mandala Artwork",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Meraki by Nandita",

    description: "Handcrafted Mandala, Lippan and Canvas Art by Nandita.",

    images: ["/images/hero-art.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "Meraki by Nandita",

    image: "https://merakinandita.in/images/hero-art.jpg",

    url: "https://merakinandita.in",

    telephone: "+91-8007801123",

    description:
      "Handcrafted Mandala Art, Lippan Art and custom wall décor made in Chennai.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },

    priceRange: "₹₹",

    sameAs: [
      "https://www.instagram.com/meraki_nandita_/",
      "https://www.pinterest.com/nanditathakur29",
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      </body>
    </html>
  );
}
