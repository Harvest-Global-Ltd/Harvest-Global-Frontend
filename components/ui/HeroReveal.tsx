"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const HAS_SEEN_KEY = "hg-intro-seen";

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

    // Never block meaningful content:
    //  - deep links skip the overlay,
    //  - reduced-motion users are not shown an elaborate intro,
    //  - returning visitors only get a brief, snappier version.
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

    const skipToContent = () => {
      window.dispatchEvent(new CustomEvent("intro-complete"));
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const seenBefore = sessionStorage.getItem(HAS_SEEN_KEY) === "1";

    if (reduceMotion.matches) {
      intro.style.display = "none";
      skipToContent();
      return;
    }

    const reduceChange = () => {
      if (reduceMotion.matches) {
        tl.pause();
        intro.style.display = "none";
        tl.set(intro, { display: "none" });
        skipToContent();
      }
    };
    reduceMotion.addEventListener?.("change", reduceChange);

    const tl = gsap.timeline();

    gsap.set(text, {
      visibility: "visible",
      opacity: 1,
      filter: "blur(10px)",
      scale: 0.96,
      clipPath: "inset(0 100% 0 0)",
    });

 if (seenBefore) {
  // Returning visitor: slower, smoother reveal.
  tl.to(text, {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    duration: 0.9,
    ease: "none",
  });

  tl.to(
    intro,
    {
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      onStart: skipToContent,
    },
    "-=0.3",
  );
} else {
  // First visit: slower cinematic wordmark reveal.
  tl.to(text, {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    duration: 1.8,
    ease: "none",
  });

  tl.to(
    {},
    {
      duration: 0.5,
    },
  );

  tl.to(
    intro,
    {
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      onStart: () => {
        sessionStorage.setItem(HAS_SEEN_KEY, "1");
        skipToContent();
      },
    },
  );
}

    tl.set(intro, { display: "none" });

    return () => {
      tl.kill();
      reduceMotion.removeEventListener?.("change", reduceChange);
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