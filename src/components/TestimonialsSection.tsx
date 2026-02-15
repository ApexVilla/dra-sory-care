import AnimateOnScroll from "./AnimateOnScroll";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María G.",
    text: "La Dra. Sory nos ayudó con la lactancia desde el primer día. Su paciencia y conocimiento fueron clave para nosotros.",
    stars: 5,
  },
  {
    name: "Carolina P.",
    text: "Excelente profesional. Mi bebé se siente muy cómodo en cada consulta. La recomiendo totalmente.",
    stars: 5,
  },
  {
    name: "Laura M.",
    text: "Los talleres de alimentación complementaria me dieron toda la seguridad que necesitaba. ¡Gracias, Dra.!",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="section-padding bg-gradient-hero">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo que dicen las mamás
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={i} delay={i * 150}>
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground leading-relaxed flex-1 italic">
                  "{t.text}"
                </p>
                <p className="font-display font-semibold text-foreground mt-4">{t.name}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
