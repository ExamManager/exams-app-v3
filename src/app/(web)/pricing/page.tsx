import { PricingTable } from "@/app/(web)/pricing/_components/pricing-table";
import {
    WebPageHeading,
    WebPageWrapper,
} from "@/app/(web)/_components/general-components";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "ExamManager pricing for schools: Standard free, Basic $9.99, Professional $19.99. Portfolio showcase with billing disabled.",
};

export default function PricingPage() {
    return (
        <WebPageWrapper>
            <WebPageHeading title="Plans for every school size">
                <p className="max-w-xl text-center text-base text-muted-foreground">
                    Standard, Basic, and Professional cover classroom timing
                    through full exam-week planning. Billing is disabled on this
                    showcase.
                </p>
            </WebPageHeading>

            <PricingTable />
        </WebPageWrapper>
    );
}
