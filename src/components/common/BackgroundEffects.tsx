"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] right-[-180px] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[180px]"
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-180px] left-[20%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[180px]"
      />

      {/* Center Ambient */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.02] rounded-full blur-[200px]"
      />
    </div>
  );
}