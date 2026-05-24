import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'A valid email address is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = parseInt(process.env.BREVO_WAITLIST_LIST_ID || '3', 10);

    if (!apiKey) {
      console.error('❌ [Waitlist] BREVO_API_KEY is not set');
      return NextResponse.json({ success: false, message: 'Server configuration error' }, { status: 500 });
    }

    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (!brevoRes.ok) {
      const err = await brevoRes.json();
      console.error('❌ [Waitlist] Brevo error:', err);
      return NextResponse.json({ success: false, message: 'Failed to add to waitlist' }, { status: 500 });
    }

    console.log('✅ [Waitlist] Added to Brevo:', email);
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('❌ [Waitlist] Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
