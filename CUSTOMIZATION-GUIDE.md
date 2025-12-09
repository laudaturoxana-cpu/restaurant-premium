# 📋 Ghid Rapid de Personalizare

Acest ghid te ajută să personalizezi rapid website-ul pentru restaurantul tău.

## 🚀 Start Rapid

1. **Instalează dependințele:**
\`\`\`bash
cd restaurant-premium
npm install
\`\`\`

2. **Pornește serverul:**
\`\`\`bash
npm run dev
\`\`\`

3. **Deschide în browser:**
\`\`\`
http://localhost:3000
\`\`\`

## ✏️ Checklist Personalizare

### 1️⃣ Informații de Bază

#### Fișier: `app/layout.tsx`

\`\`\`typescript
export const metadata: Metadata = {
  title: "Gustos - Restaurant Premium în București | Fine Dining", // ✏️ Schimbă aici
  description: "Experiențe culinare rafinate...", // ✏️ Descriere SEO
  // ...
};
\`\`\`

#### Fișier: `components/Header.tsx`

**Linia 35:** Schimbă `[LOGO]` cu numele restaurantului sau logo SVG

\`\`\`typescript
<div className="...">
  GUSTOS  {/* ✏️ Schimbă numele aici */}
</div>
\`\`\`

**Linia 55:** Actualizează numărul de telefon
\`\`\`typescript
<a href="tel:0721123456">  {/* ✏️ Numărul real */}
  <span className="text-sm">0721 123 456</span>
</a>
\`\`\`

### 2️⃣ Secțiunea Hero

#### Fișier: `components/HeroSection.tsx`

**Linia 21:** Schimbă anul deschiderii
\`\`\`typescript
<span className="...">București | Est. 2020</span>  {/* ✏️ Anul tău */}
\`\`\`

**Linia 28:** Numele restaurantului
\`\`\`typescript
<h1 className="...">GUSTOS</h1>  {/* ✏️ Numele restaurantului */}
\`\`\`

**Linia 37:** Tagline-ul restaurantului
\`\`\`typescript
<p className="...">
  Unde aromele Italiei întâlnesc rafinamentul bucureștean  {/* ✏️ Tagline unic */}
</p>
\`\`\`

**Linia 45:** Descriere scurtă
\`\`\`typescript
<p className="...">
  Descoperă echilibrul perfect...  {/* ✏️ Descrierea ta */}
</p>
\`\`\`

**Linia 13:** Imagine de fundal
\`\`\`typescript
style={{
  backgroundImage: "url('/images/hero-background.jpg')",  {/* ✏️ Poza ta */}
}}
\`\`\`

### 3️⃣ Despre Restaurant

#### Fișier: `components/AboutSection.tsx`

**Linia 33:** Titlul secțiunii
\`\`\`typescript
<h2 className="...">
  Pasiune, Autenticitate și Atenție la Detaliu  {/* ✏️ Titlu personalizat */}
</h2>
\`\`\`

**Liniile 37-55:** Povestea restaurantului
\`\`\`typescript
<p>
  Am deschis <span className="...">Gustos</span> din  {/* ✏️ Numele tău */}
  dorința de a aduce Bucureștiului...
  Chef-ul nostru <span className="...">Marco Bellini</span>,  {/* ✏️ Numele chef-ului */}
  care aduce o experiență de peste 15 ani în bucătăriile de top din Italia.
</p>
\`\`\`

**Liniile 67-82:** Statistici
\`\`\`typescript
<p className="...">2020</p>  {/* ✏️ Anul deschiderii */}
<p className="...">15 Ani</p>  {/* ✏️ Experiență chef */}
<p className="...">25 Mese</p>  {/* ✏️ Număr mese */}
<p className="...">4.9 ★</p>  {/* ✏️ Rating */}
\`\`\`

### 4️⃣ Meniu cu Produse

#### Fișier: `components/MenuSection.tsx`

**Liniile 16-47:** Modifică preparatele

\`\`\`typescript
const menuData: Record<string, MenuItem[]> = {
  antreu: [
    {
      name: 'Carpaccio de Vită',  // ✏️ Numele preparatului
      description: 'File de vită Angus...',  // ✏️ Descriere
      ingredients: 'vită Angus, rucola...',  // ✏️ Ingrediente
      price: 68,  // ✏️ Preț în lei
      image: '/images/carpaccio.jpg',  // ✏️ Poza preparatului
      badges: ['signature'],  // ✏️ Badge-uri: 'vegan', 'spicy', 'signature', 'new'
    },
    // Adaugă mai multe preparate...
  ],
  principale: [
    // Similar pentru preparate principale
  ],
  deserturi: [
    // Similar pentru deserturi
  ],
};
\`\`\`

**Liniile 179-186:** Meniu Degustare
\`\`\`typescript
<h3 className="...">
  Meniu Degustare Chef Marco Bellini  {/* ✏️ Numele chef-ului */}
</h3>
<p className="...">XXX lei/persoană</p>  {/* ✏️ Preț meniu degustare */}
\`\`\`

### 5️⃣ Galerie

#### Fișier: `components/GallerySection.tsx`

**Liniile 11-53:** Adaugă/înlocuiește imagini

\`\`\`typescript
const galleryImages: GalleryImage[] = [
  {
    url: '/images/gallery/dish1.jpg',  // ✏️ Path imagine
    category: 'preparate',  // ✏️ 'toate' | 'preparate' | 'ambient' | 'evenimente'
    alt: 'Preparat signature',  // ✏️ Descriere pentru SEO
  },
  // Adaugă mai multe imagini...
];
\`\`\`

### 6️⃣ Testimoniale

#### Fișier: `components/TestimonialsSection.tsx`

**Liniile 11-44:** Recenzii reale

\`\`\`typescript
const testimonials: Testimonial[] = [
  {
    name: 'Maria T.',  // ✏️ Inițialele clientului
    review: 'Am aniversat aici...',  // ✏️ Recenzia completă
    rating: 5,  // ✏️ Rating 1-5
    source: 'Google Reviews',  // ✏️ Sursa
  },
  // Adaugă mai multe testimoniale...
];
\`\`\`

### 7️⃣ Evenimente Private

#### Fișier: `components/EventsSection.tsx`

**Linia 24:** Număr maxim persoane
\`\`\`typescript
<p className="...">
  până la evenimente corporate pentru până la 40 persoane.  {/* ✏️ Nr. persoane */}
</p>
\`\`\`

### 8️⃣ Locație & Contact

#### Fișier: `components/LocationSection.tsx`

**Linia 32:** Google Maps embed
\`\`\`typescript
<iframe
  src="https://www.google.com/maps/embed?pb=..."  {/* ✏️ Link embed Google Maps */}
  // ...
/>
\`\`\`

**📍 Cum obții link-ul Google Maps:**
1. Caută restaurantul pe [Google Maps](https://maps.google.com)
2. Click pe "Share" → "Embed a map"
3. Copiază codul iframe și înlocuiește `src`

**Liniile 49-88:** Informații contact

\`\`\`typescript
<p className="...">
  Strada Giuseppe Verdi, Nr. 24  {/* ✏️ Adresa ta */}
  Sector 1, București
</p>

{/* Program */}
<p>Luni - Joi: 18:00 - 23:00</p>  {/* ✏️ Programul tău */}
<p>Vineri - Sâmbătă: 18:00 - 00:00</p>
<p>Duminică: 18:00 - 23:00</p>

{/* Telefon */}
<a href="tel:0721123456">0721 123 456</a>  {/* ✏️ Telefonul tău */}

{/* Email */}
<a href="mailto:contact@gustos.ro">contact@gustos.ro</a>  {/* ✏️ Email-ul tău */}

{/* Parcare */}
<p>Disponibilă în parcare Plaza (2 min)</p>  {/* ✏️ Info parcare */}

{/* Metro */}
<p>Stația Universitate (5 min)</p>  {/* ✏️ Stație metro */}
\`\`\`

### 9️⃣ Formular Rezervare

#### Fișier: `components/ReservationSection.tsx`

Formularul este funcțional, dar trebuie integrat cu un serviciu de email.

**Opțiuni de integrare:**

**A) EmailJS (Recomandat - Gratuit):**

1. Creează cont pe [emailjs.com](https://www.emailjs.com/)
2. Configurează un serviciu email
3. Instalează pachetul:
\`\`\`bash
npm install @emailjs/browser
\`\`\`
4. Modifică în `ReservationSection.tsx`:

\`\`\`typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'service_xxxxxxx',  // Service ID de pe EmailJS
      'template_xxxxxxx',  // Template ID de pe EmailJS
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        preferences: formData.preferences,
      },
      'public_key_xxxxxxx'  // Public Key de pe EmailJS
    );

    setIsSubmitting(false);
    setSubmitStatus('success');
  } catch (error) {
    console.error('Error:', error);
    setIsSubmitting(false);
    setSubmitStatus('error');
  }
};
\`\`\`

**B) Formspree (Alternativă):**

\`\`\`typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    setSubmitStatus('success');
  }
  setIsSubmitting(false);
};
\`\`\`

### 🔟 WhatsApp Button

#### Fișier: `components/WhatsAppButton.tsx`

**Linia 9:** Număr WhatsApp

\`\`\`typescript
const whatsappNumber = '40721123456';  // ✏️ Format: cod țară + număr (fără +)
const message = encodeURIComponent('Bună! Aș dori să rezerv o masă la Gustos.');  // ✏️ Mesaj
\`\`\`

**Exemplu format corect:**
- 🇷🇴 România: `40721123456` (40 + numărul fără 0)
- 🇮🇹 Italia: `39123456789`

### 1️⃣1️⃣ Footer

#### Fișier: `components/Footer.tsx`

**Liniile 16-24:** Social media

\`\`\`typescript
<a href="https://instagram.com/gustos_restaurant">  {/* ✏️ Link Instagram */}
<a href="https://facebook.com/gustos">  {/* ✏️ Link Facebook */}
<a href="https://tripadvisor.com/gustos">  {/* ✏️ Link TripAdvisor */}
\`\`\`

**Liniile 78-101:** Informații contact (Similar cu LocationSection)

**Liniile 108-122:** Newsletter (opțional - necesită integrare Mailchimp/Brevo)

## 🎨 Personalizare Culori

Dacă vrei să schimbi paleta de culori, modifică:

#### Fișier: `tailwind.config.ts`

\`\`\`typescript
colors: {
  primary: {
    DEFAULT: '#1A1A1A',  // ✏️ Culoare primară (negru)
    light: '#2A2A2A',
  },
  secondary: {
    DEFAULT: '#B8956A',  // ✏️ Culoare secundară (auriu)
    light: '#C9A876',
    dark: '#A67C52',
  },
  // ...
}
\`\`\`

## 📸 Imagini - Unde le pui?

1. Creează folder: `public/images/`
2. Organizează în subfoldere:
   - `public/images/hero/` - Imagini hero
   - `public/images/about/` - Poze despre restaurant
   - `public/images/menu/` - Preparate
   - `public/images/gallery/` - Galerie
   - `public/images/events/` - Evenimente

3. Folosește în cod:
\`\`\`typescript
backgroundImage: "url('/images/hero/main.jpg')"
\`\`\`

**Dimensiuni recomandate:**
- Hero: 1920x1080px (landscape)
- Meniu: 800x800px (square)
- Galerie: 1200x1200px (square)
- About: 1200x800px (landscape)

## 🚀 Deploy pe Vercel (Gratuit)

1. Push codul pe GitHub
2. Intră pe [vercel.com](https://vercel.com)
3. Click "New Project"
4. Selectează repo-ul
5. Click "Deploy"

✅ Website-ul va fi live în ~2 minute!

## 📱 Testare Responsive

Testează pe:
- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (375px)

Chrome DevTools: `F12` → Toggle device toolbar

## ✅ Checklist Final Înainte de Lansare

- [ ] Toate placeholder-urile `[XXX]` înlocuite
- [ ] Imagini reale încărcate
- [ ] Număr telefon corect peste tot
- [ ] Email-uri corecte
- [ ] Google Maps configurat cu adresa corectă
- [ ] WhatsApp număr corect (format internațional)
- [ ] Formular rezervare integrat cu EmailJS/Formspree
- [ ] Link-uri social media actualizate
- [ ] SEO metadata completată (`app/layout.tsx`)
- [ ] Testat pe mobile, tablet, desktop
- [ ] Viteza website testată (Lighthouse 90+)

## 🆘 Probleme Comune

**Problem:** Website nu pornește
\`\`\`bash
# Șterge node_modules și reinstalează
rm -rf node_modules package-lock.json
npm install
npm run dev
\`\`\`

**Problem:** Imagini nu se încarcă
- Verifică că path-ul e corect: `/images/...` (cu `/` la început)
- Verifică că imaginea e în folder `public/`

**Problem:** Animații nu funcționează
- Verifică că Framer Motion e instalat: `npm install framer-motion`

## 📞 Suport

Pentru întrebări tehnice sau asistență:

📧 Email: [ta-email@example.com]
📅 Calendly: [https://calendly.com/laudatu-roxana/30min](https://calendly.com/laudatu-roxana/30min)

---

**Succes cu restaurantul tău!** 🍽️✨
