import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Réservation | Évaluation Gratuite',
  description:
    "Réservez votre évaluation gratuite chez Formaroute. Prenez rendez-vous en ligne pour découvrir notre auto-école et estimer le nombre d'heures de conduite nécessaires.",
  openGraph: {
    title: 'Réservation | Formaroute Domont',
    description: 'Réservez votre évaluation gratuite en ligne',
  },
};

const benefits = [
  'Évaluation gratuite et sans engagement',
  'Estimation du nombre d\'heures nécessaires',
  'Présentation de nos formations et tarifs',
  'Réponse à toutes vos questions',
  'Visite de nos locaux',
];

export default function ReservationPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Calendar className="h-4 w-4" />
              <span>Réservation en ligne</span>
            </div>
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              Réservez votre évaluation gratuite
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Prenez rendez-vous en quelques clics pour une évaluation gratuite et sans engagement.
              Notre équipe vous accueillera dans nos locaux de Domont.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Benefits */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-slate-900">
                Ce qui est inclus
              </h2>
              <div className="mt-6 space-y-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-900">Informations pratiques</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-formaroute-blue-600" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-slate-600">[Adresse], 95330 Domont</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 text-formaroute-blue-600" />
                    <div>
                      <p className="font-medium">Durée</p>
                      <p className="text-slate-600">Environ 1 heure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 text-formaroute-blue-600" />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <p className="text-slate-600">01 XX XX XX XX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Widget */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <h2 className="mb-6 font-heading text-2xl font-bold text-slate-900">
                  Choisissez votre créneau
                </h2>
                
                {/* Cal.com Embed Placeholder */}
                <div className="flex min-h-[500px] items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50">
                  <div className="text-center">
                    <Calendar className="mx-auto mb-4 h-12 w-12 text-slate-400" />
                    <p className="text-lg font-medium text-slate-600">
                      Calendrier de réservation Cal.com
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      Le widget de réservation sera intégré ici
                    </p>
                    <Button asChild className="mt-4">
                      <a
                        href="https://cal.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ouvrir Cal.com
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Alternative Contact */}
                <div className="mt-6 rounded-xl bg-formaroute-blue-50 p-4 text-center">
                  <p className="text-sm text-slate-600">
                    Vous préférez réserver par téléphone ?
                  </p>
                  <a
                    href="tel:+33XXXXXXXXX"
                    className="mt-1 inline-flex items-center gap-2 font-semibold text-formaroute-blue-600 hover:text-formaroute-blue-700"
                  >
                    <Phone className="h-4 w-4" />
                    01 XX XX XX XX
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center text-slate-900">
            Questions fréquentes sur l'évaluation
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {[
              {
                q: "L'évaluation est-elle vraiment gratuite ?",
                a: "Oui, l'évaluation initiale est entièrement gratuite et sans engagement. Elle vous permet de découvrir notre auto-école et d'estimer le nombre d'heures de conduite dont vous aurez besoin.",
              },
              {
                q: 'Combien de temps dure l\'évaluation ?',
                a: "L'évaluation dure environ 1 heure. Elle comprend un entretien, une partie pratique en voiture et une présentation de nos formations.",
              },
              {
                q: 'Que dois-je apporter ?',
                a: "Munissez-vous d'une pièce d'identité en cours de validité. Si vous êtes mineur, un parent ou tuteur légal doit vous accompagner.",
              },
              {
                q: 'Puis-je annuler ou reporter mon rendez-vous ?',
                a: 'Oui, vous pouvez modifier ou annuler votre rendez-vous jusqu\'à 24h avant la date prévue, directement via le lien de confirmation reçu par email.',
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                <p className="mt-2 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="font-semibold text-formaroute-blue-600 hover:text-formaroute-blue-700"
            >
              Voir toutes les questions fréquentes →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
