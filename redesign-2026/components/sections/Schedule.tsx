"use client";

import { motion } from "framer-motion";
import { Clock, ExternalLink, MapPin, Monitor } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { revealMedium, revealSmall, staggerContainer, viewport } from "@/lib/animations";
import { SITE, offlineTimes } from "@/lib/content";

export default function Schedule() {
  return (
    <Section id="schedule" background="white">
      <Container>
        <SectionHeading
          eyebrow="Class time & location"
          title="Choose the time that fits your routine"
          subtitle="New batch starts every Sunday. Pick offline in Jadibuti or online over Google Meet."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            variants={revealMedium}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="rounded-3xl border border-[var(--border)] bg-white p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-tint)] text-[var(--accent)]">
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--ink)]">Offline Classes — Jadibuti</h3>
                <p className="text-sm text-[var(--muted)]">{SITE.venue}</p>
              </div>
            </div>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mt-6 grid grid-cols-2 gap-3"
            >
              {offlineTimes.map((time) => (
                <motion.li
                  key={time}
                  variants={revealSmall}
                  className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-medium text-[var(--ink)]"
                >
                  <Clock className="h-4 w-4 text-[var(--accent)]" strokeWidth={1.75} />
                  {time}
                </motion.li>
              ))}
            </motion.ul>

            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)]"
            >
              View location on Google Maps
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          <motion.div
            variants={revealMedium}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-[var(--border)] bg-[var(--chrome)] p-8 text-white"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                <Monitor className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Online Classes — Google Meet</h3>
                <p className="text-sm text-white/50">Live session, same practice structure</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white">
              <Clock className="h-4 w-4 text-[var(--accent)]" strokeWidth={1.75} />
              8:00 PM – 10:00 PM
            </div>

            <p className="mt-6 text-sm leading-6 text-white/55">
              Live feedback and recording-based review, so you can watch your
              own progress from session to session.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
