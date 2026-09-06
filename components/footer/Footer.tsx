"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about-us" },
    { title: "Technology", href: "/#technology" },
    { title: "Media", href: "/media" },

    { title: "Connect", href: "/connect" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#E7F1EB] text-[#123C2B]"
    >
      {/* =========================================================
          MOBILE FOOTER
      ========================================================== */}
    {/* =========================================================
    MOBILE FOOTER
========================================================= */}
<div className="block bg-[#E7F1EB] text-[#123C2B] lg:hidden">
  <div className="px-7 pb-7 pt-10">

    {/* Brand */}
    <Link href="/" className="flex w-fit items-center gap-4">
      <Image
        src="/logo.png"
        width={58}
        height={58}
        alt="Harvest Global"
        className="h-14 w-14 object-contain"
      />

      <div>
        <span className="block text-[21px] font-semibold tracking-tight">
          Harvest Global
        </span>

     
      </div>
    </Link>

    {/* Description */}
    <p className="mt-6 max-w-[390px] text-[15px] leading-6 text-[#235738]/70">
      Building a Sovereign Intelligence Layer for a Resilient and
      Sustainable Future
    </p>

    {/* Contact */}
    <div className="mt-6 space-y-4">

      {/* Email */}
      <a
        href="mailto:support@hgsystems.in"
        className="flex items-center gap-4 text-[15px] text-[#123C2B]/75 transition-colors hover:text-[#E46A2A]"
      >
        <Mail
          size={19}
          strokeWidth={1.5}
          className="shrink-0 text-[#E46A2A]"
        />

        <span>support@hgsystems.in</span>
      </a>

      {/* Phone */}
    

      {/* Location */}
      <div className="flex items-start gap-4 text-[15px] leading-6 text-[#123C2B]/75">
        <MapPin
          size={19}
          strokeWidth={1.5}
          className="mt-0.5 shrink-0 text-[#E46A2A]"
        />

        <span>
          NASSCOM/HARTRON, Udyog Vihar Phase 1,
          <br />
          Gurgaon, Haryana, India
        </span>
      </div>
    </div>

    {/* =====================================================
        COMPANY
    ====================================================== */}
    <div className="mt-10">
      <h3 className="text-[27px] font-semibold tracking-tight">
        Company
      </h3>

      <nav className="mt-5">
        <ul className="space-y-3">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className="text-[17px] text-[#123C2B]/60 transition-colors duration-300 hover:text-[#E46A2A]"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    {/* =====================================================
        CONNECT
    ====================================================== */}
    <div className="mt-10">


      <div className="mt-5 flex items-center gap-5">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/harvest-global-ssp-ltd/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-opacity hover:opacity-60"
        >
          <Image
            src="/svg/linkedIn.svg"
            alt="LinkedIn"
            width={23}
            height={23}
            className="opacity-65"
          />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/harvestglobalssp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition-opacity hover:opacity-60"
        >
          <Image
            src="/svg/insta.svg"
            alt="Instagram"
            width={23}
            height={23}
            className="opacity-65"
          />
        </a>

        {/* X */}
        <a
          href="https://x.com/HarvestG_Ssp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="transition-opacity hover:opacity-60"
        >
          <Image
            src="/svg/X.svg"
            alt="X"
            width={23}
            height={23}
            className="opacity-65"
          />
        </a>
      </div>
    </div>

    {/* Bottom */}
    <div className="mt-10 border-t border-[#235738]/15 pt-5">
      <p className="text-[12px] leading-5 text-[#235738]/45">
        © {new Date().getFullYear()} Harvest Global. All rights
        reserved.
      </p>
    </div>

  </div>
</div>

      {/* =========================================================
          DESKTOP FOOTER
      ========================================================== */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-5 py-24">
          <div className="grid grid-cols-3 gap-16 lg:gap-24">

            {/* BRAND */}
            <div>
              <Link
                href="/"
                className="group flex w-fit items-center gap-3"
              >
                <Image
                  src="/logo.png"
                  width={56}
                  height={56}
                  alt="Harvest Global"
                  className="h-14 w-14 object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <span className="text-lg font-semibold tracking-tight text-[#123C2B]">
                  Harvest Global
                </span>
              </Link>

              <p className="mt-6 max-w-xs text-sm leading-6 text-[#235738]/65">
                Building a Sovereign Intelligence Layer for a Resilient and
                Sustainable Future
              </p>

              <div className="mt-10 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/harvest-global-ssp-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#235738]/20 transition-all duration-300 hover:border-[#E46A2A] hover:bg-[#E46A2A]"
                >
                  <Image
                    src="/svg/linkedIn.svg"
                    alt="LinkedIn"
                    width={18}
                    height={18}
                    className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </a>

                <a
                  href="https://www.instagram.com/harvestglobalssp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#235738]/20 transition-all duration-300 hover:border-[#E46A2A] hover:bg-[#E46A2A]"
                >
                  <Image
                    src="/svg/insta.svg"
                    alt="Instagram"
                    width={18}
                    height={18}
                    className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </a>

                <a
                  href="https://x.com/HarvestG_Ssp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#235738]/20 transition-all duration-300 hover:border-[#E46A2A] hover:bg-[#E46A2A]"
                >
                  <Image
                    src="/svg/X.svg"
                    alt="X"
                    width={18}
                    height={18}
                    className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  />
                </a>
              </div>
            </div>

            {/* NAVIGATION */}
            <div>
              <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#235738]/60">
                Navigate
              </h4>

              <nav className="mt-7">
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="group flex w-fit items-center gap-2 text-sm text-[#123C2B]/70 transition-colors duration-300 hover:text-[#E46A2A]"
                      >
                        <span>{link.title}</span>

                        <span className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                          ↗
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#235738]/60">
                Contact
              </h4>

              <div className="mt-7 space-y-8">
                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[#235738]/40">
                    Email
                  </p>

                  <a
                    href="mailto:support@hgsystems.in"
                    className="text-sm text-[#123C2B]/75 transition-colors duration-300 hover:text-[#E46A2A]"
                  >
                    support@hgsystems.in
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[#235738]/40">
                    Location
                  </p>

                  <p className="max-w-xs text-sm leading-6 text-[#123C2B]/70">
                    NASSCOM/HARTRON, Udyog Vihar Phase 1, Gurgaon,
                    Haryana, India
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}