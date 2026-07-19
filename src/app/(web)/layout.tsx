import { WebHeader } from "@/app/(web)/_components/header";
import { SiteFooter } from "@/app/(web)/_components/marketing/site-footer";

type WebLayoutProps = {
    children: React.ReactNode;
};

export default function WebLayout({ children }: WebLayoutProps) {
    return (
        <div className="flex min-h-[100dvh] flex-col">
            <WebHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
        </div>
    );
}
