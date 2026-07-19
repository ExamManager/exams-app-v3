import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
    Accessibility,
    BarChart3,
    CalendarDays,
    Clock3,
    LayoutGrid,
    Users,
} from "lucide-react";
import { ProductFrame } from "@/app/(web)/_components/marketing/product-frame";
import { Reveal } from "@/app/(web)/_components/marketing/reveal";
import { buttonVariants } from "@/components/ui/button";
import { siteUrls } from "@/config/urls";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Features",
    description:
        "ExamManager features for classroom timers, multi-exam sessions, timetables, seating, and calm exam days.",
};

export default function FeaturesPage() {
    return (
        <main className="relative">
            {/* 1. Hero */}
            <section className="relative overflow-hidden border-b border-border/70">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,176,0,0.12),transparent_55%)]"
                />
                <div className="relative container max-w-[1400px] px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
                    <div className="max-w-2xl space-y-4">
                        <p className="font-heading text-4xl font-bold tracking-tight text-brand sm:text-5xl">
                            ExamManager
                        </p>
                        <h1 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl md:leading-[1.15]">
                            Tools for quiet, on-time exam weeks
                        </h1>
                        <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Timers, sessions, seating, and planning built for
                            school exam teams.
                        </p>
                        <div className="pt-1">
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
            </section>

            {/* 2. Full-bleed timer showcase */}
            <section className="border-b border-border/70 py-16 md:py-24">
                <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="relative">
                            <div
                                aria-hidden
                                className="absolute -inset-4 rounded-2xl bg-[radial-gradient(ellipse_at_40%_30%,rgba(255,176,0,0.16),transparent_60%)] blur-xl"
                            />
                            <ProductFrame
                                src="/marketing/timer-display.png"
                                alt="Classroom exam timer display with remaining time"
                                width={1400}
                                height={900}
                                priority
                                sizes="(max-width: 1400px) 100vw, 1400px"
                                className="relative"
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div className="mx-auto mt-10 max-w-2xl space-y-4 text-center sm:mt-12">
                            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-brand/35 bg-brand/10 text-brand">
                                <Clock3
                                    className="h-5 w-5"
                                    strokeWidth={1.75}
                                />
                            </div>
                            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                                A classroom timer students can trust
                            </h2>
                            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                                A low-distraction countdown for the wall.
                                Students and invigilators share one clear clock
                                for the whole paper.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 3. Asymmetric bento */}
            <section className="border-b border-border/70 bg-muted/20 py-16 md:py-24 dark:bg-muted/10">
                <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="mb-10 max-w-2xl space-y-3 sm:mb-12">
                            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                                Sessions, rooms, and review
                            </h2>
                            <p className="text-base text-muted-foreground sm:text-lg">
                                Parallel papers, seating, timetables, and
                                analytics that stay readable under pressure.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid gap-4 md:grid-cols-12 md:gap-5">
                        <Reveal className="md:col-span-7">
                            <div className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-xl border border-border/80 bg-background">
                                <div className="relative min-h-[200px] flex-1 overflow-hidden">
                                    <Image
                                        src="/marketing/multi-exam.png"
                                        alt="Multiple exams running in parallel"
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                                        sizes="(max-width: 768px) 100vw, 58vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
                                </div>
                                <div className="relative space-y-2 p-6 pt-0">
                                    <LayoutGrid
                                        className="mb-2 h-5 w-5 text-brand"
                                        strokeWidth={1.75}
                                    />
                                    <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                                        Multi-exam sessions
                                    </h3>
                                    <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                                        Run several papers in parallel when
                                        rooms and start times overlap. Keep
                                        every cohort on its own schedule.
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.06} className="md:col-span-5">
                            <div className="relative flex h-full min-h-[300px] overflow-hidden rounded-xl border border-border/80">
                                <Image
                                    src="/marketing/seating.png"
                                    alt="Classroom seating plan layout"
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/45 to-background/5" />
                                <div className="relative mt-auto space-y-2 p-6">
                                    <Users
                                        className="mb-1 h-5 w-5 text-brand"
                                        strokeWidth={1.75}
                                    />
                                    <h3 className="font-heading text-xl font-semibold tracking-tight">
                                        Seating before the bell
                                    </h3>
                                    <p className="max-w-sm text-sm text-muted-foreground">
                                        Lay out desks so every candidate has a
                                        seat before they arrive.
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.04} className="md:col-span-5">
                            <div className="flex h-full min-h-[280px] flex-col justify-between rounded-xl border border-border/80 bg-background p-6 sm:p-8">
                                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-brand">
                                    <CalendarDays
                                        className="h-5 w-5"
                                        strokeWidth={1.75}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                                        Timetables staff can scan
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        Plan exam weeks with schedules that stay
                                        clear for office teams and invigilators.
                                    </p>
                                </div>
                                <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-lg border border-border/70">
                                    <Image
                                        src="/marketing/timetable.png"
                                        alt="Exam timetable planning view"
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                    />
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1} className="md:col-span-7">
                            <div className="grid h-full min-h-[280px] overflow-hidden rounded-xl border border-border/80 bg-background sm:grid-cols-[0.95fr_1.05fr]">
                                <div className="flex flex-col justify-center space-y-3 p-6 sm:p-8">
                                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-brand/35 bg-brand/10 text-brand">
                                        <BarChart3
                                            className="h-5 w-5"
                                            strokeWidth={1.75}
                                        />
                                    </div>
                                    <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                                        Analytics after the paper
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        Review outcomes and refine the next exam
                                        week with clearer session data.
                                    </p>
                                </div>
                                <div className="relative min-h-[180px] border-t border-border/70 sm:min-h-0 sm:border-l sm:border-t-0">
                                    <Image
                                        src="/marketing/analytics.png"
                                        alt="Exam analytics and session review"
                                        fill
                                        className="object-cover object-left-top"
                                        sizes="(max-width: 768px) 100vw, 35vw"
                                    />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* 4. Accessibility timing - vertical stack */}
            <section className="border-b border-border/70 py-16 md:py-24">
                <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="mx-auto max-w-2xl space-y-5 text-center">
                            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-brand/35 bg-brand/10 text-brand">
                                <Accessibility
                                    className="h-5 w-5"
                                    strokeWidth={1.75}
                                />
                            </div>
                            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                                Accessibility timing built in
                            </h2>
                            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                                Reading time before writing begins. Extra time
                                for access arrangements. The same calm clock,
                                adjusted for every candidate.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div className="relative mx-auto mt-10 max-w-4xl sm:mt-12">
                            <div
                                aria-hidden
                                className="absolute -inset-3 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(255,176,0,0.12),transparent_65%)] blur-xl"
                            />
                            <ProductFrame
                                src="/marketing/session-live.png"
                                alt="Live exam session with accessibility timing"
                                width={1200}
                                height={800}
                                sizes="(max-width: 1024px) 100vw, 896px"
                                className="relative"
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={0.12}>
                        <ul className="mx-auto mt-10 grid max-w-3xl gap-6 sm:mt-12 sm:grid-cols-3 sm:gap-8">
                            {[
                                "Reading time before the paper starts",
                                "Extra time without a second clock",
                                "Consistent experience across rooms",
                            ].map((point) => (
                                <li
                                    key={point}
                                    className="border-t border-brand/40 pt-4 text-sm leading-relaxed text-muted-foreground sm:text-base"
                                >
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
            </section>

            {/* 5. Planning - full-width composition */}
            <section className="border-b border-border/70 bg-muted/20 py-16 md:py-24 dark:bg-muted/10">
                <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                    <div className="grid items-end gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
                        <Reveal>
                            <div className="max-w-md space-y-4">
                                <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                                    Plan the week before it starts
                                </h2>
                                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                                    Prepare papers and rooms ahead of exam week.
                                    Grow from a single classroom to larger
                                    cohorts without changing tools.
                                </p>
                                <ul className="space-y-2.5 pt-1 text-sm text-muted-foreground sm:text-base">
                                    {[
                                        "Create papers with rooms and timing",
                                        "See the week at a glance",
                                        "Notify teams when plans change",
                                    ].map((point) => (
                                        <li
                                            key={point}
                                            className="flex gap-2"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={0.08}>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/80 sm:row-span-2 sm:aspect-auto sm:min-h-[420px]">
                                    <Image
                                        src="/marketing/planning.png"
                                        alt="Exam planning overview"
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 640px) 100vw, 35vw"
                                    />
                                </div>
                                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border/80">
                                    <Image
                                        src="/marketing/create-exam.png"
                                        alt="Create exam form in ExamManager"
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 640px) 100vw, 30vw"
                                    />
                                </div>
                                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border/80">
                                    <Image
                                        src="/marketing/notifications.png"
                                        alt="Exam notifications and updates"
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 640px) 100vw, 30vw"
                                    />
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.1}>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10">
                            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border/80">
                                <Image
                                    src="/marketing/dashboard.png"
                                    alt="Exam dashboard after a session"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                />
                            </div>
                            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border/80">
                                <Image
                                    src="/marketing/classroom.png"
                                    alt="Classroom ready for an exam session"
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 6. Closing CTA band */}
            <section className="py-20 md:py-24">
                <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="relative overflow-hidden rounded-2xl border border-border/80 px-6 py-12 sm:px-10 sm:py-14">
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,176,0,0.16),transparent_50%),radial-gradient(ellipse_at_90%_100%,rgba(255,176,0,0.08),transparent_45%)]"
                            />
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-30 lg:block"
                            >
                                <Image
                                    src="/marketing/hero-overview.png"
                                    alt=""
                                    fill
                                    className="object-cover object-left-top"
                                    sizes="40vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
                            </div>
                            <div className="relative mx-auto flex max-w-xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
                                <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                                    Ready to see plans and docs
                                </h2>
                                <p className="mt-3 text-base text-muted-foreground">
                                    Compare school plans or read how ExamManager
                                    runs an exam week.
                                </p>
                                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                                    <Link
                                        href={siteUrls.docs}
                                        className={cn(
                                            buttonVariants({ size: "lg" }),
                                            "active:scale-[0.98]",
                                        )}
                                    >
                                        View docs
                                    </Link>
                                    <Link
                                        href={siteUrls.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={cn(
                                            buttonVariants({
                                                size: "lg",
                                                variant: "outline",
                                            }),
                                            "active:scale-[0.98]",
                                        )}
                                    >
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
