import { Header } from "@/components/Header";
import { ConsultationForm } from "@/components/ConsultationForm";
// import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
// import { TechniquesSection } from "@/components/TechniquesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { TestimonialSlider, Testimonial } from "@/components/TestimonialSlider";
import { ContactBar } from "@/components/ContactBar";
import { TrustRibbon } from "@/components/TrustRibbon";
import { HappyPatients } from "@/components/HappyPatients";
import { PressSection } from "@/components/PressSection";
import { OperationSummary } from "@/components/OperationSummary";
import { LifeChangingVideos } from "@/components/LifeChangingVideos";
import { DoctorsSection } from "@/components/DoctorsSection";

// Attempt to auto-load images from src/assets/hero
const heroModules = (import.meta as any).glob("@/assets/hero/*.{webp,jpg,jpeg,png}", {
  eager: true,
  as: "url",
}) as Record<string, string>;
const heroEntries = Object.entries(heroModules);

// Helper to derive a nice name from filename
const deriveName = (p: string) => {
  try {
    const filename = decodeURIComponent(p.split("/").pop() || "");
    const base = filename.replace(/\.[^/.]+$/, "");
    const clean = base.replace(/[-_]+/g, " ").trim();
    return clean.replace(/\b\w/g, (m) => m.toUpperCase()) || undefined;
  } catch {
    return undefined;
  }
};

// Fallback images
const beforeImage = "/src/assets/hero-before.webp";
const afterImage = "/src/assets/hero-main.webp";

// Build testimonials
let testimonials: Testimonial[] = [];
if (heroEntries.length > 0) {
  testimonials = heroEntries.map(([path, url], i) => ({
    name: deriveName(path) || `Patient ${i + 1}`,
    afterLabel: "",
    beforeImage: "",
    afterImage: url,
  }));
} else {
  testimonials = [
    {
      name: "Jonathan Joseph",
      afterLabel: "Results After 10 Months",
      beforeImage: beforeImage,
      afterImage: afterImage,
    },
    {
      name: "Mark",
      afterLabel: "Results After 15 Months",
      beforeImage: "/src/assets/hero-before.webp",
      afterImage: "/src/assets/hero-main.webp",
    },
    {
      name: "Adam",
      afterLabel: "Results After 2 Years",
      beforeImage: beforeImage,
      afterImage: afterImage,
    },
  ];
}

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactBar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-start lg:items-center justify-center pt-4 lg:pt-6 pb-6 px-4"
        style={{ backgroundColor: '#000' }}
      >
        {/* side fade overlay */}
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.85) 90%, rgba(0,0,0,1) 100%)'
        }} />
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-8 lg:gap-12 items-center">
            {/* Left Side: Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div>
                <h1 className="text-[22px] sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Turkey’s Most Trusted <span className="shiny-gold">Ethnic Rhinoplasty</span> Clinic
                </h1>
                <p className="text-white/90 text-base sm:text-lg mb-5 max-w-2xl">
                  Under the guidance of our expert team, your dream Ethnic Rhinoplasty is coming to life with precision and care.
                </p>
                <ul className="text-white/90 text-base sm:text-lg space-y-3 max-w-2xl mx-auto lg:mx-0">
                  <li>✨ Free Online Consultation</li>
                  <li>🌍 15+ Years of Ethnic Rhinoplasty Expertise</li>
                  <li>💎 Customized Techniques for Natural, Balanced Results</li>
                  <li>🩺 Comprehensive Pre- and Post-Operative Care</li>
                  <li>🏨 All-Inclusive Packages: Transfers & 5-Star Hotel</li>
                  <li>🇹🇷 Trusted by Thousands of Patients from Around the World</li>
                </ul>
              </div>
            </div>

            {/* Middle: Testimonial Slider */}
            <div className="w-full flex justify-center lg:justify-center">
              <TestimonialSlider
                testimonials={testimonials}
                brandLogoSrc={`${import.meta.env.BASE_URL}logoo.webp`}
                brandLogoAlt="Asli Tarcan Clinic"
              />
            </div>

            {/* Right Side: Consultation Form */}
            <div className="flex items-center justify-center" id="consultation">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Press logos under the form/hero */}
      <PressSection />

      {/* Happy Patients Section under Hero */}
      <div className="bg-[#0e1c2a]">
        <HappyPatients />
      </div>

      {/* Trust Ribbon moved below hero */}
      <TrustRibbon />

      {/* Operation Summary */}
      <OperationSummary />

      {/* Doctors Section */}
      <DoctorsSection />

      {/* Life Changing Videos */}
      <LifeChangingVideos />

      {/* Benefits Section */}
      <div className="py-12 md:py-20 bg-[#0e1c2a]">
        <BenefitsSection />
      </div>

      {/* FAQ Section */}
      <div className="py-12 md:py-20">
        <FAQSection />
      </div>

      <Footer />
    </div>
  );
}

export default App;

