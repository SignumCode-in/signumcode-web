import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
    Services: [
        { name: "Mobile App Development", href: "/services#mobile" },
        { name: "Web Application Development", href: "/services#web" },
        { name: "Backend & APIs", href: "/services#backend" },
        { name: "UI/UX Design", href: "/services#design" },
    ],
    Company: [
        { name: "About Us", href: "/about" },
        { name: "Engineering Culture", href: "/engineering" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Blog", href: "/blog" },
    ],
    Legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
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
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Crafting premium software solutions for global brands. We bridge the gap between complex engineering and elegant design.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="space-y-6">
                            <h4 className="font-outfit font-bold text-sm uppercase tracking-wider">{title}</h4>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact Strip */}
                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                        <Link href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Mail className="w-4 h-4 text-primary" />
                            <span>{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</span>
                        </Link>
                        <Link
                            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi%20SignumCode%2C%20I%27m%20reaching%20out%20from%20your%20website.%20I%27d%20like%20to%20discuss%20a%20project.`}
                            target="_blank"
                            className="flex items-center gap-2 hover:text-primary transition-colors"
                        >
                            <Phone className="w-4 h-4 text-primary" />
                            <span>+{process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}</span>
                        </Link>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>Noida, India | Global</span>
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} SignumCode. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
