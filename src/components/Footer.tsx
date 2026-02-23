import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--purple))] py-10">
      <div className="container mx-auto text-center space-y-4">
        <div className="flex items-baseline justify-center gap-2 text-primary-foreground mb-2">
          <span className="font-sans font-medium text-xl tracking-wide">Dra.</span>
          <span className="font-display text-2xl font-bold leading-none" translate="no">Sory</span>
        </div>
        <p className="font-body text-sm text-primary-foreground/80 font-medium">
          Dra. Soraya N. Sánchez R.
        </p>
        <p className="font-body text-sm text-primary-foreground/60">
          Pediatra Puericultor · Prolactancia
        </p>
        <p className="font-body text-xs text-primary-foreground/40 mt-1">
          MPPS: 44564 | COMEZU: 8318 | RIF: V07856155-2
        </p>
        <div className="flex items-center justify-center gap-1 text-primary-foreground/40 text-xs mt-4">
          <span>Hecho con</span>
          <Heart size={12} className="text-primary-foreground/60 fill-current" />
          <span>para las familias</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
