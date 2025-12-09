# 🍽️ Restaurant Premium Website

Website premium one-page pentru restaurante de top, construit cu Next.js 14, React, Tailwind CSS și Framer Motion.

## ✨ Caracteristici Principale

### Design & UX
- **Design premium elegant** cu paletă de culori sofisticată (negru profund + auriu/bronz)
- **Animații subtile** cu Framer Motion pentru tranziții fluide
- **Responsive complet** - optimizat pentru desktop, tablet și mobile
- **Navigare smooth scroll** între secțiuni
- **Header sticky** cu transparență adaptivă la scroll

### Secțiuni Complete

1. **Hero Section**
   - Full-screen cu imagine de fundal
   - Titlu, subtitlu și descriere captivantă
   - 2 CTA buttons (Rezervă / Explorează Meniu)
   - Trust badges (4 elemente de încredere)
   - Scroll indicator animat

2. **Despre Noi**
   - Layout 50/50 (imagine + text)
   - Povestea restaurantului
   - Statistici importante (an deschidere, experiență chef, nr. mese, rating)

3. **Meniu cu Tabs**
   - Tabs interactive (Antreu / Preparate Principale / Deserturi)
   - Product cards cu imagini, descriere, ingrediente, preț
   - Badge-uri (Vegan, Signature, New, Spicy)
   - Secțiune specială pentru Meniu Degustare
   - Link descărcare PDF meniu

4. **Galerie Vizuală**
   - Filtre interactive (Toate / Preparate / Ambient / Evenimente)
   - Grid responsive cu hover effects
   - Lightbox pentru vizualizare full-screen

5. **Experiența Completă**
   - 3 cards cu iconițe (Experiență Culinară / Vinuri / Atmosferă)
   - Hover animations elegante

6. **Testimoniale**
   - Carousel automat cu 3 testimoniale vizibile
   - Recenzii autentice cu rating 5 stele
   - Link către Google Reviews

7. **Evenimente Private**
   - Layout asimetric cu imagine
   - Listă tipuri evenimente cu iconițe
   - CTA pentru discuții personalizate

8. **Locație & Program**
   - Google Maps embedded
   - Informații complete contact
   - Program detaliat
   - Informații parcare și transport

9. **Formular Rezervare**
   - Fundal auriu subtil pentru emphasis
   - Validare completă frontend
   - Inputs: Nume, Telefon, Email, Data, Ora, Nr. persoane, Preferințe
   - Success state animat după submit
   - Alternative contact (telefon direct)

10. **Semnătură Dezvoltator** 🎯
    - Card prominent cu design diferențiat
    - CTA mare către Calendly
    - 3 beneficii highlight
    - Integrată natural în flow

11. **Footer Complet**
    - 4 coloane: Despre, Link-uri Rapide, Contact, Newsletter
    - Social media icons
    - Link prominent către dezvoltator în footer bottom

12. **WhatsApp Button Flotant**
    - Sticky bottom-right
    - Tooltip cu mesaj
    - Pulse animation
    - Link direct WhatsApp cu mesaj pre-completat

## 🎨 Paleta de Culori

