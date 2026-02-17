"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PERSONAL, HERO_INTRO, CTA_COPY } from "@/data/content";

const fadeUpTransition = { duration: 0.5, ease: "easeOut" as const };
const stagger = 0.08;

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center pt-20 pb-16 section"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-12">
        <div className="flex-1 min-w-0 order-2 md:order-1">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...fadeUpTransition, delay: stagger * 0 }}
        className="text-sm font-mono text-[var(--color-accent)] mb-4"
      >
        Tufts CS &apos;26 · B.S. Computer Science, Minor in Philosophy
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...fadeUpTransition, delay: stagger * 1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--color-text)] leading-tight mb-6 max-w-2xl"
      >
        {PERSONAL.name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...fadeUpTransition, delay: stagger * 2 }}
        className="text-lg sm:text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed mb-8"
      >
        {PERSONAL.tagline}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...fadeUpTransition, delay: stagger * 3 }}
        className="text-[var(--color-text-muted)] max-w-2xl leading-relaxed mb-10"
      >
        {HERO_INTRO}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...fadeUpTransition, delay: stagger * 4 }}
        className="text-sm text-[var(--color-text-muted)] max-w-2xl mb-12 italic"
      >
        {CTA_COPY}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...fadeUpTransition, delay: stagger * 5 }}
        className="flex flex-wrap gap-4"
      >
        <a
          href={PERSONAL.resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-accent-hover)] transition-all duration-300"
        >
          Resume
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <a
          href={PERSONAL.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-text-muted)] hover:bg-[var(--color-bg-elevated)] transition-all duration-300"
        >
          LinkedIn
        </a>
        <a
          href={PERSONAL.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-text-muted)] hover:bg-[var(--color-bg-elevated)] transition-all duration-300"
        >
          GitHub
        </a>
      </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-shrink-0 order-1 md:order-2"
        >
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-[var(--color-border)] ring-2 ring-[var(--color-accent)]/20">
            <Image
              src="/headshot.jpg"
              alt="Zachary White"
              fill
              sizes="(max-width: 768px) 208px, 256px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
