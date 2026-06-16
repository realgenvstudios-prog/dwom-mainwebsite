import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, whatsapp, area, email } = body;

    if (!name || !whatsapp || !area) {
      return NextResponse.json(
        { success: false, message: 'Name, WhatsApp number, and area are required.' },
        { status: 400 }
      );
    }

    const foundersEmail = process.env.FOUNDERS_EMAIL;
    const gmailUser = process.env.GMAIL_USER || foundersEmail;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (foundersEmail && gmailUser && gmailAppPassword) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: gmailUser, pass: gmailAppPassword },
      });

      const whatsappLink = `https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`;

      const htmlBody = [
        '<div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;">',
        '<h2 style="color:#e53935;">New Beta Access Application</h2>',
        '<p style="color:#666;">Submitted via dwom.org</p>',
        '<hr style="border:none;border-top:1px solid #eee;margin:16px 0;" />',
        `<p><strong>Name:</strong> ${name}</p>`,
        `<p><strong>WhatsApp:</strong> ${whatsapp}</p>`,
        `<p><strong>Area:</strong> ${area}</p>`,
        email ? `<p><strong>Email:</strong> ${email}</p>` : '<p><em>No email provided</em></p>',
        `<br /><a href="https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}" style="display:inline-block;background:#25D366;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">Open WhatsApp Chat</a>`,
        '</div>',
      ].join('');

      try {
        await transporter.sendMail({
          from: `"DWOM Beta" <${gmailUser}>`,
          to: foundersEmail,
          subject: `New Beta Application from ${name}`,
          html: htmlBody,
        });
        console.log('Email sent to', foundersEmail);
      } catch (emailError) {
        console.error('Email send failed (non-fatal):', emailError);
      }
    } else {
      console.warn('Email not sent: GMAIL_APP_PASSWORD not configured');
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (apiKey && email && email.includes('@')) {
      const listId = parseInt(process.env.BREVO_BETA_LIST_ID || process.env.BREVO_WAITLIST_LIST_ID || '3', 10);
      await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'api-key': apiKey },
        body: JSON.stringify({
          email,
          attributes: {
            FIRSTNAME: name.split(' ')[0],
            LASTNAME: name.split(' ').slice(1).join(' '),
            WHATSAPP: whatsapp,
            AREA: area,
          },
          listIds: [listId],
          updateEnabled: true,
        }),
      });
    }

    console.log('Beta request received:', { name, whatsapp, area });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Beta request error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
