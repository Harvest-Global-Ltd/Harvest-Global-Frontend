"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef, useState } from "react";

// Below-the-fold homepage sections render on demand (just before entering the
// viewport) so GSAP/ScrollTrigger initialization, hydration and their JS
// chunks are kept out of the initial page load. Section ids are preserved for
// anchor navigation: arriving with a hash immediately mounts the target.
const ParternerdLogo = dynamic(
  () => import("@/components/sections/ParternerdLogo"),
  { ssr: false },
);
const Challenge = dynamic(() => import("@/components/sections/Challenge"), {
  ssr: false,
});
const Technology = dynamic(() => import("@/components/sections/Technology"), {
  ssr: false,
});
const UnifiedGeoStack = dynamic(
  () => import("@/components/sections/Unfied-Geo-Stack"),
  { ssr: false },
);
const Applications = dynamic(
  () => import("@/components/sections/Applications"),
  { ssr: false },
);
const FinalCta = dynamic(() => import("@/components/sections/FinalCta"), {
  ssr: false,
});

const REGISTRY = {
  partners: ParternerdLogo,
  challenge: Challenge,
  technology: Technology,
  "unified-geo-stack": UnifiedGeoStack,
  applications: Applications,
  "final-cta": FinalCta,
} as const;

export type LazySectionId = keyof typeof REGISTRY;

export default function LazySection({
  id,
  className = "",
}: {
  id: LazySectionId;
  className?: string;
}) {
  const Comp = REGISTRY[id];
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isTarget =
      typeof window !== "undefined" && window.location.hash.slice(1) === id;

    if (isTarget) {
      const raf = requestAnimationFrame(() => setLoad(true));
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "240px 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [id]);

  useEffect(() => {
    if (!load) return;
    const el = ref.current;
    if (!el) return;

    // Deep links land before the section exists; scroll once it has mounted.
    if (typeof window !== "undefined" && window.location.hash.slice(1) === id) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [load, id]);

  return (
    <div ref={ref} className={className}>
      {load ? (
        <Suspense fallback={null}>
          <Comp />
        </Suspense>
      ) : null}
    </div>
  );
}