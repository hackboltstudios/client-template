"use client";

import {
    ArrowDownToLine,
    CalendarDays,
    CheckCircle2,
    Clock3,
    CreditCard,
    Download,
    FileText,
    Receipt,
    WalletCards,
    AlertCircle, ExternalLink,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

const invoices = [
    {
        id: "INV-2026-001",
        date: "July 1, 2026",
        dueDate: "July 7, 2026",
        amount: "$500.00",
        status: "Paid",
    },
    {
        id: "INV-2026-002",
        date: "August 1, 2026",
        dueDate: "August 7, 2026",
        amount: "$500.00",
        status: "Pending",
    },
    {
        id: "INV-2026-003",
        date: "September 1, 2026",
        dueDate: "September 7, 2026",
        amount: "$500.00",
        status: "Pending",
    },
    {
        id: "INV-2026-004",
        date: "June 1, 2026",
        dueDate: "June 7, 2026",
        amount: "$500.00",
        status: "Overdue",
    },
];

const payments = [
    {
        id: "PAY-001",
        date: "July 5, 2026",
        amount: "$500.00",
        method: "Bank Transfer",
        status: "Completed",
    },
    {
        id: "PAY-002",
        date: "June 5, 2026",
        amount: "$500.00",
        method: "Bank Transfer",
        status: "Completed",
    },
    {
        id: "PAY-003",
        date: "May 5, 2026",
        amount: "$500.00",
        method: "Card",
        status: "Completed",
    },
];

const Billing = () => {
    return (
        <div className="relative space-y-10 p-4">

            {/* HEADER */}

            <div>
                <Badge
                    variant="secondary"
                    className="mb-4 border border-primary/20 bg-primary/10 text-primary"
                >
                    Billing & Payments
                </Badge>

                <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                    Billing
                </h1>

                <p className="mt-2 max-w-2xl text-muted-foreground">
                    Manage your payments, invoices, billing information,
                    and view your payment history.
                </p>
            </div>

            {/* OVERDUE WARNING */}

            <Card className="border-destructive/30 bg-destructive/5">
                <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-start gap-4">

                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                            <AlertCircle className="size-5" />
                        </div>

                        <div>
                            <h3 className="font-semibold text-destructive">
                                Outstanding Payment
                            </h3>

                            <p className="mt-1 text-sm text-muted-foreground">
                                You currently have an overdue invoice.
                                Please settle your outstanding balance to
                                keep your services active.
                            </p>
                        </div>

                    </div>

                    <Button variant="destructive">
                        Make Payment
                    </Button>

                </CardContent>
            </Card>

            {/* BILLING SUMMARY */}

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {/* Amount Due */}
                <Card className="border-border/50 bg-card/60 backdrop-blur-xl">
                    <CardContent className="p-6">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Amount Due
                                </p>

                                <p className="mt-2 text-3xl font-black">
                                    $500.00
                                </p>
                            </div>

                            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <WalletCards className="size-5" />
                            </div>

                        </div>

                        <p className="mt-3 text-xs text-destructive">
                            1 overdue invoice
                        </p>

                    </CardContent>
                </Card>


                {/* Next Payment */}
                <Card className="border-border/50 bg-card/60 backdrop-blur-xl">
                    <CardContent className="p-6">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Next Payment
                                </p>

                                <p className="mt-2 text-3xl font-black">
                                    $500.00
                                </p>
                            </div>

                            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <CalendarDays className="size-5" />
                            </div>

                        </div>

                        <p className="mt-3 text-xs text-muted-foreground">
                            Due August 7, 2026
                        </p>

                    </CardContent>
                </Card>


                {/* Total Paid */}
                <Card className="border-border/50 bg-card/60 backdrop-blur-xl">
                    <CardContent className="p-6">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Total Paid
                                </p>

                                <p className="mt-2 text-3xl font-black">
                                    $1,500.00
                                </p>
                            </div>

                            <div className="flex size-11 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                                <CheckCircle2 className="size-5" />
                            </div>

                        </div>

                        <p className="mt-3 text-xs text-muted-foreground">
                            3 successful payments
                        </p>

                    </CardContent>
                </Card>


                {/* Contract Value */}
                <Card className="border-border/50 bg-card/60 backdrop-blur-xl">
                    <CardContent className="p-6">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Contract Value
                                </p>

                                <p className="mt-2 text-3xl font-black">
                                    $6,000.00
                                </p>
                            </div>

                            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <CreditCard className="size-5" />
                            </div>

                        </div>

                        <p className="mt-3 text-xs text-muted-foreground">
                            12-month contract
                        </p>

                    </CardContent>
                </Card>

            </div>

            {/* BILLING DETAILS */}

            <Card className="border-border/50 bg-card/60 backdrop-blur-xl">

                <CardHeader>
                    <CardTitle>Billing Information</CardTitle>

                    <CardDescription>
                        Your current billing and payment arrangement.
                    </CardDescription>
                </CardHeader>

                <CardContent>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        <div>
                            <p className="text-xs text-muted-foreground">
                                Billing Cycle
                            </p>

                            <p className="mt-1 font-semibold">
                                Monthly
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-muted-foreground">
                                Monthly Amount
                            </p>

                            <p className="mt-1 font-semibold">
                                $500.00
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-muted-foreground">
                                Payment Method
                            </p>

                            <p className="mt-1 font-semibold">
                                Bank Transfer
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-muted-foreground">
                                Account Status
                            </p>

                            <Badge className="mt-1 bg-green-500/10 text-green-500 hover:bg-green-500/10">
                                Active
                            </Badge>
                        </div>

                    </div>

                </CardContent>

            </Card>

            {/* INVOICES */}

            <Card className="border-border/50 bg-card/60 backdrop-blur-xl">

                <CardHeader>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                        <div>
                            <CardTitle>Invoices</CardTitle>

                            <CardDescription>
                                View and download your monthly invoices.
                            </CardDescription>
                        </div>

                        <Button variant="outline">
                            <Download className="mr-2 size-4" />
                            Download All
                        </Button>

                    </div>
                </CardHeader>

                <CardContent>

                    <div className="space-y-2">

                        {invoices.map((invoice) => (

                            <div
                                key={invoice.id}
                                className="group flex flex-col gap-4 rounded-xl border border-border/50 p-4 transition-all hover:border-primary/30 hover:bg-primary/5 sm:flex-row sm:items-center sm:justify-between"
                            >

                                <div className="flex items-center gap-4">

                                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <FileText className="size-5" />
                                    </div>

                                    <div>
                                        <p className="font-semibold">
                                            {invoice.id}
                                        </p>

                                        <p className="text-xs text-muted-foreground">
                                            Issued {invoice.date} • Due {invoice.dueDate}
                                        </p>
                                    </div>

                                </div>


                                <div className="flex items-center gap-4">

                                    <p className="font-semibold">
                                        {invoice.amount}
                                    </p>

                                    <Badge
                                        variant="outline"
                                        className={
                                            invoice.status === "Paid"
                                                ? "border-green-500/20 bg-green-500/10 text-green-500"
                                                : invoice.status === "Overdue"
                                                    ? "border-destructive/20 bg-destructive/10 text-destructive"
                                                    : "border-yellow-500/20 bg-yellow-500/10 text-yellow-500"
                                        }
                                    >
                                        {invoice.status}
                                    </Badge>

                                    <Button
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <Download className="size-4" />
                                    </Button>

                                </div>

                            </div>

                        ))}

                    </div>

                </CardContent>

            </Card>

            {/* PAYMENT HISTORY */}

            <Card className="border-border/50 bg-card/60 backdrop-blur-xl">

                <CardHeader>
                    <CardTitle>Payment History</CardTitle>

                    <CardDescription>
                        A record of payments made toward your contract.
                    </CardDescription>
                </CardHeader>

                <CardContent>

                    <div className="space-y-4">

                        {payments.map((payment, index) => (

                            <React.Fragment key={payment.id}>

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                    <div className="flex items-center gap-4">

                                        <div className="flex size-10 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                                            <Receipt className="size-5" />
                                        </div>

                                        <div>
                                            <p className="font-semibold">
                                                {payment.id}
                                            </p>

                                            <p className="text-sm text-muted-foreground">
                                                {payment.date} • {payment.method}
                                            </p>
                                        </div>

                                    </div>

                                    <div className="flex items-center gap-4">

                                        <p className="font-bold">
                                            {payment.amount}
                                        </p>

                                        <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/10">
                                            <CheckCircle2 className="mr-1 size-3" />
                                            {payment.status}
                                        </Badge>

                                    </div>

                                </div>

                                {index < payments.length - 1 && (
                                    <Separator />
                                )}

                            </React.Fragment>

                        ))}

                    </div>

                </CardContent>

            </Card>

            {/* PAYMENT FOOTER */}

            <Card className="border-primary/20 bg-primary/5">

                <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-start gap-4">

                        <Clock3 className="mt-1 size-5 text-primary" />

                        <div>
                            <p className="font-semibold">
                                Need help with your billing?
                            </p>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Contact support if you have questions about
                                your invoice or payment.
                            </p>
                        </div>

                    </div>

                    <Button variant="outline">
                        Contact Support
                        <ExternalLink className="ml-2 size-4" />

                    </Button>

                </CardContent>
            </Card>

        </div>
    );
};

export default Billing;