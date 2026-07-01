import Image from "next/image";
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
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <Image
            src={artwork.images[0]}
            alt={artwork.title}
            width={700}
            height={700}
            className="rounded-xl w-full"
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold">{artwork.title}</h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            {artwork.description}
          </p>

          <div className="mt-8 space-y-3">
            <p>
              <strong>Price:</strong> ₹{artwork.price}
            </p>

            <p>
              <strong>Size:</strong> {artwork.size}
            </p>

            <p>
              <strong>Medium:</strong> {artwork.medium}
            </p>

            <p>
              <strong>Frame:</strong> {artwork.frame}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
