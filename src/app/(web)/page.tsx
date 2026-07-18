import Link from "next/link";
import {
    WebPageHeading,
    WebPageWrapper,
} from "@/app/(web)/_components/general-components";
import { buttonVariants } from "@/components/ui/button";
import { siteUrls } from "@/config/urls";

export default function HomePage() {
    return (
        <WebPageWrapper>
            <WebPageHeading
                title="Exam timing and classroom management"
                badge="ExamManager"
            >
                <p className="max-w-xl text-center text-base text-muted-foreground">
                    Create timed exams, run the classroom timer, and keep
                    billing and accounts in one place.
                </p>
            </WebPageHeading>

            <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                    href={siteUrls.auth.signup}
                    className={buttonVariants({ size: "lg" })}
                >
                    Get started
                </Link>
                <Link
                    href={siteUrls.pricing}
                    className={buttonVariants({
                        size: "lg",
                        variant: "outline",
                    })}
                >
                    View pricing
                </Link>
            </div>
        </WebPageWrapper>
    );
}
