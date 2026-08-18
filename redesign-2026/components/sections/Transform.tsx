"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { revealSmall, staggerContainer, viewport } from "@/lib/animations";

const shifts = [
  ["Stage fear", "Calm, confident speaking"],
  ["Weak voice", "Clear, powerful projection"],
  ["Scattered ideas", "Structured speeches"],
  ["Shyness", "Leadership presence"],
];

export default function Transform() {
  return (
    <Section background="white" className="py-14 lg:py-16">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid divide-y divide-[var(--border)] border-y border-[var(--border)] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4"
        >
          {shifts.map(([from, to]) => (
            <motion.div key={from} variants={revealSmall} className="px-1 py-5 sm:px-6">
              <p className="text-sm text-[var(--muted)]">{from} →</p>
              <p className="mt-1 font-medium text-[var(--ink)]">{to}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
