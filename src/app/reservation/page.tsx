import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Réservation | Évaluation de Départ',
  description:
    "Contactez l'auto-école Formaroute à Domont par téléphone pour réserver votre évaluation de départ. Notre équipe vous accueille du lundi au samedi.",
  openGraph: {
    title: 'Réservation | Formaroute Domont',
    description: 'Appelez-nous pour réserver votre évaluation de départ',
  },
};

const benefits = [
  "Évaluation de départ avec un moniteur (56€ manuelle / 60€ BVA)",
  "Estimation du nombre d'heures nécessaires",
  'Présentation de nos forfaits et tarifs',
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
              <Phone className="h-4 w-4" />
              <span>Contactez-nous par téléphone</span>
            </div>
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              Réservez votre évaluation de départ
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Appelez-nous pour prendre rendez-vous pour votre évaluation de départ avec un
              moniteur diplômé. Notre équipe vous accueillera dans nos locaux de Domont.
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
                      <p className="text-slate-600">4 avenue Jean Jaurès, 95330 Domont</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 text-formaroute-blue-600" />
                    <div>
                      <p className="font-medium">Durée de l'évaluation</p>
                      <p className="text-slate-600">Environ 1 heure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 text-formaroute-blue-600" />
                    <div>
                      <p className="font-medium">Horaires d'ouverture</p>
                      <p className="text-slate-600">Lun - Ven : 10h - 12h et 15h - 20h</p>
                      <p className="text-slate-600">Samedi : 10h - 13h</p>
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
                  href="tel:+33134198326"
                  className="group flex items-center gap-6 rounded-2xl bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-700 p-8 text-white transition-all hover:shadow-xl hover:shadow-formaroute-blue-200"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Appeler maintenant</p>
                    <p className="text-3xl font-bold tracking-wide">01 34 19 83 26</p>
                    <p className="mt-1 text-sm text-white/70">
                      Lun - Ven : 10h - 12h et 15h - 20h | Sam : 10h - 13h
                    </p>
                  </div>
                </a>

                {/* Horaires détaillés */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-formaroute-blue-600" />
                      <p className="font-semibold text-slate-900">Lundi au Vendredi</p>
                    </div>
                    <p className="text-slate-600">10h00 – 12h00</p>
                    <p className="text-slate-600">15h00 – 20h00</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-formaroute-blue-600" />
                      <p className="font-semibold text-slate-900">Samedi</p>
                    </div>
                    <p className="text-slate-600">10h00 – 13h00</p>
                  </div>
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
                a: "L'évaluation de départ est facturée 56€ en boîte manuelle et 60€ en boîte automatique (BVA). Elle est obligatoire et permet d'estimer précisément le volume d'heures de conduite dont vous aurez besoin.",
              },
              {
                q: "Combien de temps dure l'évaluation ?",
                a: "L'évaluation dure environ 1 heure. Elle comprend un entretien, une partie pratique en voiture et une présentation de nos formations.",
              },
              {
                q: 'Que dois-je apporter ?',
                a: "Munissez-vous d'une pièce d'identité en cours de validité. Si vous êtes mineur, un parent ou tuteur légal doit vous accompagner.",
              },
              {
                q: 'Comment prendre rendez-vous ?',
                a: "Appelez-nous au 01 34 19 83 26 pendant nos horaires d'ouverture. Notre équipe vous proposera un créneau adapté à votre emploi du temps.",
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
