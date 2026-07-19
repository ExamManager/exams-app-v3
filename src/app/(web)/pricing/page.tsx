import { PricingTable } from "@/app/(web)/pricing/_components/pricing-table";
import {
    WebPageHeading,
    WebPageWrapper,
} from "@/app/(web)/_components/general-components";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "ExamManager V3 pricing — Standard $0, Basic $9.99, Professional $19.99. Portfolio demo plans aligned with V1.",
};

export default function PricingPage() {
    return (
        <WebPageWrapper>
            <WebPageHeading
                title="Prices that fit every need"
                badge="Aligned with V1"
            >
                <p className="text-center text-base text-muted-foreground">
                    Standard, Basic, and Professional — portfolio demo, billing
                    disabled.
                </p>
            </WebPageHeading>

            <PricingTable />
        </WebPageWrapper>
    );
}
