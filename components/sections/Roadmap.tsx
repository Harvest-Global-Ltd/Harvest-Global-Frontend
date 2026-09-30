"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TopographicBackground from "../ui/Topography";
import RoadmapCard from "../ui/RoadmapCard";

gsap.registerPlugin(ScrollTrigger);

interface RoadmapItem {
  year: string;
  title: string;
  description: string;
  icon: "layers" | "server" | "cpu" | "chart" | "globe" | "satellite" | "orbit";
  accent: "emerald" | "orange" | "indigo";
}
const roadmapData: RoadmapItem[] = [
  {
    year: "2021–2024",
    title: "Founding & Early Growth",
    description:
      "Early investments, Government & BFSI commercial projects in AgriStack / PMFBY.",
    icon: "layers",
    accent: "emerald",
  },
  {
    year: "2025",
    title: "Technology Stack Expansion",
    description:
      "Earth Observation / Earth Intelligence expansion; strategic investment proposals with IN-SPACe & private investors.",
    icon: "globe",
    accent: "emerald",
  },
  {
    year: "2026",
    title: "GeoAI Stack Build",
    description:
      "Joint ANRF ACE Program of about 200 Cr with IITG, NESAC, ASSAC, HPE and other government, Space and Technology Research Partners",
    icon: "layers",
    accent: "orange",
  },
  {
    year: "2027",
    title: "Indian Earth Intelligence GeoFM",
    description:
      "Launch of GeoFM Model; AI at Edge kickstart; Ground Station expansion; scale-all AI deployments; Series A raise.",
    icon: "globe",
    accent: "orange",
  },
  {
    year: "2028",
    title: "AI at Edge – Satellite Systems",
    description:
      "AI embedded at satellite systems; scale & deploy as AIaaS / PaaS / IaaS.",
    icon: "satellite",
    accent: "indigo",
  },
  {
    year: "2029+",
    title: "Orbital AI & Beyond",
    description:
      "Expanding AI stack for orbital launches and next-generation space intelligence.",
    icon: "orbit",
    accent: "emerald",
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative w-full min-h-screen md:h-[130vh] py-24 text-white  md:overflow-hidden"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/site-bg/bg2.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-0">
        <TopographicBackground />
      </div>

      <div className="relative z-10 mx-auto flex h-full container px-5 flex-col">
        {/* Header */}
        <div className="">
          <h2 className="w-full max-w-2xl text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            HG Roadmap
          </h2>

          <p className="mt-3 text-sm text-white/60 md:text-base">
            Journey so far and key future milestones
          </p>
        </div>

        {/* Timeline */}
        <div className="relative hidden md:block mt-16 min-h-0 flex-1">
          {/* Center line */}
          <div className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-white/20" />

          <div className="flex h-full flex-col justify-between">
            {roadmapData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className="relative grid min-h-0 flex-1 grid-cols-2 items-center"
                >
                  {/* Left card */}
                  <div className={isLeft ? "pr-10" : ""}>
                    {isLeft && <RoadmapCard item={item} />}
                  </div>

                  {/* Right card */}
                  <div className={!isLeft ? "pl-10" : ""}>
                    {!isLeft && <RoadmapCard item={item} />}
                  </div>

                  {/* Connector */}
                  <div
                    className={`absolute top-1/2 h-px w-10 bg-white/25 ${
                      isLeft ? "right-1/2" : "left-1/2"
                    }`}
                  />

                  {/* Node */}
                  <div className="absolute left-1/2 top-1/2 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#123C2B]">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        item.accent === "orange"
                          ? "bg-[#E46A2A]"
                          : "bg-[#5FAF82]"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:hidden">
          <div className="relative pl-7">
            {/* Vertical line */}

            <div className="absolute left-2 top-0 bottom-0 w-px bg-white/20" />

            <div className="flex flex-col gap-5">
              {roadmapData.map((item, index) => (
                <div key={item.year} className="relative">
                  {/* Node */}

                  <div className="absolute -left-7 top-1/2 z-10 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#123C2B]">
                    <div
                      className={`h-1.5 w-1.5 rounded-full ${
                        item.accent === "orange"
                          ? "bg-[#E46A2A]"
                          : "bg-[#5FAF82]"
                      }`}
                    />
                  </div>

                  {/* Card */}

                  <RoadmapCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
