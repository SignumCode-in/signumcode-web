"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { Smartphone, Layout, Server, Palette, Settings, CheckCircle2 } from "lucide-react";

const services = [
    {
        id: "mobile",
        title: "Mobile App Development",
        description: "We specialize in high-performance Flutter and React Native applications that feel truly native.",
        outcomes: ["Cross-platform efficiency", "60fps animations", "Offline-first capabilities", "App Store & Play Store ready"],
        tech: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
        icon: Smartphone,
        color: "from-blue-500 to-cyan-500",
    },
    {
        id: "web",
        title: "Web Application Development",
        description: "Building responsive, SEO-optimized, and lightning-fast web apps using the power of Next.js.",
        outcomes: ["Core Web Vitals optimized", "Responsive for all sizes", "Server-side rendering", "Secure auth integration"],
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        icon: Layout,
        color: "from-indigo-500 to-purple-500",
    },
    {
        id: "backend",
        title: "Backend & APIs",
        description: "Robust architectures designed to handle complex business logic and massive traffic.",
        outcomes: ["99.9% uptime architecture", "Microservices or Monoliths", "API documentation (Swagger)", "Database optimization"],
        tech: ["Node.js", "Go", "PostgreSQL", "MongoDB", "Redis"],
        icon: Server,
        color: "from-purple-500 to-pink-500",
    },
    {
        id: "design",
        title: "UI/UX Design",
        description: "Visual logic that translates into business growth. We focus on conversion and usability.",
        outcomes: ["High-fidelity wireframes", "Interactive prototypes", "User flow research", "Design system creation"],
        tech: ["Figma", "Adobe XD", "Framermotion"],
        icon: Palette,
        color: "from-rose-500 to-orange-500",
    },
    {
        id: "maintenance",
        title: "Maintenance & Scaling",
        description: "Continuous support to ensure your product stays updated, secure, and ready for more users.",
        outcomes: ["24/7 Monitoring", "Security patches", "Performance audits", "Cloud cost optimization"],
        tech: ["AWS", "GCP", "Kubernetes", "Docker"],
        icon: Settings,
        color: "from-emerald-500 to-teal-500",
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background pt-32">
            <Navbar />

            <section className="container mx-auto px-4 md:px-6 mb-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-outfit font-bold mb-6"
                >
                    Our <span className="text-primary italic">Capabilities</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto"
                >
                    Outcome-focused software services designed for startups and global enterprises.
                </motion.p>
            </section>

            <section className="py-20 space-y-32">
                {services.map((service, idx) => (
                    <div key={service.id} id={service.id} className="container mx-auto px-4 md:px-6">
                        <div className={cn(
                            "flex flex-col gap-12 items-center",
                            idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                        )}>
                            <div className="flex-1 space-y-8">
                                <div className={cn(
                                    "w-16 h-16 rounded-3xl flex items-center justify-center bg-gradient-to-br text-white shadow-xl shadow-primary/10",
                                    service.color
                                )}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-outfit font-bold mb-4">{service.title}</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.outcomes.map((outcome) => (
                                        <div key={outcome} className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                            <span className="text-sm font-medium">{outcome}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Core Technology</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 rounded-md bg-secondary text-xs font-bold">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 w-full max-w-xl">
                                <div className={cn(
                                    "aspect-square rounded-[40px] bg-gradient-to-br p-1",
                                    service.color
                                )}>
                                    <div className="w-full h-full bg-background rounded-[39px] flex items-center justify-center p-12 overflow-hidden relative">
                                        <div className={cn("absolute inset-0 opacity-10", service.color)} />
                                        <service.icon className="w-32 h-32 opacity-20" />
                                        <div className="text-center relative z-10">
                                            <p className="font-outfit font-bold text-2xl mb-2">Outcome Oriented</p>
                                            <p className="text-sm text-muted-foreground">Clean Code. Scalable Results.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <CTA />
            <Footer />
        </main>
    );
}

import { cn } from "@/lib/utils";
