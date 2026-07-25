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
    CalendarDays,
    CheckCircle2,
    Clock,
    Download,
    Eye,
    FileCheck2,
    FileText,
    ExternalLink,
} from "lucide-react";
import Link from "next/link";

const Agreement = () => {
    // This will eventually come from your database/API
    const contract = {
        contractName: "Website Development & Management Agreement",
        contractNumber: "HBS-2026-001",
        status: "Active",
        term: "12 Months",
        startDate: "01 January 2026",
        renewalDate: "01 January 2027",
        pdfUrl: "/contracts/client-contract.pdf",

        services: [
            "Website Design & Development",
            "Website Hosting",
            "Domain Management",
            "Website Maintenance",
            "Gallery Management",
            "Event & Promotion Management",
            "Technical Support",
        ],
    };

    return (
        <div className="relative min-h-screen space-y-10 p-4">

            {/* HEADER */}

            <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    <FileCheck2 className="size-4" />
                    Contract & Agreement
                </div>

                <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                    Your Contract Agreement
                </h1>

                <p className="mt-3 max-w-2xl text-muted-foreground">
                    View your current agreement, contract term, active services,
                    and upcoming renewal information.
                </p>
            </div>

            {/* CONTRACT STATUS */}

            <Card className="relative overflow-hidden border-border/50 bg-card/60 shadow-xl backdrop-blur-xl">

                {/* Background Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/10 blur-[100px]" />

                <CardHeader className="relative z-10">

                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                        <div className="flex items-start gap-4">

                            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                                <FileText className="size-6" />
                            </div>

                            <div>
                                <CardTitle className="text-xl">
                                    {contract.contractName}
                                </CardTitle>

                                <CardDescription className="mt-1">
                                    Contract #{contract.contractNumber}
                                </CardDescription>
                            </div>

                        </div>


                        {/* Status */}
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-500">
                            <CheckCircle2 className="size-4" />
                            {contract.status}
                        </div>

                    </div>

                </CardHeader>


                <CardContent className="relative z-10">

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        {/* Contract Term */}
                        <div className="rounded-xl border border-border/50 bg-background/40 p-5">
                            <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Clock className="size-5" />
                            </div>

                            <p className="text-sm text-muted-foreground">
                                Contract Term
                            </p>

                            <p className="mt-1 text-lg font-bold">
                                {contract.term}
                            </p>
                        </div>


                        {/* Start Date */}
                        <div className="rounded-xl border border-border/50 bg-background/40 p-5">
                            <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <CalendarDays className="size-5" />
                            </div>

                            <p className="text-sm text-muted-foreground">
                                Contract Start
                            </p>

                            <p className="mt-1 text-lg font-bold">
                                {contract.startDate}
                            </p>
                        </div>


                        {/* Renewal Date */}
                        <div className="rounded-xl border border-border/50 bg-background/40 p-5">
                            <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <CalendarDays className="size-5" />
                            </div>

                            <p className="text-sm text-muted-foreground">
                                Renewal Date
                            </p>

                            <p className="mt-1 text-lg font-bold">
                                {contract.renewalDate}
                            </p>
                        </div>


                        {/* Status */}
                        <div className="rounded-xl border border-border/50 bg-background/40 p-5">
                            <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                                <CheckCircle2 className="size-5" />
                            </div>

                            <p className="text-sm text-muted-foreground">
                                Contract Status
                            </p>

                            <p className="mt-1 text-lg font-bold text-green-500">
                                Active
                            </p>
                        </div>

                    </div>

                </CardContent>

            </Card>

            {/* SERVICES + DOCUMENT */}

            <div className="grid gap-6 lg:grid-cols-2">

                {/* ACTIVE SERVICES */}

                <Card className="border-border/50 bg-card/60 shadow-xl backdrop-blur-xl">

                    <CardHeader>

                        <div className="flex items-center gap-3">

                            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <CheckCircle2 className="size-5" />
                            </div>

                            <div>
                                <CardTitle>
                                    Active Contract Services
                                </CardTitle>

                                <CardDescription>
                                    Services currently included in your agreement.
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>

                        <div className="space-y-3">

                            {contract.services.map((service) => (

                                <div
                                    key={service}
                                    className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/40 p-4 transition-all hover:border-primary/30 hover:bg-primary/5"
                                >

                                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <CheckCircle2 className="size-4" />
                                    </div>

                                    <span className="text-sm font-medium">
                                        {service}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </CardContent>

                </Card>

                {/* CONTRACT DOCUMENT */}

                <Card className="relative overflow-hidden border-border/50 bg-card/60 shadow-xl backdrop-blur-xl">

                    <div className="pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full bg-primary/10 blur-[100px]" />

                    <CardHeader className="relative z-10">

                        <div className="flex items-center gap-3">

                            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <FileText className="size-5" />
                            </div>

                            <div>
                                <CardTitle>
                                    Contract Document
                                </CardTitle>

                                <CardDescription>
                                    View or download your signed agreement.
                                </CardDescription>
                            </div>

                        </div>

                    </CardHeader>


                    <CardContent className="relative z-10">

                        {/* PDF Preview */}
                        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-background/50">

                            <div className="text-center">

                                <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-lg shadow-primary/10">
                                    <FileText className="size-10" />
                                </div>

                                <h3 className="font-semibold">
                                    Signed Contract Agreement
                                </h3>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    Contract #{contract.contractNumber}
                                </p>

                            </div>

                        </div>


                        {/* Actions */}
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">

                            <Button className="w-full h-12 rounded-xl">
                                <Link
                                    href={contract.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="inline-flex items-center">
                                        <Eye className="mr-2 size-4" />
                                        Preview Contract
                                    </div>

                                </Link>
                            </Button>


                            <Button
                                variant="outline"
                                className="w-full h-12 rounded-xl border-primary/20 hover:bg-primary/10"
                            >
                                <Link
                                    href={contract.pdfUrl}
                                    download
                                >
                                    <div className="inline-flex items-center">
                                        <Download className="mr-2 size-4" />
                                        Download PDF
                                    </div>
                                </Link>
                            </Button>

                        </div>

                    </CardContent>

                </Card>

            </div>

            {/* RENEWAL INFORMATION */}

            <Card className="relative overflow-hidden border-primary/20 bg-primary/5 backdrop-blur-xl">

                <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/10 blur-[100px]" />

                <CardContent className="relative flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">

                    <div className="flex items-start gap-4">

                        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <CalendarDays className="size-6" />
                        </div>

                        <div>

                            <h3 className="text-lg font-bold">
                                Upcoming Contract Renewal
                            </h3>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Your current agreement is scheduled for renewal
                                on{" "}
                                <span className="font-semibold text-foreground">
                                    {contract.renewalDate}
                                </span>
                                .
                            </p>

                        </div>

                    </div>

                    <Button
                        variant="outline"
                        className="rounded-xl h-12 border-primary/20 hover:bg-primary/10"
                    >
                        <div className="inline-flex items-center">
                            Contact Support
                            <ExternalLink className="ml-2 size-4" />
                        </div>
                    </Button>

                </CardContent>

            </Card>

        </div>
    );
};

export default Agreement;