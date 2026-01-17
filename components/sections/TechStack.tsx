"use client";

import { motion } from "framer-motion";

const categories = [
    {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Flutter", "Tailwind CSS", "Redux"],
    },
    {
        name: "Backend",
        skills: ["Node.js", "Go", "Python", "NestJS", "PostgreSQL", "MongoDB"],
    },
    {
        name: "Infrastructure",
        skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    },
    {
        name: "Mobile",
        skills: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "App Store/Play Store"],
    },
];

export function TechStack() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-4">Our Tech Stack</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We use the most reliable and modern technologies to ensure your product is fast, secure, and scalable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-secondary/20 border border-border"
                        >
                            <h3 className="text-xl font-outfit font-bold mb-6 text-primary">{category.name}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 rounded-full bg-background border border-border text-xs font-semibold"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h4 className="text-2xl font-outfit font-bold mb-2">Need a custom stack?</h4>
                        <p className="text-muted-foreground">We adapt to your needs and can work with any modern technology.</p>
                    </div>
                    <button className="px-8 py-3 rounded-full bg-primary text-white font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20">
                        Discuss Your Tech Stack
                    </button>
                </div>
            </div>
        </section>
    );
}
