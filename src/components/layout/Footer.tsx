import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface-container py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand & Info */}
        <div className="flex flex-col gap-4">
          <span className="font-serif text-3xl font-bold text-primary">
            Emaús
          </span>
          <p className="text-text-variant font-sans max-w-sm leading-relaxed">
            Un encuentro que transforma corazones. Jesucristo ha resucitado, en verdad resucitó.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-sans font-bold text-sm tracking-widest uppercase text-text-primary mb-2">
            Enlaces Rápidos
          </h3>
          <Link href="/#que-es" className="text-text-variant hover:text-primary transition-colors">
            ¿Qué es Emaús?
          </Link>
          <Link href="/#testimonios" className="text-text-variant hover:text-primary transition-colors">
            Testimonios
          </Link>
          <Link href="/#retiros" className="text-text-variant hover:text-primary transition-colors">
            Próximos Retiros
          </Link>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-4" id="contacto">
          <h3 className="font-sans font-bold text-sm tracking-widest uppercase text-text-primary mb-2">
            Contacto
          </h3>
          <div className="flex items-center gap-3 text-text-variant">
            <MapPin size={20} className="text-secondary" />
            <span>Parroquia Local de Tu Comunidad</span>
          </div>
          <div className="flex items-center gap-3 text-text-variant">
            <Mail size={20} className="text-secondary" />
            <a href="mailto:info@emauscomunidad.org" className="hover:text-primary transition-colors">
              info@emauscomunidad.org
            </a>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors ambient-shadow">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors ambient-shadow">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[rgba(255,255,255,0.4)] border-surface-low">
        <p className="text-center text-text-variant text-sm flex items-center justify-center">
          Hecho con amor y fe &copy; {new Date().getFullYear()} Comunidad de Emaús.
        </p>
      </div>
    </footer>
  );
}
