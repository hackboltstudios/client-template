import {Separator} from "@/components/ui/separator";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const services = [
    "Custom T-Shirt Printing",
    "Custom Embroidery",
    "UV DTF Printing",
    "Custom Hats & Caps",
];

const serviceDescriptions = [
    "Bring your ideas to life with bold, high-quality custom designs printed on premium T-shirts.",
    "Add a premium touch to your clothing with detailed, durable embroidery made to stand out.",
    "Create vibrant, high-quality custom stickers and transfers for apparel, packaging, and more.",
    "Personalise your caps and hats with unique designs that represent your style and identity.",
];

export default function Services() {
    return (
        <div className="px-6 sm:px-10">
            <section id="services" className="mx-auto max-w-7xl py-24">
                <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

                    {/* LEFT — SERVICES */}
                    <div>
                        {/* Section Label */}
                        <Badge
                            variant="secondary"
                            className="mb-5 border border-primary/20 bg-primary/10 px-4 py-2 text-primary"
                        >
                            What We Do
                        </Badge>

                        {/* Heading */}
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Built Different.
                            <br />
                            <span className="text-primary">
                                Made For You.
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                            From custom streetwear to bold designs, we bring your ideas
                            to life. Create something unique, wear something different,
                            and become part of the Psycho Society.
                        </p>

                        {/* Services Grid */}
                        <div className="mt-10 grid gap-5 sm:grid-cols-2">
                            {services.map((service, index) => (
                                <Card
                                    key={service}
                                    className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.12)]"
                                >
                                    {/* Hover Glow */}
                                    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />

                                    <CardHeader className="relative">
                                        {/* Number */}
                                        <span className="text-xs font-bold tracking-[0.25em] text-primary">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        {/* Service Name */}
                                        <CardTitle className="mt-2 text-lg transition-colors duration-300 group-hover:text-primary">
                                            {service}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="relative">
                                        {/* Description */}
                                        <CardDescription className="text-sm leading-6 text-muted-foreground">
                                            {serviceDescriptions[index]}
                                        </CardDescription>

                                        {/* Explore */}
                                        <div className="mt-5 flex items-center text-sm font-medium text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                                            Explore
                                            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                                →
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — 3D PRODUCT */}
                    <div className="relative flex min-h-[500px] items-center justify-center">

                        {/* Background Glow */}
                        <div className="absolute h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />

                        <div className="absolute h-40 w-40 translate-x-20 -translate-y-20 rounded-full bg-blue-600/10 blur-[80px]" />

                        {/* Ground Shadow */}
                        <div className="absolute bottom-12 left-1/2 h-10 w-64 -translate-x-1/2 rounded-[50%] bg-black/70 blur-2xl" />

                        {/* Floating T-Shirt */}
                        <div className="relative z-10 animate-float">
                            <Image
                                src="/images/Services.png"
                                alt="Psycho Society custom streetwear"
                                width={550}
                                height={550}
                                priority
                                className="select-none object-contain drop-shadow-[0_35px_50px_rgba(0,0,0,0.7)] pointer-events-none"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-16 left-4 z-20 rounded-2xl border border-white/10 bg-black/70 px-5 py-4 shadow-2xl backdrop-blur-xl sm:left-10">
                            <p className="text-xs uppercase tracking-widest text-gray-500">
                                Psycho Society
                            </p>

                            <p className="mt-1 text-sm font-semibold ">
                                Wear Your Identity.
                            </p>
                        </div>

                        {/* Floating Accent */}
                        <div className="absolute right-4 top-10 z-20 hidden rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium text-primary backdrop-blur-xl sm:block">
                            EST. 2024
                        </div>
                    </div>
                </div>
            </section>

            <Separator />
        </div>
    );
}