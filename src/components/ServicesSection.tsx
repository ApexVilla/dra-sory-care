import AnimateOnScroll from "./AnimateOnScroll";
import { Baby, Heart, Apple, Brain, Users } from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Consulta Pediátrica",
    desc: "Control integral del crecimiento y desarrollo de tu bebé, disponible de forma presencial u online.",
  },
  {
    icon: Heart,
    title: "Asesoría en Lactancia",
    desc: "Acompañamiento profesional para una lactancia materna exitosa y placentera.",
  },
  {
    icon: Apple,
    title: "Alimentación Complementaria",
    desc: "Guía experta para introducir alimentos de forma segura y nutritiva.",
  },
  {
    icon: Brain,
    title: "Conducta Infantil",
    desc: "Orientación sobre el desarrollo emocional y conductual de tu hijo.",
  },
  {
    icon: Users,
    title: "Talleres para Madres",
    desc: "Espacios de aprendizaje grupal sobre crianza, lactancia y nutrición.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-gradient-hero">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Servicios
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Atención integral para cada etapa del crecimiento de tu bebé
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="group glass-panel rounded-3xl p-8 hover-lift border border-white/60 h-full relative overflow-hidden bg-white">
                {/* Decorative blob in brand lilac */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/30 to-transparent rounded-bl-full -z-10 transition-transform group-hover:scale-110" />

                {/* Icon square in dark purple with white icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary shadow-lg shadow-primary/20 flex items-center justify-center mb-6 group-hover:shadow-primary/40 transition-all duration-300">
                  <service.icon size={26} className="text-white" />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-foreground/80 leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
