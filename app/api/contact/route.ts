import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, product, type } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Send email using SendGrid, Resend, or other email service
    // For now, just log to console
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      message,
      product,
      type,
      timestamp: new Date().toISOString()
    });

    // In production, you would send an email here:
    /*
    await sendEmail({
      to: 'info@shureprint.com',
      subject: type === 'sample'
        ? `Sample Request: ${product || 'General Inquiry'}`
        : `Quote Request: ${product || 'General Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Type:</strong> ${type || 'General'}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Product:</strong> ${product || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message || 'No message'}</p>
      `
    });
    */

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us! We will get back to you within 24 hours.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}
