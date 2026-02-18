import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/content";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="bg-grid pt-24 min-h-screen">
      <article className="pt-8 pb-24 section">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to blog
        </Link>
        <header className="mb-10">
          <p className="text-xs font-mono text-[var(--color-accent)] mb-2">
            {formatDate(post.date)}
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-[var(--color-text)] mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded bg-[var(--color-bg-card)] text-xs font-mono text-[var(--color-text-muted)] border border-[var(--color-border)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>
        <div className="prose prose-invert max-w-none">
          <p className="text-[var(--color-text-muted)] leading-relaxed whitespace-pre-wrap">
            {post.body}
          </p>
        </div>
      </article>
    </div>
  );
}
