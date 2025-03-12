// import { routing } from "@/i18n/routing";
// import createMiddleware from "next-intl/middleware";

// export default createMiddleware(routing);


import { NextRequest, NextFetchEvent, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { CustomMiddleware } from "./chain";

const i18nMiddleware = createMiddleware(routing);

export const withI18nMiddleware =
  (next: CustomMiddleware): CustomMiddleware =>
  async (request: NextRequest, event: NextFetchEvent, response: NextResponse) => {
    const result = i18nMiddleware(request);
    return next ? next(request, event, result) : result;
  };
