export default function Background() {
    return (
        <div
            aria-hidden="true"
            className="
                pointer-events-none
                fixed
                inset-0
                -z-50
                overflow-hidden
                bg-background
                transition-colors
                duration-500
            "
        >
            {/* ========================= */}
            {/* PRIMARY COLOR GLOW */}
            {/* ========================= */}

            <div
                className="
                    absolute
                    -left-40
                    top-0
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-primary/15
                    blur-[140px]
                    transition-colors
                    duration-500
                    dark:bg-primary/20
                "
            />

            {/* ========================= */}
            {/* SECONDARY BLUE GLOW */}
            {/* ========================= */}

            <div
                className="
                    absolute
                    -right-40
                    top-[15%]
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-blue-500/10
                    blur-[140px]
                    transition-colors
                    duration-500
                    dark:bg-blue-500/15
                "
            />

            {/* ========================= */}
            {/* CENTER PRIMARY GLOW */}
            {/* ========================= */}

            <div
                className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[600px]
                    w-[600px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-primary/5
                    blur-[160px]
                    transition-colors
                    duration-500
                    dark:bg-primary/10
                "
            />

            {/* ========================= */}
            {/* BOTTOM PRIMARY GLOW */}
            {/* ========================= */}

            <div
                className="
                    absolute
                    -bottom-40
                    left-1/4
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-primary/10
                    blur-[140px]
                    transition-colors
                    duration-500
                    dark:bg-primary/15
                "
            />

            {/* ========================= */}
            {/* LIGHT MODE COLOR WASH */}
            {/* ========================= */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-primary/[0.04]
                    via-transparent
                    to-blue-500/[0.04]
                    transition-colors
                    duration-500
                    dark:from-primary/[0.02]
                    dark:to-blue-500/[0.02]
                "
            />

            {/* ========================= */}
            {/* FUTURISTIC GRID */}
            {/* ========================= */}

            <div
                className="
                    absolute
                    inset-0
                    bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)]
                    bg-[size:50px_50px]
                    opacity-[0.05]
                    dark:opacity-[0.04]
                "
            />

            {/* ========================= */}
            {/* TOP LIGHT */}
            {/* ========================= */}

            <div
                className="
                    absolute
                    inset-x-0
                    top-0
                    h-[500px]
                    bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_65%)]
                    dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_65%)]
                "
            />
        </div>
    );
}