"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CatState = "sleeping" | "walking" | "playing";

function SleepingCat() {
  return (
    <g>
      <ellipse cx="40" cy="55" rx="28" ry="18" fill="#1a1a1a" />
      <circle cx="62" cy="44" r="14" fill="#1a1a1a" />
      {/* Left ear - emerges from top-left of head */}
      <polygon points="52,38 56,24 62,36" fill="#1a1a1a" />
      {/* Right ear - emerges from top-right of head */}
      <polygon points="62,36 68,24 72,38" fill="#1a1a1a" />
      {/* Left ear inner */}
      <polygon points="54,36 57,26 61,35" fill="#e88fa0" />
      {/* Right ear inner */}
      <polygon points="63,35 67,26 70,36" fill="#e88fa0" />
      <path d="M57 44 Q60 47 63 44" stroke="#FAF8F5" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M64 44 Q67 47 70 44" stroke="#FAF8F5" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <ellipse cx="63" cy="49" rx="2" ry="1.5" fill="#C96A45" />
      <path d="M15 50 Q5 30 20 25 Q35 20 30 40" stroke="#1a1a1a" strokeWidth="6" fill="none" strokeLinecap="round" />
      <ellipse cx="35" cy="68" rx="8" ry="4" fill="#1a1a1a" />
      <ellipse cx="50" cy="70" rx="8" ry="4" fill="#1a1a1a" />
    </g>
  );
}

function WalkingCat({ frame }: { frame: number }) {
  const off = frame % 2 === 0 ? 5 : -5;
  return (
    <g>
      <ellipse cx="42" cy="50" rx="25" ry="15" fill="#1a1a1a" />
      <circle cx="64" cy="40" r="14" fill="#1a1a1a" />
      {/* Left ear */}
      <polygon points="54,34 58,20 64,32" fill="#1a1a1a" />
      {/* Right ear */}
      <polygon points="64,32 70,20 74,34" fill="#1a1a1a" />
      {/* Left ear inner */}
      <polygon points="56,32 59,22 63,31" fill="#e88fa0" />
      {/* Right ear inner */}
      <polygon points="65,31 69,22 72,32" fill="#e88fa0" />
      <circle cx="60" cy="40" r="3" fill="#FAF8F5" />
      <circle cx="69" cy="40" r="3" fill="#FAF8F5" />
      <circle cx="60" cy="40" r="1.5" fill="#111" />
      <circle cx="69" cy="40" r="1.5" fill="#111" />
      <ellipse cx="64" cy="46" rx="2" ry="1.5" fill="#C96A45" />
      <line x1="54" y1="45" x2="42" y2="43" stroke="#FAF8F5" strokeWidth="0.8" opacity="0.7" />
      <line x1="54" y1="47" x2="42" y2="47" stroke="#FAF8F5" strokeWidth="0.8" opacity="0.7" />
      <path d="M18 50 Q10 30 22 18 Q28 12 32 20" stroke="#1a1a1a" strokeWidth="6" fill="none" strokeLinecap="round" />
      <line x1="35" y1="62" x2={35 + off} y2="78" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />
      <line x1="45" y1="63" x2={45 - off} y2="78" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />
      <line x1="52" y1="62" x2={52 + off} y2="78" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />
      <line x1="28" y1="60" x2={28 - off} y2="76" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />
    </g>
  );
}

