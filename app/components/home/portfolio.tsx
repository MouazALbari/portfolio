"use client";

import { PROJECTS } from "@/constants";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProjectCard from "../base/project-card";

export default function PortfolioSection() {
  return (
    <section
      id="projects"
      className="flex flex-col container mx-auto items-center justify-center py-20"
    >
      <motion.h2
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl text-white font-extrabold mb-12"
      >
        My Top Projects
      </motion.h2>

      <div className="w-full  px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true,bulletClass:"mt-30" }}
          
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {PROJECTS.map((project) => (
            <SwiperSlide className="!cursor-grab" key={project.title}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
