# CLAUDE.md — winnymakeup.net Project

## Project Overview

`winnymakeup.net` is a portfolio and booking website for **Winny**, a freelance makeup artist and hair stylist.

The goal is to create a premium, modern, visually polished website that works as:

- A professional portfolio / lookbook
- A gallery for makeup and hair styling work
- A rate card display
- A booking inquiry form
- A contact hub for clients
- A foundation for future CMS/admin features

The website should feel like a **Luxury Beauty Portfolio** rather than a generic business website.

Recommended visual direction:

- Luxury editorial
- Soft glam
- Clean minimal
- Mobile-first
- Fashion magazine inspired
- Elegant animation
- High-quality image presentation

---

## Core Project Details

### Domain

```text
https://winnymakeup.net
```

### Local Development Folder

```text
D:\Claude_Winny
```

### GitHub Repository

```text
https://github.com/atiroop/winnymakeup.git
```

### VPS Deployment Path

```text
/home/winny/web/winnymakeup.net/public_html/
```

### VPS User

```text
winny
```

---

## Recommended Tech Stack

Use this stack unless the user specifically requests otherwise:

```text
Framework: Next.js
Styling: Tailwind CSS
Animation: Framer Motion
CMS: Sanity CMS
Forms: Next.js Server Actions or API Routes
Database: Not required in phase 1
Hosting: Existing VPS
```

### Why This Stack

Next.js is preferred because this project may grow beyond a static portfolio into a full booking and content management system.

Tailwind CSS is preferred for fast custom design and precise visual control.

Framer Motion is preferred for subtle, elegant animation.

Sanity CMS is recommended for future content management, so Winny can add/edit portfolio items, rate cards, and testimonials without editing code.

---

## Initial Site Structure

Recommended routes:

```text
/
Home / luxury hero / featured work

/portfolio
Main portfolio gallery

/portfolio/bridal
Bridal makeup portfolio

/portfolio/fashion
Fashion / editorial / shoot portfolio

/portfolio/event
Event / party / graduation / special occasion makeup

/rates
Rate cards and package pricing

/booking
Booking inquiry form

/about
About Winny

/contact
Contact, LINE, Instagram, phone, email
```

---

## Homepage Concept

The homepage should be highly visual and premium.

Suggested hero copy:

```text
WINNY MAKEUP ARTIST
Bridal • Editorial • Event Makeup
Bangkok / Thailand
```

Primary CTAs:

```text
View Portfolio
Book a Session
```

Suggested sections:

1. Hero section with strong portrait/beauty image
2. Featured portfolio
3. Services overview
4. Rate card preview
5. Testimonials
6. Booking CTA
7. Contact / Instagram CTA

---

## Design Direction

### Visual Mood

The site should feel like:

```text
Luxury Beauty Portfolio
Editorial Fashion
Clean Minimal
Soft Glam
Mobile-first
```

### Design Keywords

Use these as design guidance:

```text
elegant
premium
minimal
soft
editorial
warm
feminine but not overly cute
professional
high-end beauty brand
```

### Suggested Colors

Use a soft luxury palette:

```text
Base: ivory / off-white / warm white
Text: charcoal / soft black
Accent: champagne gold / muted rose gold / nude beige
Secondary: soft taupe / dusty pink / warm gray
```

Do not make the site too colorful. Let the photos carry the visual weight.

### Typography Direction

Use elegant typography:

```text
Headings: high-contrast serif or refined display font
Body: clean sans-serif
Buttons: minimal uppercase or small caps
```

Examples of style direction:

```text
Editorial magazine headline
Luxury brand landing page
High-end bridal makeup portfolio
```

---

## Content Model Ideas

### Portfolio Item

Suggested fields:

```text
title
slug
category
client_name
occasion
location
date
cover_image
gallery_images
description
featured
instagram_url
```

Categories:

```text
Bridal
Pre-wedding
Fashion
Editorial
Event
Graduation
Party
Hair Styling
Before / After
```

### Rate Card

Suggested fields:

```text
title
slug
price
description
included_services
duration
travel_note
featured
sort_order
```

Example packages:

```text
Bridal Makeup
Pre-wedding Makeup
Event Makeup
Graduation Makeup
Hair Styling
Makeup + Hair Package
On-location Service
```

### Booking Inquiry

Suggested fields:

```text
name
phone
line_id
email
service_type
event_date
event_time
location
number_of_people
message
```

The form should not require payment in phase 1. Start with inquiry-based booking.

---

## Development Principles

### Important

This project should prioritize visual quality and simplicity first.

Do not overbuild the backend early.

Start with a beautiful portfolio site, then gradually add CMS/admin/booking features.

### Preferred Build Approach

Phase 1:

```text
Next.js frontend
Static content or local data files
Portfolio layout
Rate card page
Booking inquiry form
Basic SEO
Responsive design
Deploy to VPS
```

Phase 2:

```text
Sanity CMS
Editable portfolio items
Editable rate cards
Testimonials
Instagram/link integration
```

Phase 3:

