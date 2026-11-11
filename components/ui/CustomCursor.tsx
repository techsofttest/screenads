"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    let rafId: number;
    let mouseX = -100;
    let mouseY = -100;

    let prevX = -100;
    let prevY = -100;

    const updatePosition = () => {
      if (cursor) {
        // Calculate velocity (distance traveled between frames)
        const dx = mouseX - prevX;
        const dy = mouseY - prevY;
        const speed = Math.hypot(dx, dy);

        // Clamp elongation factor between 1 and 1.6
        const stretch = Math.min(1 + speed * 0.015, 1.6);
        const squish = 1 / stretch;

        // Angle of motion in degrees
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) rotate(${angle}deg) scale(${stretch}, ${squish})`;

        prevX = mouseX;
        prevY = mouseY;
      }
    };

    let stopTimeout: NodeJS.Timeout;

    const resetShape = () => {
      if (cursor) {
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(1, 1)`;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Make visible on first move
      if (cursor.style.opacity !== "1") {
        cursor.style.opacity = "1";
      }

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updatePosition);

      // Return to a circle as soon as movement stops
      clearTimeout(stopTimeout);
      stopTimeout = setTimeout(resetShape, 50);

      // Check if hovering over an interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = Boolean(
          target.closest(
            'a, button, input, select, textarea, [role="button"], [data-cursor="pointer"]'
          )
        );
        setIsHovered(interactive);
      }
    };

    // Keep tracking during drag / mouse selection
    const handleDragOver = (e: DragEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updatePosition);

      clearTimeout(stopTimeout);
      stopTimeout = setTimeout(resetShape, 50);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerMove, { passive: true });
    window.addEventListener("dragover", handleDragOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerMove);
      window.removeEventListener("dragover", handleDragOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        opacity: 0,
        transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
      }}
      className={`pointer-events-none fixed left-0 top-0 z-[99999] rounded-full bg-white mix-blend-difference will-change-transform transition-[width,height] duration-200 ease-out ${
        isHovered ? "h-16 w-16" : "h-3.5 w-3.5"
      }`}
    />
  );
}
