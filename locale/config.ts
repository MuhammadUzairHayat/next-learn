import { NextRequest, NextResponse } from "next/server";

export const i18nConfig = {
    locales: ['en', 'ur'],
    defaultLocale: 'en'
  }

//   export function i18nRouter(request: NextRequest, i18nConfig: { locales: string[], defaultLocale: string }) {
//     const { pathname } = request.nextUrl;
//     const locales = i18nConfig.locales;
//     const defaultLocale = i18nConfig.defaultLocale;
  
//     // Check if the path has a locale prefix
//     const isPrefixed = locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
  
//     if (!isPrefixed) {
//       // Redirect to the default locale if not prefixed
//       return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
//     }
  
//     // Otherwise, continue with the request
//     return NextResponse.next();
//   }

// export const loadMessages = async (locale: string) => {
//     try {
//       // Dynamically import the locale JSON files
//       const messages = await import(`@/messages/${locale}.json`);
//       return messages.default;
//     } catch (error) {
//       console.error(`Error loading ${locale} messages:`, error);
//       return {}; // Return an empty object if loading fails
//     }
//   };

