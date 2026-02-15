import AnimateOnScroll from "./AnimateOnScroll";
import { Award, BookOpen, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-card">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre la Dra. Sory
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Con más de 10 años de experiencia dedicada a la salud infantil, la Dra. Sory se ha especializado en brindar atención pediátrica integral, con un enfoque especial en lactancia materna y alimentación complementaria.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Su pasión por acompañar a madres y familias en las primeras etapas de la vida de sus bebés la ha convertido en una referente en el área, combinando conocimiento científico con un trato cálido y cercano.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="space-y-6">
              {[
                { icon: GraduationCap, title: "Médica Pediatra", desc: "Especialista en Pediatría con formación de excelencia" },
                { icon: BookOpen, title: "Certificada en Lactancia", desc: "Consultora internacional de lactancia materna (IBCLC)" },
                { icon: Award, title: "Alimentación Complementaria", desc: "Especialización en nutrición y alimentación infantil" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-lilac/50 hover:bg-lilac transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
