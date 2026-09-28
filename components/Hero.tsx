"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      const hero = heroRef.current;
      const video = videoRef.current;

      if (!hero || !video) return;

      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        gsap.to(video, {
          x: x * 8,
          y: y * 5,
          duration: 1.2,
          ease: "power3.out",
          overwrite: true,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      const hasHash =
        typeof window !== "undefined" &&
        Boolean(window.location.hash && window.location.hash.length > 1);

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (hasHash || prefersReduced) {
        gsap.set(".hero-content", {
          visibility: "visible",
          opacity: 1,
        });
        if (prefersReduced) {
          window.dispatchEvent(new CustomEvent("intro-complete"));
        }
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }

      const heroHighlight = SplitText.create(".highlight-tag", {
        type: "chars",
      });

      const subtitle = SplitText.create(".subtitle", {
        type: "words",
      });

      gsap.set(".hero-content", {
        visibility: "hidden",
        opacity: 0,
      });

      gsap.set(heroHighlight.chars, {
        opacity: 0,
        y: 20,
        scale: 0.8,
      });

      gsap.set(subtitle.words, {
        opacity: 0,
      });

      let started = false;

      const startHeroAnimation = () => {
        if (started) return;
        started = true;

        const tl = gsap.timeline();

        tl.set(".hero-content", {
          visibility: "visible",
        });

        tl.to(".hero-content", {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        tl.to(heroHighlight.chars, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: "back.out(1.7)",
        });

        tl.to(
          subtitle.words,
          {
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "none",
          },
          "<",
        );
      };

      window.addEventListener("intro-complete", startHeroAnimation);

      // Safety net: never let the intro gate leave the hero content hidden.
      const failsafe = window.setTimeout(() => {
        window.dispatchEvent(new CustomEvent("intro-complete"));
      }, 2500);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("intro-complete", startHeroAnimation);
        window.clearTimeout(failsafe);

        heroHighlight.revert();
        subtitle.revert();
      };
    },
    {
      scope: heroRef,
    },
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative isolate h-screen w mx-auto containerflex-col"
    >
<div className="absolute inset-0 -z-10 overflow-hidden">
  <video
    ref={videoRef}
    autoPlay
    muted
    playsInline
    disablePictureInPicture
    preload="metadata"
    poster="/images/hero-poster.jpg"
    className="h-full w-full scale-[1.08] object-cover object-center md:object-left"
  >
    <source
      media="(max-width: 1023px)"
      src="/videos/earth-hori-720.mp4"
      type="video/mp4"
    />
    <source
      media="(min-width: 1024px)"
      src="/videos/earth-hori-1080.mp4"
      type="video/mp4"
    />
  </video>

  {/* Mobile Earth glow — from left edge */}
  <div
    className="
      pointer-events-none
      absolute
      -left-[90%]
      top-1/2
      h-[85vh]
      w-[85vh]
      -translate-y-1/2
      rounded-full
      bg-[radial-gradient(circle,rgba(30,130,255,0.45)_0%,rgba(20,90,180,0.2)_35%,transparent_70%)]
      blur-2xl
      md:hidden
    "
  />
</div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <img
          data-title="harvest-hero"
          src="/svg/logo.svg"
          alt="Harvest Global"
          className="w-48 md:w-60 lg:w-72"
          style={{
            visibility: "hidden",
          }}
        />
      </div>

<div className="hero-content container mx-auto flex h-full flex-col items-center justify-center px-5 text-center md:items-start md:justify-end md:text-left md:pb-20">
  <h1 className="max-w-5xl tracking-tight text-white text-4xl leading-[0.95] font-extrabold md:text-6xl lg:text-7xl">
    <span className="highlight-tag">
      Earth, Weather
    </span>
    <br />
    <span className="highlight-tag text-white/90">
      & Space AI Unified Stack
    </span>
  </h1>

  <div className="subtitle mt-6 max-w-4xl text-sm leading-relaxed sm:text-base md:mt-7 md:text-lg lg:text-xl">
    <p className="text-white/70">
      Building integrated intelligence across
    </p>

    <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 md:justify-start">
      <span className="text-white/90">GeoAI</span>
      <span className="text-white/30">•</span>

      <span className="text-white/90">GeoFM</span>
      <span className="text-white/30">•</span>

      <span className="text-white/90">Sovereign AI</span>
      <span className="text-white/30">•</span>

      <span className="text-white/90">Ground Segment Infrastructure</span>
      <span className="text-white/30">•</span>

      <span className="text-white/90">Edge Intelligence</span>
    </div>
  </div>
</div>
    </section>
  );
};

export default Hero;