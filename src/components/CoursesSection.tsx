import AnimateOnScroll from "./AnimateOnScroll";
import lactationImg from "../assets/courses/lactation.png";
import feedingImg from "../assets/courses/feeding.png";
import prenatalImg from "../assets/courses/prenatal.png";
import { BookOpen, ArrowRight, Laptop } from "lucide-react";

const courses = [
    {
        title: "Taller Prenatal",
        desc: "Prepárate para la llegada de tu bebé con toda la información necesaria sobre cuidados iniciales y preparación para el parto.",
        image: prenatalImg,
        tag: "Online",
        color: "from-blue-100 to-indigo-100"
    },
    {
        title: "Lactancia Materna",
        desc: "Técnicas de agarre, bancos de leche y cómo superar desafíos. ¡A un solo click de distancia!",
        image: lactationImg,
        tag: "Online / Presencial",
        color: "from-primary/20 to-rose/30"
    },
    {
        title: "Alimentación Complementaria",
        desc: "Guía completa para iniciar sólidos, método BLW y hábitos saludables desde el primer bocado.",
        image: feedingImg,
        tag: "Online",
        color: "from-secondary/20 to-lilac/30"
    }
];

const CoursesSection = () => {
    return (
        <section id="cursos" className="section-padding bg-card overflow-hidden">
            <div className="container mx-auto">
                <AnimateOnScroll className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
                        <Laptop size={16} />
                        ¡A un solo click de distancia!
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
                        Talleres Online y Presenciales
                    </h2>
                    <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                        Agenda conmigo tus talleres y consultas pediátricas online. Formación práctica para empoderar a tu familia.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
                </AnimateOnScroll>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, i) => (
                        <AnimateOnScroll key={i} delay={i * 200}>
                            <div className="group glass-panel rounded-[2.5rem] overflow-hidden hover-lift border-white/40 h-full flex flex-col">
                                <div className="relative h-64 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-40 mix-blend-overlay z-10`} />
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-6 right-6 z-20">
                                        <span className="bg-white/90 backdrop-blur-md text-foreground text-xs font-bold px-4 py-2 rounded-full shadow-sm border border-white/50">
                                            {course.tag}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4 leading-tight">
                                        {course.title}
                                    </h3>
                                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 flex-grow">
                                        {course.desc}
                                    </p>

                                    <a
                                        href="https://wa.me/584126672489"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 font-display text-primary font-bold text-sm hover:gap-4 transition-all"
                                    >
                                        Agendar ahora
                                        <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
