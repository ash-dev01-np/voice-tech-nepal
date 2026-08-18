"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { whatsappLink, BOOK_MESSAGE } from "@/lib/content";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink(BOOK_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] sm:flex"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
    </motion.a>
  );
}
