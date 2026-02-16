"use client";

import { useEffect } from "react";

export default function BackgroundEffects() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--mouse-x", `${x}`);
      document.documentElement.style.setProperty("--mouse-y", `${y}`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* Soft gradient orbs - calm drift */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full opacity-[0.1] blur-[100px]"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 60%)",
          top: "5%",
          left: "0%",
          animation: "orb-drift 25s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[90px]"
        style={{
          background: "radial-gradient(circle, var(--color-link) 0%, transparent 60%)",
          top: "50%",
          right: "-5%",
          animation: "orb-drift 30s ease-in-out infinite alternate-reverse",
          animationDelay: "-8s",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[80px]"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 60%)",
          bottom: "0%",
          left: "20%",
          animation: "orb-drift 28s ease-in-out infinite alternate",
          animationDelay: "-4s",
        }}
      />
      {/* Mouse-follow glow */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          background: "radial-gradient(circle 400px at calc(var(--mouse-x, 50) * 1%) calc(var(--mouse-y, 50) * 1%), var(--color-accent), transparent 70%)",
        }}
      />
    </div>
  );
}
