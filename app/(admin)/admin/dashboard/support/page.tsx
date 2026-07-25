"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
    LifeBuoy,
    Mail,
    MessageCircle,
    Phone,
    ExternalLink,
    BookOpen,
    CircleHelp,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";

const Support = () => {
    return (
        <div className="relative min-h-screen space-y-10 p-4">

            {/* HEADER */}

            <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    <LifeBuoy className="size-4" />
                    Support Center
                </div>

                <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                    How Can We Help?
                </h1>

                <p className="mt-3 max-w-2xl text-muted-foreground">
                    Need help managing your website? Our support center is here
                    to help you with your account, website content, gallery,
                    promotions, events, and more.
                </p>
            </div>

            {/* SUPPORT OPTIONS */}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {/* Email Support */}
                <Card className="group relative overflow-hidden border-border/50 bg-card/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">

                    <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/20" />

                    <CardHeader className="relative">
                        <div className="mb-3 flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                            <Mail className="size-6" />
                        </div>

                        <CardTitle>Email Support</CardTitle>

                        <CardDescription>
                            Send us an email and our support team will get back
                            to you.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="relative">
                        <Button
                            className="w-full h-12 rounded-xl"
                        >
                            <Link href="mailto:hackboltstudios@gmail.com">
                                <div className="inline-flex items-center">
                                    Contact Support
                                    <ArrowRight className=" ml-2 size-4" />
                                </div>
                            </Link>
                        </Button>
                    </CardContent>

                </Card>


                {/* WhatsApp Support */}
                <Card className="group relative overflow-hidden border-border/50 bg-card/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">

                    <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/20" />

                    <CardHeader className="relative">
                        <div className="mb-3 flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                            <MessageCircle className="size-6" />
                        </div>

                        <CardTitle>WhatsApp Support</CardTitle>

                        <CardDescription>
                            Need a quick response? Contact our team directly
                            through WhatsApp.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="relative">
                        <Button
                            variant="outline"
                            className="w-full h-12 rounded-xl border-primary/20 hover:bg-primary/10"
                        >
                            <Link
                                href="https://wa.me/27655534049"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="inline-flex items-center">
                                    Chat on WhatsApp
                                    <ExternalLink className="ml-2 size-4" />
                                </div>

                            </Link>
                        </Button>
                    </CardContent>

                </Card>


                {/* Phone Support */}
                <Card className="group relative overflow-hidden border-border/50 bg-card/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">

                    <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/20" />

                    <CardHeader className="relative">
                        <div className="mb-3 flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                            <Phone className="size-6" />
                        </div>

                        <CardTitle>Phone Support</CardTitle>

                        <CardDescription>
                            Speak directly with our team for assistance with
                            your website.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="relative">
                        <Button
                            variant="outline"
                            className="w-full h-12 rounded-xl border-primary/20 hover:bg-primary/10"
                        >
                            <Link href="tel:+27655534049">
                                <div className="inline-flex items-center">
                                    Call Support
                                    <Phone className="ml-2 size-4" />
                                </div>
                            </Link>
                        </Button>
                    </CardContent>

                </Card>

            </div>

            {/* HELP TOPICS */}

            <Card className="border-border/50 bg-card/60 shadow-xl backdrop-blur-xl">

                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <BookOpen className="size-5" />
                        </div>

                        <div>
                            <CardTitle>Help Topics</CardTitle>

                            <CardDescription>
                                Find information about managing your website.
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>

                <CardContent>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                        <div className="rounded-xl border border-border/50 bg-background/40 p-5 transition-all hover:border-primary/30 hover:bg-primary/5">
                            <h3 className="font-semibold">
                                Managing Events
                            </h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                Learn how to create, update, and manage events
                                displayed on your website.
                            </p>
                        </div>


                        <div className="rounded-xl border border-border/50 bg-background/40 p-5 transition-all hover:border-primary/30 hover:bg-primary/5">
                            <h3 className="font-semibold">
                                Gallery Management
                            </h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                Upload new images, organize gallery categories,
                                update images, or remove existing content.
                            </p>
                        </div>


                        <div className="rounded-xl border border-border/50 bg-background/40 p-5 transition-all hover:border-primary/30 hover:bg-primary/5">
                            <h3 className="font-semibold">
                                Promotions
                            </h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                Create and manage promotions, track their
                                duration, and update active offers.
                            </p>
                        </div>


                        <div className="rounded-xl border border-border/50 bg-background/40 p-5 transition-all hover:border-primary/30 hover:bg-primary/5">
                            <h3 className="font-semibold">
                                Website Information
                            </h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                Update your business contact information,
                                location, and other client details.
                            </p>
                        </div>


                        <div className="rounded-xl border border-border/50 bg-background/40 p-5 transition-all hover:border-primary/30 hover:bg-primary/5">
                            <h3 className="font-semibold">
                                Contract & Renewals
                            </h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                View your contract information, contract
                                duration, and upcoming renewal dates.
                            </p>
                        </div>


                        <div className="rounded-xl border border-border/50 bg-background/40 p-5 transition-all hover:border-primary/30 hover:bg-primary/5">
                            <h3 className="font-semibold">
                                Billing & Payments
                            </h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                View your payment status and get assistance
                                with billing or missed payments.
                            </p>
                        </div>

                    </div>

                </CardContent>

            </Card>

            {/* FAQ / STILL NEED HELP */}

            <Card className="relative overflow-hidden border-primary/20 bg-primary/5 backdrop-blur-xl">

                <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/10 blur-[100px]" />

                <CardContent className="relative flex flex-col items-center justify-between gap-6 p-8 text-center sm:flex-row sm:text-left">

                    <div className="flex items-start gap-4">

                        <div className="hidden size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:flex">
                            <CircleHelp className="size-6" />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold">
                                Still Need Help?
                            </h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                {"If you can't find what you're looking for,\n" +
                                    "                                contact our support team and we'll help you\n" +
                                    "                                get everything sorted."}
                            </p>
                        </div>

                    </div>

                    <Button
                        className="shrink-0 h-10 rounded-xl"

                    >
                        <Link href="mailto:hackboltstudios@gmail.com">
                            <div className=" inline-flex items-center">
                                Get in Touch
                                <ArrowRight className="ml-2 size-4" />
                            </div>
                        </Link>
                    </Button>

                </CardContent>

            </Card>

        </div>
    );
};

export default Support;