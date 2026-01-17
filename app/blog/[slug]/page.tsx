"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { blogPosts } from "@/lib/data";
import { useParams, notFound } from "next/navigation";
import { Calendar, User, ChevronLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function BlogPostPage() {
    const params = useParams();
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background pt-32">
            <Navbar />

            <article className="container mx-auto px-4 md:px-6 max-w-4xl mb-24">
                <Button variant="ghost" asChild className="mb-8 -ml-4">
                    <Link href="/blog" className="gap-2">
                        <ChevronLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>
                </Button>

                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-primary mb-6">
                        <span>{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-8 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-between border-y border-border py-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <User className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-bold">{post.author}</p>
                                <p className="text-xs text-muted-foreground">Engineering Lead @ SignumCode</p>
                            </div>
                        </div>
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Share2 className="w-4 h-4" />
                        </Button>
                    </div>
                </header>

                <div className="rounded-[40px] overflow-hidden mb-12 border border-border">
                    <img src={post.image} alt={post.title} className="w-full h-auto" />
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
                    <p className="text-xl text-foreground font-medium">
                        {post.excerpt}
                    </p>
                    <p>
                        In the rapidly evolving landscape of 2026, software development has shifted from simple feature delivery to building resilient, high-order systems. At SignumCode, we have been at the forefront of this transition, helping clients navigate the complexities of global scaling and architectural excellence.
                    </p>
                    <h3 className="text-2xl font-outfit font-bold text-foreground">The Foundation of Success</h3>
                    <p>
                        Whether it is Flutter for mobile or Next.js for web, the choice of technology is only the beginning. The real value lies in how these tools are orchestrated to solve business problems. We focus on 'Engineering as Craft', ensuring every line of code adds value and scales seamlessly.
                    </p>
                    <p>
                        [This is a placeholder for the full blog content. In a production environment, this would be rendered from Markdown or a CMS.]
                    </p>
                    <div className="bg-secondary/30 p-8 rounded-3xl border border-border mt-12">
                        <h4 className="text-lg font-bold mb-4 text-foreground">Key Takeaways:</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Always prioritize Clean Architecture for long-term projects.</li>
                            <li>Security shouldn't be a separate phase; it's a core requirement.</li>
                            <li>Global standards mean zero-communication gap and high transparency.</li>
                        </ul>
                    </div>
                </div>
            </article>

            <CTA />
            <Footer />
        </main>
    );
}
