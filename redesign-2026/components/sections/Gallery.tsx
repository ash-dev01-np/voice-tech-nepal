"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { revealSmall, staggerContainer, viewport } from "@/lib/animations";

const photos = [
  { src: "/photos/gallery-1.jpg", alt: "A coach speaking at a Voice Tech Nepal workshop" },
  { src: "/photos/gallery-2.jpg", alt: "Hemant Sapkota coaching at an advanced public speaking workshop" },
  { src: "/photos/gallery-3.jpg", alt: "A speaker presenting at a leadership and personality mastery workshop" },
  { src: "/photos/gallery-4.jpg", alt: "A learner practicing public speaking on stage" },
  { src: "/photos/gallery-5.jpg", alt: "A student speaking at a Voice Tech Nepal session" },
];

export default function Gallery() {
  return (
    <Section background="tint">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from class"
          subtitle="Real sessions and workshops — more photos added as each batch wraps."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 gap-3 lg:grid-cols-3"
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.src}
              variants={revealSmall}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--border)]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
