import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { message: 'Please fill in all required fields.' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { message: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        // Option 1: Send email using a service (you'll need to configure this)
        // For now, we'll log it and return success
        // You can integrate with:
        // - Resend (recommended for Next.js)
        // - SendGrid
        // - Nodemailer with SMTP
        // - AWS SES

        // Example email content (will be used when email service is configured)
        const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject}

Message:
${message}

---
This message was sent from the Khyathi Associates website contact form.
        `;

        // TODO: Replace this with actual email sending logic
        // For now, we'll just log it (you should implement actual email sending)
        console.log('Contact Form Submission:', {
            name,
            email,
            phone,
            subject,
            message,
            emailContent, // Include emailContent in log for reference
        });

        // In production, you would send an email here
        // Example with Resend:
        /*
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: 'contact@khyathiassociates.com',
            to: 'bkranthinaidu@yahoo.com',
            subject: `Contact Form: ${subject}`,
            text: emailContent,
        });
        */

        return NextResponse.json(
            { message: 'Message sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { message: 'Internal server error. Please try again later.' },
            { status: 500 }
        );
    }
}

