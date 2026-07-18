import { buttonVariants } from "@/components/ui/button";
import { siteUrls } from "@/config/urls";
import { getUser } from "@/server/auth";
import Link from "next/link";
import { Fragment } from "react";

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
            ) : (
                <Fragment>
                    <Link
                        href={siteUrls.auth.signup}
                        className={buttonVariants({
                            className: "flex items-center space-x-1",
                        })}
                    >
                        <span>Sign Up</span>
                        <span className="font-normal"> — it&apos;s free</span>
                    </Link>
                </Fragment>
            )}
        </section>
    );
}
