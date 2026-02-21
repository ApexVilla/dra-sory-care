import AnimateOnScroll from "./AnimateOnScroll";
import { MessageCircle, MapPin, Instagram, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="section-padding bg-card relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-lilac/20 pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Agenda tu consulta
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Estoy aquí para acompañarte. Comunícate conmigo y agenda tu cita.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <AnimateOnScroll delay={100} className="h-full">
            <div className="bg-gradient-hero rounded-3xl p-10 h-full flex flex-col justify-center space-y-10 border border-white/50 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-3xl rounded-full -mr-20 -mt-20"></div>

              <div className="space-y-4 relative z-10">
                <h3 className="font-display text-2xl font-bold text-foreground">Información de Contacto</h3>
                <p className="font-body text-muted-foreground">Escríbeme para coordinar tu cita o si tienes alguna duda sobre mis servicios.</p>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center shadow-sm">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold">Teléfono / WhatsApp</p>
                    <p className="font-body text-sm text-muted-foreground">+58 424 000 00 00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center shadow-sm">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold">Ubicación</p>
                    <p className="font-body text-sm text-muted-foreground">Consultorio Médico</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://instagram.com/DraSoryLM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-colors group"
                  >
                    <Instagram size={20} className="text-primary group-hover:text-white transition-colors" />
                  </a>
                  <div>
                    <p className="font-body text-sm font-semibold">Instagram</p>
                    <p className="font-body text-sm text-muted-foreground">@DraSoryLM</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/584240000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover-lift transition-all mt-4 relative z-10"
              >
                <MessageCircle size={22} />
                Contactar por WhatsApp
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200} className="h-full">
            <div className="glass-panel rounded-3xl p-10 h-full border border-white/60 shadow-md">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Nombre</label>
                    <input id="name" required type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-body text-foreground placeholder:text-muted-foreground/50" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Teléfono</label>
                    <input id="phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-border bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-body text-foreground placeholder:text-muted-foreground/50" placeholder="Tu número" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input id="email" required type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-body text-foreground placeholder:text-muted-foreground/50" placeholder="tu@email.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Mensaje</label>
                  <textarea id="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none font-body text-foreground placeholder:text-muted-foreground/50" placeholder="¿En qué puedo ayudarte?"></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-foreground text-background px-8 py-4 text-base font-semibold hover:bg-primary transition-colors disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : isSuccess ? (
                    "¡Mensaje enviado!"
                  ) : (
                    <>
                      Enviar mensaje
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
