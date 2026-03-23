'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { mainNavigation } from '@/data/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 shadow-lg backdrop-blur-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-formaroute-blue-600">
              <span className="font-heading text-xl font-black text-white">F</span>
            </div>
            <span className={cn(
              'font-heading text-2xl font-black tracking-tight transition-colors',
              isScrolled ? 'text-slate-900' : 'text-slate-900'
            )}>
              Forma<span className="text-formaroute-red-600">route</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {mainNavigation.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                    isScrolled
                      ? 'text-slate-700 hover:bg-slate-100 hover:text-formaroute-blue-600'
                      : 'text-slate-700 hover:bg-white/10 hover:text-formaroute-blue-600'
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        activeDropdown === item.label && 'rotate-180'
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full w-72 pt-2"
                    >
                      <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-formaroute-blue-100 text-formaroute-blue-600">
                              <span className="text-lg">🚗</span>
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">
                                {child.label}
                              </p>
                              {child.description && (
                                <p className="text-sm text-slate-500">
                                  {child.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+33134198326"
              className={cn(
                'flex items-center gap-2 text-sm font-medium transition-colors',
                isScrolled
                  ? 'text-slate-700 hover:text-formaroute-blue-600'
                  : 'text-slate-700 hover:text-formaroute-blue-600'
              )}
            >
              <Phone className="h-4 w-4" />
              <span>01 34 19 83 26</span>
            </a>
            <Button asChild>
              <Link href="/reservation">Réserver</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg lg:hidden"
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col gap-2">
                {mainNavigation.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block rounded-lg px-4 py-3 font-medium text-slate-900 hover:bg-slate-100"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-slate-200 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4">
                <a
                  href="tel:+33134198326"
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-medium text-slate-700"
                >
                  <Phone className="h-5 w-5" />
                  <span>01 34 19 83 26</span>
                </a>
                <Button asChild size="lg" className="w-full">
                  <Link href="/reservation">Réserver une évaluation</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
