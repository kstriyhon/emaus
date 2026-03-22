"use client";

import { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { z } from "zod";

const formSchema = z.object({
  fullName: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  phone: z.string().min(7, "Ingresa un número de contacto válido"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  emergencyName: z.string().min(3, "Ingresa el nombre de un familiar"),
  emergencyPhone: z.string().min(7, "Ingresa un número de emergencia válido"),
});

export default function InscripcionPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    emergencyName: "",
    emergencyPhone: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      formSchema.parse(formData);
      setErrors({});
      // Simulate API call
      setTimeout(() => setIsSubmitted(true), 500);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((err: z.ZodIssue) => {
          if (err.path[0]) newErrors[err.path[0].toString()] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center bg-surface">
        <div className="bg-surface-lowest p-12 rounded-[2rem] ambient-shadow max-w-lg text-center">
          <div className="w-20 h-20 bg-primary-fixed text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Send size={32} />
          </div>
          <h2 className="font-serif text-3xl font-bold text-primary mb-4">
            ¡Inscripción Recibida!
          </h2>
          <p className="font-sans text-text-variant mb-8 leading-relaxed">
            Gracias por dar este paso. Nos pondremos en contacto contigo muy pronto con más detalles sobre el retiro. Que Dios te bendiga.
          </p>
          <Link
            href="/"
            className="inline-flex py-3 px-8 bg-primary text-white font-sans font-bold rounded-xl hover:bg-primary-container transition-colors"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-surface-low">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-text-variant hover:text-primary transition-colors font-sans font-medium mb-8">
          <ArrowLeft size={20} />
          Volver
        </Link>
        
        <div className="bg-surface-lowest p-8 md:p-14 rounded-[2rem] ambient-shadow">
          <div className="mb-10">
            <span className="font-sans font-bold tracking-widest text-sm uppercase text-secondary mb-2 block">
              Tu Encuentro Te Espera
            </span>
            <h1 className="font-serif text-4xl font-bold text-primary mb-4">
              Formulario de Inscripción
            </h1>
            <p className="font-sans text-text-variant text-lg">
              Por favor completa la siguiente información para reservar tu lugar en el próximo retiro de Emaús.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-text-primary border-b border-surface-container pb-2">
                Información Personal
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans font-bold text-sm text-text-variant uppercase tracking-wider block">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-surface-low border border-outline-variant/30 rounded-xl px-4 py-3 font-sans text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Escribe tu nombre"
                  />
                  {errors.fullName && <p className="text-red-700 text-sm">{errors.fullName}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="font-sans font-bold text-sm text-text-variant uppercase tracking-wider block">
                    Número de Contacto
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-surface-low border border-outline-variant/30 rounded-xl px-4 py-3 font-sans text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="+54 9 11 1234-5678"
                  />
                  {errors.phone && <p className="text-red-700 text-sm">{errors.phone}</p>}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="font-sans font-bold text-sm text-text-variant uppercase tracking-wider block">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface-low border border-outline-variant/30 rounded-xl px-4 py-3 font-sans text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="tu-correo@ejemplo.com"
                  />
                  {errors.email && <p className="text-red-700 text-sm">{errors.email}</p>}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-text-primary border-b border-surface-container pb-2 mt-8">
                Contacto de Emergencia
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans font-bold text-sm text-text-variant uppercase tracking-wider block">
                    Nombre del Familiar
                  </label>
                  <input
                    type="text"
                    name="emergencyName"
                    value={formData.emergencyName}
                    onChange={handleChange}
                    className="w-full bg-surface-low border border-outline-variant/30 rounded-xl px-4 py-3 font-sans text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Nombre y parentesco"
                  />
                  {errors.emergencyName && <p className="text-red-700 text-sm">{errors.emergencyName}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="font-sans font-bold text-sm text-text-variant uppercase tracking-wider block">
                    Número del Familiar
                  </label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    className="w-full bg-surface-low border border-outline-variant/30 rounded-xl px-4 py-3 font-sans text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="+54 9 11 1234-5678"
                  />
                  {errors.emergencyPhone && <p className="text-red-700 text-sm">{errors.emergencyPhone}</p>}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-white rounded-xl font-sans font-bold text-lg hover:bg-primary-container transition-all shadow-md ambient-shadow flex justify-center items-center gap-2 mt-8"
            >
              Enviar Inscripción
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
