import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import LoadingScreen from "@/components/LoadingScreen";
import BackgroundEffects from "@/components/BackgroundEffects";

export const metadata: Metadata = {
  title: "Zachary White — Full-Stack + Backend Engineer",
  description:
    "Full-stack and backend engineer focused on performance, data systems, and real-world impact. Tufts CS '26. Open to new grad SWE roles Summer 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-[var(--color-bg)]">
        <div className="fixed inset-0 z-[1]" aria-hidden>
          <BackgroundEffects />
        </div>
        <div className="relative z-[10]">
          <LoadingScreen />
          <Header />
          <main className="pb-24">
            <PageTransition>{children}</PageTransition>
          </main>
        </div>
      </body>
    </html>
  );
}
