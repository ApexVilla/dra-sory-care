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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Por qué elegir a la Dra. Sory?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <AnimateOnScroll key={i} delay={i * 100} className="text-center">
              <div className="w-16 h-16 rounded-full bg-lilac flex items-center justify-center mx-auto mb-5">
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
