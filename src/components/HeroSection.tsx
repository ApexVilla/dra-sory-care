import heroImg from "@/assets/hero-doctor.jpg";
import { Heart, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-lilac opacity-40 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-rose opacity-30 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center pt-24 pb-16">
        {/* Text */}
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-lilac px-4 py-1.5 text-sm font-medium text-primary">
            <Heart size={14} />
            Pediatría con amor
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-up">
            Dra. Sory
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Pediatra y especialista en lactancia y alimentación infantil. Acompañando a madres y bebés con calidez y profesionalismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:opacity-90 transition-all hover:shadow-xl"
            >
              Agendar consulta
            </a>
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-card px-8 py-4 text-base font-semibold text-primary hover:bg-lilac transition-all"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-4 border-card shadow-2xl">
            <img
              src={heroImg}
              alt="Dra. Sory - Pediatra"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-lg px-6 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center">
              <Heart size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">+10 años</p>
              <p className="text-xs text-muted-foreground">de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
