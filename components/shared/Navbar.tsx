"use client";

import {
    BookOpen,
    Contact,
    Home, LogIn,
    Menu, Palette,
    ShoppingBag,
    Sparkles,
    X,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "@/components/theme/Theme-Toggle";
import { ColorTheme } from "@/components/theme/Color-Theme";
import {FaUser} from "react-icons/fa";
import {Button} from "@/components/ui/button";
import {DummyData} from "@/app/data/DummyData";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        {
            href: "/",
            label: "Home",
            icon: Home,
        },
        {
            href: "/#about",
            label: "About",
            icon: BookOpen,
        },
        {
            href: "/#services",
            label: "Services",
            icon: Sparkles,
        },
        {
            href: "/gallery",
            label: "Gallery",
            icon: ShoppingBag,
        },
        {
            href: "/#contact",
            label: "Contact",
            icon: Contact,
        },
    ];

    return (
        <header className="absolute left-0 top-0 z-50 w-full px-6 pt-5 sm:px-6 lg:px-8">
            {/* NAVBAR */}
            <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between overflow-hidden rounded-full border border-white/10 bg-black/60 px-5 py-3.5 shadow-2xl backdrop-blur-2xl sm:px-6">

                {/* Background Glow */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.04] via-transparent to-blue-500/[0.04]" />

                    <div className="absolute -left-10 top-0 h-20 w-20 rounded-full bg-primary/10 blur-3xl" />

                    <div className="absolute right-10 top-0 h-20 w-20 rounded-full bg-blue-500/10 blur-3xl" />
                </div>

                {/* BRAND */}
                <Link
                    href="/"
                    className="group relative z-10 flex items-center gap-3"
                >
                    {/* Brand Logo */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-primary/60 group-hover:bg-primary/20">
                        <span className="text-sm font-black tracking-tighter text-primary">
                            PS
                        </span>
                    </div>

                    {/* Brand Name */}
                    <div className="hidden sm:block">
                        <span className="text-sm font-black uppercase tracking-[0.2em] text-white transition-colors duration-300 group-hover:text-primary">
                            {DummyData.ClientBusinessName}
                        </span>

                        <p className="text-[9px] uppercase tracking-[0.3em] text-gray-600">
                            Wear Your Identity
                        </p>
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <div className="relative z-10 hidden items-center gap-7 md:flex">

                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group relative text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white"
                        >
                            {item.label}

                            {/* Animated Underline */}
                            <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}

                    {/* Shop Button */}
                    <Link
                        href="#gallery"
                        className="group flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]"
                    >
                        Shop

                        <ShoppingBag
                            size={15}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                    </Link>

                    {/* Theme Toggle */}
                    <ModeToggle />
                    <ColorTheme />
                    <Link href="/admin/login">
                        <button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
                            aria-label="Choose color theme"
                        >
                            <LogIn  className="h-5 w-5" />
                        </button>
                    </Link>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <X size={22} />
                    ) : (
                        <Menu size={22} />
                    )}
                </button>
            </nav>

            {/* MOBILE MENU */}
            <div
                className={`fixed right-0 top-0 z-[999] h-screen w-[85%] max-w-sm border-l border-white/10 bg-black/95 shadow-2xl backdrop-blur-2xl transition-transform duration-300 ease-in-out ${
                    menuOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                }`}
            >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between border-b border-white/10 p-6">

                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                            <span className="text-sm font-black text-primary">
                                PS
                            </span>
                        </div>

                        <div>
                            <p className="text-sm font-black uppercase tracking-[0.2em] text-white">
                                Psycho Society
                            </p>

                            <p className="text-[9px] uppercase tracking-[0.25em] text-gray-600">
                                Wear Your Identity
                            </p>
                        </div>
                    </Link>

                    <button
                        type="button"
                        aria-label="Close menu"
                        onClick={() => setMenuOpen(false)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-colors hover:border-primary/30 hover:text-primary"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex flex-col p-6">

                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
                        Navigation
                    </p>

                    <div className="space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="group flex items-center gap-4 rounded-xl px-4 py-4 text-base font-semibold text-gray-400 transition-all duration-300 hover:bg-primary/10 hover:text-white"
                                >
                                    <Icon
                                        size={20}
                                        className="text-gray-600 transition-colors duration-300 group-hover:text-primar"
                                    />

                                    <span>
                                        {item.label}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Shop CTA */}
                    <Link
                        href="#gallery"
                        onClick={() => setMenuOpen(false)}
                        className="group mt-8 flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary"
                    >
                        Shop The Collection

                        <ShoppingBag
                            size={18}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                    </Link>

                    {/* Theme */}
                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                        <span className="text-sm text-gray-500">
                            Appearance
                        </span>

                        <ModeToggle />
                    </div>

                    {/* Brand Statement */}
                    <div className="mt-auto pt-16 text-center">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-700">
                            Psycho Society
                        </p>

                        <p className="mt-2 text-xs font-medium text-gray-600">
                            Wear Your Identity. Be Different.
                        </p>
                    </div>
                </div>
            </div>

            {/* MOBILE BACKDROP */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-[998] bg-black/70 backdrop-blur-sm md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </header>
    );
};

export default Navbar;