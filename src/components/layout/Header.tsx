"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "¿Qué es Emaús?", href: "/#que-es" },
    { name: "Testimonios", href: "/#testimonios" },
    { name: "Próximos Retiros", href: "/#retiros" },
    { name: "Contacto", href: "/#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-surface-low border-opacity-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-primary">
            Emaús
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-variant hover:text-primary transition-colors font-medium text-sm tracking-wide uppercase"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#retiros"
            className="bg-primary text-white px-6 py-2.5 rounded-xl font-medium hover:bg-primary-container transition-colors shadow-sm"
          >
            Próximo Retiro
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-surface shadow-lg border-t border-surface-low p-6 flex flex-col gap-6 soft-horizon">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-text-primary text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#retiros"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white px-6 py-3 rounded-xl font-medium text-center hover:bg-primary-container transition-colors"
          >
            Próximo Retiro
          </Link>
        </div>
      )}
    </header>
  );
}
