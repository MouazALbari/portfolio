"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className=" w-screen z-30 relative  min-h-screen bg-transparent  text-white flex flex-col items-center justify-center px-8 py-20"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
          viewport={{ once: false }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold mb-6"
      >
        Contact Me
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-300 max-w-2xl text-center mb-10"
      >
        Let’s build something amazing together! Reach out to me for collaborations, full time work, or just to say hi.
      </motion.p>

      {/* Contact Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex gap-6"
      >
        <a
          href="mailto:mouazalbari@gmail.com"
          className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-xl font-semibold shadow-lg transition-all"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/mouaz-albari-8350ab203"
          target="_blank"
          className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-black rounded-xl font-semibold transition-all"
        >
          LinkedIn
        </a>
        <a
         href="whatsapp://send?text=Hello Mouaz!&phone=+963932244969"
          target="_blank"
          className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-black rounded-xl font-semibold transition-all"
        >
        Whatsapp
        </a>
      </motion.div>
    </section>
  );
}
