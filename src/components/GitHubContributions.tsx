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
  "bg-[color:rgba(34,197,94,0.10)]",
  "bg-[color:rgba(34,197,94,0.24)]",
  "bg-[color:rgba(34,197,94,0.44)]",
  "bg-[color:rgba(34,197,94,0.68)]",
  "bg-[color:rgba(34,197,94,0.96)]",
];

function buildFallbackCells() {
  const cells: ContributionDay[] = [];
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() - 364);

  for (let index = 0; index < 365; index += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    cells.push({
      date: date.toISOString().slice(0, 10),
      count: 0,
      level: 0,
    });
  }

  return cells;
}

export default function GitHubContributions() {
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 364);
  const [data, setData] = useState<ContributionDay[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadContributions() {
      try {
        setError(null);
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const json = (await response.json()) as ContributionResponse;
        if (cancelled) return;

        setData(json.contributions);
      } catch (err) {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Unable to load contributions");
      }
    }

    loadContributions();

    return () => {
      cancelled = true;
    };
  }, []);

  const contributionByDate = new Map(
    (data ?? []).map((day) => [day.date, day])
  );
  const cells =
    data?.length
      ? Array.from({ length: 365 }, (_, index) => {
          const date = new Date(startDate);
          date.setDate(startDate.getDate() + index);
          const isoDate = date.toISOString().slice(0, 10);
          const day = contributionByDate.get(isoDate);

          return {
            date: isoDate,
            count: day?.count ?? 0,
            level: day?.level ?? 0,
          };
        })
      : buildFallbackCells();
  const tooltip = error
    ? "Showing fallback calendar"
    : data
      ? "Last 365 days of contributions"
      : "Loading contribution data";

  return (
    <section className="section pb-16">
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/70 p-5 sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--color-text)]">
              GitHub Contributions - Last 365 Days
            </h2>
            <p className="text-sm text-[var(--color-text-muted)] mt-1">
              Live contribution graph for the trailing year.
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
            <span>{tooltip}</span>
            <div className="flex items-center gap-2">
              <span>Less</span>
              {levelClasses.map((cls, index) => (
                <span
                  key={cls}
                  className={`h-3 w-3 rounded-sm border border-[rgba(34,197,94,0.18)] ${cls}`}
                  aria-hidden
                />
              ))}
              <span>More</span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-3">
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
                    className={`h-3 w-3 rounded-sm border border-[rgba(34,197,94,0.12)] ${levelClasses[level]}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
