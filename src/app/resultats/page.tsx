import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Clock,
  Target,
  GraduationCap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Nos Résultats | Taux de Réussite | Formaroute Domont',
  description:
    "Découvrez les taux de réussite de l'auto-école Formaroute à Domont : permis B, code de la route, conduite accompagnée. Des résultats au-dessus de la moyenne nationale.",
  openGraph: {
    title: 'Nos Résultats | Formaroute Domont',
    description: 'Taux de réussite supérieurs à la moyenne nationale.',
  },
  alternates: {
    canonical: 'https://formaroute.fr/resultats',
  },
};

const stats = [
  {
    icon: Award,
    value: '85%',
    label: 'Taux de réussite Permis B',
    sublabel: 'Au premier passage',
  },
  {
    icon: GraduationCap,
    value: '92%',
    label: 'Taux de réussite Code',
    sublabel: 'Examen théorique',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Élèves formés',
    sublabel: 'Depuis notre ouverture',
  },
  {
    icon: Clock,
    value: '< 4 mois',
    label: 'Délai moyen',
    sublabel: 'Du code à la pratique',
  },
];

const factors = [
  {
    icon: Target,
    title: 'Pédagogie adaptée',
    description:
      "Une approche personnalisée qui s'adapte au rythme et aux difficultés de chaque élève. Pas de formation uniformisée.",
  },
  {
    icon: Users,
    title: 'Moniteurs expérimentés',
    description:
      "Des enseignants diplômés d'État avec plusieurs années d'expérience, formés en continu aux meilleures pratiques.",
  },
  {
    icon: TrendingUp,
    title: 'Suivi de progression',
    description:
      "Un suivi régulier de votre progression avec des points d'étape pour ajuster la formation et préparer l'examen sereinement.",
  },
  {
    icon: Clock,
    title: 'Disponibilité',
    description:
      "Des créneaux étendus en semaine et le samedi pour vous permettre de progresser à un rythme soutenu.",
  },
];

export default function ResultatsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              Nos Résultats
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Des taux de réussite supérieurs à la moyenne nationale,
              fruits d'une pédagogie exigeante et d'un accompagnement sur mesure.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border-2 border-slate-100 bg-white p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-formaroute-blue-100">
                    <Icon className="h-7 w-7 text-formaroute-blue-600" />
                  </div>
                  <p className="font-mono text-4xl font-bold text-formaroute-blue-600">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-semibold text-slate-900">{stat.label}</p>
                  <p className="text-sm text-slate-500">{stat.sublabel}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-md text-slate-900">
              Au-dessus de la <span className="text-formaroute-blue-600">moyenne nationale</span>
            </h2>
            <p className="mt-4 text-slate-600">
              D'après les chiffres officiels de la sécurité routière, le taux
              moyen de réussite au permis B en France est de 57% au premier passage.
              Chez Formaroute, nous le portons à 85%.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">Formaroute</span>
                <span className="font-mono text-2xl font-bold text-formaroute-blue-600">
                  85%
                </span>
              </div>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[85%] rounded-full bg-formaroute-blue-600" />
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">Moyenne nationale</span>
                <span className="font-mono text-2xl font-bold text-slate-500">57%</span>
              </div>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[57%] rounded-full bg-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why these results */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-md text-slate-900">
              D'où viennent ces <span className="text-formaroute-blue-600">résultats</span> ?
            </h2>
            <p className="mt-4 text-slate-600">
              Quatre piliers qui font la différence et qui expliquent
              pourquoi nos élèves réussissent mieux et plus vite.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {factors.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-formaroute-blue-100">
                    <Icon className="h-7 w-7 text-formaroute-blue-600" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-slate-900">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-600">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-slate-50 py-8">
        <div className="container-custom">
          <p className="mx-auto max-w-3xl text-center text-xs text-slate-500">
            Les taux indiqués sont basés sur les statistiques internes de
            l'auto-école Formaroute. Les résultats peuvent varier selon les
            périodes et le profil des élèves. Source moyenne nationale : Sécurité Routière.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold">
            Rejoignez nos élèves qui réussissent
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Réservez votre évaluation de départ et profitez de notre méthode
            pour mettre toutes les chances de votre côté.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-formaroute-blue-600 hover:bg-slate-50"
            >
              <Link href="/reservation">
                Réserver maintenant
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Link href="/formations">Voir les formations</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
