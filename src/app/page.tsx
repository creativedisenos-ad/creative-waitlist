import Hero from "@/components/Hero";
import ProblemCards from "@/components/ProblemCards";
import BentoGrid from "@/components/BentoGrid";
import Benefits from "@/components/Benefits";
import WaitlistForm from "@/components/WaitlistForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CreativeLogo from "@/components/CreativeLogo";

import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-academy-black text-white relative selection:bg-academy-red selection:text-white">
      <div className="noise-bg fixed inset-0 z-0 pointer-events-none"></div>
      
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 flex justify-between items-center">
        <CreativeLogo className="text-white" />
      </header>

      <div className="relative z-10 w-full overflow-hidden">
        <Hero />
        <ProblemCards />
        <BentoGrid />
        <Benefits />
        <WaitlistForm />
        <FAQ />
      </div>
      
      <Footer />
      <FloatingButtons />
    </main>
  );
}
