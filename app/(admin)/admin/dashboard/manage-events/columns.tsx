"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Event } from "./eventsdata";

export const columns: ColumnDef<Event>[] = [
    {
        accessorKey: "title",
        header: "Event",
        cell: ({ row }) => {
            return (
                <div className="font-medium">
                    {row.getValue("title")}
                </div>
            );
        },
    },

    {
        accessorKey: "date",
        header: "Date",
        cell: ({ row }) => {
            return (
                <span className="text-muted-foreground">
                    {row.getValue("date")}
                </span>
            );
        },
    },

    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as Event["status"];

            return (
                <span
                    className={`
                        inline-flex rounded-full px-3 py-1 text-xs font-semibold
                        ${
                        status === "Active"
                            ? "bg-green-500/10 text-green-500"
                            : status === "Draft"
                                ? "bg-yellow-500/10 text-yellow-500"
                                : "bg-muted text-muted-foreground"
                    }
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
            const event = row.original;

            return (
                <div className="flex justify-start gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                            console.log("Edit event:", event.id);
                        }}
                    >
                        <Pencil className="size-4" />
                        <span className="sr-only">
                            Edit {event.title}
                        </span>
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive"
                        onClick={() => {
                            console.log("Delete event:", event.id);
                        }}
                    >
                        <Trash2 className="size-4" />
                        <span className="sr-only">
                            Delete {event.title}
                        </span>
                    </Button>
                </div>
            );
        },
    },
];