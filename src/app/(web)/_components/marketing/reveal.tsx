"use client";

import { useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

/**
 * Scroll-friendly entrance that never depends on opacity:0.
 * Uses CSS animation so content stays readable if JS motion fails.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
    const prefersReducedMotion = useReducedMotion();
    const shouldDelay = !prefersReducedMotion && delay > 0;

    const style: CSSProperties | undefined = shouldDelay
        ? { animationDelay: `${delay}s` }
        : undefined;

    return (
        <div
            className={cn(
                !prefersReducedMotion && "motion-safe:animate-rise",
                className,
            )}
            style={style}
        >
            {children}
        </div>
    );
}
