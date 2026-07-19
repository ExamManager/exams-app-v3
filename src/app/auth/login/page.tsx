import { AuthForm } from "@/app/auth/_components/auth-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign In",
    description: "ExamManager V3 sign in — portfolio demo (login disabled).",
};

export default function Login() {
    return <AuthForm type="login" />;
}
