import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto text-center space-y-4">
        <p className="font-display text-xl font-bold text-primary-foreground">Dra. Sory</p>
        <p className="font-body text-sm text-primary-foreground/60">
          Pediatra · Lactancia · Alimentación Infantil
        </p>
        <div className="flex items-center justify-center gap-1 text-primary-foreground/40 text-xs">
          <span>Hecho con</span>
          <Heart size={12} className="text-accent" />
          <span>para las familias</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
