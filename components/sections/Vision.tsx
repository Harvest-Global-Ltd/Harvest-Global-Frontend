import Link from "next/link";

const Vision = () => {
  return (
    <section
      id="vision"
      className="
        relative min-h-screen w-full overflow-hidden
        bg-[#020914]

        bg-[url('/images/site-bg/bg-10.png')]
        bg-cover bg-center bg-no-repeat
      "
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020914]/95 via-[#020914]/70 to-transparent" />

      {/* Content */}
      <div
        className="
          relative z-10 mx-auto flex min-h-screen w-full
container items-center
          px-5 py-28
        "
      >
        <div
          className="
            w-full 
            text-left

   space-y-14
          "
        >
          <h2
            className="
                text-4xl md:text-5xl  lg:text-7xl font-bold uppercase

              "
          >
            Vision HG
          </h2>
          <p
            className="
            text-xl md:text-2xl  font-semibold
            "
          >
            Real time Earth and Weather Intelligence{" "}
            <span className="text-green-800">at scale</span>
            <br />
            <span className="text-white/70">from core and edge with</span>
            <span className="text-white/70">strategic investments in</span>
            <br />
            <span className="text-[#d99a45]">sovereign enterprise AI DCs</span>
            <span className="text-[#d99a45]">and Ground Segment</span>{" "}
            <span className="text-[#d99a45]">infrastructure.</span>
          </p>

          {/* Small divider */}
          <div className="my-7 h-px w-12 bg-[#35d6a1] sm:my-9 sm:w-14" />

          {/* Description */}
          <p
            className="
max-w-4xl
              text-lg
              md:text-2xl

            "
          >
            Harvest Global SSP Pvt Ltd (HG Systems) builds enterprise-grade
            GeoAI infrastructure, foundation models and sovereign AI
            environments for governments, industries and research institutions.
          </p>
        </div>
      </div>

      {/* Right-side navigation — desktop only */}
      <div
        className="
          absolute right-10 top-1/2 z-20 hidden
          -translate-y-1/2
          lg:block
        "
      ></div>

      {/* Bottom-right statement — desktop */}
      <div
        className="
          absolute bottom-12 right-10 z-20
          hidden lg:block
        "
      ></div>
    </section>
  );
};

export default Vision;
