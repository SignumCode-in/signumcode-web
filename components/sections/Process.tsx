"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Code2, Rocket, HeartHandshake } from "lucide-react";

const steps = [
    {
        title: "Discovery & Strategy",
        description: "We dive deep into your business goals, target audience, and technical requirements to build a roadmap for success.",
        icon: Search,
    },
    {
        title: "Solution Design",
        description: "Our architects design a scalable system architecture and wireframe the user journey for maximum conversion.",
        icon: Lightbulb,
    },
    {
        title: "UI/UX Prototyping",
        description: "We create high-fidelity prototypes that bring your vision to life, ensuring a premium look and feel.",
        icon: PenTool,
    },
    {
        title: "Agile Development",
        description: "Clean code meets rapid delivery. We build in sprints, providing you with regular updates and demos.",
        icon: Code2,
    },
    {
        title: "Quality Assurance",
        description: "Rigorous testing across devices and edge cases ensures a bug-free, secure, and high-performance product.",
        icon: Rocket,
    },
    {
        title: "Launch & Support",
        description: "We handle the deployment and provide ongoing maintenance to ensure your product continues to evolve.",
        icon: HeartHandshake,
    },
];

export function Process() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-4">Our Proven Process</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Transparent, efficient, and results-driven. Here is how we turn your ideas into world-class digital products.
                    </p>
                </div>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[40px] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center border border-border mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm relative">
                                    <step.icon className="w-8 h-8" />
                                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-xs font-bold text-primary group-hover:border-white group-hover:bg-primary group-hover:text-white transition-all">
                                        {index + 1}
                                    </span>
                                </div>
                                <h3 className="text-xl font-outfit font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
