"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, type ProjectCategory } from "@/data/content";

const FILTERS: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full-Stack / Backend" },
  { id: "ml", label: "ML / Data" },
  { id: "systems", label: "Systems" },
];

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="pt-8 pb-24 section">
      <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-2">
        Projects
      </h2>
      <p className="text-[var(--color-text-muted)] mb-10 max-w-xl">
        Production systems, ML pipelines, and performance-focused work.
      </p>

      <div className="flex flex-wrap gap-2 mb-12">
        {FILTERS.map(({ id, label }) => (
          <motion.button
            key={id}
            onClick={() => setFilter(id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              filter === id
                ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
                : "bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] border border-[var(--color-border)]"
            }`}
          >
            {label}
          </motion.button>
        ))}
      </div>

      <div className="space-y-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 sm:p-8 hover:border-[var(--color-text-muted)]/40 transition-colors duration-300"
            >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div>
                <p className="text-xs font-mono text-[var(--color-accent)] mb-1">
                  {project.categoryLabel}
                </p>
                <h3 className="text-xl font-semibold text-[var(--color-text)]">
                  {project.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-4 shrink-0">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
                  >
                    View live
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--color-link)] hover:text-[var(--color-link-hover)]"
                  >
                    View repo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <p className="text-[var(--color-text-muted)] mb-5">
              {project.oneLiner}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[var(--color-bg)] text-xs font-mono text-[var(--color-text-muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <ul className="text-sm text-[var(--color-text-muted)] space-y-1.5 mb-5">
              {project.contributions.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[var(--color-accent)]">·</span>
                  {c}
                </li>
              ))}
            </ul>
            {project.impact.length > 0 && (
              <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--color-border)]">
                {project.impact.map(({ metric, label }, i) => (
                  <div key={i} className="flex items-baseline gap-2">
                    {metric && (
                      <span className="font-mono font-medium text-[var(--color-accent)]">
                        {metric}
                      </span>
                    )}
                    <span className="text-sm text-[var(--color-text-muted)]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
