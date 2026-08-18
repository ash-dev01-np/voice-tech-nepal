import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { SITE, whatsappLink, BOOK_MESSAGE } from "@/lib/content";

const quickLinks = [
  { label: "Skills You Build", href: "/#skills" },
  { label: "Class Time & Location", href: "/#schedule" },
  { label: "Meet Your Coaches", href: "/#coaches" },
  { label: "Contact & Booking", href: "/#contact" },
];

const linkStyles =
  "rounded-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--chrome)]";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[var(--chrome)] text-white/70">
      <Container className="relative z-10 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1.2fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
              A 2-week public speaking and communication bootcamp in Kathmandu —
              stage confidence, voice, storytelling and leadership, taught live
              and online.
            </p>
            <p lang="ne" className="mt-4 text-sm text-white/40">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkStyles}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Contact
            </h4>
            <div className="mt-5 space-y-3.5 text-sm text-white/60">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" strokeWidth={1.75} />
                <span>{SITE.address}</span>
              </div>
              <a href={`mailto:${SITE.email}`} className={`flex items-start gap-2.5 ${linkStyles}`}>
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" strokeWidth={1.75} />
                <span>{SITE.email}</span>
              </a>
              {SITE.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className={`flex items-start gap-2.5 ${linkStyles}`}>
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" strokeWidth={1.75} />
                  <span>{phone}</span>
                </a>
              ))}
              <a href={whatsappLink(BOOK_MESSAGE)} target="_blank" rel="noopener noreferrer" className={`flex items-start gap-2.5 ${linkStyles}`}>
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" strokeWidth={1.75} />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {year} Voice Tech Nepal. All rights reserved.</p>
          <span className="text-white/30">Kathmandu, Nepal</span>
        </div>
      </Container>
    </footer>
  );
}
