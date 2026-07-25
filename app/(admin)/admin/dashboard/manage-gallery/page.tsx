"use client";

import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ImagePlus, Pencil, Trash2} from "lucide-react";
import Image from "next/image";

const galleryImages = [
    {
        id: 1,
        title: "Psycho Society Classic",
        category: "Streetwear",
        image: "/images/Stoner.png",
    },
    {
        id: 2,
        title: "Summer Collection",
        category: "Collections",
        image: "/images/Stoner.png",
    },
    {
        id: 3,
        title: "Custom Design",
        category: "Custom",
        image: "/images/Stoner.png",
    },
    {
        id: 4,
        title: "New Drop",
        category: "New Drops",
        image: "/images/Stoner.png",
    },
];

const ManageGallery = () => {
    return(
        <div className="space-y-10">
            {/* HEADER */}
            <div
                className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/60 p-8 shadow-xl backdrop-blur-xl sm:p-10">

                {/* Background Glow */}
                <div
                    className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-primary/10 blur-[100px]"/>

                <div className="relative z-10 max-w-3xl">

                    <Badge
                        variant="secondary"
                        className="mb-5 border border-primary/20 bg-primary/10 px-4 py-2 text-primary"
                    >
                        Gallery Management Center
                    </Badge>

                    <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                        Build Your Sick {" "}
                        <span className="text-primary">
                            Gallery.
                        </span>
                    </h1>
                </div>
            </div>

            <Card
                className="group relative overflow-hidden border-border/50 bg-card/60 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">

                {/* Background Glow */}
                <div
                    className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[100px] transition-all duration-500 group-hover:bg-primary/20"/>

                <CardHeader className="relative z-10">
                    <CardTitle className="text-xl font-bold">
                        Add Your Pictures
                    </CardTitle>

                    <p className="text-sm text-muted-foreground">
                        Your Gallery Will Showcase Your Brand
                    </p>
                </CardHeader>

                <CardContent className="relative z-10">
                    <Button
                        className="
                group/button
                relative
                flex
                h-40
                w-full
                flex-col
                items-center
                justify-center
                gap-3
                overflow-hidden
                rounded-2xl
                border
                border-primary/30
                bg-primary/5
                text-primary
                shadow-lg
                shadow-primary/5
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-primary/60
                hover:bg-primary/10
                hover:shadow-xl
                hover:shadow-primary/20
            "
                    >
                        {/* Icon Glow */}
                        <div
                            className="absolute h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover/button:bg-primary/20"/>

                        {/* Icon */}
                        <ImagePlus
                            className="
             relative
                    z-10
                    size-12
                    transition-transform
                    duration-500
                    group-hover/button:scale-110
                    group-hover/button:rotate-3
                "
                        />

                        {/* Text */}
                        <span className="relative z-10 text-sm font-semibold">
                Add New Event
            </span>

                    </Button>
                </CardContent>

            </Card>

            <Card className="group relative overflow-hidden border-border/50 bg-card/60 shadow-xl backdrop-blur-xl">

                {/* Background Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />

                <CardHeader className="relative z-10">
                    <CardTitle className="text-xl font-bold">
                        Current Images In Your Gallery
                    </CardTitle>

                    <CardDescription>
                        Edit, update, categorize, or remove existing images.
                    </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">

                    {/* Gallery Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {galleryImages.map((item) => (
                            <Card
                                key={item.id}
                                className="
                                group/image
                                overflow-hidden
                                border-border/50
                                bg-background/40
                                backdrop-blur-xl
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:border-primary/40
                                hover:shadow-xl
                                hover:shadow-primary/10
                            "
                            >

                                {/* Image */}
                                <div className="relative aspect-square overflow-hidden bg-muted">

                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="
                                        object-cover
                                        transition-transform
                                        duration-500
                                        group-hover/image:scale-105"
                                    />

                                    {/* Image Overlay */}
                                    <div
                                        className="
                                        absolute
                                        inset-0
                                        bg-linear-to-t
                                        from-black/70
                                        via-transparent
                                        to-transparent
                                        opacity-0
                                        transition-opacity
                                        duration-300
                                        group-hover/image:opacity-100
                                    "
                                    />

                                    {/* Category */}
                                    <Badge
                                        className="
                                        absolute
                                        left-3
                                        top-3
                                        border-primary/30
                                        bg-primary/10
                                        text-primary
                                        backdrop-blur-xl
                                    "
                                    >
                                        {item.category}
                                    </Badge>

                                </div>

                                {/* Content */}
                                <CardContent className="p-4">

                                    <div className="mb-4">
                                        <h3 className="font-semibold">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-xs text-muted-foreground">
                                            Category: {item.category}
                                        </p>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-2">

                                        <Button
                                            variant="outline"
                                            className="flex-1"
                                            size="sm"
                                            onClick={() =>
                                                console.log(
                                                    "Edit image:",
                                                    item.id
                                                )
                                            }
                                        >
                                            <Pencil className="mr-2 size-4" />
                                            Edit
                                        </Button>

                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="
                                            text-destructive
                                            hover:border-destructive/40
                                            hover:bg-destructive/10
                                            hover:text-destructive
                                        "
                                            onClick={() =>
                                                console.log(
                                                    "Delete image:",
                                                    item.id
                                                )
                                            }
                                        >
                                            <Trash2 className="size-4" />

                                            <span className="sr-only">
                                            Delete {item.title}
                                        </span>
                                        </Button>

                                    </div>

                                </CardContent>

                            </Card>
                        ))}

                    </div>

                </CardContent>
            </Card>
        </div>
    );
}

export default ManageGallery;