\`\`\`
Primary (Negru profund):    #1A1A1A
Secondary (Auriu elegant):  #B8956A
Accent Green (Fresh/Bio):   #2C5F2D
Text Primary:               #1A1A1A
Text Secondary:             #666666
Background:                 #FAFAF8 (off-white cald)
Developer CTA:              #2B5A8F (albastru profesional)
\`\`\`

## 📦 Tehnologii Utilizate

- **Framework:** Next.js 14 (App Router)
- **React:** 19.2.1
- **Styling:** Tailwind CSS 4.1
- **Animații:** Framer Motion 12.23
- **TypeScript:** 5.9.3
- **Font:** Google Fonts (Playfair Display, Inter, Montserrat)

## 🚀 Instalare & Rulare

### Cerințe
- Node.js 18+
- npm sau yarn

### Pași

1. **Clonează/Navighează în proiect:**
\`\`\`bash
cd restaurant-premium
\`\`\`

2. **Instalează dependențele:**
\`\`\`bash
npm install
\`\`\`

3. **Rulează în modul development:**
\`\`\`bash
npm run dev
\`\`\`

4. **Deschide în browser:**
\`\`\`
http://localhost:3000
\`\`\`

## 🔧 Comenzi Disponibile

\`\`\`bash
npm run dev      # Pornește serverul de development
npm run build    # Creează build pentru producție
npm run start    # Pornește aplicația în modul producție
npm run lint     # Rulează ESLint pentru verificare cod
\`\`\`

## 📝 Personalizare Website

### 1. Înlocuiește Placeholders

Caută și înlocuiește în toate fișierele:

- `[NUME RESTAURANT]` - Numele restaurantului
- `[LOGO]` - Logo-ul restaurantului
- `[NUME CHEF]` - Numele chef-ului
- `[XX]` - Numere specifice (nr. mese, ani experiență, etc.)
- `[Strada Exemplu]` - Adresa completă
- `0721 XXX XXX` - Număr telefon real
- `contact@restaurant.ro` - Email real
- `407XXXXXXXX` - Număr WhatsApp (format internațional)

### 2. Înlocuiește Imagini

Toate imaginile sunt placeholder-uri de pe Unsplash. Înlocuiește cu imagini reale în:

- `components/HeroSection.tsx` - Imagine hero (recommended: 1920x1080px)
- `components/AboutSection.tsx` - Poze ambient/chef
- `components/MenuSection.tsx` - Poze preparate (400x400px)
- `components/GallerySection.tsx` - Galerie completă (800x800px)
- `components/EventsSection.tsx` - Evenimente

**Recomandare:** Folosește Next.js Image component pentru optimizare automată.

### 3. Actualizează Conținutul

**Meniu (components/MenuSection.tsx):**
\`\`\`typescript
const menuData: Record<string, MenuItem[]> = {
  antreu: [
    {
      name: 'Numele Preparatului',
      description: 'Descriere scurtă',
      ingredients: 'Ingrediente principale',
      price: 68,
      image: '/path/to/image.jpg',
      badges: ['signature', 'new'],
    },
    // ... mai multe preparate
  ],
};
\`\`\`

**Testimoniale (components/TestimonialsSection.tsx):**
\`\`\`typescript
const testimonials: Testimonial[] = [
  {
    name: 'Maria T.',
    review: 'Recenzia completă aici...',
    rating: 5,
    source: 'Google Reviews',
  },
];
\`\`\`

### 4. Configurare Google Maps

În `components/LocationSection.tsx`, actualizează iframe src cu coordonatele tale:

1. Caută adresa pe [Google Maps](https://maps.google.com)
2. Click "Share" → "Embed a map"
3. Copiază iframe-ul și înlocuiește în cod

### 5. Configurare SEO

În `app/layout.tsx`, actualizează:

\`\`\`typescript
export const metadata: Metadata = {
  title: "[NUME RESTAURANT] - Restaurant Premium în București",
  description: "Descrierea ta optimizată SEO...",
  // ... alte meta tags
};
\`\`\`

### 6. Integrare Formulare

Pentru a primi rezervările prin email, integrează un serviciu:

**Opțiuni:**
- **EmailJS** (gratuit): [emailjs.com](https://www.emailjs.com/)
- **Formspree** (gratuit tier): [formspree.io](https://formspree.io/)
- **Custom API:** Creează endpoint în `app/api/reservation/route.ts`

Exemplu EmailJS în `components/ReservationSection.tsx`:

\`\`\`typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
    setSubmitStatus('success');
  } catch (error) {
    setSubmitStatus('error');
  }
};
\`\`\`

## 🎯 Optimizări Performance

Website-ul este optimizat pentru:
- ✅ Lighthouse Score 90+
- ✅ Core Web Vitals (LCP, FID, CLS)
- ✅ Lazy loading imagini
- ✅ Critical CSS inline
- ✅ Animații performante (GPU accelerated)

## 📱 Responsive Breakpoints

\`\`\`
Mobile:    < 640px
Tablet:    640px - 1024px
Desktop:   1024px+
\`\`\`

## ♿ Accessibility

- Semantic HTML5
- ARIA labels complete
- Keyboard navigation support
- Contrast ratio WCAG AA compliant
- Focus states vizibile

## 🚢 Deployment

### Vercel (Recomandat pentru Next.js)

1. Push codul pe GitHub
2. Conectează repo-ul la [Vercel](https://vercel.com)
3. Deploy automat la fiecare push

### Netlify

\`\`\`bash
npm run build
# Upload folder .next la Netlify
\`\`\`

### Hosting Custom

\`\`\`bash
npm run build
npm run start
# Rulează pe port 3000
\`\`\`

## 📊 Analytics & Tracking

Pentru a adăuga Google Analytics:

1. Creează cont [Google Analytics](https://analytics.google.com)
2. Copiază Measurement ID
3. Adaugă în `app/layout.tsx`:

\`\`\`typescript
<Script
  src={\`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX\`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {\`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  \`}
</Script>
\`\`\`

## 🎓 Structura Fișiere

\`\`\`
restaurant-premium/
├── app/
│   ├── layout.tsx          # Layout principal + SEO
│   ├── page.tsx            # Homepage cu toate secțiunile
│   └── globals.css         # Stiluri globale + fonts
├── components/
│   ├── Header.tsx          # Header sticky cu navigare
│   ├── HeroSection.tsx     # Hero full-screen
│   ├── AboutSection.tsx    # Despre restaurant
│   ├── MenuSection.tsx     # Meniu cu tabs
│   ├── GallerySection.tsx  # Galerie cu lightbox
│   ├── ExperienceSection.tsx     # 3 cards experiență
│   ├── TestimonialsSection.tsx   # Carousel recenzii
│   ├── EventsSection.tsx         # Evenimente private
│   ├── LocationSection.tsx       # Map + info
│   ├── ReservationSection.tsx    # Formular rezervare
│   ├── DeveloperSignature.tsx    # Semnătură dezvoltator
│   ├── Footer.tsx                # Footer complet
│   └── WhatsAppButton.tsx        # Buton flotant WhatsApp
├── public/
│   └── (imagini locale aici)
├── tailwind.config.ts      # Config Tailwind + culori
├── tsconfig.json          # TypeScript config
├── next.config.js         # Next.js config
└── package.json           # Dependencies

## 🆘 Suport & Întrebări

Pentru întrebări despre personalizare sau probleme tehnice:

📧 Email: [ta-email@example.com]
📅 Programează întâlnire: [Calendly](https://calendly.com/laudatu-roxana/30min)

## 📄 Licență

MIT License - Liber de utilizat pentru proiecte comerciale

## 👩‍💻 Creat de

**Roxana Lăudatu**
- Website: [Link către portfolio]
- Calendly: [https://calendly.com/laudatu-roxana/30min](https://calendly.com/laudatu-roxana/30min)

---

⭐ Dacă acest template ți-a fost util, consideră să îl recomanzi!

**Website premium pentru restaurante, hoteluri și business-uri de top.**
