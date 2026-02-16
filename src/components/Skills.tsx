"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/data/content";

const GROUPS = [
  { label: "Languages", items: SKILLS.languages },
  { label: "Frameworks & Web", items: SKILLS.frameworks },
  { label: "Data / ML", items: SKILLS.dataMl },
  { label: "Tools & Infra", items: SKILLS.tools },
  { label: "Systems / Performance", items: SKILLS.systems },
] as const;

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-8 pb-24 section"
    >
      <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-2">
        Skills
      </h2>
      <p className="text-[var(--color-text-muted)] mb-12 max-w-xl">
        Core stack: TypeScript, Next.js, Postgres, Python. Performance-oriented systems exposure in C/C++.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {GROUPS.map(({ label, items }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 + i * 0.05 }}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 hover:border-[var(--color-text-muted)]/30 transition-colors duration-300"
          >
            <h3 className="text-sm font-medium text-[var(--color-accent)] mb-3">
              {label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded bg-[var(--color-bg)] text-xs text-[var(--color-text-muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
