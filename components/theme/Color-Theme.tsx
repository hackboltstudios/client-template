"use client";

import { useEffect, useState } from "react";
import { Palette, Check } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const colorThemes = [
    {
        name: "Psycho Red",
        value: "red",
        color: "#ef4444",
    },
    {
        name: "Electric Purple",
        value: "purple",
        color: "#a855f7",
    },
    {
        name: "Cyber Blue",
        value: "blue",
        color: "#06b6d4",
    },
    {
        name: "Neon Green",
        value: "green",
        color: "#22c55e",
    },
    {
        name: "Neon Pink",
        value: "pink",
        color: "#ec4899",
    },
    {
        name: "Neon Orange",
        value: "orange",
        color: "#f97316",
    },
    {
        name: "Electric Yellow",
        value: "yellow",
        color: "#eab308",
    },
];

export function ColorTheme() {
    const [mounted, setMounted] = useState(false);

    const [theme, setTheme] = useState<string>(() => {
        if (typeof window === "undefined") {
            return "red";
        }

        return (
            localStorage.getItem(
                "psycho-society-color-theme"
            ) || "red"
        );
    });

    useEffect(() => {
        setMounted(true);

        const savedTheme =
            localStorage.getItem(
                "psycho-society-color-theme"
            ) || "red";

        document.documentElement.setAttribute(
            "data-color-theme",
            savedTheme
        );
    }, []);

    const handleThemeChange = (value: string) => {
        setTheme(value);

        localStorage.setItem(
            "psycho-society-color-theme",
            value
        );

        document.documentElement.setAttribute(
            "data-color-theme",
            value
        );
    };

    if (!mounted) {
        return (
            <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
                aria-label="Choose color theme"
            >
                <Palette className="h-5 w-5" />
            </button>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 focus:outline-none"
                aria-label="Choose color theme"
            >
                <Palette className="h-5 w-5" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-56"
            >
                <DropdownMenuRadioGroup
                    value={theme}
                    onValueChange={handleThemeChange}
                >
                    {colorThemes.map((colorTheme) => (
                        <DropdownMenuRadioItem
                            key={colorTheme.value}
                            value={colorTheme.value}
                            className="cursor-pointer"
                        >
                            <span
                                className="mr-2 h-4 w-4 rounded-full border border-white/20"
                                style={{
                                    backgroundColor:
                                    colorTheme.color,
                                    boxShadow: `0 0 10px ${colorTheme.color}80`,
                                }}
                            />

                            <span className="flex-1">
                                {colorTheme.name}
                            </span>

                            {theme === colorTheme.value && (
                                <Check className="h-4 w-4" />
                            )}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}