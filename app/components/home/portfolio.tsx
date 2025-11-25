"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { PROJECTS } from "@/constants";
import ProjectCard from "../base/project-card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        x: () => -(element.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "center center",
          end: () => "+=" + element.scrollWidth,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
      const cards = element.querySelectorAll<HTMLDivElement>(
        ".project-card-wrapper"
      );
      const numCards = cards.length;
      // Animate each card fade & scale
      gsap.from(".project-card-content", {
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        end: () => "+=" + window.innerHeight * numCards,
        scrub: true,
        duration: 1,

        stagger: 0.2,
        ease: "power2.out",
      });
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-screen bg-gradient-to-tr  py-24   z-10 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl leading-a font-extrabold tracking-tight
          bg-gradient-to-r text-center from-purple-500 to-cyan-500 bg-clip-text text-transparent"
      >
        Top Projects
      </motion.h2>{" "}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "90px", opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="h-[3px] bg-gradient-to-r from-purple-500  to-cyan-500  mx-auto mt-4 rounded-full"
      />
      <div
      id='projects'
        ref={scrollRef}
        className="lg:flex hidden  pe-32  w-max gap-32 mt-10"
      >
        <div></div>
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="flex-shrink-0 hover:scale-110 transition-all duration-1000 ease-in-out flex justify-center items-center mt-12 max-w-[70vw] md:max-w-[80vw] h-[100vh]  relative"
          >
            <div className="w-full group relative rounded-3xl overflow-hidden shadow-2xl    transition-all duration-500   project-card-content">
              {/* Subtle overlay */}
              <div className="absolute inset-0  pointer-events-none"></div>

              {/* Card content */}
              <ProjectCard {...project} />
            </div>
          </div>
        ))}
      </div>
      <div className=" lg:hidden gap-4  flex flex-col   w-max ">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="flex-shrink-0 lg:px-12 px-6 max-w-[100vw] flex justify-center items-center mt-12  relative"
          >
            <div className="w-full group relative rounded-3xl overflow-hidden shadow-2xl    transition-all duration-500 ">
              {/* Subtle overlay */}

              {/* Card content */}
              <ProjectCard {...project} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
