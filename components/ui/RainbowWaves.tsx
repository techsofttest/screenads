"use client";

import { motion } from "framer-motion";

export function RainbowWaves() {
  // 7 stylish rainbow colors
  const waves = [
    { color: "#ff4d4d", opacity: 0.18, duration: 16, delay: 0 },   // Red
    { color: "#ff944d", opacity: 0.20, duration: 20, delay: 1.5 }, // Orange
    { color: "#ffd24d", opacity: 0.22, duration: 15, delay: 0.8 }, // Yellow
    { color: "#4ddb92", opacity: 0.20, duration: 22, delay: 2.2 }, // Green
    { color: "#4da8ff", opacity: 0.22, duration: 18, delay: 0.4 }, // Blue
    { color: "#6e66ff", opacity: 0.20, duration: 21, delay: 2.0 }, // Indigo
    { color: "#bf55ec", opacity: 0.18, duration: 17, delay: 1.2 }, // Violet
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none sticky top-0 left-0 h-screen w-full select-none overflow-hidden"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {waves.map((wave, index) => {
          // Stepped offset so all 7 rainbow bands flow parallel across the diagonal
          const offset = (index - 3) * 36;

          // Corner-to-corner anchors: starting near top-left (-60, -60), arching deeply toward bottom-right (1500, 960)
          const startX = -60 + offset;
          const startY = -60 - offset;
          const endX = 1500 + offset;
          const endY = 960 + offset;

          return (
            <motion.path
              key={index}
              fill="none"
              stroke={wave.color}
              strokeWidth={32}
              strokeLinecap="round"
              strokeOpacity={wave.opacity}
              initial={{
                d: `M${startX},${startY} C${300 + offset},${550 + offset} ${950 + offset},${250 - offset} ${endX},${endY}`,
              }}
              animate={{
                d: [
                  `M${startX},${startY} C${260 + offset},${580 + offset} ${920 + offset},${280 - offset} ${endX},${endY}`,
                  `M${startX},${startY} C${380 + offset},${440 + offset} ${1060 + offset},${390 - offset} ${endX},${endY}`,
                  `M${startX},${startY} C${180 + offset},${640 + offset} ${850 + offset},${220 - offset} ${endX},${endY}`,
                  `M${startX},${startY} C${260 + offset},${580 + offset} ${920 + offset},${280 - offset} ${endX},${endY}`,
                ],
              }}
              transition={{
                duration: wave.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: wave.delay,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
