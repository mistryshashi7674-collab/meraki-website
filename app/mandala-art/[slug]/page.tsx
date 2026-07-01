import { mandalaArt } from "@/lib/mandalaData";
import { notFound } from "next/navigation";

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

  return (
    <main className="p-10">
      <h1 className="text-4xl">{artwork.title}</h1>
      <p>{artwork.description}</p>
    </main>
  );
}