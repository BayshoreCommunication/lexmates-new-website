import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import ScrollObserver from '@/components/ui/ScrollObserver';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lexmates.com/';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Lexmates Advocates & Legal Advisers | Dhaka, Bangladesh',
    template: '%s | Lexmates Advocates & Legal Advisers',
  },
  description:
    'Lexmates is one of Dhaka’s most complete law firms, covering 40 practice areas across litigation and transactional law.',
  keywords: [
    'Lexmates',
    'Lexmates Advocates',
    'Law Firm Dhaka',
    'Advocate Supreme Court Bangladesh',
    'Litigation Lawyer Dhaka',
    'Corporate Lawyer Bangladesh',
    'Real Estate Lawyer Dhaka',
    'Tax Lawyer Bangladesh',
    'NRB Legal Services',
  ],
  authors: [{ name: 'Lexmates Advocates & Legal Advisers' }],
  creator: 'Lexmates',
  publisher: 'Lexmates Advocates & Legal Advisers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Lexmates Advocates & Legal Advisers | Dhaka, Bangladesh',
    description:
      'One of Dhaka’s most complete law firms — a single destination covering 40 practice areas across litigation and transactional law.',
    url: baseUrl,
    siteName: 'Lexmates Advocates & Legal Advisers',
    images: [
      {
        url: `${baseUrl}/images/Og.png`,
        width: 1200,
        height: 630,
        alt: 'Lexmates Advocates & Legal Advisers',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lexmates Advocates & Legal Advisers | Dhaka, Bangladesh',
    description:
      'One of Dhaka’s most complete law firms, covering 40 practice areas across litigation and transactional law.',
    images: [`${baseUrl}/images/Og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ScrollObserver />
      </body>
    </html>
  );
}
