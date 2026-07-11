export type Collection = {
  title: string;
  description: string;
  image: string;
  href: string;
  status: "live" | "coming-soon";
};

export const collections: Collection[] = [
  {
    title: "Mandala Art",
    description:
      "Intricate handcrafted mandalas designed to bring peace and elegance.",
    image: "/images/mandala/black-mandala/black-hall-room.jpg",
    href: "/mandala-art",
    status: "live",
  },
  {
    title: "Lippan Art",
    description:
      "Traditional mirror artwork with a contemporary touch.",
    image: "/images/hero-art.jpg",
    href: "/lippan-art",
    status: "coming-soon",
  },
  {
    title: "Acrylic Paintings",
    description:
      "Unique handmade paintings for every interior style.",
    image: "/images/hero-art.jpg",
    href: "/acrylic-paintings",
    status: "coming-soon",
  },
];