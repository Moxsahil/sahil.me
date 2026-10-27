import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Syne } from "next/font/google";
import { GeistPixelSquare, GeistPixelGrid, GeistPixelCircle, GeistPixelTriangle, GeistPixelLine } from 'geist/font/pixel';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

// the live address of this site; every absolute URL below is built from it
const SITE_URL = "https://sahil-barak.vercel.app";
const DESCRIPTION =
  "Sahil Barak is a Software Engineer building CanvasFlow and Mox UI with Next.js, React and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sahil Barak - Software Engineer",
  description: DESCRIPTION,
  icons: {
    icon: "/official/logo.png",
  },
  keywords: [
    "Sahil Barak",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "CanvasFlow",
    "Mox UI",
  ],
  openGraph: {
    title: "Sahil Barak - Software Engineer",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Sahil Barak",
    images: [
      {
        url: "/official/og.png",
        width: 2400,
        height: 1260,
        alt: "Sahil Barak, Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Barak - Software Engineer",
    description: DESCRIPTION,
    images: ["/official/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={SITE_URL} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sahil Barak",
              url: SITE_URL,
              sameAs: [
                "https://github.com/Moxsahil",
                "https://www.linkedin.com/in/sahil-barak/",
                "https://www.instagram.com/moksshhh_.20/",
              ],
              jobTitle: "Software Engineer",
              image: `${SITE_URL}/official/og.png`,
            }),
          }}
        />
      </head>

      <link rel="icon" href="/logo.ico" />

      <body className={` ${geistSans.variable} ${geistMono.variable} ${GeistPixelSquare.variable} ${spaceGrotesk.variable} ${syne.variable} antialiased`}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Analytics />
        {/* <CustomCursor /> */}
      </body>
    </html>
  );
}
