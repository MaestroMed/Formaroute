'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Wallet,
  Briefcase,
  Users,
  Car,
  Building,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { mainNavigation } from '@/data/navigation';
import { FormationIcon } from '@/components/icons/FormationIcon';
import { site } from '@/data/site';

const lucideIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wallet,
  Briefcase,
  Users,
  Car,
  Building,
  TrendingUp,
  ShieldCheck,
};

function NavChildIcon({ href, icon }: { href: string; icon?: string }) {
  if (href.startsWith('/formations/')) {
    const slug = href.replace('/formations/', '');
    return <FormationIcon slug={slug} className="h-5 w-5" />;
  }
  if (icon && lucideIconMap[icon]) {
    const Icon = lucideIconMap[icon];
    return <Icon className="h-5 w-5" />;
  }
  return null;
}

function Logo() {
  return (
    <>
      <Image
        src="/logo/logo-mark.png"
        alt=""
        width={52}
        height={44}
        className="h-11 w-auto"
        priority
      />
      <span className="font-heading text-2xl font-black tracking-tight text-formaroute-blue-700">
        Forma<span className="text-formaroute-red-600">Route</span>
      </span>
    </>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <nav className="container-custom" aria-label="Navigation principale">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold"
            aria-label="Formaroute — accueil"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {mainNavigation.map((item) => (
              <div
                key={item.href}
                className="relative flex items-center"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                    setActiveDropdown(null);
                  }
                }}
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
                </Link>
                {item.children && (
                  <button
                    type="button"
                    className="-ml-3 rounded-lg p-1 text-slate-700 hover:text-formaroute-blue-600"
                    aria-expanded={activeDropdown === item.label}
                    aria-controls={`menu-${item.label}`}
                    aria-label={`Afficher le sous-menu ${item.label}`}
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    }
                  >
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        activeDropdown === item.label && 'rotate-180'
                      )}
                    />
                  </button>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      id={`menu-${item.label}`}
                      className="absolute left-0 top-full w-72 pt-2"
                    >
                      <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-formaroute-blue-100 text-formaroute-blue-600">
                              <NavChildIcon href={child.href} icon={child.icon} />
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">{child.label}</p>
                              {child.description && (
                                <p className="text-sm text-slate-500">{child.description}</p>
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
              href={site.contact.phoneHref}
              className="flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-formaroute-blue-600"
            >
              <Phone className="h-4 w-4" />
              <span>{site.contact.phoneDisplay}</span>
            </a>
            <Button asChild>
              <Link href="/reservation">Réserver</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg lg:hidden"
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            id="mobile-menu"
            className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden"
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
                  href={site.contact.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-medium text-slate-700"
                >
                  <Phone className="h-5 w-5" />
                  <span>{site.contact.phoneDisplay}</span>
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
