// import { authConfig } from "@/auth.config";
// import NextAuth from "next-auth";
// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";
// import { NextResponse } from "next/server";

// import { chain } from "./ChainMiddleware/chain";
// import withAuthMiddleware from "./ChainMiddleware/withAuthMiddleware";
// import withI18nMiddleware from "./ChainMiddleware/withI18nMiddleware";

import { chain } from "./ChainMiddleware/chain";
import { withI18nMiddleware } from "./ChainMiddleware/withI18nMiddleware";
import { withAuthMiddleware } from "./ChainMiddleware/withAuthMiddleware";

export default chain([withI18nMiddleware,withAuthMiddleware]);


// // Initialize authentication middleware
// const authMiddleware = NextAuth(authConfig).auth;

// // Initialize internationalization middleware
// const intlMiddleware = createMiddleware(routing);

// export default async function middleware(req: Request) {
//   // Always apply internationalization middleware first
//   let response = intlMiddleware(req as any);

//   // Check authentication status
//   const authResponse = await authMiddleware(req as any);
//   const url = new URL(req.url);

//   // If user is not authenticated, redirect after intlMiddleware applies
//   if (!authResponse) {
//     console.log("User is not authenticated, redirecting after intlMiddleware...");
//   }

//   // If authMiddleware returned a valid response (e.g., redirect), apply it
//   if (authResponse instanceof Response) return response;

//   return response;
// }

// export const config = {
//   matcher: [
//     "/(en|ur)/:path*", // Match localized paths
//     "/((?!api|_next/static|_next/image|.*\\.png$).*)", // Ignore API and static assets
//   ],
// };


// middleware.ts


// export default chain([withI18nMiddleware, withAuthMiddleware]);


export const config = {
 matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images).*)'],
};