"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden hero-gradient">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full opacity-50" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full opacity-50" />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8"
                    >
                        <Zap className="w-3 h-3 fill-current" />
                        Empowering Global Business with Premium Code
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold tracking-tight mb-6 leading-[1.1]"
                    >
                        We Build Software That <br />
                        <span className="text-gradient">Scales With Your Vision.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
                    >
                        SignumCode is a boutique engineering startup crafting high-performance digital products.
                        From India to the world, we deliver silicon-valley quality software for ambitious startups and enterprises.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <Button size="lg" variant="premium" asChild>
                            <Link href="/contact" className="gap-2">
                                Get Free Consultation
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/case-studies">
                                View Case Studies
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Trust badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 items-center opacity-60"
                    >
                        <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="font-outfit font-semibold text-sm">Security First</span>
                        </div>
                        <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                            <Globe className="w-5 h-5" />
                            <span className="font-outfit font-semibold text-sm">Global Standards</span>
                        </div>
                        <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default col-span-2 md:col-span-1">
                            <Zap className="w-5 h-5" />
                            <span className="font-outfit font-semibold text-sm">High Performance</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
