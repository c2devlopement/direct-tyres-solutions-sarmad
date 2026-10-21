"use client";

import { useEffect, useState } from "react";
import { Video, X } from "lucide-react";

const DISMISS_KEY = "dts-teaser-popup-dismissed";

export default function SiteTeaserPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY)) return;
    } catch {
      /* ignore */
    }

    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function dismiss() {
    setOpen(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-dark/80 backdrop-blur-sm p-4"
      onClick={dismiss}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site highlight"
        className="relative w-full max-w-md rounded-3xl bg-primary border border-white/10 shadow-2xl p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative z-10">
          <span className="inline-block text-secondary font-bold tracking-[0.15em] uppercase text-xs mb-3">
            No Stock Photos Here
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-black text-white leading-tight">
            This Page Is Calm. Our Call-Outs Never Are. 👀
          </h2>
          <p className="text-gray-300 text-[15px] leading-relaxed mt-4">
            Real stranded drivers, real flat tyres, real vans rolling up across Greater Manchester, Cheshire, Lancashire &amp; West Yorkshire — filmed as it happened, not staged.
          </p>

          <button
            type="button"
            onClick={dismiss}
            className="mt-6 inline-flex items-center gap-2 bg-secondary text-primary font-heading font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full hover:bg-secondary-hover transition-colors shadow-lg"
          >
            <Video className="h-4 w-4" fill="currentColor" strokeWidth={0} />
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}
