import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import GitHubContributions from "@/components/GitHubContributions";

export default function Home() {
  return (
    <div className="bg-grid">
      <Hero />
      <GitHubContributions />
      <Contact />
    </div>
  );
}
