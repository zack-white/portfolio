import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function usePageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const navigateWithTransition = (href: string, color: string = '#0f172a') => {
    // Trigger the global page transition with color
    if (typeof window !== 'undefined' && (window as any).triggerPageTransition) {
      (window as any).triggerPageTransition(color);
    }
    
    // Wait for overlay animation to complete, then navigate
    setTimeout(() => {
      router.push(href);
    }, 500); // Match the transition duration
  };

  const resetTransition = () => {
    setIsTransitioning(false);
  };

  return {
    isTransitioning,
    navigateWithTransition,
    resetTransition
  };
}
