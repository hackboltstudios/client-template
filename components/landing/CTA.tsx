import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowRight, ShoppingBag } from "lucide-react";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";

export default function CTA() {
    return (
        <div className="px-6 sm:px-10">
            <section className="mx-auto max-w-7xl lg:py-32">

                {/* Full Width Background */}


                {/* Red Glow */}
                <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

                {/* Blue Glow */}
                <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

                {/* Center Glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[120px]" />

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-5xl px-6  text-center">

                    {/* Badge */}
                    <Badge
                        variant="secondary"
                        className="mb-6 border border-primary/20 bg-primary/10 px-4 py-2 text-primary"
                    >
                        Join The Society
                    </Badge>

                    {/* Heading */}
                    <h2 className="mx-auto max-w-4xl text-4xl font-black tracking-tight  sm:text-5xl lg:text-7xl">
                        Don't Follow The Crowd.
                        <br />
                        <span className="text-primary">
                            Create Your Own.
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                        Discover bold designs, custom streetwear, and apparel
                        made for people who aren't afraid to stand out.
                        Your style. Your identity. Your society.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                        <Button
                            size="lg"
                            className="group rounded-xl px-8 py-6 text-base font-semibold"
                        >
                            Shop The Collection

                            <ShoppingBag
                                size={18}
                                className="ml-2 transition-transform duration-300 group-hover:scale-110"
                            />
                        </Button>

                        <Link href="/#contact">
                            <Button
                                variant="outline"
                                size="lg"
                                className="group rounded-xl border-white/20 bg-white/[0.03] px-8 py-6 text-base font-semibold  backdrop-blur-sm hover:border-primary/40 hover:bg-primary/10"
                            >
                                Get In Touch

                                <ArrowRight
                                    size={18}
                                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Button>
                        </Link>

                    </div>

                    {/* Brand Statement */}
                    <div className="mx-auto mt-16 ">
                        <p className="text-xs font-medium uppercase tracking-[0.4em] text-gray-600">
                            Psycho Society
                        </p>

                        <p className="mt-3 text-sm font-semibold text-gray-400">
                            Wear Your Identity. Be Different.
                        </p>
                    </div>

                </div>
            </section>
            <Separator />
        </div>
    );
}