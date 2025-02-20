import '@/app/ui/global.css'

export const metadata = {
  title: 'Next.js | Home',
  description: 'Home page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
