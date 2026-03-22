import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Llegué buscando respuestas y encontré una comunidad que me abrazó como familia. Mi vida cambió por completo.",
      name: "María Gómez",
      role: "Retiro de Mujeres 2023",
    },
    {
      quote: "Me di cuenta de que no caminaba solo. Este retiro me devolvió la paz y me acercó a Dios de una forma que no imaginaba.",
      name: "Carlos Rodríguez",
      role: "Retiro de Hombres 2024",
    },
    {
      quote: "Es una experiencia que no se puede contar, se tiene que vivir. Jesús está verdaderamente vivo en Emaús.",
      name: "Ana Silva",
      role: "Retiro de Mujeres 2022",
    },
  ];

  return (
    <section id="testimonios" className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed rounded-full blur-[120px] opacity-40 -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-sans font-bold tracking-widest text-sm uppercase text-secondary mb-4 block">
            Voces de Esperanza
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Testimonios
          </h2>
          <p className="font-sans text-lg text-text-variant max-w-2xl mx-auto">
            Escucha a quienes han caminado antes que tú. El retiro es un regalo que transformará tu manera de vivir y amar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="bg-surface-lowest p-10 rounded-[1.5rem] ambient-shadow relative flex flex-col justify-between"
            >
              <Quote className="text-primary-fixed mb-6" size={48} />
              <p className="font-serif text-xl italic text-text-primary leading-relaxed mb-8 flex-grow">
                "{testi.quote}"
              </p>
              <div>
                <h4 className="font-sans font-bold text-lg text-primary">
                  {testi.name}
                </h4>
                <span className="font-sans text-sm text-text-variant">
                  {testi.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
