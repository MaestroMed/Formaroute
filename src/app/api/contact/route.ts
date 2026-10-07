import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { site } from '@/data/site';
import { formations } from '@/data/formations';

const contactSchema = z.object({
  firstName: z.string().trim().min(2).max(80),
  lastName: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(200),
  phone: z
    .string()
    .trim()
    .min(10)
    .max(30)
    .regex(/^[0-9+().\s-]+$/),
  subject: z.enum(['info', 'inscription', 'devis', 'stage', 'ecsr', 'reclamation', 'autre']),
  formation: z.string().max(60).optional(),
  message: z.string().trim().min(10).max(5000),
  consent: z.boolean().refine((val) => val === true),
  // Champ piège invisible : rempli uniquement par les robots.
  website: z.string().max(0).optional(),
});

/** Échappe les caractères HTML des saisies utilisateur avant insertion dans l'email. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Limite simple par adresse IP (par instance serverless) : 5 envois / 10 min.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

const subjectLabels: Record<string, string> = {
  info: "Demande d'informations",
  inscription: 'Inscription',
  devis: 'Demande de devis',
  stage: 'Stage de récupération de points',
  ecsr: 'Formation moniteur TP ECSR',
  reclamation: 'Réclamation',
  autre: 'Autre',
};

function buildEmailHtml(raw: z.infer<typeof contactSchema>): string {
  const subjectLabel = subjectLabels[raw.subject];
  const formationLabel = raw.formation
    ? (formations.find((f) => f.id === raw.formation)?.title ?? raw.formation)
    : undefined;
  const data = {
    firstName: escapeHtml(raw.firstName),
    lastName: escapeHtml(raw.lastName),
    email: escapeHtml(raw.email),
    phone: escapeHtml(raw.phone),
    formation: formationLabel ? escapeHtml(formationLabel) : undefined,
    message: escapeHtml(raw.message),
  };
  const phoneHref = raw.phone.replace(/[^0-9+]/g, '');
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nouveau message — Formaroute</title>
</head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#2563eb,#1e3a8a);padding:32px 40px;text-align:center;">
              <p style="margin:0;color:rgba(255,255,255,0.8);font-size:13px;letter-spacing:2px;text-transform:uppercase;">Auto-école</p>
              <h1 style="margin:6px 0 0;color:#ffffff;font-size:28px;font-weight:800;letter-spacing:-0.5px;">
                Forma<span style="color:#fca5a5;">route</span>
              </h1>
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td style="background:#ffffff;padding:32px 40px 8px;">
              <h2 style="margin:0;color:#0f172a;font-size:20px;font-weight:700;">Nouveau message de contact</h2>
              <p style="margin:8px 0 0;color:#64748b;font-size:14px;">Reçu le ${new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="background:#ffffff;padding:24px 40px 32px;">

              <!-- Info bloc -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;margin-bottom:24px;">
                <tr>
                  <td style="background:#f1f5f9;padding:12px 16px;border-bottom:1px solid #e2e8f0;">
                    <p style="margin:0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#64748b;">Coordonnées</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:4px 0;width:120px;color:#64748b;font-size:13px;font-weight:600;">Nom</td>
                        <td style="padding:4px 0;color:#0f172a;font-size:14px;font-weight:700;">${data.firstName} ${data.lastName}</td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;color:#64748b;font-size:13px;font-weight:600;">Email</td>
                        <td style="padding:4px 0;">
                          <a href="mailto:${encodeURIComponent(raw.email)}" style="color:#2563eb;font-size:14px;text-decoration:none;">${data.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;color:#64748b;font-size:13px;font-weight:600;">Téléphone</td>
                        <td style="padding:4px 0;">
                          <a href="tel:${phoneHref}" style="color:#2563eb;font-size:14px;text-decoration:none;">${data.phone}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Demande bloc -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;margin-bottom:24px;">
                <tr>
                  <td style="background:#f1f5f9;padding:12px 16px;border-bottom:1px solid #e2e8f0;">
                    <p style="margin:0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#64748b;">Demande</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:4px 0;width:120px;color:#64748b;font-size:13px;font-weight:600;">Sujet</td>
                        <td style="padding:4px 0;color:#0f172a;font-size:14px;">${subjectLabel}</td>
                      </tr>
                      ${
                        data.formation
                          ? `
                      <tr>
                        <td style="padding:4px 0;color:#64748b;font-size:13px;font-weight:600;">Formation</td>
                        <td style="padding:4px 0;color:#0f172a;font-size:14px;">${data.formation}</td>
                      </tr>`
                          : ''
                      }
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;">
                <tr>
                  <td style="background:#f1f5f9;padding:12px 16px;border-bottom:1px solid #e2e8f0;">
                    <p style="margin:0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#64748b;">Message</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px;">
                    <p style="margin:0;color:#334155;font-size:14px;line-height:1.7;white-space:pre-line;">${data.message}</p>
                  </td>
                </tr>
              </table>

              <!-- Reply CTA -->
              <div style="margin-top:28px;text-align:center;">
                <a href="mailto:${encodeURIComponent(raw.email)}?subject=${encodeURIComponent(`Re: ${subjectLabel}`)}" style="display:inline-block;background:#2563eb;color:#ffffff;font-size:14px;font-weight:700;padding:12px 28px;border-radius:8px;text-decoration:none;">
                  Répondre à ${data.firstName}
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f1f5f9;padding:20px 40px;text-align:center;border-top:1px solid #e2e8f0;">
              <p style="margin:0;color:#94a3b8;font-size:12px;">
                ${site.name} — ${site.address.full}<br/>
                <a href="https://formaroute.fr" style="color:#2563eb;text-decoration:none;">formaroute.fr</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'inconnu';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        success: false,
        error: 'Trop de messages envoyés. Réessayez dans quelques minutes ou appelez-nous.',
      },
      { status: 429 }
    );
  }

  let validatedData: z.infer<typeof contactSchema>;
  try {
    validatedData = contactSchema.parse(await request.json());
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: 'Données invalides' }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Requête invalide' }, { status: 400 });
  }

  // Robot détecté par le champ piège : on répond « OK » sans rien envoyer.
  if (validatedData.website) {
    return NextResponse.json({ success: true, message: 'Votre message a été envoyé avec succès.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY manquante');
    return NextResponse.json(
      { success: false, error: "L'envoi est momentanément indisponible." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    // Resend ne lève pas d'exception en cas d'échec : il renvoie { error }.
    const { error } = await resend.emails.send({
      // Expéditeur sur un domaine vérifié dans Resend (ex. « Formaroute <contact@formaroute.fr> »).
      // L'adresse de test onboarding@resend.dev ne délivre qu'au propriétaire du compte Resend.
      from: process.env.CONTACT_FROM || 'Formaroute <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || site.contact.email],
      replyTo: validatedData.email,
      subject: `[Formaroute] ${subjectLabels[validatedData.subject]} — ${validatedData.firstName} ${validatedData.lastName}`,
      html: buildEmailHtml(validatedData),
    });

    if (error) {
      console.error('Contact form: échec Resend', error);
      return NextResponse.json(
        {
          success: false,
          error: "Votre message n'a pas pu être envoyé. Merci de réessayer ou de nous appeler.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: 'Votre message a été envoyé avec succès.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
