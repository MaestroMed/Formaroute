import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // In production, send email via Resend
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Formaroute <contact@formaroute.fr>',
    //   to: process.env.CONTACT_EMAIL || 'contact@formaroute.fr',
    //   replyTo: validatedData.email,
    //   subject: `Nouveau message - ${validatedData.subject}`,
    //   html: `
    //     <h2>Nouveau message de contact</h2>
    //     <p><strong>Nom:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Téléphone:</strong> ${validatedData.phone}</p>
    //     <p><strong>Sujet:</strong> ${validatedData.subject}</p>
    //     ${validatedData.formation ? `<p><strong>Formation:</strong> ${validatedData.formation}</p>` : ''}
    //     <p><strong>Message:</strong></p>
    //     <p>${validatedData.message}</p>
    //   `,
    // });

    // Log for development
    console.log('Contact form submission:', validatedData);

    return NextResponse.json(
      {
        success: true,
        message: 'Votre message a été envoyé avec succès.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Données invalides',
          details: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Une erreur est survenue. Veuillez réessayer.',
      },
      { status: 500 }
    );
  }
}
