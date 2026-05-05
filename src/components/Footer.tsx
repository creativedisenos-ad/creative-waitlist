"use client";



import CreativeLogo from "@/components/CreativeLogo";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 relative z-10 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <CreativeLogo className="text-white h-8" />
          <p className="text-white/40 text-sm mt-2 text-center md:text-left">
            www.creativedisenos.com · @creativedisenos<br />Caracas, Venezuela
          </p>
        </div>

      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>CreativeDiseños marca registrada del grupo: CREATIVE D AGENCY AND ACADEMY LLC. Florida. US. © {new Date().getFullYear()} Todos los derechos reservados.</p>
        <p>Powered by <strong className="text-white/70">LA AGENCIA By Creative Diseños</strong></p>
      </div>
    </footer>
  );
}
