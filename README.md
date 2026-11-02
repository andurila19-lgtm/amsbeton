# AMS Beton (CV Anugerah Mecca Sejahtera) - Official Company Profile

Website profil perusahaan profesional untuk **AMS Beton (CV Anugerah Mecca Sejahtera)**, produsen dan penyedia beton cor ready mix serta layanan rental concrete pump berstandar SNI di Indonesia.

Dibangun dengan pendekatan arsitektur modern berbasis **Astro JS (Static Site Generation)**, **TypeScript**, dan **Tailwind CSS**. Mengusung gaya *modern industrial, clean, premium corporate* dengan palet warna dominan charcoal, putih, abu-abu beton, dan aksen safety orange konstruksi.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Astro JS](https://astro.build/) (v5.x SSG)
- **Language**: TypeScript (`strict` configuration)
- **Styling**: Tailwind CSS dengan custom industrial color palette & typography
- **Icons**: Lucide Icons
- **Performance**: Zero-JS footprint secara default, hanya menggunakan micro-scripts interaktif (kalkulator kubikasi, mobile drawer, pemilihan mutu dinamis)
- **SEO & AEO/GEO**:
  - Metadata OpenGraph & Twitter Card
  - Semantic HTML5 (header, nav, main, section, footer, article, table)
  - Google Structured Data Schema.org (`LocalBusiness`, `Organization`, `WebSite`)
  - `sitemap.xml` dan `robots.txt`
  - Kecepatan muat instan tanpa ketergantungan runtime React/Next.js

---

## 🏗️ Struktur Komponen

```
g:\AMS Beton\
├── public/
│   ├── favicon.svg               # Favicon kubus geometris industrial
│   ├── robots.txt                # Directive search crawler
│   ├── sitemap.xml               # Sitemap XML terstruktur
│   └── images/
│       ├── mixer-truck-batching-plant.jpg  # Armada mixer Sany di Batching Plant dusk (Hero)
│       ├── fleet-batching-plant.jpg        # Silo batching plant & fleet lineup (About)
│       ├── project-industrial-floor.jpg    # Pengecoran lantai pergudangan logistik
│       ├── project-infrastructure.jpg      # Pengecoran struktur & dak komersial
│       ├── concrete-finishing.jpg          # Finishing lantai pabrik presisi
│       ├── testing-quality.jpg             # Kontrol kualitas uji slump & kubus
│       └── concrete-pump-truck.jpg         # Mesin concrete pump
├── src/
│   ├── components/
│   │   ├── Navbar.astro          # Floating corporate navbar & mobile drawer
│   │   ├── Hero.astro            # Hero section industrial, headline, CTA WhatsApp, trust badges
│   │   ├── About.astro           # Profil CV Anugerah Mecca Sejahtera & kontrol mutu plant
│   │   ├── Products.astro        # Katalog mutu beton K-175 s/d K-350 terverifikasi SNI
│   │   ├── Services.astro        # Truk Standar 7m³, MiniMix 3m³, Concrete Pump, Uji Slump
│   │   ├── WhyChooseUs.astro     # 4 Pilar teknis keunggulan (timbangan, on-time, setting time)
│   │   ├── Projects.astro        # Dokumentasi portofolio proyek terverifikasi
│   │   ├── ServiceAreas.astro    # Jangkauan batching plant Jabodetabek & Karawang
│   │   ├── Contact.astro         # Kalkulator kubikasi interaktif, form penawaran, Google Maps
│   │   └── Footer.astro          # Footer lengkap, link mutu beton, legalitas, floating WA
│   ├── data/
│   │   └── company.ts            # Data teknis terpusat, spesifikasi SNI, informasi kontak
│   ├── layouts/
│   │   └── Layout.astro          # Master HTML layout, typography, SEO meta, JSON-LD Schema
│   └── pages/
│       └── index.astro           # Homepage satu halaman responsif
├── astro.config.mjs              # Konfigurasi Astro SSG & Tailwind integration
├── tailwind.config.mjs           # Konfigurasi tema warna industrial & safety orange
├── tsconfig.json                 # TypeScript strict
└── package.json                  # Dependencies & scripts
```

---

## 📊 Data Teknis Mutu Beton (SNI 2847:2019)

| Mutu Beton | Kuat Tekan Kubus ($15\times15\times15$ cm, 28 Hari) | Ekuivalen Silinder ($f'c$, MPa) | Slump Standar | Rekomendasi Aplikasi Lapangan |
| :--- | :--- | :--- | :--- | :--- |
| **K-175** | $175\text{ kg/cm}^2$ | $f'c\text{ }14.5\text{ MPa}$ | $12 \pm 2\text{ cm}$ | Lantai kerja (*lean concrete*), rabat dasar saluran, perkerasan tanah |
| **K-200** | $200\text{ kg/cm}^2$ | $f'c\text{ }16.6\text{ MPa}$ | $12 \pm 2\text{ cm}$ | Jalan lingkungan pemukiman, garasi mobil, lantai kerja ruko |
| **K-225** | $225\text{ kg/cm}^2$ | $f'c\text{ }18.7\text{ MPa}$ | $12 \pm 2\text{ cm}$ | Cor dak rumah tinggal 2 lantai, sloof, kolom praktis, tangga rumah |
| **K-250** | $250\text{ kg/cm}^2$ | $f'c\text{ }20.8\text{ MPa}$ | $12 \pm 2\text{ cm}$ | Standar utama cor dak ruko & rumah mewah 2-3 lantai, bore pile |
| **K-275** | $275\text{ kg/cm}^2$ | $f'c\text{ }22.8\text{ MPa}$ | $12 \pm 2\text{ cm}$ | Gedung bertingkat 3-4 lantai, pelat jembatan, struktur kedap air |
| **K-300** | $300\text{ kg/cm}^2$ | $f'c\text{ }24.9\text{ MPa}$ | $12 \pm 2\text{ cm}$ | *Rigid pavement* jalan raya, lantai gudang logistik forklift, pabrik |
| **K-350** | $350\text{ kg/cm}^2$ | $f'c\text{ }29.0\text{ MPa}$ | $12 \pm 2\text{ cm}$ | Abutment jembatan, tiang pancang, fasilitas dermaga, beton beban berat |

---

## 🚀 Cara Menjalankan Project

### 1. Mode Development
```bash
npm run dev
```
Buka browser di `http://localhost:4321`.

### 2. Pengecekan Type & Build Produksi
```bash
npm run build
```
Hasil build statis tersimpan di folder `dist/` siap di-deploy langsung ke Cloudflare Pages, Netlify, Vercel, maupun VPS Nginx/Apache.

### 3. Preview Hasil Build
```bash
npm run preview
```

