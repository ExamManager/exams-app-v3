"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { siteUrls } from "@/config/urls";
import { cn } from "@/lib/utils";

export function HomeHero() {
    return (
        <section className="relative overflow-hidden">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_-10%,rgba(255,176,0,0.18),transparent_55%),radial-gradient(ellipse_40%_30%_at_0%_40%,rgba(255,176,0,0.05),transparent_50%)]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.18] [background-image:linear-gradient(to_right,hsl(var(--border)/0.55)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.55)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_70%_50%_at_20%_0%,black,transparent)]"
            />

            <div className="relative z-10 flex min-h-[100dvh] flex-col">
                <div className="container max-w-[1400px] px-4 pb-8 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
                    <div className="max-w-2xl space-y-7">
                        <div className="home-hero-copy space-y-5">
                            <p className="font-heading text-[clamp(2.85rem,7vw,5.25rem)] font-bold leading-[0.9] tracking-tight text-brand">
                                ExamManager
                            </p>
                            <h1 className="max-w-[16ch] font-heading text-[clamp(1.5rem,3.1vw,2.35rem)] font-semibold leading-[1.12] tracking-tight text-foreground">
                                Calm timing for every exam day
                            </h1>
                            <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                                Classroom timers, multi-exam sessions, and
                                seating that keep exam day quiet.
                            </p>
                        </div>

                        <div className="home-hero-cta flex flex-wrap items-center gap-3">
                            <Link
                                href={siteUrls.features}
                                className={cn(
                                    buttonVariants({ size: "lg" }),
                                    "bg-brand text-brand-foreground shadow-none hover:bg-brand/90 active:scale-[0.98]",
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
                        </div>
                    </div>
                </div>

                <div className="home-hero-visual relative mt-auto w-full">
                    <div
                        aria-hidden
                        className="absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-background to-transparent"
                    />
                    <div className="relative aspect-[16/9] w-full min-h-[280px] max-h-[min(58vh,640px)] overflow-hidden sm:min-h-[360px]">
                        <Image
                            src="/marketing/hero-overview.png"
                            alt="ExamManager exams overview with timed papers and classroom sessions"
                            fill
                            priority
                            className="object-cover object-top"
                            sizes="100vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
