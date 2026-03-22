import { Heart, Sparkles, Users } from "lucide-react";

export function AboutEmaus() {
  const pillars = [
    {
      icon: <Sparkles className="text-primary" size={32} />,
      title: "Renovación Espiritual",
      desc: "Un alto en el camino para reflexionar, sanar heridas y encontrar un propósito de vida centrado en el amor de Dios.",
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Hermandad",
      desc: "La experiencia se vive entre laicos, personas comunes que comparten sus testimonios de vida, fe y superación.",
    },
    {
      icon: <Heart className="text-primary" size={32} />,
      title: "Servicio Parroquial",
      desc: "El retiro es solo el comienzo. Emaús busca integrar a sus miembros activamente en la vida y servicio de su parroquia.",
    },
  ];

  return (
    <section id="que-es" className="py-24 bg-surface-low relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div>
              <span className="font-sans font-bold tracking-widest text-sm uppercase text-secondary mb-4 block">
                El Camino
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
                ¿Qué es Emaús?
              </h2>
              <p className="font-sans text-lg text-text-variant leading-relaxed">
                El Retiro de Emaús es un fin de semana íntimo y transformador para adultos, inspirado en el pasaje bíblico del Evangelio de Lucas (Lc 24, 13-35). Te permite hacer una pausa en tu día a día para encontrarte contigo mismo y con Dios.
              </p>
              <br />
              <p className="font-sans text-lg text-text-variant leading-relaxed">
                Está organizado y guiado por laicos que han vivido la experiencia previamente, lo que lo hace profundamente cercano, humano y real. A través de testimonios y dinámicas de reflexión, descubrirás que Jesús camina a tu lado, aún cuando no lo reconozcas.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`bg-surface p-8 rounded-[1.5rem] ambient-shadow flex flex-col gap-4
                  ${idx === 2 ? "sm:col-span-2 sm:w-2/3 sm:mx-auto" : ""}
                `}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-fixed flex items-center justify-center mb-2">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-text-primary">
                  {pillar.title}
                </h3>
                <p className="font-sans text-text-variant leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
