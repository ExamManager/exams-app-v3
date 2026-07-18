import { Icons } from "@/components/ui/icons";
import { siteUrls } from "@/config/urls";
import Link from "next/link";

type AuthLayoutProps = {
    children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="grid min-h-screen w-screen grid-cols-3">
            <main className="col-span-2 flex items-center justify-center">
                {children}
            </main>
            <aside className="col-span-1 flex flex-col items-start justify-center gap-6 border-l border-border bg-muted/30 p-10">
                <Icons.logo as="h3" />
                <h2 className="text-3xl font-medium">
                    Run exams with confidence
                </h2>
                <p className="font-light text-muted-foreground">
                    ExamManager helps schools and invigilators manage exam
                    timers, rooms, and schedules. Learn more at{" "}
                    <Link
                        href={siteUrls.github}
                        className="font-medium text-foreground underline underline-offset-4"
                    >
                        github.com/ExamManager
                    </Link>
                </p>
            </aside>
        </div>
    );
}
