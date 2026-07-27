import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { DummyData } from "@/app/data/DummyData";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative mt-10 w-full overflow-hidden">
            <section className="relative w-full py-20 sm:py-24 lg:py-28">
                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
                    <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-16">

                        {/* LEFT */}
                        <div className="min-w-0">

                            {/* Business Name */}
                            <Badge
                                variant="secondary"
                                className="mb-6 border border-primary/20 bg-primary/10 px-4 py-2 text-primary"
                            >
                                Welcome to {DummyData.ClientBusinessName}
                            </Badge>

                            {/* Hero Title */}
                            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                                {DummyData.HeroSectionTitleLine1}
                                <br/>
                                <span className="text-primary">
                                    {DummyData.HeroSectionTitleHighlight}
                                </span>
                                <br/>
                                <span>
                                    {DummyData.HeroSectionTitleLine2}
                                </span>
                            </h1>

                            {/* Hero Description */}
                            <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                                {DummyData.HeroSectionP}
                            </p>

                            {/* CTA Button */}
                            <div className="mt-10 flex flex-wrap gap-4">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="
                                        group
                                        rounded-xl
                                        border-border
                                        bg-background/40
                                        px-8
                                        py-6
                                        text-base
                                        font-semibold
                                        backdrop-blur-sm
                                        transition-all
                                        duration-300
                                        hover:border-primary/40
                                        hover:bg-primary/10
                                    "
                                >
                                    <Link href={DummyData.HeroSectionButtonLink}>
                                        <div className="inline-flex items-center">
                                            {DummyData.HeroSectionButtonText}
                                            <ArrowRight
                                                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                                size={18}
                                            />
                                        </div>
                                    </Link>
                                </Button>
                            </div>

                            {/* Stats */}
                            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-6 border-t border-border pt-8">

                                <div>
                                    <p className="text-2xl font-bold">
                                        100%
                                    </p>

                                    <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                                        Original Designs
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold">
                                        Premium
                                    </p>

                                    <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                                        Quality Apparel
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold">
                                        Custom
                                    </p>

                                    <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                                        Made For You
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}
                        <div className="relative flex min-h-[420px] items-center justify-center sm:min-h-[500px] lg:min-h-[600px]">

                            {/* Product Glow */}
                            <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-primary/10 blur-[90px] sm:h-[420px] sm:w-[420px]" />

                            {/* Decorative Circle */}
                            <div className="pointer-events-none absolute h-[320px] w-[320px] rounded-full border border-border/40 sm:h-[450px] sm:w-[450px] lg:h-[520px] lg:w-[520px]" />

                            <div className="pointer-events-none absolute h-[270px] w-[270px] rounded-full border border-primary/10 sm:h-[380px] sm:w-[380px] lg:h-[450px] lg:w-[450px]" />

                            {/* Ground Shadow */}
                            <div className="pointer-events-none absolute bottom-8 left-1/2 h-10 w-52 -translate-x-1/2 rounded-[50%] bg-black/30 blur-2xl dark:bg-black/80 sm:w-72" />

                            {/* Hero Image */}
                            <div className="relative z-10 w-full max-w-[550px] animate-float">
                                <Image
                                    src={DummyData.HeroSectionImage}
                                    alt={`${DummyData.ClientBusinessName} Hero Image`}
                                    width={650}
                                    height={650}
                                    priority
                                    className="pointer-events-none h-auto w-full select-none object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_40px_60px_rgba(0,0,0,0.75)]"
                                />
                            </div>

                            {/* Brand Badge */}
                            <div className="absolute bottom-8 left-2 z-20 rounded-2xl border border-border bg-background/70 px-4 py-3 shadow-xl backdrop-blur-xl sm:bottom-12 sm:left-4 sm:px-5 sm:py-4">

                                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                                    {DummyData.ClientBusinessName}
                                </p>

                                <p className="mt-1 text-xs font-bold sm:text-sm">
                                    {DummyData.HeroSectionTitleLine1 + " " + DummyData.HeroSectionTitleHighlight + " " + DummyData.HeroSectionTitleLine2}
                                </p>

                            </div>

                            {/* New Drop */}
                            <div className="absolute right-2 top-8 z-20 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-primary backdrop-blur-xl sm:right-4 sm:top-12 sm:px-5 sm:py-2.5 sm:text-xs">
                                New Drop
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <Separator />
        </div>
    );
}