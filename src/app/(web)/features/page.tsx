import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
    Accessibility,
    CalendarDays,
    BarChart3,
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

type FeatureRow = {
    title: string;
    description: string;
    points: string[];
    image: string;
    alt: string;
    icon: typeof Clock3;
    imageFirst: boolean;
};

const featureRows: FeatureRow[] = [
    {
        title: "Classroom timer",
        description:
            "A low-distraction countdown for the wall. Students and invigilators share one clear clock for the whole paper.",
        points: [
            "Readable display for busy rooms",
            "Synced timing across overlapping cohorts",
            "Built for calm, not flashy distractions",
        ],
        image: "/marketing/timer-display.png",
        alt: "Classroom exam timer display",
        icon: Clock3,
        imageFirst: false,
    },
    {
        title: "Multi-exam sessions",
        description:
            "Run several papers in parallel when rooms and start times overlap. Keep every cohort on its own schedule without juggling clocks.",
        points: [
            "Parallel papers in one session",
            "Clear status for each room",
            "Designed for busy exam mornings",
        ],
        image: "/marketing/multi-exam.png",
        alt: "Multiple exams managed in one session",
        icon: LayoutGrid,
        imageFirst: true,
    },
    {
        title: "Timetables and seating",
        description:
            "Plan the week, then seat every candidate. Schedules stay scannable for office staff; room layouts stay clear for invigilators.",
        points: [
            "Exam-week timetables staff can scan",
            "Room seating before the day starts",
            "Fewer last-minute seating questions",
        ],
        image: "/marketing/timetable.png",
        alt: "Exam timetable planning",
        icon: CalendarDays,
        imageFirst: false,
    },
    {
        title: "Accessibility timing",
        description:
            "Reading time before the paper starts. Extra time for access arrangements. The same calm tools, adjusted for every candidate.",
        points: [
            "Reading time before writing begins",
            "Extra time without a second clock",
            "Consistent experience across rooms",
        ],
        image: "/marketing/session-live.png",
        alt: "Live exam session with accessibility timing",
        icon: Accessibility,
        imageFirst: true,
    },
    {
        title: "Planning and analytics",
        description:
            "Prepare papers ahead of exam week, then review outcomes afterward. Grow from a single classroom to larger cohorts without changing tools.",
        points: [
            "Plan papers and rooms in advance",
            "Review sessions with clearer data",
            "Scale from one room to school-wide weeks",
        ],
        image: "/marketing/planning.png",
        alt: "Exam planning and analytics overview",
        icon: BarChart3,
        imageFirst: false,
    },
];

export default function FeaturesPage() {
    return (
        <main className="relative">
            <section className="relative overflow-hidden border-b border-border/70">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,176,0,0.12),transparent_55%)]"
                />
                <div className="relative container max-w-[1400px] px-4 pb-14 pt-16 sm:px-6 sm:pt-20 lg:px-8">
                    <Reveal>
                        <div className="max-w-2xl space-y-4">
                            <p className="font-heading text-sm font-semibold tracking-wide text-brand">
                                ExamManager
                            </p>
                            <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                                Features for calm exam days
                            </h1>
                            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                                Classroom timers, multi-exam sessions,
                                timetables, seating, and accessibility timing
                                for school teams.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {featureRows.map((feature, index) => {
                const Icon = feature.icon;
                const breakPattern = index >= 2;
                const imageOnLeft = breakPattern
                    ? index % 2 === 0
                    : feature.imageFirst;

                return (
                    <section
                        key={feature.title}
                        className={cn(
                            "border-b border-border/70 py-16 md:py-24",
                            index % 2 === 1 && "bg-muted/15 dark:bg-muted/10",
                        )}
                    >
                        <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                            <div
                                className={cn(
                                    "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                                    breakPattern &&
                                        index === 2 &&
                                        "lg:grid-cols-[0.95fr_1.05fr]",
                                    breakPattern &&
                                        index === 3 &&
                                        "lg:gap-12",
                                    breakPattern &&
                                        index === 4 &&
                                        "lg:grid-cols-[1.1fr_0.9fr]",
                                )}
                            >
                                <Reveal
                                    className={cn(
                                        imageOnLeft
                                            ? "lg:order-1"
                                            : "lg:order-2",
                                    )}
                                >
                                    <div className="relative">
                                        <div
                                            aria-hidden
                                            className="absolute -inset-3 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(255,176,0,0.14),transparent_65%)] blur-xl"
                                        />
                                        <ProductFrame
                                            src={feature.image}
                                            alt={feature.alt}
                                            width={1200}
                                            height={800}
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    </div>
                                </Reveal>

                                <Reveal
                                    delay={0.08}
                                    className={cn(
                                        imageOnLeft
                                            ? "lg:order-2"
                                            : "lg:order-1",
                                    )}
                                >
                                    <div className="max-w-lg space-y-5">
                                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-brand/35 bg-brand/10 text-brand">
                                            <Icon
                                                className="h-5 w-5"
                                                strokeWidth={1.75}
                                            />
                                        </div>
                                        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                                            {feature.title}
                                        </h2>
                                        <p className="text-base leading-relaxed text-muted-foreground">
                                            {feature.description}
                                        </p>
                                        <ul className="space-y-2.5 text-sm text-muted-foreground sm:text-base">
                                            {feature.points.map((point) => (
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
                            </div>

                            {feature.title === "Timetables and seating" ? (
                                <Reveal delay={0.1}>
                                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border/80">
                                            <Image
                                                src="/marketing/seating.png"
                                                alt="Classroom seating plan"
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 100vw, 45vw"
                                            />
                                        </div>
                                        <div className="relative flex aspect-[16/10] flex-col justify-end overflow-hidden rounded-xl border border-border/80 bg-background p-6">
                                            <Users
                                                className="mb-3 h-5 w-5 text-brand"
                                                strokeWidth={1.75}
                                            />
                                            <p className="font-heading text-lg font-semibold tracking-tight">
                                                Seating plans that match the
                                                room
                                            </p>
                                            <p className="mt-2 text-sm text-muted-foreground">
                                                Lay out desks before candidates
                                                arrive so every seat is assigned
                                                without last-minute scramble.
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            ) : null}
                        </div>
                    </section>
                );
            })}

            <section className="py-20 md:py-24">
                <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="relative overflow-hidden rounded-2xl border border-border/80 px-6 py-12 text-center sm:px-10">
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,176,0,0.14),transparent_50%)]"
                            />
                            <div className="relative mx-auto max-w-xl space-y-4">
                                <h2 className="font-heading text-3xl font-semibold tracking-tight">
                                    Ready to see plans and docs
                                </h2>
                                <p className="text-muted-foreground">
                                    Compare school plans or read how ExamManager
                                    runs an exam week.
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                                    <Link
                                        href={siteUrls.pricing}
                                        className={cn(
                                            buttonVariants({ size: "lg" }),
                                        )}
                                    >
                                        See pricing
                                    </Link>
                                    <Link
                                        href={siteUrls.docs}
                                        className={cn(
                                            buttonVariants({
                                                size: "lg",
                                                variant: "outline",
                                            }),
                                        )}
                                    >
                                        View docs
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
