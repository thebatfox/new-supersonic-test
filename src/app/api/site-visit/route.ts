import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      preferredDate,
      preferredTime,
      location,
      projectType,
      details
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !preferredDate || !preferredTime || !location || !projectType) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Format the date
    const formattedDate = new Date(preferredDate).toLocaleDateString('en-ZA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Send via Formspree
    const formspreeEndpoint = process.env.FORMSPREE_SITE_VISIT_ENDPOINT || process.env.FORMSPREE_ENDPOINT;

    if (formspreeEndpoint) {
      try {
        const formspreeRes = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone,
            _replyto: email,
            _subject: `Site Visit Request - ${name} - ${formattedDate}`,
            preferred_date: formattedDate,
            preferred_time: preferredTime,
            site_location: location,
            project_type: projectType,
            project_description: details || 'Not provided',
          }),
        });

        if (formspreeRes.ok) {
          console.log('Site visit submitted via Formspree:', { name, email });
        } else {
          console.error('Formspree failed:', await formspreeRes.text());
        }
      } catch (err) {
        console.error('Formspree error:', err);
      }
    }

    // Always return success
    return NextResponse.json(
      { message: 'Site visit request submitted successfully! We\'ll contact you within 24 hours to confirm.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Site visit API error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}
