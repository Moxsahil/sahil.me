import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Component Library",
  description:
    "Browse the Mox UI component library by Sahil Barak: production-ready, animated React and Tailwind components for modern interfaces.",
  path: "/art",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
