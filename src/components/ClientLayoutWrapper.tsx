'use client';

import React from 'react';
import { MarketplaceProvider, useMarketplace } from '@/context/MarketplaceContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SpotlightBackground from '@/components/SpotlightBackground';
import LivePreviewModal from '@/components/LivePreviewModal';
import BookingModal from '@/components/BookingModal';
import SignInModal from '@/components/SignInModal';

function MarketplaceModals() {
  const {
    activePreviewTemplate,
    setActivePreviewTemplate,
    activeBookingTemplate,
    setActiveBookingTemplate,
    isSignInOpen,
    setIsSignInOpen
  } = useMarketplace();

  return (
    <>
      <LivePreviewModal
        template={activePreviewTemplate}
        isOpen={Boolean(activePreviewTemplate)}
        onClose={() => setActivePreviewTemplate(null)}
        onBookNow={(tpl) => {
          setActivePreviewTemplate(null);
          setActiveBookingTemplate(tpl);
        }}
      />

      <BookingModal
        template={activeBookingTemplate}
        isOpen={Boolean(activeBookingTemplate)}
        onClose={() => setActiveBookingTemplate(null)}
      />

      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
      />
    </>
  );
}

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <MarketplaceProvider>
      <div className="relative min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 antialiased overflow-x-hidden">
        <SpotlightBackground />
        <Header />
        <main className="flex-1 w-full z-10">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <MarketplaceModals />
      </div>
    </MarketplaceProvider>
  );
}
