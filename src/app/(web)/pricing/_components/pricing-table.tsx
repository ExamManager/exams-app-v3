"use client";

import Link from "next/link";
import { CheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { type Pricing, pricings } from "@/config/pricing";
import { siteUrls } from "@/config/urls";
import { cn } from "@/lib/utils";

export function PricingTable() {
    return (
        <div className="grid w-full gap-5 md:grid-cols-3">
            {pricings.map((pricing) => (
                <PricingCard key={pricing.id} pricing={pricing} />
            ))}
        </div>
    );
}

type PricingCardProps = {
    pricing: Pricing;
};

function PricingCard({ pricing }: PricingCardProps) {
    return (
        <div
            className={cn(
                "relative flex h-full flex-col border border-border/80 bg-background px-6 py-8",
                pricing.buttonHighlighted &&
                    "border-brand/60 shadow-[0_0_0_1px_rgba(255,176,0,0.14)]",
            )}
        >
            {pricing.badge ? (
                <Badge className="absolute -top-2.5 left-6 border-0 bg-brand px-2.5 py-0.5 text-[11px] font-medium text-brand-foreground hover:bg-brand">
                    {pricing.badge}
                </Badge>
            ) : null}

            <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                    {pricing.title}
                </p>
                <p className="font-heading text-4xl font-semibold tracking-tight">
                    {pricing.currency.symbol}
                    {pricing.price === 0 ? "0" : pricing.price}
                    <span className="ml-1 text-sm font-normal text-muted-foreground">
                        /mo
                    </span>
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    {pricing.description}
                </p>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-muted-foreground/90">
                {pricing.highlight}
            </p>

            <Link
                href={siteUrls.features}
                className={cn(
                    buttonVariants({
                        size: "lg",
                        variant: pricing.buttonHighlighted
                            ? "default"
                            : "outline",
                    }),
                    "mt-6 w-full active:scale-[0.98]",
                )}
            >
                Explore features
            </Link>

            <div className="mt-8 border-t border-border/70 pt-6">
                <p className="mb-4 text-sm font-medium">
                    Included in {pricing.title}
                </p>
                <ul className="flex flex-col gap-2.5">
                    {pricing.uniqueFeatures?.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                            <CheckIcon
                                className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                                strokeWidth={1.75}
                            />
                            <span className="text-sm text-muted-foreground">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
