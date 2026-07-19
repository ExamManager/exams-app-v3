import Link from "next/link";
import type { Metadata } from "next";
import {
    WebPageHeading,
    WebPageWrapper,
} from "@/app/(web)/_components/general-components";
import { buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AUTH_DISABLED } from "@/config/showcase";
import { pricings } from "@/config/pricing";
import { siteUrls } from "@/config/urls";
import { cn } from "@/lib/utils";
import {
    CalendarDays,
    Clock,
    LayoutGrid,
    LineChart,
    School,
    Users,
} from "lucide-react";

export const metadata: Metadata = {
    title: {
        absolute: "ExamManager V3",
    },
    description:
        "ExamManager V3 — T3/Drizzle SaaS rewrite portfolio demo for exam timing and school management.",
};

const productFeatures = [
    {
        title: "Classroom timer",
        description:
            "Run a clear, low-distraction countdown students can trust for the whole paper.",
        icon: Clock,
    },
    {
        title: "Multi-exam sessions",
        description:
            "Time several papers in parallel when rooms and cohorts overlap.",
        icon: LayoutGrid,
    },
    {
        title: "Timetables",
        description:
            "Plan exam weeks with schedules that stay readable for staff and invigilators.",
        icon: CalendarDays,
    },
    {
        title: "Seating plans",
        description:
            "Lay out rooms quickly so every student knows where to sit on the day.",
        icon: Users,
    },
    {
        title: "School-scale planning",
        description:
            "Grow from a single classroom to larger cohorts without changing tools.",
        icon: School,
    },
    {
        title: "Result insights",
        description:
            "Review outcomes after the session with professional-tier analysis.",
        icon: LineChart,
    },
];

const steps = [
    {
        step: "1",
        title: "Create exams",
        description: "Define papers, rooms, and schedules ahead of exam day.",
    },
    {
        step: "2",
        title: "Run the timer",
        description:
            "Launch the classroom display and keep every cohort on the same clock.",
    },
    {
        step: "3",
        title: "Review",
        description:
            "Capture outcomes and refine the next session with clearer data.",
    },
];

export default function HomePage() {
    return (
        <WebPageWrapper>
            <WebPageHeading
                title="Exam timing and classroom management"
                badge="ExamManager V3"
            >
                <p className="max-w-xl text-center text-base text-muted-foreground">
                    Create timed exams, run the classroom timer, and keep
                    billing and accounts in one place.
                </p>
            </WebPageHeading>

            <div className="flex flex-wrap items-center justify-center gap-3">
                {AUTH_DISABLED ? (
                    <>
                        <Link
                            href={siteUrls.docs}
                            className={buttonVariants({ size: "lg" })}
                        >
                            View docs
                        </Link>
                        <Link
                            href={siteUrls.github}
                            className={buttonVariants({
                                size: "lg",
                                variant: "outline",
                            })}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            href={siteUrls.auth.signup}
                            className={buttonVariants({ size: "lg" })}
                        >
                            Get started
                        </Link>
                        <Link
                            href={siteUrls.pricing}
                            className={buttonVariants({
                                size: "lg",
                                variant: "outline",
                            })}
                        >
                            View pricing
                        </Link>
                    </>
                )}
            </div>

            <section className="mx-auto mt-16 w-full max-w-5xl space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="font-heading text-3xl font-bold tracking-tight">
                        Built for exam day
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Product features for schools and invigilators — not a
                        tech-stack showcase.
                    </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {productFeatures.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <Card key={feature.title} className="bg-background/60">
                                <CardHeader className="space-y-3">
                                    <Icon className="h-8 w-8" strokeWidth={1.5} />
                                    <CardTitle className="text-lg">
                                        {feature.title}
                                    </CardTitle>
                                    <CardDescription>
                                        {feature.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        );
                    })}
                </div>
            </section>

            <section className="mx-auto mt-16 w-full max-w-5xl space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="font-heading text-3xl font-bold tracking-tight">
                        How it works
                    </h2>
                    <p className="text-muted-foreground">
                        Three steps from plan to quiet, on-time rooms.
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    {steps.map((item) => (
                        <Card key={item.step} className="bg-background/60">
                            <CardHeader>
                                <Badge variant="secondary" className="w-fit">
                                    Step {item.step}
                                </Badge>
                                <CardTitle className="text-xl">
                                    {item.title}
                                </CardTitle>
                                <CardDescription>
                                    {item.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="mx-auto mt-16 w-full max-w-5xl space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="font-heading text-3xl font-bold tracking-tight">
                        Simple pricing
                    </h2>
                    <p className="text-muted-foreground">
                        Same plans as ExamManager V1 — illustrative for this
                        portfolio demo.
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    {pricings.map((plan) => (
                        <Card
                            key={plan.id}
                            className={cn(
                                "relative bg-background/60 text-center",
                                plan.buttonHighlighted &&
                                    "border-2 border-primary",
                            )}
                        >
                            {plan.badge ? (
                                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    {plan.badge}
                                </Badge>
                            ) : null}
                            <CardHeader>
                                <CardTitle>{plan.title}</CardTitle>
                                <p className="font-heading text-4xl font-bold">
                                    {plan.currency.symbol}
                                    {plan.price === 0 ? "0" : plan.price}
                                    <span className="text-sm font-normal text-muted-foreground">
                                        /mo
                                    </span>
                                </p>
                                <CardDescription>
                                    {plan.uniqueFeatures?.[0]}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Link
                        href={siteUrls.pricing}
                        className={buttonVariants({
                            variant: "outline",
                            size: "lg",
                        })}
                    >
                        See full pricing
                    </Link>
                </div>
            </section>

            <section className="mx-auto mt-16 mb-8 w-full max-w-3xl rounded-xl border bg-muted/30 px-6 py-10 text-center">
                <h2 className="font-heading text-2xl font-bold">
                    Explore the V3 rewrite
                </h2>
                <p className="mt-2 text-muted-foreground">
                    Docs and source are open — signup and checkout stay disabled
                    for this showcase.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href={siteUrls.docs}
                        className={buttonVariants({ size: "lg" })}
                    >
                        View docs
                    </Link>
                    <Link
                        href={siteUrls.github}
                        className={buttonVariants({
                            size: "lg",
                            variant: "outline",
                        })}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </Link>
                </div>
            </section>
        </WebPageWrapper>
    );
}
