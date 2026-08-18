"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { revealMedium, viewport } from "@/lib/animations";
import { SITE, whatsappLink, BOOK_MESSAGE } from "@/lib/content";

export default function Contact() {
  return (
    <Section id="contact" background="white">
      <Container>
        <SectionHeading
          eyebrow="Contact & booking"
          title="Reach out directly to confirm your seat"
          subtitle="Share your name, age, preferred time and whether you want the online or offline class."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            variants={revealMedium}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <div className="space-y-5">
              <a href={whatsappLink(BOOK_MESSAGE)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-white p-4 transition-colors hover:border-[var(--accent)]/30">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--ink)]">WhatsApp</p>
                  <p className="text-sm text-[var(--body)]">{SITE.phones.join(" / ")}</p>
                </div>
              </a>

              {SITE.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-white p-4 transition-colors hover:border-[var(--accent)]/30">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-tint)] text-[var(--accent)]">
                    <Phone className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--ink)]">Call</p>
                    <p className="text-sm text-[var(--body)]">{phone}</p>
                  </div>
                </a>
              ))}

              <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-white p-4 transition-colors hover:border-[var(--accent)]/30">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-tint)] text-[var(--accent)]">
                  <Mail className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--ink)]">Email</p>
                  <p className="text-sm text-[var(--body)]">{SITE.email}</p>
                </div>
              </a>
            </div>

            <Button href={whatsappLink(BOOK_MESSAGE)} className="mt-6 w-full">
              Message on WhatsApp
            </Button>
          </motion.div>

          <motion.div
            variants={revealMedium}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ delay: 0.1 }}
            className="flex flex-col justify-between rounded-3xl border border-[var(--border)] bg-[var(--chrome)] p-8 text-white"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">Location</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">
                {SITE.address}
                <br />
                {SITE.venue}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/45">
                Easy access for students and professionals around Jadibuti,
                Koteshwor and nearby areas.
              </p>
            </div>

            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:text-[#ff7a95]"
            >
              View our location on Google Maps
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
