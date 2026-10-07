import { site } from '@/data/site';

/** Gabarit commun des pages légales et qualité. */
export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  const updatedAt = new Date(site.contentUpdatedAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="pt-20">
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl">{title}</h1>
            {intro && <div className="mt-4 text-lg text-slate-600">{intro}</div>}
            <div className="mt-8 space-y-8 text-slate-600">{children}</div>
            <p className="mt-12 text-sm text-slate-500">Dernière mise à jour : {updatedAt}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}
