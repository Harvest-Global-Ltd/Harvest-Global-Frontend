// components/SmoothScroll.tsx
"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.01,         // Scroll intensity (lower = smoother)
        duration: 1.5,     // Animation duration in seconds
        smoothWheel: true  // Smooth mouse wheel scrolling
      }}
    >
      {children}
    </ReactLenis>
  );
}