"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { caseStudies } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesPage() {
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
                        Engineering <span className="text-primary italic">Success</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground leading-relaxed"
                    >
                        Explore our portfolio of high-impact digital products.
                        We turn complex technical challenges into competitive advantages.
                    </motion.p>
                </div>
            </section>

            <section className="py-12 mb-24">
                <div className="container mx-auto px-4 md:px-6 space-y-24">
                    {caseStudies.map((study, idx) => (
                        <motion.div
                            key={study.slug}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <Link href={`/case-studies/${study.slug}`} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] border border-border group-hover:border-primary/50 transition-all shadow-lg">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                        <span className="text-white font-bold flex items-center gap-2">
                                            View full case study <ArrowRight className="w-5 h-5" />
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">{study.industry}</span>
                                        <span className="text-muted-foreground text-sm font-medium">{study.client}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-outfit font-bold group-hover:text-primary transition-colors">{study.title}</h2>
                                    <p className="text-muted-foreground text-lg leading-relaxed line-clamp-3">
                                        {study.problem}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {study.tech.map(t => (
                                            <span key={t} className="px-3 py-1 rounded-md bg-secondary text-xs font-bold">{t}</span>
                                        ))}
                                    </div>
                                    <div className="pt-4">
                                        <div className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                                            Case Study Details <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
