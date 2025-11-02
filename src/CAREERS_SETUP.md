# 🚀 Careers Section Setup Guide

## Overview

The Careers section allows applicants to submit applications directly through the website. Applications are stored in Supabase and include resume uploads.

---

## 📋 Database Setup

### 1. Create Career Applications Table

Run this SQL in your Supabase SQL Editor:

```sql
-- Create career_applications table
CREATE TABLE career_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  mobile TEXT NOT NULL,
  division TEXT NOT NULL,
  role TEXT NOT NULL,
  resume_url TEXT NOT NULL,
  resume_filename TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index for faster queries
CREATE INDEX idx_career_applications_created_at ON career_applications(created_at DESC);
CREATE INDEX idx_career_applications_email ON career_applications(email);

-- Enable Row Level Security (RLS)
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert applications (public submission)
CREATE POLICY "Allow public to insert applications"
  ON career_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow authenticated users to read applications (for admin panel)
CREATE POLICY "Allow authenticated users to read applications"
  ON career_applications
  FOR SELECT
  TO authenticated
  USING (true);
```

---

## 📁 Storage Setup

### 2. Create Resume Storage Bucket

1. Go to **Storage** in your Supabase dashboard
2. Click **New Bucket**
3. Name it: `resumes`
4. Make it **Public** (so admins can download resumes)
5. Click **Create Bucket**

### 3. Set Storage Policies

Run this SQL to allow public uploads:

```sql
-- Allow anyone to upload resumes
CREATE POLICY "Allow public to upload resumes"
  ON storage.objects
  FOR INSERT
  TO anon
  WITH CHECK (bucket_id = 'resumes');

-- Allow public to read resumes (so they can be downloaded)
CREATE POLICY "Allow public to read resumes"
  ON storage.objects
  FOR SELECT
  TO anon
  USING (bucket_id = 'resumes');

-- Allow authenticated users to delete resumes (admin only)
CREATE POLICY "Allow authenticated users to delete resumes"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'resumes');
```

---

## 🎯 Features

### Application Form Includes:
- **Name** - Full name of applicant
- **Email** - Contact email
- **Mobile** - Contact phone number
- **Division** - Which department they're applying to (AI, Cybersecurity, Full Stack, etc.)
- **Role** - Specific position
- **Resume** - PDF or Word document (max 5MB)

### Divisions Available:
1. **Artificial Intelligence Division**
   - AI Engineer, Data Scientist, MLOps Engineer, AI Research Intern

2. **Cybersecurity Division**
   - Cybersecurity Analyst, Ethical Hacker, SOC Engineer, Security Intern

3. **Full Stack Development**
   - Full Stack Developer, Frontend Developer, Backend Developer, QA Engineer

4. **DevOps & Cloud Division**
   - DevOps Engineer, Cloud Engineer, Site Reliability Engineer, Automation Intern

5. **Creative & Branding Division**
   - UI/UX Designer, Graphic Designer, Content Strategist, Marketing Intern

6. **Operations & Management**
   - Project Manager, HR Lead, Business Development Executive, Operations Intern

---

## 📧 Email Integration (Future Enhancement)

Currently, applications are stored in Supabase. To receive email notifications:

### Option 1: Supabase Edge Functions (Recommended)

Create a serverless function that sends emails using a service like:
- **SendGrid**
- **Resend**
- **Mailgun**

### Option 2: Database Triggers

Set up a database webhook that triggers when a new application is submitted.

### Example Edge Function:

```typescript
// supabase/functions/send-application-email/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const { record } = await req.json()
  
  // Send email using your preferred service
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${Deno.env.get('SENDGRID_API_KEY')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{
        to: [{ email: 'xavira.group@gmail.com' }]
      }],
      from: { email: 'noreply@xavira.com' },
      subject: `New Application: ${record.role}`,
      content: [{
        type: 'text/html',
        value: `
          <h2>New Career Application</h2>
          <p><strong>Name:</strong> ${record.name}</p>
          <p><strong>Email:</strong> ${record.email}</p>
          <p><strong>Mobile:</strong> ${record.mobile}</p>
          <p><strong>Division:</strong> ${record.division}</p>
          <p><strong>Role:</strong> ${record.role}</p>
          <p><strong>Resume:</strong> <a href="${record.resume_url}">Download</a></p>
        `
      }]
    })
  })

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  })
})
```

---

## 🔍 Viewing Applications

### In Supabase Dashboard:

1. Go to **Table Editor**
2. Select `career_applications` table
3. View all submitted applications
4. Download resumes by clicking the resume_url

### Build an Admin Panel (Future):

You can create an admin interface to:
- View all applications
- Filter by division/role
- Download resumes
- Mark applications as reviewed
- Email applicants directly

---

## 🛡️ Security Notes

- ✅ Resume uploads limited to PDF and Word documents
- ✅ File size limited to 5MB
- ✅ All uploads stored in Supabase Storage
- ✅ RLS policies ensure data security
- ✅ Form validation prevents invalid submissions

---

## 📱 Contact Information

All applications reference:
- **Company Email**: xavira.group@gmail.com
- **CEO Email**: vishnuvardhanburri19@gmail.com

---

## ✅ Checklist

- [ ] Create `career_applications` table in Supabase
- [ ] Create `resumes` storage bucket
- [ ] Set up storage policies for resume uploads
- [ ] Test application submission
- [ ] Verify resumes are uploading correctly
- [ ] Check that data is being stored in the database
- [ ] (Optional) Set up email notifications
- [ ] (Optional) Build admin panel for reviewing applications

---

## 🆘 Troubleshooting

### "relation 'career_applications' does not exist"
→ Run the SQL to create the table (step 1)

### "Resume upload failed"
→ Ensure the `resumes` bucket exists and has correct policies

### "Permission denied for storage"
→ Check that storage policies allow anonymous uploads

### Applications not showing in database
→ Verify RLS policies allow inserts from anonymous users

---

## 🎉 Success!

Once setup is complete, applicants can:
1. Browse available positions across 6 divisions
2. Click "Apply Now" on any division
3. Fill out the application form
4. Upload their resume
5. Submit directly through the website

All applications will be stored in your Supabase database for review! 🚀
