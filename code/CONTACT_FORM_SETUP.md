# Contact Form Setup Guide

The contact form is now functional with a Next.js API route. To make it actually send emails, you need to configure an email service.

## Current Implementation

The form currently:
- ✅ Validates all fields
- ✅ Shows loading/success/error states
- ✅ Logs submissions to console (for testing)

## To Enable Email Sending

You have several options:

### Option 1: Resend (Recommended for Next.js)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Install Resend:
   ```bash
   npm install resend
   ```
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```
5. Update `src/app/api/contact/route.ts` - uncomment the Resend code and add:
   ```typescript
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   await resend.emails.send({
     from: 'contact@yourdomain.com',
     to: 'bkranthinaidu@yahoo.com',
     subject: `Contact Form: ${subject}`,
     text: emailContent,
   });
   ```

### Option 2: EmailJS (Client-side, No Backend)

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Install:
   ```bash
   npm install @emailjs/browser
   ```
3. Create a service and template in EmailJS dashboard
4. Update `ContactForm.tsx` to use EmailJS instead of API route

### Option 3: Nodemailer with SMTP

1. Install:
   ```bash
   npm install nodemailer
   ```
2. Configure SMTP settings in `.env.local`
3. Update the API route to use Nodemailer

### Option 4: Formspree (Easiest, Third-party)

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update form action to point to Formspree endpoint

## Testing

Currently, form submissions are logged to the console. Check your server logs to see submissions.

## Security Notes

- Add rate limiting to prevent spam
- Consider adding reCAPTCHA
- Validate and sanitize all inputs (already done)
- Use environment variables for sensitive data

