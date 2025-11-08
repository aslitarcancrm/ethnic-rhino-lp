# Ethnic Rhinoplasty Landing Page

A high-converting, fully responsive landing page for ethnic rhinoplasty consultations. Built with React + Vite + TypeScript + TailwindCSS for optimal performance and Google Ads conversion.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
ethnic-rhino-lp/
├── src/
│   ├── components/
│   │   ├── ui/              # Base UI components (shadcn/ui style)
│   │   ├── Header.tsx       # Fixed navigation with mobile menu
│   │   ├── ConsultationForm.tsx  # Multi-step lead capture form
│   │   ├── BeforeAfterSlider.tsx # Interactive comparison slider
│   │   ├── BenefitsSection.tsx
│   │   ├── TechniquesSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── Footer.tsx       # Footer with WhatsApp button
│   ├── hooks/
│   │   └── use-toast.ts     # Toast notification hook
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── assets/              # Images and media
│   ├── App.tsx              # Main application
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles + Tailwind
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## ✨ Features

### Core Features
- ✅ **Multi-step consultation form** with progress indicator
- ✅ **Interactive Before/After slider** with drag functionality
- ✅ **Fully responsive** mobile-first design
- ✅ **Google Ads conversion tracking** (gtag events)
- ✅ **WhatsApp floating button** for instant contact
- ✅ **Trust badges** and social proof elements
- ✅ **FAQ accordion** for common questions
- ✅ **Smooth scroll navigation**
- ✅ **Performance optimized** with code splitting

### Technical Features
- ⚡ **Vite** for lightning-fast builds
- 🎨 **TailwindCSS** for utility-first styling
- 🔷 **TypeScript** for type safety
- 🎭 **shadcn/ui** component patterns
- 📱 **Mobile-optimized** with touch gestures
- 🎯 **SEO-ready** with meta tags and schema markup

## 🔧 Configuration

### Google Ads Conversion Tracking

Update `index.html` with your conversion ID:

```html
<!-- Replace AW-CONVERSION_ID with your actual ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-CONVERSION_ID');
</script>
```

Form submissions automatically fire `generate_lead` events.

### Images

Replace placeholder images in `src/assets/`:
- `hero-main.webp` - After rhinoplasty result
- `hero-before.webp` - Before rhinoplasty

Recommended format: **WebP** (1200×900px for main, 600×600px for before)

### Contact Information

Update in:
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `index.html` (meta tags)

## 📦 Building for Production

```bash
npm run build
```

Outputs optimized static files to `dist/` folder.

### Performance Targets
- ✅ Lighthouse Score: 95+
- ✅ LCP: <1.8s
- ✅ CLS: <0.1
- ✅ FID: <100ms

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop `dist/` folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push `dist/` contents to gh-pages branch
```

## 🎯 Conversion Optimization Tips

1. **A/B Test Headlines** - Try different value propositions
2. **Optimize Images** - Use patient consent, high-quality results
3. **Simplify Form** - Current 3-step flow tested for conversions
4. **Add Social Proof** - Reviews, testimonials, case count
5. **Speed Matters** - Keep bundle <150KB gzipped

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite 5** - Build tool
- **TypeScript** - Type safety
- **TailwindCSS 4** - Styling
- **Lucide React** - Icons
- **CVA** - Variant management

## 📝 License

Private - For internal use only.

## 🤝 Support

For questions or issues, contact the development team.

---

**Built for high-converting Google Ads campaigns** 🚀

