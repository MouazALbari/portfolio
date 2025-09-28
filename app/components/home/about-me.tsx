"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about-me"
      className="w-screen relative bg-transparent text-white flex items-center justify-center px-8 py-30"
    >
      <div className="max-w-5xl w-full text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-8"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          I’m <span className="font-bold text-pink-500">Mouaz Albari</span>, a
          Senior Frontend Engineer with{" "}
          <span className="font-bold">5+ years of experience</span> building
          immersive, scalable, and futuristic web experiences. Specialized in{" "}
          <span className="text-blue-400">React</span>,{" "}
          <span className="text-gray-400">Next.js</span>,
          <span className="text-cyan-400"> Three.js</span>, and advanced
          animations with
          <span className="text-green-400"> GSAP</span>.
        </motion.p>

        {/* Extended Skills */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6"
        >
          I have strong expertise in{" "}
          <span className="font-semibold text-purple-400">
            scalable system architectures
          </span>
          , working with{" "}
          <span className="font-semibold text-yellow-400">large teams</span> on
          complex projects, and delivering maintainable solutions using{" "}
          <span className="font-semibold text-pink-400">monorepos</span> and{" "}
          <span className="font-semibold text-cyan-400">micro frontends</span>.
          My focus is on clean code, team collaboration, and building
          high-performance products that can scale to millions of users.
        </motion.p>
      </div>
    </section>
  );
}
