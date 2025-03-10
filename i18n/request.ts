import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async (context) => {
  // Await the requestLocale promise to get the locale

  let locale = await context.requestLocale;

  console.log("Locale:", locale);
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});