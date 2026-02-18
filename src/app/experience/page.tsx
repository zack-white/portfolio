import Experience from "@/components/Experience";

export const metadata = {
  title: "Experience",
  description: "Engineering leadership, research, and professional experience.",
};

export default function ExperiencePage() {
  return (
    <div className="bg-grid pt-24 min-h-screen">
      <Experience />
    </div>
  );
}
