"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
};

export default function SlideIn({
  children,
  direction = "left",
  delay = 0,
  className,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: direction === "left" ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}