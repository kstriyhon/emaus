import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden soft-horizon">
      {/* Background with Gradient Overlay mimicking a sunrise/spiritual light */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 hero-gradient opacity-80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center pt-24">
        {/* Emaús representative image */}
        <div className="mb-0 relative">
          <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-xl animate-pulse" />
          <img 
            src="/cruz-emaus.png" 
            alt="Cruz de Emaús - Jesucristo ha resucitado, en verdad resucitó" 
            className="w-full max-w-lg object-cover rounded-3xl border-4 border-white/80 shadow-[0_0_40px_rgba(255,255,255,0.3)] relative z-10"
          />
        </div>
        
        <h1 className="sr-only">
          Jesucristo ha resucitado, en verdad resucitó.
        </h1>
        <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-95 leading-relaxed">
          Un fin de semana diseñado para renovar tu espíritu, encontrarte con el amor de Dios y transformar tu vida a través del testimonio y la hermandad.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/#retiros"
            className="group flex items-center justify-center gap-2 bg-surface text-primary px-8 py-4 rounded-xl font-sans font-bold text-lg hover:bg-white transition-all ambient-shadow"
          >
            Próximo Retiro
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#que-es"
            className="flex items-center justify-center bg-transparent border border-[rgba(255,255,255,0.4)] text-white px-8 py-4 rounded-xl font-sans font-medium text-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors"
          >
            Conoce Más
          </Link>
        </div>
      </div>
    </section>
  );
}
