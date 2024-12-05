import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from 'src/i18n/routing';
import type { Metadata } from 'next';
import './globals.css';
import { Dancing_Script } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
export const metadata: Metadata = {
  title: 'Futuromy',
  description: 'Futuristic Way of Deployment',
  icons: {
    icon: '/icons/favicon.ico',
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dancing-script',
});
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.className} ${dancingScript.variable} scroll-smooth`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
