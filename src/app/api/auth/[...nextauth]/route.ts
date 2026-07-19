import NextAuth from "next-auth";
import { NextResponse, type NextRequest } from "next/server";

import { AUTH_DISABLED } from "@/config/showcase";
import { authOptions } from "@/server/auth";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(authOptions);

export function GET(req: NextRequest, context: { params: { nextauth: string[] } }) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return handler(req, context);
}

export function POST(req: NextRequest, context: { params: { nextauth: string[] } }) {
    if (AUTH_DISABLED) {
        return NextResponse.json(
            { error: "Authentication is disabled on this demo." },
            { status: 403 },
        );
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return handler(req, context);
}
