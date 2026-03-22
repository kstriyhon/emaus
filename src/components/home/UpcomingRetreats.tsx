import { MapPin, CalendarDays, ArrowRight } from "lucide-react";
import Link from "next/link";

export function UpcomingRetreats() {
  const retreats = [
    {
      type: "Retiro de Mujeres",
      date: "15 - 17 de Agosto, 2026",
      location: "Casa de Retiros San José",
      status: "Inscripciones Abiertas",
      color: "bg-primary-container text-white",
      buttonColor: "bg-white text-primary hover:bg-surface-low",
      tagColor: "bg-white/20 text-white"
    },
    {
      type: "Retiro de Hombres",
      date: "12 - 14 de Septiembre, 2026",
      location: "Casa de Retiros San José",
      status: "Inscripciones Abiertas",
      color: "bg-surface-lowest text-text-primary",
      buttonColor: "bg-primary text-white hover:bg-primary-container",
      tagColor: "bg-primary-fixed text-primary"
    }
  ];

  return (
    <section id="retiros" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row mb-16 items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-sans font-bold tracking-widest text-sm uppercase text-secondary mb-4 block">
              Es Tu Momento
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Próximos Retiros
            </h2>
            <p className="font-sans text-lg text-text-variant">
              Inscríbete hoy y prepárate para un fin de semana que te acercará al amor de Cristo y a una comunidad vibrante.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {retreats.map((retreat, idx) => (
            <div key={idx} className={`${retreat.color} rounded-[2rem] p-10 md:p-14 ambient-shadow flex flex-col h-full`}>
              <div className="flex justify-between items-start mb-12">
                <span className={`px-4 py-1.5 rounded-full text-sm font-bold tracking-wide font-sans uppercase ${retreat.tagColor}`}>
                  {retreat.status}
                </span>
              </div>
              
              <h3 className="font-serif text-3xl font-bold mb-8">
                {retreat.type}
              </h3>
              
              <div className="space-y-4 mb-12 flex-grow">
                <div className="flex items-center gap-4 text-inherit opacity-90 font-sans text-lg">
                  <CalendarDays size={24} />
                  <span>{retreat.date}</span>
                </div>
                <div className="flex items-center gap-4 text-inherit opacity-90 font-sans text-lg">
                  <MapPin size={24} />
                  <span>{retreat.location}</span>
                </div>
              </div>

              <Link
                href={`/inscripcion?tipo=${retreat.type.replace(/\s+/g, '-').toLowerCase()}`}
                className={`group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-sans font-bold text-lg transition-all w-full md:w-auto shadow-sm tracking-wide ${retreat.buttonColor}`}
              >
                Inscribirme
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
