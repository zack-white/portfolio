import Blog from "@/components/Blog";

export const metadata = {
  title: "Blog",
  description: "Technical notes, project reflections, and ideas on software engineering.",
};

export default function BlogPage() {
  return (
    <div className="bg-grid pt-24 min-h-screen">
      <Blog />
    </div>
  );
}
