"use client";

import { Landmark } from "lucide-react";
import Image from "next/image";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";
import { data } from "@/data";
import SectionHeader from "./SectionHeader";


export default function AffiliationsSection() {
  const { affiliations, sections } = data.credentials;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 bg-[#123C2B] py-20 text-white md:py-28">
      <div className="relative z-10 container mx-auto px-5">
        <SectionHeader
          eyebrow={sections.affiliations.eyebrow}
          title={sections.affiliations.title}
          description={sections.affiliations.description}
          accent="emerald"
        />

        <div
          ref={ref}
          className={cn(
            "mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 transition-all duration-700",
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {affiliations.map((item) => (
            <article
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-md border border-white/10 bg-neutral-950/70 transition-all duration-500 hover:border-[#E46A2A]/30 hover:bg-neutral-900/50"
            >
              <div className="absolute top-0 inset-x-0 z-10 h-px bg-linear-to-r from-transparent via-[#E46A2A]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {item.image && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />

                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-[#123C2B]/40 text-[#E46A2A]/90 backdrop-blur-sm">
                      <Landmark size={18} />
                    </span>
                    {item.year && (
                      <span className="rounded-md border border-white/10 bg-[#123C2B]/40 px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] text-white/70 backdrop-blur-sm">
                        {item.year}
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                {!item.image && (
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 text-[#E46A2A]/90">
                      <Landmark size={18} />
                    </span>
                    {item.year && (
                      <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                        {item.year}
                      </span>
                    )}
                  </div>
                )}

                <h3 className="mt-4 text-lg font-bold tracking-tight text-white leading-snug sm:text-xl">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-white/6 pt-4">
                  <span className="h-1 w-1 rounded-md bg-[#E46A2A]/50" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600">
                    {item.type}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
