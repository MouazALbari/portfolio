"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectCardProps = {
  image?: string;
  title?: string;
  description?: string;
  link?: string;
  tools?: string[];
};

export default function ProjectCard({
  image,
  title,
  description,
  link,
  tools = [],
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-8 px-4 lg:px-0"
    >
      {/* Image */}
      <motion.div
     
        className="relative w-full lg:w-1/2 h-60 lg:h-[30rem] bg-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
      >
        <Image
          src={image ?? "/placeholder.png"}
          alt={title ?? "Project Image"}
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-5 w-full lg:w-1/2  lg:text-left"
      >
        <h2 className="text-xl lg:text-5xl font-extrabold text-white tracking-wide">
          {title}
        </h2>

        <p className="text-gray-300 leading-relaxed text-sm lg:text-xl">
          {description}
        </p>

        <div className="flex flex-wrap gap-3  lg:justify-start">
          {tools?.map((tool, idx) => (
            <span
              key={idx}
              className="px-4 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white/90 hover:bg-white/20 transition"
            >
              {tool}
            </span>
          ))}
        </div>

        <Link
          href={link ?? "#"}
          target="_blank"
          className="mt-4 hidden lg:flex w-16 h-16  duration-400 ease-in-out  hover:animate-pulse items-center justify-center rounded-full text-4xl border-2 border-white text-white font-bold  cursor-pointer hover:scale-105 hover:border-4 transition-all"
        >
          ↗
        </Link>
      </motion.div>
    </motion.div>
  );
}
