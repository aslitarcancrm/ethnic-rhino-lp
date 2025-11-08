import { Clock, CheckCircle2, Bed, Feather, Briefcase, Syringe } from "lucide-react";

export const OperationSummary = () => {
  const items = [
    { icon: Clock, title: "Operation Time", value: "2–3 Hours" },
    { icon: CheckCircle2, title: "Persistence of Results", value: "Lifetime" },
    { icon: Bed, title: "Hospitalization", value: "1 Night" },
    { icon: Feather, title: "Sensitivity Time", value: "3 Weeks" },
    { icon: Briefcase, title: "Return to Work", value: "10–14 Days" },
    { icon: Syringe, title: "Anesthesia", value: "General Anesthesia" },
  ];

  return (
    <section className="py-10 md:py-14 bg-[#0e1c2a] text-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-4">Operation Summary</h2>
        <div className="text-center text-white/80 max-w-4xl mx-auto mb-10 text-sm md:text-base space-y-2">
          <p>
            We specialize in advanced ethnic rhinoplasty techniques performed by some of the most experienced and skilled surgeons in the field. Our goal is to create results that honor your unique facial features while achieving beautiful, natural harmony.
          </p>
          <p>
            With our all‑inclusive package featuring VIP transfers, luxury hotel accommodation, and comprehensive post‑operative care, you can enjoy a smooth, stress‑free experience from start to finish.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, value }, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col items-center text-center shadow">
              <Icon className="w-8 h-8 text-accent mb-4" />
              <div className="text-white/80 text-sm">{title}</div>
              <div className="text-lg font-semibold mt-1">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
