"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import CtaButton from "./CtaButton";
import TestimonialButton from "./TestimonialButton";

const faqs = [
  {
    q: "¿Cuándo es el lanzamiento oficial?",
    a: "Las formaciones se lanzarán oficialmente en unas semanas. Los miembros de la lista de espera tendrán acceso 48 horas antes que el público general para asegurar su cupo.",
  },
  {
    q: "¿Cuál será el costo aproximado?",
    a: "Al estar en la lista de espera, garantizas un precio fundador con 20% de descuento sobre el valor final. Los detalles exactos de inversión se enviarán por correo a los inscritos.",
  },
  {
    q: "¿Es modalidad online o presencial en Caracas?",
    a: "Tendremos programas 100% online para todo el mundo, pero también habrá experiencias inmersivas presenciales exclusivas en nuestras oficinas en Las Mercedes, Caracas.",
  },
  {
    q: "¿Obtendré un certificado al finalizar?",
    a: "Sí, todos nuestros programas incluyen una certificación digital verificable emitida por Creative Diseños Academy, validando tus habilidades en IA aplicada.",
  },
  {
    q: "¿Necesito conocimientos previos en programación o IA?",
    a: "No. Nuestras formaciones están diseñadas para ir desde cero hasta avanzado. Solo necesitas saber usar redes sociales y tener disposición para desaprender y aprender la nueva forma de trabajar.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight mb-12 text-center">
          Preguntas <span className="text-academy-yellow">Frecuentes</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`glass-card rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-white/20 bg-white/10' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-academy-red text-white' : 'bg-white/10 text-white/50'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-white/70">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CtaButton />
          <TestimonialButton />
        </div>
      </div>
    </section>
  );
}
