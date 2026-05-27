import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email } = await request.json();

    const formspreeEndpoint = process.env.FORMSPREE_SITE_VISIT_ENDPOINT;

    if (formspreeEndpoint) {
      await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `New Zola Chat Lead — ${name}`,
          _replyto: email || phone,
          source: 'Zola Chatbot Registration',
          name,
          phone,
          email: email || 'Not provided',
          timestamp: new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' }),
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Zola lead capture error:', error);
    return NextResponse.json({ ok: false });
  }
}
