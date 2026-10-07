import Link from 'next/link';
import { Phone, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Réserver votre évaluation de départ',
  description:
    "Réservez votre évaluation de départ à l'auto-école Formaroute de Domont : 56 € en boîte manuelle, 60 € en automatique. Habituellement proposée sous un jour.",
  path: '/reservation',
});

const benefits = [
  'Évaluation de départ avec un enseignant autorisé (56 € manuelle / 60 € automatique)',
  'Proposition d’un volume prévisionnel de formation',
  'Présentation de nos forfaits et tarifs',
  'Réponse à vos questions',
];

export default function ReservationPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Phone className="h-4 w-4" />
              <span>Contactez-nous par téléphone</span>
            </div>
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              Réservez votre évaluation de départ
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Appelez-nous pour prendre rendez-vous pour votre évaluation de départ avec un
              enseignant autorisé. Elle est habituellement proposée sous un jour après la demande.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Benefits */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-slate-900">Ce qui est inclus</h2>
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
                      <p className="text-slate-600">{site.address.full}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 text-formaroute-blue-600" />
                    <div>
                      <p className="font-medium">Délai</p>
                      <p className="text-slate-600">
                        Habituellement proposée sous un jour après la demande
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 text-formaroute-blue-600" />
                    <div>
                      <p className="font-medium">Horaires d'ouverture</p>
                      {site.hours.display.map((h) => (
                        <p key={h.days} className="text-slate-600">
                          {h.days} : {h.hours}
                        </p>
                      ))}
                      <p className="mt-1 text-sm text-slate-500">{site.hours.lessonsNote}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Contact */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <h2 className="mb-2 font-heading text-2xl font-bold text-slate-900">
                  Appelez-nous pour prendre rendez-vous
                </h2>
                <p className="mb-8 text-slate-600">
                  Notre équipe est disponible pour répondre à vos questions et planifier votre
                  évaluation de départ. Appelez-nous directement aux horaires d'ouverture.
                </p>

                {/* Phone CTA */}
                <a
                  href={site.contact.phoneHref}
                  className="group flex items-center gap-4 rounded-2xl bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-700 p-8 text-white transition-all hover:shadow-xl hover:shadow-formaroute-blue-200 sm:gap-6"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/90">Appeler maintenant</p>
                    <p className="text-2xl font-bold tracking-wide sm:text-3xl">
                      {site.contact.phoneDisplay}
                    </p>
                    <p className="mt-1 text-sm text-white/90">{site.hours.short}</p>
                  </div>
                </a>

                {/* Horaires détaillés */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {site.hours.display
                    .filter((h) => h.hours !== 'Fermé')
                    .map((h) => (
                      <div key={h.days} className="rounded-xl border border-slate-200 p-4">
                        <div className="mb-2 flex items-center gap-2">
                          <Clock className="h-5 w-5 text-formaroute-blue-600" />
                          <p className="font-semibold text-slate-900">{h.days}</p>
                        </div>
                        <p className="text-slate-600">{h.hours}</p>
                      </div>
                    ))}
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
                q: "Combien coûte l'évaluation de départ ?",
                a: "L'évaluation de départ est facturée 56 € en boîte manuelle et 60 € en boîte automatique. Elle a lieu avant l'inscription et permet de proposer un volume prévisionnel de formation, adapté ensuite à votre progression.",
              },
              {
                q: 'Dans quel délai puis-je être évalué ?',
                a: "L'évaluation est habituellement proposée sous un jour après la demande. La première leçon est habituellement proposée sous trois jours après l'évaluation et la finalisation de l'inscription, selon vos disponibilités et dans le respect des délais légaux applicables.",
              },
              {
                q: 'Que dois-je apporter ?',
                a: "Munissez-vous d'une pièce d'identité en cours de validité. Si vous êtes mineur, un parent ou tuteur légal doit vous accompagner.",
              },
              {
                q: 'Comment prendre rendez-vous ?',
                a: `Appelez-nous au ${site.contact.phoneDisplay} pendant nos horaires d'ouverture. Notre équipe vous proposera un créneau adapté à votre emploi du temps.`,
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
    </div>
  );
}
