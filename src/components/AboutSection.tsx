import AnimateOnScroll from "./AnimateOnScroll";
import { Award, BookOpen, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-card">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-foreground mb-4">
            <span className="font-display text-3xl md:text-5xl font-bold inline-block mr-3">Sobre la</span>
            <span className="font-sans font-medium text-2xl md:text-4xl inline-block mr-1.5">Dra.</span>
            <span className="font-script text-5xl md:text-6xl font-normal text-primary tracking-wide inline-block" translate="no">Sory</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll delay={100}>
            <div className="space-y-6">
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Dra. Soraya N. Sánchez R.</span>, Especialista Pediatra Puericultor y experta en Prolactancia.
                Con más de 10 años de experiencia dedicada a la salud infantil, se ha especializado en brindar atención pediátrica integral, con un enfoque especial en lactancia materna y alimentación complementaria.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Su pasión por acompañar a madres y familias en las primeras etapas de la vida de sus bebés la ha convertido en una referente en el área, combinando conocimiento científico con un trato cálido y cercano.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mt-6">
                <p className="font-display text-xl text-primary font-medium italic text-center">
                  "Vacunar a tu hijo es un acto de amor y responsabilidad"
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="space-y-6">
              {[
                { icon: GraduationCap, title: "Médica Pediatra", desc: "Especialista en Pediatría con formación de excelencia" },
                { icon: BookOpen, title: "Certificada en Lactancia", desc: "Consultora internacional de lactancia materna (IBCLC)" },
                { icon: Award, title: "Alimentación Complementaria", desc: "Especialización en nutrición y alimentación infantil" },
              ].map((item, i) => (
                <div key={i} className="group flex items-start gap-5 p-5 rounded-2xl bg-white/40 border border-white/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
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
