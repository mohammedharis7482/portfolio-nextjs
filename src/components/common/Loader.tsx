"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[180px]" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative z-10 text-center"
          >
            {/* Name */}
            <motion.h1
              initial={{
                opacity: 0,
                letterSpacing: "0.4em",
              }}
              animate={{
                opacity: 1,
                letterSpacing: "0.08em",
              }}
              transition={{
                duration: 1.2,
              }}
              className="text-4xl md:text-6xl font-semibold mb-5"
            >
              Mohammed Haris
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.4,
                duration: 1,
              }}
              className="text-white/45 text-sm md:text-base uppercase tracking-[0.35em]"
            >
              Crafting Premium Digital Experiences
            </motion.p>

            {/* Loading Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "220px" }}
              transition={{
                delay: 0.7,
                duration: 1.2,
              }}
              className="h-[2px] bg-white mt-10 mx-auto rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}