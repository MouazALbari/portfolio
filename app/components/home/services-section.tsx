import { motion } from "framer-motion";
import { Globe, Palette, Flashlight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Custom Websites",
      description:
        "High-performance websites crafted for growth, speed, and conversion.",
      icon: <Globe className="w-12 h-12" />,
    },
    {
      title: "Landing Pages",
      description:
        "Fast, modern landing pages optimized for ads, sales, and audience trust.",
      icon: <Flashlight className="w-12 h-12" />,
    },
    {
      title: "UI/UX Redesign",
      description:
        "Transform outdated interfaces into clean, premium, conversion-driven experiences.",
      icon: <Palette className="w-12 h-12" />,
    },
  ];

  return (
    <section className="relative  z-10 py-24 w-full overflow-hidden ">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight
          bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Services{" "}
        </motion.h2>{" "}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "90px", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-[3px] bg-gradient-to-r from-purple-500  to-cyan-500  mx-auto mt-4 rounded-full"
        />
        <div className="grid grid-cols-1  mt-10 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -8 }}
              className="group relative rounded-3xl p-10 
              bg-white/5 backdrop-blur-xl 
              border border-white/10 
              hover:border-blue-500/40 
              transition-all duration-300 shadow-xl"
            >
              {/* Glow Hover */}
              <div
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-40 blur-[40px]
              bg-gradient-to-br from-blue-500/40 to-purple-600/40 transition duration-300"
              />

              {/* Icon */}
              <motion.div
                transition={{ type: "spring", stiffness: 220, damping: 12 }}
                className="flex group-hover:rotate-2 transition-all duration-200 group-hover:scale-[1.2] items-center justify-center w-20 h-20 
                mx-auto mb-6 rounded-2xl bg-white/10 backdrop-blur-md
                text-white shadow-lg"
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3
                className="text-xl font-semibold mb-3 
              group-hover:text-blue-400  text-white transition-colors"
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
