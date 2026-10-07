import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="pt-20">
      <section className="section bg-white">
        <div className="container-custom text-center">
          <p className="font-mono text-6xl font-bold text-formaroute-blue-600">404</p>
          <h1 className="mt-4 font-heading text-3xl font-bold text-slate-900">Page introuvable</h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            La page que vous cherchez n&apos;existe pas ou a été déplacée.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/">
                Retour à l&apos;accueil
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/formations">Nos formations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
