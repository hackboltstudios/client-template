"use client";

import Link from "next/link";

import {
    ArrowUpRight,
    Mail,
    ShoppingBag,
    Sparkles,
} from "lucide-react";
import { FaInstagram, } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative w-full overflow-hidden border-t border-white/10 bg-black">

            {/* ========================= */}
            {/* BACKGROUND */}
            {/* ========================= */}

            <div className="pointer-events-none absolute inset-0">

                {/* Red Glow */}
                <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

                {/* Blue Glow */}
                <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

                {/* Subtle Center Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/[0.02] via-transparent to-blue-500/[0.02]" />

            </div>

            {/* ========================= */}
            {/* CONTENT */}
            {/* ========================= */}

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-16 lg:px-8">

                <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">

                    {/* ========================= */}
                    {/* BRAND */}
                    {/* ========================= */}

                    <div>

                        {/* Logo */}
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-3"
                        >
                            {/* PS Logo */}
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/60 group-hover:bg-primary/20">
                                <span className="text-lg font-black tracking-tighter text-primary">
                                    PS
                                </span>
                            </div>

                            {/* Brand Name */}
                            <div>
                                <h2 className="text-xl font-black uppercase tracking-[0.2em] text-white">
                                    Psycho Society
                                </h2>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.35em] text-gray-600">
                                    Wear Your Identity
                                </p>
                            </div>
                        </Link>

                        {/* Description */}
                        <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
                            Bold custom streetwear created for people who
                            aren't afraid to stand out. From custom T-shirts
                            and embroidery to hats and unique apparel,
                            we bring your ideas to life.
                        </p>

                        {/* Brand Badge */}
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur-xl">
                            <Sparkles className="h-3.5 w-3.5" />

                            Made Different
                        </div>

                    </div>

                    {/* ========================= */}
                    {/* NAVIGATION */}
                    {/* ========================= */}

                    <div>

                        <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-gray-600">
                            Explore
                        </h3>

                        <div className="flex flex-col gap-4">

                            {[
                                { name: "Home", href: "/" },
                                { name: "About", href: "#about" },
                                { name: "Services", href: "#services" },
                                { name: "Gallery", href: "#gallery" },
                                { name: "Contact", href: "#contact" },
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="group flex w-fit items-center gap-2 text-sm text-gray-500 transition-all duration-300 hover:text-white"
                                >
                                    <span>
                                        {item.name}
                                    </span>

                                    <ArrowUpRight
                                        className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                    />
                                </Link>
                            ))}

                        </div>

                    </div>

                    {/* ========================= */}
                    {/* CONNECT */}
                    {/* ========================= */}

                    <div>

                        <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-gray-600">
                            Connect
                        </h3>

                        <div className="flex flex-wrap gap-3">

                            {/* Instagram */}
                            <SocialButton
                                href="https://www.instagram.com/"
                                icon={<FaInstagram className="h-5 w-5" />}
                                label="Instagram"
                            />

                            {/* TikTok */}
                            <SocialButton
                                href="https://www.tiktok.com/"
                                icon={
                                    <span className="text-lg font-black">
                                        ♪
                                    </span>
                                }
                                label="TikTok"
                            />

                            {/* Facebook */}
                            <SocialButton
                                href="https://www.facebook.com/"
                                icon={
                                    <span className="text-lg font-black">
                                        f
                                    </span>
                                }
                                label="Facebook"
                            />

                        </div>

                        {/* CTA */}
                        <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">

                            <p className="text-sm leading-6 text-gray-400">
                                Got an idea for your next custom piece?
                                Let's make something different.
                            </p>

                            <Link
                                href="#contact"
                                className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors duration-300 hover:text-red-300"
                            >
                                Start Your Custom Order

                                <ShoppingBag
                                    className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                                />
                            </Link>

                        </div>

                    </div>

                </div>

                {/* ========================= */}
                {/* BRAND STATEMENT */}
                {/* ========================= */}

                <div className="mt-14 border-y border-white/10 py-8 text-center">

                    <p className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Wear Your
                        <span className="text-primary">
                            {" "}Identity.
                        </span>
                    </p>

                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.35em] text-gray-600">
                        Be Different.
                    </p>

                </div>

                {/* ========================= */}
                {/* BOTTOM BAR */}
                {/* ========================= */}

                <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-gray-600 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} Psycho Society.
                        All rights reserved.
                    </p>

                    <div className="flex items-center gap-2">
                        <span>
                            Designed & engineered with
                        </span>

                        <Link
                            href="https://www.hackboltstudio.co.za"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text font-bold text-transparent transition-opacity duration-300 hover:opacity-80"
                        >
                            ⚡ HackBoltStudios
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;


// =========================
// SOCIAL BUTTON
// =========================

const SocialButton = ({
                          href,
                          icon,
                          label,
                      }: {
    href: string;
    icon: React.ReactNode;
    label: string;
}) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
            aria-label={label}
        >
            {icon}
        </Link>
    );
};