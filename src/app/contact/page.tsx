import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact — Zachary White",
  description: "Open to new grad software engineering opportunities starting Summer 2026.",
};

export default function ContactPage() {
  return (
    <div className="bg-grid pt-24 min-h-screen">
      <Contact />
    </div>
  );
}
