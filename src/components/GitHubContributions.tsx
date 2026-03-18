"use client";

const username = "zack-white";

export default function GitHubContributions() {
  const year = new Date().getFullYear();
  const from = `${year}-01-01`;
  const to = `${year}-12-31`;
  const contributionsSvg = `https://github.com/users/${username}/contributions?from=${from}&to=${to}`;

  return (
    <section className="section pb-16">
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/70 p-5 sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-[var(--color-text)]">
            GitHub Contributions — {year}
          </h2>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-accent)] hover:underline"
          >
            View profile
          </a>
        </div>

        <p className="text-sm text-[var(--color-text-muted)] mb-4">
          Live contribution graph for the full {year} calendar year.
        </p>

        <div className="w-full overflow-x-auto rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-3">
          <img
            src={contributionsSvg}
            alt={`${username} GitHub contributions in ${year}`}
            className="min-w-[720px] w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
