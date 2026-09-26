'use client';

import React, { createContext, useContext, useState } from 'react';
import { Template } from '@/data/templates';

interface MarketplaceContextType {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activePreviewTemplate: Template | null;
  setActivePreviewTemplate: (t: Template | null) => void;
  activeBookingTemplate: Template | null;
  setActiveBookingTemplate: (t: Template | null) => void;
  isSignInOpen: boolean;
  setIsSignInOpen: (open: boolean) => void;
}

const MarketplaceContext = createContext<MarketplaceContextType | undefined>(undefined);

export function MarketplaceProvider({ children }: { children: React.ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePreviewTemplate, setActivePreviewTemplate] = useState<Template | null>(null);
  const [activeBookingTemplate, setActiveBookingTemplate] = useState<Template | null>(null);
  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);

  return (
    <MarketplaceContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        activePreviewTemplate,
        setActivePreviewTemplate,
        activeBookingTemplate,
        setActiveBookingTemplate,
        isSignInOpen,
        setIsSignInOpen
      }}
    >
      {children}
    </MarketplaceContext.Provider>
  );
}

export function useMarketplace() {
  const context = useContext(MarketplaceContext);
  if (!context) {
    throw new Error('useMarketplace must be used within a MarketplaceProvider');
  }
  return context;
}
