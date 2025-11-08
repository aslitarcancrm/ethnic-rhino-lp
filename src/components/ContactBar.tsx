import { MessageCircle, Calendar } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=905357164020&text=Hi!%20I%27m%20interested%20in%20your%20Ethnic%20Rhinoplasty%20treatments%2C%20services%20and%20pricing.%20Can%20you%20share%20more%20details%3F&type=phone_number&app_absent=0";

export const ContactBar = () => {
  return (
    <div className="mt-16 sticky top-16 z-40 bg-black/95 border-b border-white/10 shadow-sm text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-3 md:gap-4 py-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 rounded-md text-sm font-semibold bg-[#25D366] text-white hover:brightness-105 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
          <a
            href="#consultation"
            className="flex items-center justify-center gap-2 py-2 rounded-md text-sm font-semibold bg-[#0A84FF] text-white hover:brightness-105 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Free Consultation</span>
          </a>
        </div>
      </div>
    </div>
  );
};
