import {
    CalendarDays,
    Image as ImageIcon,
    Megaphone,
    MapPin,
    FileSignature,
    CreditCard,
    ShieldCheck,
    ArrowRight,
    CircleCheck,
    AlertTriangle,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
    {
        title: "Manage Events",
        description:
            "Create and manage upcoming events, launches, promotions, and important dates that you want your website visitors to know about.",
        icon: CalendarDays,
        action: "Manage Events",
        url: "/admin/dashboard/manage-events",
    },
    {
        title: "Website Popups",
        description:
            "Create promotional announcements and popups that automatically appear when visitors arrive on your website.",
        icon: Megaphone,
        action: "Manage Popups",
        url: "/admin/dashboard/manage-promo",
    },
    {
        title: "Gallery Management",
        description:
            "Upload and manage your business images, projects, products, and other visual content displayed in your website gallery.",
        icon: ImageIcon,
        action: "Manage Gallery",
        url: "/admin/dashboard/manage-gallery",
    },
    {
        title: "Client Profile",
        description:
            "Manage your business information including contact details, location, operating information, and other important company details.",
        icon: MapPin,
        action: "View Profile",
        url: "/admin/dashboard/account"
    },
    {
        title: "Contract Management",
        description:
            "View your signed service agreement, contract duration, renewal date, and important contract information.",
        icon: FileSignature,
        action: "View Contract",
        url: "/admin/dashboard/contract-agreement"
    },
    {
        title: "Billing & Payments",
        description:
            "Keep track of your service payments, upcoming billing dates, payment history, and account status.",
        icon: CreditCard,
        action: "View Billing",
        url: "/admin/dashboard/billing",
    },
];

export default function DashboardPage() {
    return (
        <div className="space-y-10">

            {/* HEADER */}
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/60 p-8 shadow-xl backdrop-blur-xl sm:p-10">

                {/* Background Glow */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />

                <div className="relative z-10 max-w-3xl">

                    <Badge
                        variant="secondary"
                        className="mb-5 border border-primary/20 bg-primary/10 px-4 py-2 text-primary"
                    >
                        Client Control Center
                    </Badge>

                    <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                        Welcome to your{" "}
                        <span className="text-primary">
                            Dashboard.
                        </span>
                    </h1>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                        Your website management hub. From here you can manage
                        your website content, events, promotions, gallery,
                        business information, contracts, and account billing.
                    </p>

                </div>

            </div>

            {/* ACCOUNT STATUS */}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {/* Website Status */}
                <Card className="border-border/50 bg-card/60 backdrop-blur-xl">
                    <CardContent className="flex items-center gap-4 p-6">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <ShieldCheck className="h-6 w-6" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Website Status
                            </p>

                            <div className="mt-1 flex items-center gap-2">
                                <CircleCheck className="h-4 w-4 text-green-500" />

                                <span className="font-semibold">
                                    Active
                                </span>
                            </div>
                        </div>

                    </CardContent>
                </Card>


                {/* Contract */}
                <Card className="border-border/50 bg-card/60 backdrop-blur-xl">
                    <CardContent className="flex items-center gap-4 p-6">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <FileSignature className="h-6 w-6" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Contract
                            </p>

                            <p className="mt-1 font-semibold">
                                Active
                            </p>
                        </div>

                    </CardContent>
                </Card>


                {/* Payment */}
                <Card className="border-border/50 bg-card/60 backdrop-blur-xl">
                    <CardContent className="flex items-center gap-4 p-6">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <CreditCard className="h-6 w-6" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Payment Status
                            </p>

                            <div className="mt-1 flex items-center gap-2">
                                <CircleCheck className="h-4 w-4 text-green-500" />

                                <span className="font-semibold">
                                    Up to Date
                                </span>
                            </div>
                        </div>

                    </CardContent>
                </Card>

            </div>

            {/* MANAGEMENT FEATURES */}

            <div>

                <div className="mb-6">

                    <h2 className="text-2xl font-bold tracking-tight">
                        Manage Your Website
                    </h2>

                    <p className="mt-2 text-muted-foreground">
                        Everything you need to keep your website and account
                        up to date.
                    </p>

                </div>


                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {features.map((feature) => {

                        const Icon = feature.icon;

                        return (
                            <Card
                                key={feature.title}
                                className="group relative overflow-hidden border-border/50 bg-card/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                            >

                                {/* Hover Glow */}
                                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                                <CardHeader className="relative">

                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">

                                        <Icon className="h-6 w-6" />

                                    </div>

                                    <CardTitle>
                                        {feature.title}
                                    </CardTitle>

                                </CardHeader>

                                <CardContent className="relative">

                                    <p className="text-sm leading-6 text-muted-foreground">
                                        {feature.description}
                                    </p>

                                    <Link href={feature.url}>
                                        <Button
                                            variant="ghost"
                                            className="mt-5 w-full h-12 justify-between px-2 text-primary hover:bg-transparent hover:text-primary"
                                        >
                                            {feature.action}

                                            <ArrowRight
                                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                            />

                                        </Button>
                                    </Link>

                                </CardContent>

                            </Card>
                        );
                    })}
                </div>
            </div>

            {/* BILLING WARNING */}

            <Card className="border-yellow-500/20 bg-yellow-500/5">

                <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-500">

                        <AlertTriangle className="h-6 w-6" />

                    </div>

                    <div>

                        <h3 className="font-semibold">
                            Keep Your Account Active
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            Your website remains active while your account and
                            service payments are up to date. If a payment is
                            missed, your website may be temporarily suspended
                            until the outstanding payment is received.
                        </p>

                    </div>

                </CardContent>

            </Card>

        </div>
    );
}