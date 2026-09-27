import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'WebsiteBuilder — Enterprise Production Websites Deployed in 48 Hours',
  description: 'Curated marketplace of engineered production websites. Reserve with a 10% token deposit in escrow. Live domain connection, Cloudflare SSL, and handover in 48 hours.',
  keywords: [
    'website builder',
    'production websites',
    'enterprise web templates',
    '48-hour live delivery',
    '10 percent token deposit',
    'escrow web development',
    'Next.js templates'
  ],
  authors: [{ name: 'WebsiteBuilder Hub' }]
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-[#f8fafc] text-slate-900 font-sans antialiased overflow-x-hidden min-h-screen selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
