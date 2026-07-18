/**
 * @purpose Contains the support information for the support section.
 * The supportInfo array contains the support information for the support section.
 * Each object in the array contains the following properties:
 * - title: The title for the support information.
 * - description: The description for the support information.
 * - email: (Optional) The email address for the support information.
 * - buttonHref: The URL for the button.
 * - buttonText: The text for the button.
 *
 * After it will be used in the support section of the landing page. @see (websiteUrl)/support
 * You can modify support UI by modifying this file. @see /app/(web)/support/page.tsx
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
        title: "Say Hello",
        description:
            "Get in touch with us to learn more about ExamManager.",
        buttonHref: siteUrls.github,
        buttonText: "Open GitHub",
    },
    {
        title: "Tech Support",
        description:
            "Get help with technical issues. Open an issue or discussion on GitHub.",
        buttonHref: `${siteUrls.github}/exams-app-v3/issues`,
        buttonText: "Get help",
    },
    {
        title: "Sales",
        description:
            "Questions about plans or enterprise use? Reach out via the org on GitHub.",
        buttonHref: siteUrls.github,
        buttonText: "Contact org",
    },
    {
        title: "Our Blog",
        description:
            "Read our blog to learn more about our products and the latest updates.",
        buttonHref: `${siteUrls.blog}`,
        buttonText: "Read Blog",
    },
];
