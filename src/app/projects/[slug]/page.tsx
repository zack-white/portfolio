import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/data/content";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.oneLiner,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);
  if (!project) notFound();

  return (
    <div className="bg-grid pt-24 min-h-screen">
      <article className="pt-8 pb-24 section">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to projects
        </Link>

        <header className="mb-10">
          <p className="text-xs font-mono text-[var(--color-accent)] mb-2">
            {project.categoryLabel}
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-[var(--color-text)] mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] mb-6 max-w-2xl">
            {project.oneLiner}
          </p>
          <div className="flex flex-wrap gap-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                View live site
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-text-muted)] hover:bg-[var(--color-bg-elevated)] transition-colors"
              >
                View repo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </header>

        {project.screenshots.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-6">
              Screenshots
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {project.screenshots.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-card)]"
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">
              Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[var(--color-bg-card)] text-sm font-mono text-[var(--color-text-muted)] border border-[var(--color-border)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">
              Contributions
            </h2>
            <ul className="space-y-3 text-[var(--color-text-muted)]">
              {project.contributions.map((c, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[var(--color-accent)] shrink-0">·</span>
                  {c}
                </li>
              ))}
            </ul>
          </section>

          {project.impact.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                Impact
              </h2>
              <div className="flex flex-wrap gap-6">
                {project.impact.map(({ metric, label }, i) => (
                  <div key={i} className="flex items-baseline gap-2">
                    {metric && (
                      <span className="font-mono text-lg font-medium text-[var(--color-accent)]">
                        {metric}
                      </span>
                    )}
                    <span className="text-[var(--color-text-muted)]">{label}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </div>
  );
}
