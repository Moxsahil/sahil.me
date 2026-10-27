export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  status?: "live" | "discontinued" | "building";
  projectBg: string;
};

export const projects: Project[] = [
  {
    id: 100,
    name: "CanvasFlow",
    description:
      "An enterprise-grade online whiteboard. Sketch diagrams, wireframes and flowcharts on an infinite canvas and work on them together in real time.",
    image: "/Project/ProjectImages/canvasflow.png",
    link: "https://canvasflowapp.com",
    github: "https://github.com/Moxsahil/canvasflow",
    status: "live",
    projectBg: "/Project/ProjectBackground/canvasflow.png",
  },
  {
    id: 101,
    name: "Mox UI",
    description:
      "A free, open-source registry of animated React components, built with Tailwind CSS and Motion and installed with the shadcn CLI.",
    image: "/Project/ProjectImages/moxui.png",
    link: "https://moxui.dev",
    github: "https://github.com/Moxsahil/mox-ui",
    status: "live",
    projectBg: "/Project/ProjectBackground/moxui.png",
  },
];
