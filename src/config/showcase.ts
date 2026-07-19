/**
 * Portfolio / public showcase flags.
 * Auth is disabled for the live demo; set AUTH_DISABLED=false locally to re-enable.
 */
export const AUTH_DISABLED =
    process.env.AUTH_DISABLED !== "false" &&
    process.env.NEXT_PUBLIC_AUTH_DISABLED !== "false";
