"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Server,
  Layers,
  Cloud,
  Cpu,
} from "lucide-react";
import { ReactNode } from "react";

gsap.registerPlugin(useGSAP);

interface TechnologyCard {
  number: string;
  title: string;
  description: string;
  theme: "green" | "orange";
  icon: ReactNode;
}

const cards: TechnologyCard[] = [
  {
    number: "01",
    title: "AI IaaS",
    description:
      "GPU-powered infrastructure for enterprise-grade GeoAI. High-performance compute, data infrastructure and ground-segment integration.",
    theme: "green",
    icon: <Server className="h-6 w-6" />,
  },
  {
    number: "02",
    title: "AI PaaS",
    description:
      "Foundation and fine-tuned GeoAI models. GeoFM models and domain-specific AI for agriculture, forestry, hydrology and land-use.",
    theme: "orange",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    number: "03",
    title: "AI SaaS",
    description:
      "Intelligence delivered through applications. GeoAnalytics and decision-support solutions across agriculture, climate resilience and infrastructure.",
    theme: "green",
    icon: <Cloud className="h-6 w-6" />,
  },
  {
    number: "04",
    title: "EDGE AI",
    description:
      "Intelligence closer to where data is generated. On-demand Earth Observation AI at satellites, ground stations and edge nodes.",
    theme: "orange",
    icon: <Cpu className="h-6 w-6" />,
  },
];

