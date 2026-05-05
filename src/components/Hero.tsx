"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Users } from "lucide-react";
import dynamic from "next/dynamic";

// Carga perezosa (lazy load) del fondo 3D para que la página cargue ultra rápido
const ParticlesBackground = dynamic(() => import("./ParticlesBackground"), {
  ssr: false, // No cargar en el servidor, solo en el cliente
});

const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    let iterations = 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (index < iterations) return text[index];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iterations >= text.length) {
        clearInterval(interval);
      }
      iterations += 1;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <>{displayText}</>;
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-32">
      <div className="absolute inset-0 z-0 opacity-50">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-academy-black/80 to-academy-black pointer-events-none"></div>
      </div>
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-academy-red/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-academy-red/30 bg-academy-red/10 backdrop-blur-md mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-academy-red animate-pulse"></div>
          <span className="text-sm font-medium tracking-widest text-academy-red">
            LISTA DE ESPERA VIP · PRÓXIMO LANZAMIENTO
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black font-display tracking-tighter uppercase leading-[1.1] mb-6"
        >
          <ScrambleText text="La nueva generación de" />
          <br />
          <ScrambleText text="formaciones especializadas" />
          <br />
          <span className="text-gradient-primary inline-block mt-2">
            con Inteligencia Artificial
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/70 max-w-3xl mb-12"
        >
          El marketing digital cambió para siempre. Únete a la lista de espera para ser de los primeros en dominar el stack tecnológico que define a los mejores profesionales del mundo.
          <br />
          <strong className="text-white mt-4 inline-block tracking-wide">CERTIFICACIÓN AMERICANA · ACCESO ANTICIPADO</strong>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <button
            onClick={() => {
              document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-4 bg-academy-red text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_#E63946]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative flex items-center gap-2">
              ASEGURAR MI CUPO
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Realtime Counter Mock */}
          <div className="flex items-center gap-3 text-white/60">
            <Users className="w-5 h-5" />
            <span className="font-medium">Ya somos <strong className="text-white">142</strong> esperando</span>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-white/40 uppercase">Descubre más</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
      </motion.div>
    </section>
  );
}
