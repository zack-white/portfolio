"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/content";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  return (
    <section className="pt-8 pb-24 section">
      <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-2">
        Blog
      </h2>
      <p className="text-[var(--color-text-muted)] mb-12 max-w-xl">
        Technical notes, project reflections, and ideas.
      </p>

      <div className="space-y-8">
        {BLOG_POSTS.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="block rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 sm:p-8 hover:border-[var(--color-text-muted)]/40 transition-colors duration-300 group"
            >
              <p className="text-xs font-mono text-[var(--color-accent)] mb-2">
                {formatDate(post.date)}
              </p>
              <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                {post.title}
              </h3>
              <p className="text-[var(--color-text-muted)] mb-4">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[var(--color-bg)] text-xs font-mono text-[var(--color-text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
