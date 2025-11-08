import { useEffect, useRef, useState } from "react";

export interface Testimonial {
  name: string;
  afterLabel: string;
  beforeImage: string; // kept for data compatibility, not rendered here
  afterImage: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  brandLogoSrc?: string;
  brandLogoAlt?: string;
}

export const TestimonialSlider = ({ testimonials, brandLogoSrc, brandLogoAlt }: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [logoError, setLogoError] = useState(false);
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance every 4 seconds
  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [testimonials.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null || startY.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    const dy = e.changedTouches[0].clientY - startY.current;
    startX.current = null;
    startY.current = null;
    // Horizontal swipe threshold and dominance
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) goToNext();
      else goToPrevious();
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative">
      {/* Canvas with fixed base size 350x440 and responsive upscale */}
      <div
        key={currentIndex}
        className="relative w-[350px] h-[440px] sm:w-[360px] sm:h-[452px] md:w-[420px] md:h-[528px] lg:w-[560px] lg:h-[704px] rounded-xl overflow-hidden shadow-xl mx-auto bg-black/5 animate-fade-in"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Main After Image */}
        <img
          src={currentTestimonial.afterImage}
          alt={`After result for ${currentTestimonial.name}`}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Name Label - top-left */}
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-block bg-black/60 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full">
            {currentTestimonial.name}
          </span>
        </div>

        {/* Brand Logo overlay - top-right */}
        <div className="absolute top-3 right-3 bg-white/95 rounded-md shadow p-2 flex items-center justify-center z-20">
          {brandLogoSrc && !logoError ? (
            <img
              src={brandLogoSrc}
              alt={brandLogoAlt || "Clinic logo"}
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="h-8 w-8 md:h-10 md:w-10 grid place-items-center border-2 border-primary text-primary font-bold rounded">
              ATC
            </div>
          )}
        </div>
      </div>

      {/* Google Reviews badge - below slider */}
      <div className="flex justify-center mt-2">
        <div className="inline-flex items-center gap-2 bg-white rounded-full shadow px-4 py-1.5">
          <span className="text-[11px] font-semibold text-gray-800">Google Reviews</span>
          <span className="text-[11px] font-semibold">4.8</span>
          <div className="flex text-[#F4B400]">{Array.from({length:5}).map((_,i)=>(<svg key={i} viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.869 1.402-8.168L.132 9.21l8.2-1.192z"/></svg>))}</div>
          <span className="text-[11px] text-gray-600">(2,348)</span>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 pt-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-8 bg-primary" : "w-2.5 bg-muted"}
            `}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
