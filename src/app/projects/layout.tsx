import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Selected work by Sahil Barak, including CanvasFlow and Mox UI – full-stack products built with Next.js, React and TypeScript.",
  path: "/projects",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
