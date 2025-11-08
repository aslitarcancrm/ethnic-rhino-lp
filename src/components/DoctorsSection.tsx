import React from "react";

function toTitle(filePath: string): string {
  try {
    const file = decodeURIComponent(filePath.split("/").pop() || "");
    const base = file.replace(/\.[^/.]+$/, "");
    const clean = base.replace(/[-_]+/g, " ").trim();
    return clean.replace(/\b\w/g, (m) => m.toUpperCase());
  } catch {
    return "";
  }
}

const ROLE_OVERRIDES: Record<string, string> = {
  "cmo-bulent": "Head Physician & Aesthetic Dr.",
  "dr.fatma": "Anesthesiologist",
  "dr-fatma": "Anesthesiologist",
  "dr-fatima": "Anesthesiologist",
  "dr.sedat": "E.N.T Surgeon",
  "dr-sedat": "E.N.T Surgeon",
  "prof.-dr.-umit": "E.N.T Surgeon",
  "prof-dr-umit": "E.N.T Surgeon",
  "dr.ummuhan": "Dermatologist",
  "dr-ummuhan": "Dermatologist",
};

const NAME_OVERRIDES: Record<string, string> = {
  "cmobulent": "Head Physician & Aesthetic Dr.",
  "drfatma": "Anesthesiologist",
  "drsedat": "E.N.T Surgeon",
  "prof.drumit": "E.N.T Surgeon",
  "profdrumit": "E.N.T Surgeon",
  "drummuhan": "Dermatologist",
};

function normalizeKey(v: string): string {
  return v
    .toLowerCase()
    .replace(/\.[^/.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$|\s+/g, "");
}

function normalizeName(v: string): string {
  return v.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function roleFrom(path: string, displayName: string): string {
  const fileKey = normalizeKey(path.split("/").pop() || "");
  if (ROLE_OVERRIDES[fileKey]) return ROLE_OVERRIDES[fileKey];
  const nameKey = normalizeName(displayName);
  if (NAME_OVERRIDES[nameKey]) return NAME_OVERRIDES[nameKey];
  return "Rhinoplasty Surgeon";
}

export const DoctorsSection: React.FC = () => {
  const modules = (import.meta as any).glob("@/assets/doctors/*.{png,jpg,jpeg,webp,svg}", {
    eager: true,
    as: "url",
  }) as Record<string, string>;
  const entries = Object.entries(modules);
  if (entries.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-[#111418] text-white" id="doctors">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold">Asli Tarcan's Doctors</h2>
          <p className="text-white/80 max-w-3xl mx-auto mt-3 text-sm md:text-base">
            Meet our expert team. Add your doctor photos to <code>src/assets/doctors/</code> and they will appear here automatically.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {entries.map(([path, url]) => {
            const name = toTitle(path) || "Clinic Doctor";
            const role = roleFrom(path, name);
            return (
              <div key={path} className="rounded-xl overflow-hidden bg-[#1b1f23] border border-white/10 shadow">
                <div className="aspect-square overflow-hidden">
                  <img src={url} alt={name} className="w-full h-full object-cover" />
                </div>
                <div className="px-3 py-3">
                  <div className="text-sm font-semibold leading-tight">{name}</div>
                  <div className="text-xs text-white/70">{role}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
