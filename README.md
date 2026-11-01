# kTech for Businesses — Enterprise Systems & Automation

An enterprise-grade B2B horizontal-scrolling landing page for **kTech for Businesses**, an IT and Systems Engineering service based in Accra, Ghana.

Engineered with **React**, **Vite**, and **Tailwind CSS**, featuring an **Apple Store & Apple Home** design language, dynamic **Dark/Light Theme Switcher** (Dark by default), and an immersive **horizontal panoramic layout**.

---

##  Visual Identity & Theme System

* **Dark Mode (Default)**: Deep obsidian canvas (`#000000`), frosted glass cards (`backdrop-blur-2xl`, hairline borders), and Cupertino radial ambient glows.
* **Light Mode (Apple White Theme)**: Apple clean white canvas (`#f5f5f7`), frosted porcelain cards (`rgba(255, 255, 255, 0.85)`), and high-contrast dark typography (`#1d1d1f`).
* **Theme Switcher**: An Apple-style frosted Sun/Moon toggle in the navigation bar dynamically switches modes with smooth CSS transitions.

---

## ↔️ Horizontal Panoramic Scroll (Left-to-Right)

* **Mouse Wheel**: Vertical wheel movement (`deltaY`) is automatically converted into smooth horizontal translation.
* **Trackpad / Mobile Touch**: Natural horizontal swipe with CSS scroll snapping (`snap-x snap-mandatory`).
* **Keyboard**: Use Left Arrow (`←`) and Right Arrow (`→`) keys to navigate between slides.
* **Floating Apple Dynamic Island Dock**: A frosted glass bottom pill displaying section indicators (`01 Overview`, `02 Methodology`, `03 Case Study`, `04 Engineering`, `05 Connect`), previous/next chevrons, and a live progress gauge.

---

## 📐 Page Structure & Architecture

1. **Slide 1: Overview & Hero (`Hero.jsx`)**
   * *Headline*: Enterprise-Grade IT & Automation for Growing Ghanaian Businesses.
   * *Subheadline*: Stop losing sales to unread WhatsApps, messy Gmail accounts, and disorganized staff. We build the systems that run your business while you sleep.
   * *Primary CTA*: Apple pill button `"Chat on WhatsApp"` wired directly to `+233 24 814 7952`.
   * *Live Apple Home Tiles*: Interactive node toggles showing system health.

2. **Slide 2: The Methodology (`Methodology.jsx`)**
   * *Section Header*: **The D.E.M. Engineering Framework**
   * 3-column feature framework detailing operating philosophy:
     * **Discover**: We map your daily operations to identify the repetitive, manual tasks and unmonitored channels that are draining your revenue.
     * **Execute**: We deploy custom webhooks, low-code apps, automated WhatsApp CRM bots, and Google Workspace architecture to digitize the workflow.
     * **Monitor**: We provide dedicated monthly oversight to manage endpoint security, cloud infrastructure, and 100% system uptime.

3. **Slide 3: The Trust Builder (`CaseStudy.jsx`)**
   * *Title*: Case Study: From Chaos to Centralized Control
   * 3-phase transformation breakdown: Friction ➔ Engineering ➔ Quantifiable Outcome.

4. **Slide 4: Systems Engineering & Retainers (`Pricing.jsx`)**
   * Refactored 2-part architecture layout:
     * **Part A: Phase 1: Core Infrastructure Setup**
       * *Description*: The mandatory baseline for modern business operations.
       * *Price*: Starts at GH₵ 3,500 setup + GH₵ 1,500 / monthly.
       * *Features*: Google Workspace Centralization, Custom Domain & DNS Management, Chrome Browser Cloud Management, and Staff Onboarding.
     * **Part B: Phase 2: Custom Systems & Automation (Expansive & Distinct)**
       * *Description*: Scoped individually based on your operational complexity.
       * *Features*: AppSheet Workflows & Internal Tools, Looker Studio BI Dashboards, Automated WhatsApp API CRMs, Odoo/ERP Cloud Integrations, Absolute Zero-Trust Endpoint Security, Fleet & Multi-Site Network Monitoring.
       * *Primary Action*: **"Book a Systems Discovery Call"**
   * Exact Italicized Note: *"Note: Clients pay for their own software subscriptions directly; pricing reflects engineering, setup, and ongoing management."*

5. **Slide 5: Connect & Final CTA (`Footer.jsx`)**
   * *Headline*: **What repetitive task is slowing your business down today?**
   * *Subheadline*: **Book a Discovery Call with a systems engineer in Accra. We will audit your workflow and build the automation to fix it.**
   * *Primary Button*: **"Book a Discovery Call"**
   * Back to `thekisseh.com` link & copyright notice.

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
git commit -m "feat: D.E.M. framework, 2-part engineering pricing, updated CTA, and theme switcher"
git push origin main
```

### 2. Connect to Vercel

1. Log into your [Vercel Dashboard](https://vercel.com).
2. Click **Add New...** ➔ **Project** and select `ktech-for-businesses`.
3. Vercel automatically detects the preset as **Vite**.
4. Click **Deploy**.

### 3. Attach Subdomain (e.g. `tech.thekisseh.com`)

1. In your project on Vercel, go to **Settings** ➔ **Domains**.
2. Add your subdomain: e.g. `tech.thekisseh.com`.
3. In your DNS provider, create a `CNAME` record pointing your subdomain to `cname.vercel-dns.com`.
