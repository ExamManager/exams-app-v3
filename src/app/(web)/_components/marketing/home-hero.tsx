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
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_85%_8%,rgba(255,176,0,0.28),transparent_52%),radial-gradient(ellipse_45%_35%_at_0%_85%,rgba(255,176,0,0.1),transparent_55%)]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_75%_65%_at_70%_25%,black,transparent)]"
            />

            <div className="relative container flex max-w-[1400px] flex-col gap-10 px-4 pb-16 pt-10 sm:px-6 md:gap-12 md:pb-20 md:pt-12 lg:grid lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.32fr)] lg:items-center lg:gap-10 lg:px-8 lg:pb-24 lg:pt-14">
                <div className="relative z-10 max-w-xl space-y-7 motion-safe:animate-rise">
                    <div className="space-y-4">
                        <p className="font-heading text-4xl font-bold tracking-tight text-brand sm:text-5xl md:text-6xl md:leading-[1.05]">
                            ExamManager
                        </p>
                        <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-[2.35rem] md:leading-[1.15]">
                            Calm timing for every exam day
                        </h1>
                        <p className="max-w-md text-base leading-relaxed text-foreground/70 sm:text-lg">
                            Classroom clocks, multi-paper sessions, and reading
                            time that keep rooms quiet.
                        </p>
                    </div>

                    <div
                        className="flex flex-wrap items-center gap-3 motion-safe:animate-rise"
                        style={{ animationDelay: "80ms" }}
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
                    </div>
                </div>

                <div
                    className="relative z-10 motion-safe:animate-fade-rise lg:-mr-4 xl:-mr-8"
                    style={{ animationDelay: "120ms" }}
                >
                    <div
                        aria-hidden
                        className="absolute -inset-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,rgba(255,176,0,0.4),transparent_62%)] blur-3xl"
                    />
                    <div className="relative rotate-[-0.6deg] overflow-hidden rounded-xl shadow-[0_32px_90px_-30px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:rotate-0 dark:shadow-[0_36px_100px_-24px_rgba(0,0,0,0.85)]">
                        <Image
                            src="/marketing/hero-overview.png"
                            alt="ExamManager exams overview with timed papers and classroom sessions"
                            width={1440}
                            height={900}
                            priority
                            className="h-auto w-full"
                            sizes="(max-width: 1024px) 100vw, 58vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
