"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { caseStudies } from "@/lib/data";

export function FeaturedCaseStudies() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-4">Success Stories</h2>
                        <p className="text-muted-foreground">
                            Deep dives into the problems we have solved and the value we have delivered for our clients across various industries.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href="/case-studies" className="gap-2">
                            All Case Studies
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col group h-full bg-secondary/20 rounded-2xl overflow-hidden border border-border"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10" />
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider">
                                        {study.industry}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {study.tech.map((tag) => (
                                        <span key={tag} className="text-xs text-primary font-bold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-outfit font-bold mb-4">{study.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                    {study.problem}
                                </p>
                                <Link
                                    href={`/case-studies/${study.slug}`}
                                    className="inline-flex items-center text-sm font-bold hover:text-primary transition-colors group/link"
                                >
                                    View Case Study
                                    <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
