"use client";
import { motion } from "framer-motion";

export default function RollingGear({
  size = 64,
  className = "",
  direction = 1,
  duration = 12,
}: {
  size?: number;
  className?: string;
  direction?: 1 | -1;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{ rotate: 360 * direction }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className={className}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
        <path
          d="M43.3 5.6l-2.4 8.9a33.5 33.5 0 0 0-8.6 3.6l-8.5-3.6-9.4 9.4 3.6 8.5a33.5 33.5 0 0 0-3.6 8.6l-8.9 2.4v13.2l8.9 2.4a33.5 33.5 0 0 0 3.6 8.6l-3.6 8.5 9.4 9.4 8.5-3.6a33.5 33.5 0 0 0 8.6 3.6l2.4 8.9h13.2l2.4-8.9a33.5 33.5 0 0 0 8.6-3.6l8.5 3.6 9.4-9.4-3.6-8.5a33.5 33.5 0 0 0 3.6-8.6l8.9-2.4V43.3l-8.9-2.4a33.5 33.5 0 0 0-3.6-8.6l3.6-8.5-9.4-9.4-8.5 3.6a33.5 33.5 0 0 0-8.6-3.6l-2.4-8.9H43.3z"
          fill="#C96A45"
          opacity="0.25"
        />
        <circle cx="50" cy="50" r="16" fill="#C96A45" opacity="0.15" />
        <circle cx="50" cy="50" r="8" fill="#C96A45" opacity="0.25" />
      </svg>
    </motion.div>
  );
}
