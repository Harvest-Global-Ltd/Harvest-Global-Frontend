"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { data } from "@/data";
import SectionHeader from "./SectionHeader";
import RecognitionCard from "./RecognitionCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function RecognitionSection() {
  const { recognition, media, sections } = data.credentials;
  const scroller = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".recognition-head", {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
        });

        gsap.from(".recognition-card", {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.2,
          scrollTrigger: {
            trigger: scroller.current,
            start: "top 80%",
          },
        });
      }, scroller);

      return () => ctx.revert();
    },
    { scope: scroller },
  );

  return (
    <section className="relative w-full overflow-hidden border-t py-20 text-white md:py-28">
      <div className="container mx-auto px-5 py-20">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-7xl">
          Credentials and Recoginzation
        </h1>
      </div>
      <div ref={scroller} className="relative z-10 container mx-auto px-5">
        <div className="recognition-head">
          <SectionHeader
            eyebrow={sections.recognition.eyebrow}
            title={sections.recognition.title}
            description={sections.recognition.description}
            accent="emerald"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recognition.map((item) => (
            <div className="recognition-card" key={item.id}>
              <RecognitionCard item={item} />
            </div>
          ))}

          {media.map((item, i) => (
            <article
              key={item.id}
              className="recognition-card group relative flex flex-col overflow-hidden rounded-md border border-white/10 bg-[#0E2E20] transition-all duration-500 hover:-translate-y-1 hover:border-[#E46A2A]/40"
            >
              {item.image && (
                <a
                  href={item.link || "#"}
                  target={item.link ? "_blank" : undefined}
                  rel={item.link ? "noreferrer" : undefined}
                  aria-label={item.title}
                  className="relative block aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />

                  <span className="absolute left-4 top-4 font-mono text-xs text-white/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-[#123C2B]/40 text-neutral-200 backdrop-blur-sm transition-all duration-300 group-hover:border-[#E46A2A]/50 group-hover:bg-[#E46A2A] group-hover:text-white">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              )}

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E46A2A]/90">
                    {item.publication}
                  </p>
                  {item.year && (
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/40">
                      {item.year}
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-lg font-bold tracking-tight text-white leading-snug sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/55 line-clamp-3">
                  {item.description}
                </p>

                {item.link && (
                  <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 transition-colors duration-300 group-hover:text-[#E46A2A]">
                    Read coverage
                    <ArrowUpRight size={12} />
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
