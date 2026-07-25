"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Background from "@/components/shared/Background";

const galleryItems = [
    {
        id: 1,
        title: "Psycho Society",
        category: "Streetwear",
        image: "/images/Stoner.png",
    },
    {
        id: 2,
        title: "Identity Collection",
        category: "Collection",
        image: "/images/StonerShirt.png",
    },
    {
        id: 3,
        title: "Custom Designs",
        category: "Custom",
        image: "/images/Stoner.png",
    },
    {
        id: 4,
        title: "Be Different",
        category: "Streetwear",
        image: "/images/StonerShirt.png",
    },
    {
        id: 5,
        title: "Psycho Drop",
        category: "Collection",
        image: "/images/Stoner.png",
    },
    {
        id: 6,
        title: "Creative Expression",
        category: "Custom",
        image: "/images/StonerShirt.png",
    },
];

const categories = [
    "All",
    "Streetwear",
    "Collection",
    "Custom",
];

const GalleryPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems =
        activeCategory === "All"
            ? galleryItems
            : galleryItems.filter(
                (item) => item.category === activeCategory
            );

    return (
        <main className="relative min-h-screen w-full overflow-hidden">
            {/* Global Background */}
            <Background />

            {/* Page Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 sm:px-8 lg:px-10">

                {/* ========================= */}
                {/* HERO */}
                {/* ========================= */}

                <section className="mx-auto max-w-4xl text-center">

                    <Badge
                        variant="secondary"
                        className="mb-6 border border-primary/20 bg-primary/10 px-4 py-2 text-primary"
                    >
                        Psycho Society Gallery
                    </Badge>

                    <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                        Psycho Gallery
                        <br />

                        <span className="text-primary">
                            Identity.
                        </span>

                        <br />

                        <span>
                            Be Different.
                        </span>
                    </h1>

                    <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                        Explore the world of Psycho Society. From bold
                        streetwear to custom creations, discover designs
                        created for people who aren't afraid to be different.
                    </p>

                </section>


                {/* ========================= */}
                {/* CATEGORY FILTER */}
                {/* ========================= */}

                <section className="mt-16 flex flex-wrap justify-center gap-3">

                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={
                                activeCategory === category
                                    ? "default"
                                    : "outline"
                            }
                            onClick={() => setActiveCategory(category)}
                            className="rounded-full px-6 transition-all duration-300"
                        >
                            {category}
                        </Button>
                    ))}

                </section>


                {/* ========================= */}
                {/* GALLERY */}
                {/* ========================= */}

                <section className="mt-14">

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {filteredItems.map((item) => (

                            <Card
                                key={item.id}
                                className="group relative overflow-hidden border-border/50 bg-card/50 p-0 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
                            >

                                {/* Image */}
                                <div className="relative aspect-square overflow-hidden">

                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Hover Content */}
                                    <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                            {item.category}
                                        </p>

                                        <h3 className="mt-2 text-xl font-bold text-white">
                                            {item.title}
                                        </h3>

                                    </div>

                                </div>

                            </Card>

                        ))}

                    </div>

                </section>


                {/* ========================= */}
                {/* BOTTOM CTA */}
                {/* ========================= */}

                <section className="mt-24">

                    <Card className="relative overflow-hidden border-primary/20 bg-primary/5 p-10 text-center backdrop-blur-xl sm:p-16">

                        {/* Glow */}
                        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />

                        <div className="relative">

                            <Badge
                                variant="secondary"
                                className="border-primary/20 bg-primary/10 text-primary"
                            >
                                Join The Society
                            </Badge>

                            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                                Create Your Own Identity.
                            </h2>

                            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                                Have an idea for a custom design? Let's bring
                                your vision to life and create something that
                                represents you.
                            </p>

                            <Button
                                className="mt-8 rounded-xl px-8 py-6 font-semibold"
                            >
                                Start Your Custom Order
                            </Button>

                        </div>

                    </Card>

                </section>

            </div>
        </main>
    );
};

export default GalleryPage;