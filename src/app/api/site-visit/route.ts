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
        // Send notification to Supersonic Customs team
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

        // Send confirmation email to the customer using Formspree
        await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            name,
            _replyto: 'leads@supersonicafrica.co.za',
            _subject: `Your Site Visit Request - Supersonic Customs`,
            to: email,
            message: `Hi ${name},\n\nThank you for booking a site visit with Supersonic Customs!\n\nHere are your booking details:\n- Date: ${formattedDate}\n- Time: ${preferredTime}\n- Location: ${location}\n- Project Type: ${projectType}\n\nOur team will contact you within 24 hours to confirm your appointment.\n\nIf you have any questions, please WhatsApp us on +27 76 770 2767.\n\nBest regards,\nThe Supersonic Customs Team\nwww.supersoniccustoms.co.za`,
          }),
        });

      } catch (err) {
        console.error('Formspree error:', err);
      }
    }

    return NextResponse.json(
      { message: "Site visit request submitted! We'll contact you within 24 hours. A confirmation has been sent to your email." },
      { status: 200 }
    );

  } catch (error) {
    console.error('Site visit API error:', error);
    return NextResponse.json({ error: 'Internal server error. Please try again.' }, { status: 500 });
  }
}
