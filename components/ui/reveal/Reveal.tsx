"use client";

import { ElementType, ReactNode, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

export type RevealVariant =
  | "fade-up"
  | "heading"
  | "group"
  | "stagger"
  | "scale";

interface RevealProps {
  children: ReactNode;
  /**
   * Element to render. Defaults to `div`. Keep semantic intent in mind — for
   * headings prefer `variant="group"` with a `data-reveal="heading"` child
   * rather than making the wrapper itself the heading.
   */
  as?: ElementType;
  className?: string;
  variant?: RevealVariant;
  /** Selector for children to stagger (stagger variant or `item` role). */
  itemSelector?: string;
  /** Vertical travel distance in px (desktop). Mobile auto-reduces. */
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  /** ScrollTrigger start. */
  start?: string;
  once?: boolean;
  /** Restrict the animation to a media query (e.g. "(max-width: 767px)"). */
  match?: string;
  id?: string;
}

const EASE = "power3.out";

export default function Reveal({
  children,
  as,
  className,
  variant = "fade-up",
  itemSelector,
  y,
  duration,
  stagger,
  delay = 0,
  start = "top 80%",
  once = true,
  match,
  id,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Cast to any to avoid generic ref-typing friction with a dynamic tag.
  const Tag = (as ?? "div") as ElementType;

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const splits: SplitText[] = [];
      const mm = gsap.matchMedia();

      const register = (headingY: number) => {
        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        if (reduce) return; // content stays visible

        const st = {
          trigger: el,
          start,
          once,
        };

        if (variant === "fade-up" || variant === "scale") {
          const from: gsap.TweenVars = {
            opacity: 0,
            y: y ?? (variant === "scale" ? 0 : 40),
            duration: duration ?? 0.9,
            delay,
            ease: EASE,
            scrollTrigger: st,
          };
          if (variant === "scale") from.scale = 0.94;
          gsap.from(el, from);
          return;
        }

        if (variant === "heading") {
          const split = SplitText.create(el, {
            type: "lines",
            linesClass: "reveal-line",
          });
          splits.push(split);
          gsap.from(split.lines, {
            opacity: 0,
            y: headingY,
            duration: duration ?? 1,
            ease: EASE,
            scrollTrigger: st,
          });
          return;
        }

        if (variant === "stagger") {
          const items = itemSelector
            ? el.querySelectorAll(itemSelector)
            : (Array.from(el.children) as Element[]);
          if (!items.length) return;
          gsap.from(items, {
            opacity: 0,
            y: y ?? 40,
            duration: duration ?? 0.8,
            stagger: stagger ?? 0.12,
            ease: EASE,
            scrollTrigger: st,
          });
          return;
        }

        if (variant === "group") {
          const q = (role: string) =>
            el.querySelectorAll(`[data-reveal="${role}"]`);
          const eyebrow = q("eyebrow");
          const heading = q("heading");
          const text = q("text");
          const item = q("item");
          const cta = q("cta");

          const headingLines = Array.from(heading)
            .flatMap((h) => {
              const split = SplitText.create(h as HTMLElement, {
                type: "lines",
                linesClass: "reveal-line",
              });
              splits.push(split);
              return split.lines;
            })
            .filter(Boolean);

          const tl = gsap.timeline({ scrollTrigger: st });

          if (eyebrow.length) {
            tl.from(eyebrow, {
              opacity: 0,
              y: 16,
              duration: 0.5,
              ease: EASE,
            });
          }

          if (headingLines.length) {
            tl.from(
              headingLines,
              {
                opacity: 0,
                y: headingY,
                duration: duration ?? 0.95,
                ease: EASE,
              },
              eyebrow.length ? "-=0.2" : 0,
            );
          }

          if (text.length) {
            tl.from(
              text,
              {
                opacity: 0,
                y: 24,
                duration: 0.7,
                ease: EASE,
              },
              "-=0.5",
            );
          }

          if (item.length) {
            tl.from(
              item,
              {
                opacity: 0,
                y: 32,
                duration: 0.7,
                stagger: stagger ?? 0.1,
                ease: EASE,
              },
              "-=0.45",
            );
          }

          if (cta.length) {
            tl.from(
              cta,
              {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: EASE,
              },
              "-=0.4",
            );
          }
        }
      };

      if (match) {
        mm.add(match, () => register(y ?? 40));
      } else {
        mm.add(
          {
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)",
            reduce: "(prefers-reduced-motion: reduce)",
          },
          (context) => {
            const { isDesktop, reduce } = context.conditions as {
              isDesktop: boolean;
              isMobile: boolean;
              reduce: boolean;
            };
            if (reduce) return;
            register(isDesktop ? y ?? 70 : y ?? 40);
          },
        );
      }

      return () => {
        mm.revert();
        splits.forEach((s) => s.revert());
      };
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className} id={id}>
      {children}
    </Tag>
  );
}
