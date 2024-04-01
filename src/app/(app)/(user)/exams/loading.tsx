import { AppPageLoading } from "@/app/(app)/_components/page-loading";
import { examsPageConfig } from "@/app/(app)/(user)/exams/_constants/page-config";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
    return (
        <AppPageLoading
            title={examsPageConfig.title}
            description={examsPageConfig.description}
        >
            <Skeleton className="h-96 w-full" />
        </AppPageLoading>
    );
}
