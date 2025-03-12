// import { authConfig } from "@/auth.config";
// import NextAuth from "next-auth";

// export default NextAuth(authConfig).auth;

import { NextRequest, NextFetchEvent, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { CustomMiddleware } from "./chain";

const secret = process.env.NEXTAUTH_SECRET;

// Define public routes that do not require authentication
const PUBLIC_ROUTES = ["/login", "/register", "/about","/en/login"];

export const withAuthMiddleware =
  (next: CustomMiddleware): CustomMiddleware =>
  async (request: NextRequest, event: NextFetchEvent, response: NextResponse) => {
    const { pathname } = request.nextUrl;

    // Allow access to public routes
    if (PUBLIC_ROUTES.includes(pathname)) {
      return next ? next(request, event, response) : NextResponse.next();
    }

    // Check if the user has a valid session
    const token = await getToken({ req: request, secret });

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Ensure we always return a valid NextResponse
    return next ? await next(request, event, response) : NextResponse.next();
  };
