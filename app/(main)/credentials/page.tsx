"use client";

import Image from "next/image";
import { ArrowUpRight, Award, Globe2, Mic2 } from "lucide-react";

import Footer from "@/components/footer/Footer";

const recognitions = [
  {
    category: "Economic Times Recognition",
    title: "Named Global Pioneers in Core & Edge AI",
    description:
      "Recognised by Economic Times for pioneering work in Core & Edge AI and advancing the frontier of intelligent technology.",
    image: "/images/credit/eco-reco.png",
    icon: Award,
    accent: "green",
  },
  {
    category: "CIO Prime",
    title: "India's Most Iconic Women Leaders to Watch in 2026",
    description:
      "Recognised by CIO Prime as one of India's women leaders to watch in 2026.",
    image: "/images/credit/cio.png",
    icon: Globe2,
    accent: "orange",
    href: "https://cioprime.com/indias-most-iconic-women-leaders-to-watch-in-2026-preeti-chaudhary/",
  },
  {
    category: "Panel Discussion",
    title: "NASA × ISRO Joint Initiative",
    description:
      "HG's work and perspectives featured in a panel discussion connected to a joint NASA–ISRO initiative in Earth Observation and space technology.",
    image: "/images/credit/panel.png",
    icon: Mic2,
    accent: "green",
    href: "https://www.youtube.com/watch?v=1_ut9zfL6Js",
  },
];

export default function CredentialsPage() {
  return (
    <main className="relative w-full bg-black text-white">
      {/* =========================================================
          HEADING + RECOGNITIONS (single section, no black hero gap)
          BACKGROUND IMAGE HERE
      ========================================================== */}
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-[url('/images/site-bg/credit.png')]
          bg-cover
          bg-top
          bg-no-repeat
          px-5
          pb-28
          pt-32
          sm:px-10
          lg:px-16
          lg:pt-40
        "
      >
        {/* Optional dark overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/30" />

        <div className="relative mx-auto max-w-7xl">
          <h1 className="text-5xl leading-[1.1] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Credentials & recognition
          </h1>

          <p className="mt-3 text-xl font-semibold">
            Recognised. Engaged. Building.
          </p>

          <p className="mt-8 max-w-3xl text-base leading-7 text-white/60 sm:text-lg">
            HG&apos;s work spans national and international forums across Earth
            Observation, SpaceTech, AI and climate technology.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recognitions.map((item) => {
              const Icon = item.icon;
              const isOrange = item.accent === "orange";

              const card = (
                <article
                  className="
                    group
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/10
                    bg-black/80
                    backdrop-blur-sm
                    transition-colors
                    duration-300
                    hover:border-white/25
                  "
                >
                  {/* IMAGE */}
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />

                    <div
                      className={`pointer-events-none absolute inset-0 ${
                        isOrange
                          ? "bg-[#E46A2A]/5"
                          : "bg-[#235738]/5"
                      }`}
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2">
                      <Icon
                        size={15}
                        strokeWidth={1.8}
                        className={
                          isOrange
                            ? "text-[#E46A2A]"
                            : "text-[#6FA486]"
                        }
                      />

                      <p
                        className={`text-xs font-medium uppercase tracking-wide ${
                          isOrange
                            ? "text-[#E46A2A]"
                            : "text-[#6FA486]"
                        }`}
                      >
                        {item.category}
                      </p>
                    </div>

                    <h2 className="mt-3 text-xl font-semibold leading-tight tracking-tight text-white">
                      {item.title}
                    </h2>

                    <p className="mt-3 flex-1 text-sm leading-6 text-white/60">
                      {item.description}
                    </p>

                    {item.href && (
                      <div className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-white/80 transition-colors group-hover:text-white">
                        <span className="border-b border-white/20 group-hover:border-white/60">
                          View source
                        </span>

                        <ArrowUpRight
                          size={14}
                          className="
                            transition-transform
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                          "
                        />
                      </div>
                    )}
                  </div>
                </article>
              );

              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {card}
                </a>
              ) : (
                <div key={item.title} className="h-full">
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}