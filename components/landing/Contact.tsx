import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowRight } from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import ContactForm from "@/components/forms/ContactForm";

export default function Contact() {
    return (
        <div className="px-6 sm:px-10">
            <section id="contact" className="mx-auto max-w-7xl py-24 ">

                {/* Full Width Background */}


                {/* Red Glow */}
                <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/10 blur-[110px]" />

                {/* Blue Glow */}
                <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[110px]" />

                {/* Center Glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.02] blur-[120px]" />

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">

                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">

                        {/* LEFT — CONTACT INFO */}
                        <div className="flex flex-col justify-center">

                            {/* Badge */}
                            <Badge
                                variant="secondary"
                                className="mb-5 w-fit border border-primary/20 bg-primary/10 px-4 py-2 text-primary"
                            >
                                Get In Touch
                            </Badge>

                            {/* Heading */}
                            <h2 className="text-4xl font-black tracking-tight  sm:text-5xl lg:text-6xl">
                                Let's Create
                                <br />
                                <span className="text-primary">
                                    Something Different.
                                </span>
                            </h2>

                            {/* Description */}
                            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                                {"Got an idea for your next custom T-shirt, hoodie,\n" +
                                    " hat, or streetwear piece? Tell us what you're\n" +
                                    " thinking and let's bring your vision to life."}
                            </p>

                            {/* Brand Statement */}
                            <div className="mt-8 border-l-2 border-primary/50 pl-5">
                                <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                                    Psycho Society
                                </p>

                                <p className="mt-2 text-lg font-semibold ">
                                    Wear Your Identity. Be Different.
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="mt-8 space-y-4">

                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-600">
                                        Email
                                    </p>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        hello@psychosociety.com
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-600">
                                        Custom Orders
                                    </p>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Custom T-Shirts • Embroidery • UV DTF • Hats
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT — CONTACT FORM */}
                        <ContactForm />
                        
                    </div>
                </div>
            </section>
        </div>
    );
}