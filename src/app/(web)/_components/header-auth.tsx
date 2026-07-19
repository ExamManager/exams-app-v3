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
                    href={siteUrls.docs}
                    className={buttonVariants({
                        className: "flex items-center space-x-1 max-sm:px-3",
                    })}
                >
                    <span className="sm:hidden">Docs</span>
                    <span className="hidden sm:inline">View docs</span>
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
