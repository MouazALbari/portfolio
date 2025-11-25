"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute max-lg:opacity-20 max-lg:top-[-20%] top-[-50%] left-0 w-full h-screen object-cover"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      {/* Hero Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center container mx-auto px-8 mt-20 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          {/* Title */}
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <h1 className="Welcome-text max-md:!text-white text-[13px] tracking-wider uppercase">
          Senior Frontend Engineer
            </h1>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6  text-4xl lg:text-6xl font-extrabold text-white max-w-[700px] w-auto h-auto leading-tight"
          >
            
            <span>
              Building{" "}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                modern & scalable
              </span>{" "}
              web experiences.
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-300 my-3 max-w-[700px] leading-relaxed"
          >
           I help businesses grow with fast, modern, and visually stunning websites using Next.js, React, and Tailwind.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={slideInFromLeft(1)}
            className="flex gap-4 mt-4"
          >
            <a
              href="#projects"
              className="py-3 px-6 button-primary text-center text-white font-medium cursor-pointer rounded-lg max-w-[200px] bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="py-3 px-6 border border-gray-400 text-gray-200 rounded-lg hover:bg-white hover:text-black transition"
            >
            Contact
            </a>
          </motion.div>
        </div>

        {/* Right Side Image */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full hidden lg:flex justify-center items-center"
        >
          <Image
            src="/hero-bg.svg"
            alt="Developer Illustration"
            height={650}
            width={650}
            draggable={false}
            className="select-none"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
export default HeroSection;
