import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Art Gallery",
  description:
    "A gallery of animated React components Sahil Barak designed and built for Mox UI, with live previews of each interaction.",
  path: "/artgallery",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
