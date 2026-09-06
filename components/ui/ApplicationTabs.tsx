"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface ApplicationTab {
  id: string;
  shortLabel: string;
  label: string;
  alt: string;
  description: string;
  image: string;
  subtopic: readonly Readonly<{ title: string; img: string }>[];
}

export default function ApplicationTabs({
  applications,
}: {
  applications: ApplicationTab[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  // Holds the OUTGOING app while a transition is in flight.
  // While set, the base layer shows the old app and the wipe layer shows the new one.
  const [prevApp, setPrevApp] = useState<ApplicationTab | null>(null);

  const imageNextRef = useRef<HTMLDivElement>(null);
  const textCurrentRef = useRef<HTMLDivElement>(null);
  const textNextRef = useRef<HTMLDivElement>(null);

  const active = applications[activeIndex];
  const currentApp = prevApp ?? active;

  const handleTabChange = (value: string) => {
    const nextIndex = applications.findIndex((app) => app.id === value);

    if (nextIndex === -1 || nextIndex === activeIndex || isAnimating) {
      return;
    }

    const imageNext = imageNextRef.current;
    const currentText = textCurrentRef.current;
    const nextText = textNextRef.current;

    const outgoing = applications[activeIndex];

    if (!imageNext || !currentText || !nextText) {
      setActiveIndex(nextIndex);
      return;
    }

    setIsAnimating(true);

    // Freeze the outgoing app so the base layer doesn't jump ahead,
    // then move activeIndex so the wipe layer picks up the new app.
    setPrevApp(outgoing);
    setActiveIndex(nextIndex);

    requestAnimationFrame(() => {
      // Reset starting states in case a previous timeline left things mid-animation.
      gsap.set(imageNext, { clipPath: "inset(0 0 100% 0)" });
      gsap.set(currentText, { x: 0, opacity: 1 });
      gsap.set(nextText, { x: 60, opacity: 0 });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },
        onComplete: () => {
          setIsAnimating(false);
          // Collapse back to a single source of truth once the animation settles.
          setPrevApp(null);
        },
      });

      /*
       * OLD TEXT
       * Moves toward the right and fades out.
       */
      tl.to(
        currentText,
        {
          x: 60,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        },
        0,
      );

      /*
       * NEW IMAGE
       * Vertical wipe from top to bottom.
       */
      tl.to(
        imageNext,
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.8,
          ease: "power2.inOut",
        },
        0,
      );

      tl.to(
        nextText,
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        0.3,
      );
    });
  };

  return (
    <div>
      {/* TABS */}
      <Tabs
        value={active.id}
        onValueChange={handleTabChange}
        className=" py-3 w-full"
      >
        <TabsList
          variant="line"
          className="
            flex
            w-full
            flex-nowrap
            justify-start
            gap-1
            overflow-x-auto
            rounded-md
            border
            border-[#2E7657]/25
            backdrop-blur-2xl
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {applications.map((app) => (
            <TabsTrigger
              key={app.id}
              value={app.id}
              disabled={isAnimating}
              className="
                relative
                shrink-0
                whitespace-nowrap
                rounded-md
                border
                h-full
                border-transparent
                bg-transparent
                px-6
                py-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white/75
                shadow-none
                transition-all
                duration-300
                hover:bg-[#123C2B]
                hover:text-white
                data-active:border-[#2E7657]/60
                data-active:bg-[#235738]
                data-active:text-white
                data-active:shadow-none
              "
            >
              {app.shortLabel}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* APPLICATION DISPLAY */}
      <div
        className="
          grid
          overflow-hidden
          rounded-md
          border
          border-[#2E7657]/25
          bg-gradient-to-br
          from-[#061C19]
          via-[#0B2922]
          to-[#123C2B]
          md:grid-cols-2
        "
      >
        <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
          <Image
            key={`base-${currentApp.id}`}
            src={currentApp.image}
            alt={currentApp.alt}
            fill
            draggable={false}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />

          <div
            ref={imageNextRef}
            className="absolute inset-0 z-10 overflow-hidden"
            style={{
              clipPath: "inset(0 0 100% 0)",
            }}
          >
            <Image
              key={`next-${active.id}`}
              src={active.image}
              alt={active.alt}
              fill
              draggable={false}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative flex flex-col justify-between overflow-hidden p-7 ] sm:p-10  md:p-12">
          {/* Current */}
          <div
            ref={textCurrentRef}
            className="absolute inset-0 flex flex-col justify-between p-7 sm:p-10 md:p-12"
          >
            <ApplicationText app={currentApp} />
          </div>

          {/* Next */}
          <div
            ref={textNextRef}
            className="absolute inset-0 flex flex-col justify-between p-7 opacity-0 sm:p-10 md:p-12"
          >
            <ApplicationText app={active} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ApplicationText({ app }: { app: ApplicationTab }) {
  return (
    <div className="flex h-full flex-col">
      {/* Main content */}
      <div>
        <h3 className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
          {app.label}
        </h3>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
          {app.description}
        </p>
      </div>

      {/* Subtopics */}
      <div className="mt-auto border-t border-[#2E7657]/20 pt-6">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {app.subtopic.map((sub, i) => (
            <li
              key={`${app.id}-${i}`}
              className="
                group
                flex
                min-h-[76px]
                items-center
                gap-4
                rounded-lg
                bg-[#061C19]/40
                p-3
                transition-all
                duration-300
                hover:bg-[#123C2B]/60
              "
            >
              {/* Thumbnail */}
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md border border-[#2E7657]/30">
                <Image
                  src={sub.img}
                  alt={sub.title}
                  fill
                  sizes="56px"
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h4 className="text-lg font-semibold text-white">
                  {sub.title}
                </h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
