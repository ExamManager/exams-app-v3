import { env } from "@/env";
import { Resend } from "resend";

// Placeholder avoids crashing `next build` when secrets are not wired (e.g. portfolio Vercel).
export const resend = new Resend(env.RESEND_API_KEY ?? "re_missing_at_build");
