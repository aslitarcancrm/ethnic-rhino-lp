import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState<string>(`${import.meta.env.BASE_URL}aslitarcan.webp`);

  const handleLogoError = () => {
    if (logoSrc.endsWith("aslitarcan.webp")) {
      setLogoSrc(`${import.meta.env.BASE_URL}logo.png`);
    } else if (logoSrc.endsWith("logo.png")) {
      setLogoSrc(`${import.meta.env.BASE_URL}logo.webp`);
    } else if (logoSrc.endsWith("logo.webp")) {
      setLogoSrc(`${import.meta.env.BASE_URL}logoo.webp`);
    } else {
      setLogoSrc("");
    }
  };
  
  const menuItems = [
    "Why Choose Us?",
    "Before & After",
    "Techniques",
    "Benefits",
    "Testimonials",
    "FAQ",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt="Asli Tarcan Clinic"
                className="h-9 w-auto object-contain"
                onError={handleLogoError}
              />
            ) : (
              <div className="h-9 w-9" />
            )}
            <span className="text-[#0e1c2a] font-semibold tracking-wide">ASLI TARCAN CLINIC</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase().replace(/\s+/g, '-').replace(/\?/g, '')}`}
                className="text-[#0e1c2a]/80 hover:text-[#0e1c2a] text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              className="hidden sm:flex bg-[#0A84FF] hover:brightness-105 text-white font-semibold"
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Consultation
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-[#0e1c2a] p-2 lg:hidden" data-sheet-trigger>
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-primary border-l border-white/10 w-[280px]">
                <nav className="flex flex-col gap-6 mt-8">
                  {menuItems.map((item, i) => (
                    <a
                      key={i}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-').replace(/\?/g, '')}`}
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:text-accent text-lg font-medium"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

