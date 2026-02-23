import AnimateOnScroll from "./AnimateOnScroll";
import { Calendar, Clock, MapPin, Home } from "lucide-react";

const scheduleData = [
    {
        day: "Todos los Lunes",
        location: "MAIA, piso 3, torre de hospitalización, centro médico Paraiso",
        icon: Calendar,
        color: "bg-primary text-white",
    },
    {
        day: "Previa Cita",
        location: "Unidad de lactancia, piso 4, torre de hospitalización, Centro Médico Paraiso",
        icon: Clock,
        color: "bg-secondary text-primary",
    },
    {
        day: "Todos los días",
        location: "Consultas a domicilio",
        icon: Home,
        color: "bg-primary/20 text-primary",
    },
];

const ScheduleSection = () => {
    return (
        <section id="horarios" className="section-padding bg-gradient-hero relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <AnimateOnScroll className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
                        Horario de consultas
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
                </AnimateOnScroll>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {scheduleData.map((item, i) => (
                        <AnimateOnScroll key={i} delay={i * 100}>
                            <div className="glass-panel p-8 rounded-[2rem] h-full flex flex-col items-center text-center hover-lift border-white/60">
                                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className="font-display text-xl font-bold mb-4">{item.day}</h3>
                                <div className="flex items-start justify-center gap-2 text-muted-foreground">
                                    <MapPin size={18} className="shrink-0 mt-1" />
                                    <p className="font-body text-sm leading-relaxed">
                                        {item.location}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </section>
    );
};

export default ScheduleSection;
