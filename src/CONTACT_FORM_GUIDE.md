# Contact Form & Submission Management Guide

## Overview

Your Xavira Tech Labs website now has a fully functional contact form that stores visitor submissions in Supabase. Visitors can reach the contact form in multiple ways, and you can view all submissions through an admin panel.

## How It Works

### 1. Navigation to Contact Page

Visitors can reach the contact page through:

- **Navbar**: Click "Contact" in the navigation menu
- **Services Page**: Click "Request a Consultation" button at the bottom
- **Portfolio Page**: Click "Get In Touch" button at the bottom
- **Direct Navigation**: Any custom link you add can navigate to contact page

### 2. Form Submission Process

When a visitor fills out the contact form:

1. They enter their name, email, service interest, and message
2. They click "Send Message"
3. The form shows "Sending..." while submitting
4. Data is sent to your Supabase database
5. Success notification appears: "Message Sent! We'll get back to you soon."
6. Form fields are cleared for new submissions

If there's an error:
- Error notification appears: "Submission Failed. Please try again or email us directly."
- Visitor can try again or use the email link provided

### 3. Viewing Submissions (Admin Panel)

**To access the admin panel:**
- Scroll to the footer of any page
- Click the small "Admin" link in the footer (bottom left)
- This takes you to the admin panel

**Admin Panel Features:**
- View all form submissions in chronological order (newest first)
- See submission details: name, email, service interest, message, and timestamp
- Refresh submissions with the "Refresh" button
- Export all submissions to CSV with the "Export CSV" button
- Reply to visitors directly via email with "Reply via Email" button

### 4. Email Integration

Each submission in the admin panel includes:
- Direct mailto link on the email address
- "Reply via Email" button that opens your email client with:
  - Pre-filled recipient email
  - Subject line: "Re: Your inquiry about [service]"

## Setup Required

**IMPORTANT**: Before the contact form will work, you must set up the Supabase database table.

Follow these steps:

1. Open the file `SUPABASE_SETUP.md` in this project
2. Follow all instructions to create the database table
3. The setup takes about 5 minutes

Without this setup, form submissions will fail with an error message.

## Testing the System

After setting up Supabase:

1. Go to the Contact page on your website
2. Fill out the form with test data
3. Click "Send Message"
4. You should see a success notification
5. Go to the Admin panel (footer → Admin link)
6. You should see your test submission

If you don't see the submission:
- Check that you completed all steps in SUPABASE_SETUP.md
- Check the browser console for any error messages
- Verify your Supabase credentials are correct in `/lib/supabase.ts`

## Data Structure

Each submission contains:
- **Name**: Visitor's full name
- **Email**: Visitor's email address
- **Phone**: Visitor's phone number (optional)
- **Service**: Which service they're interested in
  - General Inquiry
  - AI Systems
  - Web 3.0
  - Backend Scalability
  - Design Services
  - Cybersecurity
  - Innovation Labs
- **Message**: Their detailed message/inquiry
- **Timestamp**: When the form was submitted

## Security Features

✅ Row Level Security (RLS) enabled
✅ Anonymous users can only INSERT (submit forms)
✅ Authenticated users can view submissions
✅ Form validation (required fields)
✅ Email format validation
✅ SQL injection protection via Supabase client

## Export & Backup

You can export all submissions at any time:
1. Go to Admin Panel
2. Click "Export CSV"
3. Save the file to your computer
4. Open in Excel, Google Sheets, or any spreadsheet app

The CSV includes all submission data with proper formatting.

## Notifications Setup (Optional)

Want to receive email notifications when someone submits the form?

See the "Optional: Set Up Email Notifications" section in SUPABASE_SETUP.md

Options include:
- Database Webhooks
- Supabase Edge Functions
- Third-party services (Zapier, Make.com)

## Troubleshooting

### "Submission Failed" Error
- Check that the Supabase table is set up correctly
- Verify your API keys in `/lib/supabase.ts`
- Check the browser console for detailed error messages

### Can't See Submissions in Admin Panel
- Make sure you're authenticated in Supabase (or adjust RLS policies)
- Try clicking the "Refresh" button
- Check that submissions exist in Supabase Table Editor

### Button Not Navigating to Contact Page
- Make sure the page is fully loaded
- Check that the button is not inside a form (which would submit instead)
- Look for JavaScript errors in the browser console

## Privacy & Compliance

⚠️ **Important Notes:**
- This setup is for demonstration and basic business inquiries
- For production sites handling sensitive data, implement additional security
- Consider adding CAPTCHA to prevent spam
- Implement rate limiting for production use
- Add a privacy policy and terms of service
- Comply with GDPR, CCPA, or other relevant data protection laws
- Figma Make is not designed for collecting sensitive PII

## Support

For issues or questions:
- Company Email: xavira.group@gmail.com
- CEO & Founder: vishnuvardhanburri19@gmail.com
- Check Supabase documentation: https://supabase.com/docs
- Review browser console for error messages

---

**Created for Xavira Tech Labs**  
Part of Xavira Group  
Founded by Vishnu Vardhan Burri
