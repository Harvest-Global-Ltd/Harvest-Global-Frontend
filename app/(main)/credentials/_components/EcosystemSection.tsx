"use client";

import Image from "next/image";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";
import { data } from "@/data";
import SectionHeader from "./SectionHeader";

export default function EcosystemSection() {
  const ecosystemItems = [
    {
      id: "ecosystem-1",
      image: "/images/ecosystem/1.png",
      title:
        "Represented Earth Observation at India Japan Space Delegation, Tokyo",
    },
    {
      id: "ecosystem-2",
      image: "/images/ecosystem/2.png",
      title: "Strategic Discussions with Japan Space and SpaceTech Segment",
    },
    {
      id: "ecosystem-3",
      image: "/images/ecosystem/3.png",
      title: "At SpaceTide and CIC, Tokyo",
    },
    {
      id: "ecosystem-4",
      image: "/images/ecosystem/4.png",
      title: "Strategic Alliance with IIRS/Assam Space ASSAC/ASSAM",
    },
    {
      id: "ecosystem-5",
      image: "/images/ecosystem/5.png",
      title:
        "Represented Earth Observation Industry at INSPACE AND VC - IIMA Ventures",
    },
    {
      id: "ecosystem-6",
      image: "/images/ecosystem/6.png",
      title:
        "Strategic Alliance with NSRCs/RRSCs/State Space Application Centers",
    },
  ];
  const { ecosystem, sections } = data.credentials;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="relative w-full min-h-screen overflow-hidden border-t border-white/10 bg-[#123C2B] py-20 text-white md:py-28">
      <div className="relative z-10 container mx-auto px-5">
        <SectionHeader
          eyebrow={sections.ecosystem.eyebrow}
          title={sections.ecosystem.title}
          description={sections.ecosystem.description}
          accent="orange"
        />

        <div
          ref={ref}
          className={cn(
            "relative mt-14 transition-all duration-700",
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <div className="absolute top-1 bottom-1 left-4 w-px bg-white/10 sm:left-6" />

<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  {ecosystemItems.map((item) => (
    <div
      key={item.id}
      className="
        overflow-hidden
        rounded-md
        border border-white/10
        bg-[#071B14]
      "
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <div className="px-6 py-5">
        <h3 className="text-xl font-semibold leading-snug text-white">
          {item.title}
        </h3>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}
