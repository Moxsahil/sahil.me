import type { Metadata, MetadataRoute } from "next";

export const SITE_URL = "https://sahilbarak.com";
export const SITE_NAME = "Sahil Barak";
export const SITE_TITLE = "Sahil Barak – Software Engineer";
export const SITE_DESCRIPTION =
  "Sahil Barak is a full-stack software engineer building CanvasFlow and Mox UI. Explore projects, open-source React components and ways to get in touch.";

export const SOCIAL_LINKS = [
  "https://github.com/Moxsahil",
  "https://www.linkedin.com/in/sahil-barak/",
  "https://www.instagram.com/moksshhh_.20/",
];

const OG_IMAGE = {
  url: "/official/og.png",
  width: 2400,
  height: 1260,
  alt: "Sahil Barak – Software Engineer",
};

type SitemapEntry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

/** Indexable routes. Add new public pages here to include them in sitemap.xml. */
export const SITE_ROUTES: SitemapEntry[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.8, changeFrequency: "monthly" },
  { path: "/artgallery", priority: 0.7, changeFrequency: "monthly" },
  { path: "/art", priority: 0.6, changeFrequency: "monthly" },
];

export function absoluteUrl(path = "/") {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/**
 * Builds canonical, Open Graph and Twitter metadata for a page.
 * Next.js replaces nested metadata objects instead of merging them, so every
 * page gets the full set rather than inheriting a partial one from the root.
 */
export function createMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_TITLE;

  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
