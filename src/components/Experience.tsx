"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EXPERIENCE, EDUCATION } from "@/data/content";

const fadeUp = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } };

export default function Experience() {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={{ animate: { transition: { staggerChildren: 0.06 } } }}
      className="pt-8 pb-24 section"
    >
      <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-2">
        Experience
      </h2>
      <p className="text-[var(--color-text-muted)] mb-12 max-w-xl">
        Engineering leadership, research, and cross-functional roles.
      </p>

      <div className="space-y-12">
        {EXPERIENCE.map((job) => (
          <motion.div key={job.role} variants={fadeUp} transition={{ duration: 0.4 }} className="border-b border-[var(--color-border)] pb-12 last:border-0 last:pb-0">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
              <div className="flex items-start gap-4">
                {job.logo && (
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-card)] flex-shrink-0">
                    <Image
                      src={job.logo}
                      alt=""
                      fill
                      className="object-contain p-1"
                      sizes="48px"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {job.role}
                  </h3>
                  <p className="text-[var(--color-accent)] text-sm mt-1">{job.org}</p>
                </div>
              </div>
              <span className="text-sm text-[var(--color-text-muted)] font-mono sm:mt-1">
                {job.period}
              </span>
            </div>
            <ul className="space-y-2 text-[var(--color-text-muted)] mt-4">
              {job.highlights.map((h, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[var(--color-accent)] shrink-0">·</span>
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeUp} transition={{ duration: 0.4 }} className="mt-16 pt-12 border-t border-[var(--color-border)]">
        <div className="flex items-start gap-4 mb-2">
          {EDUCATION.logo && (
            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-card)] flex-shrink-0">
              <Image
                src={EDUCATION.logo}
                alt=""
                fill
                className="object-contain p-1"
                sizes="48px"
              />
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">
              Education
            </h3>
            <p className="text-[var(--color-accent)] text-sm">
              {EDUCATION.school}
            </p>
          </div>
        </div>
        <p className="text-[var(--color-text-muted)] text-sm mb-4 mt-4">
          {EDUCATION.degree} · Expected {EDUCATION.expected} · GPA {EDUCATION.gpa}
        </p>
        <ul className="space-y-1 text-sm text-[var(--color-text-muted)] mb-4">
          {EDUCATION.highlights.map((h, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[var(--color-accent)]">·</span>
              {h}
            </li>
          ))}
        </ul>
        <p className="text-xs text-[var(--color-text-muted)]">
          Coursework: {EDUCATION.coursework.join(", ")}
        </p>
      </motion.div>
    </motion.section>
  );
}
