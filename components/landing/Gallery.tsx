import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { TfiGallery } from "react-icons/tfi";
import Link from "next/link";
import { DummyData } from "@/app/data/DummyData";

export default function Gallery() {
    return (
        <div className="mt-10 px-6 sm:px-10">
            <section className="py-24">

                {/* Section Heading */}
                <div className="mb-12 text-center">
                    <Badge
                        variant="secondary"
                        className="mb-4 border border-primary/20 bg-primary/10 text-primary"
                    >
                        {DummyData.GallerySectionBadge}
                    </Badge>
                </div>

                {/* Gallery Introduction */}
                <div className="flex grid-cols-2 flex-col items-center gap-12 lg:flex-row">

                    {/* LEFT — CONTENT */}
                    <div className="w-full space-y-10 lg:w-1/2">

                        <div>
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                {DummyData.GallerySectionTitleLine1}

                                <br />

                                <span className="text-primary">
                                    {DummyData.GallerySectionTitleHighlight}
                                </span>
                            </h2>

                            <p className="mt-4 max-w-2xl text-gray-400">
                                {DummyData.GallerySectionP}
                            </p>
                        </div>

                        {/* View Gallery Button */}
                        <Link href={DummyData.GallerySectionButtonLink}>
                            <Button
                                size="lg"
                                className="group rounded-xl px-8 py-6 text-base font-semibold"
                            >
                                {DummyData.GallerySectionButtonText}

                                <TfiGallery
                                    className="ml-2 transition-transform duration-300 group-hover:scale-110"
                                    size={18}
                                />
                            </Button>
                        </Link>

                    </div>

                    {/* RIGHT — 3D PRODUCT */}
                    <div className="relative flex w-full justify-center lg:w-1/2">
                        <div className="relative z-10 w-full max-w-[550px] animate-float">
                            <Image
                                src={DummyData.GallerySectionImage}
                                alt={`${DummyData.ClientBusinessName} Gallery`}
                                width={350}
                                height={350}
                                priority
                                className="pointer-events-none h-auto w-full select-none object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_40px_60px_rgba(0,0,0,0.75)]"
                            />
                        </div>
                    </div>

                </div>

                {/* Gallery Carousel */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="mx-auto mt-16 w-full max-w-6xl"
                >
                    <CarouselContent className="-ml-4">

                        {DummyData.GalleryImages.map((item, index) => (
                            <CarouselItem
                                key={`${item.Title}-${index}`}
                                className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                            >
                                <Card className="group relative overflow-hidden border-white/10 bg-black/40">

                                    {/* Image */}
                                    <div className="relative aspect-[4/5] overflow-hidden">

                                        <Image
                                            src={item.Image}
                                            alt={item.Alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Dark Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 bg-primary/0 transition-all duration-500" />

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">

                                            {/* Category */}
                                            <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
                                                {item.Description}
                                            </p>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold">
                                                {item.Title}
                                            </h3>

                                        </div>
                                    </div>

                                </Card>
                            </CarouselItem>
                        ))}

                    </CarouselContent>

                    {/* Carousel Controls */}
                    <div className="mt-8 flex justify-center gap-4">
                        <CarouselPrevious className="static translate-y-0" />
                        <CarouselNext className="static translate-y-0" />
                    </div>

                </Carousel>

            </section>

            <Separator />
        </div>
    );
}