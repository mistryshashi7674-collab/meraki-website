import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://www.merakinandita.in/sitemap.xml",

    host: "https://www.merakinandita.in",
  };
}
