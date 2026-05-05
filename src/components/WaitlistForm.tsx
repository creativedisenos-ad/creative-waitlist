"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Share2, Copy } from "lucide-react";

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);



export default function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [position, setPosition] = useState<number | null>(null);
  const [refCode, setRefCode] = useState<string>("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCode, setPhoneCode] = useState("+58");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const fullPhone = `${phoneCode} ${phone}`;
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone: fullPhone }),
      });

      if (!res.ok) throw new Error("Error submitting form");

      setStatus("success");
      setPosition(Math.floor(Math.random() * 50) + 100);
      setRefCode(Math.random().toString(36).substring(2, 10).toUpperCase());
      
      // Trigger confetti if canvas-confetti was loaded
      import("canvas-confetti").then((module) => {
        const fireConfetti = module.default || module;
        if (typeof fireConfetti === 'function') {
          fireConfetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#E63946", "#FFD23F", "#ffffff"],
          });
        }
      }).catch(err => console.error(err));
    } catch (error) {
      console.error(error);
      setStatus("error");
      alert("Hubo un error al enviar el formulario. Por favor, intenta de nuevo.");
    }
  };

  return (
    <section className="py-24 px-6 relative z-10 w-full" id="waitlist-form">
      <div className="max-w-2xl mx-auto">
        <motion.div
          animate={status === "error" ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Animated red glow border using pseudo-element or absolute div */}
          <div className="absolute inset-0 border-2 border-academy-red/0 rounded-3xl transition-colors duration-1000 pointer-events-none"></div>
          
          {status !== "success" ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-2">
                    Asegura tu <span className="text-academy-red">cupo</span>
                  </h2>
                  <p className="text-white/60">
                    Únete a la lista de espera y asegura beneficios de fundador.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre y Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Nombre completo</label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-academy-red focus:ring-1 focus:ring-academy-red transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Email</label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-academy-red focus:ring-1 focus:ring-academy-red transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">WhatsApp</label>
                    <div className="flex gap-2">
                      <select 
                        value={phoneCode}
                        onChange={(e) => setPhoneCode(e.target.value)}
                        className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 focus:outline-none focus:border-academy-red w-24"
                      >
                        <option value="+58" className="bg-academy-black text-white">🇻🇪 +58</option>
                        <option value="+34" className="bg-academy-black text-white">🇪🇸 +34</option>
                        <option value="+52" className="bg-academy-black text-white">🇲🇽 +52</option>
                        <option value="+57" className="bg-academy-black text-white">🇨🇴 +57</option>
                        <option value="+1" className="bg-academy-black text-white">🇺🇸 +1</option>
                      </select>
                      <input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-academy-red focus:ring-1 focus:ring-academy-red transition-all"
                        placeholder="0414 1234567"
                      />
                    </div>
                  </div>



                  {/* Checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <div className="flex items-center h-5">
                      <input
                        id="communications"
                        type="checkbox"
                        required
                        className="w-4 h-4 rounded border-white/20 bg-white/5 text-academy-red focus:ring-academy-red focus:ring-offset-academy-black"
                      />
                    </div>
                    <label htmlFor="communications" className="text-xs text-white/60 leading-tight">
                      Acepto recibir comunicaciones de Creative Diseños Academy sobre el lanzamiento y recursos de IA.
                    </label>
                  </div>

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="w-full py-4 bg-academy-red hover:bg-[#ff4252] disabled:opacity-50 disabled:hover:bg-academy-red text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      {status === "loading" ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        "INSCRIBIRME AHORA"
                      )}
                    </span>
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 relative z-10"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </motion.div>
                
                <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-2">
                  ¡Estás <span className="text-academy-yellow">dentro</span>!
                </h2>
                <p className="text-xl mb-8">Eres el <strong className="text-academy-red">#{position}</strong> de la lista.</p>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left">
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-academy-yellow" />
                    Sube de posición invitando a otros
                  </h3>
                  <p className="text-sm text-white/70 mb-4">
                    Por cada amigo que se inscriba, subes 10 posiciones. Top 10 obtienen acceso GRATIS al primer programa.
                  </p>
                  
                  <div className="flex gap-2 mb-4">
                    <input 
                      readOnly 
                      value={`academy.creativedi.com/wait?ref=${refCode}`}
                      className="flex-1 bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white/50 outline-none select-all"
                    />
                    <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <a 
                      href="https://drive.google.com/file/d/1yqfNfwY00Mfy97yycbNDF7mZQqJSWg1y/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] rounded-xl font-medium transition-colors flex flex-col items-center justify-center gap-1 border border-[#25D366]/30 hover:border-[#25D366]/50"
                    >
                      <span className="flex items-center gap-2 text-lg">
                        🎁 Descargar guia de PROMPTs para crear tu marca con IA nivel PRO
                      </span>
                      <span className="text-sm opacity-80 font-normal">
                        Una antesala, a lo que se viene en GRANDE
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
        </motion.div>
      </div>
    </section>
  );
}
