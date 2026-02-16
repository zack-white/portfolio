"use client";

import { motion } from "framer-motion";
import { PERSONAL, CTA_COPY } from "@/data/content";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-8 pb-24 section"
    >
      <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-2">
        Contact
      </h2>
      <p className="text-[var(--color-text-muted)] mb-10 max-w-xl">
        {CTA_COPY}
      </p>

      <div className="flex flex-wrap gap-8">
        <motion.a
          href={`mailto:${PERSONAL.email}`}
          whileHover={{ x: 4 }}
          className="flex items-center gap-3 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-200 group"
        >
          <span className="w-10 h-10 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--color-accent)] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <span>{PERSONAL.email}</span>
        </motion.a>
        <motion.a
          href={`tel:${PERSONAL.phone.replace(/-/g, "")}`}
          whileHover={{ x: 4 }}
          className="flex items-center gap-3 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-200 group"
        >
          <span className="w-10 h-10 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--color-accent)] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
          <span>{PERSONAL.phone}</span>
        </motion.a>
        <motion.a
          href={PERSONAL.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 4 }}
          className="flex items-center gap-3 text-[var(--color-text)] hover:text-[var(--color-link)] transition-colors duration-200 group"
        >
          <span className="w-10 h-10 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--color-link)] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </span>
          <span>LinkedIn</span>
        </motion.a>
      </div>

      <p className="mt-12 text-sm text-[var(--color-text-muted)]">
        Based in Boston/Cambridge
      </p>
    </motion.section>
  );
}
