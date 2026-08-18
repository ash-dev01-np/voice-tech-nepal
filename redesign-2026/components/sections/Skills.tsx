"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { revealSmall, staggerContainer, viewport } from "@/lib/animations";

const skills = [
  {
    title: "Stage Confidence",
    description: "Mental tools to handle nervousness and speak with calm energy, even under pressure.",
  },
  {
    title: "Voice & Pronunciation",
    description: "Projection, clarity and simple daily drills so you sound clear and confident every time.",
  },
  {
    title: "Storytelling & Structure",
    description: "Open, Story, Message, Call to action — one easy structure you can reuse for any speech.",
  },
  {
    title: "Leadership Presence",
    description: "Eye contact, body language and audience connection that make a room listen.",
  },
  {
    title: "Exam & Interview Speaking",
    description: "Built for IELTS / PTE speaking rounds, job interviews and workplace presentations.",
  },
  {
    title: "Hosting & Anchoring",
    description: "Formal program hosting, moderation and MC skills for events and ceremonies.",
  },
];

export default function Skills() {
  return (
    <Section id="skills" background="tint">
      <Container>
        <SectionHeading
          eyebrow="What you'll build"
          title="Skills You Build With Us"
          subtitle="Designed for students, professionals, teachers and anyone who wants to speak with impact."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-x-10 gap-y-8 sm:grid-cols-2"
        >
          {skills.map(({ title, description }, i) => (
            <motion.div
              key={title}
              variants={revealSmall}
              className="flex gap-4 border-t border-[var(--border)] pt-5"
            >
              <span className="font-mono text-sm text-[var(--accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-[var(--ink)]">{title}</h3>
                <p className="mt-1.5 text-[15px] leading-6 text-[var(--body)]">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
