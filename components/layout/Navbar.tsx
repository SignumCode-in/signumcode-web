"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Engineering", href: "/engineering" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-border py-3"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                            <Image
                                src="/logo.png"
                                alt="SignumCode Logo"
                                fill
                                className="object-contain [.dark_&]:invert"
                            />
                        </div>
                        <span className="text-xl font-outfit font-bold tracking-tight">
                            Signum<span className="text-primary">Code</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === link.href
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <ThemeToggle />
                        <Button variant="premium" size="sm" asChild>
                            <Link href="/contact" className="flex items-center gap-2">
                                Get Free Consultation
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </nav>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-lg font-medium p-2 rounded-md",
                                        pathname === link.href
                                            ? "bg-primary/10 text-primary"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-border" />
                            <Button variant="premium" className="w-full" asChild>
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    Get Free Consultation
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
