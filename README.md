# kTech for Businesses — Landing Page

An enterprise-grade B2B landing page for **kTech for Businesses**, an IT and Systems Engineering service based in Accra, Ghana. Designed as a natural, seamless brand extension of [thekisseh.com](https://thekisseh.com).

Built with **React**, **Vite**, and **Tailwind CSS**. Optimized for ultra-fast load times, high-converting WhatsApp lead flows, and zero friction.

---

## 🎨 Design System & Aesthetic Match

Directly extracted from `thekisseh.com`:

* **Typography**:
  * Serif Headings: `Cormorant Garamond` (Light 300, italic accents)
  * Clean UI Body: `Inter` (300, 400, 500)
  * Badges & Technical Data: `Space Mono` (Uppercase, `letter-spacing: 0.15em - 0.22em`)
* **Color Palette**:
  * Background Deep Black: `#0a0a0a`
  * Surface Secondary / Cards: `#111111` & `#141414`
  * Warm Amber / Gold Accent: `#c8933a` (Dim: `#9a6e27`)
  * Text Ivory: `#e8e4de`
  * Text Muted / Sand: `#8a857e`
  * Structural Borders / Faint Taupe: `#3d3a36`
* **Button Styles**:
  * High-converting amber gold primary CTA (`bg-[#c8933a] text-black hover:bg-white`)
  * Sharp outline & ghost buttons with micro-interactions
  * Dedicated floating WhatsApp contact badge

---

## 📐 Page Structure & Sections

1. **Header & Navigation (`Navbar.jsx`)**: Sticky blurred obsidian header with brand lockup, direct jump links, WhatsApp quick CTA, and mobile hamburger drawer.
2. **Hero (`Hero.jsx`)**: High-converting hook with exact headline, subheadline, and primary `"Chat on WhatsApp"` button, backed by proof badges.
3. **Trust Builder Case Study (`CaseStudy.jsx`)**: Editorial 3-pillar breakdown (*The Problem* ➔ *The Solution* ➔ *The Result*) detailing Google Workspace IAM, Chrome Browser Cloud Management, and automated WhatsApp CRM.
4. **Services & Pricing (`Pricing.jsx`)**: 3-column price-anchored matrix highlighting the **Standard** target package (gold border, "Most Popular" badge, distinct button) against Basic and Premium tiers, complete with the direct subscription note.
5. **Footer (`Footer.jsx`)**: Clean footer with copyright notice, "Back to thekisseh.com" link, secondary WhatsApp contact, and operational status.

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
git commit -m "feat: initial commit of kTech for Businesses landing page"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ktech-for-businesses.git
git push -u origin main
```

### 2. Connect to Vercel

1. Log into your [Vercel Dashboard](https://vercel.com).
2. Click **Add New...** ➔ **Project**.
3. Import your `ktech-for-businesses` GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **Deploy**.

### 3. Attach Subdomain (e.g., `tech.thekisseh.com`)

1. In your project on Vercel, navigate to **Settings** ➔ **Domains**.
2. Enter your desired subdomain: e.g., `tech.thekisseh.com` or `ktech.thekisseh.com`.
3. In your DNS provider (e.g., Cloudflare, Namecheap, Netlify, or your domain registrar):
   * Add a `CNAME` record:
     * **Name / Host**: `tech` (or `ktech`)
     * **Target / Value**: `cname.vercel-dns.com`
4. Vercel will automatically provision SSL certificates within minutes.

---

## ⚙️ Customizing Your WhatsApp Phone Number

Directly configured with your WhatsApp business line: `+233 24 814 7952` (`233248147952`). All inquiry links across the Hero, Pricing, Case Study, and Footer route directly to this number with context-aware lead messages.
