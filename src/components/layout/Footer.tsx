import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { footerNavigation } from '@/data/navigation';
import { site } from '@/data/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="mb-6 flex items-center gap-2"
              aria-label="Formaroute — accueil"
            >
              <Image
                src="/logo/logo-mark.png"
                alt=""
                width={52}
                height={44}
                className="h-10 w-auto"
              />
              <span className="font-heading text-2xl font-bold text-white">
                Forma<span className="text-formaroute-red-500">Route</span>
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-slate-400">
              Votre auto-école de confiance à Domont. Formation au code de la route, permis B en
              boîte manuelle ou automatique, conduite accompagnée et perfectionnement.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-formaroute-blue-500" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </a>
              <a
                href={site.contact.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="h-5 w-5 text-formaroute-blue-500" />
                <span>{site.contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-3 break-all transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5 shrink-0 text-formaroute-blue-500" />
                <span>{site.contact.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-formaroute-blue-500" />
                <span>
                  {site.hours.display
                    .filter((h) => h.hours !== 'Fermé')
                    .map((h) => (
                      <span key={h.days} className="block">
                        {h.days} : {h.hours}
                      </span>
                    ))}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 transition-colors hover:bg-formaroute-blue-600"
                aria-label="Formaroute sur Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 transition-colors hover:bg-formaroute-red-600"
                aria-label="Formaroute sur Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Formations */}
          <div>
            <h2 className="mb-4 font-heading text-lg font-semibold text-white">Formations</h2>
            <ul className="space-y-2">
              {footerNavigation.formations.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h2 className="mb-4 font-heading text-lg font-semibold text-white">Informations</h2>
            <ul className="space-y-2">
              {footerNavigation.informations.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones Desservies */}
          <div>
            <h2 className="mb-4 font-heading text-lg font-semibold text-white">Zones desservies</h2>
            <ul className="space-y-2">
              {footerNavigation.villes.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-slate-400">
            © {currentYear} Formaroute. Tous droits réservés.
          </p>
          <nav
            aria-label="Informations légales"
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            {footerNavigation.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
