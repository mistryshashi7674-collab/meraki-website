type Props = {
  artwork: {
    title: string;
    description: string;
    price: number;
    originalPrice: number;
    slug: string;
    images: string[];
    available: boolean;
  };
};

export default function ProductSchema({ artwork }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: artwork.title,

    description: artwork.description,

    image: artwork.images.map(
      (image) => `https://www.merakinandita.in${image}`
    ),

    brand: {
      "@type": "Brand",
      name: "Meraki by Nandita",
    },

    offers: {
      "@type": "Offer",

      url: `https://www.merakinandita.in/mandala-art/${artwork.slug}`,

      priceCurrency: "INR",

      price: artwork.price,

      availability: artwork.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",

      seller: {
        "@type": "Organization",
        name: "Meraki by Nandita",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}