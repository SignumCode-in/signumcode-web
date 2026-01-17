"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { caseStudies } from "@/lib/data";
import { useParams, notFound } from "next/navigation";
import { CheckCircle2, ChevronLeft, Calendar, Info } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CaseStudyDetailPage() {
    const params = useParams();
    const study = caseStudies.find((s) => s.slug === params.slug);

    if (!study) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background pt-32">
            <Navbar />

            <div className="container mx-auto px-4 md:px-6 mb-12">
                <Button variant="ghost" asChild className="mb-8 -ml-4">
                    <Link href="/case-studies" className="gap-2">
                        <ChevronLeft className="w-4 h-4" />
                        Back to Case Studies
                    </Link>
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">{study.industry}</span>
                            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                            <span className="text-muted-foreground text-sm font-medium">{study.client}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-6">{study.title}</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Transforming complex business logic into a seamless digital experience.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-8 border-l border-border pl-8">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Duration</p>
                            <p className="font-outfit font-bold">4 Months</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Role</p>
                            <p className="font-outfit font-bold">Full Product Development</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <section className="container mx-auto px-4 md:px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="aspect-[21/9] rounded-[40px] overflow-hidden border border-border shadow-2xl"
                >
                    <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </section>

            {/* Content Sections */}
            <section className="container mx-auto px-4 md:px-6 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-16">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-outfit font-bold flex items-center gap-4">
                                <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm">01</span>
                                The Challenge
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {study.problem}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-outfit font-bold flex items-center gap-4">
                                <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm">02</span>
                                The Solution
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {study.solution}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                {study.results.map((result) => (
                                    <div key={result} className="p-4 rounded-xl bg-secondary/30 flex items-start gap-3 border border-border">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span className="font-medium text-sm">{result}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className="space-y-12">
                        <div className="p-8 rounded-3xl bg-secondary/20 border border-border sticky top-32">
                            <h3 className="text-xl font-outfit font-bold mb-6">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {study.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 rounded-md bg-background border border-border text-xs font-bold">{t}</span>
                                ))}
                            </div>

                            <hr className="my-8 border-border" />

                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-primary" />
                                    <div>
                                        <p className="text-[10px] font-bold uppercase text-muted-foreground">Year</p>
                                        <p className="text-sm font-bold">2025</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Info className="w-5 h-5 text-primary" />
                                    <div>
                                        <p className="text-[10px] font-bold uppercase text-muted-foreground">Platforms</p>
                                        <p className="text-sm font-bold">Web, iOS, Android</p>
                                    </div>
                                </div>
                            </div>

                            <Button variant="premium" className="w-full mt-8" asChild>
                                <Link href="/contact">Build something similar</Link>
                            </Button>
                        </div>
                    </aside>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
