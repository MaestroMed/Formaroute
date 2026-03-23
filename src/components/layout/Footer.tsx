import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { footerNavigation, socialLinks } from '@/data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-formaroute-blue-600">
                <span className="font-heading text-xl text-white">F</span>
              </div>
              <span className="font-heading text-2xl font-bold text-white">
                Forma<span className="text-formaroute-red-500">route</span>
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-slate-400">
              Votre auto-école de confiance à Domont. Formation au code de la route,
              permis B, conduite accompagnée et stage de récupération de points.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=4+avenue+Jean+Jaur%C3%A8s+Domont+95330"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-formaroute-blue-500" />
                <span>
                  4 avenue Jean Jaurès<br />
                  95330 Domont
                </span>
              </a>
              <a
                href="tel:+33134198326"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="h-5 w-5 text-formaroute-blue-500" />
                <span>01 34 19 83 26</span>
              </a>
              <a
                href="mailto:contact.formaroute@gmail.com"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5 text-formaroute-blue-500" />
                <span>contact.formaroute@gmail.com</span>
              </a>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-formaroute-blue-500" />
                <span>
                  Lun - Ven : 10h - 12h et 15h - 20h<br />
                  Samedi : 10h - 13h
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://facebook.com/formaroute"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 transition-colors hover:bg-formaroute-blue-600"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/formaroute"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 transition-colors hover:bg-formaroute-red-600"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Formations */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">
              Formations
            </h3>
            <ul className="space-y-2">
              {footerNavigation.formations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">
              Informations
            </h3>
            <ul className="space-y-2">
              {footerNavigation.informations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones Desservies */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">
              Zones desservies
            </h3>
            <ul className="space-y-2">
              {footerNavigation.villes.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
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
          <p className="text-sm text-slate-500">
            © {currentYear} Formaroute. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {footerNavigation.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
