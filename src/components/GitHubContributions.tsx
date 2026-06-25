"use client";

import { useEffect, useState } from "react";

const username = "zack-white";

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type ContributionResponse = {
  total: Record<string, number>;
  contributions: ContributionDay[];
};

const levelClasses = [
  "bg-[color:rgba(148,163,184,0.14)]",
  "bg-[color:rgba(94,234,212,0.20)]",
  "bg-[color:rgba(45,212,191,0.42)]",
  "bg-[color:rgba(20,184,166,0.68)]",
  "bg-[color:rgba(13,148,136,0.92)]",
];

export default function GitHubContributions() {
  const year = new Date().getFullYear();
  const [data, setData] = useState<ContributionDay[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadContributions() {
      try {
        setError(null);
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`,
          { cache: "no-store" }
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const json = (await response.json()) as ContributionResponse;
        if (cancelled) return;

        setData(json.contributions);
        setTotal(json.total[String(year)] ?? null);
      } catch (err) {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Unable to load contributions");
      }
    }

    loadContributions();

    return () => {
      cancelled = true;
    };
  }, [year]);

  const cells = data ?? Array.from({ length: 371 }, () => ({ date: "", count: 0, level: 0 }));
  const tooltip = total !== null ? `${total.toLocaleString()} contributions in ${year}` : "Loading contribution data";

  return (
    <section className="section pb-16">
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/70 p-5 sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--color-text)]">
              GitHub Contributions - {year}
            </h2>
            <p className="text-sm text-[var(--color-text-muted)] mt-1">
              Live contribution graph for the calendar year.
            </p>
          </div>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-accent)] hover:underline"
          >
            View profile
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
            <span>{error ? "Tracker unavailable" : tooltip}</span>
            <div className="flex items-center gap-2">
              <span>Less</span>
              {levelClasses.map((cls, index) => (
                <span
                  key={cls}
                  className={`h-3 w-3 rounded-sm border border-white/5 ${cls}`}
                  aria-hidden
                />
              ))}
              <span>More</span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-3">
            {error ? (
              <div className="min-h-[128px] flex items-center justify-center text-sm text-[var(--color-text-muted)]">
                Could not load the contribution calendar.
              </div>
            ) : (
              <div className="grid min-w-[720px] grid-flow-col grid-rows-7 gap-1">
                {cells.map((day, index) => {
                  const level = Math.max(0, Math.min(day.level ?? 0, levelClasses.length - 1));
                  const title = day.date
                    ? `${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`
                    : "Loading...";

                  return (
                    <div
                      key={`${day.date || "placeholder"}-${index}`}
                      title={title}
                      aria-label={title}
                      className={`h-3 w-3 rounded-sm border border-white/5 ${levelClasses[level]}`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
