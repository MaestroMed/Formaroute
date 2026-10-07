'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { formations } from '@/data/formations';
import { site } from '@/data/site';

const contactSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Veuillez entrer un email valide'),
  phone: z.string().min(10, 'Veuillez entrer un numéro de téléphone valide'),
  subject: z.string().min(1, 'Veuillez sélectionner un sujet'),
  formation: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter la politique de confidentialité',
  }),
  website: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects = [
  { value: 'info', label: "Demande d'informations" },
  { value: 'inscription', label: 'Inscription' },
  { value: 'devis', label: 'Demande de devis' },
  { value: 'stage', label: 'Stage de récupération de points' },
  { value: 'ecsr', label: 'Formation moniteur TP ECSR' },
  { value: 'reclamation', label: 'Réclamation' },
  { value: 'autre', label: 'Autre' },
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Présélection du sujet depuis l'URL (ex. /contact?sujet=stage).
  useEffect(() => {
    const sujet = new URLSearchParams(window.location.search).get('sujet');
    if (sujet && subjects.some((s) => s.value === sujet)) setValue('subject', sujet);
  }, [setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || 'Erreur serveur');
      }
      setIsSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error && error.message !== 'Erreur serveur'
          ? error.message
          : "Votre message n'a pas pu être envoyé."
      );
    }
  };

  const fieldProps = (name: keyof ContactFormData) => ({
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  if (isSubmitted) {
    return (
      <div role="status" className="flex flex-col items-center justify-center py-12 text-center">
        <div
          className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
          aria-hidden="true"
        >
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900">Message envoyé !</h3>
        <p className="mt-2 text-slate-600">
          Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-6">
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Champ piège anti-robots, invisible pour les visiteurs */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir ce champ</label>
        <input {...register('website')} type="text" id="website" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Name Fields */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-slate-700">
            Prénom *
          </label>
          <input
            {...register('firstName')}
            {...fieldProps('firstName')}
            type="text"
            id="firstName"
            className={cn(
              'w-full rounded-xl border px-4 py-3 transition-all',
              'focus:border-formaroute-blue-500 focus:ring-4 focus:ring-formaroute-blue-500/10',
              errors.firstName ? 'border-red-500' : 'border-slate-300'
            )}
            placeholder="Jean"
          />
          {errors.firstName && (
            <p id="firstName-error" className="mt-1 text-sm text-red-600">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-slate-700">
            Nom *
          </label>
          <input
            {...register('lastName')}
            {...fieldProps('lastName')}
            type="text"
            id="lastName"
            className={cn(
              'w-full rounded-xl border px-4 py-3 transition-all',
              'focus:border-formaroute-blue-500 focus:ring-4 focus:ring-formaroute-blue-500/10',
              errors.lastName ? 'border-red-500' : 'border-slate-300'
            )}
            placeholder="Dupont"
          />
          {errors.lastName && (
            <p id="lastName-error" className="mt-1 text-sm text-red-600">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
            Email *
          </label>
          <input
            {...register('email')}
            {...fieldProps('email')}
            type="email"
            id="email"
            className={cn(
              'w-full rounded-xl border px-4 py-3 transition-all',
              'focus:border-formaroute-blue-500 focus:ring-4 focus:ring-formaroute-blue-500/10',
              errors.email ? 'border-red-500' : 'border-slate-300'
            )}
            placeholder="jean.dupont@email.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
            Téléphone *
          </label>
          <input
            {...register('phone')}
            {...fieldProps('phone')}
            type="tel"
            id="phone"
            className={cn(
              'w-full rounded-xl border px-4 py-3 transition-all',
              'focus:border-formaroute-blue-500 focus:ring-4 focus:ring-formaroute-blue-500/10',
              errors.phone ? 'border-red-500' : 'border-slate-300'
            )}
            placeholder="06 12 34 56 78"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Subject & Formation */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
            Sujet *
          </label>
          <select
            {...register('subject')}
            {...fieldProps('subject')}
            id="subject"
            className={cn(
              'w-full rounded-xl border px-4 py-3 transition-all',
              'focus:border-formaroute-blue-500 focus:ring-4 focus:ring-formaroute-blue-500/10',
              errors.subject ? 'border-red-500' : 'border-slate-300'
            )}
          >
            <option value="">Sélectionner un sujet</option>
            {subjects.map((subject) => (
              <option key={subject.value} value={subject.value}>
                {subject.label}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-sm text-red-600">
              {errors.subject.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="formation" className="mb-2 block text-sm font-medium text-slate-700">
            Formation concernée
          </label>
          <select
            {...register('formation')}
            id="formation"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 transition-all focus:border-formaroute-blue-500 focus:ring-4 focus:ring-formaroute-blue-500/10"
          >
            <option value="">Sélectionner une formation</option>
            {formations
              .filter((f) => !f.comingSoon)
              .map((formation) => (
                <option key={formation.id} value={formation.id}>
                  {formation.shortTitle}
                </option>
              ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
          Message *
        </label>
        <textarea
          {...register('message')}
          {...fieldProps('message')}
          id="message"
          rows={5}
          className={cn(
            'w-full rounded-xl border px-4 py-3 transition-all',
            'focus:border-formaroute-blue-500 focus:ring-4 focus:ring-formaroute-blue-500/10',
            errors.message ? 'border-red-500' : 'border-slate-300'
          )}
          placeholder="Votre message..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3">
          <input
            {...register('consent')}
            {...fieldProps('consent')}
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-slate-300 text-formaroute-blue-600 focus:ring-formaroute-blue-500"
          />
          <span className="text-sm text-slate-600">
            J'accepte que mes données soient utilisées pour traiter ma demande conformément à la{' '}
            <Link
              href="/politique-confidentialite"
              className="text-formaroute-blue-600 hover:underline"
            >
              politique de confidentialité
            </Link>
            . *
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-1 text-sm text-red-600">
            {errors.consent.message}
          </p>
        )}
      </div>

      {submitError && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <p>
            {submitError} Vous pouvez aussi nous appeler au{' '}
            <a href={site.contact.phoneHref} className="font-semibold underline">
              {site.contact.phoneDisplay}
            </a>{' '}
            ou écrire à{' '}
            <a href={`mailto:${site.contact.email}`} className="font-semibold underline">
              {site.contact.email}
            </a>
            .
          </p>
        </div>
      )}

      {/* Submit */}
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Envoyer le message
          </>
        )}
      </Button>
    </form>
  );
}
