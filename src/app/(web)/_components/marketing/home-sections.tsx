import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Clock3,
    FilePlus2,
    LayoutList,
    Timer,
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
            <CapabilityStrip />
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
                <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                    <Reveal>
                        <div className="relative">
                            <div
                                aria-hidden
                                className="absolute -inset-5 rounded-2xl bg-[radial-gradient(ellipse_at_30%_40%,rgba(255,176,0,0.22),transparent_60%)] blur-2xl"
                            />
                            <ProductFrame
                                src="/marketing/timer-display.png"
                                alt="Classroom exam timer with a large wall clock and papers listed below"
                                width={1200}
                                height={800}
                                sizes="(max-width: 1024px) 100vw, 55vw"
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div className="max-w-lg space-y-5 lg:pl-2">
                            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-brand/35 bg-brand/10 text-brand">
                                <Clock3
                                    className="h-5 w-5"
                                    strokeWidth={1.75}
                                />
                            </div>
                            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                                A classroom clock students can trust
                            </h2>
                            <p className="text-base leading-relaxed text-foreground/70 sm:text-lg">
                                Put a clear countdown on the wall. Track every
                                paper in the room, start when ready, and keep
                                the whole cohort on one calm clock.
                            </p>
                            <ul className="space-y-2.5 text-sm text-foreground/65 sm:text-base">
                                <li className="flex gap-2.5">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                                    Large, low-distraction time display
                                </li>
                                <li className="flex gap-2.5">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                                    Start, duration, and time left per paper
                                </li>
                                <li className="flex gap-2.5">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                                    Built for invigilators under pressure
                                </li>
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

