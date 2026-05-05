"use client";

import { motion } from "framer-motion";

interface MarqueeStripProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

export default function MarqueeStrip({ 
  items, 
  direction = "left", 
  speed = 30 
}: MarqueeStripProps) {
  return (
    <div className="relative flex overflow-x-hidden border-y border-white/5 bg-white/[0.02] py-4">
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="mx-8 flex items-center gap-4 text-sm font-mono uppercase tracking-widest text-white/40"
          >
            <span className="text-accent">•</span>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
