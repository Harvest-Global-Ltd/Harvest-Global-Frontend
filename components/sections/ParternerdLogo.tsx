"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const partnerLogos = Array.from(
  { length: 11 },
  (_, i) => `/images/partnered-logo/${i + 1}.png`,
);

export default function ParternerdLogo() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const marquee = marqueeRef.current;

      if (!marquee) return;

      const items = gsap.utils.toArray<HTMLElement>(".partner-logo");

      const totalWidth = items
        .slice(0, partnerLogos.length)
        .reduce((total, item) => total + item.offsetWidth + 20, 0);

      const animation = gsap.to(marquee, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      });

      // Slightly slow down when hovering
      marquee.addEventListener("mouseenter", () => {
        gsap.to(animation, {
          timeScale: 0.25,
          duration: 0.5,
        });
      });

      marquee.addEventListener("mouseleave", () => {
        gsap.to(animation, {
          timeScale: 1,
          duration: 0.5,
        });
      });

      return () => {
        animation.kill();
      };
    },
    { scope: marqueeRef },
  );

  return (
    <section className="w-full overflow-hidden bg-white   text-[#173B32] py-10">
      {/* Header */}
      <div className="mx-auto mb-12 max-w-7xl px-5 text-center">
   

        <h2 className="mt-3 font-bold text-3xl uppercase tracking-tight text-[#123C2B] md:text-5xl">
         Strategic Partners
        </h2>

       
      </div>

      {/* Logo Marquee */}
      <div className="relative w-full">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#F7FAF8] to-transparent md:w-40" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#F7FAF8] to-transparent md:w-40" />

        <div
          ref={marqueeRef}
          className="flex w-max gap-5"
        >
          {/* First set */}
          {partnerLogos.map((logo, index) => (
            <LogoCard
              key={`first-${index}`}
              src={logo}
              index={index}
            />
          ))}

          {/* Duplicate set for seamless loop */}
          {partnerLogos.map((logo, index) => (
            <LogoCard
              key={`second-${index}`}
              src={logo}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoCard({
  src,
  index,
}: {
  src: string;
  index: number;
}) {
  return (
    <div
      className="
        partner-logo
        flex h-24 w-44 shrink-0
        items-center justify-center
        rounded-md
        border border-[#D5E3DC]
        bg-white
        px-6
      "
    >
      <Image
        src={src}
        alt={`Partner ${index + 1}`}
        width={180}
        height={80}
        draggable={false}
        className="max-h-14 w-auto max-w-full object-contain"
      />
    </div>
  );
}