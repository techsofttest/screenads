import React from "react";

interface SectionHeadingProps {
  label?: string;
  title?: string;
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div className={`grid gap-12 lg:grid-cols-12 ${className}`}>
      {label && (
        <div className="lg:col-span-4">
          <p
            className={`font-display text-sm font-medium ${
              isDark ? "text-white/60" : "text-[#212121]/60"
            }`}
          >
            {label}
          </p>
        </div>
      )}

      {title && (
        <div className={label ? "lg:col-span-8" : "lg:col-span-12"}>
          <h2
            className={`font-display text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl ${
              isDark ? "text-white" : "text-[#212121]"
            }`}
          >
            {title}
          </h2>
        </div>
      )}
    </div>
  );
}

