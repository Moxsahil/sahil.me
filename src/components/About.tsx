import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const ProjectChip = ({ href, logo, name }: { href: string; logo: string; name: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-1 inline-flex"
  >
    <span className="inline-flex items-center gap-2 bg-[#09090B] border border-neutral-700 px-2 rounded-lg hover:text-white md:text-lg font-sans shadow-[inset_0_0_12px_rgba(115,115,115,0.6)] hover:shadow-[inset_0_0_12px_rgba(139,92,246,0.6)] transition-all duration-200 font-semibold hover:border-purple-800 ml-1 mr-1">
      <Image src={logo} alt="" width={16} height={16} className="block rounded-[3px]" />
      {name}
    </span>
  </a>
);

const About = () => {
  return (
    <section className="bg-[#09090B] text-gray-300">
      <div className="px-[3%] py-10 md:py-15">
        <p className="mb-4 sm:mb-4 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          Hey! I&apos;m Sahil, a <span className="text-neutral-300">Software Engineer</span> and <span className="text-neutral-300">Full Stack Developer</span> from Haryana, India.
        </p>
        <p className="mb-4 sm:mb-1 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          I build products end to end, from the interface people touch to the APIs, real-time sync and databases behind it, and I care about making them fast.
        </p>
        <p className="mb-4 sm:mb-1 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          Right now, I&apos;m building
          <ProjectChip href="https://canvasflowapp.com" logo="/logos/canvasflow.svg" name="CanvasFlow" />
          - a real-time collaborative whiteboard for teams, and
          <ProjectChip href="https://moxui.dev" logo="/logos/moxui.svg" name="Mox UI" />
          - a free, open-source library of animated React components.
        </p>
        <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          I&apos;m always looking for new opportunities to learn and grow.
        </p>

        <div className="flex flex-wrap justify-center sm:justify-start gap-6 py-2 sm:py-4">

          <a
            href="https://github.com/Moxsahil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            GitHub <ArrowUpRight size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-barak/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
