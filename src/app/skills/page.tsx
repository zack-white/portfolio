import Skills from "@/components/Skills";

export const metadata = {
  title: "Skills — Zachary White",
  description: "TypeScript, Next.js, Postgres, Python, and systems/performance experience.",
};

export default function SkillsPage() {
  return (
    <div className="bg-grid pt-24 min-h-screen">
      <Skills />
    </div>
  );
}
