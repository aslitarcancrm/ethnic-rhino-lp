import React, { useEffect, useRef } from "react";

export const PressSection: React.FC = () => {
  const modules = (import.meta as any).glob("@/assets/press/*.{png,jpg,jpeg,webp,svg}", {
    eager: true,
    as: "url",
  }) as Record<string, string>;
  const logos = Object.values(modules);

  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || logos.length <= 1) return;

    const step = () => {
      if (!el) return;
      const full = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= full - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: el.clientWidth * 0.6, behavior: "smooth" });
      }
    };
    const id = window.setInterval(step, 2200);
    return () => window.clearInterval(id);
  }, [logos.length]);

  if (logos.length === 0) return null;

  return (
    <section className="pt-4 pb-6 md:pt-6 md:pb-8 bg-white text-[#0e1c2a]">
      <div className="container max-w-6xl mx-auto px-4">
        <h3 className="text-center text-sm md:text-base mb-3">
          Trusted by Thousands, Recognized by the World's Leading Newspapers
        </h3>

        <div
          ref={scrollerRef}
          className="flex gap-10 overflow-x-auto no-scrollbar snap-x snap-mandatory items-center justify-start"
        >
          {logos.map((src, i) => (
            <div key={i} className="min-w-[55%] sm:min-w-[40%] md:min-w-[28%] snap-start flex items-center justify-center">
              <img src={src} alt="Publication logo" className="h-10 md:h-12 w-auto opacity-90" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
