import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CalendarDays,
    BarChart3,
    Clock3,
    LayoutGrid,
    Users,
} from "lucide-react";
import { ProductFrame } from "@/app/(web)/_components/marketing/product-frame";
import { Reveal } from "@/app/(web)/_components/marketing/reveal";
import { buttonVariants } from "@/components/ui/button";
import { AUTH_DISABLED } from "@/config/showcase";
import { pricings } from "@/config/pricing";
import { siteUrls } from "@/config/urls";
import { cn } from "@/lib/utils";

export function HomeSections() {
    return (
        <div className="relative">
            <TimerShowcase />
            <CapabilityBento />
            <HowItWorks />
            <PricingTeaser />
            <ClosingCta />
        </div>
    );
}

function TimerShowcase() {
    return (
        <section className="border-t border-border/70 py-20 md:py-28">
            <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                    <Reveal>
                        <div className="relative">
                            <div
                                aria-hidden
                                className="absolute -inset-4 rounded-2xl bg-[radial-gradient(ellipse_at_30%_40%,rgba(255,176,0,0.18),transparent_60%)] blur-xl"
                            />
                            <ProductFrame
                                src="/marketing/timer-display.png"
                                alt="Classroom exam timer display with remaining time"
                                width={1200}
                                height={800}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div className="max-w-lg space-y-5 lg:pl-2">
                            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-brand/35 bg-brand/10 text-brand">
                                <Clock3 className="h-5 w-5" strokeWidth={1.75} />
                            </div>
                            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                                A classroom timer students can trust
                            </h2>
                            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                                Put a clear countdown on the wall. Add reading
                                time before the paper starts, extra time for
                                access arrangements, and keep every room on the
                                same calm clock.
                            </p>
                            <ul className="space-y-2.5 text-sm text-muted-foreground sm:text-base">
                                <li className="flex gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                                    Low-distraction display for invigilators
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                                    Reading time and extra time built in
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                                    One clock across overlapping papers
                                </li>
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

function CapabilityBento() {
    return (
        <section className="border-t border-border/70 bg-muted/20 py-20 md:py-28 dark:bg-muted/10">
            <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="mb-12 max-w-2xl space-y-3">
                        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                            Built for school exam weeks
                        </h2>
                        <p className="text-base text-muted-foreground sm:text-lg">
                            Multi-exam rooms, timetables, seating, and review
                            tools that stay readable under pressure.
                        </p>
                    </div>
                </Reveal>

                <div className="grid gap-4 md:grid-cols-12 md:gap-5">
                    <Reveal className="md:col-span-7">
                        <div className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-xl border border-border/80 bg-background">
                            <div className="relative flex-1 overflow-hidden">
                                <Image
                                    src="/marketing/multi-exam.png"
                                    alt="Multiple exams running in parallel"
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                                    sizes="(max-width: 768px) 100vw, 58vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                            </div>
                            <div className="relative space-y-2 p-6 pt-0">
                                <LayoutGrid
                                    className="mb-2 h-5 w-5 text-brand"
                                    strokeWidth={1.75}
                                />
                                <h3 className="font-heading text-xl font-semibold tracking-tight">
                                    Run overlapping papers in one session
                                </h3>
                                <p className="max-w-md text-sm text-muted-foreground">
                                    Time several cohorts at once when rooms and
                                    start times collide.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.06} className="md:col-span-5">
                        <div className="flex h-full min-h-[280px] flex-col justify-between rounded-xl border border-border/80 bg-background p-6 sm:p-8">
                            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-brand">
                                <CalendarDays
                                    className="h-5 w-5"
                                    strokeWidth={1.75}
                                />
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-heading text-2xl font-semibold tracking-tight">
                                    Timetables staff can scan
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                                    Plan exam weeks with schedules that stay
                                    clear for invigilators and office teams.
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

                    <Reveal delay={0.04} className="md:col-span-5">
                        <div className="relative flex h-full min-h-[240px] overflow-hidden rounded-xl border border-border/80">
                            <Image
                                src="/marketing/seating.png"
                                alt="Classroom seating plan layout"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-background/10" />
                            <div className="relative mt-auto space-y-2 p-6">
                                <Users
                                    className="mb-1 h-5 w-5 text-brand"
                                    strokeWidth={1.75}
                                />
                                <h3 className="font-heading text-xl font-semibold tracking-tight">
                                    Seat every student before the bell
                                </h3>
                                <p className="max-w-sm text-sm text-muted-foreground">
                                    Lay out rooms quickly so candidates know
                                    where to sit on the day.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1} className="md:col-span-7">
                        <div className="grid h-full min-h-[240px] gap-0 overflow-hidden rounded-xl border border-border/80 bg-background sm:grid-cols-[0.9fr_1.1fr]">
                            <div className="flex flex-col justify-center space-y-3 p-6 sm:p-8">
                                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-brand/35 bg-brand/10 text-brand">
                                    <BarChart3
                                        className="h-5 w-5"
                                        strokeWidth={1.75}
                                    />
                                </div>
                                <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                                    Review after the session
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    Capture outcomes and refine the next exam
                                    week with clearer planning data.
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
    );
}

