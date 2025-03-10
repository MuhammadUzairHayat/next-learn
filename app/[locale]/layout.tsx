// 'use client'
import "@/app/ui/global.css";
import Link from "next/link";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { headers } from "next/headers";
import currentPath from "@/locale/gettingMessages";
// import { useSelectedLayoutSegment } from 'next/navigation'

export const metadata = {
  title: "Next.js | Home",
  description: "Home page",
};

// export async function generateStaticParams() {
//   return [{ lang: 'en' }, { lang: 'ar' }, { lang: 'ur' }];
// }

export default async function RootLayout({
  children,
  params,
  about,
  team,
  auth,
}: {
  children: React.ReactNode;
  about: React.ReactNode;
  team: React.ReactNode;
  auth: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // const pathname = (await headers()).get("x-pathname") || (await headers()).get("referer");
  // console.log("Current Pathname:", pathname);

  // Providing all messages to the client
  // side is the easiest way to get started
  // currentPath();
  const messages = await getMessages();
  return (
      <html lang={locale}>
        <body>
    <NextIntlClientProvider messages={messages}>
          <div>{auth}</div>
          {children}
    </NextIntlClientProvider>
        </body>
      </html>
  );
}
