import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'WebsiteBuilder Hub | Launch Your Dream Website in 48 Hours with 10% Down',
  description: 'Curated marketplace for production-ready websites. Reserve with a 10% token deposit, get custom domain configuration, SSL, hosting, and live delivery within 48 hours.',
  keywords: [
    'website builder',
    'deployment hub',
    'production website marketplace',
    '48-hour delivery',
    '10% token booking',
    'Next.js templates',
    'custom domain setup'
  ],
  authors: [{ name: 'WebsiteBuilder Hub' }]
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#4f46e5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-[#f8fafc] text-slate-900 font-sans antialiased overflow-x-hidden min-h-screen">
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
