import { AuthForm } from "@/app/auth/_components/auth-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign Up",
    description: "ExamManager V3 sign up — portfolio demo (signup disabled).",
};

export default function Signup() {
    return <AuthForm type="signup" />;
}
