import { MetadataRoute } from "next";
import { mandalaArt } from "@/lib/mandalaData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://merakinandita.in";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/mandala-art`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...mandalaArt.map((artwork) => ({
      url: `${baseUrl}/mandala-art/${artwork.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
