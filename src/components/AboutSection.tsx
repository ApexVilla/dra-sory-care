import AnimateOnScroll from "./AnimateOnScroll";
import { Award, BookOpen, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-foreground mb-4">
            <span className="font-display text-3xl md:text-5xl font-semibold inline-block mr-3">Sobre la</span>
            <span className="font-sans font-medium text-2xl md:text-4xl inline-block mr-1.5">Dra.</span>
            <span className="font-display text-3xl md:text-5xl font-semibold text-primary tracking-tight inline-block" translate="no">SORY</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="font-body text-lg text-foreground/90 leading-relaxed font-medium">
                <span className="font-semibold text-foreground">Dra. Soraya N. Sánchez R.</span>, Especialista Pediatra Puericultor y experta en Prolactancia.
                Con más de <span className="font-semibold text-foreground">35 años</span> como médico y <span className="font-semibold text-foreground text-primary">22 años</span> dedicada exclusivamente a la pediatría, se ha especializado en brindar atención pediátrica integral, con un enfoque especial en lactancia materna y alimentación complementaria.
              </p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                Su pasión por acompañar a madres y familias en las primeras etapas de la vida de sus bebés la ha convertido en una referente en el área, combinando conocimiento científico con un trato cálido y cercano.
              </p>
              <div className="bg-secondary/20 border border-primary/10 rounded-2xl p-6 mt-6 shadow-sm">
                <p className="font-display text-xl text-foreground/90 font-medium italic text-center">
                  "Vacunar a tu hijo es un acto de <span className="text-primary font-bold">amor</span> y <span className="text-primary font-bold">responsabilidad</span>"
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="space-y-6">
              {[
                { icon: GraduationCap, title: "Médica Pediatra", desc: "Especialista en Pediatría con formación de excelencia" },
                { icon: BookOpen, title: "Certificada en Lactancia", desc: "Consultora en lactancia materna" },
                { icon: Award, title: "Alimentación Complementaria", desc: "Especialización en nutrición y alimentación infantil" },
              ].map((item, i) => (
                <div key={i} className="group flex items-start gap-5 p-5 rounded-2xl bg-secondary/10 border border-primary/5 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary shadow-md flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="font-body text-sm text-foreground/70 font-medium">{item.desc}</p>
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
