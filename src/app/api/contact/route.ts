import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(1),
  formation: z.string().optional(),
  message: z.string().min(10),
  consent: z.boolean().refine((val) => val === true),
});

const subjectLabels: Record<string, string> = {
  info: 'Demande d\'informations',
  inscription: 'Inscription',
  devis: 'Demande de devis',
  reclamation: 'Réclamation',
  autre: 'Autre',
};

function buildEmailHtml(data: z.infer<typeof contactSchema>): string {
  const subjectLabel = subjectLabels[data.subject] || data.subject;
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
                          <a href="mailto:${data.email}" style="color:#2563eb;font-size:14px;text-decoration:none;">${data.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;color:#64748b;font-size:13px;font-weight:600;">Téléphone</td>
                        <td style="padding:4px 0;">
                          <a href="tel:${data.phone}" style="color:#2563eb;font-size:14px;text-decoration:none;">${data.phone}</a>
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
                      ${data.formation ? `
                      <tr>
                        <td style="padding:4px 0;color:#64748b;font-size:13px;font-weight:600;">Formation</td>
                        <td style="padding:4px 0;color:#0f172a;font-size:14px;">${data.formation}</td>
                      </tr>` : ''}
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
                <a href="mailto:${data.email}?subject=Re: ${subjectLabel}" style="display:inline-block;background:#2563eb;color:#ffffff;font-size:14px;font-weight:700;padding:12px 28px;border-radius:8px;text-decoration:none;">
                  Répondre à ${data.firstName}
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f1f5f9;padding:20px 40px;text-align:center;border-top:1px solid #e2e8f0;">
              <p style="margin:0;color:#94a3b8;font-size:12px;">
                Formaroute — 4 avenue Jean Jaurès, 95330 Domont<br/>
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
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Formaroute <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'formaroute95@gmail.com'],
      replyTo: validatedData.email,
      subject: `[Formaroute] ${subjectLabels[validatedData.subject] || validatedData.subject} — ${validatedData.firstName} ${validatedData.lastName}`,
      html: buildEmailHtml(validatedData),
    });

    return NextResponse.json(
      { success: true, message: 'Votre message a été envoyé avec succès.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Données invalides', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
