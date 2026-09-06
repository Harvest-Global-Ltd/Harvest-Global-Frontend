"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Leaf,
  Cloud,
  TriangleAlert,
  Building2,
  ShieldCheck,
  Wind,
  TreePine,
  Plus,
  Minus,
  type LucideIcon,
} from "lucide-react";

interface ApplicationSubtopic {
  title: string;
  desc: string;
  img: string;
}

interface Application {
  id: string;
  shortLabel: string;
  label: string;
  alt: string;
  description: string;
  image: string;
  subtopic: readonly ApplicationSubtopic[];
}

interface ApplicationExpandedProps {
  applications: Application[];
}

const heroTitles: Record<string, string> = {
  Agriculture: "SMARTER AGRICULTURE",
  "Climate Intelligence": "A MORE RESILIENT TOMORROW",
  "Disaster Management": "PREPARE BEFORE IMPACT",
  "Urban Planning": "BUILDING BETTER CITIES",
  Insurance: "INTELLIGENCE FOR BETTER RISK",
  "Renewable Energy": "POWERING A SUSTAINABLE FUTURE",
  Forestry: "PROTECTING OUR LIVING LANDSCAPES",
};

const icons: Record<string, LucideIcon> = {
  Agriculture: Leaf,
  "Climate Intelligence": Cloud,
  "Disaster Management": TriangleAlert,
  "Urban Planning": Building2,
  Insurance: ShieldCheck,
  "Renewable Energy": Wind,
  Forestry: TreePine,
};

export default function ApplicationExpanded({
  applications,
}: ApplicationExpandedProps) {
  const [openId, setOpenId] = useState<string | null>(
    applications[0]?.id ?? null
  );

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-2.5">
      {applications.map((app, idx) => {
        const isOpen = openId === app.id;
        const heroTitle = heroTitles[app.label] ?? app.label;
        const Icon = icons[app.label] ?? Leaf;
        const number = String(idx + 1).padStart(2, "0");

        return (
          <div
            key={app.id}
            className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
              isOpen
                ? "border-[#0BAE7C]/60 bg-[#04241C]"
                : "border-white/10 bg-[#0A2420]/60"
            }`}
          >
            {/* Row header */}
            <button
              type="button"
              onClick={() => toggle(app.id)}
              aria-expanded={isOpen}
              className="relative flex h-16 w-full items-center overflow-hidden md:h-[70px]"
            >
              {/* Background image, dim */}
              <Image
                src={app.image}
                alt=""
                fill
                className="object-cover opacity-25"
              />
              <div
                className={`absolute inset-0 ${
                  isOpen
                    ? "bg-gradient-to-r from-[#0BAE7C]/90 via-[#0BAE7C]/70 to-[#04241C]/80"
                    : "bg-gradient-to-r from-[#031812]/95 via-[#031812]/80 to-[#031812]/60"
                }`}
              />

              {/* Content */}
              <div className="relative z-10 flex w-full items-center gap-3 px-4 md:px-5">
                

                <Icon
                  className={`h-5 w-5 shrink-0 ${
                    isOpen ? "text-white" : "text-white/80"
                  }`}
                  strokeWidth={1.75}
                />

                <span
                  className={`flex-1 text-left text-[13px] font-bold uppercase tracking-wider md:text-sm ${
                    isOpen ? "text-white" : "text-white/85"
                  }`}
                >
                  {app.shortLabel}
                </span>

                {isOpen ? (
                  <Minus className="h-4 w-4 shrink-0 text-white" />
                ) : (
                  <Plus className="h-4 w-4 shrink-0 text-white/70" />
                )}
              </div>
            </button>

            {/* Expandable body */}
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-3 pt-0 md:p-4 md:pt-0">
                  {/* Hero */}
                  <div className="relative min-h-[280px] overflow-hidden rounded-xl md:min-h-[360px]">
                    <Image
                      src={app.image}
                      alt={app.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#031812] via-[#031812]/75 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031812]/90 via-transparent to-transparent" />

                    <div className="relative z-10 flex min-h-[280px] max-w-2xl flex-col justify-end p-5 md:min-h-[360px] md:p-8">
                      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/65">
                        {app.label}
                      </p>
                      <h3 className="max-w-xl text-2xl font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-3xl">
                        {heroTitle}
                      </h3>
                      <div className="my-4 h-[3px] w-12 bg-[#0BAE7C]" />
                      <p className="max-w-2xl text-sm leading-6 text-white/75">
                        {app.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtopics */}
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {app.subtopic.map((item) => (
                      <div
                        key={item.title}
                        className="group relative aspect-[1.6/1] overflow-hidden rounded-xl border border-white/10"
                      >
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-3">
                          <h4 className="text-xs font-bold text-white md:text-sm">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}