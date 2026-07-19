"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ProductFrame } from "@/app/(web)/_components/marketing/product-frame";
import { buttonVariants } from "@/components/ui/button";
import { siteUrls } from "@/config/urls";
import { cn } from "@/lib/utils";

export function HomeHero() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section className="relative min-h-[100dvh] overflow-hidden">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_78%_12%,rgba(255,176,0,0.2),transparent_55%),radial-gradient(ellipse_40%_30%_at_6%_90%,rgba(255,176,0,0.08),transparent_50%)]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.45)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.45)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_60%_30%,black,transparent)]"
            />

            <div className="relative container flex min-h-[calc(100dvh-7.5rem)] max-w-[1400px] flex-col justify-start gap-8 px-4 pb-12 pt-10 md:gap-10 md:pt-12 lg:grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.28fr)] lg:items-start lg:gap-12 lg:pb-16 lg:pt-14">
                <div className="relative z-10 max-w-xl space-y-6">
                    <motion.div
                        initial={
                            prefersReducedMotion
                                ? false
                                : { opacity: 0, y: 18 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="space-y-4"
                    >
                        <p className="font-heading text-4xl font-bold tracking-tight text-brand sm:text-5xl md:text-6xl">
                            ExamManager
                        </p>
                        <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl md:leading-[1.15]">
                            Calm timing for every exam day
                        </h1>
                        <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                            Classroom timers, multi-exam sessions, and seating
                            that keep exam day quiet.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={
                            prefersReducedMotion
                                ? false
                                : { opacity: 0, y: 14 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: prefersReducedMotion ? 0 : 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex flex-wrap items-center gap-3"
                    >
                        <Link
                            href={siteUrls.features}
                            className={cn(
                                buttonVariants({ size: "lg" }),
                                "active:scale-[0.98]",
                            )}
                        >
                            Explore features
                        </Link>
                        <Link
                            href={siteUrls.pricing}
                            className={cn(
                                buttonVariants({
                                    size: "lg",
                                    variant: "outline",
                                }),
                                "active:scale-[0.98]",
                            )}
                        >
                            See pricing
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={
                        prefersReducedMotion ? false : { opacity: 0, y: 28 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: prefersReducedMotion ? 0 : 0.18,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative z-10 lg:-mr-2 xl:-mr-6"
                >
                    <div
                        aria-hidden
                        className="absolute -inset-8 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(255,176,0,0.34),transparent_65%)] blur-2xl"
                    />
                    <ProductFrame
                        src="/marketing/hero-overview.png"
                        alt="ExamManager exams overview with timed papers and classroom sessions"
                        width={1440}
                        height={900}
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
