"use client";

import React from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export const BackgroundGlow: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* Top Center Subtle Purple Glow */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                opacity: [0.12, 0.2, 0.12],
                scale: [1, 1.05, 1],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/15 rounded-full blur-[140px]"
      />

      {/* Center Left Subtle Indigo Accent */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                opacity: [0.08, 0.15, 0.08],
                scale: [1, 1.08, 1],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] left-[-150px] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px]"
      />

      {/* Bottom Right Subtle Violet Glow */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                opacity: [0.07, 0.14, 0.07],
                scale: [1, 1.06, 1],
              }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-[10%] right-[-100px] w-[550px] h-[550px] bg-purple-800/12 rounded-full blur-[150px]"
      />

      {/* Subtle Grid Texture for Depth */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
};
