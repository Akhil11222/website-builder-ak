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
  title: 'WebsiteBuilder — Ready-Made Websites, Deployed to Your Domain in 48 Hours',
  description: 'Curated marketplace for high-converting production websites. Reserve with a 10% token deposit. We handle your domain, SSL, hosting, and live handover in 48 hours.',
  keywords: [
    'website builder',
    'production websites',
    '48 hour website launch',
    '10 percent token deposit',
    'domain connection',
    'Next.js websites'
  ],
  authors: [{ name: 'WebsiteBuilder' }]
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0e17',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}>
      <body className="bg-[#0a0e17] text-slate-100 font-sans antialiased overflow-x-hidden min-h-screen selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
