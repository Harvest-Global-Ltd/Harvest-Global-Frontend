"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface TechCardProps {
  title: string;
  image: string;
  svgLink: string;
  desc: string;
}

export default function TechCard({
  title,
  image,

  desc,
}: TechCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      const content = contentRef.current;
      const title = titleRef.current;
      const desc = descRef.current;

      const image = imageRef.current;

      if (!card || !content || !title || !desc  || !image) return;

      const enter = () => {
        gsap.killTweensOf([
          card,
          content,
          title,
          desc,

          image,
        ]);

        gsap.to(card, {
          flex: 2.5,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(content, {
          padding: "24px",
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(title, {
          fontSize: "24px",
          duration: 0.45,
          ease: "power3.out",
        });

        gsap.to(desc, {
          opacity: 1,
          y: 0,
          duration: 0.45,
          delay: 0.08,
          ease: "power2.out",
        });

  

        gsap.to(image, {
          height: "170px",
          duration: 0.6,
          ease: "power3.out",
        });
      };

      const leave = () => {
       

        gsap.to(card, {
          flex: 1,
          duration: 0.55,
          ease: "power3.inOut",
        });

        gsap.to(content, {
          padding: "20px",
          duration: 0.5,
          ease: "power3.inOut",
        });

        gsap.to(title, {
          fontSize: "18px",
          duration: 0.4,
          ease: "power3.inOut",
        });

        gsap.to(desc, {
          opacity: 0,
          y: 8,
          duration: 0.25,
          ease: "power2.in",
        });

  

        gsap.to(image, {
          height: "145px",
          duration: 0.55,
          ease: "power3.inOut",
        });
      };

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);

      return () => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      };
    },
    { scope: cardRef }
  );

  return (
    <article
      ref={cardRef}
      className="
        group relative flex h-[435px]
        min-w-0 flex-1 flex-col
        overflow-hidden rounded-md
        bg-[#0D1D20] text-white
      "
    >
      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-1 flex-col p-5"
      >

       

        {/* Title */}
        <h3
          ref={titleRef}
          className="
            max-w-[260px]
            text-lg font-medium
            leading-tight tracking-tight
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          ref={descRef}
          className="
            mt-4 max-w-[300px]
            translate-y-2
            text-sm leading-relaxed
            text-white/70
            opacity-0
          "
        >
          {desc}
        </p>
      </div>

      {/* Image */}
      <div
        ref={imageRef}
        className="
          relative h-[145px]
          w-full shrink-0 overflow-hidden
        "
      >
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />
      </div>
    </article>
  );
}