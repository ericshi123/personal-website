"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CatState = "sleeping" | "walking" | "playing";

function SleepingCat() {
  return (
    <g>
      {/* Body loaf — wide rounded dome */}
      <ellipse cx="50" cy="62" rx="34" ry="22" fill="#111111" />
      {/* Head — round, sitting on top of body */}
      <circle cx="50" cy="38" r="20" fill="#111111" />
      {/* Left ear — grows from upper-left of head */}
      <polygon points="34,30 40,16 50,28" fill="#111111" />
      {/* Right ear — grows from upper-right of head */}
      <polygon points="50,28 60,16 66,30" fill="#111111" />
      {/* Eyes closed — two curved smile lines (sleeping) */}
      <path d="M40 37 Q43 41 46 37" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M54 37 Q57 41 60 37" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Whiskers left */}
      <line x1="30" y1="38" x2="44" y2="40" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="30" y1="41" x2="44" y2="42" stroke="white" strokeWidth="1" strokeLinecap="round" />
      {/* Whiskers right */}
      <line x1="70" y1="38" x2="56" y2="40" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="70" y1="41" x2="56" y2="42" stroke="white" strokeWidth="1" strokeLinecap="round" />
      {/* Tail tucked around body */}
      <path d="M16 68 Q8 80 20 82 Q36 84 38 72" stroke="#111111" strokeWidth="7" fill="none" strokeLinecap="round" />
      {/* Paw lines on loaf */}
      <line x1="36" y1="75" x2="36" y2="82" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="50" y1="77" x2="50" y2="84" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="64" y1="75" x2="64" y2="82" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </g>
  );
}

function WalkingCat({ frame }: { frame: number }) {
  const tailCurve = frame % 2 === 0 ? "M72 70 Q85 50 80 30 Q78 18 70 22" : "M72 70 Q88 48 82 28 Q80 16 72 20";
  return (
    <g>
      {/* Body — tall egg shape */}
      <ellipse cx="50" cy="62" rx="22" ry="28" fill="#111111" />
      {/* Head */}
      <circle cx="50" cy="28" r="20" fill="#111111" />
      {/* Left ear */}
      <polygon points="34,20 40,6 50,18" fill="#111111" />
      {/* Right ear */}
      <polygon points="50,18 60,6 66,20" fill="#111111" />
      {/* Eyes — large white circles with black pupils */}
      <circle cx="42" cy="27" r="6" fill="white" />
      <circle cx="58" cy="27" r="6" fill="white" />
      <circle cx="43" cy="28" r="3" fill="#111111" />
      <circle cx="59" cy="28" r="3" fill="#111111" />
      {/* Eye shine */}
      <circle cx="44" cy="26" r="1" fill="white" />
      <circle cx="60" cy="26" r="1" fill="white" />
      {/* Whiskers left */}
      <line x1="28" y1="30" x2="42" y2="33" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="28" y1="34" x2="42" y2="35" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      {/* Whiskers right */}
      <line x1="72" y1="30" x2="58" y2="33" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="72" y1="34" x2="58" y2="35" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      {/* Front paws at bottom */}
      <ellipse cx="40" cy="87" rx="9" ry="5" fill="#111111" />
      <ellipse cx="60" cy="87" rx="9" ry="5" fill="#111111" />
      {/* Tail — animated curve */}
      <path d={tailCurve} stroke="#111111" strokeWidth="7" fill="none" strokeLinecap="round" />
    </g>
  );
}

function PlayingCat() {
  return (
    <g>
      {/* Body on back — wide rounded shape */}
      <ellipse cx="50" cy="60" rx="30" ry="22" fill="#111111" />
      {/* Head tilted to side */}
      <circle cx="30" cy="42" r="18" fill="#111111" />
      {/* Left ear */}
      <polygon points="16,36 20,22 30,32" fill="#111111" />
      {/* Right ear */}
      <polygon points="30,32 40,22 44,34" fill="#111111" />
      {/* Eyes — wide and excited */}
      <circle cx="24" cy="42" r="6" fill="white" />
      <circle cx="37" cy="40" r="6" fill="white" />
      <circle cx="25" cy="43" r="3" fill="#111111" />
      <circle cx="38" cy="41" r="3" fill="#111111" />
      {/* Eye shine */}
      <circle cx="26" cy="41" r="1" fill="white" />
      <circle cx="39" cy="39" r="1" fill="white" />
      {/* Whiskers */}
      <line x1="10" y1="44" x2="22" y2="46" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="10" y1="47" x2="22" y2="48" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="46" y1="43" x2="34" y2="46" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="46" y1="46" x2="34" y2="48" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      {/* Paws in the air */}
      <ellipse cx="38" cy="22" rx="7" ry="9" fill="#111111" transform="rotate(-20, 38, 22)" />
      <ellipse cx="58" cy="18" rx="7" ry="9" fill="#111111" transform="rotate(15, 58, 18)" />
      <ellipse cx="72" cy="28" rx="7" ry="9" fill="#111111" transform="rotate(30, 72, 28)" />
      {/* Tail up and curling */}
      <path d="M76 68 Q90 50 84 32 Q80 22 72 28" stroke="#111111" strokeWidth="7" fill="none" strokeLinecap="round" />
      {/* Belly line hint */}
      <line x1="34" y1="62" x2="66" y2="62" stroke="white" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
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
          width="100"
          height="100"
          viewBox="0 0 100 100"
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
