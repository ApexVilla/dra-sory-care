import AnimateOnScroll from "./AnimateOnScroll";
import { ShieldCheck, Video, HeartHandshake, Clock } from "lucide-react";

const benefits = [
  { icon: HeartHandshake, title: "Atención cercana", desc: "Trato cálido y personalizado para cada familia" },
  { icon: ShieldCheck, title: "Profesionalismo", desc: "Respaldada por años de experiencia y formación" },
  { icon: Video, title: "Consultas online", desc: "Atención presencial y virtual para tu comodidad" },
  { icon: Clock, title: "Acompañamiento", desc: "Seguimiento continuo en cada etapa del desarrollo" },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-foreground mb-4">
            <span className="font-display text-3xl md:text-5xl font-semibold inline-block mr-3">¿Por qué elegir a la</span>
            <span className="font-sans font-medium text-2xl md:text-4xl inline-block mr-1.5">Dra.</span>
            <span className="font-display text-3xl md:text-5xl font-semibold text-primary tracking-tight inline-block">SORY?</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <AnimateOnScroll key={i} delay={i * 100} className="text-center group hover-lift p-6 rounded-3xl transition-all">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-lilac to-background shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:shadow-md transition-all">
                <b.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{b.desc}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
