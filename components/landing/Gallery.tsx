import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card  } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { TfiGallery } from "react-icons/tfi";
import Link from "next/link";


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
                        The Collection
                    </Badge>

                    <h2 className="text-4xl font-bold tracking-tight  sm:text-5xl">
                        Psycho Society Gallery
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Explore the latest drops, custom designs, and streetwear
                        pieces from the Psycho Society collection.
                    </p>
                </div>

                {/* Gallery Carousel */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="mx-auto w-full max-w-6xl"
                >
                    <CarouselContent className="-ml-4">
                        {[
                            {
                                image: "/images/Branded T-shirt.png",
                                title: "Psycho Society Tee",
                                category: "T-Shirt Collection",
                            },
                            {
                                image: "/images/Stoner.png",
                                title: "Street Culture",
                                category: "Latest Drop",
                            },
                            {
                                image: "/images/StonerShirt.png",
                                title: "Custom Designs",
                                category: "Custom Apparel",
                            },
                            {
                                image: "/images/Branded T-shirt.png",
                                title: "Psycho Society",
                                category: "Streetwear",
                            },
                            {
                                image: "/images/Stoner.png",
                                title: "Made Different",
                                category: "Psycho Collection",
                            },
                        ].map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                            >
                                <Card className="group relative overflow-hidden border-white/10 bg-black/40">
                                    {/* Image */}
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Dark Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 bg-primary/0 transition-all duration-500 " />

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
                                                {item.category}
                                            </p>

                                            <h3 className="text-xl font-bold ">
                                                {item.title}
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

            {/* View Gallery Button */}
            <section className="flex justify-center pb-16">
                <Link href="/gallery">
                    <Button
                        size="lg"
                        className="group rounded-xl px-8 py-6 text-base font-semibold"
                    >
                        View Full Gallery
                        <TfiGallery className="ml-2 transition-transform duration-300 group-hover:scale-110"
                                    size={18}/>
                    </Button>
                </Link>
            </section>

            <Separator />
        </div>
    );
}