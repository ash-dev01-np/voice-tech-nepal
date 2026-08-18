"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { revealMedium, staggerContainer, viewport } from "@/lib/animations";

const coaches = [
  {
    name: "Hemant Sapkota",
    role: "Lead Coach · Public Speaking & Leadership",
    photo: "/photos/hemant-sapkota.jpg",
  },
  {
    name: "Sandhya Baral",
    role: "Coach · Communication & Personality Development",
    photo: "/photos/sandhya-baral.jpg",
  },
];

export default function Coaches() {
  return (
    <Section id="coaches" background="white">
      <Container>
        <SectionHeading
          eyebrow="Meet your coaches"
          title="Experienced trainers, thousands of learners"
          subtitle="Coaches who have worked with learners across Nepal, in classrooms, workplaces and on stage."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-8 sm:grid-cols-2"
        >
          {coaches.map((coach) => (
            <motion.div key={coach.name} variants={revealMedium} className="flex items-center gap-5">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-[var(--border)]">
                <Image src={coach.photo} alt={coach.name} fill sizes="80px" className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--ink)]">{coach.name}</h3>
                <p className="mt-1 text-sm leading-6 text-[var(--body)]">{coach.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
