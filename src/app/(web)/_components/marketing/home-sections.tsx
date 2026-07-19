import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Clock3,
    LayoutGrid,
    ListChecks,
    PenLine,
} from "lucide-react";
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
        <section className="border-t border-border/60 py-20 md:py-28">
            <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <Reveal>
                        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                            <Image
                                src="/marketing/seating.png"
                                alt="Multi-exam session with live classroom clock"
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div className="max-w-lg space-y-6 lg:pl-2">
                            <Clock3
                                className="h-7 w-7 text-brand"
                                strokeWidth={1.6}
                                aria-hidden
                            />
                            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                                A classroom timer students can trust
                            </h2>
                            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                                Put a clear countdown on the wall. Add reading
                                time before the paper starts, extra time for
                                access arrangements, and keep every room on the
                                same calm clock.
                            </p>
                            <ul className="space-y-3 text-sm text-muted-foreground sm:text-base">
                                {[
                                    "Low-distraction display for invigilators",
                                    "Reading time and extra time built in",
                                    "One clock across overlapping papers",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex gap-3 border-l-2 border-brand/60 pl-4"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

const capabilities = [
    {
        icon: LayoutGrid,
        title: "Run overlapping papers in one session",
        body: "Time several cohorts at once when rooms and start times collide.",
        image: "/marketing/seating.png",
        alt: "Multiple exam papers running with a shared classroom clock",
        object: "object-top",
    },
    {
        icon: PenLine,
        title: "Set up papers in minutes",
        body: "Define subjects, durations, reading time, and extra time before the day begins.",
        image: "/marketing/create-exam.png",
        alt: "Create exam form with timing options",
        object: "object-top",
    },
    {
        icon: ListChecks,
        title: "Keep the exam list readable",
        body: "Filter by subject, paper, and level so staff can find the right cohort fast.",
        image: "/marketing/hero-overview.png",
        alt: "ExamManager exams list with filters and papers",
        object: "object-left-top",
    },
] as const;

function CapabilityStrip() {
    return (
        <section className="border-t border-border/60 bg-muted/25 py-20 md:py-28 dark:bg-muted/10">
            <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="mb-14 max-w-2xl space-y-3 md:mb-16">
                        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                            Built for school exam weeks
                        </h2>
                        <p className="text-base text-muted-foreground sm:text-lg">
                            Multi-exam rooms, clear setup, and lists that stay
                            readable under pressure.
                        </p>
                    </div>
                </Reveal>

                <div className="space-y-16 md:space-y-24">
                    {capabilities.map((item, index) => {
                        const Icon = item.icon;
                        const reverse = index % 2 === 1;

                        return (
                            <Reveal key={item.title} delay={index * 0.04}>
                                <article
                                    className={cn(
                                        "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
                                        reverse &&
                                            "lg:[&>*:first-child]:order-2",
                                    )}
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                            fill
                                            className={cn(
                                                "object-cover transition-transform duration-700 ease-out hover:scale-[1.03]",
                                                item.object,
                                            )}
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    </div>
                                    <div className="max-w-md space-y-4 lg:space-y-5">
                                        <Icon
                                            className="h-6 w-6 text-brand"
                                            strokeWidth={1.6}
                                            aria-hidden
                                        />
                                        <h3 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                                            {item.title}
                                        </h3>
                                        <p className="text-base leading-relaxed text-muted-foreground">
                                            {item.body}
                                        </p>
                                    </div>
                                </article>
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
                "Define papers, rooms, reading time, and extra time before exam day.",
            image: "/marketing/create-exam.png",
            alt: "Create exam form in ExamManager",
        },
        {
            title: "Run",
            description:
                "Launch the classroom display and keep every cohort on the same clock.",
            image: "/marketing/seating.png",
            alt: "Live multi-exam session with classroom clock",
        },
        {
            title: "Review",
            description:
                "Check the exam list, tidy the next session, and prepare again.",
            image: "/marketing/hero-overview.png",
            alt: "Exam dashboard after planning a session",
        },
    ] as const;

    return (
        <section className="border-t border-border/60 py-20 md:py-28">
            <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="mb-12 max-w-xl space-y-3 md:mb-16">
                        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                            How it works
                        </h2>
                        <p className="text-base text-muted-foreground sm:text-lg">
                            From plan to quiet, on-time rooms in three clear
                            moves.
                        </p>
                    </div>
                </Reveal>

                <div className="grid gap-10 md:grid-cols-3 md:gap-8">
                    {steps.map((step, index) => (
                        <Reveal key={step.title} delay={index * 0.07}>
                            <div className="space-y-5">
                                <div className="flex items-baseline gap-3">
                                    <span className="font-heading text-4xl font-bold tabular-nums text-brand">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="font-heading text-xl font-semibold tracking-tight">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                                    {step.description}
                                </p>
                                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
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
        <section className="border-t border-border/60 bg-muted/25 py-20 md:py-28 dark:bg-muted/10">
            <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
                        <div className="max-w-xl space-y-3">
                            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                                Simple plans for school teams
                            </h2>
                            <p className="text-base text-muted-foreground">
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

                <div className="grid gap-0 border-y border-border/70 md:grid-cols-3">
                    {pricings.map((plan, index) => (
                        <Reveal key={plan.id} delay={index * 0.05}>
                            <div
                                className={cn(
                                    "relative flex h-full flex-col px-5 py-8 sm:px-7",
                                    index > 0 &&
                                        "border-t border-border/70 md:border-l md:border-t-0",
                                    plan.buttonHighlighted && "bg-brand/[0.06]",
                                )}
                            >
                                {plan.badge ? (
                                    <span className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                                        {plan.badge}
                                    </span>
                                ) : (
                                    <span
                                        className="mb-3 h-[17px]"
                                        aria-hidden
                                    />
                                )}
                                <p className="text-sm font-medium text-muted-foreground">
                                    {plan.title}
                                </p>
                                <p className="mt-3 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                                    {plan.currency.symbol}
                                    {plan.price === 0 ? "0" : plan.price}
                                    <span className="ml-1 text-sm font-normal text-muted-foreground">
                                        /mo
                                    </span>
                                </p>
                                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
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
        <section className="relative overflow-hidden border-t border-border/60">
            <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,176,0,0.16),transparent_50%),radial-gradient(ellipse_at_90%_100%,rgba(255,176,0,0.08),transparent_45%)]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
            />

            <div className="container relative max-w-[1400px] px-4 py-24 sm:px-6 md:py-32 lg:px-8">
                <Reveal>
                    <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                        <p className="font-heading text-4xl font-bold tracking-tight text-brand sm:text-5xl">
                            ExamManager
                        </p>
                        <h2 className="mt-4 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                            Explore the open source
                        </h2>
                        <p className="mt-3 max-w-lg text-base text-muted-foreground">
                            Browse the code on GitHub. Signup stays off for this
                            portfolio showcase.
                        </p>
                        <div className="mt-8">
                            <Link
                                href={siteUrls.github}
                                target="_blank"
                                rel="noreferrer"
                                className={cn(
                                    buttonVariants({ size: "lg" }),
                                    "bg-brand text-brand-foreground shadow-none hover:bg-brand/90 active:scale-[0.98]",
                                )}
                            >
                                View on GitHub
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
