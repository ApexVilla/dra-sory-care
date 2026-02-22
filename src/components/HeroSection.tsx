import heroImg from "@/assets/hero-doctor.jpg";
import heroBg from "@/assets/hero-bg.png";
import { Heart, MessageCircle, Baby } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-lilac opacity-40 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-rose opacity-30 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center pt-24 pb-16 relative z-10">
        {/* Text */}
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-1.5 text-base font-semibold tracking-tight text-secondary-foreground">
            <Heart size={16} />
            Pediatría con amor
          </div>
          <h1 className="text-foreground leading-tight animate-fade-up tracking-tight mb-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center bg-transparent">
              <Baby size={32} className="text-secondary" strokeWidth={1.5} />
            </div>
            <div>
              <span className="font-sans font-medium text-4xl md:text-5xl lg:text-6xl inline-block mr-3">Dra.</span>
              <span className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-primary" translate="no">SORY</span>
            </div>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-lg animate-fade-up font-medium" style={{ animationDelay: "0.2s" }}>
            Pediatra Puericultor · Prolactancia
          </p>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-lg animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Acompañando a madres y bebés con calidez y profesionalismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://wa.me/584126672489"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover-lift transition-all"
            >
              Agendar consulta
            </a>
            <a
              href="https://wa.me/584126672489"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/20 bg-white/50 backdrop-blur-sm px-8 py-4 text-base font-semibold text-primary hover:bg-white hover:border-primary/50 hover-lift transition-all"
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
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-lg px-6 py-3 flex items-center gap-3 border border-secondary/20">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
              <Heart size={18} className="text-secondary-foreground" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">22 años</p>
              <p className="text-xs text-muted-foreground">de pediatra</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
