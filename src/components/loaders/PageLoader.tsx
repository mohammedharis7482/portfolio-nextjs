"use client";

import { motion, AnimatePresence } from "framer-motion";

interface PageLoaderProps {
  isLoading: boolean;
}

export default function PageLoader({
  isLoading,
}: PageLoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* BACKGROUND GLOW */}
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[180px]" />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center px-6">
            {/* LOGO */}
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white text-black flex items-center justify-center text-3xl font-semibold tracking-[0.22em]"
            >
              MH
            </motion.div>

            {/* NAME */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="mt-8 text-[30px] sm:text-2xl font-medium tracking-[0.14em] sm:tracking-[0.18em] text-center"
            >
              Mohammed Haris
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="mt-3 px-6 sm:px-0 text-center uppercase tracking-[0.22em] sm:tracking-[0.32em] text-white/40 text-[11px] sm:text-sm leading-[1.9] max-w-[320px] sm:max-w-none"
            >
              Frontend Developer & UI/UX Designer
            </motion.p>

            {/* LOADING BAR */}
            <div className="relative mt-12 w-[220px] sm:w-[240px] h-[2px] bg-white/10 overflow-hidden rounded-full">
              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "100%",
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-y-0 w-1/2 bg-white"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}