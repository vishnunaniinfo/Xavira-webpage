# 🚀 Xavira Tech Labs - Setup Checklist

Use this checklist to ensure your website is fully functional.

---

## ✅ Pre-Launch Checklist

### 1. Database Setup (REQUIRED)

- [ ] Opened Supabase dashboard: https://defqvnwcyfdpkvlzstlz.supabase.co
- [ ] Navigated to SQL Editor
- [ ] Copied SQL code from `SUPABASE_SETUP.md`
- [ ] Ran the SQL command successfully
- [ ] Verified "contacts" table appears in Table Editor
- [ ] Confirmed table has all required columns (id, name, email, phone, service, message, created_at)

**Status:** ⚠️ INCOMPLETE until all boxes are checked

---

### 2. Test Contact Form

- [ ] Opened website Contact page
- [ ] Filled out the contact form completely
- [ ] Clicked "Send Message" button
- [ ] Saw success message (green notification)
- [ ] No error messages appeared

**Expected Result:** Form submits successfully with green success notification

---

### 3. Verify Data Storage

- [ ] Opened Supabase dashboard
- [ ] Went to Table Editor → contacts
- [ ] Saw the test submission in the table
- [ ] All fields populated correctly
- [ ] Timestamp shows current time

**Expected Result:** Your test submission appears in the database

---

### 4. Test Admin Panel

- [ ] Scrolled to website footer
- [ ] Clicked "Admin" link
- [ ] Admin panel loaded successfully
- [ ] Saw the test submission displayed
- [ ] Contact details (name, email, phone) visible
- [ ] Message content displayed correctly

**Expected Result:** Admin panel shows all submissions with full details

---

## 🔍 Troubleshooting Guide

### Error: "Could not find the table 'public.contacts'"

**Solution:**
1. You haven't created the database table yet
2. Go to `SUPABASE_SETUP.md` and follow Step 2
3. Run the SQL command in Supabase SQL Editor
4. Try the contact form again

---

### Form Submits but No Success Message

**Check:**
- [ ] Browser console for errors
- [ ] Supabase project URL is correct
- [ ] API keys are valid
- [ ] Internet connection is stable

---

### Admin Panel Shows "No Submissions Yet"

**Possible Causes:**
1. No forms have been submitted yet → Submit a test form
2. RLS policies not set up → Run the complete SQL from setup guide
3. Not authenticated → Admin panel requires Supabase auth

---

### Data Not Appearing in Table Editor

**Check:**
- [ ] Looking at the correct Supabase project
- [ ] "contacts" table exists
- [ ] Refresh the Table Editor page
- [ ] Check if form submission actually succeeded

---

## 📧 Email Configuration Verification

### Company Contact Information

- [ ] Footer shows: xavira.group@gmail.com (primary)
- [ ] Footer shows: CEO email (secondary, smaller text)
- [ ] Contact page shows both emails correctly
- [ ] About page shows founder email with mail icon
- [ ] All email links are clickable (mailto: links)

**Expected Display:**
- **Primary:** xavira.group@gmail.com
- **CEO & Founder:** vishnuvardhanburri19@gmail.com

---

## 🎨 Visual Quality Check

### Design Elements

- [ ] Glassmorphism effects visible (frosted glass)
- [ ] Violet and dark blue accent colors present
- [ ] Background is black
- [ ] 3D particle background animating smoothly
- [ ] All pages load without layout issues
- [ ] Navigation works on all pages
- [ ] Footer appears on all pages

---

### Animation Check

- [ ] Loading screen appears on first visit
- [ ] Page transitions are smooth
- [ ] Hover effects work on buttons
- [ ] Cards have glowing borders
- [ ] Success/error notifications animate properly

---

## 📱 Responsive Design Test

### Desktop (1920px+)
- [ ] All pages display correctly
- [ ] Navigation menu horizontal
- [ ] Cards in proper grid layouts
- [ ] Text readable and properly sized

### Tablet (768px - 1024px)
- [ ] Content adapts to medium screens
- [ ] Navigation still functional
- [ ] Images scale appropriately

### Mobile (320px - 767px)
- [ ] Mobile menu appears
- [ ] Single column layouts
- [ ] Touch targets large enough
- [ ] Forms easy to fill out

---

## 🔐 Security Verification

### Supabase Security

- [ ] Row Level Security (RLS) enabled
- [ ] "Allow public insert" policy created
- [ ] "Allow authenticated read" policy created
- [ ] Anonymous users CAN submit forms
- [ ] Anonymous users CANNOT view submissions
- [ ] Only authenticated users can access admin panel

**Security Status:** ✅ Production-ready RLS policies active

---

## 📊 Performance Check

### Page Load Speed

- [ ] Home page loads in < 3 seconds
- [ ] All images load properly
- [ ] No console errors
- [ ] Animations run at 60fps
- [ ] Form submission is responsive

---

### Browser Compatibility

Tested in:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile browsers

---

## 🚀 Ready for Production?

### Final Checks

- [ ] All checklist items above completed
- [ ] Contact form working perfectly
- [ ] Database storing submissions
- [ ] Admin panel accessible
- [ ] No console errors
- [ ] All pages load correctly
- [ ] Responsive on all devices
- [ ] Email addresses correct
- [ ] Branding consistent throughout

---

## ✅ Launch Status

**Overall Status:** 

- ⚠️ **NOT READY** - Complete database setup first
- ⏳ **IN PROGRESS** - Working through checklist
- ✅ **READY TO LAUNCH** - All items checked!

---

## 📞 Support

If you encounter any issues:

**Technical Support:**
- Email: xavira.group@gmail.com
- CEO: vishnuvardhanburri19@gmail.com

**Documentation:**
- [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) - Database setup
- [CONTACT_FORM_GUIDE.md](./CONTACT_FORM_GUIDE.md) - Form usage
- [README.md](./README.md) - General overview

---

**Last Updated:** October 18, 2025  
**Xavira Tech Labs**  
Part of Xavira Group  
Founded by Vishnu Vardhan Burri
