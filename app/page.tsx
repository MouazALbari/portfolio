// app/components/ComingSoon.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef, useEffect } from "react";
import gsap from "gsap";



export default function ComingSoon() {
  const comingRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate Coming Soon
    gsap.fromTo(
      comingRef.current,
      { opacity: 0, y: -50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 2, ease: "power3.out" }
    );

    // Animate Name
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 2, ease: "power3.out", delay: 0.5 }
    );

    // Animate Subtitle
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 1 }
    );
  }, []);

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-black via-[#0b153a] to-black overflow-hidden">
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        {/* Coming Soon */}
        <div
          ref={comingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-widest"
        >
          Coming Soon
        </div>

        {/* Name */}
        <div
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-wider drop-shadow-lg"
        >
          Mouaz Albarri
        </div>

        {/* Subtitle */}
        <div
          ref={subtitleRef}
          className="text-lg md:text-2xl lg:text-3xl text-gray-300 mt-4 drop-shadow-md"
        >
          Crafting futuristic, bold, and immersive web experiences
        </div>

        <p className="text-gray-400 mt-6 md:mt-8 text-md md:text-lg">
          Senior Front End Engineer | React, Next.js, Three.js
        </p>
      </div>
    </div>
  );
}
