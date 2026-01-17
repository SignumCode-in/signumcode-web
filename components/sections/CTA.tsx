"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full -z-10 opacity-30" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[40px] bg-background border border-border shadow-2xl text-center relative overflow-hidden">
                    {/* Subtle pattern background */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-outfit font-bold mb-6 tracking-tight"
                    >
                        Ready to Build Something <br />
                        <span className="text-primary italic">Extraordinary?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
                    >
                        Whether you are a startup looking to launch or an enterprise aiming to modernize,
                        SignumCode has the expertise to make it happen.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Button size="lg" variant="premium" className="h-14 px-10 text-lg rounded-full" asChild>
                            <Link href="/contact" className="gap-2">
                                Book a Free Consultation
                                <Calendar className="w-5 h-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-2" asChild>
                            <Link href="https://wa.me/something" target="_blank" className="gap-2">
                                WhatsApp Us
                                <MessageSquare className="w-5 h-5" />
                            </Link>
                        </Button>
                    </motion.div>

                    <p className="mt-12 text-sm text-muted-foreground flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Currently accepting new projects for Q1 2026
                    </p>
                </div>
            </div>
        </section>
    );
}
