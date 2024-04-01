import { AppPageShell } from "@/app/(app)/_components/page-shell";
import { examsPageConfig } from "@/app/(app)/(user)/exams/_constants/page-config";


export default function ExamsPage() {
    return (
        <AppPageShell
            title={examsPageConfig.title}
            description={examsPageConfig.description}
        >
            <div className="w-full">
                <div className="flex flex-col items-center justify-center h-40">
                    <h1 className="text-4xl font-semibold">Welcome back!</h1>
                    <p className="text-muted-foreground">Here you can manage your exams.</p>
                </div>
            </div>
        </AppPageShell>
    );
}
