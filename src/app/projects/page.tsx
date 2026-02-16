import Projects from "@/components/Projects";

export const metadata = {
  title: "Projects — Zachary White",
  description: "Production systems, ML pipelines, and performance-focused engineering projects.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-grid pt-24 min-h-screen">
      <Projects />
    </div>
  );
}
