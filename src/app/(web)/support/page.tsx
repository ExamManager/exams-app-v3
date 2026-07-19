import { buttonVariants } from "@/components/ui/button";
import { type SupportInfo, supportInfos } from "@/config/support";
import { ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Support",
    description:
        "ExamManager support for schools and invigilators. Portfolio showcase contact options.",
};

export default function ContactPage() {
    return (
        <main className="relative">
            <section className="relative overflow-hidden border-b border-border/70">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,176,0,0.12),transparent_55%)]"
                />
                <div className="relative container max-w-[1400px] px-4 pb-12 pt-16 sm:px-6 sm:pt-20 lg:px-8">
                    <div className="mx-auto max-w-2xl space-y-4 text-center">
                        <p className="font-heading text-4xl font-bold tracking-tight text-brand sm:text-5xl">
                            ExamManager
                        </p>
                        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                            Help when exam week gets busy
                        </h1>
                        <p className="mx-auto max-w-xl text-base text-muted-foreground">
                            Reach the ExamManager team for questions about
                            timers, planning, or this portfolio showcase.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20">
                <div className="container mx-auto grid max-w-5xl grid-cols-1 gap-5 px-4 sm:grid-cols-3 sm:px-6">
                    {supportInfos.map((supportInfo) => (
                        <SupportCard key={supportInfo.title} {...supportInfo} />
                    ))}
                </div>
            </section>
        </main>
    );
}

function SupportCard({
    buttonHref,
    buttonText,
    description,
    title,
    email,
}: SupportInfo) {
    return (
        <div className="flex h-full flex-col justify-between gap-6 border border-border/80 bg-background p-6">
            <div className="space-y-2">
                <h2 className="font-heading text-xl font-semibold tracking-tight">
                    {title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>
                {email ? (
                    <p className="pt-1 text-sm font-medium text-foreground">
                        {email}
                    </p>
                ) : null}
            </div>
            <Link
                href={buttonHref}
                className={buttonVariants({
                    className:
                        "w-fit gap-1 transition-all duration-300 ease-in-out hover:gap-3 active:scale-[0.98]",
                    variant: "outline",
                })}
            >
                <span>{buttonText}</span>
                <ArrowRightIcon className="h-4 w-4" strokeWidth={1.75} />
            </Link>
        </div>
    );
}
