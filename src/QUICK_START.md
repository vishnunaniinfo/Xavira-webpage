# ⚡ Quick Start Guide

**Get your Xavira Tech Labs website running in 10 minutes!**

---

## 🚨 STEP 1: Setup Database Tables (REQUIRED)

### The Problem
Your contact form and careers application system show errors:
```
"Could not find the table 'public.contacts'"
"Could not find the table 'public.career_applications'"
```

### The Solution (10 Minutes)

1. **Open Supabase:**  
   👉 https://defqvnwcyfdpkvlzstlz.supabase.co

2. **Click "SQL Editor"** in the left sidebar

3. **Copy this code (for BOTH tables):**
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

   -- Enable Row Level Security
   ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
   ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;

   -- Allow public to submit forms
   CREATE POLICY "Allow public insert" ON contacts
     FOR INSERT TO anon WITH CHECK (true);
   CREATE POLICY "Allow public to insert applications" ON career_applications
     FOR INSERT TO anon WITH CHECK (true);

   -- Allow authenticated users to view
   CREATE POLICY "Allow authenticated read" ON contacts
     FOR SELECT TO authenticated USING (true);
   CREATE POLICY "Allow authenticated users to read applications" ON career_applications
     FOR SELECT TO authenticated USING (true);

   -- Add indexes
   CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);
   CREATE INDEX idx_contacts_email ON contacts(email);
   CREATE INDEX idx_career_applications_created_at ON career_applications(created_at DESC);
   CREATE INDEX idx_career_applications_email ON career_applications(email);
   ```

4. **Paste it into the SQL Editor**

5. **Click "Run"** (or press Ctrl+Enter)

6. **Look for:** ✅ "Success. No rows returned"

7. **Setup Storage for Resumes:**
   - Go to **Storage** in left sidebar
   - Click **New Bucket**
   - Name: `resumes`
   - Make it **Public**
   - Click **Create Bucket**
   
8. **Add Storage Policies (run in SQL Editor):**
   ```sql
   -- Allow public to upload resumes
   CREATE POLICY "Allow public to upload resumes"
     ON storage.objects FOR INSERT TO anon
     WITH CHECK (bucket_id = 'resumes');

   -- Allow public to read resumes
   CREATE POLICY "Allow public to read resumes"
     ON storage.objects FOR SELECT TO anon
     USING (bucket_id = 'resumes');
   ```

---

## ✅ STEP 2: Test It

### Test Contact Form:
1. Go to your website's **Contact page**
2. Fill out the form
3. Click "Send Message"
4. You should see: 🎉 **"Message Sent!"** (green notification)

### Test Careers Application:
1. Go to **Careers page**
2. Click **Apply Now** on any division
3. Fill out the form and upload a resume (PDF/Word, max 5MB)
4. Click "Submit Application"
5. You should see: 🎉 **"Application submitted successfully!"**

---

## 👀 STEP 3: View Submissions

### Contact Form Submissions:
**Method 1:** Supabase Dashboard → **Table Editor** → **contacts** table  
**Method 2:** Website Footer → **"Admin"** link → View all submissions

### Career Applications:
**Method 1:** Supabase Dashboard → **Table Editor** → **career_applications** table  
**Method 2:** Supabase Dashboard → **Storage** → **resumes** bucket (download resumes)

---

## 🎯 That's It!

Your website is now fully functional!

---

## 📚 Need More Details?

- **Contact Form Setup:** [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)
- **Careers Setup:** [CAREERS_SETUP.md](./CAREERS_SETUP.md)
- **Complete Checklist:** [SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)
- **Project Overview:** [README.md](./README.md)

---

## ❌ Still Getting Errors?

### "Table not found" Error
→ You didn't run the SQL command yet. Go back to Step 1.

### Form submits but no data
→ Check Supabase Table Editor. Data might be there even if admin panel doesn't show it.

### Admin panel empty
→ Submit a test form first. Admin panel only shows existing submissions.

---

## 📧 Contact

**Company:** xavira.group@gmail.com  
**CEO & Founder:** vishnuvardhanburri19@gmail.com  
**LinkedIn:** [Vishnu Vardhan Burri](https://www.linkedin.com/in/vishnu-vardhanburri/)

---

**Xavira Tech Labs**  
Part of Xavira Group  
Founded by Vishnu Vardhan Burri
