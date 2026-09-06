"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Team", href: "/team" },
  { title: "Technology", href: "/#technology" },
  { title: "Media", href: "/credentials" },
];

function Navbar() {
  const underlineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const navRef = useRef<HTMLElement | null>(null);

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const lineTopRef = useRef<HTMLSpanElement | null>(null);
  const lineMiddleRef = useRef<HTMLSpanElement | null>(null);
  const lineBottomRef = useRef<HTMLSpanElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const [activeSection, setActiveSection] = useState<string>(() => {
    if (typeof window !== "undefined" && window.location.hash === "#technology") {
      return "technology";
    }
    return "";
  });

  useEffect(() => {
    if (pathname !== "/") return;

    const handleHashChange = () => {
      if (window.location.hash === "#technology") {
        setActiveSection("technology");
      } else if (!window.location.hash || window.location.hash === "#") {
        setActiveSection("");
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    const techEl = document.getElementById("technology");
    let observer: IntersectionObserver | null = null;

    if (techEl) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection("technology");
            } else {
              const rect = techEl.getBoundingClientRect();
              if (rect.top > 0) {
                setActiveSection("");
              }
            }
          });
        },
        {
          rootMargin: "-20% 0px -30% 0px",
          threshold: 0,
        }
      );

      observer.observe(techEl);
    }

    const handleScroll = () => {
      if (window.scrollY < 150 && window.location.hash !== "#technology") {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  const activeHref =
    pathname === "/"
      ? activeSection === "technology"
        ? "/#technology"
        : "/"
      : pathname;

  // GSAP animation for mobile menu open/close
  useGSAP(
    () => {
      if (!menuRef.current) return;

      if (isOpen) {
        // Animate hamburger to X
        gsap.to(lineTopRef.current, {
          y: 8,
          rotate: 45,
          duration: 0.35,
          ease: "power2.inOut",
        });
        gsap.to(lineMiddleRef.current, {
          opacity: 0,
          scaleX: 0,
          duration: 0.25,
          ease: "power2.inOut",
        });
        gsap.to(lineBottomRef.current, {
          y: -8,
          rotate: -45,
          duration: 0.35,
          ease: "power2.inOut",
        });

        // Circle overlay reveal from top left
        gsap.to(menuRef.current, {
          clipPath: "circle(150% at 2.5rem 2.5rem)",
          duration: 0.8,
          ease: "power3.inOut",
        });

        // Stagger links entrance
        gsap.fromTo(
          menuRef.current.querySelectorAll(".mobile-nav-link"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.2,
          },
        );
      } else {
        // Animate X back to hamburger
        gsap.to(lineTopRef.current, {
          y: 0,
          rotate: 0,
          duration: 0.35,
          ease: "power2.inOut",
        });
        gsap.to(lineMiddleRef.current, {
          opacity: 1,
          scaleX: 1,
          duration: 0.35,
          ease: "power2.inOut",
        });
        gsap.to(lineBottomRef.current, {
          y: 0,
          rotate: 0,
          duration: 0.35,
          ease: "power2.inOut",
        });

        // Close circle overlay
        gsap.to(menuRef.current, {
          clipPath: "circle(0% at 2.5rem 2.5rem)",
          duration: 0.6,
          ease: "power3.inOut",
        });
      }
    },
    { dependencies: [isOpen] },
  );

  const { contextSafe } = useGSAP(
    () => {
      gsap.fromTo(
        navRef.current,
        { y: -24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      );
    },
    { scope: navRef },
  );

  const handleEnter = (index: number) => {
    if (activeHref === navLinks[index].href) return;
    contextSafe(() => {
      const underline = underlineRefs.current[index];
      if (!underline) return;
      gsap.killTweensOf(underline);
      gsap.fromTo(
        underline,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.45, ease: "power4.out" },
      );
    })();
  };

  const handleLeave = (index: number) => {
    if (activeHref === navLinks[index].href) return;
    contextSafe(() => {
      const underline = underlineRefs.current[index];
      if (!underline) return;
      gsap.killTweensOf(underline);
      gsap.to(underline, {
        scaleX: 0,
        transformOrigin: "right center",
        duration: 0.35,
        ease: "power3.inOut",
      });
    })();
  };

  useEffect(() => {
    navLinks.forEach((link, i) => {
      const underline = underlineRefs.current[i];
      if (!underline) return;
      const isActive = activeHref === link.href;
      gsap.killTweensOf(underline);
      gsap.to(underline, {
        scaleX: isActive ? 1 : 0,
        transformOrigin: isActive ? "left center" : "right center",
        duration: 0.35,
        ease: "power3.out",
      });
    });
  }, [activeHref]);

  return (
    <>
      <header
        ref={navRef}
        style={{
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
        className={cn(
          "fixed inset-x-0 top-4 z-50 rounded-md container mx-auto px-5",
          pathname === "/about-us"
            ? "bg-white/60 border border-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.10)]"
            : "bg-black/60 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.55)]",
        )}
      >
        <nav className="flex md:grid w-full md:grid-cols-3 items-center justify-between min-h-[64px]">
          {/* LEFT — Logo */}
          <div className="flex items-center justify-start">
            <Link href="/">
              <img
                data-title="harvest-nav"
                src="/svg/logo.svg"
                alt="Harvest Global"
                className="w-36 md:w-56"
              />
            </Link>
          </div>

          {/* CENTER — Navigation */}
          <div
            className={cn(
              "hidden md:flex items-center justify-center gap-6 font-bold",
              pathname === "/about-us" ? "text-black" : "text-white",
            )}
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.title}
                href={link.href}
                className="group relative py-1 transition-opacity hover:opacity-90"
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={() => handleLeave(i)}
              >
                {link.title}
                <span
                  ref={(el) => {
                    underlineRefs.current[i] = el;
                  }}
                  style={{
                    transform:
                      activeHref === link.href ? "scaleX(1)" : "scaleX(0)",
                  }}
                  className="absolute bottom-0 left-0 h-px w-full origin-left bg-[#E46A2A]"
                />
              </Link>
            ))}
          </div>

          {/* RIGHT — Connect / Hamburger */}
          <div className="flex items-center justify-end">
            <div className="flex gap-4">
              <Link href={"/connect"} className="hidden md:block">
                <button className="px-3 cursor-pointer font-bold text-white bg-orange-600 py-2 rounded-md">
                  Large Project
                </button>
              </Link>
              <Link href={"/connect"} className="hidden md:block">
                <button
                  className={cn(
                    "px-3 cursor-pointer font-bold bg-white text-black py-2 rounded-md",
                    pathname === "/about-us" && " bg-black text-white",
                  )}
                >
                  Connect
                </button>
              </Link>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              className="
          flex md:hidden
          flex-col justify-center items-end
          w-8 h-8 gap-1.5
          focus:outline-none
          z-50
          cursor-pointer
        "
            >
              <span
                ref={lineTopRef}
                className={cn(
                  "w-6 h-0.5 rounded-md origin-center",
                  pathname === "/about-us" && !isOpen ? "bg-black" : "bg-white",
                )}
              />
              <span
                ref={lineMiddleRef}
                className={cn(
                  "w-4 h-0.5 rounded-md origin-center",
                  pathname === "/about-us" && !isOpen ? "bg-black" : "bg-white",
                )}
              />
              <span
                ref={lineBottomRef}
                className={cn(
                  "w-6 h-0.5 rounded-md origin-center",
                  pathname === "/about-us" && !isOpen ? "bg-black" : "bg-white",
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        style={{ clipPath: "circle(0% at 2.5rem 2.5rem)" }}
        className="fixed inset-0 bg-neutral-950 flex flex-col justify-between px-8 py-28 z-45 lg:hidden pointer-events-auto"
      >
        <div className="flex flex-col gap-8 mt-12">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-link text-4xl font-display uppercase tracking-tight transition-colors ${
                  isActive
                    ? "text-white underline decoration-2 underline-offset-8"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
        <div className="flex w-full flex-col gap-4">
          <Link href={"/connect"} onClick={() => setIsOpen(false)} className="w-full">
            <button className="px-3 w-full cursor-pointer font-bold text-white bg-orange-600 py-2 rounded-md">
              Large Project
            </button>
          </Link>
          <Link href={"/connect"} onClick={() => setIsOpen(false)} className="w-full">
            <button
              className={cn(
                "px-3 w-full cursor-pointer font-bold bg-white text-black py-2 rounded-md",
                pathname === "/about-us" && " bg-black text-white",
              )}
            >
              Connect
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;