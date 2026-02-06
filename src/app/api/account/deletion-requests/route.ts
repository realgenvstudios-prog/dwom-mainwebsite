import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log('📧 [DeleteAccount API] Received deletion request:', {
      phone: body.phoneNumber,
      email: body.email,
    });

    // Get client IP
    const ip = req.headers.get('x-forwarded-for') ||
      req.headers.get('x-real-ip') ||
      'unknown';

    // Send to backend
    const backendResponse = await fetch(`${BACKEND_URL}/account/request-deletion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: body.phoneNumber,
        email: body.email,
        reason: body.reason,
        ipAddress: ip,
        requestedAt: new Date().toISOString(),
      }),
    });

    if (!backendResponse.ok) {
      const errorData = await backendResponse.json();
      console.error('❌ [DeleteAccount API] Backend error:', errorData);
      return NextResponse.json(
        { success: false, message: errorData.message || 'Failed to process deletion request' },
        { status: backendResponse.status }
      );
    }

    const result = await backendResponse.json();
    console.log('✅ [DeleteAccount API] Deletion request processed successfully');

    return NextResponse.json(result, { status: 201 });
  } catch (error: any) {
    console.error('❌ [DeleteAccount API] Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
