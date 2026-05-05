"use client";

import { ArrowRight } from "lucide-react";

export default function CtaButton({ className = "" }: { className?: string }) {
  return (
    <button
      onClick={() => {
        document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
      }}
      className={`group relative px-8 py-4 bg-academy-red text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_#E63946] flex items-center justify-center gap-2 ${className}`}
    >
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
      <span className="relative z-10 flex items-center gap-2">
        ASEGURAR MI CUPO
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </span>
    </button>
  );
}