```text
Booking dashboard
Availability calendar
Email notification
LINE notification
Admin login
Lead management
```

---

## Local Development Setup

Expected local folder:

```powershell
D:\Claude_Winny
```

Recommended initial setup:

```powershell
cd D:\Claude_Winny
git clone https://github.com/atiroop/winnymakeup.git .
npm install
npm run dev
```

Local dev URL is usually:

```text
http://localhost:3000
```

---

## Git Workflow

Before editing:

```bash
git status
git pull origin main
```

After editing:

```bash
git status
git add .
git commit -m "Describe changes clearly"
git push origin main
```

Do not force push unless the user explicitly approves it.

If there is a conflict, stop and ask before overwriting files.

---

## VPS Deployment Notes

Target VPS path:

```text
/home/winny/web/winnymakeup.net/public_html/
```

Expected VPS user:

```text
winny
```

Recommended deploy flow for a Next.js VPS app:

```bash
cd /home/winny/web/winnymakeup.net/public_html/
git pull origin main
npm install
npm run build
```

If the app uses PM2:

```bash
npx pm2 restart winnymakeup
```

or, if PM2 is installed globally:

```bash
pm2 restart winnymakeup
```

If the PM2 process does not exist yet:

```bash
npx pm2 start npm --name winnymakeup -- start
npx pm2 save
```

Confirm current PM2 status:

```bash
npx pm2 list
```

or:

```bash
pm2 list
```

Use `npx pm2` if global `pm2` is not available.

---

## Environment Variables

Do not commit `.env` files.

Possible future env keys:

```text
NEXT_PUBLIC_SITE_URL=https://winnymakeup.net

SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_VERSION=

BOOKING_EMAIL_TO=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=

LINE_NOTIFY_TOKEN=
```

Keep secrets only on local machine and VPS.

---

## SEO Requirements

The website should be optimized for:

```text
Winny Makeup Artist
Makeup Artist Bangkok
Bridal Makeup Bangkok
แต่งหน้าเจ้าสาว
ช่างแต่งหน้ากรุงเทพ
รับแต่งหน้าเจ้าสาว
แต่งหน้าออกงาน
```

Recommended metadata:

```text
Title: Winny Makeup Artist | Bridal & Event Makeup in Bangkok
Description: Luxury makeup artist portfolio for bridal, editorial, event, and special occasion makeup in Bangkok, Thailand.
```

Add Open Graph images later for social sharing.

---

## Image Requirements

This project is image-heavy.

Use optimized images.

Recommended image approach:

```text
Use Next.js Image component
Use WebP or optimized JPG
Avoid uploading huge uncompressed images
Use consistent aspect ratios
Create gallery thumbnails
```

Recommended portfolio aspect ratios:

```text
4:5 portrait
3:4 portrait
1:1 square
16:9 editorial banner
```

---

## UX Requirements

The website must be excellent on mobile.

Most clients will likely open the site from LINE, Instagram, or mobile browser.

Mobile priorities:

```text
Fast loading
Large photos
Easy contact buttons
Sticky or visible booking CTA
Simple navigation
Readable rate cards
```

Suggested contact CTA buttons:

```text
Book Now
LINE
Instagram
Call
```

---

## Coding Style

Use clean, maintainable code.

Preferred:

```text
TypeScript
Functional React components
Tailwind utility classes
Reusable components
Clear folder structure
```

Recommended folders:

```text
app/
components/
components/ui/
components/sections/
lib/
data/
public/images/
```

Suggested components:

```text
HeroSection
PortfolioGrid
PortfolioCard
RateCard
BookingForm
SectionHeading
CTASection
Footer
Navbar
```

---

## Do Not Do

Do not make the site look like a generic corporate website.

Do not overuse animations.

Do not add heavy libraries unless needed.

Do not hardcode secrets.

Do not force push to GitHub.

Do not delete existing project files without checking first.

Do not overwrite remote changes without reviewing conflicts.

---

## First Milestone

The first useful milestone should be:

```text
A polished Next.js landing page for winnymakeup.net with:
- Luxury hero section
- Portfolio preview
- Services/rate card preview
- Booking CTA
- Contact section
- Fully responsive mobile layout
```

After that, build:

```text
/portfolio
/rates
/booking
/about
/contact
```

---

## Suggested Brand Positioning

Use language around:

```text
soft glam
timeless beauty
bridal elegance
editorial makeup
professional on-location makeup service
```

Avoid overly childish or cartoonish styling.

The final site should feel premium enough for bridal clients and editorial/fashion clients.

---

## Current Instruction for Claude Code

When working on this project:

1. Read this `CLAUDE.md` first.
2. Check the current repository structure before making changes.
3. Do not assume files exist.
4. Use Next.js + Tailwind + Framer Motion direction unless instructed otherwise.
5. Keep the design premium, clean, and mobile-first.
6. Ask before destructive operations.
7. Prefer incremental improvements over full rewrites.
8. Before deployment, run:

```bash
npm run build
```

9. After editing, summarize:
   - What changed
   - Files edited
   - Commands to run
   - Any risks or next steps
