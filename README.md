# kTech for Businesses — Apple Store & Apple Home Edition

An enterprise-grade B2B horizontal-scrolling landing page for **kTech for Businesses**, an IT and Systems Engineering service based in Accra, Ghana.

Engineered with **React**, **Vite**, and **Tailwind CSS**, adopting the design language of the **Apple Store** and **Apple Home** with an immersive horizontal panoramic layout.

---

##  Apple Design Language & Aesthetic

* **Typography**:
  * Headings: San Francisco Pro Display stack (`-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter"`) with optical tracking (`tracking-tightest` to `tracking-tight`)
  * Badges & Technical Data: Apple SF Mono / Space Mono
* **Color Palette & Glassmorphism**:
  * Pure Obsidian Background: `#000000` with subtle keynote ambient radial meshes
  * Apple Home Frosted Glass Cards: `rgba(24, 24, 28, 0.72)` with `backdrop-blur-2xl` and 1px hairline translucent borders
  * Apple Signature Accents: Electric Blue (`#2997ff`), Warm Amber (`#f5a623`), and Home Active Green (`#30d158`)
* **Interactive Apple Home Accessories**:
  * Interactive live accessory tiles simulating active Google Workspace IAM, automated WhatsApp closing bots, Chrome Cloud endpoints, and POS/CRM ledgers.

---

## ↔️ Horizontal Panoramic Scroll (Left-to-Right)

Instead of traditional top-to-bottom vertical scrolling, this experience moves horizontally from left to right:

* **Mouse Wheel**: Vertical wheel movement (`deltaY`) is automatically converted into smooth horizontal translation.
* **Trackpad / Touch**: Natural horizontal swipe with CSS scroll snapping (`snap-x snap-mandatory`).
* **Keyboard**: Use Left Arrow (`←`) and Right Arrow (`→`) keys to navigate between slides.
* **Floating Apple Dynamic Island Dock**: A frosted glass bottom pill displaying section indicators (`01 Overview`, `02 Case Study`, `03 Pricing`, `04 Connect`), previous/next chevrons, and a live progress gauge.

---

## 📐 Page Structure & Exact Copy

1. **Slide 1: Overview & Hero (`Hero.jsx`)**
   * *Headline*: Enterprise-Grade IT & Automation for Growing Ghanaian Businesses.
   * *Subheadline*: Stop losing sales to unread WhatsApps, messy Gmail accounts, and disorganized staff. We build the systems that run your business while you sleep.
   * *Primary CTA*: Apple pill button `"Chat on WhatsApp"` wired directly to `+233 24 814 7952`.
   * *Live Apple Home Tiles*: Interactive node toggles showing system health.

2. **Slide 2: The Trust Builder (`CaseStudy.jsx`)**
   * *Title*: Case Study: From Chaos to Centralized Control
   * 3-card transformation sequence:
     * **Phase 01 / The Problem**: A local enterprise was struggling with scattered employee communications, unsecured local files, and lost leads on social media.
     * **Phase 02 / The Solution**: We deployed centralized Google Workspace administration for secure file management, configured Chrome Browser Cloud Management, and implemented automated WhatsApp CRM flows to catch every inbound lead.
     * **Phase 03 / The Result**: Zero lost documents, 100% staff onboarding compliance, and immediate automated responses to 24/7 sales inquiries.

3. **Slide 3: Services & Pricing (`Pricing.jsx`)**
   * 3-column price-anchored matrix:
     * **Basic (The Decoy)**: GH₵ 1,500 setup / GH₵ 500 monthly (Target: Micro-hustles)
     * **Standard (The Target - Highlighted)**: GH₵ 3,500 setup / GH₵ 1,500 monthly (Target: Growing retail/e-commerce brands). Highlighted in Apple Store flagship fashion with an electric blue border, top "Most Popular" badge, and solid white pill button.
     * **Premium (The Anchor)**: GH₵ 8,500 setup / GH₵ 4,500 monthly (Target: Large established enterprises)
   * Exact Italicized Note: *"Note: Clients pay for their own software subscriptions directly; pricing reflects engineering, setup, and ongoing management."*

4. **Slide 4: Connect & Footer (`Footer.jsx`)**
   * Copyright notice for `kTech for Businesses`
   * Link back to `thekisseh.com`
   * Secondary "Contact via WhatsApp" link

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🌐 Deploying to Vercel on a Subdomain

### 1. Push to GitHub

```bash
git add .
git commit -m "feat: Apple Store design language and horizontal panoramic scroll"
git push -u origin main
```

### 2. Connect to Vercel

1. Log into your [Vercel Dashboard](https://vercel.com).
2. Click **Add New...** ➔ **Project** and select `ktech-for-businesses`.
3. Vercel automatically detects the preset as **Vite**.
4. Click **Deploy**.

### 3. Attach Subdomain (e.g. `tech.thekisseh.com`)

1. In your project on Vercel, go to **Settings** ➔ **Domains**.
2. Add your subdomain: e.g. `tech.thekisseh.com` or `ktech.thekisseh.com`.
3. In your DNS provider, create a `CNAME` record pointing your subdomain to `cname.vercel-dns.com`.
