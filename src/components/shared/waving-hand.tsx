"use client";

import { motion } from "motion/react";

export default function WavingHand() {
  return (
    <motion.span
      animate={{ rotate: [0, 20, 0, -20, 0] }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop",
        easing: "ease-in-out",
      }}
      className="inline-block text-5xl"
    >
      🖐🏼
    </motion.span>
  );
}
