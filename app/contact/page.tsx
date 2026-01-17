"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, Loader2 } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    company: z.string().optional(),
    budget: z.string().min(1, { message: "Please select a budget range." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
                reset();
            } else {
                alert("Failed to send message. Please try again or email us directly.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("An error occurred. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-background pt-32">
            <Navbar />

            <section className="container mx-auto px-4 md:px-6 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info Side */}
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-6xl font-outfit font-bold mb-6"
                        >
                            Let's Build Your <br />
                            <span className="text-primary italic">Next Big Thing.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground mb-12 max-w-md"
                        >
                            Whether you have a fully-fledged RFP or just a rough idea on a napkin, we are ready to listen.
                        </motion.p>

                        <div className="space-y-8">
                            <Link
                                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                                className="flex items-center gap-6 hover:opacity-80 transition-opacity"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Us</p>
                                    <p className="font-outfit font-bold text-lg">{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
                                </div>
                            </Link>
                            <Link
                                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi%20SignumCode%2C%20I%27m%20reaching%20out%20from%20your%20website.%20I%27d%20like%20to%20discuss%20a%20project.`}
                                target="_blank"
                                className="flex items-center gap-6 hover:opacity-80 transition-opacity"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">WhatsApp (India)</p>
                                    <p className="font-outfit font-bold text-lg">+{process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}</p>
                                </div>
                            </Link>
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Location</p>
                                    <p className="font-outfit font-bold text-lg">Noida, NCR, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-secondary/20 p-8 md:p-12 rounded-[40px] border border-border relative overflow-hidden">
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center py-12"
                            >
                                <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-outfit font-bold mb-4">Message Sent Successfully!</h3>
                                <p className="text-muted-foreground mb-8">We'll get back to you within 24 hours.</p>
                                <Button variant="outline" onClick={() => setIsSuccess(false)}>Send Another Message</Button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold">Full Name</label>
                                        <input
                                            {...register("name")}
                                            className={`w-full bg-background border ${errors.name ? 'border-destructive' : 'border-border'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm`}
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <p className="text-xs text-destructive font-medium">{errors.name.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold">Email Address</label>
                                        <input
                                            {...register("email")}
                                            className={`w-full bg-background border ${errors.email ? 'border-destructive' : 'border-border'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm`}
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <p className="text-xs text-destructive font-medium">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold">Company (Optional)</label>
                                        <input
                                            {...register("company")}
                                            className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                                            placeholder="Your Company"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold">Project Budget</label>
                                        <select
                                            {...register("budget")}
                                            className={`w-full bg-background border ${errors.budget ? 'border-destructive' : 'border-border'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm appearance-none`}
                                        >
                                            <option value="">Select a range</option>
                                            <option value="<$5k">&lt; $5k</option>
                                            <option value="$5k-$20k">$5k - $20k</option>
                                            <option value="$20k-$50k">$20k - $50k</option>
                                            <option value="$50k+">$50k+</option>
                                        </select>
                                        {errors.budget && <p className="text-xs text-destructive font-medium">{errors.budget.message}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold">Tell us about your project</label>
                                    <textarea
                                        {...register("message")}
                                        rows={4}
                                        className={`w-full bg-background border ${errors.message ? 'border-destructive' : 'border-border'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm`}
                                        placeholder="Briefly describe your goals, timeline, and requirements..."
                                    />
                                    {errors.message && <p className="text-xs text-destructive font-medium">{errors.message.message}</p>}
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    variant="premium"
                                    className="w-full h-14 rounded-xl text-lg font-bold shadow-xl shadow-primary/20"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5 ml-2" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
