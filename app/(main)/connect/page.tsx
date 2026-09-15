import type { Metadata } from "next";
import Image from "next/image";
import ConnectForm from "./_component/Contactform";

export const metadata: Metadata = {
  title: "Connect — Harvest Global | HG Systems",
  description:
    "Get in touch with Harvest Global for GeoAI partnerships, Earth Observation projects, and sovereign AI cloud deployments.",
  alternates: {
    canonical: "https://www.hgsystems.in/connect",
  },
};

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

              <h1 className="text-left text-2xl font-extrabold md:text-5xl">
                Intelligence starts with a
                <span className="ml-2 text-green-700">
                  conversation.
                </span>
              </h1>

              <div>
                <p className="text-left text-xl">
                  Have an idea, requirement or partnership to discuss?
                </p>

                <p className="text-left text-4xl font-bold">
                  Let&apos;s
                  <span className="ml-2 text-green-700">
                    Connect!
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
<ConnectForm/>
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
