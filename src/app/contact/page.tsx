import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Nous Contacter',
  description:
    "Contactez l'auto-école Formaroute à Domont. Téléphone, email, formulaire de contact. Nous sommes à votre disposition pour répondre à vos questions.",
  openGraph: {
    title: 'Contact | Auto-école Formaroute Domont',
    description: 'Contactez-nous par téléphone, email ou formulaire',
  },
};

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresse',
    content: '[Adresse à compléter]\n95330 Domont',
    link: 'https://maps.google.com/?q=Domont,France',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    content: '01 XX XX XX XX',
    link: 'tel:+33XXXXXXXXX',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@formaroute.fr',
    link: 'mailto:contact@formaroute.fr',
  },
  {
    icon: Clock,
    title: 'Horaires',
    content: 'Lun - Ven : 9h - 19h\nSamedi : 9h - 17h',
  },
];

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              Contactez-nous
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Une question ? Besoin d'informations ? Notre équipe est à votre
              disposition pour vous accompagner dans votre projet.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold text-slate-900">
                Nos coordonnées
              </h2>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-formaroute-blue-200 hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-formaroute-blue-100">
                      <Icon className="h-6 w-6 text-formaroute-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{info.title}</p>
                      <p className="whitespace-pre-line text-slate-600">
                        {info.content}
                      </p>
                    </div>
                  </div>
                );

                if (info.link) {
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {content}
                    </a>
                  );
                }
                return <div key={index}>{content}</div>;
              })}

              {/* Map Placeholder */}
              <div className="aspect-video overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <div className="flex h-full w-full items-center justify-center text-slate-400">
                  <MapPin className="mr-2 h-6 w-6" />
                  Carte Google Maps
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <h2 className="mb-6 font-heading text-2xl font-bold text-slate-900">
                  Envoyez-nous un message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
