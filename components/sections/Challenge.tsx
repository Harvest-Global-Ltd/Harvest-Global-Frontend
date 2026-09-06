"use client";

import React from "react";
import { Layers3, BrainCircuit, Server, ShieldCheck } from "lucide-react";

import Reveal from "@/components/ui/reveal/Reveal";

const challenges = [
  {
    title: "Fragmented Earth Data",
    icon: Layers3,
    desc: "Satellite, weather, ground and geospatial datasets remain disconnected.",
  },
  {
    title: "Limited Predictive Intelligence",
    icon: BrainCircuit,
    desc: "Observation often stops at monitoring, leaving critical decisions reactive.",
  },
  {
    title: "Infrastructure Constraints",
    icon: Server,
    desc: "Conventional cloud environments can create challenges around scale, latency, security and data governance.",
  },
  {
    title: "Data & Technology Sovereignty",
    icon: ShieldCheck,
    desc: "Critical Earth intelligence requires greater control over data, compute and AI capabilities.",
  },
];

const Challenge = () => {
  return (
    <section
      id="challenge"
      className="
        relative min-h-screen w-full overflow-hidden
        px-5 py-20 text-white
        sm:py-24
        md:py-28
      "
    >
      {/* Background */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[url('/images/site-bg/bg6.png')]
          bg-cover bg-center
        "
      />

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#031812]/50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <Reveal variant="group" duration={1}>
          {/* Header */}
          <div
            className="
              mb-10 flex flex-col gap-8
              sm:mb-12
              md:mb-14
              lg:flex-row lg:items-start lg:justify-between
            "
          >
            <div className="max-w-4xl">
              <h2
                className="
                  text-4xl font-bold tracking-tight text-[#E7F1EB]
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  uppercase
                "
              >
                Challenges
              </h2>

              <p
                className="
                  mt-4 max-w-3xl
                  text-sm leading-6 text-[#E7F1EB]/70
                  sm:text-base sm:leading-7
                  md:mt-6 md:text-lg
                "
              >
                Every day, satellites, sensors, weather systems and ground
                networks generate enormous volumes of Earth data. Yet much of
                this data remains fragmented, difficult to process and
                disconnected from real-world decision-making.
              </p>
            </div>

            {/* Right heading */}
            <div className="hidden lg:block">
              <div className="border-r border-[#2E7657]/60 pr-6 text-right">
                <div
                  className="
                    text-lg font-semibold
                    uppercase leading-tight
                    tracking-[0.15em]
                    text-[#E7F1EB]
                  "
                >
                  <span className="block">Real Insights</span>
                  <span className="block">Real Impact</span>
                  <span className="block text-[#E46A2A]">
                    Across Sectors
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Challenges */}
          <div
            className="
              relative mx-auto w-full max-w-5xl
              overflow-hidden
              rounded-lg
              border border-[#E7F1EB]/15
              bg-linear-to-b from-[#08291E]/50 to-[#08291E]/75
              backdrop-blur-sm
            "
          >
            {/* Connector */}
            <div
              className="
                pointer-events-none absolute
                left-[42px] top-8 bottom-8
                hidden w-px
                bg-gradient-to-b
                from-transparent
                via-[#8BEA55]/40
                to-transparent
                sm:block
                md:left-[52px]
              "
            />

            {challenges.map((challenge) => {
              const Icon = challenge.icon;

              return (
                <article
                  key={challenge.title}
                  className="
                    group relative
                    border-b border-[#E7F1EB]/10
                    px-5 py-5
                    last:border-b-0
                    bg-[#0A1612]/85

                    hover:bg-[#123C2B]/40

                    sm:flex sm:items-center
                    sm:px-6 sm:py-6
                  "
                >
                  {/* Content wrapper */}
                  <div className="flex items-start sm:items-center">
                    {/* Icon */}
                    <div
                      className="
                        relative z-10
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-[#8BEA55]/40
                        bg-[#08291E]
                        transition-all duration-300

                        sm:h-12 sm:w-12

                        group-hover:border-[#8BEA55]
                        group-hover:shadow-[0_0_24px_rgba(139,234,85,0.15)]
                      "
                    >
                      <Icon
                        strokeWidth={1.5}
                        className="
                          h-5 w-5
                          text-[#8BEA55]
                          transition-transform duration-300
                          group-hover:scale-110
                        "
                      />
                    </div>

                    {/* Text */}
                    <div
                      className="
                        ml-4 min-w-0
                        sm:ml-5
                      "
                    >
                      <h3
                        className="
                          text-lg font-bold
                          leading-tight tracking-tight
                          text-[#E7F1EB]
                          transition-colors duration-300

                          sm:text-xl
                          md:text-2xl

                          group-hover:text-white
                        "
                      >
                        {challenge.title}
                      </h3>

                      <p
                        className="
                          mt-1.5
                          max-w-3xl
                          text-sm font-light
                          leading-5
                          text-[#E7F1EB]/65

                          sm:text-sm
                          md:text-base md:leading-6
                        "
                      >
                        {challenge.desc}
                      </p>
                    </div>
                  </div>

                  {/* Hover line */}
                  <div
                    className="
                      absolute bottom-0 left-0
                      h-px w-0
                      bg-[#8BEA55]
                      transition-all duration-500
                      group-hover:w-full
                    "
                  />
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Challenge;