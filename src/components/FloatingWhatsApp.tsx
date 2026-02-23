import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

const FloatingWhatsApp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after scrolling down a bit
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <a
            href="https://wa.me/584126672489"
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
                }`}
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp size={32} />

            {/* Ripple effect - strictly brand colored */}
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-30"></span>
        </a>
    );
};

export default FloatingWhatsApp;
