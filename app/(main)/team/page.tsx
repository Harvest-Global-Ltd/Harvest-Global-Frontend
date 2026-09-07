import type { Metadata } from "next";
import React from "react";
import Reveal from "@/components/ui/reveal/Reveal";
import TeamCard from "./_component/TeamCard";
import {
  FlaskConical,
  Layers3,
  Rocket,
  BriefcaseBusiness,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Team — Harvest Global | HG Systems",
  description:
    "Meet the multidisciplinary team at Harvest Global building enterprise-grade GeoAI infrastructure for Earth Observation and climate intelligence.",
  alternates: {
    canonical: "https://www.hgsystems.in/team",
  },
};
const Team = [
  {
    id: "team-1",
    name: "Preeti Chaudhary",
    role: "Founder & CEO",

    image: "/images/team/preetiChaudhary.jpeg",
    prev:"Former IBM HK, incoming Stanford STP Program",
    linkedin: "https://www.linkedin.com/in/chaudhary-preeti-160738199/",
    mail: "preeti.chaudhary@hgsystems.in",
  },
  {
    id: "team-2",
    name: "AVM Pawan Kumar",
    role: "Senior Consultant",

    image: "/images/team/PawanKumar.png",
    prev:"Former DG, DSA",
    linkedin:
    "https://www.linkedin.com/in/air-vice-marshal-pawan-kumar-retd-408577249/",
    mail: "pawan.kumar@hgsystems.in",
  },
  {
    id: "team-3",
    name: "Ritika Verma",
    role: "Program Management Office",

    image: "/images/team/ritika.jpeg",
    prev:"IIT Madras",
    linkedin: "https://www.linkedin.com/in/ritika-verma-2329631ab/",
    mail: "ritika.verma@hgsystems.in",
  },
  {
    id: "team-4",
    name: "Abhishek Yadav",
    role: "Finance and Market Analyst",

    image: "/images/team/abhishek.png",
    prev:"Shaheed Sukhdev College of Business Studies",
    linkedin: "https://www.linkedin.com/in/abhishek-yadav-193717283/",
    mail: "abhishek.yadav@hgsystems.in",
  },
];

const lifecycle = [
  {
    title: "Research",
    icon: FlaskConical,
  },
  {
    title: "Platform",
    icon: Layers3,
  },
  {
    title: "Deployment",
    icon: Rocket,
  },
  {
    title: "Commercialisation",
    icon: BriefcaseBusiness,
  },
];

export default function TeamPage() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[url('/images/site-bg/bg7.png')]
        bg-cover
        bg-center
        text-black
        pb-24
        pt-32
        md:pb-32
        md:pt-32
      "
    >
      {/* Ambient orange glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-10%]
          top-[30%]
          h-[400px]
          w-[400px]
          rounded-full

          bg-[#E46A2A]/5
          blur-[140px]
        "
      />

      <div className="container relative z-10 mx-auto px-5">
        <Reveal variant="group" duration={1}>
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-md bg-[#E46A2A]" />

            <p
              data-reveal="eyebrow"
              className="
                font-mono
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-black/60
              "
            >
              ABOUT US
            </p>
          </div>

          {/* Heading */}
          <h1
            data-reveal="heading"
            className="
              mt-6
              max-w-7xl
space-y-3
              font-bold
              leading-[0.95]
              tracking-tight
              text-black
text-3xl

              lg:text-6xl
            "
          >
            A Multidisciplinary Team for a{" "}
            <span className="text-[#E46A2A]">Multidimensional Planet</span>
          </h1>

          {/* Description */}
          <p
            data-reveal="text"
            className="
              mt-8
              max-w-5xl
              text-base
              leading-relaxed
              text-black
              sm:text-lg
            "
          >
            Harvest Global SSP Pvt Ltd (HG Systems) pioneering Earth
            Intelligence integrates satellite imagery, climate and weather data,
            ground observations and geospatial intelligence into an
            enterprise-grade GeoAI stack, enabling governments and industries to
            move from fragmented data to predictive, actionable intelligence.
          </p>

          <p
            data-reveal="text"
            className="
              mt-6
              max-w-5xl
              text-base
              leading-relaxed
              text-black
              sm:text-lg
            "
          >
            We build Geofoundational AI models and sovereign cloud
            infrastructure empowering governments, insurance providers, and
            global enterprises to address climate resilience, agriculture risk,
            and spatial governance.
          </p>
          <p
            data-reveal="text"
            className="
              mt-6
              max-w-5xl
              text-base
              leading-relaxed
              text-black
              sm:text-lg
            "
          >
            Our multidisciplinary team brings together expertise across AI,
            geospatial science, Earth Observation, climate, aerospace, insurance
            and large-scale technology deployment. From research and foundation
            models to infrastructure and commercial deployment, HG works across
            the complete lifecycle:
          </p>


<div className="mt-8 w-full lg:mt-10">

  <div className="mx-auto flex w-full max-w-[760px] flex-col lg:hidden">
    {lifecycle.map((item, index) => {
      const Icon = item.icon;

      return (
        <React.Fragment key={item.title}>
          <div
            className="
              grid
              grid-cols-[140px_1fr]
              items-center
              gap-6
              md:grid-cols-[150px_1fr]
              md:gap-7
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                justify-self-center
                rounded-2xl
                border
                border-[#E46A2A]/25
                bg-[#E46A2A]/10
                text-[#E46A2A]
                md:h-[72px]
                md:w-[72px]
              "
            >
              <Icon
                className="h-7 w-7 md:h-8 md:w-8"
                strokeWidth={1.7}
              />
            </div>

            {/* Text */}
            <div>
              <p
                className="
                  mt-1
                  text-2xl
                  font-bold
                  leading-tight
                  text-black
                  md:text-3xl
                "
              >
                {item.title}
              </p>
            </div>
          </div>

          {index < lifecycle.length - 1 && (
            <div
              className="
                flex
                h-10
                w-[140px]
                items-center
                justify-center
                md:w-[150px]
              "
            >
              <ArrowDown
                className="h-6 w-6 text-[#E46A2A]"
                strokeWidth={1.5}
              />
            </div>
          )}
        </React.Fragment>
      );
    })}
  </div>

  {/* Desktop */}
  <div
    className="
      hidden
      lg:grid
      lg:grid-cols-4
      lg:gap-8
    "
  >
    {lifecycle.map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={item.title}
          className="relative flex items-center gap-4"
        >
          <div
            className="
              flex
              h-16
              w-16
              shrink-0
              items-center
              justify-center
              rounded-2xl
              border
              border-[#E46A2A]/25
              bg-[#E46A2A]/10
              text-[#E46A2A]
            "
          >
            <Icon
              className="h-7 w-7"
              strokeWidth={1.7}
            />
          </div>

          <div>
           

            <p className="mt-1 text-lg font-bold text-black">
              {item.title}
            </p>
          </div>

          {index < lifecycle.length - 1 && (
            <ArrowRight
              className="
                absolute
                -right-6
                top-1/2
                h-5
                w-5
                -translate-y-1/2
                text-[#E46A2A]
              "
              strokeWidth={1.5}
            />
          )}
        </div>
      );
    })}
  </div>
</div>
        </Reveal>

        {/* Team */}
        <div
          className="
            mt-20
            grid
            w-full
            grid-cols-1
            gap-7
            lg:grid-cols-2
          "
        >
          {Team.map((member) => (
            <div key={member.id} className="team-card w-full">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
