import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Groupe AD",
    short_name: "AD",
    description:
      "Le Groupe AD a pour mission de rassembler un maximum de serveurs Discord. Rejoignez notre communauté grandissante et découvrez nos serveurs dédiés aux fondateurs, développeurs et bien plus encore !",
    start_url: "/",
    orientation: "portrait",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    lang: "fr",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
