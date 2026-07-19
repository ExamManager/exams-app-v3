import { PricingTable } from "@/app/(web)/pricing/_components/pricing-table";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "ExamManager pricing for schools: Standard free, Basic $9.99, Professional $19.99. Portfolio showcase with billing disabled.",
};

export default function PricingPage() {
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
                            Plans for every school size
                        </h1>
                        <p className="mx-auto max-w-xl text-base text-muted-foreground">
                            Standard, Basic, and Professional cover classroom
                            timing through full exam-week planning. Billing is
                            disabled on this showcase.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20">
                <div className="container max-w-[1400px] px-4 sm:px-6 lg:px-8">
                    <PricingTable />
                </div>
            </section>
        </main>
    );
}
