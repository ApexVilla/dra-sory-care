import AnimateOnScroll from "./AnimateOnScroll";
import img1 from "@/assets/gallery_photo_1_1771714171447.png";
import img2 from "@/assets/gallery_photo_2_1771714187208.png";
import img3 from "@/assets/gallery_photo_3_1771714202441.png";
import img4 from "@/assets/gallery_photo_4_1771714218437.png";

const galleryImages = [
    { src: img1, alt: "Consulta pediátrica integral" },
    { src: img2, alt: "Asesoría en lactancia materna" },
    { src: img3, alt: "Cuidado y acompañamiento neonatal" },
    { src: img4, alt: "Alimentación complementaria saludable" },
];

const GallerySection = () => {
    return (
        <section id="galeria" className="section-padding bg-warm">
            <div className="container mx-auto">
                <AnimateOnScroll className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Galería
                    </h2>
                    <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                        Un vistazo a nuestro compromiso con la salud y el bienestar de los más pequeños.
                    </p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
                </AnimateOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryImages.map((image, index) => (
                        <AnimateOnScroll key={index} delay={100 * (index + 1)}>
                            <div className="group relative aspect-square overflow-hidden rounded-2xl border border-white/50 shadow-sm hover:shadow-lg transition-all duration-500">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <p className="font-body text-white font-medium text-lg leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {image.alt}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
