"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { Target, Eye, Heart, Compass } from "lucide-react";

const values = [
    {
        title: "Extreme Ownership",
        description: "We take full responsibility for the outcomes, not just the code. We treat your product as our own.",
        icon: Target,
    },
    {
        title: "Radical Transparency",
        description: "Honest communication is our baseline. We share progress, risks, and mistakes openly.",
        icon: Eye,
    },
    {
        title: "Engineering as Craft",
        description: "We don't cut corners. Quality is built-in, from documentation to automated tests.",
        icon: Compass,
    },
    {
        title: "Human-Centric",
        description: "Software is built by people, for people. We value empathy, diversity, and long-term relationships.",
        icon: Heart,
    },
];

export default function AboutPage() {
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
                        Built for the <br />
                        <span className="text-primary italic">Global Era.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground leading-relaxed italic"
                    >
                        "SignumCode was founded on a simple premise: great engineering should be accessible,
                        transparent, and built to last."
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-secondary/20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-outfit font-bold">Our Story</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Started by a team of veteran engineers who worked across US and Indian tech hubs,
                                    SignumCode emerged from a desire to bridge the gap between high-end architectural needs
                                    and the delivery capabilities of boutique agencies.
                                </p>
                                <p>
                                    We noticed that while many could build a "working" app, very few were building
                                    "long-term" software—systems that could grow from 100 to 1 million users without
                                    a total rewrite.
                                </p>
                                <p>
                                    Today, SignumCode serves a global clientele, bringing silicon-valley engineering
                                    standards to startups and established enterprises alike, all from our hub in Noida, India.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="aspect-[4/5] bg-primary/20 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 text-center border border-primary/20">
                                <span className="text-4xl font-outfit font-bold text-primary mb-2">50+</span>
                                <span className="text-sm font-medium">Projects Delivered</span>
                            </div>
                            <div className="aspect-[4/5] bg-indigo-500/10 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 text-center border border-indigo-500/10 mt-12">
                                <span className="text-4xl font-outfit font-bold text-indigo-500 mb-2">9+</span>
                                <span className="text-sm font-medium">Countries Served</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6 text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-4">Our Core Values</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        These principles guide every decision we make, every line of code we write,
                        and every relationship we build.
                    </p>
                </div>
                <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, idx) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-background border border-border text-center"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                                <value.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-outfit font-bold">Our Mission</h2>
                            <p className="text-primary-foreground/80 text-lg leading-relaxed">
                                To empower innovators with world-class engineering that stands the test of time,
                                enabling them to focus on growth while we handle the complexity of scale.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-outfit font-bold">Our Vision</h2>
                            <p className="text-primary-foreground/80 text-lg leading-relaxed">
                                To become the global standard for boutique software engineering,
                                proving that India is at the forefront of high-end architectural excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
