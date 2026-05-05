"use client";

import { PlayCircle } from "lucide-react";

export default function TestimonialButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://drive.google.com/drive/folders/1YOpVymQzQvLjD6yogYWn9NLN8pAJjgm5?usp=share_link"
      target="_blank"
      rel="noopener noreferrer"
      className={`group px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium text-lg rounded-full transition-all flex items-center justify-center gap-3 hover:border-academy-yellow/30 ${className}`}
    >
      <PlayCircle className="w-5 h-5 text-academy-yellow group-hover:scale-110 transition-transform" />
      Ver Testimonios y Casos de Éxito
    </a>
  );
}
