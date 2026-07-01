import { notFound } from "next/navigation";
import { mandalaArt } from "@/lib/mandalaData";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: Props) {
  const artwork = mandalaArt.find(
    (item) => item.slug === params.slug
  );

  if (!artwork) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold">
        {artwork.title}
      </h1>

      <p className="mt-6 text-xl">
        {artwork.description}
      </p>

      <p className="mt-6 font-semibold">
        Price: {artwork.price}
      </p>
    </main>
  );
}