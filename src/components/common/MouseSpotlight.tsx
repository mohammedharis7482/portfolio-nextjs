"use client";

import { motion } from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

export default function MouseSpotlight() {
  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  useEffect(() => {
    const updateMouse = (
      e: MouseEvent
    ) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      updateMouse
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        updateMouse
      );
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 180,
        y: position.y - 180,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 120,
        mass: 0.5,
      }}
      className="fixed top-0 left-0 w-[360px] h-[360px] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none z-[1]"
    />
  );
}