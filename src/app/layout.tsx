import React from "react";
import type { Metadata } from "next";
import Background from "@/components/background";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";
import { DeprecationBanner } from "@/components/deprecation-banner";
import "@/styles/globals.css";
import "@/styles/prism.css";
import { fontHeading, fontSans } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
    metadataBase: new URL("https://exams-app-v3.vercel.app"),
    title: {
        default: "ExamManager",
        template: "%s | ExamManager",
    },
    description:
        "ExamManager helps schools run calm exam days with classroom timers, multi-exam sessions, timetables, and seating.",
    applicationName: "ExamManager",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://exams-app-v3.vercel.app",
        title: "ExamManager",
        description:
            "ExamManager helps schools run calm exam days with classroom timers, multi-exam sessions, timetables, and seating.",
        siteName: "ExamManager",
    },
    twitter: {
        card: "summary_large_image",
        title: "ExamManager",
        description:
            "ExamManager helps schools run calm exam days with classroom timers, multi-exam sessions, timetables, and seating.",
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/icon.png", type: "image/png", sizes: "32x32" },
        ],
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${fontSans.variable} ${fontHeading.variable} overflow-x-hidden font-sans antialiased`}
            >
                <Providers>
                    <DeprecationBanner />
                    <Background>{children}</Background>
                    <Toaster richColors position="top-right" expand />
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
