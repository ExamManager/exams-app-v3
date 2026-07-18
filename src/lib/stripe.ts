import Stripe from "stripe"

import { env } from "@/env"

// Placeholder key keeps `next build` alive when Vercel env secrets are not set.
export const stripe = new Stripe(env.STRIPE_API_KEY || "sk_test_placeholder", {
  apiVersion: "2022-11-15",
  typescript: true,
})