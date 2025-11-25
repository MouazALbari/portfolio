"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about-me"
      className="relative w-screen z-10 px-8 py-32 flex items-center justify-center text-white"
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/5 to-transparent opacity-20 blur-3xl" />

      <div className="max-w-4xl w-full text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight
          bg-gradient-to-r from-purple-500  to-cyan-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {/* Small Divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "90px", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-[3px] bg-gradient-to-r from-purple-500  to-cyan-500 mx-auto mt-4 rounded-full"
        />

        {/* Main Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mt-10 max-w-3xl mx-auto"
        >
          {" I'm "}
          <span className="font-semibold text-purple-300">
            Mouaz Albari
          </span>
          , a Senior Frontend Engineer with{" "}
          <span className="font-semibold text-white">5+ years of experience</span>{" "}
          crafting immersive, scalable, and futuristic web experiences.
          Specialized in{" "}
          <span className="text-blue-400 font-medium">React</span>,{" "}
          <span className="text-gray-300 font-medium">Next.js</span>,{" "}
          <span className="text-cyan-400 font-medium">Three.js</span>, and
          creating premium UI animations with{" "}
          <span className="text-green-400 font-medium">GSAP</span>.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-8"
        >
          I excel in{" "}
          <span className="font-semibold text-purple-300">
            scalable system architectures
          </span>
          , collaborating with{" "}
          <span className="font-semibold text-yellow-300">large teams</span> to
          deliver robust, maintainable solutions using{" "}
          <span className="font-semibold text-pink-300">monorepos</span> and{" "}
          <span className="font-semibold text-cyan-300">micro frontends</span>.
          My focus is always on clean code, performance, and building products
          that scale to millions of users.
        </motion.p>
      </div>
    </section>
  );
}
