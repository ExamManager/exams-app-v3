"use client";

import Link from "next/link";
import { siteUrls } from "@/config/urls";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { AuthDisabledNotice } from "@/components/auth-disabled-notice";

type AuthFormProps = {
    type: "signup" | "login";
};

export function AuthForm({ type }: AuthFormProps) {
    return (
        <div className="bg w-full max-w-sm space-y-6">
            <div className="flex flex-col items-center space-y-4">
                <Link
                    href={siteUrls.home}
                    className="flex w-fit items-center transition-transform hover:scale-90"
                >
                    <Icons.logoIcon className="h-10 w-10 fill-primary" />
                </Link>
                <div className="flex flex-col items-center space-y-1">
                    <h1 className="text-center text-2xl font-medium">
                        {type === "signup"
                            ? " Create an account"
                            : "Login to your account"}
                    </h1>
                    <Link
                        href={
                            type === "signup"
                                ? siteUrls.auth.login
                                : siteUrls.auth.signup
                        }
                        className="text-center text-sm text-muted-foreground underline underline-offset-4"
                    >
                        {type === "signup"
                            ? "Already have an account? Login"
                            : "Don't have an account? SignUp"}
                    </Link>
                </div>
            </div>

            <AuthDisabledNotice />

            <fieldset disabled className="min-w-0 space-y-3">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            className="bg-background"
                            placeholder="hey@example.com"
                            value=""
                            readOnly
                        />
                        <p className="text-sm text-muted-foreground">
                            We&apos;ll never share your email with anyone else.
                        </p>
                    </div>

                    <Button type="submit" className="w-full gap-2" disabled>
                        <span>Continue with Email</span>
                    </Button>
                </form>

                <div className="relative flex items-center justify-center">
                    <Separator className="w-full" />
                    <p className="absolute bg-background px-2 text-sm font-medium text-muted-foreground">
                        OR
                    </p>
                </div>

                <div className="flex flex-col space-y-2">
                    <Button variant="outline" className="w-full gap-2" disabled>
                        <Icons.gitHub className="h-3.5 w-3.5 fill-foreground" />
                        <span>Continue with Github</span>
                    </Button>
                    <Button variant="outline" className="w-full gap-2" disabled>
                        <Icons.google className="h-3.5 w-3.5 fill-foreground" />
                        <span>Continue with Google</span>
                    </Button>
                </div>
            </fieldset>
        </div>
    );
}
