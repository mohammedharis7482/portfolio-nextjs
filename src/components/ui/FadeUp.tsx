"use client";

import { motion } from "framer-motion";

type FadeUpProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: FadeUpProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 1, 0.5, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;