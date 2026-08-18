"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { revealMedium, revealSmall, staggerContainer } from "@/lib/animations";
import { SITE, whatsappLink, BOOK_MESSAGE } from "@/lib/content";

export default function Hero() {
  return (
    <Section background="chrome" className="pt-14 pb-20 lg:pt-20 lg:pb-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.p variants={revealSmall} className="text-sm font-medium text-white/50">
              New batch every Sunday · {SITE.address}
            </motion.p>

            <motion.h1
              variants={revealMedium}
              className="mt-4 text-[2.25rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.1rem]"
            >
              2 weeks to speak with a voice you trust
            </motion.h1>

            <motion.p variants={revealSmall} className="mt-6 max-w-lg text-lg leading-8 text-white/65">
              Hands shake, voice trembles — that&rsquo;s where most people start.
              We work on how you stand, breathe and structure your words, so
              you can speak with clarity on stage, in class, at work and in
              life.
            </motion.p>

            <motion.p variants={revealSmall} lang="ne" className="mt-5 text-lg text-white/45">
              &ldquo;{SITE.tagline}&rdquo;
            </motion.p>

            <motion.div variants={revealSmall} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={whatsappLink(BOOK_MESSAGE)} size="lg">
                Book Your Seat
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#schedule" variant="ghost" size="lg" className="border border-white/15">
                View Class Times
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/photos/gallery-3.jpg"
                alt="A Voice Tech Nepal coach leading a public speaking workshop in Kathmandu"
                width={1080}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <p className="mt-3 text-sm text-white/40">
              A live session from a recent bootcamp in Jadibuti.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
