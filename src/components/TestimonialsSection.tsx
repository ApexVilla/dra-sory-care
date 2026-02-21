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
            <AnimateOnScroll key={i} delay={i * 150} className="h-full">
              <div className="glass-panel hover-lift rounded-3xl p-8 border border-white/60 h-full flex flex-col relative group">
                <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.084 20 8.358V10.609H23.995V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.564 3.068 6 5.084 6 8.358V10.609H9.996V18H0Z" />
                  </svg>
                </div>
                <div className="flex gap-1 mb-6">
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
