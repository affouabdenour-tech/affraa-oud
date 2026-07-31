'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';
import { SearchOverlay } from '@/components/search-overlay';
import { Toaster } from '@/components/ui/toaster';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key="page"
          className="min-h-screen"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{
            duration: 0.35,
            ease: 'easeOut',
          }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />

      <CartDrawer />
      <SearchOverlay />
      <Toaster />
    </>
  );
}