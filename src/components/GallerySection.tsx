import * as React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import Autoplay from "embla-carousel-autoplay";
import img1 from "@/assets/gallery_sory_1.png";
import img2 from "@/assets/gallery_sory_2.jpg";
import img3 from "@/assets/gallery_sory_3.jpg";
import img4 from "@/assets/gallery_sory_4.png";
import img5 from "@/assets/gallery_sory_5.jpg";
import img6 from "@/assets/gallery_sory_6.png";
import img7 from "@/assets/gallery_sory_7.png";
import img8 from "@/assets/gallery_sory_8.jpg";
import img9 from "@/assets/gallery_sory_9.jpg";
import img10 from "@/assets/gallery_photo_3_1771714202441.png";
import img11 from "@/assets/gallery_photo_4_1771714218437.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

const initialGalleryImages = [
    { src: img9, alt: "Grupo de Taller Prenatal" },
    { src: img7, alt: "Asesoría en lactancia materna con familia" },
    { src: img8, alt: "Cuidado y apoyo en la lactancia" },
    { src: img1, alt: "Consulta pediátrica integral" },
    { src: img2, alt: "Cuidado y acompañamiento neonatal" },
    { src: img3, alt: "Taller de Alimentación Complementaria en Dohmi" },
    { src: img4, alt: "Grupo del Taller de Alimentación Complementaria" },
    { src: img5, alt: "Educación nutricional y plato saludable" },
    { src: img6, alt: "Acompañamiento en el parto y cuidado neonatal" },
    { src: img10, alt: "Asesoría de lactancia materna" },
    { src: img11, alt: "Alimentación complementaria saludable" },
];

const GallerySection = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3500, stopOnInteraction: false })
    );

    const [selectedImage, setSelectedImage] = React.useState<{ src: string; alt: string } | null>(null);

    // Shuffle images on component mount to keep things fresh
    const [galleryImages, setGalleryImages] = React.useState(initialGalleryImages);

    React.useEffect(() => {
        setGalleryImages([...initialGalleryImages].sort(() => Math.random() - 0.5));
    }, []);

    return (
        <section id="galeria" className="section-padding bg-warm overflow-hidden">
            <div className="container mx-auto">
                <AnimateOnScroll className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Galeria de Experiências
                    </h2>
                    <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                        Momentos de aprendizado, cuidado e conexão em nossas consultas e workshops.
                    </p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
                </AnimateOnScroll>

                <div className="px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[plugin.current]}
                        className="w-full"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent className="-ml-4">
                            {galleryImages.map((image, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <div
                                                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in"
                                                onClick={() => setSelectedImage(image)}
                                            >
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                                    <p className="font-body text-white font-medium text-sm leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                        {image.alt}
                                                    </p>
                                                </div>
                                            </div>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-[95vw] md:max-w-[80vw] lg:max-w-[70vw] p-0 border-none bg-black/90 backdrop-blur-xl overflow-hidden rounded-3xl animate-in zoom-in-95 duration-300">
                                            <div className="relative group">
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="w-full h-auto max-h-[85vh] object-contain mx-auto shadow-2xl"
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                                    <p className="font-display text-white text-xl md:text-2xl font-bold mb-2">
                                                        {image.alt}
                                                    </p>
                                                    <p className="font-body text-white/70 text-sm">
                                                        Dra. Sory Care - Experiência Real
                                                    </p>
                                                </div>
                                                <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white transition-all backdrop-blur-md">
                                                    <X size={24} />
                                                </DialogClose>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12 text-primary border-primary/20 hover:bg-primary/10 hover:border-primary transition-colors" />
                        <CarouselNext className="hidden md:flex -right-12 text-primary border-primary/20 hover:bg-primary/10 hover:border-primary transition-colors" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
