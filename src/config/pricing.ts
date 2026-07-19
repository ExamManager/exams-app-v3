/**
 * Canonical ExamManager pricing — aligned with V1 showcase plans.
 */

export type Pricing = {
    id: string;
    badge?: string;
    title: string;
    description: string;
    price: number;
    currency: {
        code: string;
        symbol: string;
    };
    duration: string;
    highlight: string;
    buttonHighlighted: boolean;
    uniqueFeatures?: string[];
};

export type Feature = {
    id: string;
    title: string;
    inludedIn: string[];
};

const pricingIds = {
    standard: "standard",
    basic: "basic",
    professional: "professional",
} as const;

export const features: Feature[] = [
    {
        id: "1",
        title: "Classroom exam timer",
        inludedIn: [
            pricingIds.standard,
            pricingIds.basic,
            pricingIds.professional,
        ],
    },
    {
        id: "2",
        title: "Time up to 3 exams simultaneously",
        inludedIn: [
            pricingIds.standard,
            pricingIds.basic,
            pricingIds.professional,
        ],
    },
    {
        id: "3",
        title: "Advanced Analytical Tools",
        inludedIn: [
            pricingIds.standard,
            pricingIds.basic,
            pricingIds.professional,
        ],
    },
    {
        id: "4",
        title: "Exam Timetable Creation",
        inludedIn: [pricingIds.basic, pricingIds.professional],
    },
    {
        id: "5",
        title: "Exam Seating Plan Creation",
        inludedIn: [pricingIds.basic, pricingIds.professional],
    },
    {
        id: "6",
        title: "Custom Exam Presets for different subjects",
        inludedIn: [pricingIds.basic, pricingIds.professional],
    },
    {
        id: "7",
        title: "Student Result Analysis",
        inludedIn: [pricingIds.professional],
    },
    {
        id: "8",
        title: "Advanced Exam planning and managing",
        inludedIn: [pricingIds.professional],
    },
];

export const pricings: Pricing[] = [
    {
        id: pricingIds.standard,
        title: "Standard",
        description: "For personal use — get started with core exam timing.",
        price: 0,
        currency: { code: "USD", symbol: "$" },
        duration: "per month",
        highlight: "No credit card required. Portfolio demo — billing disabled.",
        buttonHighlighted: false,
        uniqueFeatures: [
            "For Personal Use only",
            "Time up to 3 exams simultaneously",
            "Advanced Analytical Tools",
            "Save exams up to 1 day ahead",
        ],
    },
    {
        id: pricingIds.basic,
        badge: "Most popular",
        title: "Basic",
        description:
            "For schools with under 500 students — planning tools included.",
        price: 9.99,
        currency: { code: "USD", symbol: "$" },
        duration: "per month",
        highlight: "Most popular for small schools. Portfolio demo — billing disabled.",
        buttonHighlighted: true,
        uniqueFeatures: [
            "For Schools with under 500 Students",
            "Basic Exam planning",
            "Exam Timetable Creation",
            "Exam Seating Plan Creation",
            "Custom Exam Presets for different subjects",
            "Save exams up to 1 month ahead",
        ],
    },
    {
        id: pricingIds.professional,
        title: "Professional",
        description:
            "For schools with under 1000 students — advanced planning and analysis.",
        price: 19.99,
        currency: { code: "USD", symbol: "$" },
        duration: "per month",
        highlight: "Custom plans available from $39/mo. Portfolio demo — billing disabled.",
        buttonHighlighted: false,
        uniqueFeatures: [
            "For Schools with under 1000 Students",
            "Advanced Exam planning and managing",
            "Student Result Analysis",
            "Save exams up to 1 year ahead",
        ],
    },
];
