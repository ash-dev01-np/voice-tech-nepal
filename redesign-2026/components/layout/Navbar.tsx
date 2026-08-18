"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import clsx from "clsx";

import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { ease } from "@/lib/animations";
import { SITE, whatsappLink, BOOK_MESSAGE } from "@/lib/content";

const navLinks = [
  { label: "Skills", href: "/#skills" },
  { label: "Schedule", href: "/#schedule" },
  { label: "Coaches", href: "/#coaches" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => setIsScrolled(latest > 24));

  const close = () => setIsOpen(false);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300",
        isScrolled
          ? "border-[var(--border)] bg-white/95 shadow-[0_4px_24px_rgba(28,25,23,0.06)] backdrop-blur-md"
          : "border-transparent bg-white/70 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link href="/" aria-label="Voice Tech Nepal home" className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm font-medium text-[var(--body)] transition-colors hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-sm text-sm font-medium text-[var(--body)] transition-colors hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          >
            <Phone className="h-4 w-4 text-[var(--accent)]" strokeWidth={1.75} />
            {SITE.phones[0]}
          </a>
          <Button href={whatsappLink(BOOK_MESSAGE)} size="sm">
            Book Now
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[var(--ink)] transition-colors hover:bg-black/5 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((o) => !o)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden border-t border-[var(--border)] bg-white lg:hidden"
          >
            <nav className="mx-auto max-w-6xl px-6 py-6" aria-label="Mobile navigation">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={close}
                      className="block rounded-md px-3 py-3 text-base font-medium text-[var(--ink)] transition-colors hover:bg-[var(--surface)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-col gap-3 border-t border-[var(--border)] pt-5">
                <a
                  href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--body)]"
                >
                  <Phone className="h-4 w-4 text-[var(--accent)]" strokeWidth={1.75} />
                  {SITE.phones[0]}
                </a>
                <Button href={whatsappLink(BOOK_MESSAGE)} onClick={close} className="w-full">
                  Book Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