function PlayingCat() {
  return (
    <g>
      <ellipse cx="45" cy="55" rx="22" ry="14" fill="#1a1a1a" transform="rotate(-15, 45, 55)" />
      <circle cx="66" cy="35" r="14" fill="#1a1a1a" />
      {/* Left ear */}
      <polygon points="56,29 60,15 66,27" fill="#1a1a1a" />
      {/* Right ear */}
      <polygon points="66,27 72,15 76,29" fill="#1a1a1a" />
      {/* Left ear inner */}
      <polygon points="58,27 61,17 65,26" fill="#e88fa0" />
      {/* Right ear inner */}
      <polygon points="67,26 71,17 74,27" fill="#e88fa0" />
      <circle cx="62" cy="35" r="4" fill="#FAF8F5" />
      <circle cx="72" cy="35" r="4" fill="#FAF8F5" />
      <circle cx="62" cy="35" r="2" fill="#111" />
      <circle cx="72" cy="35" r="2" fill="#111" />
      <ellipse cx="66" cy="41" rx="2" ry="1.5" fill="#C96A45" />
      <line x1="60" y1="48" x2="50" y2="68" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />
      <line x1="50" y1="50" x2="38" y2="68" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />
      <line x1="30" y1="58" x2="22" y2="75" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />
      <line x1="38" y1="62" x2="32" y2="78" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />
      <path d="M25 52 Q10 35 18 20 Q24 10 30 22 Q36 34 20 38" stroke="#1a1a1a" strokeWidth="6" fill="none" strokeLinecap="round" />
    </g>
  );
}

export default function BlackCat() {
  const [catState, setCatState] = useState<CatState>("sleeping");
  const [walkFrame, setWalkFrame] = useState(0);

  useEffect(() => {
    if (catState !== "walking") return;
    const interval = setInterval(() => setWalkFrame((f) => f + 1), 300);
    return () => clearInterval(interval);
  }, [catState]);

  useEffect(() => {
    if (catState !== "sleeping") return;
    const t = setTimeout(() => setCatState("walking"), 8000);
    return () => clearTimeout(t);
  }, [catState]);

  useEffect(() => {
    if (catState !== "walking") return;
    const stateTimer = setTimeout(() => setCatState("playing"), 6000);
    return () => clearTimeout(stateTimer);
  }, [catState]);

  useEffect(() => {
    if (catState !== "playing") return;
    const t = setTimeout(() => setCatState("sleeping"), 5000);
    return () => clearTimeout(t);
  }, [catState]);

  const cycleState = () => {
    setCatState((s) =>
      s === "sleeping" ? "walking" : s === "walking" ? "playing" : "sleeping"
    );
  };

  const tooltips: Record<CatState, string> = {
    sleeping: "Wake up",
    walking: "Play!",
    playing: "Sleep...",
  };

  const dotColors: Record<CatState, string> = {
    sleeping: "#A8A29E",
    walking: "#C96A45",
    playing: "#78716C",
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.05}
      className="fixed z-40 group"
      style={{
        right: 0,
        bottom: "30%",
        cursor: "grab",
      }}
      whileDrag={{ cursor: "grabbing", scale: 1.05 }}
      onClick={cycleState}
    >
      <div className="absolute right-[94px] top-1/2 -translate-y-1/2 bg-[#1C1917] text-[#FAF8F5] text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {tooltips[catState]}
      </div>

      <AnimatePresence>
        {catState === "sleeping" && (
          <motion.div
            key="zzz"
            className="absolute -top-7 right-8 text-[#78716C] font-semibold text-sm select-none pointer-events-none"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 1, 0], y: -18 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            zzz
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={
          catState === "playing"
            ? { scale: [1, 1.08, 1, 1.05, 1], rotate: [-3, 3, -3, 3, 0] }
            : catState === "walking"
            ? { x: [0, -3, 0, 3, 0] }
            : { scale: [1, 1.02, 1] }
        }
        transition={
          catState === "playing"
            ? { duration: 0.6, repeat: Infinity }
            : catState === "walking"
            ? { duration: 0.6, repeat: Infinity }
            : { duration: 3, repeat: Infinity }
        }
      >
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.18))" }}
        >
          {catState === "sleeping" && <SleepingCat />}
          {catState === "walking" && <WalkingCat frame={walkFrame} />}
          {catState === "playing" && <PlayingCat />}
        </svg>
      </motion.div>

      <div
        className="absolute bottom-0 right-2 w-2 h-2 rounded-full"
        style={{ backgroundColor: dotColors[catState] }}
      />
    </motion.div>
  );
}
