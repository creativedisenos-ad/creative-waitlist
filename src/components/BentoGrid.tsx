"use client";

import { motion } from "framer-motion";
import { 
  Rocket,
  Zap,
  Bot,
  BrainCircuit,
  Eye,
  Globe,
  Target
} from "lucide-react";

const expectationModules = [
  {
    title: "Estrategias de IA Generativa",
    icon: <BrainCircuit className="w-8 h-8 text-academy-yellow" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "Producción Acelerada",
    icon: <Zap className="w-8 h-8 text-academy-yellow" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Automatización Avanzada",
    icon: <Bot className="w-8 h-8 text-academy-yellow" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Pauta Publicitaria Inteligente",
    icon: <Target className="w-8 h-8 text-academy-yellow" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "Posicionamiento en la era AIO",
    icon: <Eye className="w-8 h-8 text-academy-yellow" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "Escalabilidad Global",
    icon: <Globe className="w-8 h-8 text-academy-yellow" />,
    colSpan: "md:col-span-1",
  },
];

export default function BentoGrid() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
            Lo que <span className="text-academy-yellow">viene</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            Un ecosistema de formación que cambiará las reglas del juego. Domina las áreas clave que las marcas internacionales exigirán este 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] mb-8">
          {expectationModules.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 0.98 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card p-8 rounded-2xl flex flex-col justify-between group cursor-default overflow-hidden ${program.colSpan}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-academy-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-full bg-academy-yellow/10 flex items-center justify-center relative z-10"
              >
                {program.icon}
              </motion.div>
              
              <h3 className="text-xl md:text-2xl font-bold font-display uppercase leading-tight relative z-10">
                {program.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
