import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/site";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** schema.org graph describing the site owner, used for Google's knowledge panel and rich results. */
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/official/og.png`,
      jobTitle: "Software Engineer",
      description: SITE_DESCRIPTION,
      sameAs: SOCIAL_LINKS,
      knowsAbout: [
        "Software Engineering",
        "Full Stack Development",
        "React",
        "Next.js",
        "TypeScript",
        "UI Engineering",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: `${SITE_NAME} – Software Engineer`,
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": PERSON_ID },
    },
  ],
};
