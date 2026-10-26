import { MessageCircle, PhoneCall } from "lucide-react";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <a
        href="https://wa.me/447955266077"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
      </a>
      <a
        href="tel:07955266077"
        aria-label="Call 07955 266 077"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary shadow-lg transition-transform hover:scale-110 active:scale-95"
      >
        <PhoneCall className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      </a>
    </div>
  );
}
