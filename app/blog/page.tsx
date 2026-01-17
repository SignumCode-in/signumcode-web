"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { blogPosts } from "@/lib/data";
import Link from "next/link";
import { Calendar, User, ChevronRight } from "lucide-react";

export default function BlogPage() {
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
                        Insights & <span className="text-primary italic">Innovation</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground leading-relaxed"
                    >
                        Weekly thought leadership on engineering, product strategy, and the future of digital products.
                    </motion.p>
                </div>
            </section>

            <section className="py-12 mb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogPosts.map((post, idx) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col group"
                            >
                                <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-3xl border border-border mb-6">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </Link>
                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary mb-4">
                                    <span>{post.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-border" />
                                    <div className="flex items-center gap-1 text-muted-foreground">
                                        <Calendar className="w-3 h-3" />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-outfit font-bold mb-4 group-hover:text-primary transition-colors">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className="text-muted-foreground mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs font-medium">
                                        <User className="w-3 h-3 text-primary" />
                                        <span>{post.author}</span>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="p-2 rounded-full bg-secondary text-foreground group-hover:bg-primary group-hover:text-white transition-all">
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
