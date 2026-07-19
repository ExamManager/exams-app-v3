import React from "react";
import Background from "@/components/background";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";
import { DeprecationBanner } from "@/components/deprecation-banner";
import "@/styles/globals.css";
import "@/styles/prism.css";
import { fontHeading, fontSans } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    title: "ExamManager",
    description:
        "ExamManager — exam timing and management SaaS built with Next.js, Tailwind CSS, and Drizzle.",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${fontSans.variable} ${fontHeading.variable} overflow-x-hidden font-sans`}
            >
                <Providers>
                    <div className="sticky top-0 z-[60]">
                        <DeprecationBanner />
                    </div>
                    <Background>{children}</Background>
                    <Toaster richColors position="top-right" expand />
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
