// app/page.tsx
"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { useRef } from "react";
import HeroSection from "./components/home/hero-section";
import AboutSection from "./components/home/about-me";
import PortfolioSection from "./components/home/portfolio";
import ContactSection from "./components/home/contact-section";
import { Skills } from "./components/home/skills";
import ServicesSection from "./components/home/services-section";


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
useEffect(() => {
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
  };
}, []);
 
  return (
    <main className="bg-[#030014]">
      <div
        ref={containerRef}
        className="flex flex-col " 
      >
        <HeroSection />
        <ServicesSection/>
        <AboutSection />
        <Skills />

               <PortfolioSection />

            <ContactSection />
      </div>
    </main>
  );
}
