import { getUser } from "@/server/auth";
import { adminDashboardPageConfig } from "@/app/(app)/admin/dashboard/_constants/page-config";
import { AppPageShell } from "@/app/(app)/_components/page-shell";

export default async function AdminDashPage() {
    const user = await getUser();

    return (
        <div>
            <AppPageShell
            title={adminDashboardPageConfig.title}
            description={adminDashboardPageConfig.description}
        >
            <div className="w-full">
                <div className="flex flex-col items-center justify-center h-96">
                    <h1 className="text-4xl font-semibold">Welcome back, {user?.name}!</h1>
                    <p className="text-muted-foreground">Here is an overview of your apps performance and statistics.</p>
                </div>
            </div>
        </AppPageShell>
        </div>
    );
}
