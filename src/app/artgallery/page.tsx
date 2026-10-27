"use client";
import { ArrowLeft, ExternalLink, Twitter, Undo2 } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface VideoFrameProps {
  videoUrl: string;
  liveUrl?: string;
  twitterUrl?: string;
}

const VideoFrame: React.FC<VideoFrameProps> = ({
  videoUrl,
  liveUrl,
  twitterUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);


  // a page of autoplaying videos decodes all of them at once and stalls the
  // browser, so each one loads and plays only while it is on screen
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // start fetching a little before the frame scrolls in, but only decode
    // and play while most of it is visible
    const loader = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.preload = "auto";
          loader.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    const player = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.5 },
    );

    loader.observe(video);
    player.observe(video);
    return () => {
      loader.disconnect();
      player.disconnect();
    };
  }, []);


  return (
    <div
      className="group relative mx-auto max-w-[650px] overflow-hidden rounded-2xl outline outline-offset-4 outline-[#1C1C1F]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Container */}
      <div className="relative aspect-video overflow-hidden bg-[#0A0A0B]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          controls={false}
          preload="none"
          style={{
            pointerEvents: "none",
          }}
        >
          <source src={videoUrl} type={videoUrl.endsWith(".webm") ? "video/webm" : "video/mp4"} />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

        {/* Subtle Grid Pattern Overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? "opacity-10" : "opacity-0"
            }`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="absolute right-2 bottom-2 flex gap-2 transition-all duration-300">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-2 rounded-lg border border-white/10 bg-neutral-800 px-3 py-2 text-white transition-all duration-300 hover:bg-neutral-900"
          >
            <span className="text-xs font-medium">View Live</span>
            <ExternalLink
              size={14}
              className="transition-transform duration-300"
            />
          </a>
        )}

        {twitterUrl && (
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white transition-all duration-300 hover:bg-white/20"
          >
            <svg
              className="inline-block h-4 w-4 shrink-0"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9014 0H22.5816L14.5415 9.31897L24 22H16.5941L10.7935 14.309L4.15631 22H0.473926L9.07356 12.0323L0 0H7.59394L12.8372 7.02985L18.9014 0ZM17.6098 19.7662H19.649L6.48589 2.11651H4.29759L17.6098 19.7662Z"
                fill="#A4A4A4"
              />
            </svg>

            <span className="text-xs font-medium">View</span>
          </a>
        )}
      </div>
    </div>
  );
};

const ArtGallery = () => {
  // previews of Mox UI components; each links to its page on moxui.dev
  const projects = [
    {
      id: 0,
      name: "Folder component",
      videoUrl: "/video/moxui/foldercomponent.mp4",
      liveUrl: "https://moxui.dev/components/foldercomponent",
    },
    {
      id: 1,
      name: "Contribution skyline",
      videoUrl: "/video/moxui/contributionskyline.mp4",
      liveUrl: "https://moxui.dev/components/contributionskyline",
    },
    {
      id: 2,
      name: "Duration picker",
      videoUrl: "/video/moxui/durationpicker.mp4",
      liveUrl: "https://moxui.dev/components/durationpicker",
    },
    {
      id: 3,
      name: "Fluid orb",
      videoUrl: "/video/moxui/fluidorb.mp4",
      liveUrl: "https://moxui.dev/components/fluidorb",
    },
    {
      id: 4,
      name: "Gravity letters",
      videoUrl: "/video/moxui/gravityletters.mp4",
      liveUrl: "https://moxui.dev/components/gravityletters",
    },
    {
      id: 5,
      name: "OTP input",
      videoUrl: "/video/moxui/otpinput.mp4",
      liveUrl: "https://moxui.dev/components/otpinput",
    },
    {
      id: 6,
      name: "Matrix orb",
      videoUrl: "/video/moxui/matrixorb.mp4",
      liveUrl: "https://moxui.dev/components/matrixorb",
    },
    {
      id: 7,
      name: "Animated counter",
      videoUrl: "/video/moxui/animatedcounter.mp4",
      liveUrl: "https://moxui.dev/components/animatedcounter",
    },
    {
      id: 8,
      name: "Animated beam",
      videoUrl: "/video/moxui/animatedbeam.mp4",
      liveUrl: "https://moxui.dev/components/animatedbeam",
    },
    {
      id: 9,
      name: "Liquid tab bar",
      videoUrl: "/video/moxui/liquidtabbar.mp4",
      liveUrl: "https://moxui.dev/components/liquidtabbar",
    },
    {
      id: 10,
      name: "Delete button",
      videoUrl: "/video/moxui/deletbutton.mp4",
      liveUrl: "https://moxui.dev/components/deletebutton",
    },
    {
      id: 11,
      name: "Step player",
      videoUrl: "/video/moxui/stepplayer.mp4",
      liveUrl: "https://moxui.dev/components/stepplayer",
    },
    {
      id: 12,
      name: "Grid reveal",
      videoUrl: "/video/moxui/imagegen.mp4",
      liveUrl: "https://moxui.dev/components/gridreveal",
    },
    {
      id: 13,
      name: "Notification bell",
      videoUrl: "/video/moxui/notification.mp4",
      liveUrl: "https://moxui.dev/components/notificationbell",
    },
    {
      id: 14,
      name: "Emoji reaction",
      videoUrl: "/video/moxui/emojireaction.mp4",
      liveUrl: "https://moxui.dev/components/emojireaction",
    },
    {
      id: 15,
      name: "Code block",
      videoUrl: "/video/moxui/codeblock.mp4",
      liveUrl: "https://moxui.dev/components/codeblock",
    },
    {
      id: 16,
      name: "Scroll progress",
      videoUrl: "/video/moxui/scrollprogress.mp4",
      liveUrl: "https://moxui.dev/components/scrollprogressindicator",
    },
    {
      id: 17,
      name: "Bounce sidebar",
      videoUrl: "/video/moxui/bouncesidebar.mp4",
      liveUrl: "https://moxui.dev/components/bouncesidebar",
    },
    {
      id: 18,
      name: "Hook sidebar",
      videoUrl: "/video/moxui/hooksiebarvid.mp4",
      liveUrl: "https://moxui.dev/components/hooksidebar",
    },
    {
      id: 19,
      name: "Proximity sidebar",
      videoUrl: "/video/moxui/proximitysidebar.mp4",
      liveUrl: "https://moxui.dev/components/proximitysidebar",
    },
    {
      id: 20,
      name: "GitHub activity",
      videoUrl: "/video/moxui/githubgraphcomponentblack.mp4",
      liveUrl: "https://moxui.dev/components/githubactivity",
    },
  ];
  const router = useRouter()

  return (
    <div className="bg-[#09090B] min-h-screen">
      <Container>
        <div className="w-full md:px-8">
          <div className="text-white px-4 md:px-6 max-w-7xl mx-auto">

            {/* Back button */}
            <div className="mt-8 mb-10">
              <Link href="/">
                <Button variant="primary" size="lg">
                  <Undo2 className="w-4 h-4 mr-2" /> Back
                </Button>
              </Link>
            </div>

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-semibold font-space-grotesk mb-3">
                Art Gallery
              </h1>
              <p className="text-lg text-neutral-500">
                Animated React components I built for Mox UI, from design to code.
              </p>
            </div>

            <hr className="border-[0.5px] border-[#424244] mb-8" />

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-16">
              {projects.map((project) => (
                <div key={project.id} className="flex flex-col gap-3">
                  <VideoFrame
                    videoUrl={project.videoUrl}
                    liveUrl={project.liveUrl}
                  />
                  <p className="font-space-grotesk px-1 text-base font-medium text-neutral-300">
                    {project.name}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default ArtGallery;
