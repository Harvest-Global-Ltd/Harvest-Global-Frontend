"use client";

import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";
import { data } from "@/data";
import SectionHeader from "./SectionHeader";

export default function ForumsSection() {
  const { forums, sections } = data.credentials;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="relative w-full overflow-hidden border-t border-white/10 bg-[#123C2B] py-20 text-white md:py-28">
      <div className="relative z-10 container mx-auto px-5">
        <SectionHeader
          eyebrow={sections.forums.eyebrow}
          title={sections.forums.title}
          description={sections.forums.description}
          accent="emerald"
        />

        <div
          ref={ref}
          className={cn(
            "mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 transition-all duration-700",
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {forums.map((item) => (
            <article
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-md border border-white/10 bg-neutral-950/70 transition-all duration-500 hover:border-white/20 hover:bg-neutral-900/50"
            >
              {item.image && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />

                  {item.year && (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#123C2B]/40 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E46A2A]/90 backdrop-blur-sm">
                      <CalendarDays size={12} />
                      {item.year}
                    </span>
                  )}
                </div>
              )}

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                {!item.image && item.year && (
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E46A2A]/90">
                    <CalendarDays size={12} />
                    {item.year}
                  </span>
                )}

                <h3 className="mt-2 text-lg font-bold tracking-tight text-white leading-snug sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/6 pt-4">
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                    <MapPin size={12} />
                    {item.venue}
                  </span>
                  {item.location && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
                      {item.location}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
