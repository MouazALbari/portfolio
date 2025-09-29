"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MyStars from "./stars";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      interval = setInterval(() => {
        setProgress((old) => {
          if (old >= 100) {
            clearInterval(interval);
            setTimeout(() => setLoading(false), 1000);
            return 100;
          }
          return old + 5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.3 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* 🌌 خلفية النجوم */}
          <MyStars />

          {/* ✨ Nebula Glow */}
          <motion.div
            className="absolute w-[150%] h-[150%] bg-gradient-radial from-purple-800/40 via-cyan-700/20 to-transparent blur-3xl"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          />

          {/* 🔮 العنوان */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-2xl lg:text-4xl cursive md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-lg text-center"
          >
            👋 Hey there!  ,<span className="cursive"> I'm Mouaz</span><br />
            <span className="text-white text-2xl my-4"> </span>
          </motion.h1>

          {/* ⭕ دائرة التحميل */}
          <div className="relative z-10 mt-12 w-40 h-40 flex items-center justify-center">
            {/* النص يبقى ثابت */}
            <span className="absolute text-white font-semibold text-2xl">
              {progress}%
            </span>

            {/* الحلقة المتحركة */}
            <motion.div
              className="absolute inset-0 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            >
              <motion.svg
                className="w-full h-full"
                viewBox="0 0 100 100"
              >
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#gradient)"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 45}
                  strokeDashoffset={
                    2 * Math.PI * 45 - (progress / 100) * (2 * Math.PI * 45)
                  }
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#9333ea" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </motion.div>
          </div>

          {/* ✨ Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative z-10 mt-8 text-lg md:text-xl text-gray-300 tracking-widest"
          >
            🚀 Crafting your cosmic experience...
          </motion.p>

          {/* نبضة عند الانتهاء */}
          {progress === 100 && (
            <motion.div
              className="absolute w-[200%] h-[200%] bg-gradient-radial from-purple-500/30 to-transparent"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 2 }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
