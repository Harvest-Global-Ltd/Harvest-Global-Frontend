"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import Reveal from "@/components/ui/reveal/Reveal";
import TopographicBackground from "../ui/Topography";
import { data } from "@/data";

function FinalCta() {
  const { title } = data.cta;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  const handleEnter = () => {
    gsap.to(fillRef.current, {
      scaleX: 1,
      transformOrigin: "left center",
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(buttonRef.current, {
      color: "#B94D1F",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(fillRef.current, {
      scaleX: 0,
      transformOrigin: "right center",
      duration: 0.45,
      ease: "power3.inOut",
    });

    gsap.to(buttonRef.current, {
      color: "#FFF6EF",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section className="relative w-full overflow-hidden rounded-md bg-[#FBEBDF] px-5 py-20 text-[#173B32]">
      <div
        className="
          relative
          container mx-auto
          flex h-auto w-full
          flex-col items-center justify-center
          overflow-hidden
          rounded-md
          bg-[#B94D1F]
          px-6
          text-center
          md:px-10
        "
      >
        {/* Topographic Background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <TopographicBackground />
        </div>

        {/* Subtle orange accents */}
        <div className="pointer-events-none absolute -right-32 -top-32 z-[1] h-96 w-96 rounded-full bg-[#E46A2A]/40 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 z-[1] h-96 w-96 rounded-full bg-[#E46A2A]/30 blur-3xl" />

        {/* Content */}
        <Reveal
          variant="group"
          className="
            relative z-10
            flex min-h-[500px] w-full
            flex-col items-center justify-center
            gap-9
          "
        >
          <p
            data-reveal="eyebrow"
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFF6EF]"
          >
            LET&apos;S BUILD TOGETHER
          </p>

          <h3
            data-reveal="heading"
            className="max-w-3xl text-2xl font-bold leading-[1.5] tracking-tight text-[#FFF6EF] sm:text-3xl md:text-4xl lg:text-6xl"
          >
            {title}
          </h3>

          {/* GSAP Fill Button */}
          <Link href="/connect">
            <button
              ref={buttonRef}
              type="button"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              className="
                relative
                cursor-pointer
                overflow-hidden
                rounded-md
                border border-[#FFF6EF]/70
                px-7 py-3.5
                font-mono text-xs font-semibold
                uppercase tracking-[0.16em]
                text-[#FFF6EF]
              "
            >
              {/* Fill */}
              <span
                ref={fillRef}
                className="
                  absolute inset-0
                  origin-left
                  scale-x-0
                  bg-[#FFF6EF]
                "
              />

              {/* Text */}
              <span className="relative z-10 flex items-center gap-2">
                Partner with Harvest Global
                <span className="text-base">→</span>
              </span>
            </button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default FinalCta;