"use client";

import { motion } from "framer-motion";
import { Bot, Search, Sparkles, Wand2 } from "lucide-react";
import CtaButton from "./CtaButton";
import TestimonialButton from "./TestimonialButton";

const problems = [
  {
    icon: <Sparkles className="w-8 h-8 text-academy-red" />,
    title: "Meta integró Andromeda",
    text: "El nuevo modelo de IA de Meta optimiza creativos automáticamente. Quien no lo entienda, paga más por menos.",
  },
  {
    icon: <Search className="w-8 h-8 text-academy-red" />,
    title: "TikTok se convirtió en buscador",
    text: "SearchTok cambió cómo te descubren. El SEO ya no vive solo en Google.",
  },
  {
    icon: <Bot className="w-8 h-8 text-academy-red" />,
    title: "Llegó la era del AIO",
    text: "Los usuarios preguntan a ChatGPT y Claude. AI Optimization es la nueva carrera por la visibilidad.",
  },
  {
    icon: <Wand2 className="w-8 h-8 text-academy-red" />,
    title: "Producción multiplicada",
    text: "Nano Banana, Sora, Veo 3 — quien maneja el stack 2026 produce a otra velocidad.",
  },
];

export default function ProblemCards() {
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
            ¿Por qué es indispensable <span className="text-academy-red">hoy</span>?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            El marketing digital cambió radicalmente. Lo que aprendiste hace dos años ya no es competitivo. 
            Así cambió el juego en el último año:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="glass-card p-8 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-academy-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative z-10 border border-white/5">
                {problem.icon}
              </div>
              
              <h3 className="text-xl font-bold font-display leading-snug relative z-10 mb-2">
                {problem.title}
              </h3>
              
              <p className="text-white/70 relative z-10">
                {problem.text}
              </p>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute -inset-px bg-gradient-to-r from-academy-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CtaButton />
          <TestimonialButton />
        </div>
      </div>
    </section>
  );
}