function CapabilityStrip() {
    const items = [
        {
            title: "Manage every paper",
            description:
                "Filter by subject, paper, and level. Keep the exam list tidy before the week begins.",
            image: "/marketing/hero-overview.png",
            alt: "ExamManager exams list with subject and paper filters",
            icon: LayoutList,
            span: "md:col-span-7",
        },
        {
            title: "Run overlapping papers",
            description:
                "Start several cohorts in one session when rooms and start times collide.",
            image: "/marketing/dashboard.png",
            alt: "Multi-paper session board with start controls and status",
            icon: Timer,
            span: "md:col-span-5",
        },
        {
            title: "Reading time and extra time",
            description:
                "Set duration, planned start, and access arrangements before candidates sit.",
            image: "/marketing/create-exam.png",
            alt: "New exam form with duration, reading time, and extra time options",
            icon: FilePlus2,
            span: "md:col-span-12 lg:col-span-12",
            wide: true,
        },
    ] as const;

    return (
        <section className="border-t border-border/70 bg-muted/25 py-20 md:py-28 dark:bg-muted/10">
            <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="mb-12 max-w-2xl space-y-3">
                        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                            Built for school exam weeks
                        </h2>
                        <p className="text-base text-foreground/70 sm:text-lg">
                            Plan papers, run the room clock, and keep access
                            arrangements in the same flow.
                        </p>
                    </div>
                </Reveal>

                <div className="grid gap-4 md:grid-cols-12 md:gap-5">
                    {items.map((item, index) => {
                        const Icon = item.icon;
                        const wide = "wide" in item && item.wide;

                        return (
                            <Reveal
                                key={item.title}
                                delay={index * 0.05}
                                className={item.span}
                            >
                                {wide ? (
                                    <div className="grid items-center gap-6 overflow-hidden rounded-xl border border-border/80 bg-background p-5 sm:grid-cols-[0.9fr_1.1fr] sm:gap-8 sm:p-6 lg:p-8">
                                        <div className="space-y-3">
                                            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-brand/35 bg-brand/10 text-brand">
                                                <Icon
                                                    className="h-5 w-5"
                                                    strokeWidth={1.75}
                                                />
                                            </div>
                                            <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                                                {item.title}
                                            </h3>
                                            <p className="max-w-md text-sm leading-relaxed text-foreground/65 sm:text-base">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="overflow-hidden rounded-lg border border-border/70 bg-muted/20 shadow-sm">
                                            <Image
                                                src={item.image}
                                                alt={item.alt}
                                                width={980}
                                                height={700}
                                                className="h-auto max-h-[340px] w-full object-cover object-top"
                                                sizes="(max-width: 768px) 100vw, 45vw"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-xl border border-border/80 bg-background">
                                        <div className="relative min-h-[200px] flex-1 overflow-hidden bg-muted/20">
                                            <Image
                                                src={item.image}
                                                alt={item.alt}
                                                fill
                                                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
                                        </div>
                                        <div className="relative space-y-2 p-6 pt-0">
                                            <Icon
                                                className="mb-2 h-5 w-5 text-brand"
                                                strokeWidth={1.75}
                                            />
                                            <h3 className="font-heading text-xl font-semibold tracking-tight">
                                                {item.title}
                                            </h3>
                                            <p className="max-w-md text-sm text-foreground/65">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </Reveal>
                        );
                    })}
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
                "Define the paper, duration, reading time, and extra time before exam day.",
            image: "/marketing/create-exam.png",
            alt: "Create exam form with timing options",
            object: "object-top",
        },
        {
            title: "Run",
            description:
                "Open the classroom display and start each paper when the room is ready.",
            image: "/marketing/planning.png",
            alt: "Live session board with clock and paper statuses",
            object: "object-top",
        },
        {
            title: "Review",
            description:
                "Return to the exams list, tidy what ran, and prepare the next session.",
            image: "/marketing/hero-overview.png",
            alt: "Exams overview after a session",
            object: "object-left-top",
        },
    ] as const;

    return (
        <section className="border-t border-border/70 py-20 md:py-28">
            <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="mb-14 max-w-2xl space-y-3 md:mb-20">
                        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                            How it works
                        </h2>
                        <p className="text-base text-foreground/70 sm:text-lg">
                            From setup to a quiet, on-time room in three clear
                            moves.
                        </p>
                    </div>
                </Reveal>

                <div className="space-y-16 md:space-y-24">
                    {steps.map((step, index) => {
                        const reverse = index % 2 === 1;

                        return (
                            <Reveal key={step.title} delay={index * 0.05}>
                                <div
                                    className={cn(
                                        "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
                                        reverse && "lg:[&>*:first-child]:order-2",
                                    )}
                                >
                                    <div className="relative">
                                        <div
                                            aria-hidden
                                            className="absolute -inset-4 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(255,176,0,0.14),transparent_65%)] blur-xl"
                                        />
                                        <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background shadow-[0_24px_60px_-32px_rgba(0,0,0,0.4)]">
                                            <div className="relative aspect-[16/10] bg-muted/20">
                                                <Image
                                                    src={step.image}
                                                    alt={step.alt}
                                                    fill
                                                    className={cn(
                                                        "object-cover",
                                                        step.object,
                                                    )}
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative max-w-md space-y-4 lg:px-2">
                                        <p className="font-heading text-5xl font-bold tracking-tight text-brand/90 sm:text-6xl">
                                            {String(index + 1).padStart(2, "0")}
                                        </p>
                                        <h3 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                                            {step.title}
                                        </h3>
                                        <p className="text-base leading-relaxed text-foreground/70 sm:text-lg">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function PricingTeaser() {
    return (
        <section className="border-t border-border/70 bg-muted/25 py-20 md:py-28 dark:bg-muted/10">
            <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
                        <div className="max-w-xl space-y-3">
                            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                                Simple plans for school teams
                            </h2>
                            <p className="text-base text-foreground/70">
                                Standard, Basic, and Professional. Illustrative
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
                                "w-fit active:scale-[0.98]",
                            )}
                        >
                            Compare plans
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </Reveal>

                <div className="grid gap-px overflow-hidden rounded-xl border border-border/80 bg-border/80 md:grid-cols-3">
                    {pricings.map((plan, index) => (
                        <Reveal key={plan.id} delay={index * 0.05}>
                            <div
                                className={cn(
                                    "relative flex h-full flex-col bg-background px-6 py-7",
                                    plan.buttonHighlighted && "bg-brand/[0.06]",
                                )}
                            >
                                {plan.badge ? (
                                    <span className="mb-3 w-fit rounded-full bg-brand px-2.5 py-0.5 text-[11px] font-medium text-brand-foreground">
                                        {plan.badge}
                                    </span>
                                ) : (
                                    <span className="mb-3 h-[22px]" />
                                )}
                                <p className="text-sm font-medium text-foreground/60">
                                    {plan.title}
                                </p>
                                <p className="mt-3 font-heading text-4xl font-semibold tracking-tight">
                                    {plan.currency.symbol}
                                    {plan.price === 0 ? "0" : plan.price}
                                    <span className="ml-1 text-sm font-normal text-foreground/55">
                                        /mo
                                    </span>
                                </p>
                                <p className="mt-4 text-sm leading-relaxed text-foreground/65">
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
                    <div className="relative overflow-hidden rounded-2xl border border-border/80 px-6 py-14 sm:px-12 sm:py-16">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(255,176,0,0.2),transparent_48%),radial-gradient(ellipse_at_95%_100%,rgba(255,176,0,0.1),transparent_42%)]"
                        />
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.45)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.45)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
                        />
                        <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
                            <p className="font-heading text-2xl font-bold tracking-tight text-brand sm:text-3xl">
                                ExamManager
                            </p>
                            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                                Explore the source
                            </h2>
                            <p className="mt-3 max-w-lg text-base text-foreground/70">
                                Browse the open source on GitHub. Signup stays
                                off for this portfolio showcase.
                            </p>
                            <div className="mt-8">
                                <Link
                                    href={siteUrls.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={cn(
                                        buttonVariants({ size: "lg" }),
                                        "active:scale-[0.98]",
                                    )}
                                >
                                    View on GitHub
                                </Link>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
