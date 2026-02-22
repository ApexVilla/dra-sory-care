import AnimateOnScroll from "./AnimateOnScroll";
import lactationImg from "/home/samir/.gemini/antigravity/brain/105b8519-d6f6-4396-b907-e89083eddc2f/lactation_course_image_1771804098647.png";
import feedingImg from "/home/samir/.gemini/antigravity/brain/105b8519-d6f6-4396-b907-e89083eddc2f/feeding_course_image_1771804113401.png";
import { BookOpen, ArrowRight } from "lucide-react";

const courses = [
    {
        title: "Curso de Lactancia Materna",
        desc: "Aprende todo sobre técnica de agarre, bancos de leche y cómo superar los desafíos de la lactancia con confianza.",
        image: lactationImg,
        tag: "Próximamente",
        color: "from-primary/20 to-rose/30"
    },
    {
        title: "Alimentación Complementaria",
        desc: "Guía completa para iniciar sólidos, método BLW y cómo crear hábitos saludables desde el primer bocado.",
        image: feedingImg,
        tag: "Inscripciones abiertas",
        color: "from-secondary/20 to-lilac/30"
    }
];

const CoursesSection = () => {
    return (
        <section id="cursos" className="section-padding bg-card overflow-hidden">
            <div className="container mx-auto">
                <AnimateOnScroll className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
                        <BookOpen size={16} />
                        Tu espacio de aprendizaje
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
                        Cursos Online y Presenciales
                    </h2>
                    <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                        Herramientas prácticas para empoderarte en la crianza y salud de tu bebé.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
                </AnimateOnScroll>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
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

                                <div className="p-8 md:p-10 flex flex-col flex-grow">
                                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                                        {course.title}
                                    </h3>
                                    <p className="font-body text-muted-foreground leading-relaxed mb-8 flex-grow">
                                        {course.desc}
                                    </p>

                                    <a
                                        href="https://wa.me/584126672489"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 font-display text-primary font-bold hover:gap-4 transition-all"
                                    >
                                        Más información
                                        <ArrowRight size={20} />
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
