"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronDown, ChevronUp } from "lucide-react";
interface AccordionItem {
  image: string;
  title: string;
  desc: string;
}

interface AccordionGalleryProps {
  items: AccordionItem[];
  height?: number;
}

export default function AccordionGallery({
  items,
  height = 435,
}: AccordionGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeIndex = useRef(0);

  // Mobile = phones only
  // Tablet + desktop = horizontal accordion
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const animateTo = (index: number) => {
    const container = containerRef.current;

    if (!container || !items.length) return;

    activeIndex.current = index;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>(".accordion-card")
    );

    const tl = gsap.timeline();

    cards.forEach((card, i) => {
      const image = card.querySelector<HTMLElement>(".card-image");
      const smallTitle =
        card.querySelector<HTMLElement>(".collapsed-title");
      const content = card.querySelector<HTMLElement>(".expanded-content");
      const title = card.querySelector<HTMLElement>(".card-title");
      const desc = card.querySelector<HTMLElement>(".card-desc");
      const arrow = card.querySelector<HTMLElement>(".card-arrow");

      if (!image || !smallTitle || !content || !title || !desc) return;

      const isActive = i === index;

      gsap.killTweensOf([
        card,
        image,
        smallTitle,
        content,
        title,
        desc,
        arrow,
      ]);

      /*
       * MOBILE
       * < 1024px
       */
      if (isMobile) {
        if (isActive) {
          tl.to(
            card,
            {
              height: 380,
              duration: 0.5,
              ease: "power3.out",
            },
            0
          );

          tl.to(
            image,
            {
              filter: "grayscale(0%)",
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            0
          );

          tl.to(
            smallTitle,
            {
              opacity: 0,
              y: -10,
              duration: 0.2,
            },
            0
          );

          tl.to(
            content,
            {
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
            },
            0.2
          );

          tl.to(
            title,
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power3.out",
            },
            0
          );

          tl.to(
            desc,
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power3.out",
            },
            0
          );

          if (arrow) {
            tl.to(
              arrow,
              {
                opacity: 1,
                x: 0,
                rotate: 0,
                duration: 0.3,
              },
              0
            );
          }
        } else {
          tl.to(
            card,
            {
              height: 72,
              duration: 0.5,
              ease: "power3.out",
            },
            0
          );

          tl.to(
            image,
            {
              filter: "grayscale(100%)",
              scale: 1.08,
              duration: 0.5,
            },
            0
          );

          tl.to(
            smallTitle,
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
            },
            0.1
          );

          tl.to(
            content,
            {
              opacity: 0,
              duration: 0.2,
            },
            0
          );

          tl.to(
            title,
            {
              opacity: 0,
              y: 15,
              duration: 0.2,
            },
            0
          );

          tl.to(
            desc,
            {
              opacity: 0,
              y: 15,
              duration: 0.2,
            },
            0
          );

          if (arrow) {
            tl.to(
              arrow,
              {
                opacity: 0,
                x: -8,
                rotate: -45,
                duration: 0.2,
              },
              0
            );
          }
        }
      }

      /*
       * TABLET + DESKTOP
       * >= 1024px
       */
      else {
        if (isActive) {
          tl.to(
            card,
            {
              flexGrow: 4.5,
              duration: 0.65,
              ease: "power3.out",
            },
            0
          );

          tl.to(
            image,
            {
              filter: "grayscale(0%)",
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
            },
            0
          );

          tl.to(
            smallTitle,
            {
              opacity: 0,
              y: -10,
              duration: 0.25,
              ease: "power2.out",
            },
            0
          );

          tl.to(
            content,
            {
              opacity: 1,
              duration: 0.35,
              ease: "power2.out",
            },
            0.45
          );

          tl.to(
            title,
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power3.out",
            },
            0
          );

          tl.to(
            desc,
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power3.out",
            },
            0
          );

          if (arrow) {
            tl.to(
              arrow,
              {
                opacity: 1,
                x: 0,
                rotate: 0,
                duration: 0.35,
                ease: "power3.out",
              },
              0
            );
          }
        } else {
          tl.to(
            card,
            {
              flexGrow: 1,
              duration: 0.6,
              ease: "power3.inOut",
            },
            0
          );

          tl.to(
            image,
            {
              filter: "grayscale(100%)",
              scale: 1.08,
              duration: 0.6,
              ease: "power3.inOut",
            },
            0
          );

          tl.to(
            smallTitle,
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
              ease: "power2.out",
            },
            0.1
          );

          tl.to(
            content,
            {
              opacity: 0,
              duration: 0.2,
              ease: "power2.in",
            },
            0
          );

          tl.to(
            title,
            {
              opacity: 0,
              y: 15,
              duration: 0.25,
              ease: "power2.in",
            },
            0
          );

          tl.to(
            desc,
            {
              opacity: 0,
              y: 15,
              duration: 0.2,
              ease: "power2.in",
            },
            0
          );

          if (arrow) {
            tl.to(
              arrow,
              {
                opacity: 0,
                x: -8,
                rotate: -45,
                duration: 0.2,
                ease: "power2.in",
              },
              0
            );
          }
        }
      }
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      animateTo(0);
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className={`flex w-full overflow-hidden ${
        isMobile
          ? "flex-col gap-2"
          : "flex-row gap-2"
      }`}
      style={{
        height: isMobile ? "auto" : height,
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          animateTo(0);
        }
      }}
    >
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`
            accordion-card
            group
            relative
            min-w-0
            cursor-pointer
            overflow-hidden
            rounded-md
            bg-[#0D1D20]
            ${isMobile ? "flex-none" : "flex-1"}
          `}
          style={{
            height: isMobile
              ? index === 0
                ? 380
                : 72
              : "100%",
          }}
          onMouseEnter={() => {
            if (!isMobile) {
              animateTo(index);
            }
          }}
          onClick={() => {
            if (isMobile) {
              animateTo(index);
            }
          }}
        >
          {/* IMAGE */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="
                card-image
                absolute
                inset-0
                h-full
                w-full
                scale-[1.08]
                object-cover
                grayscale
              "
            />

            <div className="absolute inset-0 bg-black/20" />

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-[65%]
                bg-gradient-to-t
                from-black/90
                via-black/45
                to-transparent
              "
            />
          </div>

          {/* COLLAPSED TITLE */}
          <div
            className={`
              collapsed-title
              absolute
              z-10
              opacity-100
              ${
                isMobile
                  ? "bottom-4 left-5 flex items-center"
                  : "bottom-5 left-5"
              }
            `}
          >
            <span
              className={`
                block
                text-xs
                font-medium
                uppercase
                tracking-[0.15em]
                text-white/90
                ${
                  isMobile
                    ? "text-sm tracking-widest"
                    : "[writing-mode:vertical-rl] rotate-180"
                }
              `}
            >
              {item.title}
            </span>
          </div>

          {/* EXPANDED CONTENT */}
          <div
            className="
              expanded-content
              absolute
              inset-x-6
              bottom-6
              z-20
              opacity-0
              md:inset-x-7
              md:bottom-7
            "
          >
            <h3
              className="
                card-title
                max-w-[650px]
                translate-y-[15px]
                text-2xl
                font-semibold
                leading-[0.95]
                tracking-tight
                text-white
                opacity-0
                md:text-4xl
                lg:text-5xl
              "
            >
              {item.title}
            </h3>

            <p
              className="
                card-desc
                mt-3
                max-w-[520px]
                translate-y-[15px]
                text-xs
                leading-relaxed
                text-white/75
                opacity-0
                md:mt-5
                md:text-base
                md:leading-6
              "
            >
              {item.desc}
            </p>
          </div>

  {/* MOBILE CHEVRON */}
{isMobile && (
  <div
    className="
      mobile-chevron
      absolute
      right-5
      bottom-4
      z-30
      flex
      items-center
      justify-center
      text-white/80
    "
  >
    {index === activeIndex.current ? (
      <ChevronUp className="h-5 w-5" strokeWidth={1.8} />
    ) : (
      <ChevronDown className="h-5 w-5" strokeWidth={1.8} />
    )}
  </div>
)}

{/* DESKTOP ARROW */}
{!isMobile && (
  <div
    className="
      card-arrow
      absolute
      right-5
      top-5
      z-30
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-full
      border
      border-white/30
      bg-black/25
      text-white
      opacity-0
      backdrop-blur-sm
      md:h-9
      md:w-9
    "
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M5 12h14" strokeLinecap="round" />
      <path
        d="m13 6 6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)}
        </article>
      ))}
    </div>
  );
}