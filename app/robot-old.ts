import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://merakinandita.in/sitemap.xml",

    host: "https://merakinandita.in",
  };
}