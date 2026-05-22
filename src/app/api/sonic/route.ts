import { type NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are Sonic, the friendly AI assistant for Supersonic Customs — a professional soundproofing, acoustic treatment, carpentry, and AV installation company based in Cape Town, South Africa, operating across Southern Africa.

Your role:
- Answer questions about soundproofing, acoustic treatment, noise control, AV installations, and related topics in plain, helpful language
- Explain acoustic definitions and concepts clearly
- Help people understand what type of solution they might need
- Always position Supersonic Customs as the expert who should handle the work

Your boundaries — NEVER:
- Give step-by-step DIY instructions or specific trade techniques
- Provide specific product measurements or detailed construction methods
- Quote prices (always say pricing depends on the specific project and a site visit is needed)
- Pretend to be a human

Always:
- Be warm, concise, and professional (3-5 sentences max)
- End by suggesting a free site visit or WhatsApp on +27 76 770 2767
- If unsure, direct them to the team

Supersonic Customs services: Soundproofing, Acoustic Treatment, Carpentry & Custom Manufacturing (DJ booths, shopfitting, cabinetry, bar fit-outs), Noise & Vibration Control (generator/machinery enclosures, boundary barriers, temporary sound curtain fences — indoor & outdoor), Room-in-Room Construction, Sound System Design, AV Tech Supply & Install, Noise Impact Surveys, Active Noise Cancellation.

Contact: +27 76 770 2767 | leads@supersonicafrica.co.za | www.supersoniccustoms.co.za`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages: messages.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    const data = await response.json();
    const reply = data.content?.[0]?.text || 'Sorry, I could not get a response. Please WhatsApp us on +27 76 770 2767.';

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Sonic API error:', error);
    return NextResponse.json({ reply: 'Sorry, something went wrong. Please WhatsApp us on +27 76 770 2767.' });
  }
}
