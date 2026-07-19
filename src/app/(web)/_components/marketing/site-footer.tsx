import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { siteUrls } from "@/config/urls";

const footerLinks = [
    { href: siteUrls.features, label: "Features" },
    { href: siteUrls.pricing, label: "Pricing" },
    { href: siteUrls.support, label: "Support" },
    { href: siteUrls.docs, label: "Docs" },
    { href: siteUrls.github, label: "GitHub", external: true },
] as const;

export function SiteFooter() {
    return (
        <footer className="border-t border-border/80 bg-background">
            <div className="container max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-sm space-y-3">
                        <Link
                            href={siteUrls.home}
                            className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-80"
                        >
                            <Icons.logoIcon className="h-7 w-7" />
                            <span className="font-heading text-lg font-semibold tracking-tight">
                                ExamManager
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Classroom timers, multi-exam sessions, and calm
                            exam-day tools for schools and invigilators.
                        </p>
                        <p className="text-xs text-muted-foreground/80">
                            Portfolio showcase - auth disabled
                        </p>
                    </div>

                    <nav
                        aria-label="Footer"
                        className="flex flex-wrap gap-x-6 gap-y-3 text-sm"
                    >
                        {footerLinks.map((link) =>
                            "external" in link && link.external ? (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {link.label}
                                </Link>
                            ),
                        )}
                    </nav>
                </div>

                <div className="mt-10 border-t border-border/60 pt-6">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} ExamManager. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
