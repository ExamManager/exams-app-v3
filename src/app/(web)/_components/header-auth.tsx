import { buttonVariants } from "@/components/ui/button";
import { AUTH_DISABLED } from "@/config/showcase";
import { siteUrls } from "@/config/urls";
import { getUser } from "@/server/auth";
import Link from "next/link";

export async function HeaderAuth() {
    let user = null;
    try {
        user = await getUser();
    } catch {
        // Auth misconfiguration (e.g. missing NEXTAUTH_SECRET) should not blank the marketing site.
        user = null;
    }

    return (
        <section className="flex items-center space-x-2">
            {user ? (
                <Link
                    href={siteUrls.dashboard.home}
                    className={buttonVariants({
                        className: "flex items-center space-x-1",
                    })}
                >
                    <span>Dashboard</span>
                </Link>
            ) : AUTH_DISABLED ? (
                <Link
                    href={siteUrls.auth.login}
                    className={buttonVariants({
                        variant: "secondary",
                        className: "flex items-center space-x-1",
                    })}
                >
                    <span>Demo only</span>
                </Link>
            ) : (
                <Link
                    href={siteUrls.auth.signup}
                    className={buttonVariants({
                        className: "flex items-center space-x-1",
                    })}
                >
                    <span>Sign up free</span>
                </Link>
            )}
        </section>
    );
}
