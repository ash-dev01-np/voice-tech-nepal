"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { revealSmall, staggerContainer, viewport } from "@/lib/animations";

const groups = [
  "Students & graduates",
  "Teachers & trainers",
  "Entrepreneurs & professionals",
  "Anyone wanting stronger confidence",
];

export default function WhoCanJoin() {
  return (
    <Section background="tint" className="py-14 lg:py-16">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Who can join?
          </h3>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-wrap gap-3"
          >
            {groups.map((label) => (
              <motion.span
                key={label}
                variants={revealSmall}
                className="inline-flex items-center rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--ink)]"
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
