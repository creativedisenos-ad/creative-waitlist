"use client";

import { motion } from "framer-motion";
import { Check, LockOpen, Star, FileText, Users, Award, BadgeCheck } from "lucide-react";
import CtaButton from "./CtaButton";

const benefits = [
  {
    icon: <LockOpen className="w-6 h-6 text-white" />,
    text: "Acceso prioritario 48 horas antes del lanzamiento oficial",
  },
  {
    icon: <Star className="w-6 h-6 text-white" />,
    text: "Precio especial de fundador garantizado al abrir inscripciones",
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    text: "Bonus sorpresa: Recursos de IA desbloqueados al unirte a la lista",
  },
  {
    icon: <Award className="w-6 h-6 text-white" />,
    text: "Certificación Americana al completar el programa",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    text: "Acceso a la comunidad élite de la primera generación 2026",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-academy-red/20 blur-[80px] rounded-full pointer-events-none"></div>

        <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight mb-4 text-center flex flex-wrap items-center justify-center gap-2 md:gap-3">
          Beneficios de la Lista VIP ⭐
          <BadgeCheck className="w-8 h-8 text-white fill-blue-500" />
        </h2>
        <p className="text-center text-white/60 mb-10 max-w-2xl mx-auto">
          No solo reservas tu lugar en la revolución educativa del marketing. Aseguras ventajas que el público general no tendrá.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex-shrink-0 mt-1 relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-academy-red rounded-full flex items-center justify-center border-2 border-[#151515]">
                  <Check className="w-3 h-3 text-white stroke-[3]" />
                </div>
              </div>
              <p className="text-md md:text-lg font-medium text-white/90 pt-1 leading-snug">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
