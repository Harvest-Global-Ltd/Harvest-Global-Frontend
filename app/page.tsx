import Hero from "@/components/Hero";
import Footer from "@/components/footer/Footer";

import Navbar from "@/components/Navbar";
import HeroReveal from "@/components/ui/HeroReveal";
import LazySection from "@/components/ui/LazySection";
import Vision from "@/components/sections/Vision";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        <Hero />
        <HeroReveal />
        <LazySection id="partners" />
        <Vision />
        <LazySection id="challenge" />
        <LazySection id="technology" />
        <LazySection id="roadmap" />
        <LazySection id="unified-geo-stack" />
        <LazySection id="applications" />
        <LazySection id="final-cta" />
      </main>

      <Footer />
    </>
  );
}