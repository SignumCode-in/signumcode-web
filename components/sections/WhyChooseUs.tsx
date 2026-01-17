"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Trophy, Users, Rocket, Clock, ShieldCheck } from "lucide-react";

const reasons = [
    {
        title: "Engineering Excellence",
        description: "We don't just write code; we architect systems. Our team follows clean architecture and SOLID principles for every project.",
        icon: Trophy,
    },
    {
        title: "Global Standards",
        description: "Based in India, serving the world. We bridge the communication gap with perfect English and silicon-valley work ethics.",
        icon: Rocket,
    },
    {
        title: "Security by Design",
        description: "Data privacy and security are integrated into our development lifecycle from day one, not as an afterthought.",
        icon: ShieldCheck,
    },
    {
        title: "Agile & Transparent",
        description: "Weekly demos, clear Jira boards, and direct communication with developers. You're never in the dark.",
        icon: Clock,
    },
    {
        title: "Scalable Thinking",
        description: "We build for your tomorrow. Our solutions are designed to handle 10x growth without needing a total rewrite.",
        icon: Users,
    },
    {
        title: "Modern Tech Stack",
        description: "No legacy baggage. We use the most efficient, modern tools to ensure your product remains competitive for years.",
        icon: CheckCircle2,
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-secondary/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">Why High-Growth Startups <br />Trust SignumCode</h2>
                        <p className="text-lg text-muted-foreground mb-10 max-w-xl">
                            We operate as your dedicated engineering partner, not just another outsourcing partner.
                            Our focus is on long-term value, high-quality code, and business alignment.
                        </p>

                        <div className="space-y-4">
                            {['100% Transparency', 'Zero Technical Debt', 'Senior Engineers Only', 'Post-Launch Support'].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={reason.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                                    <reason.icon className="w-5 h-5" />
                                </div>
                                <h4 className="font-outfit font-bold mb-2">{reason.title}</h4>
                                <p className="text-muted-foreground text-xs leading-relaxed">
                                    {reason.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
