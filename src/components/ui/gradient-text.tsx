"use client";

import { motion } from "motion/react";

export default function GradientText({ text }: { text: string }) {
  return (
    <motion.span
      className="text-4xl font-extrabold md:text-5xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundSize: "200% 200%",
      }}
    >
      {text}
    </motion.span>
  );
}
