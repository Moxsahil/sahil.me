import React from "react";

type EducationItem = {
  institution: string;
  location: string;
  qualification: string;
  duration: string;
  score: string;
  logo: string;
};

const education: EducationItem[] = [
  {
    institution: "PDM University",
    location: "Bahadurgarh, Haryana",
    qualification: "B.Tech",
    duration: "2023",
    score: "7.31",
    logo: "/education/pdm.png",
  },
  {
    institution: "DAV Centenary Public School",
    location: "Rohtak, Haryana",
    qualification: "Class 12th",
    duration: "2019",
    score: "7.0",
    logo: "/education/dav.png",
  },
  {
    institution: "DAV Centenary Public School",
    location: "Rohtak, Haryana",
    qualification: "Class 10th",
    duration: "2017",
    score: "8.6",
    logo: "/education/dav.png",
  },
];

const EducationSection = () => {
  return (
    <div className="px-4 py-10 md:px-[3%]">
      <ol className="relative flex flex-col gap-6 md:gap-7">
        {/* rail: sits under the nodes, fades out past the last entry */}
        <span
          aria-hidden="true"
          className="absolute top-3 bottom-3 left-[5px] w-px bg-gradient-to-b from-white/25 via-[#1C1C1F] to-transparent md:left-[148px]"
        />

        {education.map((item, index) => (
          <li
            key={item.qualification}
            className="relative grid grid-cols-[12px_minmax(0,1fr)] gap-x-4 md:grid-cols-[124px_48px_minmax(0,1fr)] md:gap-x-0"
          >
            <span className="text-secondary col-start-2 row-start-1 pb-2 font-mono text-xs tabular-nums md:col-start-1 md:pt-[22px] md:pb-0 md:text-right md:text-sm">
              {item.duration}
            </span>

            <span
              aria-hidden="true"
              className={`relative z-10 col-start-1 row-span-2 row-start-1 mt-1 h-[11px] w-[11px] rounded-full border-[1.5px] md:col-start-2 md:row-span-1 md:mt-[25px] md:ml-px md:justify-self-center ${
                index === 0
                  ? "border-white bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.25)]"
                  : "border-white/25 bg-[#09090B]"
              }`}
            />

            <div className="col-start-2 flex items-center justify-between gap-3 rounded-2xl border border-white/10 p-4 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.02] md:col-start-3 md:p-5">
              <div className="flex min-w-0 items-center gap-3 md:gap-4">
                <div className="relative h-10 w-10 shrink-0 md:h-12 md:w-12">
                  <span className="absolute -inset-[2px] rounded-[14px] border border-white/20" />
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[12px] border border-white/10 bg-white p-1">
                    <img
                      src={item.logo}
                      alt={item.institution}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex min-w-0 flex-col justify-center">
                  <h3 className="font-space-grotesk flex flex-wrap items-center gap-2 text-lg leading-snug font-semibold tracking-tight md:text-2xl">
                    <span className="break-words">{item.institution}</span>
                    <span className="text-secondary rounded-sm border border-white/15 px-2 py-0.5 font-sans text-[10px] font-normal whitespace-nowrap md:text-sm">
                      {item.qualification}
                    </span>
                  </h3>
                  <span className="text-secondary/80 text-xs leading-tight md:text-sm">
                    {item.location}
                  </span>
                </div>
              </div>

              <div className="shrink-0 text-right">
                <div className="font-mono text-sm text-white tabular-nums md:text-base">
                  {item.score}
                </div>
                <div className="text-secondary/70 font-mono text-[10px] tracking-wider uppercase md:text-xs">
                  CGPA
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default EducationSection;
