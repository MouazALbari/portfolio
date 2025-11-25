"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconType } from "react-icons";

type SkillDataProviderProps = {
  Icon: IconType;
  name: string;
  index: number;
  size?: number;
  color?: string; // لون الأيقونة
};

export const SkillDataProvider = ({
  Icon,
  index,
  size = 80,
  color = "#000",
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={iconVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex flex-col items-center max-sm:gap-1 gap-2"
    >
      <Icon size={size} className="max-lg:w-10 max-sm:w-6 max-sm:h-6 max-lg:h-10" color={color} />
    </motion.div>
  );
};
