"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { Cpu, Shield, Zap, Layers, RefreshCcw, Wifi } from "lucide-react";

const architectureFeatures = [
    {
        title: "Clean Architecture",
        description: "We separate concerns using a tiered architecture (Domain, Data, Presentation). This ensures the business logic remains independent of frameworks and database changes.",
        icon: Layers,
    },
    {
        title: "High Performance & Scalability",
        description: "Horizontal scaling by default. We leverage distributed systems, efficient caching (Redis), and load balancing to handle millions of requests.",
        icon: Zap,
    },
    {
        title: "Security & Compliance",
        description: "OIDC/OAuth2 for auth, AES-256 for data at rest, and TLS for transit. We follow OWASP Top 10 guidelines and implement audit logs.",
        icon: Shield,
    },
    {
        title: "Real-time Capabilities",
        description: "Expertise in WebSockets, WebRTC, and gRPC for low-latency, real-time communication systems and streaming.",
        icon: Wifi,
    },
    {
        title: "Automated CI/CD",
        description: "Automated testing, containerization (Docker), and zero-downtime deployments via GitHub Actions and Kubernetes.",
        icon: RefreshCcw,
    },
    {
        title: "Cloud Native Mastery",
        description: "Utilizing Serverless, Microservices, and Edge Computing to optimize for cost and global availability.",
        icon: Cpu,
    },
];

export default function EngineeringPage() {
    return (
        <main className="min-h-screen bg-background pt-32">
            <Navbar />

            <section className="container mx-auto px-4 md:px-6 mb-24">
                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-outfit font-bold mb-6"
                    >
                        Engineering <span className="text-primary italic">Excellence</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground leading-relaxed"
                    >
                        At SignumCode, code is a craft. We don't just build apps; we engineer resilient,
                        high-order systems designed for the long haul.
                    </motion.p>
                </div>
            </section>

            {/* Architecture Approach Section */}
            <section className="py-24 bg-secondary/20 border-y border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-outfit font-bold">Our Architectural Philosophy</h2>
                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-background border border-border">
                                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        Separation of Concerns
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        We maintain a strict boundary between UI, Business Logic, and Infrastructure.
                                        This makes the codebase testable, maintainable, and swap-friendly.
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl bg-background border border-border">
                                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        Observability First
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        Every system we build includes comprehensive logging, monitoring, and tracing.
                                        We know what's happening in production before the users do.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Diagram Placeholder - CSS/SVG based */}
                        <div className="relative aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-full h-full border-2 border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
                                <div className="absolute w-3/4 h-3/4 border-2 border-dashed border-primary/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                <div className="absolute w-1/2 h-1/2 border-2 border-primary rounded-full flex items-center justify-center p-8 text-center">
                                    <div className="space-y-1">
                                        <p className="text-primary font-bold text-sm">CORE</p>
                                        <p className="text-xs font-medium">Domain Logic</p>
                                    </div>
                                </div>
                                {/* Orbital items */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border border-border px-3 py-1 rounded-full text-[10px] font-bold">UI Layer</div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-background border border-border px-3 py-1 rounded-full text-[10px] font-bold">API Layer</div>
                                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border border-border px-3 py-1 rounded-full text-[10px] font-bold rotate-90">Database</div>
                                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-background border border-border px-3 py-1 rounded-full text-[10px] font-bold -rotate-90">External Services</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid of Engineering Pillars */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {architectureFeatures.map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-3xl bg-background border border-border group hover:border-primary/50 transition-all hover:bg-secondary/5"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-outfit font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
