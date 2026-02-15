import AnimateOnScroll from "./AnimateOnScroll";
import { MessageCircle, MapPin, Instagram, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-card">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agenda tu consulta
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Estoy aquí para acompañarte. Comunícate conmigo y agenda tu cita.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </AnimateOnScroll>

        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll delay={100}>
            <div className="bg-gradient-hero rounded-3xl p-10 text-center space-y-8">
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground shadow-lg hover:opacity-90 transition-all hover:shadow-xl"
              >
                <MessageCircle size={22} />
                Contactar por WhatsApp
              </a>

              <div className="grid sm:grid-cols-3 gap-6 pt-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <p className="font-body text-sm text-muted-foreground">+54 911 0000-0000</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <p className="font-body text-sm text-muted-foreground">Buenos Aires, Argentina</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <a
                    href="https://instagram.com/dra.sory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-lilac transition-colors"
                  >
                    <Instagram size={20} className="text-primary" />
                  </a>
                  <p className="font-body text-sm text-muted-foreground">@dra.sory</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
