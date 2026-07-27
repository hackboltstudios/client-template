import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { DummyData } from "@/app/data/DummyData";

export default function About() {
    return (
        <div className="px-6 sm:px-10">
            <section
                id="about"
                className="mx-auto max-w-7xl py-24 lg:py-32"
            >
                <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

                    {/* LEFT — 3D PRODUCT */}
                    <div className="relative flex min-h-[500px] items-center justify-center">

                        {/* Background Glow */}
                        <div className="absolute h-80 w-80 rounded-full bg-primary/10 blur-[110px]" />

                        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-blue-600/10 blur-[80px]" />

                        {/* Decorative Rings */}
                        <div className="absolute h-[400px] w-[400px] rounded-full border border-white/5 sm:h-[500px] sm:w-[500px]" />

                        <div className="absolute h-[320px] w-[320px] rounded-full border border-primary/5 sm:h-[420px] sm:w-[420px]" />

                        {/* Ground Shadow */}
                        <div className="absolute bottom-12 left-1/2 h-10 w-64 -translate-x-1/2 rounded-[50%] bg-black/70 blur-2xl sm:w-80" />

                        {/* Floating Shirt */}
                        <div className="relative z-10 animate-float">
                            <Image
                                src={DummyData.AboutSectionImage}
                                alt={`${DummyData.ClientBusinessName} Streetwear`}
                                width={600}
                                height={600}
                                className="pointer-events-none select-none object-contain drop-shadow-[0_35px_50px_rgba(0,0,0,0.7)]"
                            />
                        </div>

                        {/* Floating Label */}
                        <div className="absolute bottom-16 left-0 z-20 rounded-2xl border border-white/10 bg-black/70 px-5 py-4 shadow-2xl backdrop-blur-xl sm:left-4">
                            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                                {DummyData.AboutSectionLabel}
                            </p>

                            <p className="mt-1 text-sm font-bold">
                                {DummyData.AboutSectionLabelDescription}
                            </p>
                        </div>
                    </div>

                    {/* RIGHT — ABOUT CONTENT */}
                    <div>

                        {/* Section Label */}
                        <Badge
                            variant="secondary"
                            className="mb-5 border border-primary/20 bg-primary/10 px-4 py-2 text-primary"
                        >
                            {DummyData.AboutSectionBadge}
                        </Badge>

                        {/* Heading */}
                        <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                            {DummyData.AboutSectionTitleLine1}

                            <br />

                            <span className="text-primary">
                                {DummyData.AboutSectionTitleHighlight}
                            </span>
                        </h2>

                        {/* Main Story */}
                        <p className="mt-8 text-base leading-8 text-gray-400 sm:text-lg">
                            {DummyData.AboutSectionP1}
                        </p>

                        {/* Second Story */}
                        <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
                            {DummyData.AboutSectionP2}
                        </p>

                        {/* Brand Values */}
                        <div className="mt-10 grid gap-6 sm:grid-cols-3">

                            {DummyData.AboutValues.map((value) => (
                                <div key={value.Number}>

                                    <div className="mb-3 text-2xl font-black text-primary">
                                        {value.Number}
                                    </div>

                                    <h3 className="font-bold">
                                        {value.Title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-gray-500">
                                        {value.Description}
                                    </p>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>

            <Separator />
        </div>
    );
}