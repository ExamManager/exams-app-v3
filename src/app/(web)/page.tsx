import type { Metadata } from "next";
import { HomeHero } from "@/app/(web)/_components/marketing/home-hero";
import { HomeSections } from "@/app/(web)/_components/marketing/home-sections";

export const metadata: Metadata = {
    title: {
        absolute: "ExamManager",
    },
    description:
        "ExamManager helps schools run calm exam days with classroom timers, multi-exam sessions, timetables, and seating.",
};

export default function HomePage() {
    return (
        <main>
            <HomeHero />
            <HomeSections />
        </main>
    );
}