function HowItWorks() {
    const steps = [
        {
            title: "Create",
            description:
                "Define papers, rooms, reading time, and extra time before exam day.",
            image: "/marketing/create-exam.png",
            alt: "Create exam form in ExamManager",
        },
        {
            title: "Run",
            description:
                "Launch the classroom display and keep every cohort on the same clock.",
            image: "/marketing/session-live.png",
            alt: "Live exam session timer running",
        },
        {
            title: "Review",
            description:
                "Check outcomes, tidy the timetable, and prepare the next session.",
            image: "/marketing/dashboard.png",
            alt: "Exam dashboard after a session",
        },
    ] as const;

    return (
        <section className="border-t border-border/70 py-20 md:py-28">
            <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="mb-12 max-w-xl space-y-3">
                        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                            How it works
                        </h2>
                        <p className="text-base text-muted-foreground sm:text-lg">
                            From plan to quiet, on-time rooms.
                        </p>
                    </div>
                </Reveal>

                <div className="grid gap-6 md:grid-cols-3 md:gap-5">
                    {steps.map((step, index) => (
                        <Reveal key={step.title} delay={index * 0.07}>
                            <div className="flex h-full flex-col border-t border-brand/40 pt-6">
                                <p className="font-heading text-3xl font-semibold tracking-tight text-brand">
                                    {step.title}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                    {step.description}
                                </p>
                                <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-lg border border-border/70 bg-muted/20">
                                    <Image
                                        src={step.image}
                                        alt={step.alt}
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PricingTeaser() {
    return (
        <section className="border-t border-border/70 bg-muted/20 py-20 md:py-28 dark:bg-muted/10">
            <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
                        <div className="max-w-xl space-y-3">
                            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                                Simple plans for school teams
                            </h2>
                            <p className="text-base text-muted-foreground">
                                Standard, Basic, and Professional - illustrative
                                for this portfolio showcase.
                                {AUTH_DISABLED
                                    ? " Billing stays disabled."
                                    : null}
                            </p>
                        </div>
                        <Link
                            href={siteUrls.pricing}
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "w-fit",
                            )}
                        >
                            Compare plans
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </Reveal>

                <div className="grid gap-4 md:grid-cols-3">
                    {pricings.map((plan, index) => (
                        <Reveal key={plan.id} delay={index * 0.06}>
                            <div
                                className={cn(
                                    "relative flex h-full flex-col border border-border/80 bg-background px-5 py-6",
                                    plan.buttonHighlighted &&
                                        "border-brand/55 shadow-[0_0_0_1px_rgba(255,176,0,0.12)]",
                                )}
                            >
                                {plan.badge ? (
                                    <span className="absolute -top-2.5 left-5 rounded-full bg-brand px-2.5 py-0.5 text-[11px] font-medium text-amber-950">
                                        {plan.badge}
                                    </span>
                                ) : null}
                                <p className="text-sm font-medium text-muted-foreground">
                                    {plan.title}
                                </p>
                                <p className="mt-3 font-heading text-4xl font-semibold tracking-tight">
                                    {plan.currency.symbol}
                                    {plan.price === 0 ? "0" : plan.price}
                                    <span className="ml-1 text-sm font-normal text-muted-foreground">
                                        /mo
                                    </span>
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    {plan.uniqueFeatures?.[0]}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ClosingCta() {
    return (
        <section className="border-t border-border/70 py-20 md:py-24">
            <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="relative overflow-hidden rounded-2xl border border-border/80 px-6 py-12 sm:px-10 sm:py-14">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,176,0,0.16),transparent_50%),radial-gradient(ellipse_at_90%_100%,rgba(255,176,0,0.08),transparent_45%)]"
                        />
                        <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
                            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                                Explore ExamManager
                            </h2>
                            <p className="mt-3 max-w-lg text-base text-muted-foreground">
                                Read the docs or browse the open source on
                                GitHub. Signup stays off for this showcase.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                                <Link
                                    href={siteUrls.features}
                                    className={cn(buttonVariants({ size: "lg" }))}
                                >
                                    Explore features
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
    );
}
