import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://merakinandita.in"),

  title: {
    default: "Meraki by Nandita | Handmade Mandala, Lippan & Canvas Art",
    template: "%s | Meraki by Nandita",
  },

  description:
    "Discover handcrafted Mandala Art, Lippan Art and Canvas Paintings by Nandita. Custom artwork, personalized home décor and Pan India delivery.",

  keywords: [
    "Mandala Art",
    "Lippan Art",
    "Canvas Painting",
    "Handmade Wall Decor",
    "Custom Artwork",
    "Mandala Chennai",
    "Lippan India",
    "Home Decor",
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
