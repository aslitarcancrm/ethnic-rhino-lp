import { Award, Users, Heart, Shield, Star, Clock } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Award,
      title: "Most Trusted Clinic",
      description:
        "Surgeons with extensive experience in ethnic rhinoplasty understand unique nasal structures and aesthetic goals.",
    },
    {
      icon: Users,
      title: "Cultural Sensitivity",
      description:
        "We respect and preserve your ethnic identity while achieving natural, balanced results.",
    },
    {
      icon: Heart,
      title: "Natural Results",
      description:
        "Preservation-based techniques maintain your heritage while refining proportions harmoniously.",
    },
    {
      icon: Shield,
      title: "Approved by Ministry of Turkey",
      description:
        "GMC-registered surgeons, CQC‑approved facilities, and comprehensive pre/post‑operative care.",
    },
    {
      icon: Star,
      title: "5‑Star Reviews",
      description:
        "Hundreds of satisfied patients across all ethnic backgrounds trust our expertise.",
    },
    {
      icon: Clock,
      title: "Personalized Care",
      description:
        "Tailored treatment plans with detailed consultations to understand your unique goals.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 px-4 bg-[#111418]" id="benefits">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-accent mb-3">
            Why Choose Us?
          </h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Specialist Ethnic Rhinoplasty Care
          </h3>
          <p className="text-white/80 text-base lg:text-lg max-w-4xl mx-auto">
            We understand that ethnic rhinoplasty requires specialized knowledge and cultural sensitivity.
            Our surgeons combine technical excellence with artistic vision to deliver results that honor your heritage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-[#1b1f23] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 animate-fade-in border border-white/10"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">
                {benefit.title}
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

