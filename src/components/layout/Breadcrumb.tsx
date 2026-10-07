import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';

interface BreadcrumbProps {
  /** Le dernier élément est la page courante. */
  items: { name: string; path: string }[];
}

/** Fil d'Ariane accessible, avec ses données structurées BreadcrumbList. */
export function Breadcrumb({ items }: BreadcrumbProps) {
  const all = [{ name: 'Accueil', path: '/' }, ...items];
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <JsonLd data={breadcrumbJsonLd(all)} />
      <div className="container-custom py-4">
        <nav aria-label="Fil d'Ariane">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {all.map((item, i) => {
              const isLast = i === all.length - 1;
              return (
                <li key={item.path} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="text-slate-400" aria-hidden="true">
                      /
                    </span>
                  )}
                  {isLast ? (
                    <span aria-current="page" className="font-medium text-slate-900">
                      {item.name}
                    </span>
                  ) : (
                    <Link href={item.path} className="text-slate-600 hover:text-slate-900">
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
