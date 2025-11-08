import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function toEmbed(url: string): string {
  try {
    const trimmed = url.trim();
    if (trimmed.includes("/shorts/")) {
      const id = trimmed.split("/shorts/")[1].split(/[?&]/)[0];
      return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
    }
    const u = new URL(trimmed);
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
    }
    const id = u.searchParams.get("v") || "";
    return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
  } catch {
    return url;
  }
}

export const LifeChangingVideos: React.FC = () => {
  // User-provided YouTube links
  const videos = [
    "https://www.youtube.com/watch?v=bQwJCL6Ps2I",
    "https://youtu.be/SDEx5bTJS0c",
    "https://youtu.be/csqxzd4FHNk",
    "https://youtu.be/7E1sqQjc8J0",
    "https://youtu.be/FEUGLrPNc6w",
    "https://youtu.be/YphNbxafQfA",
  ];

  if (videos.length === 0) return null;

  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16 bg-[#1b3f9e] text-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-3">Life‑Changing Videos</h2>
        <p className="text-center text-white/80 max-w-3xl mx-auto mb-8 text-sm md:text-base">
          Real patient stories and day‑by‑day recoveries.
        </p>

        <div className="relative">
          <button onClick={() => scrollBy("left")} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary w-10 h-10 rounded-full items-center justify-center shadow">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div ref={scrollerRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
            {videos.map((url, i) => (
              <div key={i} className="min-w-[260px] sm:min-w-[320px] md:min-w-[360px] snap-start">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-black/10 aspect-[9/16]">
                  <iframe
                    src={toEmbed(url)}
                    title={`video-${i}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => scrollBy("right")} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary w-10 h-10 rounded-full items-center justify-center shadow">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
