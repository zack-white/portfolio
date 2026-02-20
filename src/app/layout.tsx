import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import LoadingScreen from "@/components/LoadingScreen";
import BackgroundEffects from "@/components/BackgroundEffects";

export const metadata: Metadata = {
  title: {
    default: "Zachary White",
    template: "Zachary White | %s",
  },
  description:
    "Full-stack and backend engineer focused on performance, data systems, and real-world impact. Tufts CS '26. Open to new grad SWE roles Summer 2026.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
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
        <Analytics />
      </body>
    </html>
  );
}
