"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Intro() {
  const introRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const hasHash =
      typeof window !== "undefined" &&
      Boolean(window.location.hash && window.location.hash.length > 1);

    const intro = introRef.current;
    const text = textRef.current;

    if (!intro || !text) return;

    if (hasHash) {
      intro.style.display = "none";
      window.dispatchEvent(new CustomEvent("intro-complete"));

      try {
        const target = document.querySelector(window.location.hash);
        if (target) {
          requestAnimationFrame(() => {
            target.scrollIntoView({ behavior: "smooth" });
          });
        }
      } catch {
        // ignore invalid hash selector
      }
      return;
    }

    const tl = gsap.timeline();

    gsap.set(text, {
      visibility: "visible",
      opacity: 1,
      filter: "blur(10px)",
      scale: 0.96,
      clipPath: "inset(0 100% 0 0)",
    });

    // Typewriter-style left-to-right reveal of the wordmark.
    tl.to(text, {
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      duration: 1.6,
      ease: "none",
    });

    // Hold the full logo for a beat, then fade the whole overlay out and
    // let the site content reveal underneath.
    tl.to(
      {},
      {
        duration: 0.6,
      },
    );

    tl.to(
      intro,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onStart: () => {
          window.dispatchEvent(new CustomEvent("intro-complete"));
        },
      },
    );

    tl.set(intro, { display: "none" });

    return () => {
      tl.kill();
    };
  });

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black"
    >
      <img
        ref={textRef}
        src="/svg/logo.svg"
        alt="Harvest Global"
        className="w-80 md:w-[32rem] lg:w-[44rem]"
      />
    </div>
  );
}