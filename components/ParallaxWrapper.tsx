"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxWrapper({
  children,
  speed = 0.2,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 60}px`, `${speed * 60}px`]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
