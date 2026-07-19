/**
 * @purpose Contains the support information for the support section.
 */

import { siteUrls } from "@/config/urls";

export type SupportInfo = {
    title: string;
    description: string;
    email?: string;
    buttonHref: string;
    buttonText: string;
};

export const supportInfos: SupportInfo[] = [
    {
        title: "GitHub",
        description:
            "Browse the ExamManager repositories and past work on GitHub.",
        buttonHref: siteUrls.github,
        buttonText: "Open GitHub",
    },
    {
        title: "Issues",
        description:
            "Report a problem or ask a technical question on the V3 repo.",
        buttonHref: `${siteUrls.github}/exams-app-v3/issues`,
        buttonText: "Get help",
    },
    {
        title: "Features",
        description:
            "See classroom timers, sessions, seating, and planning in detail.",
        buttonHref: siteUrls.features,
        buttonText: "Explore features",
    },
];
