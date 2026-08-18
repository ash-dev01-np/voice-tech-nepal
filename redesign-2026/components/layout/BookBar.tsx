"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink, BOOK_MESSAGE } from "@/lib/content";

// Sticky mobile-only CTA — WhatsApp is how this audience actually books,
// so the bar keeps that one action reachable with a thumb at all times.
export default function BookBar() {
  return (
    <a
      href={whatsappLink(BOOK_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-[var(--accent)] py-3.5 text-sm font-semibold text-white shadow-[0_-4px_20px_rgba(0,0,0,0.12)] sm:hidden"
    >
      <MessageCircle className="h-4 w-4" fill="white" strokeWidth={0} />
      Book Your Seat on WhatsApp
    </a>
  );
}
