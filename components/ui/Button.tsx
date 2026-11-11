"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type ButtonVariant =
  | "black"
  | "white"
  | "stroke-black"
  | "stroke-white"
  // Backwards compatibility aliases
  | "primary"
  | "secondary"
  | "outline";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "black",
  children,
  className = "",
  onMouseEnter,
  onMouseLeave,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, size: 0 });

  // Normalize alias variants to new core variants
  const resolvedVariant: "black" | "white" | "stroke-black" | "stroke-white" =
    variant === "primary"
      ? "black"
      : variant === "secondary"
      ? "white"
      : variant === "outline"
      ? "stroke-white"
      : variant;

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate maximum distance to button corners to fully envelop button
      const maxDist = Math.max(
        Math.hypot(x, y),
        Math.hypot(rect.width - x, y),
        Math.hypot(x, rect.height - y),
        Math.hypot(rect.width - x, rect.height - y)
      );

      setCursorPos({ x, y, size: maxDist * 2 });
      setIsHovered(true);
    }
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setCursorPos((prev) => ({ ...prev, x, y }));
      setIsHovered(false);
    }
    onMouseLeave?.(e);
  };

  // Base pill shape matching the uploaded design
  const baseStyles =
    "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-300 select-none cursor-pointer";

  // Variant outer shell and default text/border colors
  // When hovered, text color inverts to contrast against the expanding circle:
  // - black (black button + white expanding circle) => text becomes black on hover
  // - white (white button + black expanding circle) => text becomes white on hover
  // - stroke-black (transparent button + black expanding circle) => text becomes white on hover
  // - stroke-white (transparent button + white expanding circle) => text becomes black on hover
  const variantStyles = {
    black:
      "bg-[#212121] text-white border border-[#212121] hover:text-[#212121]",
    white:
      "bg-white text-[#212121] border border-white hover:text-white",
    "stroke-black":
      "bg-transparent text-[#212121] border border-[#212121] hover:text-white",
    "stroke-white":
      "bg-transparent text-white border border-white hover:text-[#212121]",
  };

  // Expanding circle color based on variant
  // On black & stroke-white: expanding circle is white
  // On white & stroke-black: expanding circle is black (#212121)
  const circleBg =
    resolvedVariant === "black" || resolvedVariant === "stroke-white"
      ? "bg-white"
      : "bg-[#212121]";

  return (
    <a
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${baseStyles} ${variantStyles[resolvedVariant]} ${className}`}
      {...props}
    >
      {/* Expanding circle background from mouse entry point */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            aria-hidden="true"
            initial={{
              width: 0,
              height: 0,
              x: "-50%",
              y: "-50%",
              opacity: 1,
            }}
            animate={{
              width: cursorPos.size,
              height: cursorPos.size,
              x: "-50%",
              y: "-50%",
              opacity: 1,
            }}
            exit={{
              width: 0,
              height: 0,
              x: "-50%",
              y: "-50%",
              opacity: 0,
              transition: { duration: 0.35, ease: "easeInOut" },
            }}
            transition={{
              duration: 0.5,
              ease: [0.19, 1, 0.22, 1], // Smooth cubic-bezier
            }}
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
            }}
            className={`pointer-events-none absolute rounded-full ${circleBg}`}
          />
        )}
      </AnimatePresence>

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-3 pointer-events-none">
        {children}
      </span>
    </a>
  );
}
