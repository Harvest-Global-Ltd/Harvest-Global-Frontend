"use client";

import Image from "next/image";
import AccordionGallery from "../ui/AccordinGallery";

interface TechCardProps {
  title: string;
  image: string;
  desc: string;
}

export function TechCard({ title, image, desc }: TechCardProps) {
  return (
    <article
      className="
        group relative
        flex h-[435px]
        w-[230px]
        shrink-0
        flex-col
        overflow-hidden
        rounded-xl
        bg-[#0D1D20]
        text-white
        shadow-[0_10px_30px_rgba(0,0,0,0.12)]
        transition-all duration-500
        hover:-translate-y-1
      "
    >
      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h3
          className="
            max-w-[200px]
            text-xl
            font-medium
            leading-[1.15]
            tracking-tight
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-4
            max-w-[205px]
            text-[13px]
            leading-[1.45]
            text-white/65
          "
        >
          {desc}
        </p>
      </div>

      {/* Image */}
      <div className="relative h-[145px] w-full shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* Subtle image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1D20]/30 to-transparent" />
      </div>
    </article>
  );
}
const techStack = [
  {
    title: "Earth Data",
    image: "/images/tech/1.png",
    svgLink: "/svg/earth-data.svg",
    desc: "Satellite, weather, ground and geospatial datasets brought together to create a unified foundation for Earth and Weather Intelligence.",
  },
  {
    title: "Unified GeoAI Stack",
    image: "/images/tech/2.png",
    svgLink: "/svg/geoai-stack.svg",
    desc: "An integrated GeoAI technology stack connecting data, compute, models and intelligence workflows into a unified platform for Earth and Weather Intelligence.",
  },
  {
    title: "Foundation Models / AI",
    image: "/images/tech/3.png",
    svgLink: "/svg/foundation-models.svg",
    desc: "Foundation and fine-tuned GeoAI models designed to understand, analyse and generate intelligence from complex Earth and environmental datasets.",
  },
  {
    title: "Sovereign Private AI Cloud",
    image: "/images/tech/4.png",
    svgLink: "/svg/private-ai-cloud.svg",
    desc: "Secure and scalable AI infrastructure providing sovereign control over data, compute and models for government and enterprise workloads.",
  },
  {
    title: "Earth Intelligence",
    image: "/images/tech/5.png",
    svgLink: "/svg/earth-intelligence.svg",
    desc: "Transforming Earth observations and AI capabilities into actionable intelligence for monitoring, prediction and informed decision-making.",
  },
  {
    title: "Government + Industry Applications",
    image: "/images/tech/6.png",
    svgLink: "/svg/government-industry.svg",
    desc: "Deploying Earth Intelligence into real-world applications across government and industry, enabling faster, smarter and more informed decisions.",
  },
];

function Technology() {
  return (
    <section
      id="technology"
      className="relative min-h-screen overflow-hidden bg-[url('/images/site-bg/bg1.png')] bg-cover bg-center py-28"
    >
      
      <div className="container relative mx-auto px-5">
        {/* Header */}
        <div className="header">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            {/* Left */}
            <div>
              <h2 className="w-full max-w-2xl text-4xl font-bold tracking-tight text-black md:text-6xl lg:text-7xl">
                TECHNOLOGY
              </h2>

              <p className="mt-7 max-w-4xl text-base leading-7 text-black md:text-lg">
                Our{" "}
                <span className="font-semibold text-[#E46A2A]">
                  Unified GeoAI Stack
                </span>{" "}
                combines data infrastructure, foundation models, GeoAnalytics,
                AI compute and edge intelligence to move from observation to
                prediction and decision support.
              </p>
            </div>

            {/* Right */}
            <div className=" hidden lg:flex flex-col gap-3">
              <h3 className="text-lg font-semibold uppercase tracking-widest text-green-900">
                <span className="block">Earth</span>
                <span className="block">Intelligence</span>
                <span className="block">at scale</span>
              </h3>

              <p className="text-md font-normal uppercase text-black/55">
                <span className="block">better data.</span>
                <span className="block">clearer insights</span>
                <span className="block">a more resilient</span>
                <span className="block">tomorrow</span>
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="content mt-16">
          <div className="">
            <AccordionGallery
                height={435}
              items={techStack}
              
            />
          </div>
    
        </div>
      </div>
    </section>
  );
}

export default Technology;
