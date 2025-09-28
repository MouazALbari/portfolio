/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
function RotatingStars() {
  const starsRef = useRef<any>(null);
  const scrollRef = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollRef.current = scrollY * 0.001;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y = scrollRef.current;
      starsRef.current.rotation.x = scrollRef.current * 0.5;
    }
  });
  return (
    <group ref={starsRef}>
      {" "}
      <Stars radius={100} depth={50} count={5000} factor={4} fade />{" "}
    </group>
  );
}
function MyStars() {
  return (
    <div className="fixed left-0 top-0 bottom-0 right-0 w-screen h-screen -z-0">
      {" "}
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        {" "}
        <ambientLight intensity={0.6} /> <pointLight position={[10, 10, 10]} />{" "}
        <RotatingStars />{" "}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          
        />
      </Canvas>{" "}
      
    </div>
  );
}
export default MyStars;
