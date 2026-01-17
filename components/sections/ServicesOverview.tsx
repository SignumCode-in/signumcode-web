"use client";

import { motion } from "framer-motion";
import { Smartphone, Layout, Server, Palette, Gauge, Settings } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const services = [
    {
        title: "Mobile App Development",
        description: "High-performance cross-platform apps built with Flutter and React Native for iOS and Android.",
        icon: Smartphone,
        color: "bg-blue-500/10 text-blue-500",
        href: "/services#mobile",
    },
    {
        title: "Web Application Development",
        description: "Modern, scalable web platforms built with React, Next.js, and TypeScript.",
        icon: Layout,
        color: "bg-indigo-500/10 text-indigo-500",
        href: "/services#web",
    },
    {
        title: "Backend & APIs",
        description: "Robust, secure, and lightning-fast server architectures using Node.js, Go, and Python.",
        icon: Server,
        color: "bg-purple-500/10 text-purple-500",
        href: "/services#backend",
    },
    {
        title: "UI/UX Design",
        description: "User-centric designs that convert. We create beautiful, intuitive interfaces for your products.",
        icon: Palette,
        color: "bg-pink-500/10 text-pink-500",
        href: "/services#design",
    },
    {
        title: "Maintenance & Scaling",
        description: "Continuous support and infrastructure optimization to help your product grow seamlessly.",
        icon: Settings,
        color: "bg-emerald-500/10 text-emerald-500",
        href: "/services#maintenance",
    },
    {
        title: "Performance Optimization",
        description: "Auditing and optimizing existing codebases for speed, security, and Core Web Vitals.",
        icon: Gauge,
        color: "bg-orange-500/10 text-orange-500",
        href: "/services#optimization",
    },
];

export function ServicesOverview() {
    return (
        <section className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-4">Our Services</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We offer end-to-end software development services tailored to
                        help your business excel in the digital landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-outfit font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <Link
                                href={service.href}
                                className="inline-flex items-center text-sm font-bold text-primary hover:gap-2 transition-all"
                            >
                                Learn More
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
