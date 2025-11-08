import React, { useEffect, useRef, useState } from "react";

export const HappyPatients: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Auto-load all images dropped into src/assets/patients
  // Supports .jpg, .jpeg, .png, .webp
  const imported = (import.meta as any).glob("/src/assets/patients/*.{jpg,jpeg,png,webp}", {
    eager: true,
    as: "url",
  }) as Record<string, string>;
  const images = Object.values(imported).sort();

  const getCardWidth = () => {
    const el = firstCardRef.current;
    if (!el) return 0;
    const style = window.getComputedStyle(el);
    const marginRight = parseFloat(style.marginRight || "0");
    return el.clientWidth + marginRight + 24; // include gap-6 (24px)
  };

  const scrollToIndex = (index: number) => {
    const wrap = scrollerRef.current;
    if (!wrap) return;
    const cardWidth = getCardWidth();
    wrap.scrollTo({ left: Math.max(0, index * cardWidth), behavior: "smooth" });
    setActive(index);
  };

  const scrollBy = (dir: "left" | "right") => {
    const newIndex = dir === "left" ? Math.max(0, active - 1) : Math.min(images.length - 1, active + 1);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const wrap = scrollerRef.current;
    if (!wrap) return;
    const onScroll = () => {
      const cardWidth = getCardWidth();
      if (!cardWidth) return;
      const idx = Math.round(wrap.scrollLeft / cardWidth);
      setActive(Math.min(images.length - 1, Math.max(0, idx)));
    };
    wrap.addEventListener("scroll", onScroll, { passive: true });
    return () => wrap.removeEventListener("scroll", onScroll);
  }, [images.length]);

  if (images.length === 0) {
    return null; // nothing to show yet
  }

  return (
    <section className="py-12 md:py-16 px-4 bg-[#0e1c2a] text-white">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Happy Patients</h2>
          <p className="mt-3 text-white/70 max-w-3xl mx-auto">
            Explore real transformations from our patients. See how ethnic rhinoplasty refines features while preserving natural identity.
          </p>
        </div>

        <div className="relative">
          <button
            aria-label="Previous"
            onClick={() => scrollBy("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary w-10 h-10 rounded-full items-center justify-center shadow"
          >
            ‹
          </button>

          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 no-scrollbar"
          >
            {images.map((src, idx) => (
              <div
                key={idx}
                ref={idx === 0 ? firstCardRef : undefined}
                className="min-w-[260px] sm:min-w-[320px] md:min-w-[420px] lg:min-w-[460px] snap-start"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl bg-black/10">
                  <img src={src} alt="Happy patient" className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover" />
                </div>
              </div>
            ))}
          </div>

          <button
            aria-label="Next"
            onClick={() => scrollBy("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary w-10 h-10 rounded-full items-center justify-center shadow"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active
                  ? "w-8 h-2 bg-[#0A84FF] shadow-[0_0_0_3px_rgba(10,132,255,.25)]"
                  : "w-2.5 h-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="#consultation"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-[#0A84FF] hover:bg-[#0077ED] text-white font-semibold shadow-lg transition"
          >
            Request More Photos
          </a>
        </div>
      </div>
    </section>
  );
};