function TechCard({ card }: { card: TechnologyCard }) {
  const isGreen = card.theme === "green";

  return (
    <div
      className="
        group relative flex w-full
        items-start gap-4
        rounded-2xl border border-white/10
        bg-[#0A1612]/80
        px-5 py-5
        backdrop-blur-md
        transition-all duration-300
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-[#0A1612]
        hover:shadow-xl
      "
    >
      {/* Icon */}
      <div
        className={`
          flex h-12 w-12 shrink-0 items-center justify-center
          rounded-xl border
          transition-transform duration-500
          group-hover:scale-110

          ${
            isGreen
              ? "border-emerald-500/20 bg-[#235738]/30 text-emerald-400"
              : "border-orange-500/20 bg-[#E46A2A]/30 text-orange-400"
          }
        `}
      >
        {card.icon}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-semibold leading-tight tracking-tight text-white">
          {card.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function UnifiedGeoStack() {
  // Desktop refs
  const outerRingDesktopRef = useRef<HTMLDivElement | null>(null);
  const innerRingDesktopRef = useRef<HTMLDivElement | null>(null);
  const earthDesktopWrapRef = useRef<HTMLDivElement | null>(null);
  const earthDesktopGlowRef = useRef<HTMLDivElement | null>(null);

  // Mobile refs
  const outerRingMobileRef = useRef<HTMLDivElement | null>(null);
  const innerRingMobileRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // Continuous ring rotation — outer one way, inner the other, for parallax "pop"
    const rotTargets = [
      { el: outerRingDesktopRef.current, dir: 1, dur: 26 },
      { el: innerRingDesktopRef.current, dir: -1, dur: 18 },
      { el: outerRingMobileRef.current, dir: 1, dur: 26 },
      { el: innerRingMobileRef.current, dir: -1, dur: 18 },
    ];

    rotTargets.forEach(({ el, dir, dur }) => {
      if (!el) return;
      gsap.to(el, {
        rotate: 360 * dir,
        duration: dur,
        repeat: -1,
        ease: "linear",
        transformOrigin: "50% 50%",
      });
    });

    // Earth hover — desktop only (real hover device)
    const wrap = earthDesktopWrapRef.current;
    const glow = earthDesktopGlowRef.current;
    if (!wrap) return;

    const handleEnter = () => {
      gsap.to(wrap, {
        scale: 1.06,
        duration: 0.6,
        ease: "power3.out",
      });
      if (glow) {
        gsap.to(glow, {
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    };

    const handleLeave = () => {
      gsap.to(wrap, {
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      });
      if (glow) {
        gsap.to(glow, {
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    };

    wrap.addEventListener("mouseenter", handleEnter);
    wrap.addEventListener("mouseleave", handleLeave);

    return () => {
      wrap.removeEventListener("mouseenter", handleEnter);
      wrap.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section
      id="unified-geo-stack"
      className="
        relative min-h-screen overflow-hidden
        bg-[url('/images/site-bg/bg3.png')]
        bg-cover bg-center
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div className="container relative z-10 mx-auto px-5">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="header">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">

            {/* Left */}
            <div>
              <h2
                className="
                  w-full
                  text-4xl font-bold tracking-tight text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  uppercase
                "
              >
                Unified GeoAI Stack
              </h2>

              <p
                className="
                  mt-5 max-w-3xl
                  tracking-widest
                  text-white
                  text-md
                  lg:text-xl
                "
              >
                One Stack. Multiple Layers of Earth Intelligence.
              </p>

              <p
                className="
                  mt-5 max-w-3xl
                  text-sm leading-6 text-white/80
                  md:mt-7 md:text-lg md:leading-7
                "
              >
                The HG Unified GeoAI Stack brings together the infrastructure,
                models and applications required to build scalable Earth
                Intelligence, from core data processing to edge deployment.
              </p>
            </div>

            {/* Right heading */}
            <div className="hidden lg:flex flex-col gap-3">
              <h3
                className="
                  text-lg font-semibold
                  uppercase tracking-widest
                  text-white
                "
              >
                <span className="block">Earth</span>
                <span className="block">Intelligence</span>
                <span className="block">for a more</span>
                <span className="block">resilient</span>
                <span className="block">future</span>
              </h3>
            </div>
          </div>
        </div>


        {/* =====================================================
            MOBILE / TABLET
            Header → Earth → 4 Cards
            ===================================================== */}

        <div className="mt-10 flex flex-col lg:hidden">

          {/* Earth */}
          <div className="relative mx-auto flex w-full items-center justify-center py-2">

            {/* Outer orbit — thicker, brighter, glowing, rotating */}
            <div
              ref={outerRingMobileRef}
              className="
                absolute aspect-square
                w-[88vw] max-w-[390px]
                rounded-full
                border-2 border-dashed
                border-emerald-400/50
                shadow-[0_0_35px_rgba(52,211,153,0.25)]
              "
            />

            {/* Inner orbit — counter-rotating for parallax pop */}
            <div
              ref={innerRingMobileRef}
              className="
                absolute aspect-square
                w-[78vw] max-w-[350px]
                rounded-full
                border border-emerald-400/20
              "
            />

            {/* Earth */}
            <div
              className="
                relative z-10
                aspect-square
                w-[70vw] max-w-[300px]
                overflow-hidden
                rounded-full
                shadow-[0_0_80px_rgba(52,211,153,0.18)]
              "
            >
              <Image
                src="/images/earth.png"
                alt="Earth"
                fill
                priority
                className="object-contain"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 rounded-full bg-black/40" />

              {/* Earth text */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <span
                  className="
                    max-w-[235px]
                    px-5
                    text-center
                    text-2xl
                    font-semibold
                    uppercase
                    leading-[1.25]
                    tracking-wide
                    text-white
                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
                    sm:text-3xl
                  "
                >
                  A Smarter, Safer, More Resilient Planet
                </span>
              </div>
            </div>
          </div>


          {/* Cards */}
          <div className="mt-6 flex flex-col gap-3">

            {cards.map((card) => {
              const isGreen = card.theme === "green";

              return (
                <div
                  key={card.number}
                  className="
                    group relative
                    flex w-full
                    items-center
                    rounded-2xl
                    border border-white/10
                    bg-[#0A1612]/85
                    px-4 py-4
                    backdrop-blur-md
                    transition-all duration-300
                    hover:border-white/20
                    hover:bg-[#0A1612]
                  "
                >

                  {/* Icon */}
                  <div
                    className={`
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-xl
                      border
                      transition-transform duration-300
                      group-hover:scale-105

                      ${
                        isGreen
                          ? `
                            border-emerald-500/20
                            bg-[#235738]/30
                            text-emerald-400
                          `
                          : `
                            border-orange-500/20
                            bg-[#E46A2A]/25
                            text-orange-400
                          `
                      }
                    `}
                  >
                    {card.icon}
                  </div>


                  {/* Vertical divider */}
                  <div
                    className={`
                      mx-4 h-12 w-px shrink-0

                      ${
                        isGreen
                          ? "bg-emerald-400/50"
                          : "bg-orange-400/60"
                      }
                    `}
                  />


                  {/* Content */}
                  <div className="min-w-0 flex-1">

                    <h3
                      className="
                        text-lg
                        font-semibold
                        leading-tight
                        tracking-tight
                        text-white
                      "
                    >
                      {card.title}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        text-sm
                        leading-[1.45]
                        text-gray-400
                      "
                    >
                      {card.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>
        </div>


        {/* =====================================================
            DESKTOP
            ===================================================== */}

        <div
          className="
            relative mx-auto mt-14
            hidden
            lg:grid
            lg:grid-cols-[minmax(300px,1fr)_420px_minmax(300px,1fr)]
            lg:items-center
            lg:gap-6
          "
        >

          {/* Left Cards */}
          <div className="relative z-20 flex flex-col justify-center gap-10">
            {cards.slice(0, 2).map((card) => (
              <TechCard key={card.number} card={card} />
            ))}
          </div>


          {/* Earth & Connections */}
          <div
            className="
              relative z-10
              flex h-[440px]
              items-center justify-center
            "
          >

            {/* Connections */}
            <svg
              className="
                pointer-events-none
                absolute inset-0
                z-0
                h-full w-full
                overflow-visible
              "
              viewBox="0 0 420 440"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 95 C70 95 80 165 125 165"
                stroke="#34D399"
                strokeOpacity="0.5"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              <path
                d="M0 345 C70 345 80 275 125 275"
                stroke="#FB923C"
                strokeOpacity="0.5"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              <path
                d="M420 95 C350 95 340 165 295 165"
                stroke="#34D399"
                strokeOpacity="0.5"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              <path
                d="M420 345 C350 345 340 275 295 275"
                stroke="#FB923C"
                strokeOpacity="0.5"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              <circle cx="125" cy="165" r="3" fill="#34D399" />
              <circle cx="125" cy="275" r="3" fill="#FB923C" />

              <circle cx="295" cy="165" r="3" fill="#34D399" />
              <circle cx="295" cy="275" r="3" fill="#FB923C" />
            </svg>


     {/* Outer Orbit — increased radius */}
<div
  ref={outerRingDesktopRef}
  className="
    absolute aspect-square
    w-[430px]
    rounded-full
    border-2 border-dashed
    border-emerald-500/50
    shadow-[0_0_45px_rgba(52,211,153,0.3)]
  "
/>

{/* Inner Orbit — increased radius */}
<div
  ref={innerRingDesktopRef}
  className="
    absolute aspect-square
    w-[390px]
    rounded-full
    border
    border-emerald-500/20
  "
/>

            {/* Earth */}
            <div
              ref={earthDesktopWrapRef}
              className="
                relative z-10
                w-[430px]
                shrink-0
                cursor-pointer
              "
            >
              {/* Hover glow ring behind the earth */}
              <div
                ref={earthDesktopGlowRef}
                className="
                  pointer-events-none
                  absolute inset-0
                  rounded-full
                  opacity-0

                  shadow-[0_0_120px_40px_rgba(52,211,153,0.35)]
                "
              />

              <div
                className="
                  relative aspect-square
                  overflow-hidden
                  rounded-full
                  shadow-[0_0_80px_rgba(52,211,153,0.15)]
                "
              >
                <Image
                  src="/images/earth.png"
                  alt="Earth"
                  fill
                  priority
                  className="object-contain"
                />

                <div className="absolute inset-0 z-[1] rounded-full bg-black/40" />

                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <span
                    className="
                      max-w-xs
                      px-6 pt-10
                      text-center
                      text-4xl font-semibold
                      uppercase
                      text-white
                      drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
                    "
                  >
                    A Smarter, Safer, More Resilient Planet
                  </span>
                </div>
              </div>
            </div>
          </div>


          {/* Right Cards */}
          <div className="relative z-20 flex flex-col justify-center gap-10">
            {cards.slice(2, 4).map((card) => (
              <TechCard key={card.number} card={card} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}