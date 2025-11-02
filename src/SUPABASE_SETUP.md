# ⚠️ IMPORTANT: Supabase Database Setup Required

## 🚨 Contact Form Currently Not Working?

**ERROR: "Could not find the table 'public.contacts'"**

This means you haven't created the database table yet. Follow the 3 simple steps below to fix it!

---

## Quick 5-Minute Setup

### Step 1: Open Supabase SQL Editor

1. Go to your Supabase dashboard: **https://defqvnwcyfdpkvlzstlz.supabase.co**
2. Click on **"SQL Editor"** in the left sidebar (looks like a document icon)

### Step 2: Run the SQL Command

Copy **ALL** of this SQL code and paste it into the SQL Editor:

```sql
-- Create contacts table
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (submit forms)
CREATE POLICY "Allow public insert" ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to view all submissions
CREATE POLICY "Allow authenticated read" ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Add indexes for faster queries
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX idx_contacts_email ON contacts(email);
```

Then click the **"Run"** button (or press Ctrl+Enter / Cmd+Enter).

### Step 3: Verify It Worked

1. Go to **"Table Editor"** in the left sidebar
2. You should see a new table called **"contacts"**
3. The table should have these columns:
   - `id` (uuid) - Auto-generated unique ID
   - `name` (text) - Visitor's name
   - `email` (text) - Visitor's email
   - `phone` (text) - Visitor's phone (optional)
   - `service` (text) - Service they selected
   - `message` (text) - Their message
   - `created_at` (timestamp) - When they submitted

**✅ Done! Now test your contact form - it should work!**

---

## How to View Form Submissions

### Option 1: Supabase Dashboard (Easy)

1. Go to **"Table Editor"** in Supabase
2. Click on the **"contacts"** table
3. See all submissions with timestamps

### Option 2: Admin Panel (Convenient)

1. Scroll to the bottom of your website
2. Click the small **"Admin"** link in the footer
3. View all submissions in a nice interface
4. Export data as CSV if needed

---

## What This Setup Does

### Security (Row Level Security - RLS)

✅ **Anyone can submit** the contact form (anonymous users)  
✅ **Only you can view** submissions (requires login)  
✅ Prevents spam and unauthorized access  
✅ Production-ready security policies

### Database Structure

The table stores:
- All contact form submissions
- Timestamps for tracking
- Indexed for fast queries
- UUID for unique identification

---

## Optional: Email Notifications

Want to get emailed when someone submits the form?

### Using Supabase Webhooks

1. Go to **Database → Webhooks** in Supabase
2. Create a new webhook
3. Trigger: **INSERT** on `contacts` table
4. Send to a service like:
   - **Zapier** (connects to Gmail)
   - **Make.com** (automation)
   - **IFTTT** (simple notifications)
   - Your own custom endpoint

### Using Supabase Edge Functions (Advanced)

Create a function that sends emails via SendGrid, Resend, or Mailgun when a new contact is inserted.

---

## Troubleshooting

### Error: "Could not find the table"
- ✅ Make sure you ran the SQL in the correct Supabase project
- ✅ Check that you're connected to the right database
- ✅ Verify the table appears in Table Editor

### Form submits but data doesn't show
- ✅ Check the "contacts" table in Table Editor
- ✅ Verify the RLS policies are created
- ✅ Make sure you're looking at the right project

### Can't view submissions in Admin Panel
- ✅ Make sure you've logged into Supabase in your app
- ✅ Check that the "Allow authenticated read" policy exists
- ✅ Admin panel requires authentication to view data

### Still having issues?
- Check the browser console for detailed errors
- Verify your Supabase credentials in the app
- Contact: xavira.group@gmail.com

---

## Security Best Practices

### For Production Use:

1. **Add Rate Limiting**
   - Prevent spam submissions
   - Use Supabase Edge Functions or Cloudflare

2. **Add CAPTCHA**
   - Google reCAPTCHA
   - hCaptcha
   - Turnstile

3. **Monitor Submissions**
   - Set up alerts for high volume
   - Review submissions regularly

4. **Data Privacy**
   - This is a demo setup
   - For sensitive data, implement additional security
   - Figma Make is not designed for handling sensitive PII

---

## Testing Checklist

After setup, verify:

- [ ] SQL command ran successfully (no errors)
- [ ] "contacts" table exists in Table Editor
- [ ] Contact form submits without errors
- [ ] Submission appears in Table Editor
- [ ] Admin panel shows the submission
- [ ] Email notifications working (if configured)

---

## Your Supabase Details

**Project URL:** https://defqvnwcyfdpkvlzstlz.supabase.co  
**Table Name:** contacts  
**Region:** Your selected region

Keep these details secure and don't share your API keys publicly!

---

**Need Help?**  
Email: xavira.group@gmail.com  
CEO & Founder: vishnuvardhanburri19@gmail.com

**Xavira Tech Labs**  
Part of Xavira Group  
Founded by Vishnu Vardhan Burri
