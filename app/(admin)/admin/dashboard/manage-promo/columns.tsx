"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Promo } from "./promodata";

export const columns: ColumnDef<Promo>[] = [
    {
        accessorKey: "name",
        header: "Promotion",

        cell: ({ row }) => {
            return (
                <div className="flex flex-col">
                    <span className="font-semibold">
                        {row.original.name}
                    </span>

                    <span className="text-xs text-muted-foreground">
                        {row.original.promoCode}
                    </span>
                </div>
            );
        },
    },

    {
        accessorKey: "type",
        header: "Type",

        cell: ({ row }) => {
            return (
                <span className="text-sm text-muted-foreground">
                    {row.original.type}
                </span>
            );
        },
    },

    {
        accessorKey: "discount",
        header: "Discount",

        cell: ({ row }) => {
            const promo = row.original;

            if (promo.type === "Percentage") {
                return (
                    <span className="font-semibold text-primary">
                        {promo.discount}%
                    </span>
                );
            }

            if (promo.type === "Fixed Amount") {
                return (
                    <span className="font-semibold text-primary">
                        ${promo.discount.toFixed(2)}
                    </span>
                );
            }

            if (promo.type === "Buy One Get One") {
                return (
                    <span className="font-semibold text-primary">
                        BOGO
                    </span>
                );
            }

            if (promo.type === "Free Shipping") {
                return (
                    <span className="font-semibold text-primary">
                        Free
                    </span>
                );
            }

            return null;
        },
    },

    {
        id: "duration",
        header: "Duration",

        cell: ({ row }) => {
            const promo = row.original;

            return (
                <div className="flex flex-col">
                    <span className="text-sm font-medium">
                        {promo.startDate}
                    </span>

                    <span className="text-xs text-muted-foreground">
                        to {promo.endDate}
                    </span>
                </div>
            );
        },
    },


    {
        id: "usage",
        header: "Usage",

        cell: ({ row }) => {
            const promo = row.original;

            return (
                <div className="flex flex-col">
                    <span className="text-sm font-semibold">
                        {promo.usageCount}
                        {promo.usageLimit !== null &&
                            ` / ${promo.usageLimit}`}
                    </span>

                    <span className="text-xs text-muted-foreground">
                        {promo.usageLimit === null
                            ? "Unlimited"
                            : "Uses"}
                    </span>
                </div>
            );
        },
    },

    {
        accessorKey: "status",
        header: "Status",

        cell: ({ row }) => {
            const status =
                row.getValue("status") as Promo["status"];

            const statusStyles = {
                Active:
                    "bg-green-500/10 text-green-500 border-green-500/20",

                Scheduled:
                    "bg-blue-500/10 text-blue-500 border-blue-500/20",

                Expired:
                    "bg-muted text-muted-foreground border-border",

                Draft:
                    "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",

                Paused:
                    "bg-orange-500/10 text-orange-500 border-orange-500/20",
            };

            return (
                <span
                    className={`
                        inline-flex
                        rounded-full
                        border
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        ${statusStyles[status]}
                    `}
                >
                    {status}
                </span>
            );
        },
    },
    {
        id: "actions",
        header: "Actions",

        cell: ({ row }) => {
            const promo = row.original;

            return (
                <div className="flex justify-start gap-2">

                    {/* Edit */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-primary/10 hover:text-primary"
                        onClick={() => {
                            console.log(
                                "Edit promotion:",
                                promo.id
                            );
                        }}
                    >
                        <Pencil className="size-4" />

                        <span className="sr-only">
                            Edit {promo.name}
                        </span>
                    </Button>


                    {/* Delete */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="
                            text-destructive
                            hover:bg-destructive/10
                            hover:text-destructive
                        "
                        onClick={() => {
                            console.log(
                                "Delete promotion:",
                                promo.id
                            );
                        }}
                    >
                        <Trash2 className="size-4" />

                        <span className="sr-only">
                            Delete {promo.name}
                        </span>
                    </Button>

                </div>
            );
        },
    },
];