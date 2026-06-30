import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://merakinandita.in"),

  title: {
    default: "Meraki by Nandita | Handmade Mandala, Lippan & Canvas Art",
    template: "%s | Meraki by Nandita",
  },

  description:
    "Discover handcrafted Mandala Art, Lippan Art and Canvas Paintings by Nandita. Custom artwork, personalized home décor and Pan India delivery.",

  keywords: [
    "Mandala Art Chennai",
    "Lippan Art Chennai",
    "Mandala Painting",
    "Lippan Wall Decor",
    "Canvas Paintings",
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

    description:
      "Handcrafted Mandala, Lippan and Canvas Art by Nandita.",

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
    telephone: "+918007801123",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/meraki_nandita_/",
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
      </body>
    </html>
  );
}