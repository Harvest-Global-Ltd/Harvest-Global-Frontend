"use client";

import Image from "next/image";

const ConnectPage = () => {
  return (
    <section
      id="connect"
      className="relative  mx-auto min-h-screen overflow-hidden bg-black"
    >
      {/* Background */}
      <Image
        src="/images/site-bg/connect-page.png"
        alt=""
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div
        className="
          relative z-10 container mx-auto
          mt-30
          px-5
          md:py-20
        "
      >
        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          {/* LEFT */}
          <div className="relative z-10 flex flex-col justify-between text-white">
            <div className="space-y-5 md:space-y-8">
              <p className="text-left text-xl tracking-widest">
                CONNECT WITH HGSYSTEMS
              </p>

              <p className="text-left text-2xl font-extrabold md:text-5xl">
                Intelligence starts with a
                <span className="ml-2 text-green-700">
                  conversation.
                </span>
              </p>

              <div>
                <h4 className="text-left text-xl">
                  Have an idea, requirement or partnership to discuss?
                </h4>

                <h4 className="text-left text-4xl font-bold">
                  Let’s
                  <span className="ml-2 text-green-700">
                    Connect!
                  </span>
                </h4>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
<div
  className="
    connect-block
    rounded-md
    border border-white/20
    bg-[#0E1C20]/90
    p-5
    text-white
    backdrop-blur-md
  "
>
            <p className="mb-8 text-sm">Fill in our form:</p>

            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                className="
                  border-b border-white/30
                  bg-transparent
                  px-3 py-5
                  text-white
                  outline-none
                  placeholder:text-white/40
                  focus:border-white
                "
              />

              <input
                type="email"
                placeholder="Email address"
                className="
                  border-b border-white/30
                  bg-transparent
                  px-3 py-5
                  text-white
                  outline-none
                  placeholder:text-white/40
                  focus:border-white
                "
              />

              <textarea
                placeholder="Your message"
                rows={4}
                className="
                  resize-none
                  border-b border-white/30
                  bg-transparent
                  px-3 py-5
                  text-white
                  outline-none
                  placeholder:text-white/40
                  focus:border-white
                "
              />

              <button
                type="submit"
                className="
                  mt-7 w-fit cursor-pointer
                  rounded-md
                  bg-orange-500
                  px-7 py-4
                  text-sm
                  uppercase
                  tracking-wide
                  text-white
                  transition-all
                  hover:scale-105
                "
              >
                Submit message
              </button>
            </form>
          </div>
        </div>

        {/* SOCIALS — SINGLE COMPONENT */}
        <div
          className="
            connect-block
            mt-10
            flex flex-col
            md:mt-16
            lg:mt-20
            lg:w-1/2
          "
        >
          <div className="flex flex-col gap-5 md:gap-10">
            <p className="text-sm text-white/60">
              support@hgsystems.in
            </p>

            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/harvest-global-ssp-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  group flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-[#235738]/20
                  transition-all duration-300
                  hover:border-[#E46A2A]
                  hover:bg-[#E46A2A]
                "
              >
                <Image
                  src="/svg/linkedIn.svg"
                  alt="LinkedIn"
                  width={18}
                  height={18}
                  className="invert transition-all duration-300 group-hover:invert-0"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/harvestglobalssp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  group flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-[#235738]/20
                  transition-all duration-300
                  hover:border-[#E46A2A]
                  hover:bg-[#E46A2A]
                "
              >
                <Image
                  src="/svg/insta.svg"
                  alt="Instagram"
                  width={18}
                  height={18}
                  className="invert transition-all duration-300 group-hover:invert-0"
                />
              </a>

              {/* X */}
              <a
                href="https://x.com/HarvestG_Ssp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="
                  group flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-[#235738]/20
                  transition-all duration-300
                  hover:border-[#E46A2A]
                  hover:bg-[#E46A2A]
                "
              >
                <Image
                  src="/svg/X.svg"
                  alt="X"
                  width={18}
                  height={18}
                  className="invert transition-all duration-300 group-hover:invert-0"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectPage;