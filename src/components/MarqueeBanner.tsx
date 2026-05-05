"use client";

import { motion } from "framer-motion";

export default function MarqueeBanner() {
  return (
    <div 
      className="fixed top-0 left-0 w-full z-[100] bg-academy-red text-white py-1.5 overflow-hidden flex items-center cursor-pointer shadow-lg"
      onClick={() => document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" })}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15,
        }}
      >
        {/* We repeat the phrase multiple times to ensure seamless infinite scrolling */}
        {[...Array(15)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 px-4 text-xs font-bold tracking-[0.2em]">
            <span>ASEGURA TU CUPO VIP GRATIS</span>
            <span className="text-sm">⭐</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
