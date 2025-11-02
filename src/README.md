# Xavira Tech Labs - Official Website

A futuristic, glassmorphic website for Xavira Tech Labs, part of Xavira Group.

## 🚀 Quick Start

### ⚠️ IMPORTANT: Contact Form Setup Required

**Before using the contact form, you MUST set up the Supabase database!**

👉 **Follow the instructions in [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)** 👈

It only takes 5 minutes and is required for the contact form to work.

---

## Features

✨ **6 Complete Pages:**
- Home - Hero section with 3D tech canvas
- About - Founder bio, company timeline, client stories
- Services - 11 comprehensive service offerings
- Portfolio - 3 showcase projects with detailed modals
- Careers - 6 divisions with job openings and application system
- Contact - Form with Supabase backend

🎨 **Design:**
- Glassmorphism with frosted glass effects
- Black background with dark blue (#1E3A8A) and violet (#7E22CE) accents
- Smooth animations throughout
- 3D particle background

🔧 **Tech Stack:**
- React + TypeScript
- Tailwind CSS
- Motion (Framer Motion)
- Supabase for backend
- Lucide React icons

---

## Project Structure

```
├── App.tsx                  # Main application component
├── components/
│   ├── Home.tsx            # Landing page
│   ├── About.tsx           # About page with founder bio
│   ├── Services.tsx        # Service offerings
│   ├── Portfolio.tsx       # Project showcase
│   ├── Careers.tsx         # Career opportunities with application form
│   ├── Contact.tsx         # Contact form with Supabase
│   ├── AdminPanel.tsx      # View form submissions
│   ├── Navbar.tsx          # Navigation
│   ├── Footer.tsx          # Footer with social links
│   ├── LoadingScreen.tsx   # Initial loading animation
│   ├── TechCanvas.tsx      # 3D background canvas
│   └── ui/                 # Shadcn UI components
├── lib/
│   └── supabase.ts         # Supabase client config
└── styles/
    └── globals.css         # Global styles & typography
```

---

## Setup Instructions

### 1. Contact Form & Careers (Required)

**The contact form and careers application system will not work without this setup!**

📖 See detailed instructions: 
- [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) - Contact form setup
- [CAREERS_SETUP.md](./CAREERS_SETUP.md) - Careers application setup

Quick summary:
1. Open Supabase SQL Editor
2. Run the SQL commands from both setup files
3. Create the "resumes" storage bucket for career applications
4. Verify tables were created successfully

### 2. Viewing Submissions

**Contact Form Submissions:**
- **Supabase Dashboard:** Table Editor → contacts table
- **Admin Panel:** Footer → "Admin" link

**Career Applications:**
- **Supabase Dashboard:** Table Editor → career_applications table
- **Resume Downloads:** Storage → resumes bucket

---

## Documentation

- **[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)** - Contact form database setup (REQUIRED)
- **[CAREERS_SETUP.md](./CAREERS_SETUP.md)** - Careers application setup (REQUIRED)
- **[CONTACT_FORM_GUIDE.md](./CONTACT_FORM_GUIDE.md)** - Contact form usage
- **[EMAIL_CONTACTS_UPDATE.md](./EMAIL_CONTACTS_UPDATE.md)** - Email configuration

---

## Branding

**Company Name:** XAVIRA TECH LABS  
**Parent Company:** Xavira Group  
**Founded by:** Vishnu Vardhan Burri (CEO & Founder)

**Contact:**
- Company: xavira.group@gmail.com
- CEO: vishnuvardhanburri19@gmail.com
- LinkedIn: [Vishnu Vardhan Burri](https://www.linkedin.com/in/vishnu-vardhanburri/)

---

## Color Palette

- **Background:** Black (#000000)
- **Primary Accent:** Violet (#7E22CE)
- **Secondary Accent:** Dark Blue (#1E3A8A)
- **Text:** White, Gray shades
- **Glassmorphism:** Backdrop blur with gradient overlays

---

## Key Features

### Glassmorphism Design
- Frosted glass cards with blur effects
- Glowing borders and shadows
- Gradient overlays

### 3D Tech Canvas
- Animated particle background
- Interactive tech-themed visuals
- Smooth 60fps animations

### Contact System
- Supabase-powered backend
- Form validation
- Success/error notifications
- Admin panel for viewing submissions

### Service Offerings
1. AI & Machine Learning Systems
2. Web 3.0 & Blockchain
3. Backend Scalability
4. Full Stack Development
5. UX/UI Design
6. Branding & Identity
7. Cybersecurity
8. Cloud Architecture
9. AR/VR Interfaces
10. DevOps & CI/CD
11. Innovation Labs

### Portfolio Projects
1. **NovaSecure** - AI-Powered Threat Detection
2. **StellarApp** - Holographic Mobile Experience
3. **BrandLift** - Premium Brand Identity System

---

## Development

This is a production-ready website built with modern web technologies.

### Tech Dependencies
- React
- TypeScript
- Tailwind CSS v4.0
- Motion (Framer Motion)
- Supabase
- Lucide React
- Shadcn UI Components

---

## Security Notes

⚠️ **Important Security Information:**

1. **Row Level Security (RLS)** is enabled on the database
2. Anyone can submit forms (public access)
3. Only authenticated users can view submissions
4. For production, consider adding:
   - Rate limiting
   - CAPTCHA
   - Email notifications
   - Additional validation

⚠️ **Data Privacy:**
- This setup is for demonstration purposes
- Not designed for handling sensitive PII
- Implement additional security measures for production use

---

## Support

Having issues?

1. **Contact Form Not Working?**
   - Check [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)
   - Verify the database table exists
   - Check browser console for errors

2. **Technical Support:**
   - Email: xavira.group@gmail.com
   - CEO: vishnuvardhanburri19@gmail.com

3. **Supabase Issues:**
   - Visit: https://supabase.com/docs
   - Check project dashboard
   - Review API logs

---

## License

© 2025 Xavira Tech Labs  
Part of Xavira Group  
All rights reserved.

---

**Built with ❤️ by Xavira Tech Labs**
