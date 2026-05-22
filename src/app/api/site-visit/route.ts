import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, preferredDate, preferredTime, location, projectType, details } = body;

    if (!name || !email || !phone || !preferredDate || !preferredTime || !location || !projectType) {
      return NextResponse.json({ error: 'Please fill in all required fields' }, { status: 400 });
    }

    const formattedDate = new Date(preferredDate).toLocaleDateString('en-ZA', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    const formspreeEndpoint = process.env.FORMSPREE_SITE_VISIT_ENDPOINT || process.env.FORMSPREE_ENDPOINT;

    if (formspreeEndpoint) {
      try {
        await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone,
            _replyto: email,
            _subject: `New Site Visit Request - ${name} - ${formattedDate}`,
            preferred_date: formattedDate,
            preferred_time: preferredTime,
            site_location: location,
            project_type: projectType,
            project_description: details || 'Not provided',
          }),
        });
      } catch (err) {
        console.error('Formspree error:', err);
      }
    }

    return NextResponse.json(
      { message: "Thank you! Your site visit request has been received. We'll contact you within 24 hours to confirm your appointment." },
      { status: 200 }
    );

  } catch (error) {
    console.error('Site visit API error:', error);
    return NextResponse.json({ error: 'Internal server error. Please try again.' }, { status: 500 });
  }
}
